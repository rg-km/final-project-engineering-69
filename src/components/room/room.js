import './room.css'
import study from './image/Study.svg';
function room() {
    return (

        <div className="room">
            <nav class="navbar">
                <div class="container-fluid">
                    <a class="navbar-brand text-dark fw-bold fs-4">Class</a>
                    <button className='buttonContainer me-5' type="button" >Kembali</button>
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
                                    <h5 class="card-title mt-4 ms-5">Topik Pekerjaan</h5>
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
                                    <h5 class="card-title mt-4 ms-5">Topik Pekerjaan</h5>
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
                                    <h5 class="card-title mt-4 ms-5">Topik Pekerjaan</h5>
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
                                    <h5 class="card-title mt-4 ms-5">Topik Pekerjaan</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div className="box text-center" >
                        <div className="link">
                            <h4>Bahasa inggris untuk pemula</h4>
                            <p>join pada link berikut:</p>
                            <a href="meet.google.com/gks-jixn-bmr">meet.google.com/gks-jixn-bmr</a>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default room