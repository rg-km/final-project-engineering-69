import React from 'react'
import './form.css'

const Registration = () => {
    return (
        <div className='form-content-left row'>
            <form className='form col-md-6 col-12 bg-white'>
                <div className='form-group'>
                    <h2 id='logo'>Trainice</h2>
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
                    <p>Atau</p>
                    <div className='row'>
                        <div className='col-md-6 col-12'>
                            <button type='button' className='sosial'>
                                <img src='/assets/google.png' alt='logo google'/>Sign up Google</button>
                        </div>
                        <div class="col-md-6 col-12">
                            <button type='button' className='sosial'><img src='/assets/fb.png'alt='logo facebook'/>Sign up Facebook</button>
                        </div>
                    </div>
                    <span className='form-input-login'>
                        Sudah punya akun? <a href='#'> Login disini</a>
                    </span> 
                </div>
            </form>
            <figure className='pic col-md-6 col-12'>
                <img src='/assets/people.png' alt='people'/>
            </figure>
        </div>
    )
}

export default Registration