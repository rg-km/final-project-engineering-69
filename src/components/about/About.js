import Footer from "./Footer";
import Header from "../homePage/navbar";
import "./About.css";
import About_img from "./assets/about/about-img.svg";
import Ceklis from "./assets/about/ceklis.svg";
import KontenSatu from './assets/about/visi dan misi.svg'
import KontenDua from './assets/about/values.svg'

function About() {
  return (
    <div>
      <Header></Header>

      <section className="content01">
        <div className="text">
          <h1 className="judul font-bold">
            <strong>Tentang
              <span> Trainice</span></strong>

          </h1>
          <p className="deskripsi">Trainice adalah sebuah platform pendidikan dengan tujuan mencerdaskan anak bangsa</p>
        </div>
        <button className="buttonExplore" type="button">
          Explore
        </button>
        <div className="image">
          <img src={About_img} alt="container" width="400px" />
        </div>
      </section>
      <img className="ml-64" src={KontenSatu} />
      <img className="" src={KontenDua} />

      <Footer></Footer>
    </div>
  );
}
export default About;
