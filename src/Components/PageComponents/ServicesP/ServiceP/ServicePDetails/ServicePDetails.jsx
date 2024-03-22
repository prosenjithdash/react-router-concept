// 45-5 Dynamic Route With Params And Load Single User Data

import { useLoaderData } from "react-router-dom";

const ServicePDetails = ({ SDetails }) => {
    const ServiceD = useLoaderData();
    const { name, id, email } = ServiceD;
    console.log(ServiceD)
    return (
        <div className="border rounded-2xl w-full text-center flex-col justify-center bg-purple-600 text-white p-4 ">
            <h2>Details Page No :{id}</h2>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
        </div>
    );
};

export default ServicePDetails;