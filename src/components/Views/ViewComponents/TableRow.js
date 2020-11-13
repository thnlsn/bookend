import React, { Fragment } from 'react';
import EditableCell from './EditableCell';

const TableRow = ({ onTableUpdate, rowItem, onDelEvent }) => {
  return (
    <Fragment>
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
      {/*       <input
        className='editable-table__del-button'
        type='button'
        // Function for delete row
        onClick={onDelEvent}
        name={rowItem.id}
        value='X'
        className='table-row__del-button'
      /> */}
    </Fragment>
  );
};

export default TableRow;
