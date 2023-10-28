import { Link, useLoaderData } from "react-router-dom";

import { FaHome } from "react-icons/fa";

const SingleCoffee = () => {
  const loadedCoffee = useLoaderData();
  const {
    _id,
    name,
    chef,
    supplier,
    taste,
    category,
    details,
    photoUrl,
    price,
  } = loadedCoffee || {};
  return (
    <div className="bg-base-200 lg:p-20 p-2 rounded-md shadow-lg">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 justify-center items-center">
        <div className="col-span-5">
          <img src={photoUrl} alt="" className="w-3/4" />
        </div>
        <div className="col-span-7 lg:space-y-2">
          <h1 className="text-2xl font-bold">Coffee Name: {name}</h1>
          <p>Chef: {chef}</p>
          <p>Supplier: {supplier}</p>
          <p>taste: {taste}</p>
          <p>Category: {category}</p>
          <p>Details: {details}</p>
          <p>Price: ${price} </p>
          <div className="lg:my-4 my-2">
            <Link to="/">
              <button className="btn btn-md bg-amber-500 capitalize flex items-center text-white">
                <FaHome /> Go Back Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCoffee;
