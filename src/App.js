import React from 'react';
import './App.css';
import Sidebar from './Sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Search from './Pages/Search';
import Notes from './Pages/Notes';
import Tasks from './Pages/Tasks';
import Archive from './Pages/Archive';
import Bin from './Pages/Bin';

function App() {
  return (
    <div className="App">
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-3'>
            <Sidebar />
          </div>
          <div className='col-9 content-pages'>
            <Routes>
              <Route path='/home' Component={Home} />
              <Route path='/search' Component={Search} />
              <Route path='/notes' Component={Notes} />
              <Route path='/tasks' Component={Tasks} />
              <Route path='/archive' Component={Archive} />
              <Route path='/bin' Component={Bin} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
