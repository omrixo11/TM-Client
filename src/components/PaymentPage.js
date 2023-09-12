import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm'; // Create this component for the payment form

const PaymentPage = () => {
  const [stripePromise, setStripePromise] = useState(null);

  useEffect(() => {
    // Load Stripe.js asynchronously
    const loadStripePromise = loadStripe('YOUR_STRIPE_PUBLISHABLE_KEY');
    setStripePromise(loadStripePromise);
  }, []);

  return (
    <div>
      <h2>Payment Page</h2>
      {stripePromise && (
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default PaymentPage;
