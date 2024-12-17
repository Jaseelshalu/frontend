import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthContext from './Utilities/AuthContext.jsx'


const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <AuthContext>
        <App />
      </AuthContext>
    </QueryClientProvider>
  </BrowserRouter>,


)
