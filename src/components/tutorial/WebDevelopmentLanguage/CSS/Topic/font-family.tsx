import React from "react";

const CssFonts: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Fonts
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        Choosing the right font has a huge impact on how readers experience a website. 
        A good font creates a strong identity, improves readability, and works well with color and size.
      </p>

      {/* Font-family Property */}
      <h2 className="text-2xl font-bold">The <code>font-family</code> Property</h2>
      <p className="leading-relaxed">
        The <code>font-family</code> property specifies the font for an element. 
        Always provide multiple font names as a fallback, ending with a generic family.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`.p1 {
  font-family: "Times New Roman", Times, serif;
}

.p2 {
  font-family: Arial, Helvetica, sans-serif;
}

.p3 {
  font-family: "Lucida Console", "Courier New", monospace;
}`}
      </pre>

      {/* Generic Font Families */}
      <h2 className="text-2xl font-bold">CSS Generic Font Families</h2>
      <p className="leading-relaxed">
        CSS defines five generic font families:
      </p>
      <ul className="list-disc ml-6 space-y-1">
        <li><b>Serif:</b> Small strokes at the edges of letters. Formal and elegant.</li>
        <li><b>Sans-serif:</b> Clean lines, modern and minimalistic. Easier to read on screens.</li>
        <li><b>Monospace:</b> All letters have the same width. Mechanical look.</li>
        <li><b>Cursive:</b> Imitates handwriting.</li>
        <li><b>Fantasy:</b> Decorative or playful fonts.</li>
      </ul>

      {/* Font Examples */}
      <h2 className="text-2xl font-bold">Some Font Examples</h2>
      <table className="table-auto border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 px-4 py-2">Generic Font Family</th>
            <th className="border border-gray-400 px-4 py-2">Examples of Font Names</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Serif</td>
            <td className="border border-gray-400 px-4 py-2">Times New Roman, Georgia, Garamond</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Sans-serif</td>
            <td className="border border-gray-400 px-4 py-2">Arial, Verdana, Helvetica</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Monospace</td>
            <td className="border border-gray-400 px-4 py-2">Courier New, Lucida Console, Monaco</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Cursive</td>
            <td className="border border-gray-400 px-4 py-2">Brush Script MT, Lucida Handwriting</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Fantasy</td>
            <td className="border border-gray-400 px-4 py-2">Copperplate, Papyrus</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CssFonts;
