import React, { useContext } from 'react';
import UseAxiosSecure from '../../CustomHooks/UseAxiosSecure';
import { authContext } from '../../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Loadd from '../../AllComponents/Loadd';

const PaymentHistroy = () => {
    const {user} =  useContext(authContext)
    const axiosSecure = UseAxiosSecure()
const {data:payments=[],isLoading} = useQuery({
    queryKey:['payment',user.email],
    queryFn:async()=>{
        const res = await axiosSecure.get(`/payment?email=${user.email}`)
        return res.data
    }
})
 if(isLoading) return <Loadd></Loadd>
    return (
       
        <div>
        <h2 className="text3-xl">Total Payments: {payments.length}</h2>
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>price</th>
                        <th>Transaction Id</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map((payment, index) => <tr key={payment._id}>
                        <th>{index + 1}</th>
                        <td>${payment.price}</td>
                        <td>{payment.transactionId}</td>
                        <td>{payment.status}</td>
                    </tr>)}
                    
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default PaymentHistroy;