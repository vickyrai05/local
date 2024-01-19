import React from 'react';
import { BrowserRouter as Router ,Routes,Route   } from 'react-router-dom';
import Admin from './Admin';
import Login from './Login';
import Logout from './Logout';

class Token_auth extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/Admin' element={<Admin/>}/>
            <Route path='/Logout' element={<Logout/>}/>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default Token_auth;
