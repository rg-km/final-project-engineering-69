import contenLeft from './image/conten-1-left.svg'
import kelasAnak from './image/kelasAnak.svg'
import kelasReguler from './image/kelasReguler.svg'
import kelasKaryawan from './image/kelasKaryawan.svg'
import kelasGratis from './image/kelasGratis.svg'
import kelebihan from './image/kelebihan.svg'
import kataMereka from './image/kataMereka.svg'
import './content.css'
function Content() {
    return (
        <div>
            {/* KONTEN PERTAMA */}
            <div class="row ">
                <div class="col">
                    <img src={contenLeft} class="mt-lg-5" />
                </div>
                <div class="col ">
                    <h2 className="contentRight">Satu Platform,<br /> Banyak Pilihan</h2>
                    <div class="container">
                        <div class="row">
                            <div class="col ">
                                <div class="card-body">
                                    <img class="mb-3" src={kelasAnak} alt="kelasAnak" width="50px" />
                                    <h5 class=" mb-2 "><b>Kelas Anak</b></h5>
                                    <p class="card-text">Kelas yang dikhususkan untuk anak usia 4-12 tahun</p><br />
                                    <a href="#" class="link-dark ">Lihat Detail</a>
                                </div>
                            </div>
                            <div class="col ">
                                <div class="card-body">
                                    <img class="mb-3" src={kelasReguler} alt="kelasReguler" width="50px" />
                                    <h5 class=" mb-2 "><b>Kelas Reguler</b></h5>
                                    <p class="card-text">Kelas yang dikhususkan untuk usia 13 tahun-tidak ada batasan usia.</p>
                                    <a href="#" class="link-dark ">Lihat Detail</a>
                                </div>
                            </div>
                            <div class="col ">
                                <div class="card-body">
                                    <img class="mb-3" src={kelasKaryawan} alt="kelasKaryawan" width="50px" />
                                    <h5 class=" mb-2 "><b>Kelas Karyawan</b></h5>
                                    <p class="card-text">Kelas yang dikhususkan untuk karyawan yang sedang bekerja.</p>
                                    <a href="#" class="link-dark ">Lihat Detail</a>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col ">
                                <div class="card-body">
                                    <img class="mb-3" src={kelasGratis} alt="kelasGratis" width="50px" />
                                    <h5 class=" mb-2 "><b>Kelas Gratis</b></h5>
                                    <p class="card-text">Kelas bebas diskusi dengan orang random di berbagai negara.</p>
                                    <a href="#" class="link-dark ">Lihat Detail</a>
                                </div>
                            </div>
                            <div class="col ">

                            </div>
                            <div class="col ">

                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* KONTEN KEDUA */}
            <div className="contentKedua">
                <h2>Kami <span>Membantu Siswa</span><br /> Mengembangkan Potensi Mereka</h2>
                <p>Kami dipercayai sebagai salah satu platform belajar speaking english terbaik.<br />Inilah alasan orang-orang memilih kami.</p>
                <img src={kelebihan} alt="kelebihan" className="gambar" />
            </div>
            <img src={kataMereka} alt="kataMereka" className="kataMereka" />
            <div className="box">
                <div class="row mt-lg-5">
                    <div class="col">
                        <h3 class="text-light">Apakah kamu siap untuk<br /> memulai pelajaran?</h3>
                    </div>
                    <div class="col mt-3">
                        <button type="button" class="btn me-3 ms-5">Ayo mulai</button>
                        <button type="button" class="btn bg-white text-danger" >Kontak kami</button>

                        {/* <button className="mulai">Ayo mulai</button>
                        <button className="kontak">Kontak kami</button> */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Content