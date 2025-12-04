import React from "react";

const CssTableSize: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Table Size
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        CSS allows you to control the width and height of tables using the
        <code> width</code> and <code> height</code> properties.  
        These properties can be set using percentages, fixed units like px,  
        or the keyword <code>auto</code>.
      </p>

      {/* Width in Percent */}
      <h2 className="text-2xl font-bold">CSS Table Width in Percent</h2>
      <p className="leading-relaxed">
        Setting <code>width: 100%</code> makes the table span the full width  
        of the page.  
        You can also set percentage widths like <code>50%</code>.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`table {
  width: 100%;
}

th {
  height: 70px;
}`}
      </pre>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`table {
  width: 50%;
}`}
      </pre>

      {/* Fixed Width */}
      <h2 className="text-2xl font-bold">CSS Table Width (Fixed Width)</h2>
      <p className="leading-relaxed">
        To create a table with a fixed size, use pixel units like:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`table {
  width: 500px;
}`}
      </pre>

      {/* Auto Width */}
      <h2 className="text-2xl font-bold">CSS Table Width Using <code>auto</code></h2>
      <p className="leading-relaxed">
        Using <code>width: auto;</code> lets the browser calculate the table width  
        based on its content.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`table {
  width: auto;
}`}
      </pre>

      {/* Table Height */}
      <h2 className="text-2xl font-bold">CSS Table Height</h2>
      <p className="leading-relaxed">
        You can also set table height using <code>%</code>, <code>px</code>,  
        or <code>auto</code>.  
        The following example sets a fixed height for table headers:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`th {
  height: 70px;
}`}
      </pre>

      {/* Conclusion */}
      <h2 className="text-2xl font-bold">Conclusion</h2>
      <p className="leading-relaxed">
        Table width and height can be adjusted using percentages, fixed values,
        or automatically calculated by the browser. These properties help you
        create responsive or fixed table layouts depending on your design needs.
      </p>

    </div>
  );
};

export default CssTableSize;
