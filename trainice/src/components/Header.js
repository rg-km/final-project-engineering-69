import '../Header.css'
import Trainice from "../assets/Trainice.png";
import Profil from "../assets/profile.png";
import Setting from "../assets/setting.png";
import Logout from "../assets/logout.png";
import Boy from "../assets/boy.png";

function Header() {
    return (
        <div className='header'>
            {/* NAVBAR AWAL*/}
            <nav class="navbar navbar-expand-lg ">
                <div class="container">
                    <a class="navbar-brand" href="#"><img src={Trainice} alt='logo' /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul class="navbar-nav mb-3 my-2 mb-lg-0 ">
                            <li class="nav-item">
                                <a class="nav-link mx-2" href="#">Beranda</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active mx-2" aria-current="page" href="#">Tentang</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active mx-2" aria-current="page" href="#">Kelas</a>
                            </li>
                            <div className='spaceNavbar'></div>

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                                    <img src={Profil} alt="profil" width="30px" />
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#"><img class="me-2" src={Profil} alt="icon profil" />Profil saya</a></li>
                                    <li><a class="dropdown-item" href="#"><img class="me-2" src={Setting} alt="icon setting" />Pengaturan</a></li>
                                    <li><a class="dropdown-item " href="#"><img class="me-2" src={Logout} alt="icon logout" />Keluar</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="hero-page row">
            <div className="col-md-6">
              <h2>Program Bahasa Inggris <br/><span>Gratis</span> Bagi Pemula <br/>Hingga Para Expert</h2>
              <p>Memberikan pengalaman terbaik belajar bahasa Inggris secara gratis. Temukan teman berbicara bahasa inggrismu dan raih impianmu dengan belajar bahasa inggris secara gratis.</p>
              <button className='btn-explore' type="button">Explore</button>
            </div>
            <figure className="col-md-6">
              <img className="boy" src={Boy} alt="container"/>
            </figure>
          </div>

            
            {/* NAVBAR AKKHIR */}
        </div>
    )
}
export default Header 