import React from 'react';
import { BarLoader } from 'react-spinners';
import githubIcon from '../assets/github.svg';
import websiteIcon from '../assets/web.svg';
const Project = ({ data, color, loading }) => {
    return (
        <>
            <div className="container">
                <div className="row text-center">
                    {data.map((element, index) => (
                        <div
                            className="col-xl-3 col-sm-6 mb-5 d-flex"
                            key={index}
                        >
                            <div
                                className={`cardBox rounded shadow-sm py-3 px-4 ${
                                    color === 'light'
                                        ? `${'bg-white '}`
                                        : `${'bg-dark text-white '}`
                                } `}
                            >
                                <div className="d-flex justify-content-between mb-3">
                                    <a
                                        href={element.websiteLink}
                                        target="_blank"
                                    >
                                        <img src={websiteIcon} alt="website" />
                                    </a>
                                    <a href={element.githubLink}>
                                        <img src={githubIcon} alt="github" />
                                    </a>
                                </div>
                                <div target="_blank">
                                    {loading ? (
                                        <div className="d-flex justify-content-center align-items-center">
                                            <BarLoader color="#36d7b7" />
                                        </div>
                                    ) : (
                                        <img
                                            src={element.imageLink}
                                            alt=""
                                            className="img-fluid mb-3 img-thumbnail shadow-sm"
                                        />
                                    )}
                                </div>
                                <div>
                                    <h5 className="mb-0">{element.title}</h5>
                                    <span className="small text-uppercase ">
                                        {element.description}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Project;
