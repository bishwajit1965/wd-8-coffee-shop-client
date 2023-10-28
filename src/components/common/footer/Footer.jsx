import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLocationArrow,
  FaMailBulk,
  FaMapMarker,
  FaPhone,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";

import Logo from "../../../assets/images/more/logo1.png";

const Footer = () => {
  return (
    <footer className="lg:px-32 px-2 lg:py-10 py-2 footer bg-base-200 text-base-content">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 justify-between">
        <div className="col-span-6 lg:space-y-4 space-y-2">
          <img src={Logo} alt="" className="w-14" />
          <h1 className="text-xl font bold">Expresso Emporium</h1>
          <p className="text-xs">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>
          <div className="flex items-center space-x-2">
            <FaFacebook className="text-2xl" />
            <FaTwitter className="text-2xl" />
            <FaInstagram className="text-2xl" />
            <FaLinkedinIn className="text-2xl" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-4">
              <FaPhoneAlt /> <span>+88 01712453456</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaMailBulk /> <span>coffeeshop@GMAIL.COM</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarker /> <span>72, Wall street, King Road, Dhaka</span>
            </div>
          </div>
        </div>
        <div className="col-span-6 flex-end">
          <div className="lg:mb-4 mb-2">
            <h1 className="text-xl font bold">Contact with Us</h1>
          </div>

          <form className="space-y-2">
            <input
              type="text"
              name="name"
              placeholder="Name..."
              className="input input-bordered input-sm w-full"
            />{" "}
            <input
              type="email"
              name="email"
              placeholder="Email..."
              className="input input-bordered input-sm w-full"
            />
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Message..."
            ></textarea>
            <button className="btn btn-sm rounded-full btn-outline">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
