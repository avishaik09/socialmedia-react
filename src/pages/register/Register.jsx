import { useRef } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">SocialBook</h3>
            <span className="loginDesc">
              Connect with friends and world around you on SocialBook
            </span>
          </div>
          <div className="loginRight">
            <form className="loginBox" onSubmit={handleSubmit}>
              <input
               placeholder="Username"
              required
              ref={username}
              className="loginInput"
              />
              <input  placeholder="Email"
              required
              ref={email}
              className="loginInput"
              type="email" />

              <input
                placeholder="Password"
              required
              ref={password}
              className="loginInput"
              type="password"
              minLength="6"
              />
              <input
                type="Password"
                required
                ref={passwordAgain}
                placeholder="ReEnter Password"
                className="loginInput"
              />
              <button className="loginButton" type="submit">Sign Up</button>

              <Link to="/login" className="loginRegisterLink">
              <button className="loginRegisterButton">Log into Account.</button>
              </Link>
            
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
