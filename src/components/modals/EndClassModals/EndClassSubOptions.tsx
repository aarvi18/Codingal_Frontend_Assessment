import React, { useState } from "react";
import { Check } from "lucide-react"; // Import check icon from Lucide React

interface EndClassSubOptionsProps {
    subOption: string;
    setSubOption: (option: string) => void;
}

const EndClassSubOptions: React.FC<EndClassSubOptionsProps> = ({ subOption, setSubOption }) => {
    const [otherReason, setOtherReason] = useState<string>("");

    return (
        <div className="pl-6 space-y-2">
            {["Student didn't show up for the class.", "Student didn't show any interest.", "Student got disconnected.", "I got disconnected.", "Other"].map((option) => (

                <label key={option} className="flex items-center space-x-2 cursor-pointer">
                    <div className="relative w-5 h-5">
                        <input
                            type="radio"
                            name="interruptionReason"
                            value={option}
                            checked={subOption === option}
                            onChange={() => {
                                setSubOption(option);
                                if (option !== "Other") setOtherReason("");
                            }}
                            className="opacity-0 absolute w-full h-full cursor-pointer"
                        />
                        <div className={`w-5 h-5 border-2 rounded-full flex items-center justify-center transition-all duration-200 
                            ${subOption === option ? "border-[#ff5a43] bg-[#ff5a43]" : "border-gray-400 bg-white"}`}>
                            {subOption === option && (
                                <Check className="w-4 h-4 text-white" strokeWidth={3} />
                            )}
                        </div>
                    </div>
                    <span>
                        {option}
                    </span>
                </label>


            ))}
            {subOption === "Other" && (
                <textarea
                placeholder="Type here"
                value={otherReason}
                onChange={(e) => setOtherReason(e.target.value)}
                className="border p-1 w-full rounded border-gray-200 focus:outline-none focus:ring-0"
            />
            
            )}
        </div>
    );
};

export default EndClassSubOptions;
