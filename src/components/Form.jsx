import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-date-picker';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
// import Select from 'react-select';
import Select, { Option } from 'rc-select';
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
    const [updateDateOfBirth, setUpdateDateOfBirth] = useState(new Date());
    const [updateStartDate, setUpdateStartDate] = useState(new Date());
    const [updateStreet, setUpdateStreet] = useState('');
    const [updateCity, setUpdateCity] = useState('');
    const [updateState, setUpdateState] = useState('');
    const [updateZipCode, setUpdateZipCode] = useState('');
    const [updateDepartment, setUpdateDepartment] = useState('');

    //States values
    const StateOptions = [
        'Alabama',
        'Alaska',
        'American Samoa',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'District Of Columbia',
        'Federated States Of Micronesia',
        'Florida',
        'Georgia',
        'Guam',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Marshall Islands',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Northern Mariana Islands',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Palau',
        'Pennsylvania',
        'Puerto Rico',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'Virgin Islands',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming',
    ];
    const defaultOption = StateOptions[0];

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
                        <div className="input margin-bottom">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                onChange={(e) => setUpdateFirstName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input margin-bottom">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                onChange={(e) => setUpdateLastName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input margin-bottom">
                            <label htmlFor="dateOfBirth">Date of Birth</label>
                            <div>
                                <DatePicker
                                    id="dateOfBirth"
                                    name="dateOfBirth"
                                    onChange={setUpdateDateOfBirth}
                                    value={updateDateOfBirth}
                                    required
                                />
                            </div>
                        </div>
                        <div className="input margin-bottom">
                            <label htmlFor="startDate">Start Date</label>
                            <div>
                                <DatePicker
                                    id="startDate"
                                    name="startDate"
                                    onChange={setUpdateStartDate}
                                    value={updateStartDate}
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
                                        options={StateOptions}
                                        onChange={(e) => setUpdateState(e.target.value)}
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
                            <select name="department" id="department" required>
                                <option value="">-- Select a department --</option>
                                <option>Sales</option>
                                <option>Marketing</option>
                                <option>Engineering</option>
                                <option>Human Resources</option>
                                <option>Legal</option>
                            </select>
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
