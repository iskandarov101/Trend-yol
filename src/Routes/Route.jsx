import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { useState } from 'react';

//=========== CONTAINERS =========
import Sidebar from '../containers/Sidebar/Sidebar';
import Discount from '../containers/Discount/Discount';
import Header from '../containers/Header/HeaderTop';

//======== SIDEBAR PAGES =========
import Woman from '../pages/SidebarPages/woman';
import Man from '../pages/SidebarPages/man';
import Child from '../pages/SidebarPages/child';
import Home from '../pages/SidebarPages/home';
import Market from '../pages/SidebarPages/market';
import Cosmetic from '../pages/SidebarPages/cosmetic';
import Boot from '../pages/SidebarPages/Boot';
import Clock from '../pages/SidebarPages/Clock';
import Electronic from '../pages/SidebarPages/electronic';
import Sport from '../pages/SidebarPages/Sports';

//============  HEADER PAGE ==============
import Basket from '../pages/HeaderPages/Basket';
import Favourite from '../pages/HeaderPages/Favourite';
import Enter from '../pages/HeaderPages/Enter';


//------- DISCOUNT PAGES--------
import DiscountPage from '../pages/DiscountPages/DiscountPage';
import Selling from '../pages/DiscountPages/Selling';
import Helping from '../pages/DiscountPages/Helping';


const HomePage = ()=> {

   const [activePage, setActivePage] = useState('');
  return(
    <Router>
      <div className="container">
        <div >
          <Discount activePage={activePage} setActivePage={setActivePage} />
          <Header activePage={activePage} setActivePage={setActivePage} />
          <Sidebar activePage={activePage} setActivePage={setActivePage}/>
        </div>
        <div className=''>
        
          <Switch>
            <div className="row">
              <Route  path='/discount' component={DiscountPage} />
              <Route  path='/selling' component={Selling} />
              <Route  path='/helping' component={Helping} />

              <Route  path='/enter' component={Enter} />
              <Route  path='/favourite' component={Favourite} />
              <Route  path='/basket' component={Basket} />

              <Route exact path='/woman' component={Woman} />
              <Route exact path='/man' component={Man} />
              <Route exact path='/child' component={Child} />
              <Route exact path='/home' component={Home} />
              <Route exact path='/supermarket' component={Market} />
              <Route exact path='/cosmetic' component={Cosmetic} />
              <Route exact path='/boot' component={Boot} />
              <Route exact path='/clock' component={Clock} />
              <Route exact path='/electronic' component={Electronic} />
              <Route exact path='/sport' component={Sport} />
            </div>
          </Switch>
        </div>
      </div>
    </Router>

  )
}

export default HomePage;