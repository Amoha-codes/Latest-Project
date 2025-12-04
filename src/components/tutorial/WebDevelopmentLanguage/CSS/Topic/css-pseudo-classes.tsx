
import React from "react";

const CssPseudoClasses: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Pseudo-classes
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        A <b>CSS pseudo-class</b> is a keyword added to a selector that defines
        a special state of an element.  
        Pseudo-classes allow you to style elements when users interact with them,
        when they are focused, visited, hovered, first-child, valid/invalid inputs, and more.
      </p>

      <h2 className="text-2xl font-bold">Syntax</h2>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`selector:pseudo-class {
  CSS properties;
}`}
      </pre>

      <p className="leading-relaxed">
        Example using <code>:hover</code> and <code>:focus</code>:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`button:hover {
  background-color: blue;
}

input:focus {
  border-color: red;
}`}
      </pre>

      {/* Link Pseudo-classes */}
      <h2 className="text-2xl font-bold">Pseudo-classes Used on Links</h2>

      <p className="leading-relaxed">
        These are the most common pseudo-classes for hyperlinks:
      </p>

      <ul className="list-disc ml-6 leading-relaxed space-y-1">
        <li><code>:link</code> — unvisited links</li>
        <li><code>:visited</code> — visited links</li>
        <li><code>:hover</code> — mouse over</li>
        <li><code>:active</code> — clicking the link</li>
      </ul>

      <p className="leading-relaxed font-semibold">Example:</p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`/* unvisited link */
a:link { color: #FF0000; }

/* visited link */
a:visited { color: #00FF00; }

/* mouse over */
a:hover { color: #FF00FF; }

/* selected link */
a:active { color: #0000FF; }`}
      </pre>

      <p className="leading-relaxed italic">
        Note:  
        <b>a:hover</b> must come after <b>a:link</b> and <b>a:visited</b>.  
        <b>a:active</b> must come after <b>a:hover</b>.
      </p>

      {/* Hover on div */}
      <h2 className="text-2xl font-bold">Using :hover on &lt;div&gt;</h2>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`div:hover {
  background-color: blue;
}`}
      </pre>

      {/* Focus on input */}
      <h2 className="text-2xl font-bold">Using :focus on Input</h2>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`input:focus {
  background-color: yellow;
}`}
      </pre>

      {/* Pseudo-class + HTML Class */}
      <h2 className="text-2xl font-bold">
        Combining Pseudo-classes with HTML Classes
      </h2>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`a.highlight:hover {
  color: #ff0000;
}`}
      </pre>

      {/* Tooltip Example */}
      <h2 className="text-2xl font-bold">Simple Tooltip Hover</h2>

      <p className="leading-relaxed">
        Hover over a <code>&lt;div&gt;</code> to reveal a hidden{" "}
        <code>&lt;p&gt;</code> element:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`p {
  display: none;
  background-color: yellow;
  padding: 20px;
}

div:hover p {
  display: block;
}`}
      </pre>

      {/* First Child */}
      <h2 className="text-2xl font-bold">The :first-child Pseudo-class</h2>

      <p className="leading-relaxed">
        Matches any element that is the first child of its parent.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`p:first-child {
  color: blue;
}`}
      </pre>

      <p className="leading-relaxed font-semibold">Examples:</p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`/* First <em> inside <p> */
p em:first-child {
  color: blue;
}

/* All <em> inside first-child <p> */
p:first-child em {
  color: blue;
}`}
      </pre>

      {/* Lang Pseudo-class */}
      <h2 className="text-2xl font-bold">The :lang() Pseudo-class</h2>

      <p className="leading-relaxed">
        Used to style elements with a specific language attribute.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`q:lang(no) {
  quotes: "~" "~";
}`}
      </pre>

      <p className="leading-relaxed">
        Example applies custom quotation marks for Norwegian-language text.
      </p>

    </div>
  );
};

export default CssPseudoClasses;
