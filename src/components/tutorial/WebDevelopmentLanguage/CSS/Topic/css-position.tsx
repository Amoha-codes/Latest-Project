import React from "react";

const CssPositionProperty: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS The position Property
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        CSS positioning allows you to control how elements are placed on a web
        page. By using the <code>position</code> property, you can override the
        normal document flow and place elements exactly where you want them.
      </p>

      <p className="leading-relaxed">
        The <code>position</code> property supports the following values:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`static
relative
fixed
absolute
sticky`}
      </pre>

      <p className="leading-relaxed">
        Once a positioning type is set, the final location is controlled using
        the <code>top</code>, <code>bottom</code>, <code>left</code>, and 
        <code>right</code> properties.
      </p>

      {/* Static */}
      <h2 className="text-2xl font-bold">CSS position: static</h2>
      <p className="leading-relaxed">
        This is the default positioning for all HTML elements. Static elements
        are not affected by the top, bottom, left, or right properties and follow
        the normal document flow.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`div.static {
  position: static;
  border: 3px solid #73AD21;
}`}
      </pre>

      {/* Relative */}
      <h2 className="text-2xl font-bold">CSS position: relative</h2>
      <p className="leading-relaxed">
        A relatively positioned element moves relative to its normal position.
        Using top/left/right/bottom shifts the element, but the original space
        is still preserved in the layout.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`div.relative {
  position: relative;
  left: 30px;
  border: 3px solid #73AD21;
}`}
      </pre>

      {/* Fixed */}
      <h2 className="text-2xl font-bold">CSS position: fixed</h2>
      <p className="leading-relaxed">
        A fixed element is positioned relative to the viewport. It stays in the
        same place even when the page is scrolled. Fixed elements do not leave
        space in the normal document flow.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`div.fixed {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 300px;
  border: 3px solid #73AD21;
}`}
      </pre>

      {/* Absolute */}
      <h2 className="text-2xl font-bold">CSS position: absolute</h2>
      <p className="leading-relaxed">
        An absolutely positioned element is positioned relative to the nearest
        positioned ancestor (an element with a position value other than static).
      </p>
      <p className="leading-relaxed">
        If no positioned ancestor exists, it is positioned relative to the page
        itself. Absolute elements are removed from the normal flow and may 
        overlap other elements.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`div.relative {
  position: relative;
  width: 400px;
  height: 200px;
  border: 3px solid green;
}

div.absolute {
  position: absolute;
  top: 80px;
  right: 0;
  width: 200px;
  height: 100px;
  border: 3px solid red;
}`}
      </pre>

      {/* Sticky */}
      <h2 className="text-2xl font-bold">CSS position: sticky</h2>
      <p className="leading-relaxed">
        A sticky element behaves like <code>relative</code> until the page is
        scrolled to a certain point. Then it “sticks” to that position, similar 
        to <code>fixed</code>.
      </p>
      <p className="leading-relaxed">
        Note: You must set at least one of <code>top</code>, 
        <code>right</code>, <code>bottom</code>, or <code>left</code> 
        for sticky to work.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`div.sticky {
  position: sticky;
  top: 0;
  background-color: green;
  border: 2px solid #4CAF50;
}`}
      </pre>

    </div>
  );
};

export default CssPositionProperty;
