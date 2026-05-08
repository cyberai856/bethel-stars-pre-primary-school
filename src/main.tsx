import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { SchoolProvider } from './context/SchoolContext';
import { LanguageProvider } from './context/LanguageContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <SchoolProvider>
          <App />
        </SchoolProvider>
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>,
);
