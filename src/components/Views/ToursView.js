import React, { useState } from 'react';

import Table from './ViewComponents/Table';

const ToursView = () => {
  const [tableData, setTableData] = useState([
    {
      id: (new Date() + Math.floor(Math.random() * 999999)).toString(36),
      name: 'Robert Ford',
      email: 'rford@delos.com',
      course: 'Computer Science 101',
      tutor: 'Bernard Lowe',
      tutorEmail: 'blowe@delos.com',
    },
    {
      id: (new Date() + Math.floor(Math.random() * 999999)).toString(36),
      name: 'Teresa Cullen',
      email: 'tcullen@gmail.com',
      course: 'Management 101',
      tutor: 'Charlotte Hale',
      tutorEmail: 'chale@gmail.com',
    },
    {
      id: (new Date() + Math.floor(Math.random() * 999999)).toString(36),
      name: 'Lee Sizemore',
      email: 'lsizemore@gmail.com',
      course: 'Creative Writing 101',
      tutor: 'Dolores Abernathy',
      tutorEmail: 'dabernathy@gmail.com',
    },
    {
      id: (new Date() + Math.floor(Math.random() * 999999)).toString(36),
      name: 'Ashley Stubbs',
      email: 'astubbs@gmail.com',
      course: 'Cybersecurity 101',
      tutor: 'Elsie Hughes',
      tutorEmail: 'ehughes@gmail.com',
    },
  ]);

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
        onTableUpdate={(event) => {
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
        }}
        onRowAdd={(event) => {
          let dataCopy = tableData; // Copy of the table data
          let id = (new Date() + Math.floor(Math.random() * 999999)).toString(
            36
          ); // Generate random id to associate to each item

          // Array of the keys of each key/value pair we want for each row
          // Dynamically based off the data we put into the table
          let itemKeys = Object.keys(dataCopy[0]);

          // Empty container that will become the object a new row is based on
          let itemToAdd = {};

          // For each key (in a key/value pair) for a rows data...
          itemKeys.map((key, index) => {
            // For the first key which is always id, set it to a random id
            if (index === 0) {
              itemToAdd[`${key}`] = id;
            } else {
              // Else, dynamically generate a key with an empty value, as a new row will not have values input yet
              itemToAdd[`${key}`] = '';
            }
          });

          /* let itemToAdd = {
            id: id,
            name: '',
            email: '',
            course: '',
            tutor: '',
            tutorEmail: '',
          }; */

          // Push the object of keys with empty values to our data copy
          dataCopy.push(itemToAdd);
          // Set state so that it updates on the front end with an empty row
          setTableData([...dataCopy]);
        }}
        onRowDel={(event) => {
          let dataCopy = tableData; // Copy of the table data

          let index = dataCopy
            .map((item) => {
              return item.id;
            })
            .indexOf(event.target.name); // Index of the row to delete

          dataCopy.splice(index, 1); // Splice it from the array of table rows
          setTableData([...dataCopy]); // Set the state to the new current table
        }}
        addButton={'+ Add Instructor'}
        delButton={true}
        bgColor={'bg-color-blue'}
      />
    </div>
  );
};
export default ToursView;

////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

// HANDLE DEL ROW ////////////////////////////////////////////////////////////////
/* const handleRowDel = (event) => {
    let dataCopy = tableData; // Copy of the table data

    let index = dataCopy
      .map((item) => {
        return item.id;
      })
      .indexOf(event.target.name); // Index of the row to delete

    dataCopy.splice(index, 1); // Splice it from the array of table rows
    setTableData([...dataCopy]); // Set the state to the new current table
  }; */

// HANDLE ADD ROW ////////////////////////////////////////////////////////////////
/*   const handleAddEvent = (event) => {
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
  }; */

// HANDLE TABLE UPDATE ///////////////////////////////////////////////////////////
/* const handleTableUpdate = (event) => {
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
  }; */
