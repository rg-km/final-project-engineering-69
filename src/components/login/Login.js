import "./Login.css";
import Img from "./assets/login.png";

function Login() {
  return (
    <div className="row">
      <div className="col bg-white" id="loginKiri">
        <form>
          <h1 className="title text-4xl my-6 mx-24">Trainice</h1>
          <div class="mb-1">
            <label for="exampleInputEmail1" class="email">
              Email address
            </label>
            <input type="email" class="form-control w-50" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-1">
            <label for="exampleInputPassword1" class="form-label" id="exampleInputPassword">
              Password
            </label>
            <input type="password" class="form-control w-50" id="InputPassword" />
          </div>

          <a href="/" className="lupaPassword">
            Lupa Password?
          </a>
          <div className="my-24 mr-7">
            <button variant="primary" type="submit" className="btn" id="loginButton">
              Masuk
            </button>
            <p className="login">
              Sudah punya akun?
              <a href="/" className="daftar">
                Daftar disini
              </a>
            </p>
          </div>
        </form>
      </div>
      <div className="col" id="loginKanan">
        <img src={Img} className="card-img-top p-5" id="imgCover" alt="ini gambar" />
      </div>
    </div>
  );
}

export default Login;