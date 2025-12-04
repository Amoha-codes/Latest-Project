
import React from "react";

const CssInheritance: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* TITLE */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Inheritance
      </h1>

      {/* INTRO */}
      <p className="leading-relaxed">
        CSS <b>inheritance</b> defines how property values are passed from a
        parent element to its children.  
        If a property is not explicitly set, it either:
        <b> inherits</b> from the parent, or uses its <b>initial default value</b>.
      </p>

      {/* TYPES */}
      <h2 className="text-2xl font-bold">Inherited vs Non-Inherited Properties</h2>
      <p className="leading-relaxed">
        CSS properties fall into two categories:
      </p>

      <ul className="list-disc ml-6 space-y-2 leading-relaxed">
        <li>
          <b>Inherited properties</b> — usually text-related (color, font-size, line-height, etc.)
        </li>
        <li>
          <b>Non-inherited properties</b> — layout-related (margin, padding, border, width, etc.)
        </li>
      </ul>

      {/* EXAMPLE 1 */}
      <h2 className="text-2xl font-bold">Example — Inherited Properties</h2>

      <p className="leading-relaxed">
        The child <code>&lt;strong&gt;</code> inherits <code>color</code> and{" "}
        <code>font-size</code> from its parent <code>&lt;p&gt;</code>:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`p {
  color: blue;
  font-size: 20px;
}

<p>This is a paragraph with some <strong>important</strong> text.</p>`}
      </pre>

      {/* EXAMPLE 2 */}
      <h2 className="text-2xl font-bold">Example — Non-inherited Properties</h2>

      <p className="leading-relaxed">
        Properties like borders, margins, backgrounds, etc. <b>do not inherit</b>:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`p {
  border: 1px solid red;
}

<p>This is a paragraph with some <strong>important</strong> text.</p>`}
      </pre>

      <p className="leading-relaxed">
        The <code>&lt;strong&gt;</code> tag does <b>not</b> get a border here.
      </p>

      {/* INHERIT KEYWORD */}
      <h2 className="text-2xl font-bold">The <code>inherit</code> Keyword</h2>

      <p className="leading-relaxed">
        You can force a property to inherit from its parent by using{" "}
        <code>inherit</code>:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`p {
  border: 1px solid red;
}

strong {
  border: inherit;
}

<p>This is a paragraph with some <strong>strong</strong> text.</p>`}
      </pre>

      <p className="leading-relaxed">
        Now the <code>&lt;strong&gt;</code> element gets the parent's border.
      </p>

      {/* SUMMARY */}
      <h2 className="text-2xl font-bold">Summary</h2>

      <ul className="list-disc ml-6 space-y-2 leading-relaxed">
        <li>Text-related properties usually inherit automatically.</li>
        <li>Layout-related properties do not inherit.</li>
        <li>The <code>inherit</code> keyword forces inheritance.</li>
        <li>Useful for keeping styling consistent and predictable.</li>
      </ul>

    </div>
  );
};

export default CssInheritance;
