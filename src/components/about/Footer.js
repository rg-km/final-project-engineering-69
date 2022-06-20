import "./Footer.css";
import logo from "./assets/footer/Trainice.svg";
import instagram from "./assets/footer/Instagram.svg";
import facebook from "./assets/footer/Facebook F.svg";
import youtube from "./assets/footer/YouTube.svg";
import linkedin from "./assets/footer/LinkedIn.svg";
import whatsapp from "./assets/footer/WhatsApp.svg";
import mail from "./assets/footer/Mail.svg";
import phone from "./assets/footer/Phone.svg";

function Footer() {
  return (
    <div className="footer">
      <div class="container">
        <div class="row align-items-start">
          <div class="col text-white mt-5">
            <img src={logo} alt="logo" />
            <h5 class="mt-5">Ikuti kami</h5>
            <img src={instagram} alt="logo" />
            <img src={facebook} alt="logo" />
            <img src={youtube} alt="logo" className="me-2" />
            <img src={linkedin} alt="logo" />
            <h5 class="mt-4">Hubungi kami</h5>
            <img src={whatsapp} alt="logo" className="me-2" />
            <img src={mail} alt="logo" className="me-2" />
            <img src={phone} alt="logo" />
            <h5 class="mt-5">Alamat kami</h5>
            <p className="alamat">
              Jl. Cendrawasih, SCBD, Senayan,
              <br /> Kebayoran Baru, Jakarta Selatan
            </p>
          </div>
          <div class="col text-white mt-5">
            <h5>Bahasa Kelas Gratis</h5>
            <p>inggris</p>
          </div>
          <div class="col text-white mt-5">
            <h4 className="mb-3">Tentang Trainice</h4>
            <div className="tentangTrainice">
              <p>Tentang kami</p>
              <p>Berita dan Media</p>
              <p>Blog</p>
              <p>Pusat Bantuan</p>
              <p>Visi Misi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
