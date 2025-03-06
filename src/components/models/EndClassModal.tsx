import React from "react";

interface EndClassModalProps {
    onClose: () => void;
}

const EndClassModal: React.FC<EndClassModalProps> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                <h2 className="text-lg font-semibold mb-4">Select a reason to end class</h2>
                <div className="flex justify-start space-x-4">
                    <button
                        className="px-10 py-2 bg-[#ff5a43] text-white rounded-sm hover:bg-red-600"
                        onClick={onClose} // You can add an actual end-class function here
                    >
                        End Class
                    </button>
                    <button
                        className="px-4 py-2 bg-gray-300 rounded-sm hover:bg-gray-400"
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