import React from "react";

const CssTableStyling: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Table Styling
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        CSS provides multiple techniques to make HTML tables more readable and
        visually appealing—like padding, dividers, hover effects, zebra stripes,
        and custom header styling.
      </p>

      {/* Section — Padding */}
      <h2 className="text-2xl font-bold">CSS Table Padding</h2>
      <p className="leading-relaxed">
        Use the <code>padding</code> property to add space between table cell
        borders and the content inside <code>&lt;td&gt;</code> and 
        <code>&lt;th&gt;</code>.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`th, td {
  padding: 10px;
  text-align: left;
}`}
      </pre>

      {/* Section — Horizontal Dividers */}
      <h2 className="text-2xl font-bold">CSS Horizontal Dividers</h2>
      <p className="leading-relaxed">
        Add <code>border-bottom</code> to table cells to create horizontal
        dividers between rows.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`th, td {
  border-bottom: 1px solid #ddd;
}`}
      </pre>

      {/* Section — Hoverable Table */}
      <h2 className="text-2xl font-bold">CSS Hoverable Table</h2>
      <p className="leading-relaxed">
        Use the <code>:hover</code> selector on table rows to highlight a row
        when the user hovers over it.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`tr:hover {
  background-color: coral;
}`}
      </pre>

      {/* Section — Zebra Striping */}
      <h2 className="text-2xl font-bold">CSS Zebra-striped Table</h2>
      <p className="leading-relaxed">
        Use <code>:nth-child()</code> to add alternating row background colors,
        making tables easier to read.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`tr:nth-child(even) {
  background-color: #f2f2f2;
}`}
      </pre>

      {/* Section — Table Header Colors */}
      <h2 className="text-2xl font-bold">CSS Table Header Styling</h2>
      <p className="leading-relaxed">
        You can style table headers with custom background and text color.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`th {
  background-color: #04AA6D;
  color: white;
}`}
      </pre>

      {/* Conclusion */}
      <h2 className="text-2xl font-bold">Conclusion</h2>
      <p className="leading-relaxed">
        These styling techniques help make tables visually appealing,
        professional, and easier to read. Padding improves spacing, hover
        effects enhance interaction, and zebra striping greatly improves
        readability across long tables.
      </p>

    </div>
  );
};

export default CssTableStyling;
