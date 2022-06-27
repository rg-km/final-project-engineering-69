import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/homePage/homePage";
import About from "./components/about/About";
import RoomSport from "./components/room/RoomSport";
import RoomGame from "./components/room/RoomGame";
import RoomBudaya from "./components/room/RoomBudaya";
import RoomMusik from "./components/room/RoomMusik";
import Room from "./components/room/RoomIndex";
import Login from "./components/login/Login";
import Kelas from "./components/Kelas_Gratis/Kelas";
import Profil from "./components/profile/Profile";
import EditProfile from "./components/edit_profile/EditProfile";
import Registrasi from "./components/Registrasi/Registration";
import ForgotPassword from "./components/forgot_password/Forgot";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="registrasi" element={<Registrasi />} />
        <Route path="login" element={<Login />} />
        <Route path="kelas" element={<Kelas />} />
        <Route path="room-sport" element={<RoomSport />} />
        <Route path="room-game" element={<RoomGame />} />
        <Route path="room-budaya" element={<RoomBudaya />} />
        <Route path="room-musik" element={<RoomMusik />} />
        <Route path="room" element={<Room />} />
        <Route path="registrasi" element={<Registrasi />} />
        <Route path="profile" element={<Profil />} />
        <Route path="editProfile" element={<EditProfile />} />
        <Route path="forgotPassword" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default App;
