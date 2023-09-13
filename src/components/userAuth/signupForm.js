import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import { register, reset } from '../../features/auth/authSlice'
import Spinner from "../Spinner";

function SignupForm() {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        password2: '',
        phoneNumber: '',
        dateOfBirth: '',
        companyName: '',
        companyAdress: '',
        matriculeFiscale: '',
        assujettieTVA: '',
        patente: '',
        RNE: '',
    })

    const {
        firstname,
        lastname,
        email,
        password,
        password2,
        phoneNumber,
        dateOfBirth,
        companyName,
        companyAdress,
        matriculeFiscale,
        assujettieTVA,
        patente,
        RNE } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    )

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess) {
            navigate('/login')
            toast.success('Compte créé avec succès. Veuillez vérifier votre e-mail pour la vérification.')
        }

        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (password !== password2) {
            toast.error('Passwords do not match')
        } else {
            const userData = {
                firstname,
                lastname,
                email,
                password,
                phoneNumber,
                dateOfBirth,
                companyName,
                companyAdress,
                matriculeFiscale,
                assujettieTVA,
                patente,
                RNE
            }

            dispatch(register(userData))
        }
    }

    if (isLoading) {
        return <Spinner />
    }
    return (
        <section className="log-in-section section-b-space">
            <div className="container-fluid-lg w-100">
                <div className="row">
                    <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
                        <div className="image-contain">
                            <img src="assets/images/inner-page/sign-up.png" className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
                        <div className="log-in-box">
                            <div className="log-in-title">
                                <h3>Bienvenue a Tunis Market</h3>
                                <h4>Créer un compte</h4>
                            </div>
                            <div className="input-box">
                                <form className="row g-4" onSubmit={onSubmit}>
                                    <div className="col-12">
                                        <div className="form-floating theme-form-floating">
                                            <input type="text" className="form-control" id='name' name='firstname' value={firstname} placeholder="First Name" onChange={onChange} />
                                            <label for="fullname">Nom</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating theme-form-floating">
                                            <input type="text" className="form-control" id='lname' name='lastname' value={lastname} placeholder="Last Name" onChange={onChange} />
                                            <label for="fullname">Prenom</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating theme-form-floating">
                                            <input type="email" className="form-control" id='email' name='email' value={email} placeholder="Email" onChange={onChange} />
                                            <label for="email">Addresse Email</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating theme-form-floating">
                                            <input type="password" className="form-control" id="password" placeholder="Password" name='password' value={password} onChange={onChange} />
                                            <label for="password">Mot de passe</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating theme-form-floating">
                                            <input type="password" className="form-control" id="password2" placeholder="Confirm password" name='password2' value={password2} onChange={onChange} />
                                            <label for="password">Confirmer mot de passe</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating theme-form-floating">
                                            <input type="number" className="form-control" id="phoneNumber" placeholder="phoneNumber" name='phoneNumber' value={phoneNumber} onChange={onChange} />
                                            <label for="phoneNumber">Tele</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating theme-form-floating">
                                            <input type="date" className="form-control" id="dateOfBirth" placeholder="dateOfBirth" name='dateOfBirth' value={dateOfBirth} onChange={onChange} />
                                            <label for="dateOfBirth">Date de naissance</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating theme-form-floating">
                                            <input type="text" className="form-control" id="companyName" placeholder="companyName" name='companyName' value={companyName} onChange={onChange} />
                                            <label for="companyName">Nom de la societe</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating theme-form-floating">
                                            <input type="text" className="form-control" id="companyAdress" placeholder="companyAdress" name='companyAdress' value={companyAdress} onChange={onChange} />
                                            <label for="companyAdress">Adresse de la societe</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating theme-form-floating">
                                            <input type="text" className="form-control" id="matriculeFiscale" placeholder="matriculeFiscale" name='matriculeFiscale' value={matriculeFiscale} onChange={onChange} />
                                            <label for="matriculeFiscale">Matricule fiscale</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating theme-form-floating">
                                            <input type="text" className="form-control" id="assujettieTVA" placeholder="assujettieTVA" name='assujettieTVA' value={assujettieTVA} onChange={onChange} />
                                            <label for="assujettieTVA">Asujetti à la TVA</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating theme-form-floating">
                                            <input type="file" className="form-control" id="patente" placeholder="patente" name='patente' onChange={onChange} />
                                            <label for="assujettieTVA">Patente</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating theme-form-floating">
                                            <input type="file" className="form-control" id="RNE" placeholder="RNE" name='RNE' onChange={onChange} />
                                            <label for="RNE">RNE</label>
                                        </div>
                                    </div>


                                    <div className="col-12">
                                        <button className="btn btn-animation w-100" type="submit">Créer un compte</button>
                                    </div>
                                </form>
                            </div>

                            <div className="other-log-in">
                                <h6></h6>
                            </div>

                            <div className="sign-up-box">
                                <h4>Vous avez déjà un compte ?</h4>
                                <a href="/Login">Connecter vous</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-xxl-7 col-xl-6 col-lg-6"></div>
                </div>
            </div>
        </section>
    )
};

export default SignupForm;
