import React from "react";

const HtmlTableStyling: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">HTML - Table Styling</h1>

      {/* Intro */}
      <p className="leading-relaxed">
        Use CSS to make your tables look better.
      </p>

      {/* Zebra Stripes */}
      <h2 className="text-2xl font-semibold">HTML Table - Zebra Stripes</h2>
      <p className="leading-relaxed">
        If you add a background color on every other table row, you will get a nice zebra stripes effect.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`1\t2\t3\t4
5\t6\t7\t8
9\t10\t11\t12
13\t14\t15\t16
17\t18\t19\t20`}
      </pre>
      <p className="leading-relaxed">
        To style every other table row element, use the <code>:nth-child(even)</code> selector:
      </p>
      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`tr:nth-child(even) {
  background-color: #D6EEEE;
}`}
      </pre>
      <p className="leading-relaxed">
        Note: Using <code>odd</code> instead of <code>even</code> will style rows 1, 3, 5, etc.
      </p>

      {/* Vertical Zebra Stripes */}
      <h2 className="text-2xl font-semibold">HTML Table - Vertical Zebra Stripes</h2>
      <p className="leading-relaxed">
        To make vertical zebra stripes, style every other column instead of every other row. Use <code>:nth-child(even)</code> on both <code>td</code> and <code>th</code>:
      </p>
      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`td:nth-child(even), th:nth-child(even) {
  background-color: #D6EEEE;
}`}
      </pre>

      {/* Combine Vertical and Horizontal Stripes */}
      <h2 className="text-2xl font-semibold">Combine Vertical and Horizontal Zebra Stripes</h2>
      <p className="leading-relaxed">
        You can combine the two styles and use a transparent color for overlapping effects with <code>rgba()</code>:
      </p>
      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`tr:nth-child(even) {
  background-color: rgba(150, 212, 212, 0.4);
}

th:nth-child(even), td:nth-child(even) {
  background-color: rgba(150, 212, 212, 0.4);
}`}
      </pre>

      {/* Horizontal Dividers */}
      <h2 className="text-2xl font-semibold">Horizontal Dividers</h2>
      <p className="leading-relaxed">
        If you specify borders only at the bottom of each table row, you will have a table with horizontal dividers. Use the <code>border-bottom</code> property:
      </p>
      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`tr {
  border-bottom: 1px solid #ddd;
}`}
      </pre>

      {/* Hoverable Table */}
      <h2 className="text-2xl font-semibold">Hoverable Table</h2>
      <p className="leading-relaxed">
        Use the <code>:hover</code> selector on <code>tr</code> to highlight table rows when the mouse hovers over them:
      </p>
      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`tr:hover {
  background-color: #D6EEEE;
}`}
      </pre>
    </div>
  );
};

export default HtmlTableStyling;
