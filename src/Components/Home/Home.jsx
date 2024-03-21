import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Navbar from "./Header/Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <h2>Home Page</h2>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;