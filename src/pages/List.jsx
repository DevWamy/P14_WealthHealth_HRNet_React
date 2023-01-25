import React from 'react';
import { useSelector } from 'react-redux';

const List = () => {
    const employeeList = useSelector((state) => state.employees);
    console.log(employeeList);

    return (
        <div>
            {employeeList.map((employee) => (
                <div>
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
        </div>
    );
};

export default List;
