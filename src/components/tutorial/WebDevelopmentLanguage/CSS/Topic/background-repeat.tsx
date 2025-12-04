import React from "react";

const CssBackgroundRepeat: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Background Repeat
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <code>background-repeat</code> property defines if or how a
        background image will be repeated. By default, background images repeat
        both horizontally and vertically to cover the entire element.
      </p>

      {/* Default Behavior */}
      <h2 className="text-2xl font-bold">Default Repeat Behavior</h2>
      <p className="leading-relaxed">
        Some images do not look good when repeated in both directions:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`body {
  background-image: url("gradient_bg.png");
}`}
      </pre>

      {/* Repeat Horizontally */}
      <h2 className="text-2xl font-bold">Repeat Horizontally</h2>

      <p className="leading-relaxed">
        If the image is repeated only horizontally using{" "}
        <code>background-repeat: repeat-x;</code>, it often looks better:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`body {
  background-image: url("gradient_bg.png");
  background-repeat: repeat-x;
}`}
      </pre>

      <p className="leading-relaxed font-semibold">
        Tip: Use <code>repeat-y</code> to repeat only vertically.
      </p>

      {/* No Repeat */}
      <h2 className="text-2xl font-bold">No Repeat</h2>
      <p className="leading-relaxed">
        You can show the background image only once by using{" "}
        <code>background-repeat: no-repeat;</code>:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`body {
  background-image: url("img_tree.png");
  background-repeat: no-repeat;
}`}
      </pre>

      <p className="leading-relaxed">
        However, the image appears in the default position (top-left), which may
        overlap with text. To fix this, we can reposition it.
      </p>

      {/* Background Position */}
      <h2 className="text-2xl font-bold">CSS background-position</h2>

      <p className="leading-relaxed">
        The <code>background-position</code> property sets the starting position
        of the background image. By default, images appear at the top-left
        corner.
      </p>

      <h3 className="text-xl font-semibold">Example</h3>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`body {
  background-image: url("img_tree.png");
  background-repeat: no-repeat;
  background-position: right top;
}`}
      </pre>
    </div>
  );
};

export default CssBackgroundRepeat;
