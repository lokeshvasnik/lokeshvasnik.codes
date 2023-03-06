import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Project from './components/Project';
import './App.css';
import Showcase from './components/Showcase';

const App = () => {
    const [theme, setTheme] = useState('light'); // light

    return (
        <>
            <Navbar onSaveTheme={setTheme} color={theme} />
            <Home />
            <Project color={theme} />
            <Showcase />
        </>
    );
};

export default App;
