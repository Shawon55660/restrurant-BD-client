import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import UseCard from '../../CustomHooks/UseCard';
import UseAxiosSecure from '../../CustomHooks/UseAxiosSecure';
import { authContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CheckForm = () => {
    const stripe = useStripe()
    const elements = useElements()
    const [cart,refetch] = UseCard();
    const axiosSecure = UseAxiosSecure()
    const [clientSecret, setClientSecret] = useState('')
    const {user} = useContext(authContext)
    const navigate = useNavigate()

    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    // console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }

    }, [axiosSecure, totalPrice])

    const handleSubmit = async(e) => {
        e.preventDefault()
        if(!stripe || !elements){
            return
        }

        const  cardElement = elements.getElement(CardElement);
        const{error,paymentMethod} =  await stripe.createPaymentMethod({

            type:'card',
            card:cardElement

        })
        if(error){
          return
        }
    
          // confirm payment
          const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardElement,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if (confirmError) {
            console.log('confirm error')
        }
        else {
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
               
                // payment api post all data in new collccdtion in server
                const payment = {
                    email: user.email,
                    price:totalPrice,
                    transactionId:paymentIntent.id,
                    menuItemId:cart.map(item=>item.menu_id),
                    cartId:cart.map(item=> item._id),
                    status: 'pending',
                    data:new Date()
                }

                const res =await axiosSecure.post('/payment',payment)
                if(res){
                    refetch()
                    console.log(res.data.result.insertedId)
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thank you for the taka paisa",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/dashboard/cart')
                }
            }
        }
         
}
    return (
        <div className='w-10/12 mx-auto'>
            <form onSubmit={handleSubmit}>

            <CardElement/>
            <button disabled={!stripe} className='btn btn-primary' type="submit" >
         Pay
      </button>
            
            </form>

        </div>
    );
};

export default CheckForm;