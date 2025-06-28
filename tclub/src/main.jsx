import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ToastContainer
    position="top-center"
    autoClose={3000}
    closeOnClick
    hideProgressBar={false}
    newestOnTop={false}
    draggable
    pauseOnHover
    theme="light"
    toastClassName="bg-blue-100 border border-blue-300 text-blue-800 rounded shadow-lg"
    bodyClassName="text-sm font-medium"
    progressClassName="bg-blue-500"
  />
  </StrictMode>
);