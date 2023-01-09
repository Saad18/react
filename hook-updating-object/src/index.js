import React from 'react';
import ReactDOM from 'react-dom/client';
import Car from './App';
import Timer from './useeffect';
import Counter from './UseEffect2';
import reportWebVitals from './reportWebVitals';
import Timer2 from './UseEffect3';
import Component1 from './context/WithoutContextapi'
import ComponentX from './context/WithContextApi';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Car />
    <Timer />
    <Counter />
    <Timer2 />
    <Component1 />
    <ComponentX/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
