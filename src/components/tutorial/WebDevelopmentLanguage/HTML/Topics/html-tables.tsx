import React from "react";

const HtmlTables: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">HTML - Tables</h1>

      {/* Intro */}
      <p className="leading-relaxed">
        HTML tables allow web developers to arrange data into rows and columns.
      </p>

      {/* Example Table */}
      <h2 className="text-2xl font-semibold">Example</h2>
      <p className="leading-relaxed">A simple table of companies:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`Company\tContact\tCountry
Alfreds Futterkiste\tMaria Anders\tGermany
Centro comercial Moctezuma\tFrancisco Chang\tMexico
Ernst Handel\tRoland Mendel\tAustria
Island Trading\tHelen Bennett\tUK
Laughing Bacchus Winecellars\tYoshi Tannamuri\tCanada
Magazzini Alimentari Riuniti\tGiovanni Rovelli\tItaly`}
      </pre>

      {/* Define an HTML Table */}
      <h2 className="text-2xl font-semibold">Define an HTML Table</h2>
      <p className="leading-relaxed">
        A table in HTML consists of table cells inside rows and columns.
      </p>

      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>`}
      </pre>

      {/* Table Cells */}
      <h2 className="text-2xl font-semibold">Table Cells</h2>
      <p className="leading-relaxed">
        Each table cell is defined by a <code>&lt;td&gt;</code> tag. <code>td</code> stands for table data.
        Everything between <code>&lt;td&gt;</code> and <code>&lt;/td&gt;</code> is the content of a table cell.
      </p>
      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<table>
  <tr>
    <td>Emil</td>
    <td>Tobias</td>
    <td>Linus</td>
  </tr>
</table>`}
      </pre>
      <p className="leading-relaxed">
        Note: A table cell can contain all sorts of HTML elements: text, images, lists, links, other tables, etc.
      </p>

      {/* Table Rows */}
      <h2 className="text-2xl font-semibold">Table Rows</h2>
      <p className="leading-relaxed">
        Each table row starts with a <code>&lt;tr&gt;</code> and ends with a <code>&lt;/tr&gt;</code> tag. 
        <code>tr</code> stands for table row.
      </p>
      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<table>
  <tr>
    <td>Emil</td>
    <td>Tobias</td>
    <td>Linus</td>
  </tr>
  <tr>
    <td>16</td>
    <td>14</td>
    <td>10</td>
  </tr>
</table>`}
      </pre>
      <p className="leading-relaxed">
        You can have as many rows as you like; just make sure the number of cells is the same in each row.
        Sometimes rows can have different numbers of cells — this will be covered in a later chapter.
      </p>

      {/* Table Headers */}
      <h2 className="text-2xl font-semibold">Table Headers</h2>
      <p className="leading-relaxed">
        Sometimes you want your cells to be table header cells. Use the <code>&lt;th&gt;</code> tag instead of <code>&lt;td&gt;</code>. 
        <code>th</code> stands for table header.
      </p>
      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<table>
  <tr>
    <th>Person 1</th>
    <th>Person 2</th>
    <th>Person 3</th>
  </tr>
  <tr>
    <td>Emil</td>
    <td>Tobias</td>
    <td>Linus</td>
  </tr>
  <tr>
    <td>16</td>
    <td>14</td>
    <td>10</td>
  </tr>
</table>`}
      </pre>
    </div>
  );
};

export default HtmlTables;
