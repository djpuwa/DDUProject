import React, { useState } from 'react'
import MaterialTable from 'material-table'

import GetAppIcon from '@material-ui/icons/GetApp';
import AddIcon from '@material-ui/icons/Add';


function Table() {
  const [tableData, setTableData] = useState([
    { name: "FOT", facultyid: "ddu01", Dean: "dr.abc" },
    { name: "FOD", facultyid: "ddu02", Dean: "dr.abc" },
    { name: "FOP", facultyid: "ddu03", Dean: "dr.abc" },
    { name: "FOM", facultyid: "ddu04", Dean: "dr.abc" },
    { name: "XYZ", facultyid: "ddu05", Dean: "dr.abc" },
    { name: "XYZ", facultyid: "ddu06", Dean: "dr.abc" },
    { name: "XYZ", facultyid: "ddu07", Dean: "dr.abc" },
   
  ])
  const columns = [
   
    { title: "FacultyID", field: "facultyid", sorting: false, filtering: false, headerStyle: { color: "#fff" }},
    { title: "Name", field: "name", sorting: false, filtering: false,  headerStyle: { color: "#fff" }},
    { title: "Dean", field: "Dean", sorting: false, filtering: false,  headerStyle: { color: "#fff" } },
   
  ]

  return (
    <div style={{height:400,width:'100%'}}>
     <MaterialTable columns={columns} data={tableData}
      
      
      editable={{

        onRowAdd: (newRow) => new Promise((resolve, reject) => {
          setTableData([...tableData, newRow])

          setTimeout(() => resolve(), 500)
        }),
        onRowUpdate: (newRow, oldRow) => new Promise((resolve, reject) => {
          const updatedData = [...tableData]
          updatedData[oldRow.tableData.id] = newRow
          setTableData(updatedData)
          setTimeout(() => resolve(), 500)
        }),
        onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
          const updatedData = [...tableData]
          updatedData.splice(selectedRow.tableData.id, 1)
          setTableData(updatedData)
          setTimeout(() => resolve(), 1000)

        })
      }}
      theme={{direction:"rtl"}}
      actions={[
        {
          icon: () => <GetAppIcon />,
          tooltip: "Click me",
          onClick: (e, data) => console.log(data),
          // isFreeAction:true
        }
      ]}
      onSelectionChange={(selectedRows) => console.log(selectedRows)}
      options={{
        tableLayout:'auto',
        sorting: true, search: true,
        searchFieldAlignment: "right", searchAutoFocus: true, searchFieldVariant: "standard",
        filtering: true, paging: true, pageSizeOptions: [2, 5, 10, 20, 25, 50, 200], pageSize: 5,
        paginationType: "stepped", showFirstLastPageButtons: false, paginationPosition: "bottom", exportButton: true,
        exportAllData: true, exportFileName: "TableData", addRowPosition: "first", actionsColumnIndex: -1, selection: true,
        showSelectAllCheckbox: false, showTextRowsSelected: false, selectionProps: rowData => ({
          disabled: rowData.age == null,
          // color:"primary"
        }),
        grouping: false, 
        columnsButton: true,
        rowStyle: (data, index) => index % 2 === 0 ? { background: "#f5f5f5" } : null,
        headerStyle: { background: "#666465",color:"#fff"}
      }}
      title="Dean Information"
      icons={{ Add: () => <AddIcon /> }} />
      {/* <h2>hh</h2> */}
    </div>
  )
}

export default Table

