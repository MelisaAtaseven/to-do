const UpdateForm = ({updateData, changeTask,updateTask,cancelUpdate }) => {
    return (

<>
<div className="flex flex-col sm:flex-row items-center mb-4">
  <div className="flex-1">
    <input
    value={updateData && updateData.title }
    onChange={ (e) => changeTask(e)}
    className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-500 text-black" />
  </div>
  <div className="mt-4 sm:mt-0 sm:ml-3">
    <button 
    onClick={updateTask}
    className="px-4  py-2 bg-[#B46060] text-white rounded-lg focus:outline-none focus:ring focus:border-green-500 hover:bg-[#FFF4E0] hover:text-black mr-2 sm:mr-0 mb-2 sm:mb-0">Update</button>
    <button 
    onClick={cancelUpdate}
    className="px-4 ml-2 py-2 bg-[#A5C9CA] text-white rounded-lg focus:outline-none focus:ring focus:border-yellow-500 hover:bg-[#395B64]">Cancel</button>
  </div>
</div>

</>

    )
}

export default UpdateForm;