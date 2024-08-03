import React, { useRef, useState } from "react";
import "./LoginPage.css";
import { useStateContext } from "../../contexts/ContextProvider";
import axiosClient from "../../axios-client";

const Login = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [errors, setErrors] = useState(null);
  const { setUser, setToken } = useStateContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      username: usernameRef.current.value,
      password: passwordRefRef.current.value,
    };
    setErrors(null)
    axiosClient
      .post("/login", payload)
      .then(({ data }) => {
        setUser(data.user);
        setToken(data.token);
      })
      .catch(err => {
        const response = err.response;
        if (response && response.status == 422) {
          if (response.data.errors) {
          setErrors(response.data.errors);
          } else {
            setErrors({
              username: [response.data.message]
            })
          }
        }
      });
  };

  return (
    <div className="login-container">
      <div className="login-image">
        <img src="./public/image 7.png" alt="Login" />
      </div>
      <div className="login-form">
        <div className="login-header">
          <ul className="logo">
            <li>
              <img
                src="./public/chevalier logo 2.png"
                alt="Chevalier Logo"
                width={"50px"}
              />
            </li>
            <li>
              <img
                src="./public/cheva logo 2.png"
                alt="Chevalier Lab"
                width={"129px"}
                height={"50px"}
              />
            </li>
          </ul>
          <h1>Welcome!</h1>
          <p>Enter your username and password to access your account</p>
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              ref={usernameRef}
              type="text"
              id="username"
              name="username"
            />
            {errors && (
              <div className="alert">
                {Object.keys(errors).map((key) => (
                  <p key={key}>{er[key][0]}</p>
                ))}
              </div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              ref={passwordRef}
              type="password"
              id="password"
              name="password"
            />
          </div>
          <div className="remember-me">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="login-button" onClick={handleSubmit}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
