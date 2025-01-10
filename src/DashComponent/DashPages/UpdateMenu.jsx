import React, { useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import UseAxiosSecure from '../../CustomHooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Heading from '../../SharedComponents/Heading';
import { useForm } from 'react-hook-form';
import UseAxiosPublic from '../../CustomHooks/UseAxiosPublic';
import { FaUtensils } from 'react-icons/fa';
import Swal from 'sweetalert2';
const image_api_key = import.meta.env.VITE_IMAGE_HOSTING_API;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_api_key}`

const UpdateMenu = () => {
    const { _id, name, price, recipe, category, image } = useLoaderData()
    const axiosSecure = UseAxiosSecure()
    const navigate = useNavigate()
    // const [info, setInfo] = useState({ _id, name, price, recipe, category, image })

    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = UseAxiosPublic()


    const onSubmit = async (data) => {

        const imgFile = { image: data.image[0] }

        const res = await axiosPublic.post(image_hosting_api, imgFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                category: data.category,
                price: data.price,
                image: res.data.data.display_url,
                recipe: data.recipe
            }

            const resItem = await axiosSecure.patch(`/menus/update/${_id}`, menuItem)
            if (resItem.data.modifiedCount) {

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: ` is updated to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }

            reset()
            navigate('/dashboard/manageItems')



        }


    }


return (
    <div className='w-10/12 mx-auto'>
        <Heading subHeading="---What's new?---" heading="ADD AN ITEM"></Heading>

        <form onSubmit={handleSubmit(onSubmit)}>
            <label className="form-control w-full ">
                <div className="label">
                    <span className="label-text">Recipe name*</span>
                </div>
                <input defaultValue={name} {...register('name', { required: true })} type="text" placeholder="Recipe name" className="input input-bordered w-full " />

            </label>
            <div className='flex gap-4'>
                <label className="form-control w-full ">
                    <div className="label ">
                        <span className="label-text">Category*</span>
                    </div>

                    <select {...register('category', { required: true })} defaultValue={category} className="select  input-bordered w-full ">
                        <option disabled value={'category'} >Select a Category</option>
                        <option value='dessert'>dessert</option>
                        <option value='pizza'>pizza</option>
                        <option value='salad'> salad</option>
                        <option value='drinks'>drinks</option>
                        <option value='soup'>soup</option>
                    </select>
                </label>
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">Price*</span>
                    </div>
                    <input defaultValue={price} {...register('price', { required: true })} type="text" placeholder="Price" className="input input-bordered w-full " />

                </label>
            </div>
            <label className="form-control">
                <div className="label">
                    <span className="label-text">Recipe Details*</span>

                </div>
                <textarea defaultValue={recipe} {...register('recipe', { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>

            </label>
            <div className='my-4'><input     {...register('image', { required: false })} type="file" className="file-input  file-input-gray w-full max-w-xs" />

            </div>

            <button type='submit' className='flex items-center bg-orange-500 py-2 px-6 rounded-sm my-2 font-semibold gap-2 text-white'>Update <FaUtensils></FaUtensils>  </button>
        </form>

    </div>
);
};

export default UpdateMenu;