import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import Header from './component/Header';
import Footer from './component/Footer';
import Homepage from './component/Homepage';
import Home from './component/Home';

ReactDOM.render(
  <React.StrictMode>
    <Header/>   
  <Homepage/>

<Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
