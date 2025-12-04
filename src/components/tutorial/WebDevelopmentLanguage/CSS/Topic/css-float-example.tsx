import React from "react";

const CssFloatExamples: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Float Examples
      </h1>

      {/* Create Equal Width Boxes */}
      <h2 className="text-2xl font-bold">Create Equal Width Boxes</h2>
      <p className="leading-relaxed">
        With the <code>float</code> property, it is easy to place boxes side by
        side and create multi-column layouts.
      </p>

      <p className="leading-relaxed">Example of floating boxes:</p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`* {
  box-sizing: border-box;
}

.box {
  float: left;
  width: 33.33%; /* for three equal boxes */
  padding: 50px; /* adds spacing inside the box */
}`}
      </pre>

      {/* Box-sizing Explanation */}
      <h2 className="text-2xl font-bold">What is box-sizing?</h2>
      <p className="leading-relaxed">
        Adding padding or borders normally increases the element's total width.
        This can break layouts that rely on exact widths, like floating boxes.
      </p>
      <p className="leading-relaxed">
        The <code>box-sizing</code> property ensures padding and borders are
        included within the assigned width and height, preventing layout issues.
      </p>

      {/* Images Side By Side */}
      <h2 className="text-2xl font-bold">Images Side By Side</h2>
      <p className="leading-relaxed">
        You can also float containers to position images side by side.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`.img-container {
  float: left;
  width: 33.33%; /* for three images */
  padding: 5px;
}`}
      </pre>

      {/* Equal Height Boxes */}
      <h2 className="text-2xl font-bold">Create Boxes With Equal Heights</h2>
      <p className="leading-relaxed">
        Floating boxes with equal width is simple, but equal height boxes are
        harder with floats. One quick workaround is using a fixed height.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`.box {
  height: 500px;
}`}
      </pre>

      <p className="leading-relaxed">
        However, this is not flexible—content may overflow on smaller screens.
      </p>

      <h3 className="text-xl font-semibold">
        Using Flexbox to Create Equal Height Boxes
      </h3>

      <p className="leading-relaxed">
        CSS Flexbox automatically stretches items to match the height of the
        tallest item, making it the modern approach for equal height layouts.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`/* Flexbox example */
.container {
  display: flex;
}

.box {
  flex: 1;
  padding: 20px;
}`}
      </pre>

      {/* Navigation Menu */}
      <h2 className="text-2xl font-bold">Navigation Menu</h2>
      <p className="leading-relaxed">
        Floats can be used to create a simple horizontal navigation menu by
        floating list items.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`li {
  float: left;
  padding: 10px;
}`}
      </pre>

      {/* All Float Properties Table */}
      <h2 className="text-2xl font-bold">All CSS Float Properties</h2>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`box-sizing → Controls how width/height are calculated (includes padding + border)
clear      → Controls what happens to elements next to floats
float      → Specifies whether an element floats left, right, or not at all`}
      </pre>

    </div>
  );
};

export default CssFloatExamples;
