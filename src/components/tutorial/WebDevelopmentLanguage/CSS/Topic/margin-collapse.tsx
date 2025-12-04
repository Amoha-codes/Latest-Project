import React from "react";

const CssMarginCollapse: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Margin Collapse
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        Margin collapse occurs when two vertical margins (top and bottom) of 
        elements combine into a single margin. The resulting margin is equal 
        to the largest of the two adjacent margins.
      </p>

      <p className="leading-relaxed font-semibold">
        ⚠️ Note: Margin collapse <b>only</b> happens for vertical margins (top and bottom), 
        not horizontal margins (left and right).
      </p>

      {/* Example 1 */}
      <h2 className="text-2xl font-bold">Example 1: h1 and h2</h2>
      <p className="leading-relaxed">
        The <code>&lt;h1&gt;</code> element has a bottom margin of 50px and the 
        <code>&lt;h2&gt;</code> element has a top margin of 20px. The vertical 
        margin between them collapses to the larger value (50px):
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`h1 {
  margin-bottom: 50px;
}

h2 {
  margin-top: 20px;
}`}
      </pre>

      {/* Example 2 */}
      <h2 className="text-2xl font-bold">Example 2: p elements</h2>
      <p className="leading-relaxed">
        Each <code>&lt;p&gt;</code> element has a top margin of 30px and a bottom 
        margin of 30px. The vertical margin between two paragraphs collapses to 
        30px instead of adding up to 60px:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`p {
  margin-top: 30px;
  margin-bottom: 30px;
}`}
      </pre>
    </div>
  );
};

export default CssMarginCollapse;
