import React from "react";
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import FormularioMascotasDueno from "./components/FormularioMacotasDueno";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>

      {/* <div className="d-flex justify-content-center align-items-center">
        <FormularioMascotasDueno />
      </div> */}
      <BrowserRouter>
        <App/>
      </BrowserRouter>

    </React.StrictMode>
  );
  