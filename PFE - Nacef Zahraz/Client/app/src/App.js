import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';

import { isUserLoggedIn } from "./Auth/Redux/signinAction";

import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Lawyers from './Pages/Lawyers';
import About from './Pages/About';

import Nav from './Shared/Nav';
import Footer from './Shared/Footer';

import Login from './Log/Login';
import Signin from './Log/Signin';
import { PrivetRoute } from './HOC/PrivateRoute';
import { PrivetRouteDashboard } from './HOC/PrivateRouteDashboard';

import Admin from "./Log/Admin";
import Profile from './userProfile/Profile';
import Dashboard from './Dashboard/Pages/Dashboard';


function App() {

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.signinStore);
  
  useEffect(() => {
    if (auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, []);


  return (
  <div className="App">

    <Router>
      <>
      
        <Nav />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/lawyers' component={Lawyers} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/login' component={Login} />
          <Route path='/signin' component={Signin} />
          <PrivetRouteDashboard path='/dashboard' component={Dashboard}/>
          <PrivetRoute path='/profile' component={Profile}/>
          <Route path={'/admin'} component={Admin} />
        </Switch>

        <Footer />

      </>
    </Router>



  </div>
  )
}

export default App;
