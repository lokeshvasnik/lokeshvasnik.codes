import React from 'react';
import github from '../assets/github.png';
const Showcase = () => {
    return (
        <div className="row">
            <div className="col-lg-12 d-flex justify-content-center align-items-center">
                <img className="w-50 github" src={github} alt="github" />
            </div>
        </div>
    );
};

export default Showcase;
