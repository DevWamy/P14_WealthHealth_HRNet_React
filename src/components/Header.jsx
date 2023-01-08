import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className="header">
            <div className="containerTitle">
                <h1 className="title">HRnet</h1>
            </div>
            <div className="elementNav">
                <Link to="/" text="Create Employee" />
                <Link to="/employees" text="View Current Employees" />
            </div>
        </div>
    );
};

export default Header;
