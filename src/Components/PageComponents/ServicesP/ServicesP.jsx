import { useLoaderData } from "react-router-dom";
import ServiceP from "./ServiceP/ServiceP";

const ServicesP = () => {
    const service = useLoaderData();
    console.log(service)
    return (
        <div className="mt-2">
            <h2>Services Page</h2>
            <h3>User : {service.length}</h3>
            <div className="lg:grid lg:grid-cols-3 gap-6">
                {
                    service.map(service => <ServiceP key={service.id} service={service}></ServiceP>)
                }
            </div>
        </div>
    );
};

export default ServicesP;