import React from 'react';
import ReactDOM from 'react-dom/client';
import CounterApp from './CounterApp';
// import FirstApp from './FirstApp';
// import HelloWorldApp from './HelloWorldApp';
import './styles.css'


ReactDOM.createRoot( document.getElementById('root') ).render(
  <React.StrictMode>
    {/* <FirstApp title={123} subtitle="Soy un subtitulo"/> */}
    <CounterApp value={10}/>
  </React.StrictMode>
) 