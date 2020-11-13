import React, { Fragment } from 'react';

import TableRow from './TableRow';

const Table = ({ onTableUpdate, onRowAdd, onRowDel, items }) => {
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
          <tr>
            <th>Instructor</th>
            <th>Email Address</th>
            <th>Course Name</th>
            <th>Student Leader</th>
            <th>Tutor Email</th>
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
