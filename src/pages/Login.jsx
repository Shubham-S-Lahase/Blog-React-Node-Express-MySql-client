import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext';


const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: ""
  })

  const [err,setErr] = useState(null);

  const navigate = useNavigate();

  const {  login } = useContext(AuthContext)


  const handleChange = (e) => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  // console.log(inputs);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(inputs);
      if (res.status === 200) { 
        navigate("/");
      }
    } catch (err) {
      console.error("Error while logging in user:", err);
      if (err.response && err.response.data) {
        setErr(err.response.data.message || "An error occurred");
      } else {
        setErr("An unknown error occurred");
      }
    }
  };

  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder='Username' name='username' onChange={handleChange} />
        <input required type="text" placeholder='Password' name='password' onChange={handleChange} />
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>Don't you have an account?<Link to="/register">Register</Link></span>
      </form>
    </div>
  )
}

export default Login