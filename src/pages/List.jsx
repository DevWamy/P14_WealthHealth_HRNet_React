import React from 'react';
import { useSelector } from 'react-redux';
import { employeeActions } from '../store/employeeSlice';

const firstName = useSelector((state) => state.firstName);
const lastName = useSelector((state) => state.lastName);

const List = () => {
    return (
        <div>
            <h1> {firstName + ' ' + lastName + ' '}</h1>
        </div>
    );
};

export default List;
