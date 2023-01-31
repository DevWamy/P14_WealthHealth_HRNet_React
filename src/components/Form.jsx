import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import DatePicker from 'react-date-picker';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Dropdown from 'react-dropdown';
import Modal from './Modal';
import 'react-dropdown/style.css';
import { stateOptions } from './states';
import { useDispatch } from 'react-redux';
import { employeeActions } from '../store/employeeSlice';
import logo from '../assets/WealthHealth.png';
import '../style/components/form.css';

const EmployeeForm = () => {
    const dispatch = useDispatch();

    //For modal
    const [show, setShow] = useState(false);

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

    //For States values
    const defaultOption = stateOptions[0];

    //Department values
    const DepartmentOptions = ['Sales', 'Marketing', 'Engineering', 'Human Resources', 'Legal'];
    const defaultDepOption = DepartmentOptions[0];

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(
            employeeActions.addEmployee({
                firstName: updateFirstName,
                lastName: updateLastName,
                dateOfBirth: updateDateOfBirth.toLocaleDateString(),
                startDate: updateStartDate.toLocaleDateString(),
                street: updateStreet,
                city: updateCity,
                state: updateState,
                zipCode: updateZipCode,
                department: updateDepartment,
            }),
        );
        setShow(true);
    };

    return (
        <>
            <div className="container">
                <div className="formContainer flexContainer">
                    <img className="logo_image" src={logo} alt="Wealth Health Logo" />
                    <h1>HRnet</h1>
                    <Link className="link" to="/List" text="Employee List">
                        View Current Employees
                    </Link>
                    <h2 className="title">Create Employees</h2>
                    <form className="flexContainer" onSubmit={handleSubmit}>
                        <div className="input user-data">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                onChange={(e) => setUpdateFirstName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input user-data">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                onChange={(e) => setUpdateLastName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input user-data">
                            <label htmlFor="dateOfBirth">Date of Birth</label>
                            <div>
                                {/* <DatePicker
                                    id="dateOfBirth"
                                    name="dateOfBirth"
                                    onChange={setUpdateDateOfBirth}
                                    value={updateDateOfBirth}
                                    required
                                /> */}
                                <DatePicker
                                    dateFormat="dd/MM/yyyy"
                                    selected={updateDateOfBirth}
                                    onChange={setUpdateDateOfBirth}
                                    placeholderText=" "
                                    required
                                />
                            </div>
                        </div>
                        <div className="input user-data">
                            <label htmlFor="startDate">Start Date</label>
                            <div>
                                {/* <DatePicker
                                    id="startDate"
                                    name="startDate"
                                    onChange={setUpdateStartDate}
                                    value={updateStartDate}
                                    required
                                /> */}
                                <DatePicker
                                    dateFormat="dd/MM/yyyy"
                                    selected={updateStartDate}
                                    onChange={setUpdateStartDate}
                                    placeholderText=" "
                                    required
                                />
                            </div>
                        </div>
                        <fieldset className="address">
                            <legend>Address</legend>
                            <div className="flexContainer">
                                <div className="input address">
                                    <label htmlFor="street">Street</label>
                                    <input
                                        type="text"
                                        id="street"
                                        name="street"
                                        onChange={(e) => setUpdateStreet(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="input address">
                                    <label htmlFor="city">City</label>
                                    <input
                                        type="text"
                                        id="city"
                                        name="city"
                                        onChange={(e) => setUpdateCity(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="input address">
                                    <label htmlFor="state">State</label>
                                    <Dropdown
                                        options={stateOptions}
                                        onChange={(e) => setUpdateState(e.value)}
                                        value={defaultOption}
                                        placeholder="Select an option"
                                    />
                                </div>
                                <div className="input address">
                                    <label htmlFor="zipCode">Zip Code</label>
                                    <input
                                        type="number"
                                        id="zipCode"
                                        name="zipCode"
                                        onChange={(e) => setUpdateZipCode(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                        </fieldset>
                        <div className="input address">
                            <label htmlFor="department">Department</label>
                            <Dropdown
                                options={DepartmentOptions}
                                onChange={(e) => setUpdateDepartment(e.value)}
                                value={defaultDepOption}
                                placeholder="Select an option"
                            />
                        </div>
                        <button className="save" type="submit">
                            Save
                        </button>
                    </form>
                </div>
            </div>
            {/* composant/plugin modal */}
            <Modal title="My Modal" onClose={() => setShow(false)} show={show}>
                <p className="text">Employee created !</p>
            </Modal>
        </>
    );
};

export default EmployeeForm;
