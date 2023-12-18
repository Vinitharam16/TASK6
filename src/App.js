import React from 'react';
import './App.css';
import Sidebar from './Sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom';
// import Home from './Pages/Home';
// import Search from './Pages/Search';
// import Notes from './Pages/Notes';
// import Tasks from './Pages/Tasks';
// import Archive from './Pages/Archive';
// import Bin from './Pages/Bin';
import { useAuthentication } from './Contexts/Authentication.context';
// import Login from './Pages/Authentication/Login';
// import SignUp from './Pages/Authentication/SignUp';
import Notfound from './Pages/Notfound';
import { AuthenticatedRoutes, AuthenticationRoutes } from './Contexts/Routes';
import Navbar from './Components/Navbar/Navbar';
import app from './Pages/App';


function App() {
  const { loggedIn, setLoggedIn } = useAuthentication();
  function renderRoutes(flag = false) {
    if (flag) {
      return (
        <React.Fragment>
          <Route Component={app}>
            {AuthenticatedRoutes.children.map((route,index) => (
              <Route 
              key={index}
              path={route.path}
              Component={route.component}
              />
            ) )}

          </Route>
          {/* <Route path='/home' Component={Home} />
          <Route path='/search' Component={Search} />
          <Route path='/notes' Component={Notes} />
          <Route path='/tasks' Component={Tasks} />
          <Route path='/archive' Component={Archive} />
          <Route path='/bin' Component={Bin} /> */}
        </React.Fragment>
      );
    }
    else {
      return (
        <React.Fragment>
          {AuthenticationRoutes.map((route,index) => (
            <Route 
            key={index}
            path={route.path}
            Component={route.component}
            />
          ))}



          {/* <Route path='/' Component={Login} />
          <Route path='/signup' Component={SignUp} /> */}
        </React.Fragment>
      );
    }
  }


  return (
    <div className="App">
      {/* <div className='container-xxl'>
        <div className='row'>
          <div className='col-3'>
            <Sidebar  />
            <Navbar/>
          </div>
          <div className='col-9 content-pages'> */}
            <Routes>
              {renderRoutes(loggedIn)}
              <Route path='*' Component={Notfound} />
            </Routes>
          {/* </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
