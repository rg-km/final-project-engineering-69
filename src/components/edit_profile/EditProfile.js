import Footer from "../Footer";
import Header from "../Header";
import "./EditProfile.css";
import { Link, useNavigate } from "react-router-dom";
import EditProfileImage from "./assets/EditProfile/EditProfileImage.svg";

function EditProfile() {
  const navigate = useNavigate();

  const handleSubmitEditProfile = () => {
    navigate("/profile");
  };
  return (
    <>
      <Header />
      <div className="edit-profile-container container-fluid">
        <div className="edit-profile-content">
          <div className="left-container">
            <img src={EditProfileImage} />
          </div>
          <div className="mid-container">
            <div className="mid-content">
              <h5>Gustio Nusamba</h5>
              <p>gusti2480@gmail.com</p>
              <form>
                <label for="name">Nama</label>
                <br />
                <input type="text" id="name" name="name" />
                <br />
                <label for="email">Email</label>
                <br />
                <input type="email" id="email" name="email" />
                <br />
                <label for="hp">No. HP</label>
                <br />
                <input type="number" id="hp" name="hp" />
              </form>
            </div>
          </div>
          <div className="right-container">
            <div className="right-content">
              <form>
                <p id="gender">Gender</p>
                <input type="radio" id="laki" name="gender" value="laki" />
                <label for="laki" class="gender-label">
                  Laki-laki
                </label>
                <input type="radio" id="perempuan" name="gender" value="perempuan" />
                <label for="perempuan" class="gender-label">
                  Perempuan
                </label>
                <br />
                <label for="password" id="password-label">
                  Password
                </label>
                <br />
                <input type="password" id="password" name="password" />
                <br />
              </form>
            </div>
          </div>
        </div>
        <div className="form-submit">
          <form onSubmit={handleSubmitEditProfile}>
            <input type="submit" id="submit" value="Simpan Perubahan" />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EditProfile;
