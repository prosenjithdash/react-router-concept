import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="text-blue-600 ">

            {/* Do not use ancor just use Link in router */}

            {/* <a className="underline mr-4" href="/">Home</a>
            <a className="underline mr-4" href="/about">About</a>
            <a className="underline" href="/contact">Contact</a> */}

            <Link className="mr-4 " to='/'>Home</Link>
            <Link className="mr-4 "  to='/about'>About</Link>
            <Link className="mr-4 " to='/contact'>Contact</Link>
            <Link className="mr-4 " to='/services'>Services</Link>
            <Link className="mr-4 " to='/posts'>Post</Link>

            
        </div>
    );
};

export default Navbar;