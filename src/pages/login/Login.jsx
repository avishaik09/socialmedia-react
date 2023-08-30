import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import CircularProgress from "@mui/material/CircularProgress";
import { Navigate, Link } from "react-router-dom";

export default function Login() {
  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);

  const email = useRef();
  const password = useRef();
  const { user, isFetching, dispatch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  console.log(user);

  return (
    <>
      {user && <Navigate to="/" replace={true}></Navigate>}
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
                placeholder="Email"
                type="email"
                className="loginInput"
                required
                ref={email}
              />
              <input
                placeholder="Password"
                type="password"
                className="loginInput"
                required
                minLength="6"
                ref={password}
              />
              <button className="loginButton">
                {isFetching ? (
                  <CircularProgress color="inherit" size="20px" />
                ) : (
                  "Log In"
                )}
              </button>
              <span className="loginForgot">Forgot Password</span>
              <Link to="/register" className="loginRegisterLink">
                <button className="loginRegisterButton">
                  {isFetching ? (
                    <CircularProgress color="inherit" size="20px" />
                  ) : (
                    "Create a New Account"
                  )}
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
