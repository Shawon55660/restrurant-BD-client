import React from 'react';
import Heading from '../../SharedComponents/Heading';
import useMenu from '../../CustomHooks/useMenu';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Loadd from '../../AllComponents/Loadd';
import { Link } from 'react-router-dom';

const ManageItem = () => {

    const [menu,loading] = useMenu()

    const handleUpdate = (id)=>{

    }
    if(loading) return <Loadd></Loadd>
    return (
        <div>
          <Heading subHeading='---Hurry Up!---' heading='MANAGE ALL ITEMS'></Heading>
          <div>
                  <div className="flex  mb-8">
                      <h2 className="text-4xl"> Total Items: {menu.length}</h2>
                      {/* <h2 className="text-4xl">Total Price: ${totalPrice}</h2> */}
                      {/* <button className="btn btn-primary">Pay</button> */}
          
                  </div>
                  <div className="overflow-x-auto">
                      <table className="table  w-full">
                          {/* head */}
                          <thead className='bg-orange-400 text-white text-sm'>
                              <tr>
                                  <th>
                                      serial
                                  </th>
                                  <th>Image</th>
                                  <th>ItemName</th>
                                  <th>Price</th>
                                  <th>Action</th>
                                  <th>Action</th>
                              </tr>
                          </thead>
                          <tbody>
                              {
                                  menu.map((item, index) => <tr key={item._id}>
                                      <th>
                                          {index + 1}
                                      </th>
                                      <td>
                                          <div className="flex items-center gap-3">
                                              <div className="avatar">
                                                  <div className="mask mask-squircle w-12 h-12">
                                                      <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                  </div>
                                              </div>
                                          </div>
                                      </td>
                                      <td>
                                          {item.name}
                                      </td>
                                      <td>${item.price}</td>
                                      <td>
                                          <Link to={`/dashboard/updateItem/${item._id}`}><button
                                              onClick={() => handleUpdate(item._id)}
                                              className="btn btn-ghost btn-lg">
                                              <FaEdit className="text-orange-400"></FaEdit>
                                          </button></Link>
                                      </td>
                                      <td>
                                          <button
                                              onClick={() => handleDelete(item._id)}
                                              className="btn btn-ghost btn-lg">
                                              <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                          </button>
                                      </td>
                                  </tr>)
                              }
          
          
                          </tbody>
                      </table>
                  </div>
              </div>
        </div>
    );
};

export default ManageItem;