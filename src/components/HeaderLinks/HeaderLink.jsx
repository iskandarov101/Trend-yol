
import './main.scss';
const HeaderLink = ({title})=> {

  return(
    <button className='header__btn'>
      <span className='header__title'>{title}</span>
    </button>
  )
}

export default HeaderLink;