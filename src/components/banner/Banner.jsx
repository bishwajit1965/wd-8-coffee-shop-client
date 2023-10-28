import "./Banner.css";

import Logo from "../../assets/images/more/logo1.png";
import iconFour from "../../assets/images/icons/4.png";
import iconOne from "../../assets/images/icons/1.png";
import iconThree from "../../assets/images/icons/3.png";
import iconTwo from "../../assets/images/icons/2.png";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-amber-900 flex justify-center">
        <div className="flex items-center space-x-3 py-2">
          <img src={Logo} alt="" className="w-10 " />
          <h1 className="text-2xl font-bold text-white">Expresso Emporium</h1>
        </div>
      </div>
      <div className="banner-bg shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 justify-between items-center min-h-[550px]">
          <div className="col-span-6 text-white"> </div>
          <div className="col-span-6 text-white lg:space-y-4 p-2">
            <h1 className="lg:text-6xl font-bold flex items-center font-sans">
              Would you like a cup of coffee?
            </h1>
            <p className="text-lg">
              It's coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back!! Your companion of every moment!!! Enjoy the
              beautiful moments and make them memorable.
            </p>
            <button className="btn btn-sm bg-yellow-500 border-none">
              Learn more
            </button>
          </div>
        </div>
      </div>
      <div className="bg-base-200 lg:p-24 p-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 justify-between">
          <div className="col-span-3 lg:space-y-4 space-y-2">
            <img src={iconOne} alt="" className="w-10" />
            <h2 className="text-xl font-bold">Awesome Aroma</h2>
            <p className="text-xs">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
          <div className="col-span-3 lg:space-y-4 space-y-2">
            <img src={iconTwo} alt="" className="w-10" />
            <h2 className="text-xl font-bold">High Quality</h2>
            <p className="text-xs">
              We served the coffee to you maintaining the best quality
            </p>
          </div>
          <div className="col-span-3 lg:space-y-4 space-y-2">
            <img src={iconThree} alt="" className="w-10" />
            <h2 className="text-xl font-bold">Pure Grades</h2>
            <p className="text-xs">
              The coffee is made of the green coffee beans which you will love
            </p>
          </div>
          <div className="col-span-3 lg:space-y-4 space-y-2">
            <img src={iconFour} alt="" className="w-10" />
            <h2 className="text-xl font-bold">Proper Roasting</h2>
            <p className="text-xs">
              Your coffee is brewed by first roasting the green coffee beans
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
