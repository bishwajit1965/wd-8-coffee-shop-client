import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
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
  } = coffee || {};

  const handleCoffeeDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-shop-server-nhr5ha8ny-bishwajit-pauls-projects.vercel.app/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Coffee has been deleted.", "success");
              const remaining = coffees.filter(
                (filCoffee) => filCoffee._id !== _id
              );
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="col-span-6 bg-base-200 lg:p-4 p-2 rounded-md shadow-lg">
      <div className="">
        <div className="lg:flex flex-1 lg:gap-4 justify-between items-center">
          <div className="col-span-4">
            <img src={photoUrl} alt="" className="lg:w-52 lg:h-60 w-full" />
          </div>
          <div className="col-span-7">
            <h2>{name}!</h2>
            <p>{chef}</p>
            <p>{price}</p>
          </div>
          <div className="col-span-1">
            <div className="space-y-2">
              <div className="grid lg:w-24 w-full lg:h-10 rounded bg-primary text-primary-content place-content-center">
                <Link
                  to={`/single-coffee/${_id}`}
                  className="m-0 flex items-center"
                >
                  <FaEye className="mr-2" /> View
                </Link>
              </div>
              <div className="grid lg:w-24 w-full lg:h-10 rounded bg-accent text-accent-content place-content-center">
                <Link
                  to={`/update-coffee/${_id}`}
                  className="m-0 flex items-center"
                >
                  <FaEdit className="mr-2" /> Update
                </Link>
              </div>
              <div className="grid lg:w-24 w-full lg:h-10 rounded bg-secondary text-secondary-content place-content-center">
                <Link
                  onClick={() => handleCoffeeDelete(_id)}
                  className="m-0 flex items-center"
                >
                  <FaTrash className="mr-2" /> Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
