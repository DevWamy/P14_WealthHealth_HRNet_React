import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form';

/**
 * Display the create new employee page .
 *
 * @returns {JSX.Element} CreateEmployee page.
 */

const Home = () => {
    return (
        <div>
            <Header />
            <Form />
        </div>
    );
};

export default Home;
