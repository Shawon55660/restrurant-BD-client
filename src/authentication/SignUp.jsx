import React, { useContext, useEffect, useState } from 'react';
import contactBannar from '../../src/assets/others/authentication.png'
import contactLogo from '../../src/assets/others/authentication2.png'
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from 'react-simple-captcha';
import { useForm } from 'react-hook-form';
import { CiFacebook } from 'react-icons/ci';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import UseAxiosPublic from '../CustomHooks/UseAxiosPublic';
import { auth } from '../firebase/init';
import Swal from 'sweetalert2';

const SignUp = () => {
    const {user,setUser, signUp} = useContext(authContext)
    const axiosPublic = UseAxiosPublic()
   const {register,handleSubmit,reset , formState: {errors}} = useForm()
   
      

       const onSubmit = data=>{
      
           signUp(data.email,data.password)
           .then((users)=>{
            setUser(users.user)
            updateProfile(auth.currentUser,{ displayName: data.name, photoURL: data.photo })
            .then(res=>{
                setUser({...users.user,displayName:data.name, photoURL: data.photo})
                const userInfo = {
                    name: data.name,
                    email: data.email
                }
                console.log('userInfo')
                axiosPublic.post('/users',userInfo)
                .then(res=>{
                    if(res.data.insertedId){
                        console.log(res.data)
                        
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'User created successfully.',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        reset();
                    }
                })
                
            })
            
           
           })
           .catch(error=>{
            alert('sign up Failed')
           })
   
       }
       return (
           <div className="bg-[url('../../src/assets/others/authentication.png')] mt-0 bg-cover w-full py-16  min-h-screen bg-center">
   
               <div className='bg-[url("../../src/assets/others/authentication.png")] shadow-2xl  p-10 grid md:grid-cols-2 w-10/12 mx-auto justify-center min-h-screen items-center'>
               <div className=" w-full  max-w-sm shrink-0 ">
                       <h2 className='font-bold text-2xl text-center'>Sign Up</h2>
                       <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                       <div className="form-control">
                               <label className="label">
                                   <span className="label-text">Name</span>
                               </label>
                               <input {...register('name', {required:true})} type="text" name='name' placeholder="name" className="input input-bordered"  />
                               {errors.name && <span className='text-red-600 py-2'>name is required</span> }
                           </div>
                           <div className="form-control">
                               <label className="label">
                                   <span className="label-text">Photo URL</span>
                               </label>
                               <input {...register('photo', {required:true})} type="url" name='photo' placeholder="photo URL" className="input input-bordered"  />
                               {errors.photo && <span className='text-red-600 py-2'>photo is required</span> }
                           </div>
                           <div className="form-control">
                               <label className="label">
                                   <span className="label-text">Email</span>
                               </label>
                               <input {...register('email', {required:true})} type="email" name='email' placeholder="email" className="input input-bordered"  />
                               {errors.email && <span className='text-red-600 py-2'>email is required</span> }
                           </div>
                           <div className="form-control">
                               <label className="label">
                                   <span className="label-text">Password</span>
                               </label>
                               <input {...register('password', {required:true})} name='password' type="password" placeholder="password" className="input input-bordered"  />
                               {errors.password && <span className='text-red-600 py-2'>password is required</span> }
                              
                           </div>
                          
                           <div className="form-control mt-3">
                               {/* <input disabled={disabled} className=" py-2 rounded-sm bg-[#D1A054B3] text-white" type="submit" value="Login"/> */}
                               <input  className=" disabled:bg-gray-400  py-3 rounded-sm bg-[#D1A054B3] text-white" type="submit" value="Sign Up" />  
                           </div>
                           <div className='form-control items-center justify-center mt-4'>
                               <Link to='/login' className='text-[#D1A054B3] font-semibold'>Go to log in</Link >
                               <p className='pt-2 font-semibold'>Or sign up with</p>
                               <div className='flex justify-center gap-4 py-4'>
                               <p className='border-[1px] border-gray-600 p-2 rounded-full'><FaFacebook size={30} /></p>
                               <p  className='border-[1px] border-gray-600 p-2 rounded-full'><FaGoogle size={30} /></p>
                              <p  className='border-[1px] border-gray-600 p-2 rounded-full'> <FaGithub size={30}/></p>
                               </div>
                           </div>
                       </form>
                   </div>
                   <div className='w-10/12 '><img src={contactLogo} className='' alt="" /></div>
                 
               </div>
   
   
           </div>
       );
};

export default SignUp;