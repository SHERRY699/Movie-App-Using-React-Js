import './App.css';
import Header from './components/Header';
import Router from './AllRoutes/Router'
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const[dark,setdark]=useState(false)
  return (
    <div className={ dark ? 'dark':''}>
      <Header   dark={dark} setdark={setdark}   />
      <Router/>
      <Footer/>
    </div>
  );
}

export default App;
