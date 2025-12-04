import React from "react";

const CssCombinators: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Combinators
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        CSS <b>combinators</b> define the relationship between two or more
        selectors. They allow you to target elements based on how they are
        positioned relative to each other in the DOM.
      </p>

      <p className="leading-relaxed">
        There are <b>four types</b> of CSS combinators:
      </p>

      <ul className="list-disc ml-6 space-y-1 leading-relaxed">
        <li>Descendant combinator (space)</li>
        <li>Child combinator (&gt;)</li>
        <li>Next sibling combinator (+)</li>
        <li>Subsequent-sibling combinator (~)</li>
      </ul>

      {/* Descendant */}
      <h2 className="text-2xl font-bold">1. Descendant Combinator (space)</h2>

      <p className="leading-relaxed">
        The descendant combinator selects elements that are <b>inside</b> another
        element (children, grandchildren, deeper nested elements).
      </p>

      <p className="leading-relaxed">Example: Select all &lt;p&gt; inside &lt;div&gt;</p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`div p {
  background-color: yellow;
}`}
      </pre>

      {/* Child */}
      <h2 className="text-2xl font-bold">2. Child Combinator (&gt;)</h2>

      <p className="leading-relaxed">
        The child combinator selects elements that are <b>direct children</b> of a
        specific parent.
      </p>

      <p className="leading-relaxed">Example:</p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`div > p {
  background-color: yellow;
}`}
      </pre>

      {/* Next Sibling */}
      <h2 className="text-2xl font-bold">3. Next Sibling Combinator (+)</h2>

      <p className="leading-relaxed">
        Selects an element that appears <b>immediately after</b> another element.
      </p>
      <p className="leading-relaxed">
        Both elements must share the same parent.
      </p>

      <p className="leading-relaxed">Example: Select the first &lt;p&gt; right after a &lt;div&gt;</p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`div + p {
  background-color: yellow;
}`}
      </pre>

      {/* Subsequent Sibling */}
      <h2 className="text-2xl font-bold">4. Subsequent-Sibling Combinator (~)</h2>

      <p className="leading-relaxed">
        This selects <b>all siblings</b> that appear after a specified element,
        not just the first one.
      </p>

      <p className="leading-relaxed">Example:</p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`div ~ p {
  background-color: yellow;
}`}
      </pre>

      {/* Conclusion */}
      <h2 className="text-2xl font-bold">Conclusion</h2>

      <p className="leading-relaxed">
        CSS combinators help create more precise and powerful selectors by
        defining relationships between HTML elements. Understanding them allows
        you to write cleaner, more efficient CSS.
      </p>
    </div>
  );
};

export default CssCombinators;
