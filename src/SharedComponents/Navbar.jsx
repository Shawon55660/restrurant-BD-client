import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';

const Navbar = () => {
  const {user,logOut} = useContext(authContext)
  const navigate = useNavigate()
 const handleLogOut =()=>{
  logOut()
  .then(()=>{
    alert('logout successfully')
    // navigate('/login')
  })

 }
  const links = <>
  <li><NavLink to='/'>Home</NavLink></li>
  <li><NavLink to='/our-menu'>Our menu</NavLink></li>
  <li><NavLink to='/order/salad'>Order</NavLink></li>
  <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
  {
    user?.email?<li onClick={handleLogOut}><button to='/login'>Sign Out</button></li>:<li ><Link to='/login'>Sign In</Link></li>
  }
  {
    user?.photoURL ? <img className='w-10 h-10 rounded-full' src={user?.photoURL} alt="" /> : <img className='w-10 h-10 ' src="https://img.icons8.com/?size=100&id=PqHNG1tsx0dj&format=png&color=FFFFFF" alt="" />
  }
   
  </>
  return (
    <div className=' w-11/12 z-20 fixed'>
      <div className="navbar     bg-[#00000062]   mx-auto text-white ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 gap-3 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                {links}

            </ul>
          </div>
          <a className="btn btn-ghost text-xl">{user?.displayName}</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal gap-3 px-1">
      {links}
          </ul>
        </div>
       
      </div>

    </div>
  );
};

export default Navbar;