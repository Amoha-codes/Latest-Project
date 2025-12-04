import React from "react";

const CssClearAndClearfix: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS clear and clearfix Hack
      </h1>

      {/* The clear Property */}
      <h2 className="text-2xl font-bold">The CSS clear Property</h2>
      <p className="leading-relaxed">
        The <code>clear</code> property specifies how an element behaves next
        to a floating element. It prevents elements from wrapping around or
        sitting beside floated content.
      </p>

      <p className="leading-relaxed">
        The <code>clear</code> property can have the following values:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`none   → Default. Allows floating on either side
left   → Pushes element below floated elements on the left
right  → Pushes element below floated elements on the right
both   → Pushes element below floated elements on both sides
inherit → Inherits clear value from parent`}
      </pre>

      <p className="leading-relaxed">
        Example: Here, <code>clear: left;</code> pushes <code>div2</code> below
        the floating <code>div1</code>.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`div1 {
  float: left;
}

div2 {
  clear: left;
}`}
      </pre>

      {/* Clearfix Hack */}
      <h2 className="text-2xl font-bold">The CSS clearfix Hack</h2>
      <p className="leading-relaxed">
        When a floated element is taller than its container, it may overflow
        outside the container. This happens because floated elements are removed
        from normal document flow.
      </p>

      <p className="leading-relaxed">
        The clearfix hack ensures the parent element properly wraps around its
        floated children.
      </p>

      <p className="leading-relaxed font-semibold">Without Clearfix</p>
      <p className="leading-relaxed font-semibold">With Clearfix</p>

      <p className="leading-relaxed">
        The clearfix hack uses the <code>::after</code> pseudo-element:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`.clearfix::after {
  content: "";
  clear: both;
  display: table;
}`}
      </pre>

    </div>
  );
};

export default CssClearAndClearfix;
