import "../Registrasi/Form.css";
import PeopleImg from "../assets/people.png";
import TrainiceLogo from "../assets/Trainice.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    // const data = event.target.value
    setLogin({ ...login, [event.target.name]: event.target.value });
    console.log(login);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const { email, password } = login;
    console.log(email, password);
    axios
      .post("http://localhost:8080/api/user/login", { email, password })
      .then((res) => {
        let { data } = res;
        console.log(data);
        localStorage.setItem("email", data.email);
        Cookies.set("user-info", data, { expires: 1 });
        alert("Login Sukses");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.response);
        alert("Login Gagal");
      });
  };

  return (
    <div className="fluid-container row wrap">
      <div className="form-content-left col-md-6 col-12 py-5">
        <form className="form">
          <div className="form-group">
            <img id="logo" src={TrainiceLogo} alt="Logo Trainice" />
            <div className="form-inputs">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="text"
                name="email"
                className="form-input form-control form-control-sm"
                onChange={handleChange}
              />
            </div>
            <div className="form-inputs">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="form-input form-control form-control-sm"
                onChange={handleChange}
              />
              <Link to="/forgotPassword" className="lupaPassword fw-bold">
                Lupa password?{" "}
              </Link>
            </div>

            <button id="signup" type="submit" onClick={handleSubmit}>
              Masuk
            </button>
            <p className="form-input-login text-center fw-normal">
              Belum punya akun?{" "}
              <Link to="/registrasi" className="daftar fw-bolder">
                {" "}
                Daftar disini
              </Link>
            </p>
          </div>
        </form>
      </div>
      <div className="pic col-md-6 col-12 py-5" id="imgBackground">
        <img id="people" src={PeopleImg} alt="people" />
      </div>
    </div>
  );
}

export default Login;
