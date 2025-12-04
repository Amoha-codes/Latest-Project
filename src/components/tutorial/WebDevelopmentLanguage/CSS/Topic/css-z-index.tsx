import React from "react";

const CssZIndexProperty: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS The z-index Property
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <code>z-index</code> property controls the stack order of positioned
        elements. When elements overlap, <code>z-index</code> determines which
        element appears in front or behind others.
      </p>

      <p className="leading-relaxed">
        An element can have a positive or negative stack order. Higher values
        appear in front; lower values appear behind.
      </p>

      {/* Basic Example */}
      <h2 className="text-2xl font-bold">Basic Example</h2>
      <p className="leading-relaxed">
        In this example, the image has a <code>z-index</code> of -1, so it is
        placed behind the text.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`img {
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;
}`}
      </pre>

      <p className="leading-relaxed">
        <b>Note:</b> <code>z-index</code> only works on positioned elements
        (<code>absolute</code>, <code>relative</code>, <code>fixed</code>,
        <code>sticky</code>) and on flex items.
      </p>

      {/* Another Example */}
      <h2 className="text-2xl font-bold">Another z-index Example</h2>
      <p className="leading-relaxed">
        A positioned element with a greater <code>z-index</code> is always above
        an element with a lower value.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`<div class="container">
  <div class="black-box">Black box</div>
  <div class="gray-box">Gray box</div>
  <div class="green-box">Green box</div>
</div>

.container {
  position: relative;
}

.black-box {
  position: relative;
  z-index: 1;
  border: 2px solid black;
  height: 100px;
  margin: 30px;
}

.gray-box {
  position: absolute;
  z-index: 3;
  background: lightgray;
  height: 60px;
  width: 70%;
  left: 50px;
  top: 50px;
}

.green-box {
  position: absolute;
  z-index: 2;
  background: lightgreen;
  width: 35%;
  left: 270px;
  top: -15px;
  height: 100px;
}`}
      </pre>

      {/* Without z-index */}
      <h2 className="text-2xl font-bold">Without z-index</h2>
      <p className="leading-relaxed">
        If multiple positioned elements overlap without a <code>z-index</code>
        value, they stack in the order they appear in the HTML source.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`/* Same layout, but without z-index */

.container {
  position: relative;
}

.black-box {
  position: relative;
  border: 2px solid black;
  height: 100px;
  margin: 30px;
}

.gray-box {
  position: absolute;
  background: lightgray;
  height: 60px;
  width: 70%;
  left: 50px;
  top: 50px;
}

.green-box {
  position: absolute;
  background: lightgreen;
  width: 35%;
  left: 270px;
  top: -15px;
  height: 100px;
}`}
      </pre>

    </div>
  );
};

export default CssZIndexProperty;
