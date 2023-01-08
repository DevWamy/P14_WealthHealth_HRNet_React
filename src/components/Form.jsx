import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { employeeActions } from '../store/employeeSlice';

const EmployeeForm = () => {
    // const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        // const form = e.target;
        // const firstName = form.querySelector('#firstName').value;
        // const lastName = form.querySelector('#lastName').value;
        // const dateOfBirth = form.querySelector('#dateOfBirth').value;
        // const startDate = form.querySelector('#startDate').value;
        // const street = form.querySelector('#street').value;
        // const city = form.querySelector('#city').value;
        // const state = form.querySelector('#state').value;
        // const zipCode = form.querySelector('#zipCode').value;
        // const department = form.querySelector('#department').value;
        dispatch(employeeActions.addEmployee([]));
    };

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <div className="inputWrapper">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" />
                </div>
                <div className="inputWrapper">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" />
                </div>
                <div className="inputWrapper">
                    <label htmlFor="dateOfBirth">Date of Birth</label>
                    <input type="text" id="dateOfBirth" name="dateOfBirth" />
                </div>
                <div className="inputWrapper">
                    <label htmlFor="startDate">Start Date</label>
                    <input type="text" id="startDate" name="startDate" />
                </div>
                <fieldset className="address">
                    <legend>Address</legend>
                    <div className="inputWrapper">
                        <label htmlFor="street">Street</label>
                        <input type="text" id="street" name="street" />
                    </div>
                    <div className="inputWrapper">
                        <label htmlFor="city">City</label>
                        <input type="text" id="city" name="city" />
                    </div>
                    <div className="inputWrapper">
                        <label htmlFor="state">State</label>
                        <input type="text" id="state" name="state" />
                    </div>
                    <div className="inputWrapper">
                        <label htmlFor="zipCode">Zip Code</label>
                        <input type="number" id="zipCode" name="zipCode" />
                    </div>
                </fieldset>
                <div className="inputWrapper">
                    <label htmlFor="department">Department</label>
                    <input type="text" id="department" name="department" />
                </div>
                <button className="save" type="submit">
                    Save
                </button>
            </form>
        </>
    );
};

export default EmployeeForm;
