import React from "react";

const CssSelectors: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">CSS Selectors</h1>

      {/* Intro */}
      <p className="leading-relaxed">
        CSS selectors are used to <strong>find</strong> or{" "}
        <strong>select</strong> the HTML elements you want to style.
      </p>

      <p className="leading-relaxed">CSS selectors fall into five main categories:</p>

      <ul className="list-disc list-inside space-y-1 leading-relaxed">
        <li>Simple selectors (select elements by name, id, class)</li>
        <li>Combinator selectors (based on element relationships)</li>
        <li>Pseudo-class selectors (based on element states)</li>
        <li>Pseudo-element selectors (select part of an element)</li>
        <li>Attribute selectors (select elements by attribute values)</li>
      </ul>

      <p className="leading-relaxed">
        This chapter explains the most commonly used CSS selectors.
      </p>

      {/* Element Selector */}
      <h2 className="text-2xl font-bold">The CSS Element Selector</h2>
      <p className="leading-relaxed">
        The element selector targets HTML elements based on their tag name.
      </p>
      <p className="leading-relaxed">
        Example: All <code>&lt;p&gt;</code> elements will be centered and red:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`p {
  text-align: center;
  color: red;
}`}</pre>

      {/* ID Selector */}
      <h2 className="text-2xl font-bold">The CSS ID Selector</h2>
      <p className="leading-relaxed">
        The ID selector uses the <code>id</code> attribute to select a specific,
        unique element. Use a <strong>#</strong> followed by the ID.
      </p>

      <p className="leading-relaxed">
        Example: Style the element with <code>id="para1"</code>:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`#para1 {
  text-align: center;
  color: red;
}`}</pre>

      <p className="leading-relaxed font-semibold">
        Note: An ID name cannot start with a number!
      </p>

      {/* Class Selector */}
      <h2 className="text-2xl font-bold">The CSS Class Selector</h2>
      <p className="leading-relaxed">
        The class selector targets elements with a specific{" "}
        <code>class</code> attribute. Use a <strong>.</strong> followed by the
        class name.
      </p>

      <p className="leading-relaxed">Example: All elements with class="center":</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`.center {
  text-align: center;
  color: red;
}`}</pre>

      <p className="leading-relaxed">
        You can also target only specific elements with that class:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`p.center {
  text-align: center;
  color: red;
}`}</pre>

      <p className="leading-relaxed">
        Elements can have multiple classes as well:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`<p class="center large">This paragraph refers to two classes.</p>`}</pre>

      <p className="leading-relaxed font-semibold">
        Note: A class name cannot start with a number!
      </p>

      {/* Universal Selector */}
      <h2 className="text-2xl font-bold">The CSS Universal Selector</h2>
      <p className="leading-relaxed">
        The universal selector <strong>*</strong> selects all HTML elements on
        the page.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`* {
  text-align: center;
  color: blue;
}`}</pre>

      {/* Grouping Selector */}
      <h2 className="text-2xl font-bold">The CSS Grouping Selector</h2>
      <p className="leading-relaxed">
        The grouping selector is used when multiple elements share the same
        styling. Instead of writing separate rules, group them using commas.
      </p>

      <p className="leading-relaxed font-semibold">Before grouping:</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`h1 {
  text-align: center;
  color: red;
}

h2 {
  text-align: center;
  color: red;
}

p {
  text-align: center;
  color: red;
}`}</pre>

      <p className="leading-relaxed font-semibold">After grouping:</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`h1, h2, p {
  text-align: center;
  color: red;
}`}</pre>
    </div>
  );
};

export default CssSelectors;
