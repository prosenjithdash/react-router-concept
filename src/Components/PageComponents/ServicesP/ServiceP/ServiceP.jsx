import { Link } from "react-router-dom";

const ServiceP = ({ service }) => {
    const { id, email, name } = service;
    return (
        <div className="border border-orange-600 rounded-xl p-4 my-2 bg-teal-400 shadow-lg">
            <h2 className="text-xl font-extrabold">ID: {id} </h2>
            <p>Name: {name}</p>
            <p className="pb-4">Email: {email}</p>
            <Link className="border bg-orange-600 text-white p-2 rounded-xl mt-10" to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default ServiceP;