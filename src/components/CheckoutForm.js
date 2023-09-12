import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Handle the payment submission here
    // Use stripe.createPaymentMethod or stripe.confirmCardPayment
    // to create and confirm the payment with Stripe API

    // Example:
    try {
      const { paymentMethod, error } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });

      if (error) {
        console.error(error);
        // Handle payment error
      } else {
        console.log(paymentMethod);
        // Send paymentMethod.id to your server for further processing
      }
    } catch (error) {
      console.error(error);
      // Handle payment error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
