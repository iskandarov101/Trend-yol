import { Link } from 'react-router-dom';

import Logo from '../../assets/images/trendyol.svg'; // site-logo here

import HeaderLink from '../../components/HeaderLinks/HeaderLink';

import './header.scss';
const HeaderTop = ({ activePage, setActivePage }) => {

  return (
    <>
      <div className="header">
        <div className='header__inner'>
          <div className='header__logo'>
            <Link to='/'>
              <img className='site-logo' src={Logo} alt="site-logo" />
            </Link>
          </div>

          <div className='header__input'>
            <input className='header__inner--input' type="search" placeholder='Aradığınız ürün, kategori veya markayı yazınız' />
          </div>

          <div className='header__links'>
            <Link className={`header__items user-login ${activePage === '/enter' ? 'work' : ''} `} to='/enter' >
              <div className='header__inner--enter'></div>
              <HeaderLink title='Giriş Yap' />

              {/* HEADER DROP-DOWN MENU IS HERE */}
              <div className='header__inner--dropdown'>
                <div className='header__inner--item'>
                  <Link className={`header__inner--login ${activePage === '/enter' ? 'work' : ''} `} onClick={() => setActivePage('/enter')} to='/enter'>Giriş Yap</Link>
                  <Link className={`header__inner--signup ${activePage === '/signup' ? 'work' : ''}`} onClick={() => setActivePage('/signup')} to='/signup'>Üye Ol</Link>
                </div>
              </div>
            </Link>

            {/* FAVOURITE*/}
            <Link className={`header__items ${activePage === '/favourite' ? 'work' : ''}`} onClick={() => setActivePage('/favourite')} to='/favourite'>
              <div className='header__inner--fav'></div>
              <HeaderLink title='Favorilerim' />
            </Link>

            {/* SEPETIM*/}
            <Link className={`header__items ${activePage === '/basket' ? 'work' : ''}`} onClick={() => setActivePage('/basket')} to='/basket'>
              <div className='header__inner--card'></div>
              <HeaderLink title='Sepetim' />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderTop;