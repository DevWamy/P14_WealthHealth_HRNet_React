import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { employee, home } from '../src/routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route exact path={home} element={<Home />} />
                    <Route exact path={employee} element={<List />} />
                </Routes>
                {/* <Footer /> */}
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
