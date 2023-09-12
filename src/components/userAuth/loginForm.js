import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import { login, reset } from '../../features/auth/authSlice'
import Spinner from "../Spinner";


const LoginForm = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isLoading, isError, isSuccess, isLoggedIn, message } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }

        if (isSuccess || user) {
            navigate('/');
        }

        dispatch(reset());
    }, [user, isError, isSuccess, message, navigate, dispatch]);

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (!password) {
            toast.error('Password is required');
            return;
        }
        const userData = {
            email, password
        };
        dispatch(login(userData));
    };

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <section className="log-in-section background-image-2 section-b-space">
            <div className="container-fluid-lg w-100">
                <div className="row">
                    <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
                        <div className="image-contain">
                            <img src="../assets/images/inner-page/log-in.png" className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
                        <div className="log-in-box">
                            <div className="log-in-title">
                                <h3>Bienvenue a Tunis Market</h3>
                                <h4>Connecter vous</h4>
                            </div>
                            <div className="input-box">
                                <form className="row g-4" onSubmit={onSubmit}>
                                    <div className="col-12">
                                        <div className="form-floating theme-form-floating log-in-form">
                                            <input type="email" className="form-control" id='email' name='email' value={email} placeholder="Email" onChange={onChange} />
                                            <label for="email">Addresse email</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating theme-form-floating log-in-form">
                                            <input type="password" className="form-control" id="password" placeholder="Password" name='password' value={password} onChange={onChange} />
                                            <label for="password">Mot de passe</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="forgot-box">
                                            
                                            <a href="/resetpassword" className="forgot-password">Mot de passe oublié ?</a>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <button className="btn btn-animation w-100 justify-content-center" type="submit">Se connecter</button>
                                    </div>
                                </form>
                            </div>

                            

                           

                            <div className="other-log-in">
                                <h6></h6>
                            </div>

                            <div className="sign-up-box">
                                <h4>Vous n'avez pas de compte ?</h4>
                                <a href="/Signup">Créer un compte</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
};

export default LoginForm;
