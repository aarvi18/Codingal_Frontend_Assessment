import React from "react";

interface EndClassOptionsProps {
  selectedOption: string;
  setSelectedOption: (option: string) => void;
}

const EndClassOptions: React.FC<EndClassOptionsProps> = ({ selectedOption, setSelectedOption }) => {
  return (
    <div className="flex flex-col space-y-2">
      <label className="flex items-center space-x-2 cursor-pointer">
        <input
          type="radio"
          name="endClassReason"
          value="Class Completed"
          checked={selectedOption === "Class Completed"}
          onChange={() => setSelectedOption("Class Completed")}
        />
        <span>Class Completed</span>
      </label>
      <label className="flex items-center space-x-2 cursor-pointer">
        <input
          type="radio"
          name="endClassReason"
          value="Class Interrupted/Aborted"
          checked={selectedOption === "Class Interrupted/Aborted"}
          onChange={() => setSelectedOption("Class Interrupted/Aborted")}
        />
        <span>Class Interrupted/Aborted</span>
      </label>
    </div>
  );
};

export default EndClassOptions;