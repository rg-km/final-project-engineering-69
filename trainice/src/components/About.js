import Footer from "./Footer";
import Header from "./Header";
import "./About.css";
import About_img from "./assets/about/about-img.svg";
import Ceklis from "./assets/about/ceklis.svg";

function About() {
  return (
    <div>
      <Header></Header>
      <section className="content01">
        <div className="text">
          <h1 className="judul">
            <strong>
              Tentang{" "}
              <h1 className="trainiceJudul">
                <strong>Trainice</strong>
              </h1>
            </strong>
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
      <section className="content02">
        <div className="textVisiMisi">
          <h1 className="titleVisiMisi">
            <strong>Visi dan Misi</strong>
          </h1>
          <p className="visi">
            Sebuah platform yang berkomitmen untuk memiliki komunitas terbaik dan perbaikan terus-menerus, untuk membuat setiap hari lebih baik dari kemarin, melalui fitur-fitur yang bermanfaat bagi peserta trainice, mitra, masyarakat dan
            lingkungan.
          </p>
        </div>
        <div className="misi">
          <img src={Ceklis} className="icon01" />
          <p className="misi01">Perbaikan terus-menerus</p>
          <img src={Ceklis} className="icon02" />
          <p className="misi02">Mendukung pendidikan bangsa</p>
          <img src={Ceklis} className="icon03" />
          <p className="misi03">Berkembang bersama</p>
          <img src={Ceklis} className="icon04" />
          <p className="misi04">Menumbukan rasa percaya diri dalam berbicara bahasa inggris</p>
        </div>
      </section>
      <section className="content03">
        <h1 className="valueTitle">
          <strong>Our Core Values</strong>
        </h1>
        <img src={Ceklis} className="valueIcon01" />
        <p className="valueText01">Kepercayaan Kepada Tuhan</p>
        <img src={Ceklis} className="valueIcon02" />
        <p className="valueText02">Inovasi</p>
        <img src={Ceklis} className="valueIcon03" />
        <p className="valueText03">Rendah Hati</p>
        <img src={Ceklis} className="valueIcon04" />
        <p className="valueText04">Peduli</p>
        <img src={Ceklis} className="valueIcon05" />
        <p className="valueText05">Bekerja Keras</p>
      </section>
      <Footer></Footer>
    </div>
  );
}
export default About;
