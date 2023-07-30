import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: ""
  })

  const [err,setErr] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  // console.log(inputs);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const res = await axios.post("api/auth/register", inputs);
      // console.log(res);
      if(res.statusText === "OK"){
        navigate("/login");
      }
    }catch(err){
      setErr(err.response.data)
      console.log("Error while Registering user:>",err);
    }
  }

  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder="username" name="username" onChange={handleChange} />
        <input required type="text" placeholder="email" name="email" onChange={handleChange} />
        <input required type="text" placeholder="password" name="password" onChange={handleChange} />
        <button onClick={handleSubmit}>Register</button>
        {err && <p>{err}</p>}
        <span>
          Already have an account?<Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;