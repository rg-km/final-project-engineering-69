import "./footer.css"
import logo from './image/footer/Trainice.svg'
import instagram from './image/footer/Instagram.svg'
import facebook from './image/footer/Facebook F.svg'
import youtube from './image/footer/YouTube.svg'
import linkedin from './image/footer/LinkedIn.svg'
import whatsapp from './image/footer/WhatsApp.svg'
import mail from './image/footer/Mail.svg'
import phone from './image/footer/Phone.svg'




function footer() {
    return (
        <div className="footer">
            <div class="container mt-lg-5">
                <div class="row align-items-start">
                    <div class="col text-white mt-5">
                        <img src={logo} alt="logo" />
                        <h5 class="mt-5">Ikuti kami</h5>
                        <img src={instagram} alt="logo" />
                        <img src={facebook} alt="logo" />
                        <img src={youtube} alt="logo" />
                        <img src={linkedin} alt="logo" />
                        <h5 class="mt-4">Hubungi kami</h5>
                        <img src={whatsapp} alt="logo" />
                        <img src={mail} alt="logo" />
                        <img src={phone} alt="logo" />
                        <h5 class="mt-4">Alamat kami</h5>
                        <p>Jl. Cendrawasih, SCBD, Senayan,<br /> Kebayoran Baru, Jakarta Selatan</p>
                    </div>
                    <div class="col text-white mt-5">
                        <h5>Bahasa Kelas Reguler</h5>
                        <p>inggris</p>
                        <h5>Bahasa Kelas Anak</h5>
                        <p>inggris</p>
                        <h5>Bahasa Kelas Karyawan</h5>
                        <p>inggris</p>
                        <h5>Bahasa Kelas Gratis</h5>
                        <p>inggris</p>
                    </div>
                    <div class="col text-white mt-5">
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
export default footer