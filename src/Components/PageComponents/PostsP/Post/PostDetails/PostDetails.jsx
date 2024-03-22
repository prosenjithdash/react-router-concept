import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const postD = useLoaderData();
    console.log(postD)
    const { id, title, body } = postD;
    return (
        <div className="bg-yellow-600 p-4 rounded-2xl">
            <h2 className="text-2xl text-white">Post Details : {id}</h2>
            <h2 className="text-xl font-bold">Title: {title}</h2>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;