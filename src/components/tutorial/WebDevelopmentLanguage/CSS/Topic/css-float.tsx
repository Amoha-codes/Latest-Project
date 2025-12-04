import React from "react";

const CssFloatProperty: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Float
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <code>float</code> property controls how an element should float
        within its container. It is commonly used to wrap text around images or
        place elements side-by-side.
      </p>

      <p className="leading-relaxed">
        When an element is floated, surrounding text and inline elements will
        wrap around it. Resize the browser window to see the wrapping effect.
      </p>

      {/* Float Property Explanation */}
      <h2 className="text-2xl font-bold">The CSS float Property</h2>
      <p className="leading-relaxed">
        The <code>float</code> property is used for positioning and formatting
        content such as images floating next to text.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`left    → Element floats left
right   → Element floats right
none    → Default, element does not float
inherit → Inherits float from parent`}
      </pre>

      <p className="leading-relaxed">
        <b>Tip:</b> The float property is commonly used to wrap text around images.
      </p>

      {/* Float Right */}
      <h2 className="text-2xl font-bold">CSS float: right Example</h2>
      <p className="leading-relaxed">
        <code>float: right</code> makes the element float to the right side of
        its container.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`img {
  float: right;
}`}
      </pre>

      {/* Float Left */}
      <h2 className="text-2xl font-bold">CSS float: left Example</h2>
      <p className="leading-relaxed">
        <code>float: left</code> makes the element float to the left, causing
        surrounding text to wrap around it.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`img {
  float: left;
}`}
      </pre>

      {/* Float None */}
      <h2 className="text-2xl font-bold">CSS float: none Example</h2>
      <p className="leading-relaxed">
        <code>float: none</code> is the default value. The element appears in
        the normal document flow without floating.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`img {
  float: none;
}`}
      </pre>

      {/* Float Divs Next to Each Other */}
      <h2 className="text-2xl font-bold">CSS Float Next To Each Other</h2>
      <p className="leading-relaxed">
        By default, <code>&lt;div&gt;</code> elements are block-level and take
        up the full width of the page. With <code>float: left</code>, multiple
        divs can be placed next to each other.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`div {
  float: left;
  padding: 15px;
}

.div1 {
  background: red;
}

.div2 {
  background: yellow;
}

.div3 {
  background: green;
}`}
      </pre>

    </div>
  );
};

export default CssFloatProperty;
