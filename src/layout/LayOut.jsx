import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StayUpdated from "../components/smalls/StayUpdated";

const LayoutPublic = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <StayUpdated />
      <Footer />
    </>
  );
};
export default LayoutPublic;
