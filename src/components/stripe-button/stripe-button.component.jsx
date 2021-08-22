import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; // in US cents
  const publishableKey =
    'pk_test_51J2FFfFLHH8ozQrvSUCjygfdlCGKj2qRjDhQHc4jIb0NXVbQFzVUvlDvRQdTaOqcDukWkUYFsKQZHjn4x5HC6AJh00KRCKN6lX';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
