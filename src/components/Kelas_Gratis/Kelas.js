import React from 'react'
import './Kelas.css'
import Footer from './Footer'
import Header from './Header'
import Ok from "../assets/Ok.png";
import Boy from "../assets/boy.png";
import Manfaat from './image/manfaat.svg'
import Fasilitas from './image/fasilitas.svg'

const Kelas = () => {
  return (
    <>
      <Header />
      <div className='kontenKelas'>
        <div className="hero-page row">
          <div className="col-md-6">
            <h2>Program Bahasa Inggris <br /><span>Gratis</span> Bagi Pemula <br />Hingga Para Expert</h2>
            <p>Memberikan pengalaman terbaik belajar bahasa Inggris secara gratis. Temukan teman berbicara bahasa inggrismu dan raih impianmu dengan belajar bahasa inggris secara gratis.</p>
            <button className='btn-explore' type="button">Explore</button>
          </div>
          <figure className="col-md-6">
            <img className="boy" src={Boy} alt="container" />
          </figure>
        </div>
        <div className='manfaat'>
          <img src={Manfaat} className="mx-44" />


          {/* <h2>Manfaat Pembelajaran</h2>
          <p>Dengan mengikuti program pembelajaran bahasa inggris secara gratis ini kamu<br /> bisa
            menemukan banyak teman mulai dari pemula hingga expert yang akan<br /> membantu kamu dalam
            proses belajar bahasa inggris.
          </p>
          <div className='row'>
            <ul className='col center'>
              <li><img src={Ok} alt='logo ceklis' /> Bisa diikuti oleh semua kalangan usia</li>
              <li><img src={Ok} alt='logo ceklis' /> Grup discord untuk memulai percakapan</li>
              <li><img src={Ok} alt='logo ceklis' /> Memilih tema yang cocok sesuai dengan passion kamu</li>
            </ul>
            <ul className='col center'>
              <li><img src={Ok} alt='logo ceklis' /> Bertemu dengan teman level pemula hingga expert</li>
              <li><img src={Ok} alt='logo ceklis' /> Menambah relasi</li>
            </ul>
          </div> */}
        </div>

        <div className='fasilitas'>
          <img src={Fasilitas} className="mx-96" />
          <button className='btn-tanya' type="button">Tanya Kami</button>


          {/* <h2>Fasilitas <span>Pembelajaran</span></h2>
          <div className='box'>
            <div className='top'>
              <h4>Topik Beragam</h4>
              <p>Anda bisa memilih topik  kesukaan anda</p>
            </div>
            <div className='bottom'>
              <ul>
                <li><img src={Ok} alt='logo ceklis' /> Musik</li>
                <li><img src={Ok} alt='logo ceklis' /> Internasional</li>
                <li><img src={Ok} alt='logo ceklis' /> Budaya Indonesia</li>
                <li><img src={Ok} alt='logo ceklis' /> Sport</li>
                <li><img src={Ok} alt='logo ceklis' /> Game</li>
                <li><img src={Ok} alt='logo ceklis' /> Dan lain-lain</li>
              </ul>
              <button className='btn-tanya' type="button">Tanya Kami</button>
            </div>
          </div> */}
        </div>

        <div className='siap'>
          <h2>Sudah Siap untuk Menjadi Expert <br />dalam Bahasa Inggris?</h2>
          <div className='kotak row'>
            <h4 className='col'>Cobalah sekarang juga</h4>
            <div className='grup-btn col'>
              <button className='btn-mulai' type="button">Ayo mulai</button>
              <button className='btn-kontak' type="button">Kontak Kami</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Kelas