import React, { Fragment } from 'react';
import EditableCell from './EditableCell';

const TableRow = ({
  onTableUpdate,
  rowItem,
  onDelEvent,
  delButton,
  placeholders,
}) => {
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
          placeholder={placeholders[index]}
        />
      ))}
      {delButton && (
        <button
          type='button'
          // Function for delete row
          onClick={onDelEvent}
          name={rowItem.id}
          className='editable-table__del-cell'
        >
          x
        </button>
      )}
    </Fragment>
  );
};

export default TableRow;
