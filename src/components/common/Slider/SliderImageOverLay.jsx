const SliderImageOverLay = () => {
  return (
    <div className="lg:grid flex grid-cols-1 lg:grid-cols-12 justify-between lg:gap-4 gap-2 invisible lg:visible">
      <div className="col-span-4 relative">
        <img
          src="https://i.ibb.co/yh2psw6/digital-maerkting.jpg"
          alt=""
          className="lg:w-full lg:h-80 w- h-48 rounded-md lg:border-4 lg:border-yellow-400"
        />
        <div className="absolute bg-slate-800 opacity-80 bottom-1  rounded-b-md ml-1 lg:w-[11.5rem] hidden lg:visible">
          <h2 className="lg:text-xs text-xs font-bold   bottom-4 lg:uppercase text-white lg:pl-4 hidden lg:block py-1">
            Digital Marketing
          </h2>
        </div>
      </div>
      <div className="col-span-4 relative">
        <img
          src="https://i.ibb.co/yFjbc7w/project-management.jpg"
          alt=""
          className="lg:w-full lg:h-80 w- h-48 rounded-md border border-slate-500"
        />
        <div className="absolute bg-slate-800 opacity-80 bottom-1  rounded-b-md ml-1 lg:w-[11.5rem] hidden lg:visible">
          <h2 className="lg:text-xs text-xs font-bold   bottom-4 lg:uppercase text-white lg:pl-4 hidden lg:block py-1">
            Project Management
          </h2>
        </div>
      </div>
      <div className="col-span-4 relative">
        <img
          src="https://i.ibb.co/SrYJg79/data-science.jpg"
          alt=""
          className="lg:w-full  lg:h-80 w- h-48 rounded-md border border-slate-500"
        />
        <div className="absolute bg-slate-800 opacity-80 bottom-1  rounded-b-md ml-1 lg:w-[11.5rem] hidden lg:visible">
          <h2 className="lg:text-xs text-xs font-bold   bottom-4 lg:uppercase text-white lg:pl-4 hidden lg:block py-1">
            Data Science
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SliderImageOverLay;
