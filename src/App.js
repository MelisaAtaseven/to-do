import { useState } from 'react';
import AddTaskForm from './components/AddTaskForm.jsx';
import UpdateForm from './components/UpdateForm.jsx';
import ToDo from './components/ToDo.jsx';
import DeleteAllTask from './components/DeleteAllTask.jsx';
import Filter from './components/Filter.jsx';

import './App.css';

function App() {
  // Tasks state
  const [toDo, setToDo] = useState([
    { id: 1, title: 'task 1', status: false },
    { id: 2, title: 'task 2', status: false },
  ]);

  // Temp state
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  // Add task
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
      setNewTask('');
    }
  };

  // Delete task
  const deleteTask = (id) => {
    let newTasks = toDo.filter((task) => task.id !== id);
    setToDo(newTasks);
  };

  // Done or completed
  const markDone = (id) => {
    let newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });

    setToDo(newTask);
  };

  // Cancel update
  const cancelUpdate = () => {
    setUpdateData('');
  };

  // Change task for update
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };

  // Update task
  const updateTask = () => {
    let filterRecords = [...toDo].filter((task) => task.id !== updateData.id);
    let updateObject = [...filterRecords, updateData];
    setToDo(updateObject);
    setUpdateData('');
  };

  // Filter tasks
  const [showCompleted, setShowCompleted] = useState(true);
  const filteredTasks = showCompleted
    ? toDo
    : toDo.filter((task) => !task.status);

  return (
    <div className="container mx-auto App mt-7 p-5 rounded-md  bg-[#2C3639]">
      <br />
      <h2 className='HeaderText'> To Do App </h2>
      <br />

      {/* Update task */}
      {updateData && updateData ? (
        <UpdateForm
          updateData={updateData}
          changeTask={changeTask}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />
      )}

      <br />

      {/* Display todo */}
      {toDo && toDo.length ? '' : 'No Tasks...'}

      <ToDo
        toDo={filteredTasks}
        markDone={markDone}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
      />

<div className="container mx-auto App">
        {/* ... */}
        <Filter
          showCompleted={showCompleted}
          setShowCompleted={setShowCompleted}
          toDo={toDo}
        />
        {/* ... */}
      </div>
      <DeleteAllTask toDo={toDo} setToDo={setToDo} />

      
    </div>
  );
}

export default App;
