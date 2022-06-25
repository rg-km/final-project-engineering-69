import Footer from "../Footer";
import Header from "../Header";
import "../Kelas_Gratis/Kelas.css";
import About_img from "./assets/about/about-img.svg";
import Ok from "../assets/Ok.png";

function About() {
  return (
    <div>
      <Header/>
      <div className='kontenKelas'>
        <div className="hero-page row">
          <div className="col-md-6">
            <h2>Tentang <span>Trainice</span></h2>
            <p>Trainice adalah sebuah platform pendidikan dengan tujuan mencerdaskan anak bangsa</p>
            <button className='btn-explore' type="button">Explore</button>
          </div>
          <figure className="col-md-6">
              <img className="boy" src={About_img} alt="container"/>
          </figure>
        </div>

        <div className='manfaat'>
          <h2>Visi Misi</h2>
          <p>Sebuah platform yang berkomitmen untuk memiliki komunitas terbaik dan perbaikan terus-menerus, <br/>untuk membuat setiap hari lebih baik dari kemarin, melalui fitur-fitur yang bermanfaat<br/> bagi peserta trainice, mitra, masyarakat dan lingkungan.
          </p>
          <div className='row kj'>
            <ul className='col center'>
              <li><img src={Ok} alt='logo ceklis'/> Perbaikan terus menerus</li>
              <li><img src={Ok} alt='logo ceklis'/> Mendukung pendidikan bangsa</li>
            </ul>
            <ul className='col center'>
              <li><img src={Ok} alt='logo ceklis'/> Berkembang bersama</li>
              <li><img src={Ok} alt='logo ceklis'/> Menumbuhkan rasa percaya diri dalam berbicara bahasa inggris</li>
            </ul>
          </div>
        </div>

        <div className='manfaat'>
          <h2>Our Core Values</h2>
          <p>Sebuah platform yang berkomitmen untuk memiliki komunitas terbaik dan perbaikan terus-menerus, <br/>untuk membuat setiap hari lebih baik dari kemarin, melalui fitur-fitur yang bermanfaat<br/> bagi peserta trainice, mitra, masyarakat dan lingkungan.
          </p>
          <div className='row'>
            <ul className='col center'>
              <li><img src={Ok} alt='logo ceklis'/> Kepercayaan diri pada tuhan</li>
              <li><img src={Ok} alt='logo ceklis'/> Inovasi</li>
              <li><img src={Ok} alt='logo ceklis'/> Rendah Hati</li>
            </ul>
            <ul className='col center'>
              <li><img src={Ok} alt='logo ceklis'/> Peduli</li>
              <li><img src={Ok} alt='logo ceklis'/> Bekerja Keras</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default About;
