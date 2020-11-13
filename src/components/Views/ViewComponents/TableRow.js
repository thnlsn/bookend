import React from 'react';
import EditableCell from './EditableCell';

const TableRow = ({ onTableUpdate, rowItem, onDelEvent, key }) => {
  return (
    <tr className='table-row'>
      <EditableCell
        onTableUpdate={onTableUpdate}
        cellData={{
          type: 'name',
          value: rowItem.name,
          id: rowItem.id,
        }}
      />
      <EditableCell
        onTableUpdate={onTableUpdate}
        cellData={{
          type: 'email',
          value: rowItem.email,
          id: rowItem.id,
        }}
      />
      <EditableCell
        onTableUpdate={onTableUpdate}
        cellData={{
          type: 'course',
          value: rowItem.course,
          id: rowItem.id,
        }}
      />
      <EditableCell
        onTableUpdate={onTableUpdate}
        cellData={{
          type: 'tutor',
          value: rowItem.tutor,
          id: rowItem.id,
        }}
      />
      <EditableCell
        onTableUpdate={onTableUpdate}
        cellData={{
          type: 'tutorEmail',
          value: rowItem.tutorEmail,
          id: rowItem.id,
        }}
      />
      <td className='table-row__del-cell'>
        <input
          type='button'
          // Function for delete row
          onClick={onDelEvent}
          name={rowItem.id}
          value='X'
          className='table-row__del-button'
        />
      </td>
    </tr>
  );
};

export default TableRow;
