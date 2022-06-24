import './Form.css'
import People from '../assets/people.png'
import Trainice from '../assets/Trainice.png'

const Registration = () => {

    return (
        <div className='fluid-container row wrap'>
            <div className='form-content-left col-md-6 col-12 py-5'>
                <form className='form'>
                    <div className='form-group'>
                        <img id='logo' src={Trainice} alt='Logo Trainice' />
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


                        <button id='signup' type='submit'>Sign up</button>
                        <p className='form-input-login text-center'>
                            Sudah punya akun? <a href='../login/login.js'> Login disini</a>
                        </p>
                    </div>
                </form>
            </div>
            <div className='pic col-md-6 col-12 py-5'>
                <img id="people" src={People} alt='people' />
            </div>
        </div>

    )
}

export default Registration