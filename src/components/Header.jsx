import React from 'react';
import { Link } from 'react-router-dom';
import '../style/components/header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="containerTitle">
                <h1>HRnet</h1>
                <Link className="link" to="/" text="Employee List">
                    View Current Employees
                </Link>
                <h2 className="title">Create Employees</h2>
            </div>
        </div>
    );
};

export default Header;
