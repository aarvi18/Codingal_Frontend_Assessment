import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-4">
      <div className="w-6 h-6 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
