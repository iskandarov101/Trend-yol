import './main.scss';


const SidebarBtn = ({title, active})=> {

  return(
    <button className={`sidebar-btn ${active ? 'active' : ''}`}>
      <span>{title}</span>
    </button>
  )
}

export default SidebarBtn;