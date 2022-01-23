import './main.scss';


const SidebarBtn = ({title, active})=> {

  return(
    <button className={`sidebar__btn ${active ? 'active' : ''}`}>
      <span className='sidebar__title'>{title}</span>
    </button>
  )
}

export default SidebarBtn;