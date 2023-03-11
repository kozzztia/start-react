import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import LayoutStyle from "./components/layout/LayoutStyle";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <>
        <LayoutStyle/>
        <App />
    </>

);
