import React, { useState, useEffect } from "react";
import Button3 from "../../subComponents/Button3";

// Utility function to shuffle an array
const shuffleArray = (array) => {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
};

const MatchTask = ({ body, setIndex }) => {
  const [rightOptions, setRightOptions] = useState([]);
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [result, setResult] = useState(null);
  const [validationState, setValidationState] = useState([]); // Track validation status for each item

  // Shuffle the right-side options when the component loads
  useEffect(() => {
    setRightOptions(shuffleArray(body[1]));
  }, [body]);

  const handleDragStart = (index) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (index) => {
    if (draggedIndex === null || draggedIndex === index) return;

    setRightOptions((prev) => {
      const updatedOptions = [...prev];
      // Swap positions of dragged item and target item
      const temp = updatedOptions[draggedIndex];
      updatedOptions[draggedIndex] = updatedOptions[index];
      updatedOptions[index] = temp;

      return updatedOptions;
    });

    setDraggedIndex(null);
  };

  const resetTask = () => {
    setRightOptions(shuffleArray(body[1]));
    setResult(null);
    setValidationState([]); // Reset validation state
  };

  const checkAnswers = () => {
    const validation = body[0].map((leftItem, index) => {
      return body[1][index] === rightOptions[index]; // Check if the match is correct
    });

    setValidationState(validation); // Update validation state
    const isCorrect = validation.every((isValid) => isValid);

    setResult(isCorrect ? "Correct!" : "Some answers are incorrect.");
  };

  return (
    <div className="p-6 bg-gray-100 max-w-2xl mx-auto rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Match the Following
      </h1>

      <div className="flex justify-between gap-6">
        {/* Left Side */}
        <div className="flex-1">
          <h2 className="text-lg font-semibold mb-4">Left Side</h2>
          {body[0].map((item, index) => (
            <div
              key={index}
              className="p-4 mb-4 bg-gray-200 border rounded-lg shadow-sm text-center"
            >
              <span className="text-gray-800 font-medium">{item}</span>
            </div>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex-1">
          <h2 className="text-lg font-semibold mb-4">Right Side</h2>
          <div className="flex flex-col">
            {rightOptions.map((item, index) => (
              <div
                key={index}
                className={`p-4 mb-4 border rounded-lg shadow-sm text-center cursor-grab ${
                  validationState.length > 0
                    ? validationState[index]
                      ? "bg-green-100 border-green-500"
                      : "bg-red-100 border-red-500"
                    : "bg-white"
                }`}
                draggable
                onDragStart={() => handleDragStart(index)}
                onDragOver={handleDragOver}
                onDrop={() => handleDrop(index)}
              >
                <span
                  className={`text-gray-800 font-medium ${
                    validationState.length > 0
                      ? validationState[index]
                        ? "text-green-500"
                        : "text-red-500"
                      : ""
                  }`}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Buttons Container */}
      <div className="mt-6 flex justify-center gap-4">
        <button
          className="px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600"
          onClick={resetTask}
        >
          Reset
        </button>
        <button
          className="px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600"
          onClick={checkAnswers}
        >
          Submit
        </button>
        <Button3 text={"next"} fn={setIndex} />
      </div>

      {/* Result */}
      {result && (
        <div className="mt-6 text-center text-lg font-bold">
          <span
            className={
              result === "Correct!" ? "text-green-500" : "text-red-500"
            }
          >
            {result}
          </span>
        </div>
      )}
    </div>
  );
};

export default MatchTask;
