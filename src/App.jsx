import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Project from './components/Project';
import Showcase from './components/Showcase';
import ScrollAnimation from '@stromsky/react-animate-on-scroll';

import './App.css';
import Progress from './components/Progress';
const App = () => {
    const [theme, setTheme] = useState('light'); // light

    return (
        <>
            <Navbar onSaveTheme={setTheme} color={theme} />
            <Home />
            <Project color={theme} />
            <ScrollAnimation animateIn="fadeIn">
                <Showcase />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
                <Progress />
            </ScrollAnimation>
        </>
    );
};

export default App;
