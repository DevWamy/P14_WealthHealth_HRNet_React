import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../style/components/list.css';

const List = () => {
    const employeeList = useSelector((state) => state.employees);
    console.log(employeeList);

    //table values
    const columns = useMemo(
        () => [
            {
                accessorKey: 'firstName',
                header: 'First Name',
                size: 50,
            },
            {
                accessorKey: 'lastName',
                header: 'Last Name',
                size: 50,
            },
            {
                accessorKey: 'startDate',
                header: 'Start Date',
                size: 50,
            },
            {
                accessorKey: 'department',
                header: 'Department',
                size: 50,
            },
            {
                accessorKey: 'dateOfBirth',
                header: 'Date of Birth',
                size: 50,
            },
            {
                accessorKey: 'street',
                header: 'Street',
                size: 50,
            },
            {
                accessorKey: 'city',
                header: 'City',
                size: 50,
            },
            {
                accessorKey: 'state',
                header: 'State',
                size: 50,
            },
            {
                accessorKey: 'zipCode',
                header: 'Zip Code',
                size: 50,
            },
        ],
        [],
    );

    return (
        <div className="container" role="main">
            <h1 className="employee-header">Current Employees</h1>
            <div className="table">
                <MaterialReactTable
                    columns={columns}
                    data={employeeList}
                    // muiTablePaperProps is used for styling shadow
                    muiTablePaperProps={{
                        elevation: 20,
                    }}
                />
            </div>

            {/* <div>
                {employeeList.map((employee) => (
                    <div key={employee}>
                        <p>{employee.firstName}</p>
                        <p>{employee.lastName}</p>
                        <p>{employee.startDate}</p>
                        <p>{employee.department}</p>
                        <p>{employee.dateOfBirth}</p>
                        <p>{employee.street}</p>
                        <p>{employee.city}</p>
                        <p>{employee.state}</p>
                        <p>{employee.zipCode}</p>
                    </div>
                ))}
            </div> */}
            {/* Link to go back to the form page */}
            <Link className="home-link" to="/">
                Home
            </Link>
        </div>
    );
};

export default List;
