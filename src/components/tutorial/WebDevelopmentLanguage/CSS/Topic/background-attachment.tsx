import React from "react";

const CssBackgroundAttachment: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Background Attachment
      </h1>

      {/* Introduction */}
      <p className="leading-relaxed">
        The <code>background-attachment</code> property controls whether a
        background image scrolls with the page or stays fixed in place.
      </p>

      {/* Fixed Background */}
      <h2 className="text-2xl font-bold">Fixed Background</h2>
      <p className="leading-relaxed">
        When using <code>background-attachment: fixed;</code>, the background
        image stays fixed and does not move when you scroll:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`body {
  background-image: url("img_tree.png");
  background-repeat: no-repeat;
  background-position: right top;
  background-attachment: fixed;
}`}
      </pre>

      {/* Scroll Background */}
      <h2 className="text-2xl font-bold">Scroll with Page</h2>
      <p className="leading-relaxed">
        The default behavior is <code>background-attachment: scroll;</code>,
        which makes the background move as you scroll:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`body {
  background-image: url("img_tree.png");
  background-repeat: no-repeat;
  background-position: right top;
  background-attachment: scroll;
}`}
      </pre>
    </div>
  );
};

export default CssBackgroundAttachment;
