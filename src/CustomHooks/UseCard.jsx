import React, { useContext } from 'react';
import UseAxiosSecure from './UseAxiosSecure';
import { authContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const UseCard = () => {
    const axiosSecure = UseAxiosSecure()
    const {user} = useContext(authContext)
    const {refetch, data:cart=[]} = useQuery({
        queryKey:['cart',user?.email],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/carts?email=${user.email}`)
            return res.data
        }
    })
    return [cart,refetch]
};

export default UseCard;