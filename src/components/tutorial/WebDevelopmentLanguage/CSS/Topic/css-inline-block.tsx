import React from "react";

const CssDisplayInlineBlock: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS display: inline-block
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <code>display: inline-block</code> property combines the behavior of
        both inline and block elements.
      </p>

      <p className="leading-relaxed">
        Elements with <code>inline-block</code> appear on the same line (like
        inline elements), but they also allow width, height, margin-top, and 
        margin-bottom to be set (like block elements).
      </p>

      {/* Comparison Example */}
      <h2 className="text-2xl font-bold">Example Comparison</h2>
      <p className="leading-relaxed">
        The following example shows the differences between 
        <code>display: inline</code>, <code>display: inline-block</code>, and 
        <code>display: block</code>.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`span.a {
  display: inline; /* default for span */
  padding: 5px;
  border: 2px solid red;
}

span.b {
  display: inline-block;
  width: 100px;
  height: 35px;
  padding: 5px;
  border: 2px solid red;
}

span.c {
  display: block;
  width: 100px;
  height: 35px;
  padding: 5px;
  border: 2px solid red;
}`}
      </pre>

      {/* Horizontal Navigation Menu */}
      <h2 className="text-2xl font-bold">Create a Horizontal Navigation Menu</h2>
      <p className="leading-relaxed">
        A common use of <code>display: inline-block</code> is to place list 
        items horizontally, making it ideal for navigation menus.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`/* Create a horizontal navigation menu */
.nav {
  background-color: lightgray;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.nav li {
  display: inline-block;
  font-size: 18px;
  padding: 15px;
}`}
      </pre>

    </div>
  );
};

export default CssDisplayInlineBlock;
