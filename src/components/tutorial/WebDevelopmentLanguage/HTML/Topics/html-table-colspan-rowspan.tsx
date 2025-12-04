import React from "react";

const HtmlTableColspanRowspan: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">HTML - Table Colspan & Rowspan</h1>

      {/* Intro */}
      <p className="leading-relaxed">
        HTML tables can have cells that span over multiple rows and/or columns.
      </p>

      {/* Colspan */}
      <h2 className="text-2xl font-semibold">HTML Table - Colspan</h2>
      <p className="leading-relaxed">
        To make a cell span over multiple columns, use the <code>colspan</code> attribute.
      </p>
      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<table>
  <tr>
    <th colspan="2">Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>43</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>57</td>
  </tr>
</table>`}
      </pre>
      <p className="leading-relaxed">
        Note: The value of the <code>colspan</code> attribute represents the number of columns to span.
      </p>

      {/* Rowspan */}
      <h2 className="text-2xl font-semibold">HTML Table - Rowspan</h2>
      <p className="leading-relaxed">
        To make a cell span over multiple rows, use the <code>rowspan</code> attribute.
      </p>
      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<table>
  <tr>
    <th>Name</th>
    <td>Jill</td>
  </tr>
  <tr>
    <th rowspan="2">Phone</th>
    <td>555-1234</td>
  </tr>
  <tr>
    <td>555-8745</td>
  </tr>
</table>`}
      </pre>
    </div>
  );
};

export default HtmlTableColspanRowspan;
