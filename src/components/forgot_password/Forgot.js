import "./Forgot.css";
import ForgotImg from "./assets/forgot.png";
import { Link } from "react-router-dom";

function Forgot() {
  return (
    <div className="forgot-container container-fluid">
      <div className="left-container">
        <div className="left-content">
          <h1 id="title">Trainice</h1>
          <div className="password-title">
            <h3>Lupa Password</h3>
            <p>
              Jangan khawatir! Masukkan email atau username anda di bawah dan
              kami akan mengirimkan email dengan instruksi untuk mereset
              password anda.
            </p>
          </div>
          <p for="email" className="email">
            Email atau Username
          </p>
          <form method="post">
            <input type="email" className="email-box" name="email" required />
            <br />
            <input type="submit" id="submit" name="submit" value="Kirim" />
          </form>
          <p className="description">
            Kembali ke <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
      <div className="right-container">
        <div className="right-content">
          <img src={ForgotImg} alt="Forgot Image" className="forgot-image" />
        </div>
      </div>
    </div>
  );
}

export default Forgot;
