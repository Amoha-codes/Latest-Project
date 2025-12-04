import React from "react";

const CssTableAlignment: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Table Alignment
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        CSS provides properties to control both horizontal and vertical alignment
        of table cell content. Using <code>text-align</code> and <code>vertical-align</code>,
        you can adjust how text is positioned within <code>&lt;th&gt;</code> and <code>&lt;td&gt;</code> elements.
      </p>

      {/* Horizontal Alignment */}
      <h2 className="text-2xl font-bold">Horizontal Alignment</h2>
      <p className="leading-relaxed">
        The <code>text-align</code> property is used to control how text is aligned
        horizontally inside table headers and data cells.
      </p>

      {/* text-align center */}
      <h3 className="text-xl font-semibold">Center-align &lt;td&gt; elements</h3>
      <p className="leading-relaxed">
        By default, table data (<code>&lt;td&gt;</code>) is left-aligned.
        Use <code>text-align: center;</code> to center the content.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`td {
  text-align: center;
}`}
      </pre>

      {/* text-align left */}
      <h3 className="text-xl font-semibold">Left-align &lt;th&gt; elements</h3>
      <p className="leading-relaxed">
        Header cells (<code>&lt;th&gt;</code>) are centered by default.
        To left-align them, apply <code>text-align: left;</code>.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`th {
  text-align: left;
}`}
      </pre>

      {/* Vertical Alignment */}
      <h2 className="text-2xl font-bold">Vertical Alignment</h2>
      <p className="leading-relaxed">
        The <code>vertical-align</code> property controls how content is positioned
        vertically inside a table cell. The default is <strong>middle</strong>.
      </p>

      <h3 className="text-xl font-semibold">Vertical-align bottom</h3>
      <p className="leading-relaxed">
        To move cell content to the bottom, use <code>vertical-align: bottom;</code>.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`td {
  height: 50px;
  vertical-align: bottom;
}`}
      </pre>

      {/* Conclusion */}
      <h2 className="text-2xl font-bold">Conclusion</h2>
      <p className="leading-relaxed">
        Using <code>text-align</code> and <code>vertical-align</code>, you can fully control
        how table content appears horizontally and vertically, improving readability
        and layout precision in your tables.
      </p>

    </div>
  );
};

export default CssTableAlignment;
