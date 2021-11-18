import React, { useState,useEffect } from 'react';
import './App.css';
import MaterialTable from 'material-table';

import axios from 'axios';
import AddBox from '@material-ui/icons/AddBox';

function App()
{
    const [tableData, setTableData] = useState([]);
    const columns = [
        { title: "UserId", field: "id" },
        { title: "Title", field: "username" },
        { title: "Name", field: "name" },
        { title: "Email", field: "email" },
        { title: "Phone Number", field: "phone" },
        { title: "City", field: "address.city"},
        { title: "Website", field: "website" }
    ]

    useEffect(() => {
        const axiosPosts = async () => {
            const response = await axios('https://jsonplaceholder.typicode.com/users');
            setTableData(response.data);
            console.log(response.data);
        };
        axiosPosts();

    }, []);

    return (
        <div className='App'>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal" tabindex="-1" id="exampleModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Modal body text goes here.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <center><h1>Company Details</h1></center>
            <MaterialTable  columns={columns} data={tableData} title="Employee Details"
                options={{
                    sorting: true,
                    searching: true,
                    filtering: true
                }}
                actions={[
                    {
                        icon: AddBox,
                        tooltip: "my tooltip",
                        isFreeAction: true,
                        onClick: () => {
                            console.log("clicked");
                        }
                    }]}
            />

        </div>
  );
}

export default App;
