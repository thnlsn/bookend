import React from 'react';

const EditableCell = ({ cellData, onTableUpdate }) => {
  return (
    <td>
      <input
        type='text'
        name={cellData.type}
        id={cellData.id}
        value={cellData.value}
        onChange={onTableUpdate}
      />
    </td>
  );
};

export default EditableCell;
