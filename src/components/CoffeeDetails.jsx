import React from 'react';
import { useLoaderData } from 'react-router';

const CoffeeDetails = () => {
  const coffeeDetail = useLoaderData()
  console.log(coffeeDetail);
  
  const {name,photo,price}=coffeeDetail
  return (
    <div>
      <h1 className='text-center text-4xl'>Coffee Details</h1>
      <img src={photo} alt="" />
      <h1>Name : {name}</h1>
      <p>{price}</p>
    </div>
  );
};
 
export default CoffeeDetails;