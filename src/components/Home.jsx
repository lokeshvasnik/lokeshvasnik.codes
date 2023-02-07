import React from 'react';
import profile from '../assets/profile.png';
const Home = () => {
    return (
        <div>
            <div id="section" className="container">
                <section>
                    <div className="row py-lg-5">
                        <div className="col-lg-6 d-flex flex-column justify-content-center ">
                            <h1 className="fw-bold hidden">
                                Lokesh Vasnik a Web Designer & Front-End
                                Developer
                            </h1>
                            <p className="w-75 hidden">
                                Hey there! Lokesh here I'm from India🇮🇳 a
                                Computer Science student I have been developing
                                various websites, especially on the Front End
                                using HTML,CSS,JAVASCRIPT & REACT, and also
                                working as a freelancer on FIVER
                            </p>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center align-items-center hidden ">
                            <img
                                className="w-75 profile"
                                src={profile}
                                alt="Image"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;
