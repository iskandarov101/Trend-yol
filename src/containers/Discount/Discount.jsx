import { Link } from 'react-router-dom';

import DiscountBtn from "../../components/DiscountBtn/DiscountBtn";

import './main.scss';

const Discount = ({activePage, setActivePage})=> {

  return(
    <>
      <div className='discount'>
        <div  className='discount__top'>

          <Link className={`discount__link ${activePage === '/discount' ? 'active-page' : ''}`} onClick={()=> setActivePage('/discount')} to='/discount' >
            <DiscountBtn title='İndirim Kuponlarim' />
          </Link>

          <Link className={`discount__link ${activePage === '/selling' ? 'active-page' : ''}`}  onClick={()=> setActivePage('/selling')}  to='/selling'>
            <DiscountBtn  title='Trendyol`da Satiş Yap'/>
          </Link>

          <Link className={`discount__link ${activePage === '/helping' ? 'active-page' : ''}`}  onClick={()=> setActivePage('/helping')} to='/helping' >
            <DiscountBtn  title='Yardim & Destek'  />
          </Link>
          
        </div>
      </div>
    </>
  )
}

export default Discount;