import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-date-picker';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { employeeActions } from '../store/employeeSlice';
import logo from '../assets/WealthHealth.png';
import '../style/components/form.css';

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
            <div className="container">
                <div className="formContainer flexContainer">
                    <img className="logo_image" src={logo} alt="Wealth Health Logo" />
                    <h1>HRnet</h1>
                    <Link className="link" to="/" text="Employee List">
                        View Current Employees
                    </Link>
                    <h2 className="title">Create Employees</h2>
                    <form className="flexContainer" onSubmit={handleSubmit}>
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
                            <DatePicker
                                id="dateOfBirth"
                                selected="dateOfBirth"
                                onChange={(date) => setUpdateDateOfBirth(date.target.value)}
                                wrapperClassName="datePicker"
                                required
                            />
                        </div>
                        <div className="inputWrapper">
                            <label htmlFor="startDate">Start Date</label>
                            <DatePicker
                                id="startDate"
                                name="startDate"
                                onChange={(date) => setUpdateStartDate(date.target.value)}
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
                </div>
            </div>
        </>
    );
};

export default EmployeeForm;
