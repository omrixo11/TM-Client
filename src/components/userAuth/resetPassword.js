import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = ({ match }) => {
  const [password, setPassword] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await axios.post(`http://localhost:5000/api/users/reset-password/${match.params.id}`, { password })
    setSuccessMsg('Le mot de passe a été réinitialisé avec succès.');
    setErrorMsg('');
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      setErrorMsg(error.response.data.message);
    } else {
      setErrorMsg('Une erreur s\'est produite lors de la réinitialisation du mot de passe.');
    }
    setSuccessMsg('');
  }
};


  return (
    <div>
      <h2>Réinitialiser le mot de passe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="password">Nouveau mot de passe:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} required />
        </div>
        {successMsg && <p>{successMsg}</p>}
        {errorMsg && <p>{errorMsg}</p>}
        <button type="submit">Réinitialiser</button>
      </form>
    </div>
  );
};


export default ResetPassword;
