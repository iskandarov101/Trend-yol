import { Link } from 'react-router-dom';
import { useState } from 'react';

import NavbarBtn from '../../components/NavbarBtn/NavbarBtn';
import DropDown from '../../components/DropDown/DropDown';


import './main.scss';


const Navbar = ({ activePage, setActivePage }) => {

  const [dropdown, setDropdown] = useState(false);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  const onMouseEnter = () => {
    if (window.innerWidth < 768) {
      setDropdown(false)
    } else {
      setDropdown(true)
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 768) {
      setDropdown(false)
    } else {
      setDropdown(false)
    }
  };


  return (
    <div id='navigation-wrapper'>
      <nav className='container'>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? 'main-nav clicked' : 'main-nav'}>
          <li className='tab-link' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Link className={`category-header ${activePage === '/woman' ? 'activee' : ''}`} to='/' onClick={() => setActivePage('/woman')}>
              <NavbarBtn title='kadin' />
            </Link>
            <DropDown dropdown={dropdown} setDropdown={setDropdown} />
          </li>
          <li className='tab-link' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
            <Link className={`category-header ${activePage === '/man' ? 'activee' : ''}`} to='/man' onClick={() => setActivePage('/man')}>
              <NavbarBtn title='Çocuk' />
            </Link>
            <DropDown dropdown={dropdown} setDropdown={setDropdown} />
          </li>
          <li className='tab-link' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
            <Link className={`category-header ${activePage === '/child' ? 'activee' : ''}`} to='/child' onClick={() => setActivePage('/child')}>
              <NavbarBtn title='Erkek' />
            </Link>
            <DropDown dropdown={dropdown} setDropdown={setDropdown} />
          </li>
          <li className='tab-link' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Link className={`category-header navbar-item ${activePage === '/home' ? 'activee' : ''}`} to='/home' onClick={() => setActivePage('/home')}>
              <NavbarBtn title=' Ev & Mobilya' />
            </Link>
            <DropDown dropdown={dropdown} setDropdown={setDropdown} />
          </li>
          <li className='tab-link' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
            <Link className={`category-header ${activePage === '/supermarket' ? 'activee' : ''}`} to='/supermarket' onClick={() => setActivePage('/supermarket')}>
              <NavbarBtn title='Süpermarket' activePage={activePage === '/supermarket'} />
            </Link>
            <DropDown dropdown={dropdown} setDropdown={setDropdown} />
          </li>
          <li className='tab-link' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
            <Link className={`category-header ${activePage === '/cosmetic' ? 'activee' : ''}`} to='/cosmetic' onClick={() => setActivePage('/cosmetic')}>
              <NavbarBtn title='Kozmetik' activePage={activePage === '/cosmetic'} />
            </Link>
            <DropDown dropdown={dropdown} setDropdown={setDropdown} />
          </li>
          <li className='tab-link' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
            <Link className={`category-header ${activePage === '/boot' ? 'activee' : ''}`} to='/boot' onClick={() => setActivePage('/boot')}>
              <NavbarBtn title='Ayakkabı & Çanta' activePage={activePage === '/boot'} />
            </Link>
            <DropDown dropdown={dropdown} setDropdown={setDropdown} />
          </li>
          <li className='tab-link' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
            <Link className={`category-header ${activePage === '/clock' ? 'activee' : ''}`} to='/clock' onClick={() => setActivePage('/clock')}>
              <NavbarBtn title='Saat & Aksesuar' activePage={activePage === '/clock'} />
            </Link>
            <DropDown dropdown={dropdown} setDropdown={setDropdown} />
          </li>
          <li className='tab-link' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
            <Link className={`category-header ${activePage === '/electronic' ? 'activee' : ''}`} to='/electronic' onClick={() => setActivePage('/electronic')}>
              <NavbarBtn title='Elektronik' activePage={activePage === '/electronic'} />
            </Link>
            <DropDown dropdown={dropdown} setDropdown={setDropdown} />
          </li>
          <li className='tab-link' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
            <Link className={`category-header ${activePage === '/sport' ? 'activee' : ''}`} to='/sport' onClick={() => setActivePage('/sport')}>
              <NavbarBtn title='Spor&Outdoor' activePage={activePage === '/sport'} />
            </Link>
            <DropDown dropdown={dropdown} setDropdown={setDropdown} />
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;
//  <ul className="nav__sub--list">
//   <li className="nav__sub--item">
//     <Link className='nav__sub--link'>clothes</Link>
//   </li>
//   <li className="nav__sub--item">
//     <Link className='nav__sub--link'>clothes</Link>
//   </li>
//   <li className="nav__sub--item">
//     <Link className='nav__sub--link'>clothes</Link>
//   </li>
//   <li className="nav__sub--item">
//     <Link className='nav__sub--link'>clothes</Link>
//   </li>
//   <li className="nav__sub--item">
//     <Link className='nav__sub--link'>clothes</Link>
//   </li>
//   <li className="nav__sub--item">
//     <Link className='nav__sub--link'>clothes</Link>
//   </li>
//   <li className="nav__sub--item">
//     <Link className='nav__sub--link'>clothes</Link>
//   </li>
//   <li className="nav__sub--item">
//     <Link className='nav__sub--link'>clothes</Link>
//   </li>
// </ul>