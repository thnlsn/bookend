import React, { Fragment } from 'react';

import TableRow from './TableRow';

const Table = ({
  headers,
  items,
  onTableUpdate,
  onRowAdd,
  onRowDel,
  addButton,
  delButton,
}) => {
  let item = items.map((item) => {
    return (
      <TableRow
        onTableUpdate={onTableUpdate}
        rowItem={item}
        onDelEvent={onRowDel}
        delButton={delButton}
        key={item.id}
        placeholders={headers}
      />
    );
  });

  return (
    <Fragment>
      <div className={`editable-table editable-table--${headers.length}cols`}>
        {headers.map((header, index) => (
          <div className='editable-table__cell editable-table__cell--header'>
            {header}
          </div>
        ))}
        {delButton && (
          <div className='editable-table__del-cell editable-table__del-cell--header'></div>
        )}

        {item}
      </div>

      {addButton && (
        <button
          type='button'
          onClick={onRowAdd}
          className='editable-table__add-button'
        >
          {addButton}
        </button>
      )}
    </Fragment>
  );
};

export default Table;
