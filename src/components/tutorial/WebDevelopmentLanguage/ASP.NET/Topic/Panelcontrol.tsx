import React, { useState } from "react";

const PanelControls: React.FC = () => {
  const [numLabels, setNumLabels] = useState<number>(0);
  const [numTextBoxes, setNumTextBoxes] = useState<number>(0);
  const [panelVisible, setPanelVisible] = useState<boolean>(true);

  const labels = Array.from({ length: numLabels }, (_, i) => `Label ${i + 1}`);
  const textboxes = Array.from({ length: numTextBoxes }, (_, i) => `Text Box ${i + 1}`);

  return (
    <div className="mt-20 space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        ASP.NET Panel Control
      </h1>

      {/* Description */}
      <p className="leading-relaxed">
        The Panel control acts as a container for other controls. It can control the visibility,
        appearance, and also allow dynamic generation of child components.
      </p>

      {/* Panel Visibility */}
      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={panelVisible}
            onChange={(e) => setPanelVisible(e.target.checked)}
            className="mr-2"
          />
          Make the Panel Visible
        </label>
      </div>

      {/* Panel */}
      {panelVisible && (
        <div className="border border-red-800 p-4 h-40 overflow-auto bg-blue-100 font-mono text-center">
          <p className="mb-4">This panel shows dynamic control generation:</p>

          {/* Labels */}
          {labels.map((lbl, idx) => (
            <div key={`label-${idx}`} className="mb-1">
              <span>{lbl}</span>
            </div>
          ))}

          {/* TextBoxes */}
          {textboxes.map((txt, idx) => (
            <div key={`textbox-${idx}`} className="mb-1">
              <input
                type="text"
                defaultValue={txt}
                className="border rounded p-1 w-full max-w-xs"
              />
            </div>
          ))}

          {/* Button inside Panel */}
          <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
            Panel Button
          </button>
        </div>
      )}

      {/* Controls to select number of Labels and TextBoxes */}
      <div className="space-y-4 w-1/2">
        <div>
          <label className="mr-2 font-medium">No of Labels:</label>
          <select
            className="border rounded p-1"
            value={numLabels}
            onChange={(e) => setNumLabels(Number(e.target.value))}
          >
            {[0, 1, 2, 3, 4].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mr-2 font-medium">No of Text Boxes:</label>
          <select
            className="border rounded p-1"
            value={numTextBoxes}
            onChange={(e) => setNumTextBoxes(Number(e.target.value))}
          >
            {[0, 1, 2, 3, 4].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>

        {/* Refresh Panel Button */}
        <button
          onClick={() => {}}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Refresh Panel
        </button>
      </div>
    </div>
  );
};

export default PanelControls;
