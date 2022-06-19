import "../Footer.css"
import Trainicep from "../assets/Trainicep.png";
import Instagram from "../assets/Instagram.png";
import Facebook from "../assets/Facebook F.png";
import YouTube from '../assets/YouTube.png';
import Linkedin from "../assets/LinkedIn.png";
import Whatsapp from "../assets/WhatsApp.png";
import Mail from "../assets/Mail.png";
import Phone from "../assets/Phone.png";


function Footer() {
    return (
        <div className="footer">
            <div class="container mt-lg-5">
                <div class="row align-items-start">
                    <div class="col text-white my-5">
                        <img src={Trainicep} alt="logo" />
                        <h5 class="mt-5">Ikuti kami</h5>
                        <a href="https://www.instagram.com/" className="medsos"><img src={Instagram} alt="logo" /></a>
                        <a href="https://www.facebook.com/" className="medsos"><img src={Facebook} alt="logo" /></a>
                        <a href="https://www.youtube.com/"className="medsos"><img src={YouTube} alt="logo" /></a>
                        <a href="https://www.linkedIn.com/" className="medsos"><img src={Linkedin} alt="logo" /></a>
                        <h5 class="mt-4">Hubungi kami</h5>
                        <a href="https://www.whatsapp.com/" className="medsos"><img src={Whatsapp} alt="logo" /></a>
                        <a href="#" className="medsos"><img src={Mail} alt="logo" /></a>
                        <a href="#" className="medsos"><img src={Phone} alt="logo" /></a>
                        <h5 class="mt-4">Alamat kami</h5>
                        <p>Jl. Cendrawasih, SCBD, Senayan,<br /> Kebayoran Baru, Jakarta Selatan</p>
                    </div>
                    <div class="col text-white my-5">
                        <h5>Bahasa Kelas Reguler</h5>
                        <p>inggris</p>
                        <h5>Bahasa Kelas Anak</h5>
                        <p>inggris</p>
                        <h5>Bahasa Kelas Karyawan</h5>
                        <p>inggris</p>
                        <h5>Bahasa Kelas Gratis</h5>
                        <p>inggris</p>
                    </div>
                    <div class="col text-white my-5">
                        <h4>Tentang Trainice</h4>
                        <p>Tentang kami</p>
                        <p>Berita dan Media</p>
                        <p>Blog</p>
                        <p>Pusat Bantuan</p>
                        <p>Visi Misi</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer