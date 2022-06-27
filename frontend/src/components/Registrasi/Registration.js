import "./Form.css";
import People from "../assets/people.png";
import Trainice from "../assets/Trainice.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Registration = () => {
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = register;
    console.log(register);
    axios
      .post("http://localhost:8080/api/user/register", { username, email, password })
      .then(() => {
        alert("sukses");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        alert("registrasi gagal");
      });
  };
  return (
    <div className="fluid-container row wrap">
      <div className="form-content-left col-md-6 col-12 py-5">
        <form className="form">
          <div className="form-group">
            <img id="logo" src={Trainice} alt="Logo Trainice" />
            <div className="form-inputs">
              <label htmlFor="username" className="form-label">
                Nama Lengkap
              </label>
              <input type="text" name="username" className="form-input form-control form-control-sm" onChange={handleChange} />
            </div>
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
            </div>

            <button id="signup" type="submit" onClick={handleSubmit}>
              Sign up
            </button>
            <p className="form-input-login text-center">
              Sudah punya akun?{" "}
              <Link to="/login" className="daftar">
                {" "}
                Login disini
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
};

export default Registration;
