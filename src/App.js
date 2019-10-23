import React, {useState} from 'react';
import './App.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { AgGridReact } from 'ag-grid-react';

function App() {
    const [columnDefs, setColumnDefs] = useState([{
        headerName: "Make", field: "make", resizable: true
    }, {
        headerName: "Model", field: "model", resizable: true
    }, {
        headerName: "Price", field: "price", resizable: true
    }]);

    const [rowData, setRowData] = useState([{
        make: "Toyota", model: "Celica", price: 35000
    }, {
        make: "Ford", model: "Mondeo", price: 32000
    }, {
        make: "Porsche", model: "Boxter", price: 72000
    },{
        make: "Porsche", model: "Boxter", price: 72000
    },{
        make: "Porsche", model: "Boxter", price: 72000
    },{
        make: "Porsche", model: "Boxter", price: 72000
    },{
        make: "Porsche", model: "Boxter", price: 72000
    },{
        make: "Porsche", model: "Boxter", price: 72000
    },{
        make: "Porsche", model: "Boxter", price: 72000
    },{
        make: "Toyota", model: "Celica", price: 35000
    }, {
        make: "Ford", model: "Mondeo", price: 32000
    }, {
        make: "Porsche", model: "Boxter", price: 72000
    },{
        make: "Porsche", model: "Boxter", price: 72000
    },{
        make: "Porsche", model: "Boxter", price: 72000
    },{
        make: "Porsche", model: "Boxter", price: 72000
    },{
        make: "Porsche", model: "Boxter", price: 72000
    },{
        make: "Porsche", model: "Boxter", price: 72000
    },{
        make: "Porsche", model: "Boxter", price: 72000
    },{
        make: "Toyota", model: "Celica", price: 35000
    }, {
        make: "Ford", model: "Mondeo", price: 32000
    }, {
        make: "Porsche", model: "Boxter", price: 72000
    },{
        make: "Porsche", model: "Boxter", price: 72000
    },{
        make: "Porsche", model: "Boxter", price: 72000
    },{
        make: "Porsche", model: "Boxter", price: 72000
    },{
        make: "Porsche", model: "Boxter", price: 72000
    },{
        make: "Porsche", model: "Boxter", price: 72000
    },{
        make: "Porsche", model: "Boxter", price: 72000
    },{
        make: "Toyota", model: "Celica", price: 35000
    }, {
        make: "Ford", model: "Mondeo", price: 32000
    }, {
        make: "Porsche", model: "Boxter", price: 72000
    },{
        make: "Porsche", model: "Boxter", price: 72000
    },{
        make: "Porsche", model: "Boxter", price: 72000
    },{
        make: "Porsche", model: "Boxter", price: 72000
    },{
        make: "Porsche", model: "Boxter", price: 72000
    },{
        make: "Porsche", model: "Boxter", price: 72000
    },{
        make: "Porsche", model: "Boxter", price: 72000
    }]);

  return (
    <div className="App">
        <div
            className="ag-theme-material"
            style={{
                height: '500px',
                width: '600px' }}
        >
            <AgGridReact
                columnDefs={columnDefs}
                rowData={rowData}>
            </AgGridReact>
        </div>
    </div>
  );
}

export default App;
