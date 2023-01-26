import React from 'react';
import Form from '../components/Form';
import Modale from '../components/Modale';

/**
 * Display the create new employee page .
 *
 * @returns {JSX.Element} CreateEmployee page.
 */

const Home = () => {
    return (
        <div>
            <Form />
            {/* composant/plugin modale */}
            <Modale>A new employee has been created</Modale>
        </div>
    );
};

export default Home;
