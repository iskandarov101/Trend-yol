import { Link } from 'react-router-dom';

import SidebarBtn from '../../components/SidebarBtn/SidebarBtn';


import './main.scss';

const Sidebar = ({activePage, setActivePage})=> {

  return(
    <div className='sidebar'>
      <Link className='sidebar-item' to='/woman' onClick={()=> setActivePage('woman')}>
        <SidebarBtn title='Woman' activePage={ activePage === 'woman'} />
      </Link>
      <Link className='sidebar-item' to='/man' onClick={()=> setActivePage('man')}>
        <SidebarBtn title='man'  activePage={ activePage === 'man'}/>
      </Link>
      <Link className='sidebar-item' to='/child' onClick={()=> setActivePage('child')}>
        <SidebarBtn title='child'  activePage={ activePage === 'child'}/>
      </Link>
      <Link className='sidebar-item' to='/home' onClick={()=> setActivePage('home')}>
        <SidebarBtn title='home'  activePage={ activePage === 'home'}/>
      </Link>
      <Link className='sidebar-item' to='/supermarket' onClick={()=> setActivePage('supermarket')}>
        <SidebarBtn title='Supermarket'  activePage={ activePage === 'supermarket'}/>
      </Link>
      <Link className='sidebar-item' to='/cosmetic' onClick={()=> setActivePage('cosmetic')}>
        <SidebarBtn title='cosmetic'  activePage={ activePage === 'cosmetic'}/>
      </Link>
      <Link className='sidebar-item' to='/boot' onClick={()=> setActivePage('boot')}>
        <SidebarBtn title='Boot'  activePage={ activePage === 'boot'}/>
      </Link>
      <Link className='sidebar-item' to='/clock' onClick={()=> setActivePage('clock')}>
      <SidebarBtn title='Clock'  activePage={ activePage === 'clock'}/>
      </Link>
      <Link className='sidebar-item' to='/electronic' onClick={()=> setActivePage('electronic')}>
        <SidebarBtn title='electronic'  activePage={ activePage === 'electronic'}/>
      </Link>
      <Link className='sidebar-item' to='/sport' onClick={()=> setActivePage('sport')}>
        <SidebarBtn title='Sport'  activePage={ activePage === 'sport'}/>
      </Link>
    </div>

  )
}

export default Sidebar;