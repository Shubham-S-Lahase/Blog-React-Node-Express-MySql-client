import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: ""
  })

  const [file, setFile] = useState(null);

  const [err,setErr] = useState(null);

  const navigate = useNavigate();

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  // console.log(inputs);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const img = await upload();
    try{
      const res = await axios.post("/auth/register", {...inputs, img});
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
        <input type="file" id="file" name="" onChange={(e) => setFile(e.target.files[0])} />
        <label htmlFor="file" id="upload" style={{textAlign:"center", color:"green",}}>Upload Profile Picture</label>
        <button onClick={handleSubmit}>Register</button>
        {err && <p>{err.message}</p>}
        <span>
          Already have an account?<Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;