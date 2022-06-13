import './header.css';
import logo from "./image/Trainice.svg";
import profil from './image/person-profil.svg'
import england from './image/england.svg'
import indonesia from './image/indonesia.svg'
import night from './image/Crescent Moon.svg'
import gear from './image/gear.svg'
import logout from './image/logout.svg'
import container from './image/container.svg'
import containerLeft from './image/containerLeft.svg'
import containerRight2 from './image/containerRight2.svg'

function Header() {
    return (
        <div className="header">
            {/* NAVBAR AWAL*/}
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid ">
                    <a class="navbar-brand me-5 ms-5" href="#"><img src={logo} alt='logo' /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li class="nav-item">
                                <a class="nav-link active me-5 text-dark" aria-current="page" href="#">Tentang</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle me-5 text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Kelas
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Kelas Anak</a></li>
                                    <li><a class="dropdown-item" href="#">Kelas Reguler</a></li>
                                    <li><a class="dropdown-item" href="#">Kelas Karyawan</a></li>
                                    <li><a class="dropdown-item" href="#">Kelas Gratis</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-dark" href="#">Event</a>
                            </li>
                            <div className='spaceNavbar'></div>
                            <li class="nav-item" className='flag'>
                                <a class="nav-link" href="#"><img src={indonesia} alt="england" width="20px" />
                                </a>
                            </li>
                            <div className='line'></div>
                            <li class="nav-item me-4">
                                <a class="nav-link" href="#"><img src={england} alt="england" width="20px" />
                                </a>
                            </li>
                            <li class="nav-item me-4">
                                <a class="nav-link" href="#"><img src={night} alt="england" width="20px" />
                                </a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle ms-5 text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={profil} alt="profil" />
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#"><img class="me-2" src={profil} alt="profil" />Profil saya</a></li>
                                    <li><a class="dropdown-item" href="#"><img class="me-2" src={gear} alt="profil" />Pengaturan</a></li>
                                    <li><a class="dropdown-item " href="#"><img class="me-2" src={logout} alt="profil" />Keluar</a></li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
            <div class="row ">
                <div class="col"  >
                    <img className="containerLeft" src={containerLeft} alt="container" />
                    <button className='buttonContainer' type="button" >Explore</button>
                </div>
                <div class="col" >
                    <img className="containerRight" src={container} alt="container" width="400px" />
                    <img className="containerRight" src={containerRight2} alt="container" width="400px" />

                </div>
            </div>
            {/* NAVBAR AKKHIR */}
        </div>
    )
}
export default Header