import "./Login.css";
import Img from "./assets/login.png";

function Login() {
  return (
    <div className="row">
      <div className="col bg-white">
        <div className="loginKiri">
          <form>
            <h1 className="title">Trainice</h1>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input type="email" class="form-control w-50" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input type="password" class="form-control w-50" id="exampleInputPassword1" />
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1" />
              <label class="form-check-label" for="exampleCheck1">
                Ingat Saya
              </label>
            </div>
            <a href="#" className="lupaPassword">
              Lupa Password?
            </a>
            <button variant="primary" type="submit" className="btn" id="loginButton">
              Masuk
            </button>
            <p className="login">
              Sudah punya akun?
              <a href="#" className="daftar">
                Daftar disini
              </a>
            </p>
          </form>
        </div>
      </div>
      <div className="col" id="loginKanan">
        <img src={Img} className="card-img-top p-5" id="imgCover" alt="ini gambar" height="770" width="500" />
      </div>
    </div>
  );
}

export default Login;
