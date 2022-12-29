import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryCard from './CategoryCard';

const Categories = () => {

    const categories = useLoaderData()
    // console.log(categories);

    return (
        <div className='grid gap-6 pl-10 lg:grid-cols-3'>
            {
                categories.map(category => <CategoryCard
                    key={category.id}
                    category={category}
                ></CategoryCard>)
            }
        </div>
    );
};

export default Categories;