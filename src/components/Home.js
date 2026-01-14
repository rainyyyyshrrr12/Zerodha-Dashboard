import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import TopBar from "./TopBar";
import Dashboard from "./Dashboard";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Positions from "./Positions";
import Funds from "./Funds";

const Home = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");

    
  }, []);

  return (
    <>
      <TopBar />

      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="orders" element={<Orders />} />
        <Route path="holdings" element={<Holdings />} />
        <Route path="positions" element={<Positions />} />
        <Route path="funds" element={<Funds />} />
      </Routes>
    </>
  );
};

export default Home;
