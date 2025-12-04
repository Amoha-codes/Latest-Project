import React from "react";

const CssBackgroundImage: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Background Image
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <code>background-image</code> property specifies an image to use as
        the background of an element. By default, the image repeats to cover the
        entire element.
      </p>

      {/* Basic Example */}
      <h2 className="text-2xl font-bold">Example</h2>
      <p className="leading-relaxed">Set the background image for a page:</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`body {
  background-image: url("paper.gif");
}`}
      </pre>

      {/* Bad Example */}
      <h2 className="text-2xl font-bold">Unreadable Background Example</h2>

      <p className="leading-relaxed">
        This example shows a bad combination of text and a background image,
        making the content hard to read:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`body {
  background-image: url("bgdesert.jpg");
}`}
      </pre>

      <p className="leading-relaxed text-red-600 font-semibold">
        Note: When using a background image, choose one that does not disturb
        the readability of the text.
      </p>

      {/* Background for Elements */}
      <h2 className="text-2xl font-bold">Background Image for Specific Elements</h2>

      <p className="leading-relaxed">
        You can apply a background image to individual elements such as{" "}
        <code>&lt;p&gt;</code>, <code>&lt;div&gt;</code>, etc.
      </p>

      <h3 className="text-xl font-semibold">Example</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`p {
  background-image: url("paper.gif");
}`}
      </pre>
    </div>
  );
};

export default CssBackgroundImage;
