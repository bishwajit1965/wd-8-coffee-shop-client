const PageTitle = ({ topSlogan, pageTitle, description }) => {
  return (
    <div className="lg:space-y-4 space-y-2">
      <h2 className="text-center">{topSlogan} </h2>
      <h1 className="lg:text-3xl text-xl text-center font-bold">{pageTitle}</h1>
      <p className="lg:mb-2 mb-2 text-center lg:w-1/2 flex mx-auto text-sm">
        {description}
      </p>
    </div>
  );
};

export default PageTitle;
