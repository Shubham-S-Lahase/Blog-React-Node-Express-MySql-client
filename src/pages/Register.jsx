import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder="username" />
        <input required type="text" placeholder="passowrd" />
        <input required type="text" placeholder="email" />
        <button>Login</button>
        <p>This is an error!</p>
        <span>
          Already have an account?<Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
