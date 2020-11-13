import React, { Fragment } from 'react';
import EditableCell from './EditableCell';

const TableRow = ({
  onTableUpdate,
  rowItem,
  onDelEvent,
  delButton,
  placeholders,
}) => {
  let objKeys = Object.keys(rowItem); // They keys of the object
  objKeys.shift();

  return (
    <Fragment>
      {objKeys.map((objKey, index) => (
        <EditableCell
          onTableUpdate={onTableUpdate}
          cellData={{
            type: objKey,
            value: rowItem[`${objKey}`], // bracket notation to access the value at the key passed in
            id: rowItem.id,
          }}
          placeholder={placeholders[index]}
          key={rowItem.id}
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
