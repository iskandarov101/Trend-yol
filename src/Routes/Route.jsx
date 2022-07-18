import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { useState } from 'react';

//=========== TOP-HEADER =========
import Navbar from '../containers/Navbar/Navbar';
import Discount from '../containers/Discount/Discount';
import Header from '../containers/Header/Header';

//======== SIDEBAR PAGES =========
import Woman from '../pages/NavbarPages/woman';
import Man from '../pages/NavbarPages/man';
import Child from '../pages/NavbarPages/child';
import Home from '../pages/NavbarPages/home';
import Market from '../pages/NavbarPages/market';
import Cosmetic from '../pages/NavbarPages/cosmetic';
import Boot from '../pages/NavbarPages/Boot';
import Clock from '../pages/NavbarPages/Clock';
import Electronic from '../pages/NavbarPages/electronic';
import Sport from '../pages/NavbarPages/Sports';

//============  HEADER PAGE ==============
import Basket from '../pages/HeaderPages/Basket';
import Favourite from '../pages/HeaderPages/Favourite';
import Enter from '../pages/HeaderPages/Enter';
import SignUp from '../pages/HeaderPages/SignUp';


//------- DISCOUNT PAGES--------
import DiscountPage from '../pages/DiscountPages/DiscountPage';
import Selling from '../pages/DiscountPages/Selling';
import Helping from '../pages/DiscountPages/Helping';

//=========== Footer Page ==========
import Footer from '../containers/Footer/Footer';


const HomePage = () => {

  const [activePage, setActivePage] = useState('');

  return (
    <Router>
      <div >
        <div className='header-wrapper'>
          <div className='container '>
            {/* HEADER PAGES */}
            {/* <Discount activePage={activePage} setActivePage={setActivePage} /> */}
            <Header activePage={activePage} setActivePage={setActivePage}/>
          </div>
            <Navbar activePage={activePage} setActivePage={setActivePage} />
        </div>
        <div className='container'>

          <Switch>
            <div className="row">
              <Route path='/discount' component={DiscountPage} />
              <Route path='/selling' component={Selling} />
              <Route path='/helping' component={Helping} />

              <Route path='/enter'>
                <Enter activePage={activePage} setActivePage={setActivePage} />
              </Route>
              <Route path='/signup'>
                <SignUp activePage={activePage} setActivePage={setActivePage}/>
              </Route>
              <Route path='/favourite' component={Favourite} />
              <Route path='/basket' component={Basket} />

              <Route exact path='/' component={Woman} />
              <Route path='/man' component={Man} />
              <Route path='/child' component={Child} />
              <Route path='/home' component={Home} />
              <Route path='/supermarket' component={Market} />
              <Route path='/cosmetic' component={Cosmetic} />
              <Route path='/boot' component={Boot} />
              <Route path='/clock' component={Clock} />
              <Route path='/electronic' component={Electronic} />
              <Route path='/sport' component={Sport} />
            </div>
          </Switch>
        </div>
        <Footer  />
      </div>
    </Router>

  )
}

export default HomePage;