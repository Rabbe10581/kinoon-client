import React from 'react';

const CategoryCard = ({ category }) => {
    const { image, name } = category;
    return (
        <div className="card card-compact w-80 h-auto bg-base-300 shadow-xl">
            <figure><img className='h-[250px]' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-semibold text-3xl">{name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary text-white font-semibold">Show More</button>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;