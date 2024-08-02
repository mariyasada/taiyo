import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Siderbar from './Components/Siderbar';
import ChartsandMaps from './pages/ChartsandMaps';

function App() {
  return (
    <div className="flex min-h-screen items-start gap-2 w-full h-full  p-5 max-[450px]:flex-col">
      <Siderbar/>
      <Routes>
           <Route path="/" element={<Contact/>} />
           <Route path="/chartsandmaps" element={<ChartsandMaps/>} />
          </Routes>
    </div>
  );
}

export default App;
