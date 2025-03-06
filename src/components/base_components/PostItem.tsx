import React from "react";

interface PostProps {
  post: { id: number; title: string; body: string };
}

const PostItem: React.FC<PostProps> = ({ post }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
      <h3 className="text-lg font-semibold">{post.title}</h3>
      <p className="text-gray-700">{post.body}</p>
    </div>
  );
};

export default PostItem;
