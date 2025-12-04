import React from "react";

const HtmlTableBorders: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">HTML - Table Borders</h1>

      {/* Intro */}
      <p className="leading-relaxed">
        HTML tables can have borders of different styles and shapes.
      </p>

      {/* How To Add a Border */}
      <h2 className="text-2xl font-semibold">How To Add a Border</h2>
      <p className="leading-relaxed">
        To add a border, use the CSS <code>border</code> property on <code>table</code>, <code>th</code>, and <code>td</code> elements:
      </p>
      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`table, th, td {
  border: 1px solid black;
}`}
      </pre>

      {/* Collapsed Table Borders */}
      <h2 className="text-2xl font-semibold">Collapsed Table Borders</h2>
      <p className="leading-relaxed">
        To avoid having double borders, set the CSS <code>border-collapse</code> property to <code>collapse</code>.
      </p>
      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}`}
      </pre>

      {/* Style Table Borders */}
      <h2 className="text-2xl font-semibold">Style Table Borders</h2>
      <p className="leading-relaxed">
        You can style table borders to create different visual effects. For example, setting a background color for each cell and using a white border can create the illusion of an invisible border:
      </p>
      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`table, th, td {
  border: 1px solid white;
  border-collapse: collapse;
}
th, td {
  background-color: #96D4D4;
}`}
      </pre>

      {/* Round Table Borders */}
      <h2 className="text-2xl font-semibold">Round Table Borders</h2>
      <p className="leading-relaxed">
        Using <code>border-radius</code> gives your table borders rounded corners.
      </p>
      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`table, th, td {
  border: 1px solid black;
  border-radius: 10px;
}`}</pre>
      <p className="leading-relaxed">
        You can skip the border around the table by leaving out <code>table</code> from the CSS selector:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`th, td {
  border: 1px solid black;
  border-radius: 10px;
}`}</pre>

      {/* Dotted Table Borders */}
      <h2 className="text-2xl font-semibold">Dotted Table Borders</h2>
      <p className="leading-relaxed">
        The <code>border-style</code> property lets you set the appearance of the border. Allowed values:
      </p>
      <ul className="list-disc ml-6 leading-relaxed">
        <li>dotted</li>
        <li>dashed</li>
        <li>solid</li>
        <li>double</li>
        <li>groove</li>
        <li>ridge</li>
        <li>inset</li>
        <li>outset</li>
        <li>none</li>
        <li>hidden</li>
      </ul>
      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`th, td {
  border-style: dotted;
}`}
      </pre>

      {/* Border Color */}
      <h2 className="text-2xl font-semibold">Border Color</h2>
      <p className="leading-relaxed">
        With the <code>border-color</code> property, you can set the color of the border.
      </p>
      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`th, td {
  border-color: #96D4D4;
}`}
      </pre>
    </div>
  );
};

export default HtmlTableBorders;
