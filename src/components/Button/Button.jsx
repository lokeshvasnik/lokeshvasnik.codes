import React from 'react';
import records from '../../records.json';
const Button = (props) => {
    return (
        <>
            <div>
                {records.map((item, index) => (
                    <li
                        key={index}
                        className={`card d-flex justify-content-center align-items-center m-auto my-3
                        ${
                            props.color === 'light'
                                ? 'bg-light text-dark '
                                : 'bg-dark text-light'
                        } `}>
                        <span className='d-flex justify-content-center align-items-center'>
                            <img className="logo" src={item.logo} alt="" />
                        </span>
                        <span> {item.title}</span>
                    </li>
                ))}
            </div>
        </>
    );
};

export default Button;
