import "./Header.css";
import logo from "./assets/header/Trainice.svg";
import profil from "./assets/header/person-profil.svg";
import gear from "./assets/header/gear.svg";
import logout from "./assets/header/logout.svg";
import container from "./assets/header/container.svg";
import containerLeft from "./assets/header/containerLeft.svg";
import containerRight2 from "./assets/header/containerRight2.svg";

function Header() {
  return (
    <div className="header">
      {/* NAVBAR AWAL*/}
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid mt-3">
          <a className="navTitle" href="#">
            Trainice
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="text-home" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="text-event" aria-current="page" href="#">
                  Event
                </a>
              </li>
              <li className="nav-item">
                <a className="text-tentang" href="#">
                  Tentang
                </a>
              </li>
              <div className="spaceNavbar"></div>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle ms-5 text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src={profil} alt="profil" width="30px" className="me-2" />
                </a>
                <ul className="dropdown-menu" id="profile" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      <img className="me-2" src={profil} alt="profil" />
                      Profil saya
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <img className="me-2" src={gear} alt="profil" />
                      Pengaturan
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item " href="#">
                      <img className="me-2" src={logout} alt="profil" />
                      Keluar
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="row ">
        <div className="col">
          <div className="text">
            <h1 className="judul">Tentang Trainice</h1>
            <p className="deskripsi">
              Trainice adalah sebuah platform <br />
              pendidikan dengan tujuan <br /> mencerdaskan anak bangsa
            </p>
          </div>
          <button className="buttonExplore" type="button">
            Explore
          </button>
        </div>
        <div className="col">
          <img className="containerRight" src={container} alt="container" width="400px" />
        </div>
      </div>
      {/* NAVBAR AKKHIR */}
    </div>
  );
}
export default Header;
