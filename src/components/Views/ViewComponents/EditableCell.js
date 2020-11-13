import React from 'react';

const EditableCell = ({ cellData, onTableUpdate, placeholder }) => {
  return (
    <input
      className='editable-table__cell'
      type='text'
      name={cellData.type}
      id={cellData.id}
      value={cellData.value}
      onChange={onTableUpdate}
      placeholder={placeholder}
    />
  );
};

export default EditableCell;
