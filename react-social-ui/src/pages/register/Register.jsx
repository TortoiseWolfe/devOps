import axios from "axios";
import { useRef } from "react";
import { useHistory } from "react-router";
import "./register.css";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    // console.log(email.current.value);
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity('PassWords do not Match');
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }



    }
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">geoLARP</h3>
          <span className="loginDesc">
            GeoLocated
          </span>
          <span className="loginDesc">
            Live Action Role Playing
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick} >
            <input
              placeholder="Username"
              required
              className="loginInput"
              ref={username}
            />
            <input
              placeholder="Email"
              type='email'
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type='password'
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <input
              placeholder="Password Again"
              type='password'
              required
              className="loginInput"
              ref={passwordAgain}
            />
            <button className="loginButton" type='submit' >Sign Up</button>
            <button className="loginRegisterButton">
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
