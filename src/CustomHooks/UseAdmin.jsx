import React, { useContext } from 'react';
import UseAxiosSecure from './UseAxiosSecure';
import { authContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const UseAdmin = () => {
    const { user } = useContext(authContext);
    const axiosSecure = UseAxiosSecure();
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user.email}`);
            // console.log(res.data);
            return res.data?.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default UseAdmin;