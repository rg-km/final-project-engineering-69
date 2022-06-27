import "../Registrasi/Form.css";
import ForgotImg from "./assets/forgot.png";
import { Link } from "react-router-dom";
import TrainiceLogo from "../assets/Trainice.png";

function Forgot() {
  return (
    <div className="fluid-container row wrap">
      <div className="form-content-left col-md-6 col-12 py-5">
        <form className="form">
          <div className="form-group">
            <img
              id="logo"
              src={TrainiceLogo}
              alt="Logo Trainice"
              className="mb-5"
            />
            <div className="password-title">
              <h3 className="mb-4">Lupa Password</h3>
              <p>
                Jangan khawatir! Masukkan email atau username anda di bawah dan
                kami akan mengirimkan email dengan instruksi untuk mereset
                password anda.
              </p>
            </div>
            <div className="form-inputs">
              <label htmlFor="email" className="form-label mb-3">
                Email
              </label>
              <input
                type="text"
                name="email"
                className="form-input form-control form-control-sm"
              />
            </div>
            <button type="submit" id="signup" name="submit">
              Kirim
            </button>
            <p className="form-input-login text-center">
              Kembali ke{" "}
              <Link to="/login" className="daftar fw-bold">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>

      <div className="pic col-md-6 col-12 py-5" id="imgBackground">
        <img src={ForgotImg} alt="Forgot Image" className="forgot-image" />
      </div>
    </div>
  );
}

export default Forgot;
