import React from "react";

const HtmlTablePaddingSpacing: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">HTML - Table Padding & Spacing</h1>

      {/* Intro */}
      <p className="leading-relaxed">
        HTML tables can adjust the padding inside the cells, and also the space between the cells.
      </p>

      {/* With Padding */}
      <h2 className="text-2xl font-semibold">With Padding</h2>
      <p className="leading-relaxed">Padding is the space between the cell edges and the cell content:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`hello\thello\thello
hello\thello\thello
hello\thello\thello`}
      </pre>

      {/* With Spacing */}
      <h2 className="text-2xl font-semibold">With Spacing</h2>
      <p className="leading-relaxed">Spacing is the space between cells:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`hello\thello\thello
hello\thello\thello
hello\thello\thello`}
      </pre>

      {/* Cell Padding */}
      <h2 className="text-2xl font-semibold">HTML Table - Cell Padding</h2>
      <p className="leading-relaxed">
        Cell padding is the space between the cell edges and the cell content. By default, the padding is set to 0. To add padding, use the CSS <code>padding</code> property:
      </p>
      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`th, td {
  padding: 15px;
}`}
      </pre>

      <p className="leading-relaxed">
        To add padding only on one side, use <code>padding-top</code>, <code>padding-bottom</code>, <code>padding-left</code>, or <code>padding-right</code>:
      </p>
      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`th, td {
  padding-top: 10px;
  padding-bottom: 20px;
  padding-left: 30px;
  padding-right: 40px;
}`}
      </pre>

      {/* Cell Spacing */}
      <h2 className="text-2xl font-semibold">HTML Table - Cell Spacing</h2>
      <p className="leading-relaxed">
        Cell spacing is the space between each table cell. By default, it is set to 2 pixels. To change the space, use the CSS <code>border-spacing</code> property on the <code>table</code> element:
      </p>
      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`table {
  border-spacing: 30px;
}`}
      </pre>
    </div>
  );
};

export default HtmlTablePaddingSpacing;
