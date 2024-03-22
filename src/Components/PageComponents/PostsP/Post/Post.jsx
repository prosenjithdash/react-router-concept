import { Link } from "react-router-dom";

const Post = ({ post }) => {
    const { id, title } = post;
    return (
        <div className="border p-4 flex flex-col rounded-xl border-y-amber-400 bg-blue-300 ">
            <h2 className="text-2xl font-extrabold">Post ID: {id}</h2>
            <h3 className="font-bold  flex-grow my-2">{title}</h3>
            <Link to={`/posts/${id}`}><button className="bg-red-600 p-2 rounded-2xl ">Details</button></Link>
        </div>
    );
};

export default Post;