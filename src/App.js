import React from 'react';
//import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Signin from './loginpage/Sigin';
import WhatsAppManager from '../src/components/WhatsAppManager';
import BroadCast from './components/broadcast/BroadCast';
import Dashboard from './components/dashboardcomp/Dashboard';

function App() {
  // const token = localStorage.getItem('accessToken');

  // if(!token) {
  //   return <Signin />
  // }

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/whatsappmanager" element={<WhatsAppManager />} />
            <Route path="/broadcast" element={<BroadCast />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>


  );
}

export default App;