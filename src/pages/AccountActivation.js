import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'

const AccountActivation = () => {

    const {verificationcode} = useParams(); 
    console.log(verificationcode)
    
    // useEffect(() => {
    //     axios.post(`http://localhost:5001/api/users/${verificationcode}`)
    //     .then(res => {
    //         console.log(res.data);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
    // }, [verificationcode])

    return (

        <section className="log-in-section otp-section section-b-space">
            <div className="container-fluid-lg">
                <div className="row">
                    <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
                        <div className="image-contain">
                            <img src="assets/images/inner-page/otp.png" className="img-fluid" alt=""/>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
                        <div className="d-flex align-items-center justify-content-center h-100">
                            <div className="log-in-box">
                                <div className="log-in-title">
                                    <h3 className="text-title">Your account is now verified !</h3>
                                </div>
                                <button href="/login" className="btn btn-animation w-100 mt-3"
                                    type="submit">Log in</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default AccountActivation;
