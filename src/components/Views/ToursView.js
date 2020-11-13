import React, { useState } from 'react';

import Table from './ViewComponents/Table';

const ToursView = () => {
  const [tableData, setTableData] = useState([
    {
      id: (new Date() + Math.floor(Math.random() * 999999)).toString(36),
      name: 'John Doe',
      email: 'jdoe@gmail.com',
      course: 'Astrology 101',
      tutor: 'Alex Smith',
      tutorEmail: 'asmith@gmail.com',
    },
    {
      id: (new Date() + Math.floor(Math.random() * 999999)).toString(36),
      name: 'Jason Dawson',
      email: 'jdawson@gmail.com',
      course: 'Art 101',
      tutor: 'Aiden Smalls',
      tutorEmail: 'asmalls@gmail.com',
    },
    {
      id: (new Date() + Math.floor(Math.random() * 999999)).toString(36),
      name: 'Joseph Davidson',
      email: 'jdavidson@gmail.com',
      course: 'Anatomy 101',
      tutor: 'Aaron Samson',
      tutorEmail: 'asamson@gmail.com',
    },
    {
      id: (new Date() + Math.floor(Math.random() * 999999)).toString(36),
      name: 'Jaden Dark',
      email: 'jdark@gmail.com',
      course: 'Astronomy 101',
      tutor: 'Artis Santiago',
      tutorEmail: 'asantiago@gmail.com',
    },
  ]);

  const handleRowDel = (event) => {
    let dataCopy = tableData; // Copy of the table data

    let index = dataCopy
      .map((item) => {
        return item.id;
      })
      .indexOf(event.target.name); // Index of the row to delete

    /*     let index = dataCopy.indexOf(event.target.name); // Index of the row to delete */
    dataCopy.splice(index, 1); // Splice it from the array of table rows
    setTableData([...dataCopy]); // Set the state to the new current table
  };

  const handleAddEvent = (event) => {
    let dataCopy = tableData; // Copy of the table data
    let id = (new Date() + Math.floor(Math.random() * 999999)).toString(36); // Generate random id to associate to each item
    let itemToAdd = {
      id: id,
      name: '',
      email: '',
      course: '',
      tutor: '',
      tutorEmail: '',
    };
    dataCopy.push(itemToAdd);
    setTableData([...dataCopy]);
  };

  const handleTable = (event) => {
    let dataCopy = tableData; // Copy of the table data

    // item is the name of the variable for an item
    console.log(event.target);
    let item = {
      id: event.target.id,
      name: event.target.name,
      value: event.target.value,
    };
    let rows = dataCopy.slice();
    let newRows = rows.map((row) => {
      // for each key in row
      for (let key in row) {
        // if key is the same as item name AND id is the same as item id, then set the key to the item value
        if (key === item.name && row.id === item.id) {
          row[key] = item.value;
        }
      }
      return row;
    });
    setTableData([...newRows]);
    console.log(tableData);
  };

  return (
    <div className='tour-table'>
      <Table
        headers={[
          'Instructor',
          'Email Address',
          'Course Name',
          'Student Leader',
          'Tutor Email',
        ]}
        items={tableData}
        onTableUpdate={handleTable}
        onRowAdd={handleAddEvent}
        onRowDel={handleRowDel}
        addButton={'+ Add Instructor'}
        delButton={true}
        bgColors={['--blue']}
      />
    </div>
  );
};
export default ToursView;

// Inital data is used to generate a table
// A form is used to hold data that can be pushed into the state that generates the table
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
