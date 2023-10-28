import { FaArrowCircleRight, FaHome } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

import BookingForm from "../Booking/BookingForm";
import ContactForm from "../ContactForm/ContactForm";
import SliderImageOverLay from "./SliderImageOverLay";
import SliderImageOverlayFour from "./SliderImageOverlayFour";
import SliderImageOverlayThree from "./SliderImageOverlayThree";
import SliderImageOverlayTwo from "./SliderImageOverlayTwo";

const Slider = () => {
  const location = useLocation();
  const isHomePageOrBookingPage = location.pathname === "/";
  const isHomePageOrContactPage = location.pathname === "/contact-us";

  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full min-h-screen">
        <img
          src="https://i.ibb.co/jHPwpr9/web-development.jpg"
          className="w-full rounded-md"
        />

        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-60 hover:opacity-75 transition duration-300 rounded-md"></div>
        <div className="absolute transform -translate-y-1/2 left-5 right-5 top-1/2 lg:px-16">
          <div className="lg:grid flex grid-cols-1 lg:grid-cols-12 justify-between items-center gap-6">
            <div className="lg:col-span-5 col-span-6">
              <div className="text-white space-y-4  lg:block">
                <h2 className="lg:text-6xl text-3xl text-white font-bold lg:uppercase">
                  Web Development Bootcamp
                </h2>
                <p className="text-xs hidden lg:block">
                  Join our intensive Web Development Bootcamp and gain expertise
                  in HTML, CSS, JavaScript, and popular web development
                  frameworks.
                </p>
                <div className="flex">
                  <div className="">
                    {isHomePageOrBookingPage ? (
                      <>
                        <Link to="/booking">
                          <button className="btn lg:btn-md btn-sm bg-yellow-500 lg:w-36 w-28 border-none ">
                            Booking <FaArrowCircleRight />
                          </button>
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link to="/">
                          <button className="btn lg:btn-md btn-sm bg-yellow-500 lg:w-36 w-28 border-none ">
                            Home <FaHome />
                          </button>
                        </Link>
                      </>
                    )}
                  </div>
                  <div className="">
                    {isHomePageOrBookingPage ? (
                      <>
                        <Link to="/contact-us">
                          <button className="btn lg:btn-md btn-sm bg-yellow-500 lg:w-36 w-28 border-none ">
                            Contact <FaArrowCircleRight />
                          </button>
                        </Link>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 col-span-6 lg:pl-6 hidden lg:block">
              {isHomePageOrBookingPage ? (
                <SliderImageOverLay />
              ) : isHomePageOrContactPage ? (
                <ContactForm />
              ) : (
                <SliderImageOverLay />
              )}
            </div>
          </div>
        </div>

        <div className="absolute flex justify-center space-x-6  left-5 right-5  lg:bottom-10 bottom-2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/nC2Mv4K/digital-marketing.jpg"
          className="w-full rounded-md"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-60 hover:opacity-75 transition duration-300 rounded-md"></div>
        <div className="absolute transform -translate-y-1/2 left-5 right-5 top-1/2 lg:px-16">
          <div className="lg:grid flex grid-cols-1 lg:grid-cols-12 justify-between items-center gap-6">
            <div className="lg:col-span-5">
              <div className="text-white space-y-4  lg:block">
                <h2 className="lg:text-6xl text-3xl text-white font-bold lg:uppercase">
                  Digital Marketing Certification
                </h2>
                <p className="text-xs hidden lg:block">
                  Earn a Digital Marketing Certification in this comprehensive
                  program covering SEO, content marketing, social media, and PPC
                  advertising.
                </p>

                <div className="flex">
                  <div className="">
                    {isHomePageOrBookingPage ? (
                      <>
                        <Link to="/booking">
                          <button className="btn lg:btn-md btn-sm bg-yellow-500 lg:w-36 w-28 border-none ">
                            Booking <FaArrowCircleRight />
                          </button>
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link to="/">
                          <button className="btn lg:btn-md btn-sm bg-yellow-500 lg:w-36 w-28 border-none ">
                            Home <FaHome />
                          </button>
                        </Link>
                      </>
                    )}
                  </div>
                  <div className="">
                    {isHomePageOrBookingPage ? (
                      <>
                        <Link to="/contact-us">
                          <button className="btn lg:btn-md btn-sm bg-yellow-500 lg:w-36 w-28 border-none ">
                            Contact <FaArrowCircleRight />
                          </button>
                        </Link>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 lg:pl-6">
              {isHomePageOrBookingPage ? (
                <SliderImageOverlayTwo />
              ) : isHomePageOrContactPage ? (
                <ContactForm />
              ) : (
                <SliderImageOverLay />
              )}
            </div>
          </div>
        </div>
        <div className="absolute flex justify-center space-x-6  left-5 right-5  lg:bottom-10 bottom-2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/9tKr1Dr/graphic-design.jpg"
          className="w-full rounded-md"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-60 hover:opacity-75 transition duration-300 rounded-md"></div>

        <div className="absolute transform -translate-y-1/2 left-5 right-5 top-1/2 lg:px-16">
          <div className="lg:grid flex grid-cols-1 lg:grid-cols-12 justify-between items-center gap-6">
            <div className="lg:col-span-5">
              <div className="text-white space-y-4  lg:block">
                <h2 className="lg:text-6xl text-3xl text-white font-bold lg:uppercase">
                  Teacher Training Workshop
                </h2>
                <p className="text-xs hidden lg:block">
                  Enhance your teaching skills with our Teacher Training
                  Workshop. Learn effective classroom management, curriculum
                  design, and student engagement techniques.
                </p>

                <div className="flex">
                  <div className="">
                    {isHomePageOrBookingPage ? (
                      <>
                        <Link to="/booking">
                          <button className="btn lg:btn-md btn-sm bg-yellow-500 lg:w-36 w-28 border-none ">
                            Booking <FaArrowCircleRight />
                          </button>
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link to="/">
                          <button className="btn lg:btn-md btn-sm bg-yellow-500 lg:w-36 w-28 border-none ">
                            Home <FaHome />
                          </button>
                        </Link>
                      </>
                    )}
                  </div>
                  <div className="">
                    {isHomePageOrBookingPage ? (
                      <>
                        <Link to="/contact-us">
                          <button className="btn lg:btn-md btn-sm bg-yellow-500 lg:w-36 w-28 border-none ">
                            Contact <FaArrowCircleRight />
                          </button>
                        </Link>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 lg:pl-6">
              {isHomePageOrBookingPage ? (
                <SliderImageOverlayThree />
              ) : isHomePageOrContactPage ? (
                <ContactForm />
              ) : (
                <SliderImageOverLay />
              )}
            </div>
          </div>
        </div>
        <div className="absolute flex justify-center space-x-6  left-5 right-5  lg:bottom-10 bottom-2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/2ZsrW4C/data-science.jpg"
          className="w-full rounded-md"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-60 hover:opacity-75 transition duration-300 rounded-md"></div>
        <div className="absolute transform -translate-y-1/2 left-5 right-5 top-1/2 lg:px-16">
          <div className="lg:grid flex grid-cols-1 lg:grid-cols-12 justify-between items-center gap-6">
            <div className="lg:col-span-5">
              <div className="text-white space-y-4  lg:block">
                <h2 className="lg:text-6xl text-3xl text-white font-bold lg:uppercase">
                  Data Science Masterclass
                </h2>
                <p className="text-xs hidden lg:block">
                  Become a data scientist with our Data Science Masterclass.
                  Cover data analysis, machine learning, and data visualization
                  in depth.
                </p>

                <div className="flex">
                  <div className="">
                    {isHomePageOrBookingPage ? (
                      <>
                        <Link to="/booking">
                          <button className="btn lg:btn-md btn-sm bg-yellow-500 lg:w-36 w-28 border-none ">
                            Booking <FaArrowCircleRight />
                          </button>
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link to="/">
                          <button className="btn lg:btn-md btn-sm bg-yellow-500 lg:w-36 w-28 border-none ">
                            Home <FaHome />
                          </button>
                        </Link>
                      </>
                    )}
                  </div>

                  <div className="">
                    {isHomePageOrBookingPage ? (
                      <>
                        <Link to="/contact-us">
                          <button className="btn lg:btn-md btn-sm bg-yellow-500 lg:w-36 w-28 border-none ">
                            Contact <FaArrowCircleRight />
                          </button>
                        </Link>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 lg:pl-6">
              {isHomePageOrBookingPage ? (
                <SliderImageOverlayFour />
              ) : isHomePageOrContactPage ? (
                <ContactForm />
              ) : (
                <SliderImageOverLay />
              )}
            </div>
          </div>
        </div>
        <div className="absolute flex justify-center space-x-6  left-5 right-5  lg:bottom-10 bottom-2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
