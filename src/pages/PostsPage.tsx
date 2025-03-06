import React, { useRef } from "react";
import PostItem from "../components/base_components/PostItem";
import Loader from "../components/base_components/Loader";
import ErrorMessage from "../components/base_components/ErrorMessage";
import usePosts from "../components/base_components//usePosts";

const PostsPage: React.FC = () => {
    const { posts, isLoading, isError, loadMorePosts, hasMore } = usePosts();
    const observer = useRef<IntersectionObserver | null>(null);

    const lastPostRef = (node: HTMLDivElement | null) => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasMore) {
                loadMorePosts();
            }
        });
        if (node) observer.current.observe(node);
    };

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4">Posts</h2>
            {isError && <ErrorMessage message="Failed to load posts." />}
            {posts.map((post, index) => (
                <div ref={index === posts.length - 1 ? lastPostRef : null} key={post.id}>
                    <PostItem post={post} />
                </div>
            ))}
            {isLoading && <Loader />}
        </div>
    );
};

export default PostsPage;
