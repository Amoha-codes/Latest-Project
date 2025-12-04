import React from "react";

const CssTables: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Tables
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        CSS can significantly improve the appearance of HTML tables by adding
        borders, padding, spacing, colors, and more. Below are the most common
        CSS techniques used to style table layouts.
      </p>

      {/* Section — Table Borders */}
      <h2 className="text-2xl font-bold">CSS Table Borders</h2>
      <p className="leading-relaxed">
        The <code>border</code> property is used to style table borders.
        It combines width, style, and color in one shorthand property.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`table, th, td {
  border: 1px solid;
}`}
      </pre>

      {/* Border Color */}
      <h2 className="text-2xl font-bold">CSS Table Border Color</h2>
      <p className="leading-relaxed">
        You can set custom border colors like this:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`table, th, td {
  border: 1px solid green;
}`}
      </pre>

      {/* Collapse Borders */}
      <h2 className="text-2xl font-bold">Collapse Table Borders</h2>
      <p className="leading-relaxed">
        HTML tables show double borders by default.  
        Use <code>border-collapse: collapse;</code> to merge them:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`table {
  border-collapse: collapse;
}`}
      </pre>

      {/* Padding */}
      <h2 className="text-2xl font-bold">CSS Table Cell Padding</h2>
      <p className="leading-relaxed">
        Use <code>padding</code> to control spacing inside table cells:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`th, td {
  padding: 10px;
}`}
      </pre>

      {/* Border Spacing */}
      <h2 className="text-2xl font-bold">CSS Border Spacing</h2>
      <p className="leading-relaxed">
        Adds space between cell borders (works only when borders are not collapsed):
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`table {
  border-collapse: separate;
  border-spacing: 15px;
}`}
      </pre>

      {/* Outside Border Only */}
      <h2 className="text-2xl font-bold">Outside Table Borders Only</h2>
      <p className="leading-relaxed">
        If you want a border only around the table (not around cells):
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`table {
  border: 1px solid;
}`}
      </pre>

      {/* Conclusion */}
      <h2 className="text-2xl font-bold">Conclusion</h2>
      <p className="leading-relaxed">
        CSS offers powerful tools to style tables, including borders, spacing,
        padding, and layout controls. With these techniques, you can turn plain
        HTML tables into clean and readable data layouts.
      </p>

    </div>
  );
};

export default CssTables;
