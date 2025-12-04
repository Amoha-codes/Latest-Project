import React from "react";

const CssCounters: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Counters
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        CSS Counters allow you to create dynamic, automatic numbering for elements
        like sections, headings, or list items — without using JavaScript.  
        Counters work like variables that can be <b>created</b>, <b>incremented</b>,
        and <b>displayed</b> using CSS.
      </p>

      {/* Main Properties */}
      <h2 className="text-2xl font-bold">Main Properties Used</h2>
      <ul className="list-disc ml-6 space-y-1 leading-relaxed">
        <li><code>counter-reset</code> — Creates or resets a counter</li>
        <li><code>counter-increment</code> — Increases (or decreases) a counter</li>
        <li><code>content</code> — Inserts the generated counter into the page</li>
        <li><code>counter()</code> — Displays a counter value</li>
        <li><code>counters()</code> — Displays nested counters</li>
      </ul>

      {/* Example 1 */}
      <h2 className="text-2xl font-bold">Example — Basic Counter</h2>
      <p className="leading-relaxed">
        In this example, each <code>&lt;h2&gt;</code> gets automatically numbered:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`body {
  counter-reset: section;
}

h2::before {
  counter-increment: section;
  content: "Section " counter(section) ": ";
}`}
      </pre>

      {/* Example 2 */}
      <h2 className="text-2xl font-bold">Decrement or Increase Counter Value</h2>

      <p className="leading-relaxed">Decrease by 1:</p>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`h2::before {
  counter-increment: section -1;
  content: "Section " counter(section) ": ";
}`}
      </pre>

      <p className="leading-relaxed">Increase by 2:</p>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`h2::before {
  counter-increment: section 2;
  content: "Section " counter(section) ": ";
}`}
      </pre>

      {/* Example 3 */}
      <h2 className="text-2xl font-bold">Using Multiple Counters</h2>
      <p className="leading-relaxed">
        You can create nested counters — for example, sections and subsections.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`body {
  counter-reset: section;
}

h1 {
  counter-reset: subsection;
}

h1::before {
  counter-increment: section;
  content: "Section " counter(section) ". ";
}

h2::before {
  counter-increment: subsection;
  content: counter(section) "." counter(subsection) " ";
}`}
      </pre>

      {/* Counters() */}
      <h2 className="text-2xl font-bold">The counters() Function</h2>
      <p className="leading-relaxed">
        <code>counters()</code> is used for nested counters, joining levels with
        a custom separator:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`ol {
  counter-reset: section;
  list-style-type: none;
}

li::before {
  counter-increment: section;
  content: counters(section, ".") " ";
}`}
      </pre>

      {/* Conclusion */}
      <h2 className="text-2xl font-bold">Conclusion</h2>
      <p className="leading-relaxed">
        CSS counters provide a powerful method for dynamic numbering of elements
        directly through CSS — avoiding JavaScript and keeping markup clean.
        They are especially useful for auto-numbering sections, headings,
        ordered lists, and multi-level outlines.
      </p>

    </div>
  );
};

export default CssCounters;
