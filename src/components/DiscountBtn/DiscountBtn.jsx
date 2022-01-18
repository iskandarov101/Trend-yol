

import './main.scss'
const DiscountBtn = ({title})=> {

  return(
    <button className='discount-btn'>
      <span className='discount-title'>{title}</span>
    </button>
  )
}

export default DiscountBtn;