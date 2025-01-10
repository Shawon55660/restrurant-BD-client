import React from 'react';
import Heading from '../../SharedComponents/Heading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckForm from './CheckForm';

const PaymentPage = () => {

    const stripePromise  = loadStripe(import.meta.env.VITE_PAYMENT_KEY)
    return (
        <div>
            <Heading subHeading='Payment' heading='buy your food here'></Heading>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckForm></CheckForm>
                </Elements>
            </div>

         
            
        </div>
    );
};

export default PaymentPage;