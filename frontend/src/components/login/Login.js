import "../Registrasi/Form.css";
import People from "../assets/people.png";
import Trainice from "../assets/Trainice.png";
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
  const handleChange = (e) => {
    // const data = e.target.value
    setLogin({ ...login, [e.target.name]: e.target.value });
    console.log(login);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = login;
    console.log(email, password);
    axios
      .post("http://localhost:8080/api/user/login", { email, password })
      .then((res) => {
        let { data } = res;
        Cookies.set("token", data.token, { expires: 1 });
        alert("login sukses");
        // navigate("/");
      })
      .catch((err) => {
        console.log(err.response);
        alert("login gagal");
      });
  };

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/");
    }
  });

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
              <input type="text" name="email" className="form-input form-control form-control-sm" onChange={handleChange} />
            </div>
            <div className="form-inputs">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input type="password" name="password" className="form-input form-control form-control-sm" onChange={handleChange} />
              <Link to="/forgotPassword" className="lupaPassword">
                Lupa password?{" "}
              </Link>
            </div>

            <button id="signup" type="submit" onClick={handleSubmit}>
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
