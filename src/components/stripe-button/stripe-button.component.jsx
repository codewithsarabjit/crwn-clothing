import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51I4VG3Cge2GiJwsT3BG3afupHFtAUL9ztbsw6qNJLvEHP8YP07JTeTlks9lb0xKE7Qbc9Aq9VuSt1ZhFHdl6bVul00pT9Rm3YJ';

    const onToken = token => {
        console.log(token);
        alert('payment successfull');
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN CLothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;