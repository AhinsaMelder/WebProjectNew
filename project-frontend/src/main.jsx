import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import './index.css'
import App from './App.jsx'

// Load Stripe with your publishable key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)

// Stripe Elements options
const stripeOptions = {
  appearance: {
    theme: 'stripe',
    variables: {
      colorPrimary: '#2563eb', // Blue color to match your theme
      colorBackground: '#ffffff',
      colorText: '#1e293b',
      colorDanger: '#dc2626',
      fontFamily: 'Inter, system-ui, sans-serif',
      borderRadius: '12px',
      spacingUnit: '4px',
    },
    rules: {
      '.Input': {
        padding: '12px',
        border: '1px solid #e2e8f0',
        boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
      },
      '.Input:focus': {
        border: '2px solid #2563eb',
        boxShadow: '0 0 0 3px rgb(37 99 235 / 0.1)',
      },
    },
  },
  loader: 'auto',
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Elements stripe={stripePromise} options={stripeOptions}>
      <App />
    </Elements>
  </StrictMode>,
)