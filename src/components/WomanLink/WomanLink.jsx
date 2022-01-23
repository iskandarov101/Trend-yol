
import './main.scss';

const WomanLink = ({title, img,})=> {

  return(
    <button className='woman__btn'>
      <img className="woman__image" src={img} alt="" />
      <span className='woman__title'>{title}</span>
    </button>
  )
}

export default WomanLink