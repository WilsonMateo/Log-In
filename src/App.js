import React from 'react';
import './App.css';
import AppNav from './AppNav';
import Botton from './BottonApp';
import Container from 'react-bootstrap/Container'
import AppImage from '../src/imagen';


function App() {
  return (
    <div  className="App">
      <Container>
       <header>
        <AppNav  />
      </header>
      <main>
        <div className="imagen">
        <AppImage />
        </div>

        <div className="main-top">
        <Botton  />
        
        </div> 
        </main>
      </Container>>
    </div>
  );
}

export default App;
