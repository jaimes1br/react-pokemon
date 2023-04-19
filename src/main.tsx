import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { PokedexApp } from './PokedexApp';
import './styles.css';
import 'material-symbols';
// Todo: eliminar el material-icons 

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <BrowserRouter>
      <PokedexApp/>
    </BrowserRouter>
  // </React.StrictMode>
)
