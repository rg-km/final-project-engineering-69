import './room.css'
function room() {
    return (
        <div className="room">
            <nav class="navbar ms-5 me-5 ">
                <div class="container-fluid">
                    <a class="navbar-brand fw-bold text-dark fs-3">Kelas</a>
                    <button className='buttonContainer' type="button" >Explore</button>
                </div>
            </nav>
            <div class="row">
                <div class="col border" >
                    <div class="card mb-3" style="max-width: 540px;">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="..." class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col border" >
                    <div className="box"></div>
                    NARTO
                </div>
            </div>
        </div>
    )
}
export default room