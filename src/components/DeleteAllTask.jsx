import React from 'react';

function DeleteAllButton({ toDo, setToDo }) {
  const deleteAllTasks = () => {
    setToDo([]);
  };

  return (
    <div className="flex justify-end">
    <button
      className={`${
        toDo.length === 0 ? 'hidden' : 'block'
      } rounded-lg bg-[#B46060] hover:bg-red-600 text-white  py-2 px-4 `}
      onClick={deleteAllTasks}
    >
      Delete All Tasks
    </button>
    </div>
  );
}

export default DeleteAllButton;
