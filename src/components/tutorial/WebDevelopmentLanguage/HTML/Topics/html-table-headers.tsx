import React from "react";

const HtmlTableHeaders: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">HTML - Table Headers</h1>

      {/* Intro */}
      <p className="leading-relaxed">
        HTML tables can have headers for each column, row, or for multiple columns/rows.
      </p>

      {/* Example Table Headers */}
      <h2 className="text-2xl font-semibold">Table Headers</h2>
      <p className="leading-relaxed">
        Table headers are defined with <code>&lt;th&gt;</code> elements. Each <code>&lt;th&gt;</code> represents a table cell.
      </p>
      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<table>
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

      {/* Vertical Table Headers */}
      <h2 className="text-2xl font-semibold">Vertical Table Headers</h2>
      <p className="leading-relaxed">
        To use the first column as table headers, define the first cell in each row as a <code>&lt;th&gt;</code> element.
      </p>
      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<table>
  <tr>
    <th>Firstname</th>
    <td>Jill</td>
    <td>Eve</td>
  </tr>
  <tr>
    <th>Lastname</th>
    <td>Smith</td>
    <td>Jackson</td>
  </tr>
  <tr>
    <th>Age</th>
    <td>50</td>
    <td>94</td>
  </tr>
</table>`}
      </pre>

      {/* Align Table Headers */}
      <h2 className="text-2xl font-semibold">Align Table Headers</h2>
      <p className="leading-relaxed">
        By default, table headers are bold and centered. To left-align the headers, use the CSS <code>text-align</code> property:
      </p>
      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`th {
  text-align: left;
}`}
      </pre>

      {/* Header for Multiple Columns */}
      <h2 className="text-2xl font-semibold">Header for Multiple Columns</h2>
      <p className="leading-relaxed">
        You can have a header that spans two or more columns. Use the <code>colspan</code> attribute on the <code>&lt;th&gt;</code> element.
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
        You will learn more about <code>colspan</code> and <code>rowspan</code> in the Table Colspan & Rowspan chapter.
      </p>

      {/* Table Caption */}
      <h2 className="text-2xl font-semibold">Table Caption</h2>
      <p className="leading-relaxed">
        You can add a caption that serves as a heading for the entire table using the <code>&lt;caption&gt;</code> tag.
      </p>
      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<table style="width:100%">
  <caption>Monthly savings</caption>
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$100</td>
  </tr>
  <tr>
    <td>February</td>
    <td>$50</td>
  </tr>
</table>`}
      </pre>
    </div>
  );
};

export default HtmlTableHeaders;
