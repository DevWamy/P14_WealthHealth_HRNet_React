import { createSlice } from '@reduxjs/toolkit';

/**
 *  Handle user authentication for the login form for the signIn page
 *
 * @params name is used to identify the action that will be dispatched to the reducer. Each slice must have a unique name.
 * @params reducers list functions that will be executed when the corresponding action is dispatch.
 * @params createSlice gives access to the actions object containing all the actions. It's from this that we will dispatch them later.
 * @params createSlice also gives access to the reducer object which creates a reducer from the functions defined in reducers previously. The reducers of the slices will be pooled to create the global reducer of the store.
 *
 *
 * @returns {JSX.Element}  authentification managment
 */

const initialState = {
    employees: [],
};

const employeeSlice = createSlice({
    name: 'employee_slice',
    initialState,
    reducers: {
        addEmployee(state, action) {
            state.employees.push(action.payload);
        },
    },
});

export const employeeActions = employeeSlice.actions;

export default employeeSlice.reducer;
