import "./UpdateCoffee.css";

import { Link, useLoaderData } from "react-router-dom";

import { FaArrowLeft } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import PageTitle from "../../components/common/PageTitle/PageTitle";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const updatableCoffee = useLoaderData();
  const {
    _id,
    name,
    chef,
    supplier,
    taste,
    details,
    category,
    photoUrl,
    price,
  } = updatableCoffee || {};
  console.log(updatableCoffee);

  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photoUrl = form.photoUrl.value;
    const price = form.price.value;

    const updatedCoffee = {
      name,
      chef,
      supplier,
      taste,
      details,
      category,
      photoUrl,
      price,
    };

    Swal.fire({
      title: "Are you sure?",
      text: "If you are sure, proceed !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-shop-server-nhr5ha8ny-bishwajit-pauls-projects.vercel.app/update-coffee/${_id}`, {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(updatedCoffee),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              Swal.fire("Updated!", "Coffee has been updated.", "success");
            }
          });
      }
    });
  };
  return (
    <>
      <Helmet title="Coffee-shop || Update coffee" />
      <div className="lg:my-">
        <Link to="/" className="text-amber-900 text-xl flex items-center m-0">
          <FaArrowLeft className="mr-4" /> Go back home
        </Link>
      </div>
      <div className="update-coffee-bg w-full lg:py-12 lg:px-16 rounded-md shadow-xl p-2">
        <div className="lg-my-6 my-2">
          <PageTitle
            pageTitle="Update Coffee"
            description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here."
          />
        </div>
        <div className="bg-base-200 lg:p-20 rounded-md lg:my-6 my-2">
          <form
            onSubmit={handleUpdateCoffee}
            className="lg:space-y-4 space-y-2 lg:py-5 py-2"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 justify-between">
              <div className="col-span-6">
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Coffee name..."
                  className="input input-bordered input-md w-full"
                />
              </div>
              <div className="col-span-6">
                <input
                  type="text"
                  name="chef"
                  defaultValue={chef}
                  placeholder="Coffee chef..."
                  className="input input-bordered input-md w-full"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 justify-between">
              <div className="col-span-6">
                <input
                  type="text"
                  name="supplier"
                  defaultValue={supplier}
                  placeholder="Coffee supplier name..."
                  className="input input-bordered input-md w-full"
                />
              </div>
              <div className="col-span-6">
                <input
                  type="text"
                  name="taste"
                  defaultValue={taste}
                  placeholder="Coffee taste..."
                  className="input input-bordered input-md w-full"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 justify-between">
              <div className="col-span-6">
                <input
                  type="text"
                  name="category"
                  defaultValue={details}
                  placeholder="Coffee category"
                  className="input input-bordered input-md w-full"
                />
              </div>
              <div className="col-span-6">
                <input
                  type="text"
                  name="details"
                  defaultValue={category}
                  placeholder="Coffee details..."
                  className="input input-bordered input-md w-full"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 justify-between">
              <div className="col-span-6">
                <input
                  type="url"
                  name="photoUrl"
                  defaultValue={photoUrl}
                  placeholder="Photo url..."
                  className="input input-bordered input-md w-full"
                />
              </div>
              <div className="col-span-6">
                <input
                  type="text"
                  name="price"
                  defaultValue={price}
                  placeholder="Price..."
                  className="input input-bordered input-md w-full"
                />
              </div>
            </div>
            <div className="">
              <button className="btn btn-md w-full bg-amber-800 text-white hover:text-black">
                Update coffee
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateCoffee;
