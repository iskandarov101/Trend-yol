import { Link } from 'react-router-dom';
// import { useState } from 'react';


import RegisterBtn from '../../components/RegisterForm/RegisterBtn';

import Register from '../../containers/Register/Register';
// import RegFooter from '../../containers/RegFooter/RegFooter';


import './headerPage.scss';

const Enter = ({ activePage, setActivePage }) => {

  // console.log(activePage)

  return (
    <>
      <div id='login-register'>
        <Register />

        <div className='q-layout lr-header'>
          <div className='flex-center header-buttons'>

            <Link className={`q-secondary q-button-medium q-button tab button mr-5 left  ${activePage === '/enter' ? 'action' : 'after'}`} onClick={() => setActivePage('/enter')} to='/enter'>
              <RegisterBtn title={'Giriş Yap'} />
            </Link>

            <Link className={`q-secondary q-button-medium q-button tab button right  ${activePage === '/signup' ? 'action' : 'after'}`} onClick={() => setActivePage('/signup')} to='/signup'>
              <RegisterBtn title={'Üye Ol'} />
            </Link>

          </div>
        </div>

        <div className='lr-container'>
          <div className='q-layout login'>
            <form action="https://echo.htmlacademy.ru">
              <div className='q-input-wrapper email-input'>
                <label className='q-label' htmlFor="">E-Posta</label>
                <input className='q-input' id='login-email' list='email-list' autoComplete='username' data type="email" />
              </div>

              <div className='password-wrapper'>
                <div className='password'>
                  <div className='q-input-wrapper'>
                    <label className='q-label' htmlFor="">Şifre</label>
                    <input className='q-input' name='login-password' autoComplete='current-password' id='login-password-input' type="password" />
                  </div>
                </div>
              </div>

              <div className='forgot-password'>
                <Link className='forgot-password__link'><span>Şifremi Unuttum</span></Link>
              </div>

              <button className='q-primary q-fluid q-button-medium q-button submit' type='submit'>
                <span>Giriş Yap</span>
              </button>
            </form>
          </div>

          <div className='social-account-login-buttons'>
            <div className='q-layout social-login-button flex flex-1' >
              <div className='social-login-icon' style={{ backgroundColor: 'rgb(76, 110, 168)' }}>
                <i className='q-icon icon-facebook i-facebook'></i>
              </div>
              <div className='flex flex-column'>
                <div>
                  <div>Facebook</div>
                  <small>ile giriş yap</small>
                </div>
              </div>
            </div>

            <div className='q-layout social-login-button flex flex-1'>
              <div className='social-login-icon' style={{ backgroundColor: 'rgb(241, 66, 54)' }}>
                <i className='q-icon icon-google i-google'></i>
              </div>
              <div className='flex flex-column'>
                <div>
                  <div>Google</div>
                  <small>ile giriş yap</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* <RegFooter   /> */}
    </>
  )
}

export default Enter;