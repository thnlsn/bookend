import React, { Fragment } from 'react';

import TableRow from './TableRow';

const Table = ({ headers, items, onTableUpdate, onRowAdd, onRowDel }) => {
  let item = items.map((item) => {
    return (
      <TableRow
        onTableUpdate={onTableUpdate}
        rowItem={item}
        onDelEvent={onRowDel}
        key={item.id}
      />
    );
  });

  return (
    <Fragment>
      <div className={`editable-table editable-table--${headers.length}cols`}>
        {headers.map((header) => (
          <div className='editable-table__cell'>{header}</div>
        ))}

        {item}
      </div>
      <button
        type='button'
        onClick={onRowAdd}
        className='editable-table__add-button'
      >
        Add Row
      </button>
    </Fragment>
  );
};

export default Table;
