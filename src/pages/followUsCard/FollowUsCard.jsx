import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const FollowUsCard = ({ singleGallery, gallery, setGallery }) => {
  const { _id, name, chef, price, photoUrl } = singleGallery || {};

  console.log("Gallery", gallery);

  const handleGalleryDelete = (_id) => {
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
        fetch(`https://coffee-shop-server-nhr5ha8ny-bishwajit-pauls-projects.vercel.app/gallery/${_id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Gallery data has been deleted.",
                "success"
              );
              const remaining = gallery.filter(
                (filteredGallery) => filteredGallery._id !== _id
              );
              setGallery(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="col-span-3">
      <div className="">
        <img src={photoUrl} alt="" className=" w-full" />
      </div>
      <div className="flex justify-between gap-6">
        <div className="">
          <button className="btn-xs rounded-sm">
            <Link
              to={`/single-gallery/${_id}`}
              className="m-0 flex items-center"
            >
              <FaEye className="mr-1 w-4" />
            </Link>
          </button>
        </div>
        <div className="">
          <button className="btn-xs rounded-sm">
            <Link
              to={`/update-gallery/${_id}`}
              className="m-0 flex items-center"
            >
              <FaEdit className="mr-1 w-4" />
            </Link>
          </button>
        </div>
        <div className="">
          <button className="btn-xs rounded-sm">
            <Link
              onClick={() => handleGalleryDelete(_id)}
              className="m-0 flex items-center"
            >
              <FaTrash className="mr-1 w-4" />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FollowUsCard;
