import React, { useState } from "react";

const MultiViewComponent: React.FC = () => {
  const [activeViewIndex, setActiveViewIndex] = useState<number>(0);

  const goToNext = () => {
    setActiveViewIndex((prev) => (prev + 1) % views.length);
  };

  const goToPrevious = () => {
    setActiveViewIndex((prev) => (prev - 1 + views.length) % views.length);
  };

  const switchViewByIndex = (index: number) => {
    if (index >= 0 && index < views.length) setActiveViewIndex(index);
  };

  const switchViewByID = (id: string) => {
    const index = views.findIndex((v) => v.id === id);
    if (index !== -1) setActiveViewIndex(index);
  };

  const views = [
    {
      id: "View1",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">This is view 1</h3>
          <button
            onClick={goToNext}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Go To Next
          </button>
          <button
            onClick={() => switchViewByID("View3")}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Go To Last
          </button>
        </div>
      ),
    },
    {
      id: "View2",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">This is view 2</h3>
          <button
            onClick={goToNext}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Go To Next
          </button>
          <button
            onClick={goToPrevious}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Go To Previous View
          </button>
        </div>
      ),
    },
    {
      id: "View3",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">This is view 3</h3>
          <div>
            <label className="font-medium">Calendar placeholder:</label>
            <div className="mt-2 p-4 border rounded bg-gray-50">
              {/* Replace with actual calendar component if needed */}
              <p className="text-gray-600">[Calendar will appear here]</p>
            </div>
          </div>
          <button
            onClick={() => switchViewByIndex(0)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Go To First
          </button>
          <button
            onClick={goToPrevious}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Go To Previous View
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="mt-20 space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        ASP.NET MultiView
      </h1>

      {/* Description */}
      <p className="leading-relaxed">
        MultiView and View controls allow you to divide page content into multiple
        views, showing only one view at a time. Navigation between views can
        happen via buttons or programmatically.
      </p>

      {/* Dropdown for switching views */}
      <div className="mb-4">
        <label className="mr-2 font-medium">Select View:</label>
        <select
          className="border rounded p-1"
          value={activeViewIndex}
          onChange={(e) => switchViewByIndex(Number(e.target.value))}
        >
          {views.map((v, index) => (
            <option key={v.id} value={index}>
              {v.id}
            </option>
          ))}
        </select>
      </div>

      {/* Active View */}
      <div className="border p-6 rounded shadow-lg bg-white">{views[activeViewIndex].content}</div>
    </div>
  );
};

export default MultiViewComponent;
