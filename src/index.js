import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import IncrementUseStateOne from './IncrementUseStateOne';
import IncrementUseStateTwo from './IncrementUseStateTwo';
import UseStateWithObjects from './UseStateWithObjects';
import UseStateWithArray from './UseStateWithArray';
import UseEffect from './UseEffect';
import UseReff from './UseReff';
import UseMemo from './UseMemo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <IncrementUseStateOne/> */}
    {/* <IncrementUseStateTwo/> */}
    {/* <UseStateWithObjects/> */}
    {/* <UseStateWithArray/> */}
    {/* <UseEffect/> */}
    {/* <UseReff/> */}
    <UseMemo/>

  </React.StrictMode>
);


