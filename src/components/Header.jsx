import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/WealthHealth.png';
import '../style/components/header.css';

const Header = () => {
    return (
        <div className="headContainer">
            <img className="logo_image" src={logo} alt="Wealth Health Logo" />
            <h1>HRnet</h1>
            <Link to="/List" className="link" text="Employee List">
                View Current Employees
            </Link>
            <h2 className="title">Create Employees</h2>
        </div>
    );
};

export default Header;
