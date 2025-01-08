import React from 'react';
import ChefCard from './ChefCard';
import img1 from '../../src/assets/menu/salad-bg.jpg'

const ChefRecommand = () => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12 my-12'>
           <div className=" bg-gray-100 shadow-xl ">
           
                <figure className="w-full">
                    <img
                        src={img1}
                        alt="Shoes"
                        className="w-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Caeser Salad</h2>
                    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <div className="card-actions">
                        <button className="px-6 py-3 uppercase border-b-2 border-yellow-500 rounded-xl font-semibold text-yellow-500">add to cart</button>
                    </div>
                </div>
            </div>
            <div className=" bg-gray-100 shadow-xl ">
           
                <figure className="w-full">
                    <img
                        src={img1}
                        alt="Shoes"
                        className="w-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Caeser Salad</h2>
                    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <div className="card-actions">
                        <button className="px-6 py-3 uppercase border-b-2 border-yellow-500 rounded-xl font-semibold text-yellow-500">add to cart</button>
                    </div>
                </div>
            </div>
            <div className=" bg-gray-100 shadow-xl ">
           
                <figure className="w-full">
                    <img
                        src={img1}
                        alt="Shoes"
                        className="w-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Caeser Salad</h2>
                    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <div className="card-actions">
                        <button className="px-6 py-3 uppercase border-b-2 border-yellow-500 rounded-xl font-semibold text-yellow-500">add to cart</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ChefRecommand;