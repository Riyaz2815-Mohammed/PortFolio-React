import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./styles/global.css";

// Apply saved theme before React mounts to avoid FOUC
try {
  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    document.documentElement.classList.add('theme-light');
  } else if (saved === 'dark') {
    document.documentElement.classList.add('theme-dark');
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    document.documentElement.classList.add('theme-light');
  } else {
    document.documentElement.classList.add('theme-dark');
  }
} catch (e) {
  // ignore (localStorage may be unavailable)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
