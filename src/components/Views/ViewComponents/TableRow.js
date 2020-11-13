import React, { Fragment } from 'react';
import EditableCell from './EditableCell';

const TableRow = ({ onTableUpdate, rowItem, onDelEvent }) => {
  let keys = Object.keys(rowItem); // They keys of the object
  keys.shift();

  return (
    <Fragment>
      {keys.map((key, index) => (
        <EditableCell
          onTableUpdate={onTableUpdate}
          cellData={{
            type: key,
            value: rowItem[`${key}`], // bracket notation to access the value at the key passed in
            id: rowItem.id,
          }}
        />
      ))}

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
