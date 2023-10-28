import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  hideErrorElements,
  hideSuccessElements,
} from "../../components/common/utils/useHelpers";
import { sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import { useContext, useRef, useState } from "react";

import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { user, auth, loading, handleGoogleSignIn, handleEmailPasswordSignIn } =
    useContext(AuthContext);

  const emailRef = useRef(null);

  // Redirect to the desired route
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogIn = () => {
    handleGoogleSignIn()
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    setError("");
    setSuccess("");

    handleEmailPasswordSignIn(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        if (user.emailVerified) {
          setSuccess("Login is successful!");
          hideSuccessElements();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Login successful!",
            showConfirmButton: false,
            timer: 1500,
          });

          navigate(from, { replace: true });
        } else {
          sendEmailVerification(auth.currentUser).then(() => {
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "Verify email address!",
              showConfirmButton: false,
              timer: 1500,
            });
            const user = {
              email,
              lastLoggedAt: result.user.metadata.lastSignInTime,
            };
            // Last logged at in the database
            fetch("https://coffee-shop-server-nhr5ha8ny-bishwajit-pauls-projects.vercel.app/users", {
              method: "PATCH",
              headers: { "content-type": "application/json" },
              body: JSON.stringify(user),
            })
              .then((response) => response.json())
              .then((data) => {
                console.log(data);
              });
            setError("Email verification sent! Verify email.");
            hideErrorElements();
          });
        }
      })
      .catch((error) => {
        console.error(error);
        setError(error);
        hideErrorElements();
      });
  };

  const handleResetPassword = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    console.log(email);
    sendPasswordResetEmail(auth, email).then(() => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Password reset email is sent!",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };

  return (
    <>
      <Helmet title="Edu care || Login" />
      <div className="flex justify-center">
        {loading && <span className="loading loading-ring loading-lg"></span>}
      </div>

      <div className="lg:w-3/12 mx-auto flex justify-center items-center min-h-[calc(100vh-6rem)]">
        <div className="border p-6 w-full rounded-md shadow-lg bg-base-200">
          <h1 className="text-3xl font-bold mb-4 text-indigo-600">Log in</h1>
          <form onSubmit={handleLogin} className="w-full space-y-2">
            <input
              type="email"
              name="email"
              id="email"
              ref={emailRef}
              placeholder="Email...."
              className="input input-bordered input-sm w-full"
            />
            <div className="password-container w-full relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password..."
                className="input input-bordered input-sm w-full "
                required
              />
              <span
                className="absolute right-2 top-2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            <div className="">
              {error && (
                <p id="error-message" className="text-xs text-red-500">
                  {" "}
                  {error.toString()}
                </p>
              )}
              {success && (
                <p id="success-message" className="text-xs text-blue-500">
                  {" "}
                  {success.toString()}
                </p>
              )}
            </div>
            <div className="">
              <span className="text-xs text-indigo-800">
                New to this site ?{" "}
              </span>
              <Link
                to="/register"
                className="text-xs hover:underline text-indigo-500 m-0"
              >
                Register
              </Link>
            </div>
            <div className="">
              <span className="text-xs text-indigo-800">Forgot password ?</span>{" "}
              <Link
                onClick={handleResetPassword}
                className="text-xs hover:underline text-indigo-500 m-0"
              >
                Reset password
              </Link>
            </div>
            <button className="btn btn-sm w-full capitalize btn-primary">
              Login
            </button>
          </form>
          <div className="divider">OR</div>
          <p className="flex justify-center text-xs">
            Login with Google or GitHub
          </p>
          <div className="flex justify-between my-4">
            <div className="btn btn-circle btn-outline">
              <Link onClick={handleGoogleLogIn}>
                <FaGoogle />
              </Link>
            </div>
            <div className="btn btn-circle btn-outline">
              <FaGithub />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
