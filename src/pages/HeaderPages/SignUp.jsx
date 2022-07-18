import { Link } from 'react-router-dom';
import { useState } from 'react';


import './headerPage.scss';

import Register from '../../containers/Register/Register';

import RegisterBtn from '../../components/RegisterForm/RegisterBtn';


const SignUp = ({ activePage, setActivePage }) => {

  const [chosen, setChosen] = useState();
  // console.log(activePage)


  return (
    <>
      <div id='login-register'>
        <Register />
        <div className='q-layout lr-header'>
          <div className='flex-center header-buttons'>

            <Link className={`q-secondary q-button-medium q-button tab button mr-5 left   ${activePage === '/enter' ? 'after action' : ''}`} onClick={() => setActivePage('/enter')} to='/enter'>
              <RegisterBtn title={'Giriş Yap'} />
            </Link>

            <Link className={`q-secondary q-button-medium q-button tab button right   ${activePage === '/signup' ? 'after action' : ''}`} onClick={() => setActivePage('/signup')} to='/signup'>
              <RegisterBtn title={'Üye Ol'} />
            </Link>
          </div>
        </div>


        <div className='lr-container'>
          <div className='q-layout register'>
            <form action="https://echo.htmlacademy.ru">
              <div className='q-input-wrapper email-input'>
                <label className='q-label' htmlFor="">E-Posta</label>
                <input className='q-input' id='login-email' list='email-list' autoComplete='username' data type="email" />
              </div>

              <div className='password-wrapper'>
                <div className='password'>
                  <div className='q-input-wrapper'>
                    <label className='q-label' htmlFor="">Şifre</label>
                    <input className='q-input' name='register-password' id='register-password-input' autoComplete='new-password' type="password" />
                  </div>
                </div>
                <p className='q-typography q-paragraph q-initial dark-gray'>Şifreniz en az 7 karakter olmalı, harf ve rakam içermelidir.</p>
              </div>


              <div className='gender flex flex-column'>
                <label className='gender-label'>Cinsiyet (Opsiyonel)</label>
                <div className='button-group flex'>
                  <button className={`q-fluid q-button-medium q-button female ${chosen === true ? 'q-secondary active' : 'q-gray border-right-none'}`} onClick={() => setChosen(true)} type='button'>
                    <span>Kadın</span>
                  </button>
                  <button className={` q-fluid q-button-medium q-button male ${chosen === false ? 'q-secondary active' : 'border-left-none q-gray'}`} onClick={() => setChosen(false)} type='button'>
                    <span>Erkek</span>
                  </button>
                </div>
              </div>

              <button className='q-primary q-fluid q-button-medium q-button submit' type='submit'>
                <span>Giriş Yap</span>
              </button>

               <div className='contract flex'>
                 <p>Üye Ol’a basarak <b>Üyelik Koşulları</b>nı kabul ediyorum.</p>
               </div>     

               <div className='marketing-checkbox'>
                 <div className='ty-display-flex ty-color-black ty-font-sm ty-flex-column ty-input-w'>
                   <div className='ty-display-flex ty-checkbox-wrapper'>
                     <div className='ty-mgr-2 ty-relative ty-checkbox-container'>
                       <div className='ty-bg-beige ty-mg-zero ty-input ty-checkbox ty-bordered'></div>
                     </div>
                     <div></div>
                   </div>
                   <div></div>
                 </div>
               </div>  

            </form>
          </div>

          <div className='social-account-login-buttons'>
            <div className='q-layout social-login-button flex flex-1' >
              <div className='social-login-icon' style={{ backgroundColor: 'rgb(13, 30, 88)' }}>
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

export default SignUp;