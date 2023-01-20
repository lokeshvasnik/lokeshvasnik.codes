import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState('');
    const [data, setData] = useState([]);

    const [fullText, setFullText] = useState(
        `WELCOME TO lokesh_vasnik PROJECT SECTION.`
    );

    useEffect(() => {
        if (index < fullText.length) {
            const timeoutId = setTimeout(() => {
                setText(text + fullText[index]);
                setIndex(index + 1);
            }, 100);

            return () => clearTimeout(timeoutId);
        }
    }, [index]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(
                    'https://projectlinkapi.up.railway.app/api',
                    {
                        method: 'GET',
                    }
                );

                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error(error);
            }
        };

        getData();
    }, []);

    return (
        <>
            <div className="container py-5">
                <div className="row text-center text-white">
                    <div className="col-lg-8 mx-auto">
                        <p className="lead mb-0">{text}</p>
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
                            <div className=" cardBox bg-white rounded shadow-sm py-5 px-4">
                                <img
                                    src={element.img}
                                    alt=""
                                    className="img-fluid mb-3 img-thumbnail shadow-sm"
                                />
                                <h5 className="mb-0">{element.title}</h5>
                                <span className="small text-uppercase text-muted">
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

export default Hero;
