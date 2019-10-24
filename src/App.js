import React, {useState} from 'react';
import { render } from "react-dom";
import './App.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { AgGridReact } from 'ag-grid-react';
import CustomHeader from "./CustomHeader.jsx";

function App() {
    const [columnDefs, setColumnDefs] = useState([{
        headerName: "Make", field: "make", resizable: true, sortable: true
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

    const [frameworkComponents] = useState({ agColumnHeader: CustomHeader });

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
                frameworkComponents={frameworkComponents}
                rowData={rowData}>
            </AgGridReact>
        </div>
    </div>
  );
}

export default App;
