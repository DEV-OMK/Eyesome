import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { setActiveUser } from "../../store/userSlice";
import { addUser } from "../../store/usersListSlice";

import "./index.css";

const SignUpCard = () => {
  const [usernameInput, setUsernameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const submitForm = (event) => {
    event.preventDefault();
    if (
      usernameInput !== "" &&
      emailInput !== "" &&
      passwordInput !== "" &&
      confirmPasswordInput !== ""
    ) {
      if (passwordInput === confirmPasswordInput) {
        setErrorMsg("");
        const createAccountButton = document.getElementById(
          "createAccountButton"
        );
        createAccountButton.textContent = "Creating Account...";
        createAccountButton.style.backgroundColor = "#073324";
        createAccountButton.style.fontWeight = "bolder";
        Cookies.set("jwtToken", "verified");
        const newUser = {
          id: uuidv4(),
          username: usernameInput,
          email: emailInput,
          password: passwordInput,
        };

        dispatch(setActiveUser(newUser)); //not able to execute
        dispatch(addUser(newUser));

        const timeoutId = setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        setErrorMsg("Password is not same");
      }
    }
  };

  return (
    <form className="sign-up-form" onSubmit={submitForm}>
      <h1>Sign Up</h1>
      <input
        type="text"
        placeholder="Username"
        value={usernameInput}
        onChange={(event) => setUsernameInput(event.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={emailInput}
        onChange={(event) => setEmailInput(event.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={passwordInput}
        onChange={(event) => setPasswordInput(event.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPasswordInput}
        onChange={(event) => setConfirmPasswordInput(event.target.value)}
        required
      />
      {errorMsg !== "" && <p className="sign-up-error-msg">{errorMsg}</p>}
      <button type="submit" id="createAccountButton">
        Create Account
      </button>
      <p className="login-text">
        Already Have an Account ?{" "}
        <span
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </span>
      </p>
    </form>
  );
};

export default SignUpCard;
