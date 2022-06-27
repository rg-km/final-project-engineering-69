import Footer from "../Footer";
import Header from "../Header";
import "./Profile.css";
import { Link, useNavigate } from "react-router-dom";
import ProfilePicture from "./assets/Profile/Profile-Picture.svg";
import axios from "axios";
import { useEffect } from "react";

function Profile() {
  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate("/editProfile");
  };

  useEffect(() => {
    try{
    axios.get(`http://localhost:8080/api/user/profile?id=3`).then((res) => {
      console.log(res);
    });
  } catch (error){
    console.log(error);
  }
  });

  return (
    <div>
      <Header />
      <div className="contentProfile">
        <div className="row align-items-start">
          <div className="col">
            <div className="left-containerProfile">
              <div className="left-contentProfile">
                <img src={ProfilePicture} alt="Profile Picture" />
                <p id="name-userProfile">Gustio Nusamba</p>
                <p id="email-userProfile">gusti2480@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="mid-containerProfile">
              <div className="mid-contentProfile">
                <h1 id="titleProfile">Profile Saya</h1>
                <form id="formProfile">
                  <h5>Nama</h5>
                  <p>Gustio Nusamba</p>
                  <h5>Email</h5>
                  <p>gusti2480@gmail.com</p>
                  <h5>No. HP</h5>
                  <p>08991234567</p>
                  <h5>Gender</h5>
                  <p>Laki-laki</p>
                </form>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="right-containerProfile">
              <form onSubmit={handleEditProfile}>
                <button type="submit" id="editProfile">
                  Edit Profil
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
