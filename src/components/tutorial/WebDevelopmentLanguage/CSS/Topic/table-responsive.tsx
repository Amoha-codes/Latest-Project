import React from "react";

const CssResponsiveTables: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Responsive Tables
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        A responsive table will display a horizontal scrollbar if the screen is
        too small to display all its content. This prevents data from breaking
        out of layout or shrinking too much.
      </p>

      <p className="leading-relaxed">
        Resize the browser window to see how responsive tables behave.
      </p>

      {/* Example explanation */}
      <h2 className="text-2xl font-bold">Example Table</h2>
      <p className="leading-relaxed">
        Below is an example structure of a wide table that requires horizontal
        scrolling on smaller screens:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black whitespace-pre-wrap">
{`First Name   Last Name   Points   Points   Points   Points ...
Jill         Smith        50       50       50       50   ...
Eve          Jackson      94       94       94       94   ...
Adam         Johnson      67       67       67       67   ...`}
      </pre>

      {/* How to do it */}
      <h2 className="text-2xl font-bold">How to Make a Responsive Table</h2>
      <p className="leading-relaxed">
        Wrap the <code>&lt;table&gt;</code> element inside a 
        <code>&lt;div&gt;</code> container. Then apply 
        <code>overflow-x: auto</code> to allow horizontal scrolling when needed.
      </p>

      {/* Code */}
      <h2 className="text-2xl font-bold">Example CSS</h2>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`div.tablecontainer {
  overflow-x: auto;
}`}
      </pre>

      {/* Optional HTML structure */}
      <h2 className="text-2xl font-bold">HTML Structure Example</h2>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`<div class="tablecontainer">
  <table>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Points</th>
      ...
    </tr>
    <tr>
      <td>Jill</td>
      <td>Smith</td>
      <td>50</td>
      ...
    </tr>
  </table>
</div>`}
      </pre>

    </div>
  );
};

export default CssResponsiveTables;
