import React from "react";

const CssPseudoElements: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Pseudo-elements
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        A <b>CSS pseudo-element</b> is a keyword added to a selector to style a
        specific part of an element, such as the first letter, first line, or
        content inserted before or after an element.
      </p>

      <p className="leading-relaxed">
        Pseudo-elements always use a <b>double colon (::)</b> syntax.
      </p>

      {/* Syntax */}
      <h2 className="text-2xl font-bold">Syntax</h2>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`selector::pseudo-element {
  CSS properties;
}`}
      </pre>

      {/* First-line */}
      <h2 className="text-2xl font-bold">::first-line</h2>

      <p className="leading-relaxed">
        Used to style the <b>first line</b> of a text block.  
        Only works on block-level elements.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`p::first-line {
  color: red;
  font-variant: small-caps;
  font-size: 19px;
}`}
      </pre>

      {/* First-letter */}
      <h2 className="text-2xl font-bold">::first-letter</h2>

      <p className="leading-relaxed">
        Styles the <b>first letter</b> of a block-level element.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`p::first-letter {
  color: red;
  font-size: xx-large;
}`}
      </pre>

      {/* ::before */}
      <h2 className="text-2xl font-bold">::before</h2>

      <p className="leading-relaxed">
        Inserts content <b>before</b> an element’s actual content using the{" "}
        <code>content</code> property.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`h3::before {
  content: url(smiley.gif);
}`}
      </pre>

      {/* ::after */}
      <h2 className="text-2xl font-bold">::after</h2>
      
      <p className="leading-relaxed">
        Inserts content <b>after</b> an element’s content.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`h3::after {
  content: url(smiley.gif);
}`}
      </pre>

      {/* ::marker */}
      <h2 className="text-2xl font-bold">::marker</h2>
      <p className="leading-relaxed">Used to style list-item markers.</p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`::marker {
  color: red;
  font-size: 23px;
}`}
      </pre>

      {/* ::selection */}
      <h2 className="text-2xl font-bold">::selection</h2>

      <p className="leading-relaxed">
        Styles the text that a user selects (highlights).
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`::selection {
  color: red;
  background: yellow;
}`}
      </pre>

      {/* ::backdrop */}
      <h2 className="text-2xl font-bold">::backdrop</h2>

      <p className="leading-relaxed">
        Styles the backdrop behind a <code>&lt;dialog&gt;</code> or popover.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`dialog::backdrop {
  background-color: lightgreen;
}`}
      </pre>

      {/* Combining with classes */}
      <h2 className="text-2xl font-bold">Pseudo-elements with Classes</h2>

      <p className="leading-relaxed">
        Pseudo-elements can also be used with normal CSS classes.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`p.intro::first-letter {
  color: #ff0000;
  font-size: 200%;
}`}
      </pre>

      {/* Multiple pseudo-elements */}
      <h2 className="text-2xl font-bold">Using Multiple Pseudo-elements</h2>

      <p className="leading-relaxed">
        You can apply multiple pseudo-elements together to achieve advanced
        typography effects.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`p::first-letter {
  color: red;
  font-size: xx-large;
}

p::first-line {
  color: blue;
  font-variant: small-caps;
}`}
      </pre>
    </div>
  );
};

export default CssPseudoElements;
