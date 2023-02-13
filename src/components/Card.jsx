import React, { useState, useEffect } from 'react';

const Project = ({ data, color }) => {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState('');

    // The heading animation
    const [fullText, setFullText] = useState(
        `HERE ARE SOME PROJECTS MADE BY ME FEEL FREE TO CHECK IT OUT`
    );

    // Heading animation logic
    useEffect(() => {
        if (index < fullText.length) {
            const timeoutId = setTimeout(() => {
                setText(text + fullText[index]);
                setIndex(index + 1);
            }, 100);

            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, [index]);

    return (
        <>
            <div className="container py-5">
                <div className="row text-center text-white">
                    <div className="col-lg-8 mx-auto">
                        <p className="bg-dark lead mb-0">{text}</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row text-center">
                    {data.map((element, index) => (
                        <div
                            className="col-xl-3 col-sm-6 mb-5 d-flex"
                            key={index}
                        >
                            <div
                                className={`cardBox rounded shadow-sm py-5 px-4 ${
                                    color === 'light'
                                        ? `${'bg-white '}`
                                        : `${'bg-dark text-white '}`
                                } `}
                            >
                                <a href={element.website} target="_blank">
                                    <img
                                        src={element.img}
                                        alt=""
                                        className="img-fluid mb-3 img-thumbnail shadow-sm"
                                    />
                                </a>
                                <h5 className="mb-0">{element.title}</h5>
                                <span className="small text-uppercase ">
                                    {element.des}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Project;
