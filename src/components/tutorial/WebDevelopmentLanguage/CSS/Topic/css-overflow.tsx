import React from "react";

const CssOverflowProperty: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS The overflow Property
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <code>overflow</code> property controls what happens when content is
        too large to fit inside an element's box. It lets you choose whether the
        extra content should be clipped, hidden, or displayed with scrollbars.
      </p>

      <p className="leading-relaxed">
        The <code>overflow</code> property accepts the following values:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`visible  → Default. Content is not clipped; may overflow.
hidden   → Content is clipped; rest is hidden.
scroll   → Content is clipped; scrollbars always appear.
auto     → Scrollbars appear only when needed.`}
      </pre>

      {/* Scroll Example */}
      <h2 className="text-2xl font-bold">Example: Adding Scrollbars</h2>
      <p className="leading-relaxed">
        In this example, scrollbars appear because the content is too large for
        the container.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black whitespace-pre-wrap">
{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
(overflow scroll example content)`}
      </pre>

      {/* Overflow: visible */}
      <h2 className="text-2xl font-bold">CSS overflow: visible</h2>
      <p className="leading-relaxed">
        With <code>overflow: visible</code>, extra content is not clipped. It
        spills outside the element box. This is the default behavior in CSS.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`div {
  width: 200px;
  height: 65px;
  background-color: coral;
  overflow: visible;
}`}
      </pre>

      {/* Overflow: hidden */}
      <h2 className="text-2xl font-bold">CSS overflow: hidden</h2>
      <p className="leading-relaxed">
        With <code>overflow: hidden</code>, extra content is clipped and cannot
        be seen. No scrollbars appear.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`div {
  overflow: hidden;
}`}
      </pre>

      {/* Overflow: scroll */}
      <h2 className="text-2xl font-bold">CSS overflow: scroll</h2>
      <p className="leading-relaxed">
        With <code>overflow: scroll</code>, scrollbars are always visible even
        if the content fits inside the element.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`div {
  overflow: scroll;
}`}
      </pre>

      {/* Overflow: auto */}
      <h2 className="text-2xl font-bold">CSS overflow: auto</h2>
      <p className="leading-relaxed">
        The <code>auto</code> value works like scroll, but scrollbars appear
        only if necessary.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`div {
  overflow: auto;
}`}
      </pre>

      {/* Overflow-x and Overflow-y */}
      <h2 className="text-2xl font-bold">CSS overflow-x and overflow-y</h2>
      <p className="leading-relaxed">
        You can control horizontal and vertical overflow separately:
      </p>

      <ul className="list-disc pl-6 leading-relaxed">
        <li><code>overflow-x</code> controls left/right overflow.</li>
        <li><code>overflow-y</code> controls top/bottom overflow.</li>
      </ul>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`div {
  overflow-x: hidden; /* Hide horizontal overflow */
  overflow-y: scroll; /* Add vertical scrollbar */
}`}
      </pre>

    </div>
  );
};

export default CssOverflowProperty;
