import Footer from "./Footer";
import Navbar from "../homePage/navbar";
import "./Profile.css";
import ProfilePicture from "./assets/Profile/Profile-Picture.svg";

function Profile() {
  return (
    <>
      <Navbar></Navbar>
      <div class="row align-items-start">
        <div class="col">
          <div className="left-container">
            <div className="left-content">
              <img src={ProfilePicture} alt="Profile Picture" />
              <p id="name-user">Gustio Nusamba</p>
              <p id="email-user">gusti2480@gmail.com</p>
            </div>
          </div>
        </div>
        <div class="col">

          <div className="mid-container">
            <div className="mid-content">
              <h1 id="title">Profile Saya</h1>
              <form>
                <h5>Nama</h5>
                <p>Gustio Nusamba</p>
                <h5>Email</h5>
                <p>gusti2480@gmail.com</p>
                <h5>No. HP</h5>
                <p>08991234567</p>
                <h5>Gender</h5>
                <p>Laki-laki</p>
                <h5>Password</h5>
                <input type="password" value="userpassword" id="password" />
              </form>
            </div>
          </div>
        </div>
        <div class="col">
          <div className="right-container">
            <form>
              <button id="edit">Edit Profil</button>
            </form>
          </div>
        </div>
      </div>

      {/* <Footer></Footer> */}
    </>
  );
}

export default Profile;
