import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import {
  hideErrorElements,
  hideSuccessElements,
} from "../../components/common/utils/useHelpers";
import { useContext, useState } from "react";

import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    user,
    auth,
    loading,
    handleGoogleSignIn,
    registerUserWithEmailPassword,
  } = useContext(AuthContext);

  const handleGoogleLogIn = () => {
    handleGoogleSignIn()
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const imageUrl = form.imageUrl.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const acceptedTerms = form.terms.checked;

    // console.log(name, email, password, confirmPassword, imageUrl);
    if (name.trim() === "") {
      setError("Name field is empty");
      return;
    } else if (email.trim() === "") {
      setError("Email field is empty");
      return;
    } else if (imageUrl.trim() === "") {
      setError("Image url field is empty");
      return;
    } else if (password.trim() === "") {
      setError("Password field is empty");
      return;
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    } else if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one small letter");
      return;
    } else if (!/[0-9]/.test(password)) {
      setError("Password must contain at least one digit.");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      return;
    } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)) {
      setError("Password must contain at least one special character.");
    } else if (confirmPassword.trim() === "") {
      setError("Confirm password is empty!");
      return;
    } else if (password.trim() !== confirmPassword.trim()) {
      setError("Passwords do not match!");
      return;
    } else if (!acceptedTerms) {
      setError("Accept terms and conditions");
      return;
    } else {
      registerUserWithEmailPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Registration is successful!",
            showConfirmButton: false,
            timer: 1500,
          });
          setSuccess("Registration is successful!");
          hideSuccessElements();

          // Add  user to the uses database collection
          const createdAt = result.user?.metadata?.creationTime;
          const userData = { name, email, createdAt: createdAt };
          fetch("https://coffee-shop-server-nhr5ha8ny-bishwajit-pauls-projects.vercel.app/users", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(userData),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              if (data.insertedId) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User insertion is successful!!!",
                  showConfirmButton: true,
                  timer: 1500,
                });
              }
            });

          // Update user profile with name and imageUrl
          updateProfile(user, {
            displayName: name,
            photoURL: imageUrl,
          })
            .then((result) => {
              const user = result.user;
              console.log(user);
              setSuccess("Profile updated successfully!");
              hideSuccessElements();
            })
            .catch((error) => {
              console.error(error);
              setError(`Something went wrong ${error}`);
              hideErrorElements();
            });
        })
        .catch((error) => {
          console.error(error);
          if (error.code === "auth/email-already-in-use") {
            setError("Email already in use!");
            hideErrorElements();
          }
        });
    }
  };

  return (
    <>
      <Helmet title="Edu care || Register" />
      <div className="flex justify-center">
        {loading && <span className="loading loading-ring loading-lg"></span>}
      </div>

      <div className="lg:w-3/12 mx-auto flex justify-center items-center  min-h-[calc(100vh-6rem)]">
        <div className="border p-6 rounded-md shadow-lg bg-base-200">
          <h1 className="text-3xl font-bold mb-4 text-indigo-600">Register</h1>
          <form onSubmit={handleRegister} className="w-full space-y-2">
            <input
              type="text"
              name="name"
              placeholder="Name...."
              className="input input-bordered input-sm w-full max-w-xl"
            />
            <input
              type="email"
              name="email"
              placeholder="Email...."
              className="input input-bordered input-sm w-full max-w-xl"
            />
            <input
              type="url"
              name="imageUrl"
              placeholder="Image url...."
              className="input input-bordered input-sm w-full max-w-xl"
            />
            <div className="password-container relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password..."
                className="input input-bordered input-sm w-full"
              />
              <span
                className="absolute right-2 top-2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            <div className="password-container relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm password..."
                className="input input-bordered input-sm w-full"
              />
              <span
                className="absolute right-2 top-2"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="terms"
                id="terms"
                className="bg-indigo-500"
              />
              <label htmlFor="terms" className="text-xs">
                Accept terms & conditions &nbsp;
                <Link
                  to="/terms-conditions"
                  className="text-indigo-600 hover:underline ml-0"
                >
                  View Terms
                </Link>
              </label>
            </div>
            <div className="">
              {error && (
                <p id="error-message" className="text-xs text-red-500">
                  {error.toString()}
                </p>
              )}
              {success && (
                <p id="success-message" className="text-xs text-blue-500">
                  {success.toString()}
                </p>
              )}
            </div>
            <div className="">
              <span className="text-xs text-indigo-800">
                Already registered ?&nbsp;
              </span>
              <Link
                to="/login"
                className="text-xs hover:underline text-indigo-500 m-0"
              >
                Login
              </Link>
            </div>

            <button className="btn btn-sm w-full capitalize btn-primary">
              Register
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

export default Register;
