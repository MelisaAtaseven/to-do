const AddTaskForm = ({ newTask , setNewTask , addTask}) => {
    return (
        <>
             {/* add task */}
<div className="flex flex-col sm:flex-row items-center">
  <div className="flex-1">
    <input 
    value={newTask}
    onChange={(e) => setNewTask (e.target.value)}
    className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-[#B46060] text-black" />
  </div>
  <div className="ml-2 mt-2 sm:mt-0 flex-shrink-0">
    <button 
    onClick={addTask}
    className="px-4 py-2 bg-[#B46060] text-white rounded-lg focus:outline-none focus:ring focus:border-green-500 hover:text-black hover:bg-[#FFF4E0]">Add Task</button>
  </div>
</div>

        </>

        
    )
}

export default AddTaskForm;