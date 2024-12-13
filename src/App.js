
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './header&footer/Footer';

import Home from './Main/Home';
import Calculator from './Main/Calculator';
import Header from './header&footer/Header1';
import Chart from './Main/Chart';



function App() {
  return (
      <>
           <Header/>
           <Routes>
              <Route index  element={<Home/>}/>
              <Route path="calculator" element={<Calculator  />}/>
               <Route path="table" element={<Chart/>}/>
           </Routes>
          <Footer/>
      </>
  );
}

export default App;

// https://ebcalculator.netlify.app/calculator