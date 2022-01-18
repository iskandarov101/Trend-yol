import { Link } from 'react-router-dom';

import Logo from '../../assets/images/trendyol.svg'

import HeaderLink from '../../components/HeaderLinks/HeaderLink';

import './main.scss';
const Header = ({activePage, setActivePage})=> {

  return(
    <>
      <div className='header'>
        <div className='header__logo'>
          <img className='site-logo' src={Logo} alt="site-logo" />
        </div>
        <div className='header__input'>
          <input className='header__inner--input' type="search"  placeholder='Aradığınız ürün, kategori veya markayı yazınız'/>
        </div>
        <div className='header__links'>
          <Link className='header' to='/enter' onClick={()=> setActivePage('enter')}>
            <HeaderLink  title='Giriş Yap' activePage={activePage === 'enter'} />
          </Link>
          <Link className='header' to='/favourite' onClick={()=> setActivePage('favourite')}>
            <HeaderLink  title='Favorilerim' activePage={activePage === 'favourite'} />
          </Link>
          <Link className='header' to='/basket' onClick={()=> setActivePage('basket')}>
            <HeaderLink  title='Sepetim' activePage={activePage === 'basket'} />
          </Link>
        </div>
      </div>
    </> 
  )
}

export default Header;