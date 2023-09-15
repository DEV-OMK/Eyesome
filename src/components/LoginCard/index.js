import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import "./index.css";

const LoginCard = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const usersList = useSelector((state) => state.usersList);

  const navigate = useNavigate();

  const submitForm = (event) => {
    event.preventDefault();
    if (emailInput !== "" && passwordInput !== "") {
      if (
        usersList.some(
          (user) => emailInput === user.email && passwordInput === user.password
        )
      ) {
        setErrorMsg("");
        const loginButton = document.getElementById("loginButton");
        loginButton.textContent = "Logging In...";
        loginButton.style.backgroundColor = "#9af775";
        loginButton.style.fontWeight = "bolder";
        Cookies.set("jwtToken", "verified");
        const timeoutId = setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        setErrorMsg("Email OR Password are invalid");
      }
    }
  };

  return (
    <form className="login-form" onSubmit={submitForm}>
      <h1>Login to Your Account</h1>
      <label htmlFor="signUpEmail">Email</label>
      <input
        type="email"
        id="signUpEmail"
        value={emailInput}
        onChange={(event) => setEmailInput(event.target.value)}
        required
      />
      <label htmlFor="signUpPassword">Password</label>
      <input
        type="password"
        id="signUpPassword"
        value={passwordInput}
        onChange={(event) => setPasswordInput(event.target.value)}
        required
      />
      {errorMsg !== "" && <p className="login-error-msg">{errorMsg}</p>}
      <button type="submit" id="loginButton" className="login-button">
        Login
      </button>
      <button
        type="button"
        className="guest-button"
        onClick={() => {
          setEmailInput("robin@rediffmail.com");
          setPasswordInput("robin@123");
        }}
      >
        Login as Guest
      </button>
      <p
        className="create-account-text"
        onClick={() => {
          navigate("/signup");
        }}
      >
        Create New Account
      </p>
    </form>
  );
};

export default LoginCard;
