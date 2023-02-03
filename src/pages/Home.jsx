import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import '../style/pages/home.css';

/**
 * Display the create new employee page .
 *
 * @returns {JSX.Element} CreateEmployee page.
 */

const Home = () => {
    return (
        <div className="main">
            <Header />
            <Form />
        </div>
    );
};

export default Home;
