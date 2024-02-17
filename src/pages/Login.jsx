import React from "react";
import { useLocation } from "react-router-dom";
import { loginUser } from "../api";

const Login = () => {
  const [loginFormData, setLoginFormData] = React.useState({
    email: "",
    password: "",
  });
  const location = useLocation();

  function handleSubmit(e) {
    e.preventDefault();
    loginUser(loginFormData).then((data) => console.log(data));
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  return (
    <div className="login-container">
      {location.state?.message && (
        <h3 className="login-first">{location.state.message}</h3>
      )}
      <h1>Sign in to your account</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="Email address"
        />
        <input
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="password"
        />
        <button>Log in</button>
      </form>
    </div>
  );
};

export default Login;
