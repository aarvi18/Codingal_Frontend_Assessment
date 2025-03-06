import React from "react";
import { useNavigate } from "react-router-dom";

const PostButton: React.FC = () => {
    const navigate = useNavigate();

    return (
        <button
            className="bg-[#ff5a43] text-white px-4 py-2 rounded-sm text-sm hover:bg-[#e04e3a] transition"
            onClick={() => navigate("/posts")}
        >
            Post
        </button>
    );
};

export default PostButton;
