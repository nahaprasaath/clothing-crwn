import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStrip = price * 100;
    const publishableKey = 'pk_test_51IrzNeSJdGSflqxQaxYgwQtYe2hGzKrjEx9ubm88OiN4JEwu9y8h3OUS2E3eqHcXoOCmMOtfkM5chp3GVASc7UvT00v9CsAs6u'

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStrip}
            panelLabel='Pay Now'
            email
            bitcoin
            currency
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;