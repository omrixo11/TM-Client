import axios from 'axios'

// const API_URL = '/api/users/';/auth/login
const API_URL = 'http://localhost:5001/auth/';

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL + 'register', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
    console.log(response.data,"data response register")
  }
  return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData)

  if (response.data) {
     localStorage.setItem('user', JSON.stringify(response.data));
    console.log(response.data,"data response login")
  }

  return response.data
}

// Login user
const update = async (userData) => {
  const response = await axios.put('http://localhost:5001/users', userData)

  if (response.data) {
    // localStorage.setItem('user', JSON.stringify(response.data));
    console.log(response.data,"data response update")
  }

  return response.data
}

// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login,
  update

}

export default authService