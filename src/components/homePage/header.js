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
import Navbar from './navbar';
// import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="">
            {/* NAVBAR AWAL*/}
            <Navbar />

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