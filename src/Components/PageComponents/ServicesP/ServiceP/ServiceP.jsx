
const ServiceP = ({ service }) => {
    const { id, email, name } = service;
    return (
        <div className="border border-orange-600 rounded-xl p-4 my-2 bg-teal-400 shadow-lg">
            <h2 className="text-xl font-extrabold">ID: {id} </h2>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
        </div>
    );
};

export default ServiceP;