import React from "react";

const HtmlTableColgroup: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">HTML - Table Colgroup</h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <code>&lt;colgroup&gt;</code> element is used to style specific columns of a table.
      </p>

      {/* Basic Colgroup */}
      <h2 className="text-2xl font-semibold">HTML Table Colgroup</h2>
      <p className="leading-relaxed">
        To style the first two columns of a table, use <code>&lt;colgroup&gt;</code> and <code>&lt;col&gt;</code> elements:
      </p>
      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<table>
  <colgroup>
    <col span="2" style="background-color: #D6EEEE">
  </colgroup>
  <tr>
    <th>MON</th>
    <th>TUE</th>
    <th>WED</th>
    <th>THU</th>
    <th>FRI</th>
    <th>SAT</th>
    <th>SUN</th>
  </tr>
</table>`}
      </pre>
      <p className="leading-relaxed">
        Note: <code>&lt;colgroup&gt;</code> must be a child of <code>&lt;table&gt;</code> and placed before other table elements like <code>&lt;tr&gt;</code>, <code>&lt;td&gt;</code>, etc., but after <code>&lt;caption&gt;</code> if present.
      </p>

      {/* Legal CSS Properties */}
      <h2 className="text-2xl font-semibold">Legal CSS Properties</h2>
      <p className="leading-relaxed">
        Only a limited selection of CSS properties are allowed in <code>&lt;colgroup&gt;</code>:
      </p>
      <ul className="list-disc list-inside">
        <li>width</li>
        <li>visibility</li>
        <li>background properties</li>
        <li>border properties</li>
      </ul>
      <p className="leading-relaxed">
        All other CSS properties will have no effect.
      </p>

      {/* Multiple Col Elements */}
      <h2 className="text-2xl font-semibold">Multiple Col Elements</h2>
      <p className="leading-relaxed">
        To style multiple columns with different styles, use more than one <code>&lt;col&gt;</code> element inside <code>&lt;colgroup&gt;</code>:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<table>
  <colgroup>
    <col span="2" style="background-color: #D6EEEE">
    <col span="3" style="background-color: pink">
  </colgroup>
  <tr>
    <th>MON</th>
    <th>TUE</th>
    <th>WED</th>
    <th>THU</th>
    <th>FRI</th>
  </tr>
</table>`}
      </pre>

      {/* Empty Colgroups */}
      <h2 className="text-2xl font-semibold">Empty Colgroups</h2>
      <p className="leading-relaxed">
        To style columns in the middle of a table, insert "empty" <code>&lt;col&gt;</code> elements for the columns before:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<table>
  <colgroup>
    <col span="3">
    <col span="2" style="background-color: pink">
  </colgroup>
  <tr>
    <th>MON</th>
    <th>TUE</th>
    <th>WED</th>
    <th>THU</th>
    <th>FRI</th>
  </tr>
</table>`}
      </pre>

      {/* Hide Columns */}
      <h2 className="text-2xl font-semibold">Hide Columns</h2>
      <p className="leading-relaxed">
        You can hide columns using <code>visibility: collapse</code>:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<table>
  <colgroup>
    <col span="2">
    <col span="3" style="visibility: collapse">
  </colgroup>
  <tr>
    <th>MON</th>
    <th>TUE</th>
    <th>WED</th>
    <th>THU</th>
    <th>FRI</th>
  </tr>
</table>`}
      </pre>
    </div>
  );
};

export default HtmlTableColgroup;
