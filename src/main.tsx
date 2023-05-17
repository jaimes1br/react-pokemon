import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { PokedexApp } from './PokedexApp';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import global_es from './translations/es/global.json';
import global_en from './translations/en/global.json';

import './styles.css';
import 'material-symbols';
// Todo: eliminar el material-icons 

i18next.init({
  interpolation: { escapeValue: false},
  lng: "en",
  resources: {
    es: { global: global_es },
    en: { global: global_en },
  },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <I18nextProvider i18n={ i18next }>
    <Provider store={ store }>
      <BrowserRouter>
        <PokedexApp/>
      </BrowserRouter>
    </Provider>
  </I18nextProvider>
  // </React.StrictMode>
)
