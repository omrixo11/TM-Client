import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { persistor, store } from './app/store';
import { PersistGate } from 'redux-persist/integration/react';

const container = document.getElementById('root');
const root = createRoot(container);
const Loader = ()=>{
  return (
    <div className="loader">Loading...</div>
  )
}
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={<Loader />} persistor={persistor}>
      <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
