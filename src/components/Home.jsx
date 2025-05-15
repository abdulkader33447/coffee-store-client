import React, { useState } from "react";
import { useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";

const Home = () => {
  const initCoffees = useLoaderData();
  // console.log(coffees);

  const [coffees, setCoffees] = useState(initCoffees);
  return (
    <div className="lg:w-8/12 md:w-10/12 w-11/12 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {coffees.map((coffee) => (
          <CoffeeCard
           key={coffee._id}
           coffees={coffees}
           setCoffees={setCoffees}
           coffee={coffee}
           ></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
