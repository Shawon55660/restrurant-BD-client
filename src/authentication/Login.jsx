import React, { useContext, useEffect, useState } from 'react';
import contactBannar from '../../src/assets/others/authentication.png'
import contactLogo from '../../src/assets/others/authentication2.png'
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from 'react-simple-captcha';
import { useForm } from 'react-hook-form';
import { CiFacebook } from 'react-icons/ci';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';

const Login = () => {
    const {user,setUser, login} = useContext(authContext)
    const navigate = useNavigate()

    const {register,handleSubmit,reset , formState: {errors}} = useForm()

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const [disabled, setDisabled] = useState(true);

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
      
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        }
        else {
            setDisabled(true)
        }
    }

    const onSubmit = data=>{
        login(data.email,data.password)
        .then(()=>{
            alert('login successfully')
            navigate('/')
        })
        .catch(error=>{
            alert(error)
        })

    }
    return (
        <div className="bg-[url('../../src/assets/others/authentication.png')] mt-0 bg-cover w-full py-16  min-h-screen bg-center">

            <div className='bg-[url("../../src/assets/others/authentication.png")] shadow-2xl  p-10 grid md:grid-cols-2 w-10/12 mx-auto justify-center min-h-screen items-center'>
                <div className='w-10/12 '><img src={contactLogo} className='' alt="" /></div>
                <div className=" w-full  max-w-sm shrink-0 ">
                    <h2 className='font-bold text-2xl text-center'>Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
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
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            
                           
                        <label className="label">
                                     <LoadCanvasTemplate />
                                </label>
                            <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-3">
                            {/* <input disabled={disabled} className=" py-2 rounded-sm bg-[#D1A054B3] text-white" type="submit" value="Login"/> */}
                            <input disabled={disabled} className=" disabled:bg-gray-400  py-3 rounded-sm bg-[#D1A054B3] text-white" type="submit" value="Login" />  
                        </div>
                        <div className='form-control items-center justify-center mt-4'>
                            <Link to='/signUp' className='text-[#D1A054B3] font-semibold'>Create a New Account</Link>
                            <p className='pt-2 font-semibold'>Or sign in with</p>
                            <div className='flex justify-center gap-4 py-4'>
                            <p className='border-[1px] border-gray-600 p-2 rounded-full'><FaFacebook size={30} /></p>
                            <p  className='border-[1px] border-gray-600 p-2 rounded-full'><FaGoogle size={30} /></p>
                           <p  className='border-[1px] border-gray-600 p-2 rounded-full'> <FaGithub size={30}/></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>


        </div>
    );
};

export default Login;