import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './Router/router.jsx'
import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './provider/AuthProvider.jsx';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
)
