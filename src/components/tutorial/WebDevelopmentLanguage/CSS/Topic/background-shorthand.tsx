import React from "react";

const CssBackgroundShorthand: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Background Shorthand
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <code>background</code> property is a shorthand that allows you to
        set <b>all background properties</b> in one single declaration.
      </p>

      <p className="leading-relaxed">
        Instead of writing multiple lines for color, image, repeat, and
        position, you can combine them together.
      </p>

      {/* Long-form example */}
      <h2 className="text-2xl font-bold">Without Shorthand</h2>
      <p className="leading-relaxed">
        This is how you normally define background properties individually:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`body {
  background-color: #ffffff;
  background-image: url("img_tree.png");
  background-repeat: no-repeat;
  background-position: right top;
}`}
      </pre>

      {/* Shorthand Example */}
      <h2 className="text-2xl font-bold">Using Shorthand</h2>
      <p className="leading-relaxed">
        The same result can be achieved using the <code>background</code>{" "}
        shorthand property:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`body {
  background: #ffffff url("img_tree.png") no-repeat right top;
}`}
      </pre>

      <p className="leading-relaxed">
        Using shorthand makes your CSS cleaner and easier to maintain.
      </p>
    </div>
  );
};

export default CssBackgroundShorthand;
