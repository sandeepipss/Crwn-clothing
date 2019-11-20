import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton =({price}) => {
    const priceForStripe =  price *100;
    const publishablekey = 'pk_test_llutwQxZsgpt2E8jBdGmXsSa00gEZ7smnL';

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
        description={`Your Total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        //currency="INR"
        token={onToken}
        stripeKey={publishablekey}
        />
    );
};

export default StripeCheckoutButton;
