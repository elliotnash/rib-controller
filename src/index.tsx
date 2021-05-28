import React from 'react';
import ReactDOM from 'react-dom';
import CSS from 'csstype';
import './index.css';
import Map from './map';
import reportWebVitals from './reportWebVitals';

const background: CSS.Properties = {
  position: "absolute",
  display: "flex",
  backgroundColor: "DodgerBlue",
  top: "0",
  bottom: "0",
  left: "0",
  right: "0",
};

ReactDOM.render(
  <React.StrictMode>
    <div style={background}>
      <Map/>
    </div>, 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
