import { Link } from 'react-router-dom';

import Logo from '../../assets/images/trendyol.svg'

import HeaderLink from '../../components/HeaderLinks/HeaderLink';

import './header.scss';
const HeaderTop = ({activePage, setActivePage})=> {

  return(
    <>
      <div className="header">
      <div className='header__inner'>
        <div className='header__logo'>
          <img className='site-logo' src={Logo} alt="site-logo" />
        </div>
        <div className='header__input'>
          <input className='header__inner--input' type="search"  placeholder='Aradığınız ürün, kategori veya markayı yazınız'/>
        </div>
        <div className='header__links'>
          <Link className='header__items' to='/enter' onClick={()=> setActivePage('/enter')}>
            <div className='header__inner--enter'></div>
            <HeaderLink  title='Giriş Yap' activePage={activePage === '/enter'} />
          </Link>
          <Link className='header__items' to='/favourite' onClick={()=> setActivePage('/favourite')}>
            <div className='header__inner--fav'></div>
            <HeaderLink  title='Favorilerim' activePage={activePage === '/favourite'} />
          </Link>
          <Link className='header__items' to='/basket' onClick={()=> setActivePage('/basket')}>
            <div className='header__inner--card'></div>
            <HeaderLink  title='Sepetim' activePage={activePage === '/basket'} />
          </Link>
        </div>  
      </div>
      </div>
    </> 
  )
}

export default HeaderTop;