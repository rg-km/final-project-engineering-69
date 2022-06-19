import "./Header.css";
import logo from "./assets/Header/Trainice.svg";
import profil from "./assets/Header/person-profil.svg";
import gear from "./assets/Header/gear.svg";
import logout from "./assets/Header/logout.svg";
import container from "./assets/Header/container.svg";
import containerLeft from "./assets/Header/containerLeft.svg";
import containerRight2 from "./assets/Header/containerRight2.svg";

function Header() {
  return (
    <div className="header">
      {/* NAVBAR AWAL*/}
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid mt-3">
          <a className="navTitle" href="#">
            Trainice
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
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
              <li className="nav-item dropdown" id="profile">
                <a
                  className="nav-link dropdown-toggle ms-5 text-dark"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={profil}
                    alt="profil"
                    width="30px"
                    className="me-2"
                  />
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
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

      {/* NAVBAR AKKHIR */}
    </div>
  );
}
export default Header;
