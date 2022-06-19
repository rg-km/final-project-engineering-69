import '../Form.css'

const Registration = () => {

    return (
        <div className='fluid-container row'>
            <div className='form-content-left col-md-6 col-12 py-5'>
                <form className='form'>
                    <div className='form-group'>
                        <img id='logo' src='/assets/Trainice.png'/>
                        <div className='form-inputs'>
                            <label htmlFor='username' className='form-label'>
                                Nama Lengkap
                            </label>
                            <input 
                                    type='text' 
                                    name='username'
                                    className='form-input form-control form-control-sm'
                                />
                        </div>
                        <div className='form-inputs'>
                            <label htmlFor='email' className='form-label'>
                                Email
                            </label>
                            <input 
                                    type='text' 
                                    name='email'
                                    className='form-input form-control form-control-sm'
                                />
                        </div>
                        <div className='form-inputs'>
                            <label htmlFor='password' className='form-label'>
                                Password
                            </label>
                            <input 
                                    type='password' 
                                    name='password'
                                    className='form-input form-control form-control-sm'
                            />
                        </div>
                        <div className='form-inputs'>
                            <label htmlFor='password2' className='form-label'>
                                Konfirmasi Password
                            </label>
                            <input 
                                    type='password' 
                                    name='password2'
                                    className='form-input form-control form-control-sm'
                            />
                        </div>
                        <div className='form-inputs'>
                            <label htmlFor='terms' className='form-check-label'>
                            <input 
                                    type='checkbox'
                                    name='terms'
                                    className='form-input form-check-input'
                            /> Saya sudah membaca dan setuju dengan syarat layanan dan kebijakan pribadi  
                            </label>
                        </div>
                        <button id='signup' type='submit'>Sign up</button>
                        <p className='form-input-login text-center'>
                            Sudah punya akun? <a href='#'> Login disini</a>
                        </p> 
                    </div>
                </form>
            </div>
            <div className='pic col-md-6 col-12 py-5'>
                    <img id="people" src='/assets/people.png' alt='people'/>
            </div>
        </div>
        
    )
}

export default Registration