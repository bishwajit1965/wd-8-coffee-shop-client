import NavBar from "../components/common/NavBar/NavBar";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <div className="">
      <NavBar />
      <div className="max-w-7xl mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default LoginLayout;
