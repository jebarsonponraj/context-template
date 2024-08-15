import { createContext, useContext, useState } from "react";

const PostContext = createContext();
function Context({children}) {
    const [posts, setPosts] = useState([]);

    function handleAddPosts(post) {
        setPosts((posts) => [post, ...posts]);
    }

    return (
        <PostContext.Provider value={{ posts, onAddPost: handleAddPosts }}>
            {children}
        </PostContext.Provider>
    );
}

function usePosts() {
    const context = useContext(PostContext);
    return context;
}

export { Context, usePosts };
