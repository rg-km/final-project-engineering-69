import './Header.css'
import Trainice from "../assets/Trainice.png";
import Profil from "../assets/profile.png";
import Setting from "../assets/setting.png";
import Logout from "../assets/logout.png";

function Header() {
    return (
        <div className='header'>
            {/* NAVBAR AWAL*/}
            <nav class="navbar navbar-expand-lg ">
                <div class="container">
                    <img src={Trainice} alt='logo' className='logo' />
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
                                    <img src={Profil} alt="profil"/>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end p-2">
                                    <li><a class="dropdown-item" href="#"><img class="m-1" src={Profil} alt="icon profil" />Profil saya</a></li>
                                    <li><a class="dropdown-item" href="#"><img class="m-1" src={Setting} alt="icon setting" />Pengaturan</a></li>
                                    <li><a class="dropdown-item " href="#"><img class="m-1" src={Logout} alt="icon logout" />Keluar</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Header 