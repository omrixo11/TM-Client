import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast'



const PasswordResetRequest = () => {
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`http://localhost:5001/api/users/forgot-password/${email}`);
       
       toast.success(res.data.message);
       console.log(email); // success message
       navigate('/');
      
    } catch (err) {
      console.error(err);
      setErrorMsg(err.response.data.message);
      toast.error(errorMsg);
    }
  };
  
  return (
    <section className="log-in-section background-image-2 section-b-space">
      <div className="container-fluid-lg w-100">
        <div className="row">
          <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
            <div className="image-contain">
              <img src="assets/images/inner-page/log-in.png" className="img-fluid" alt="" />
            </div>
          </div>

          <div className="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
            <div className="log-in-box">
              <div className="log-in-title">
                <h4>Your email</h4>
              </div>
              <div className="input-box">
                <form className="row g-4" onSubmit={handleSubmit}>
                  <div className="col-12">
                    <div className="form-floating theme-form-floating log-in-form">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter your email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label htmlFor="email">Email Address</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-animation w-100 justify-content-center" type="submit">
                      Send
                    </button>
                  </div>
                </form>
              </div>
              <div className="other-log-in"></div>
              <div className="sign-up-box">
                <h4>Don't have an account?</h4>
                <a href="/Signup">Sign Up</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PasswordResetRequest;
