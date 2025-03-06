const PostButton: React.FC = () => {
    return (
        <>
            <button
                className="bg-[#ff5a43] text-white px-4 py-2 rounded-sm text-sm hover:bg-[#ff5a43] md:block"
                onClick={() => alert('Test')}
            >
                Post
            </button>
        </>
    );
};

export default PostButton;