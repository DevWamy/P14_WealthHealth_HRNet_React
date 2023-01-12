import React from 'react';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { employeeActions } from '../store/employeeSlice';

const EmployeeForm = () => {
    // const navigate = useNavigate();
    const dispatch = useDispatch();

    //Form values
    const [updateFirstName, setUpdateFirstName] = useState('');
    const [updateLastName, setUpdateLastName] = useState('');
    const [updateDateOfBirth, setUpdateDateOfBirth] = useState('');
    const [updateStartDate, setUpdateStartDate] = useState('');
    const [updateStreet, setUpdateStreet] = useState('');
    const [updateCity, setUpdateCity] = useState('');
    const [updateState, setUpdateState] = useState('');
    const [updateZipCode, setUpdateZipCode] = useState('');
    const [updateDepartment, setUpdateDepartment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(
            employeeActions.addEmployee({
                firstName: updateFirstName,
                lastName: updateLastName,
                dateOfBirth: updateDateOfBirth,
                startDate: updateStartDate,
                street: updateStreet,
                city: updateCity,
                state: updateState,
                zipCode: updateZipCode,
                department: updateDepartment,
            }),
        );
    };

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <div className="inputWrapper">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        onChange={(e) => setUpdateFirstName(e.target.value)}
                    />
                </div>
                <div className="inputWrapper">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        onChange={(e) => setUpdateLastName(e.target.value)}
                    />
                </div>
                <div className="inputWrapper">
                    <label htmlFor="dateOfBirth">Date of Birth</label>
                    <input
                        type="text"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        onChange={(e) => setUpdateDateOfBirth(e.target.value)}
                    />
                </div>
                <div className="inputWrapper">
                    <label htmlFor="startDate">Start Date</label>
                    <input
                        type="text"
                        id="startDate"
                        name="startDate"
                        onChange={(e) => setUpdateStartDate(e.target.value)}
                    />
                </div>
                <fieldset className="address">
                    <legend>Address</legend>
                    <div className="inputWrapper">
                        <label htmlFor="street">Street</label>
                        <input
                            type="text"
                            id="street"
                            name="street"
                            onChange={(e) => setUpdateStreet(e.target.value)}
                        />
                    </div>
                    <div className="inputWrapper">
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            onChange={(e) => setUpdateCity(e.target.value)}
                        />
                    </div>
                    <div className="inputWrapper">
                        <label htmlFor="state">State</label>
                        <input
                            type="text"
                            id="state"
                            name="state"
                            onChange={(e) => setUpdateState(e.target.value)}
                        />
                    </div>
                    <div className="inputWrapper">
                        <label htmlFor="zipCode">Zip Code</label>
                        <input
                            type="number"
                            id="zipCode"
                            name="zipCode"
                            onChange={(e) => setUpdateZipCode(e.target.value)}
                        />
                    </div>
                </fieldset>
                <div className="inputWrapper">
                    <label htmlFor="department">Department</label>
                    <input
                        type="text"
                        id="department"
                        name="department"
                        onChange={(e) => setUpdateDepartment(e.target.value)}
                    />
                </div>
                <button className="save" type="submit">
                    Save
                </button>
            </form>
        </>
    );
};

export default EmployeeForm;
