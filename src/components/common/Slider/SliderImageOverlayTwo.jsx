const SliderImageOverlayTwo = () => {
  return (
    <div className="lg:grid flex grid-cols-1 lg:grid-cols-12 justify-between lg:gap-4 gap-2 invisible lg:visible">
      <div className="col-span-4 relative">
        <img
          src="https://i.ibb.co/WfPHk8h/teacher-training.jpg"
          alt=""
          className="lg:w-full lg:h-80 w- h-48 lg:border-4 rounded-xl   lg:border-yellow-400"
        />
        <div className="absolute bg-slate-800 opacity-80 bottom-1  rounded-b-md ml-1 w-[11.5rem]">
          <h2 className="lg:text-sm text-xs font-bold   bottom-4 lg:uppercase text-white lg:pl-4 hidden lg:block py-1">
            Teacher Training
          </h2>
        </div>
      </div>
      <div className="col-span-4 relative">
        <img
          src="https://i.ibb.co/d48HtPq/professional-development-2.jpg"
          alt=""
          className="lg:w-full lg:h-80 w- h-48 rounded-md border border-slate-500"
        />
        <div className="absolute bg-slate-800 opacity-80 bottom-1  rounded-b-md ml-1 w-[11.5rem]">
          <h2 className="lg:text-sm text-xs font-bold   bottom-4 lg:uppercase text-white lg:pl-4 hidden lg:block py-1">
            Prof Development
          </h2>
        </div>
      </div>
      <div className="col-span-4 relative">
        <img
          src="https://i.ibb.co/CMwbtCG/financial-literacy.jpg"
          alt=""
          className="lg:w-full lg:h-80 w- h-48 rounded-md border border-slate-500"
        />
        <div className="absolute bg-slate-800 opacity-80 bottom-1  rounded-b-md ml-1 w-[11.5rem]">
          <h2 className="lg:text-sm text-xs font-bold   bottom-4 lg:uppercase text-white lg:pl-4 hidden lg:block py-1">
            Financial Training
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SliderImageOverlayTwo;
