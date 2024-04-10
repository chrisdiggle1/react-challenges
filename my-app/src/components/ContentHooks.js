import React, { useState, useEffect } from "react";
import css from "./css/Content.module.css";
import { savedPosts } from "../posts.json";
import PostItem from "./PostItem";
import Loader from "./Loader";

function Content() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
            setPosts(savedPosts);
        }, 2000);
    }, []); // Empty array means this effect runs once on mount

    const handleChange = (e) => {
        const name = e.target.value.toLowerCase();
        const filteredPosts = savedPosts.filter((post) => 
            post.name.toLowerCase().includes(name)
        );
        setPosts(filteredPosts);
    };

    return (
        <div className={css.Content}>
            <div className={css.TitleBar}>
                <h1>My Photos</h1>
                <form>
                    <label htmlFor='searchinput'>Search</label>
                    <input 
                        type='search' 
                        id='searchinput' 
                        placeholder='By Author'
                        onChange={handleChange}
                    />
                    <h4>posts found {posts.length}</h4>
                </form>
            </div>
            <div className={css.SearchResults}>
                {isLoaded ? <PostItem savedPosts={posts} /> : <Loader />}
            </div>
        </div>
    );
}

export default Content;