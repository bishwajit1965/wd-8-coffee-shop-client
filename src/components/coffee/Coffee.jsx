import "./Coffee.css";

import { Link, useLoaderData } from "react-router-dom";

import CoffeeCard from "../coffeeCard/CoffeeCard";
import { FaMugHot } from "react-icons/fa";
import PageTitle from "../common/PageTitle/PageTitle";
import { useState } from "react";

const Coffee = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div className="coffee-component-bg">
      <div className=" p-2 py-10 w-full">
        <div className="  lg:p-20">
          <PageTitle
            topSlogan="--- Sip and Savour---"
            pageTitle="Our popular Products"
            description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here."
          />
          <div className="m-2 flex justify-center">
            <Link to="/add-coffee">
              <button className="btn btn-sm bg-yellow-500 capitalize flex items-center">
                Add coffee <FaMugHot />
              </button>
            </Link>
          </div>
          <div className=" grid grid-cols-1 lg:grid-cols-12 justify-between gap-4 lg:mt-10 my-2">
            {coffees.map((coffee) => (
              <CoffeeCard
                key={coffee._id}
                coffee={coffee}
                coffees={coffees}
                setCoffees={setCoffees}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coffee;
