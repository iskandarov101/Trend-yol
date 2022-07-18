import { Link } from 'react-router-dom';

import DropDown1 from '../../assets/images/dropdown1.jpg';
import DropDown2 from '../../assets/images/dropdown2.jpg';
import DropDown3 from '../../assets/images/dropdown3.jpg';
import DropDown4 from '../../assets/images/dropdown4.jpg';

import { WomanGiyim } from '../MenuItems/MenuItems';


import './DropDown.scss';

const DropDown = ({ dropdown, setDropdown }) => {


  // className={`category-header ${activePage === '/woman' ? 'activee' : ''}`} to='/' onClick={() => setActivePage('/woman')}
  return (
    <>
      <div className={`sub-nav ${dropdown ? 'animation enable' : ""}`} onClick={() => setDropdown('enable')} >
        <div className="container sub-nav--container">
          <div className='sub-nav-center'>
            <div className='sub-nav-outer'>

              <div className='normal-column'>
                <div className='category-box'>
                  <Link className='sub-category-header'>Kadın Ayakkabı</Link>
                  <ul className="sub-item-list">
                    {WomanGiyim.map((item, index) => {
                      return (
                        <li key={index} className="nav__sub--item" >
                          <Link className={item.class} to={item.path} >
                            {item.title}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
                {/* <div className="category-box">
                  <Link className='sub-category-header'>Kadın Çanta</Link>
                  <ul className="sub-item-list">
                    <li className="nav__sub--item">
                      <Link className='nav__sub--link'>giyim</Link>
                    </li>
                    <li className="nav__sub--item">
                      <Link className='nav__sub--link'>clothes</Link>
                    </li>
                    <li className="nav__sub--item">
                      <Link className='nav__sub--link'>clothes</Link>
                    </li>
                    <li className="nav__sub--item">
                      <Link className='nav__sub--link'>clothes</Link>
                    </li>
                    <li className="nav__sub--item">
                      <Link className='nav__sub--link'>clothes</Link>
                    </li>

                  </ul>
                </div> */}
              </div>

              <div className='normal-column'>
                <div className='category-box'>
                  <Link className='sub-category-header'>Erkek Ayakkabı</Link>
                  <ul className="sub-item-list">
                    <li className="nav__sub--item">
                      <Link className='nav__sub--link'>giyim</Link>
                    </li>
                    <li className="nav__sub--item">
                      <Link className='nav__sub--link'>clothes</Link>
                    </li>
                    <li className="nav__sub--item">
                      <Link className='nav__sub--link'>clothes</Link>
                    </li>
                    <li className="nav__sub--item">
                      <Link className='nav__sub--link'>clothes</Link>
                    </li>
                    <li className="nav__sub--item">
                      <Link className='nav__sub--link'>clothes</Link>
                    </li>
                    <li className="nav__sub--item">
                      <Link className='nav__sub--link'>clothes</Link>
                    </li>
                    <li className="nav__sub--item">
                      <Link className='nav__sub--link'>clothes</Link>
                    </li>
                  </ul>
                </div>
                <div className="category-box">
                  <Link className='sub-category-header'>Erkek Çanta</Link>
                  <ul className="sub-item-list">
                    <li className="nav__sub--item">
                      <Link className='nav__sub--link'>giyim</Link>
                    </li>
                    <li className="nav__sub--item">
                      <Link className='nav__sub--link'>clothes</Link>
                    </li>
                    <li className="nav__sub--item">
                      <Link className='nav__sub--link'>clothes</Link>
                    </li>
                    <li className="nav__sub--item">
                      <Link className='nav__sub--link'>clothes</Link>
                    </li>
                    <li className="nav__sub--item">
                      <Link className='nav__sub--link'>clothes</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='normal-column'>
                <div className="category-box">
                  <Link className='sub-category-header'>Çocuk Ayakkabı</Link>
                  <ul className="sub-item-list">
                    <li className="nav__sub--item">
                      <Link className='nav__sub--link'>giyim</Link>
                    </li>
                    <li className="nav__sub--item">
                      <Link className='nav__sub--link'>clothes</Link>
                    </li>
                    <li className="nav__sub--item">
                      <Link className='nav__sub--link'>clothes</Link>
                    </li>
                  </ul>
                </div>
                <div className="category-box">
                  <Link className='sub-category-header'>Çocuk Çanta</Link>
                  <ul className="sub-item-list">
                    <li className="nav__sub--item">
                      <Link className='nav__sub--link'>giyim</Link>
                    </li>
                    <li className="nav__sub--item">
                      <Link className='nav__sub--link'>clothes</Link>
                    </li>
                  </ul>
                </div>
                <div className="category-box">
                  <Link className='sub-category-header'>Lüks & Designer</Link>
                  <ul className="sub-item-list">
                    <li className="nav__sub--item">
                      <Link className='nav__sub--link'>giyim</Link>
                    </li>
                    <li className="nav__sub--item">
                      <Link className='nav__sub--link'>clothes</Link>
                    </li>
                    <li className="nav__sub--item">
                      <Link className='nav__sub--link'>clothes</Link>
                    </li>
                    <li className="nav__sub--item">
                      <Link className='nav__sub--link'>clothes</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="campaign-container">
                <div className="normal-column small-collection-container">
                  <Link><img src={DropDown1} alt="" /></Link>
                  <Link><img src={DropDown2} alt="" /></Link>
                </div>
                <div className="normal-column small-collection-container">
                  <Link><img src={DropDown3} alt="" /></Link>
                  <Link><img src={DropDown4} alt="" /></Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default DropDown;