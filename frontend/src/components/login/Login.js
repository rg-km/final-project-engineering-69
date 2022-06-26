import "../Registrasi/Form.css";
import People from "../assets/people.png";
import Trainice from "../assets/Trainice.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const changeEmail = (e) => {
    const dataEmail = e.target.value;
    setEmail(dataEmail);
    console.log(email);
  };
  const changePassword = (e) => {
    const dataPassword = e.target.value;
    setPassword(dataPassword);
    console.log(password);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    axios.post("http://localhost:8080/api/user/login", data).then((result) => {
      if (result) {
        localStorage.setItem("token", result.data.token);
        setRedirect(true);
      }
    });
    console.log(data);
  };
  return (
    <div className="fluid-container row wrap">
      <div className="form-content-left col-md-6 col-12 py-5">
        <form className="form">
          <div className="form-group">
            <img id="logo" src={Trainice} alt="Logo Trainice" />
            <div className="form-inputs">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="text" name="email" className="form-input form-control form-control-sm" onChange={changeEmail} />
            </div>
            <div className="form-inputs">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input type="password" name="password" className="form-input form-control form-control-sm" onChange={changePassword} />
              <Link to="/forgotPassword" className="lupaPassword">
                Lupa password?{" "}
              </Link>
            </div>

            <button id="signup" type="submit" onClick={handleLogin}>
              Masuk
            </button>
            <p className="form-input-login text-center">
              Belum punya akun?{" "}
              <Link to="/registrasi" className="daftar">
                {" "}
                Daftar disini
              </Link>
            </p>
          </div>
        </form>
      </div>
      <div className="pic col-md-6 col-12 py-5" id="imgBackground">
        <img id="people" src={People} alt="people" />
      </div>
    </div>
  );
}

export default Login;
