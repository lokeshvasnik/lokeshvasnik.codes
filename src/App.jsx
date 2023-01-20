import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import './App.css';

const App = () => {
    // Login for navigation for switch button
    const [theme, setTheme] = useState('light');
    return (
        <>
            <Navbar onSaveTheme={setTheme} color={theme} />
            <Hero color={theme} />
        </>
    );
};

export default App;

// Navbar to dark acheivement completed ⭐️
// Acheivement completed lifting the state up  ⭐️
// Button toggle completed ⭐️
