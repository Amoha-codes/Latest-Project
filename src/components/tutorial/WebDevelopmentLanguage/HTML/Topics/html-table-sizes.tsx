import React from "react";

const HtmlTableSizes: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">HTML - Table Sizes</h1>

      {/* Intro */}
      <p className="leading-relaxed">
        HTML tables can have different sizes for each column, row, or the entire table. Use the <code>style</code> attribute with the <code>width</code> or <code>height</code> properties to specify the size of a table, row, or column.
      </p>

      {/* Table Width */}
      <h2 className="text-2xl font-semibold">HTML Table Width</h2>
      <p className="leading-relaxed">
        To set the width of a table, add the <code>style</code> attribute to the <code>&lt;table&gt;</code> element.
      </p>
      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<table style="width:100%">
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
</table>`}
      </pre>
      <p className="leading-relaxed">
        Note: Using a percentage as the size unit for a width means how wide the element will be compared to its parent element (in this case, the <code>&lt;body&gt;</code> element).
      </p>

      {/* Table Column Width */}
      <h2 className="text-2xl font-semibold">HTML Table Column Width</h2>
      <p className="leading-relaxed">
        To set the width of a specific column, add the <code>style</code> attribute on a <code>&lt;th&gt;</code> or <code>&lt;td&gt;</code> element.
      </p>
      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<table style="width:100%">
  <tr>
    <th style="width:70%">Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
</table>`}
      </pre>

      {/* Table Row Height */}
      <h2 className="text-2xl font-semibold">HTML Table Row Height</h2>
      <p className="leading-relaxed">
        To set the height of a specific row, add the <code>style</code> attribute on a table row element.
      </p>
      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<table style="width:100%">
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr style="height:200px">
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
</table>`}
      </pre>
    </div>
  );
};

export default HtmlTableSizes;
