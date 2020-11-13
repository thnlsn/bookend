import React, { Fragment } from 'react';

import TableRow from './TableRow';

const Table = ({ headers, onTableUpdate, onRowAdd, onRowDel, items }) => {
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
      <table className='editable-table'>
        <thead>
          <tr className='editable-table__header-row'>
            {headers.map((header) => (
              <th>{header}</th>
            ))}
          </tr>
        </thead>

        <tbody>{item}</tbody>
      </table>
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
