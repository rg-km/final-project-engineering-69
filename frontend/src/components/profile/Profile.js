import Footer from "../Footer";
import Header from "../Header";
import "./Profile.css";
import { Link, useNavigate } from "react-router-dom";
import ProfilePicture from "./assets/Profile/Profile-Picture.svg";
import axios from "axios";
import { useEffect, useState } from "react";

function Profile() {
  const navigate = useNavigate();
  const handleEditProfile = () => {
    navigate("/editProfile");
  };
  const [pesertaLomba, setPesertaLomba] = useState([]);

  const fetchData = async () => {
    const result = await axios.get(`http://localhost:8080/api/user/profile?id=5`);
    const data = result.data.profile;
    console.log(result.data);

    setPesertaLomba(
      data.map((x) => {
        return {
          id: x.id,
          name: x.name,
          email: x.email,
          gender: x.gender,
          no_hp: x.no_hp,
        };
      })
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <div className="contentProfile">
        <div className="row align-items-start">
          <div className="col">
            <div className="left-containerProfile">
              <div className="left-contentProfile">
                <img src={ProfilePicture} alt="Profile Picture" />
                {pesertaLomba.map((item) => {
                  return (
                    <div>
                      <p id="name-userProfile">{item.name}</p>
                      <p id="email-userProfile">{item.email}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col">
            <div className="mid-containerProfile">
              <div className="mid-contentProfile">
                <h1 id="titleProfile">Profile Saya</h1>
                {pesertaLomba.map((item) => {
                  return (
                    <form id="formProfile">
                      <h5>Nama</h5>
                      <p>{item.name}</p>
                      <h5>Email</h5>
                      <p>{item.email}</p>
                      <h5>No. HP</h5>
                      <p>{item.no_hp}</p>
                      <h5>Gender</h5>
                      <p>{item.gender}</p>
                    </form>
                  );
                })}
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
