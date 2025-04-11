import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AuthorityDashboard from './AuthorityDashboard';
import './AuthorityDashboard.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthorityDashboard/>
  </StrictMode>
)
