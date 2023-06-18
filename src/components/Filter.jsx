import React from 'react';

const Filter = ({ showCompleted, setShowCompleted, toDo }) => {
  const handleCheckboxChange = () => {
    setShowCompleted(!showCompleted);
  };

  return (
    <div className="flex justify-end">
      {toDo.length > 0 && (
        <label>
          <input type="checkbox" checked={showCompleted} onChange={handleCheckboxChange} className='mb-4 ' />
          &nbsp; Completed Tasks
        </label>
      )}
    </div>
  );
};

export default Filter;
