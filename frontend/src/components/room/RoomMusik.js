import "./room.css";
import study from "./image/Study.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function RoomMusik() {
  const [data, setData] = useState([]);
  const title = "Topik Musik"
  const email = localStorage.getItem("email");
  const fetchData = async () => {
    const result = await axios.get(`http://localhost:8080/api/user/dashboard?email=${email}`);
    const data = result.data.dashboard;
    console.log(result.data);

    setData(
      data.map((x) => {
        return {
          name: x.name,
        };
      })
    );
  };
  useEffect(() => {
    fetchData();
  });
  return (
    <div className="room">
      <nav class="navbar">
        <div class="container-fluid">
          <a class="navbar-brand text-dark fw-bold fs-4">Class</a>
          <Link to="/">
            <button className="buttonContainer me-5" type="button">
              Kembali
            </button>
          </Link>
        </div>
      </nav>
      <div class="row ">
        <div class="col ms-5">
          <div class="card mb-3 ms-5 shadow">
            <div class="row g-0">
              <div class="col-md-4">
                <img src={study} class="img-fluid rounded-start" alt="study" />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <Link to="/room-sport">
                    <h5 class="card-title mt-4 ms-5">Topik Sport</h5>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3 ms-5 shadow">
            <div class="row g-0">
              <div class="col-md-4">
                <img src={study} class="img-fluid rounded-start" alt="study" />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <Link to="/room-game">
                    <h5 class="card-title mt-4 ms-5">Topik Game</h5>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3 ms-5 shadow">
            <div class="row g-0">
              <div class="col-md-4">
                <img src={study} class="img-fluid rounded-start" alt="study" />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <Link to="/room-musik">
                    <h5 class="card-title mt-4 ms-5">Topik Musik</h5>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3 ms-5 shadow">
            <div class="row g-0">
              <div class="col-md-4">
                <img src={study} class="img-fluid rounded-start" alt="study" />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <Link to="/room-budaya">
                    <h5 class="card-title mt-4 ms-5">Topik Budaya Indonesia</h5>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div className="boxs text-center">
            <div className="link">
              {data.map((item) => {
                return (
                  <div>
                    <h2 className="mb-3">Hai, {item.name}</h2>
                  </div>
                );
              })}
              <h1>{title}</h1>
              <h4>Bahasa inggris untuk pemula</h4>
              <p>join pada link berikut:</p>
              <a href="https://meet.google.com/mvo-nzvw-jha">Klik disini untuk memulai</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RoomMusik;
