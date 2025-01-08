import React, { useContext } from 'react';
import UseAxiosSecure from '../CustomHooks/UseAxiosSecure';
import Swal from 'sweetalert2';
import UseCard from '../CustomHooks/UseCard';
import { authContext } from '../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';


const ChefCard = ({item}) => {
    const {name,image,category,price,recipe,_id} = item || {}
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = UseAxiosSecure()
    const[,refetch] = UseCard()
    const {user} = useContext(authContext)
    const handleAddCart = ()=>{
        
        if(user && user?.email){
            const cartItem = {
                menu_id :_id,
                email:user.email,
                image,
                name,
                price

            }
            console.log('cartItem')
            axiosSecure.post('/carts',cartItem)
            .then(res=>{
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} added to your cart`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()
                   
                }
            })
        }
        else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    //   send the user to the login page
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }
    return (
        <div className=" bg-gray-100 shadow-xl relative">
            <p className='bg-black text-white px-4 py-1 absolute right-2 rounded-sm top-2'>${price}</p>
                <figure className="w-full">
                    <img
                        src={image}
                        alt="Shoes"
                        className="w-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions">
                        <button onClick={handleAddCart} className="px-6 py-3 uppercase border-b-2 border-yellow-500 rounded-xl font-semibold text-yellow-500">add to cart</button>
                    </div>
                </div>
            </div>
    );
};

export default ChefCard;