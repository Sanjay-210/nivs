import React, { useState, useEffect } from 'react'
import Loader from '../components/Loader';
import customise from "../../assets/img/customize_designer.png";

export const Build = () => {
    const [loading, setLoading] = useState(true); // Corrected useState

    useEffect(() => {
        setTimeout(() => {
            setLoading(false); // Set loading to false after 15 seconds
        }, 1500);
    }, []);

    

    if (loading) {
        return <Loader />; // Return Loader if still loading
    }

    return (
        <>
            <section>
                <div className="hero-wrapper page-cover position-relative">
                    <div className="container">
                        <div className="hero-inner-wrapper">
                            <div className="hero-content text-center">
                                <h2 className="text-uppercase">Customized Jewellery</h2>
                                <div className="breadcrumb-wrapper">
                                    <ol className="breadcrumb justify-content-center">
                                        <li className="text-uppercase position-relative">
                                            <a href="/">Home</a>
                                        </li>
                                        <li className="text-uppercase active">Customized Jewellery</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="brand-wrapper pd-b-20 pd-t-100">
                    <div className="container">
                        <div className="brand-inner-wrapper">
                            <div className="style-two position-relative mb-3">

                                <form className="row">
                                    <div className="col-lg-12 mb-3">
                                        <div className="sec-tl style-two position-relative">
                                            <div className="section-heading position-relative text-center">

                                                <h3
                                                    className="text-uppercase"
                                                    style={{ color: "var(--theme-color)" }}
                                                >
                                                    Provide Your Contact Details
                                                </h3>

                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-lg-4 mb-3">
                                        <label>Name</label>
                                        <input type="text" name="person_name" className='form-control' placeholder='Enter your name' />
                                    </div>
                                    <div className="col-lg-4 mb-3">
                                        <label>Email</label>
                                        <input type="text" name="person_email" className='form-control' placeholder='Enter your email' />
                                    </div>
                                    <div className="col-lg-4 mb-3">
                                        <label>Phone no</label>
                                        <input type="text" name="person_phoneno" className='form-control' placeholder='Enter your phoneno' />
                                    </div>
                                    <div className="col-lg-12 mb-3">
                                        <label>Address</label>
                                        <textarea name="person_address" className='form-control' placeholder='Enter your address'></textarea>
                                    </div>
                                    <div className="col-lg-12 mb-3">
                                        <div className="sec-tl style-two position-relative">
                                            <div className="section-heading position-relative text-center">

                                                <h3
                                                    className="text-uppercase"
                                                    style={{ color: "var(--theme-color)" }}
                                                >
                                                    How would you like to provide the design?
                                                </h3>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 text-center mb-3">
                                        <img src={customise} style={{width: "150px"}} alt="Customized Designer" />
                                    </div>
                                    <div className="col-lg-8 mb-3 row">
                                        <div className='col-lg-6 mb-3'>
                                            <label htmlFor="own_design"> <h6> <input type='radio' value="1" name="upload_type" id="own_design" /> Upload Own design</h6></label>
                                        </div>
                                        <div className='col-lg-6 mb-3'>
                                            <label htmlFor="collection"> <h6> <input type='radio' value="2" name="upload_type" id="collection" />  Select a design from Nivsjewels collection</h6></label>
                                        </div>
                                        <div className='row'>
                                            <div className='col-lg-4 mb-3'>
                                                
                                            </div>
                                            <div className='col-lg-8 mb-3'>

                                            </div>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}
