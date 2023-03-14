import React from 'react';
import data from '../progress';
const Progress = () => {
    return (
        <>
            <div className="container">
                <h1>My Journey</h1>
                <section className="release-note position-relative container-new py-6 px-3 text-left">
                    {data.map((item, index) => (
                        <>
                            <header
                                key={index}
                                className="timeline-decorator d-flex flex-items-center mb-3"
                            >
                                <h2 className="f3-light css-truncate css-truncate-target">
                                    {item.year}
                                </h2>
                            </header>

                            <ul className="list-style-none change-log">
                                <li className="d-flex flex-items-start mb-2">
                                    {/* <div class="change-badge change-badge-new">New</div> */}
                                    <p className="fw-semibold fs-5 change-description">
                                        {item.title}
                                    </p>
                                </li>
                            </ul>
                        </>
                    ))}
                </section>
            </div>
        </>
    );
};

export default Progress;
