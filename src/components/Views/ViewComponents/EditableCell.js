import React from 'react';

const EditableCell = ({ cellData, onTableUpdate }) => {
  return (
    <input
      className='editable-table__cell'
      type='text'
      name={cellData.type}
      id={cellData.id}
      value={cellData.value}
      onChange={onTableUpdate}
      placeholder={'text'}
    />
  );
};

export default EditableCell;
