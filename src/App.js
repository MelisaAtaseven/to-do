import React, {useState} from 'react';
import {FontAwesomeIcon, fontAwesomeIcon} from '@fortawesome/react-fontawesome'

import{
   faCircleCheck, faPen, faTrashCan
} from '@fortawesome/free-solid-svg-icons'


import './App.css';


function App() {

  //Tasks state
const [toDo, setToDo] = useState([
  {"id": 1, "title": "task 1", "status": false},
  {"id": 2, "title": "task 2", "status": false}

]);

// temp state
const [newTask, setNewTask] = useState(''); 
const [updateData, setUpdateData] = useState('');

//add task
const addTask= () =>{
  if(newTask){
    let num = toDo . length +1;
    let newEntry ={ id:num, title: newTask, status:false}
    setToDo([...toDo, newEntry])
    setNewTask('');
  }
}

//delete task
const deleteTask= (id) =>{
  let newTasks =toDo.filter(task => task.id !== id )
  setToDo(newTasks);
}

//done or complated
const markDone= (id) =>{
  let newTask = toDo.map (task => {
    if(task.id === id){
      return ({...task, status: !task.status})
    }
    return task;
  })

  setToDo(newTask);
}

//cancel update 
const cancelUpdate= (id) =>{
  setUpdateData('') ;
}
//change task for update
const changeTask= (e) =>{
  //
}

//update task
const updateTask= () =>{
  //
}

  return (
    <div className="container mx-auto App">
     

<br/>
<h2> To Do App </h2>
<br/>

{/* update task */}
<div className="flex flex-col sm:flex-row items-center mb-4">
  <div className="flex-1">
    <input
    value={updateData && updateData.title }
    onChange={ (e) => changeTask(e)}
    className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-500" />
  </div>
  <div className="mt-4 sm:mt-0 sm:ml-3">
    <button className="px-4  py-2 bg-green-500 text-white rounded-lg focus:outline-none focus:ring focus:border-green-500 hover:bg-green-600 mr-2 sm:mr-0 mb-2 sm:mb-0">Update</button>
    <button className="px-4 ml-2 py-2 bg-yellow-500 text-white rounded-lg focus:outline-none focus:ring focus:border-yellow-500 hover:bg-yellow-600">Cancel</button>
  </div>
</div>


{/* add task */}
<div className="flex flex-col sm:flex-row items-center">
  <div className="flex-1">
    <input 
    value={newTask}
    onChange={(e) => setNewTask (e.target.value)}
    className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-500" />
  </div>
  <div className="ml-2 mt-2 sm:mt-0 flex-shrink-0">
    <button 
    onClick={addTask}
    className="px-4 py-2 bg-green-500 text-white rounded-lg focus:outline-none focus:ring focus:border-green-500 hover:bg-green-600">Add Task</button>
  </div>
</div>





<br/>

{/* display todo*/}

{toDo && toDo.length ? '' : 'No Tasks...'}

{toDo && toDo
.sort ((a,b) => a.id > b.id ? 1: -1)
.map ((task,index) => {
  return(
    <React.Fragment>
<div className=' flex  items-center col taskBg'>

<div className={task.status ? 'done' : ''}>
<span className='taskNumber'> {index + 1 } </span>
<span className='taskText'> {task.title} </span>
</div>
<div className='iconWrap'>
  <span title="Completed / Not Completed"
              onClick={(e) => markDone (task.id)}
  > <FontAwesomeIcon icon={faCircleCheck}/> </span>

{task.status ? null : (
  <span title=" Edit "
               onClick={() => setUpdateData({ 
               id: task.id,
               title: task.title,
               status: task.status ? true: false
              })}
  > <FontAwesomeIcon icon={faPen}/> </span>
)}
  


  <span title=" Delete "
                onClick={() => deleteTask (task.id)}
  > <FontAwesomeIcon icon={faTrashCan}/> </span>
</div>

</div>

  
    </React.Fragment>
  )
})
}

    </div>
  );
}

export default App;
