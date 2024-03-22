// 45-6 (Recap) Dynamic Route, Params And Load Dynamic Data

import { useLoaderData } from "react-router-dom";
import Post from "./Post/Post";

const PostsP = () => {
    const postsData = useLoaderData();
    
    return (
        <div>
            <h2>Total Posts : {postsData.length}</h2>
            <div className="lg:grid lg:grid-cols-4 gap-5">
                {
                    postsData.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default PostsP;