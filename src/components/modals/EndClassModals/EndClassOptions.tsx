import React, { useState } from "react";
import { Check } from "lucide-react";
import EndClassSubOptions from "../EndClassModals/EndClassSubOptions";
import { motion, AnimatePresence } from "framer-motion";

interface EndClassOptionsProps {
    selectedOption: string;
    setSelectedOption: (option: string) => void;
}

const EndClassOptions: React.FC<EndClassOptionsProps> = ({ selectedOption, setSelectedOption }) => {
    const [subOption, setSubOption] = useState<string>(""); // Track sub-option separately

    return (
        <div className="flex flex-col space-y-3">
            {["Class Completed", "Class Interrupted/Aborted"].map((option) => (
                <label key={option} className="flex items-center space-x-3 cursor-pointer">
                    <div className="relative w-5 h-5">
                        <input
                            type="radio"
                            name="endClassReason"
                            value={option}
                            checked={selectedOption === option}
                            onChange={() => setSelectedOption(option)}
                            className="opacity-0 absolute w-full h-full cursor-pointer"
                        />
                        <div className={`w-5 h-5 border-2 rounded-full flex items-center justify-center transition-all duration-200 
                            ${selectedOption === option ? "border-[#ff5a43] bg-[#ff5a43]" : "border-gray-400 bg-white"}`}>
                            {selectedOption === option && (
                                <Check className="w-4 h-4 text-white" strokeWidth={3} />
                            )}
                        </div>
                    </div>
                    <span>
                        {option}
                    </span>
                </label>
            ))}
            {/* Animate Presence to smoothly show/hide sub-options */}
            <AnimatePresence>
                {selectedOption === "Class Interrupted/Aborted" && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <EndClassSubOptions subOption={subOption} setSubOption={setSubOption} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default EndClassOptions;
