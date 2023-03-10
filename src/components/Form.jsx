import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { employeeActions } from '../store/employeeSlice';
import '../style/components/form.css';

//For Date picker
import CustomDatePicker from './CustomDatePicker';

//For dropdown
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

//For modal
import { Modal } from 'modal-react-for-projects';

//For state
import { stateOptions } from './states';

const EmployeeForm = () => {
    const dispatch = useDispatch();

    //For modal
    const [show, setShow] = useState(false);

    //For States values
    const defaultOption = stateOptions[0];

    //Department values
    const DepartmentOptions = ['Sales', 'Marketing', 'Engineering', 'Human Resources', 'Legal'];
    const defaultDepOption = DepartmentOptions[0];

    //Form values
    //For inputs
    const [updateFirstName, setUpdateFirstName] = useState('');
    const [updateLastName, setUpdateLastName] = useState('');
    const [updateStreet, setUpdateStreet] = useState('');
    const [updateCity, setUpdateCity] = useState('');
    const [updateZipCode, setUpdateZipCode] = useState('');

    // For date picker
    const [updateDateOfBirth, setUpdateDateOfBirth] = useState('');
    const [updateStartDate, setUpdateStartDate] = useState('');

    //For dropdown
    const [updateState, setUpdateState] = useState(defaultOption.value);
    const [updateDepartment, setUpdateDepartment] = useState(defaultDepOption);

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
            <div className="formContainer">
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
                            <CustomDatePicker
                                value={updateDateOfBirth}
                                onChange={setUpdateDateOfBirth}
                                required
                            />
                        </div>
                    </div>
                    <div className="input user-data">
                        <label htmlFor="startDate">Start Date</label>
                        <div>
                            <CustomDatePicker
                                value={updateStartDate}
                                onChange={setUpdateStartDate}
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
                                    required
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
                            required
                        />
                    </div>
                    <button className="save" type="submit">
                        Save
                    </button>
                </form>
            </div>
            {/* </div> */}
            {/* composant/plugin modal */}
            <Modal title="My Modal" onClose={() => setShow(false)} show={show}>
                <p className="text">Employee created !</p>
            </Modal>
        </>
    );
};

export default EmployeeForm;
