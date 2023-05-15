import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyle } from './globals/styles'
import { BrowserRouter } from 'react-router-dom'
import { LoaderContextProvider } from './context/LoaderContext'
import './tailwind.css';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoaderContextProvider>
        <GlobalStyle />
        <App />
      </LoaderContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
