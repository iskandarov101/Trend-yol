import { Link } from 'react-router-dom';

import DiscountBtn from "../../components/DiscountBtn/DiscountBtn";

import './main.scss';

const Discount = ({activePage, setActivePage})=> {

  return(
    <>
      <div className='discount'>
        <div  className='discount__top'>
          <Link className='discount__link' to='/discount' onClick={()=> setActivePage('/discount')}>
            <DiscountBtn className='discount__title' title='İndirim Kuponlarim' activePage={activePage === '/discount'} />
          </Link>
          <Link className='discount__link'  to='/selling' onClick={()=> setActivePage('/selling')}>
            <DiscountBtn  title='Trendyol`da Satiş Yap' activePage={activePage === '/selling'} />
          </Link>
          <Link className='discount__link'  to='/helping' onClick={()=> setActivePage('/helping')}>
            <DiscountBtn  title='Yardim & Destek' activePage={activePage === '/helping'} />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Discount;