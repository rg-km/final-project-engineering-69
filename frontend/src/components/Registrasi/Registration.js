import "./Form.css";
import PeopleImg from "../assets/people.png";
import TrainiceLogo from "../assets/Trainice.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Registration = () => {
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    nama: "",
    email: "",
    password: "",
    gender: "",
    no_hp: "",
  });

  const handleChange = (event) => {
    setRegister({ ...register, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { nama, email, password, gender, no_hp } = register;
    console.log(register);
    axios
      .post("http://localhost:8080/api/user/register", {
        nama,
        email,
        password,
        gender,
        no_hp,
      })
      .then(() => {
        alert("Sukses Registrasi");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        alert("Registrasi Gagal");
      });
  };
  return (
    <div className="fluid-container row wrap">
      <div className="form-content-left col-md-6 col-12 py-5">
        <form className="form">
          <div className="form-group">
            <img id="logo" src={TrainiceLogo} alt="Logo Trainice" />
            <div className="form-inputs">
              <label htmlFor="nama" className="form-label">
                Nama Lengkap
              </label>
              <input
                type="text"
                name="nama"
                className="form-input form-control form-control-sm"
                onChange={handleChange}
              />
            </div>
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
            </div>
            <div className="form-inputs">
              <label htmlFor="password" className="form-label">
                Gender
              </label>
              <input
                type=""
                name="gender"
                className="form-input form-control form-control-sm"
                onChange={handleChange}
              />
            </div>
            <div className="form-inputs">
              <label htmlFor="password" className="form-label">
                No. Hp
              </label>
              <input
                type="text"
                name="no_hp"
                className="form-input form-control form-control-sm"
                onChange={handleChange}
              />
            </div>

            <button id="signup" type="submit" onClick={handleSubmit}>
              Sign up
            </button>
            <p className="form-input-login text-center">
              Sudah punya akun?{" "}
              <Link to="/login" className="daftar fw-bold">
                {" "}
                Login disini
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
};

export default Registration;
