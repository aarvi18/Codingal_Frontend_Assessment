import { useState } from "react";
import EndClassModal from "../modals/EndClassModals/EndClassModal";

const EndClassButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        className="bg-[#ff5a43] text-white px-4 py-2 rounded-sm text-sm hover:bg-[#ff5a43] hidden md:block"
        onClick={() => setIsModalOpen(true)}
      >
        End class
      </button>
      {isModalOpen && <EndClassModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default EndClassButton;