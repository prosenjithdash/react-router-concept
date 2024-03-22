import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Navbar from "./Header/Navbar/Navbar";
import Footer from "./Footer/Footer";

const Home = () => {
    return (
        <div className="text-center my-6 w-[80%] max-w-[1440px] mx-auto my-10">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;