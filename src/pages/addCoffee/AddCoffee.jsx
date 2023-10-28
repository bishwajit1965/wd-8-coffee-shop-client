import "./AddCoffee.css";

import { FaArrowLeft } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import PageTitle from "../../components/common/PageTitle/PageTitle";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
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
    // console.log(name, chef, supplier, taste, category, details, photoUrl);
    const coffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photoUrl,
      price,
    };

    fetch("https://coffee-shop-server-nhr5ha8ny-bishwajit-pauls-projects.vercel.app/coffee", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(coffee),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Coffee insertion is successful!!!",
            showConfirmButton: true,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="bg-base-200 lg:p-20 rounded-md lg:my-6 my-2 coffee-bg">
      <Helmet title="Coffee-shop || Add coffee" />
      <div className="lg:my-">
        <Link to="/" className="text-amber-900 text-xl flex items-center m-0">
          <FaArrowLeft className="mr-4" /> Go back home
        </Link>
      </div>
      <div className="lg-my-6 my-2">
        <PageTitle
          pageTitle="Add New Coffee"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here."
        />
      </div>
      <div className="bg-base-200 lg:p-20 rounded-md lg:my-6 my-2">
        <form
          onSubmit={handleAddCoffee}
          className="lg:space-y-4 space-y-2 lg:py-5 py-2"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 justify-between">
            <div className="col-span-6">
              <input
                type="text"
                name="name"
                placeholder="Coffee name..."
                className="input input-bordered input-md w-full"
              />
            </div>
            <div className="col-span-6">
              <input
                type="text"
                name="chef"
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
                placeholder="Coffee supplier name..."
                className="input input-bordered input-md w-full"
              />
            </div>
            <div className="col-span-6">
              <input
                type="text"
                name="taste"
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
                placeholder="Coffee category"
                className="input input-bordered input-md w-full"
              />
            </div>
            <div className="col-span-6">
              <input
                type="text"
                name="details"
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
                placeholder="Photo url..."
                className="input input-bordered input-md w-full"
              />
            </div>
            <div className="col-span-6">
              <input
                type="text"
                name="price"
                placeholder="Price..."
                className="input input-bordered input-md w-full"
              />
            </div>
          </div>
          <div className="">
            <button className="btn btn-md w-full bg-amber-800 text-white hover:text-black">
              Add coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
