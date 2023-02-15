import React from 'react';
import { BarLoader } from 'react-spinners';
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
                                className={`cardBox rounded shadow-sm py-5 px-4 ${
                                    color === 'light'
                                        ? `${'bg-white '}`
                                        : `${'bg-dark text-white '}`
                                } `}
                            >
                                <div href={element.website} target="_blank">
                                    {loading ? (
                                        <div className="d-flex justify-content-center align-items-center">
                                            <BarLoader color="#36d7b7" />
                                        </div>
                                    ) : (
                                        <img
                                            src={element.img}
                                            alt=""
                                            className="img-fluid mb-3 img-thumbnail shadow-sm"
                                        />
                                    )}
                                </div>
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
