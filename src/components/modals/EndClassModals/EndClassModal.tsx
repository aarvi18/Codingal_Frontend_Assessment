import React, { useState } from "react";
import EndClassOptions from "./EndClassOptions";
import { useTimer } from "../../nav_bar/Navbar";

interface EndClassModalProps {
    onClose: () => void;
}

const EndClassModal: React.FC<EndClassModalProps> = ({ onClose }) => {
    const [selectedOption, setSelectedOption] = useState<string>("");
    const { stopTimer } = useTimer();

    const handleEndClass = () => {
        stopTimer(); // Stops the timer
        onClose(); // Closes the modal
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-lg font-semibold mb-4">Select a reason to end class</h2>
                <EndClassOptions selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
                <div className="flex justify-start space-x-2 mt-6">
                    <button
                        className="px-4 py-2 bg-[#ff5a43] text-white rounded-sm hover:bg-red-600"
                        onClick={handleEndClass}
                        disabled={!selectedOption}
                    >
                        End Class
                    </button>
                    <button
                        className="px-4 py-2 bg-gray-200 rounded-sm hover:bg-gray-300"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EndClassModal;