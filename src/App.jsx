import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Project from './components/Project';
import './App.css';

const App = () => {
    return (
        <>
            <Navbar />
            <Home />
            <Project />
        </>
    );
};

export default App;
