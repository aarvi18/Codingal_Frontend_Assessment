import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/nav_bar/Navbar";
import PostsPage from "./pages/PostsPage";

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/posts" element={<PostsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
