import kelebihan from './image/kelebihan.svg'
import kataMereka from './image/kataMereka.svg'
import container from './image/container.svg'
import containerLeft from './image/containerLeft.svg'
import containerRight2 from './image/containerRight2.svg'
import './content.css'
import '../Kelas_Gratis/Kelas.css'

function Content() {
    return (
        <div className='konten'>
            {/* KONTEN PERTAMA */}
            <div className="hero-page row">
                <div className="col-md-6">
                    <h2>Solusi Belajar <br/><span>Speaking</span> English</h2>
                    <p>Persiapkan diri Anda untuk mengikuti pelatihan speaking english bersertifikat, yang terdiri dari berbagai macam kelas dan dibimbing oleh instruktur bersetifikat.</p>
                    <button className='btn-explore' type="button">Explore</button>
                </div>
                <figure className="col-md-6">
                    <img className="containerRight" src={container} alt="container" />
                    <img className="containerRight" src={containerRight2} alt="container"/>
                </figure>
            </div>

            {/* KONTEN KEDUA */}
            <div className="contentKedua">
                <h2>Kami <span>Membantu Siswa</span><br /> Mengembangkan Potensi Mereka</h2>
                <p>Kami dipercayai sebagai salah satu platform belajar speaking english terbaik.<br />Inilah alasan orang-orang memilih kami.</p>
                <img src={kelebihan} alt="kelebihan" className="gambar" />
            </div>
            <img src={kataMereka} alt="kataMereka" className="kataMereka" />
            
            <div className='siap'>
                <div className='kotak row'>
                    <h4 className='col'>Apakah kamu siap untuk memulai pembelajaran?</h4>
                    <div className='grup-btn col'>
                    <button className='btn-mulai' type="button">Ayo mulai</button>
                    <button className='btn-kontak' type="button">Kontak Kami</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content