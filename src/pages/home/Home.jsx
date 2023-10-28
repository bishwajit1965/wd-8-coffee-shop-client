import "./Home.css";

import { useEffect, useState } from "react";

import Banner from "../../components/banner/Banner";
import Coffee from "../../components/coffee/Coffee";
import FollowUs from "../followUs/FollowUs";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [coffees, setCoffees] = useState([]);
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    fetch("https://coffee-shop-server-nhr5ha8ny-bishwajit-pauls-projects.vercel.app/coffees")
      .then((response) => response.json())
      .then((data) => setCoffees(data));

    fetch("https://coffee-shop-server-nhr5ha8ny-bishwajit-pauls-projects.vercel.app/gallery")
      .then((response) => response.json())
      .then((data) => setGallery(data));
  }, []);
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <Helmet title="Coffee-shop || Home" />

      <Banner />

      <Coffee />

      <FollowUs gallery={gallery} setGallery={setGallery} />
    </div>
  );
};

export default Home;
