import React from 'react';

const Reviews = ({pd}) => {
    const {name,rating,reviews}=pd
    return (
        <div className="grid grid-cols-1 gap-4 p-6 m-8 border-4 rounded-xl mb-10 bg-white">
            <h1 className="text-purple-500 text-2xl font-sans font-bold">Name: {name}</h1>
            <h2 className='text-3xl text-orange-600'>Rating: {rating}</h2>
            <p className="text-xl w-full flex-wrap">{reviews}</p>
        </div>
    );
};

export default Reviews;