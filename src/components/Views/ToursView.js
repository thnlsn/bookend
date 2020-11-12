import React, { useState, useEffect, Fragment } from 'react';

const ToursView = () => {
  const [tableData, setTableData] = useState(
    {
      name: 'John Doe',
      email: 'jdoe@gmail.com',
      course: 'Astrology 101',
      tutor: 'Alex Smith',
      tutorEmail: 'asmith@gmail.com',
    },
    {
      name: 'Jason Dawson',
      email: 'jdawson@gmail.com',
      course: 'Art 101',
      tutor: 'Aiden Smalls',
      tutorEmail: 'asmalls@gmail.com',
    },
    {
      name: 'Joseph Davidson',
      email: 'jdavidson@gmail.com',
      course: 'Anatomy 101',
      tutor: 'Aaron Samson',
      tutorEmail: 'asamson@gmail.com',
    },
    {
      name: 'Jaden Dallas',
      email: 'jdallas@gmail.com',
      course: 'Astronomy 101',
      tutor: 'Artis Santiago',
      tutorEmail: 'asantiago@gmail.com',
    }
  );

  handleRowDel(itemToDelete) {
    let dataCopy = tableData; // Copy of the table data
    var index = dataCopy.indexOf(itemToDelete); // Index of the row to delete
    dataCopy.splice(index, 1); // Splice it from the array of table rows
    setTableData(dataCopy); // Set the state to the new current table
  };

  return <div className='tour-table'></div>;
};

export default ToursView;

// Inital data is used to generate a table
// A form is used to hold data that can be pushed into the state that generates the table
