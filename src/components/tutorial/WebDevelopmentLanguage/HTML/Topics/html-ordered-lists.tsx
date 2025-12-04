import React from "react";

const HtmlOrderedLists: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">HTML - Ordered Lists</h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The HTML <code>&lt;ol&gt;</code> tag defines an ordered list. An ordered list can be numerical or alphabetical.
      </p>

      {/* Basic Ordered List */}
      <h2 className="text-2xl font-semibold">Ordered HTML List</h2>
      <p className="leading-relaxed">
        An ordered list starts with the <code>&lt;ol&gt;</code> tag. Each list item starts with the <code>&lt;li&gt;</code> tag. List items are numbered by default.
      </p>
      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>`}
      </pre>

      {/* Type Attribute */}
      <h2 className="text-2xl font-semibold">Ordered List - Type Attribute</h2>
      <p className="leading-relaxed">
        The <code>type</code> attribute of the <code>&lt;ol&gt;</code> tag defines the numbering style:
      </p>
      <ul className="list-disc list-inside">
        <li><code>type="1"</code> - numbers (default)</li>
        <li><code>type="A"</code> - uppercase letters</li>
        <li><code>type="a"</code> - lowercase letters</li>
        <li><code>type="I"</code> - uppercase Roman numerals</li>
        <li><code>type="i"</code> - lowercase Roman numerals</li>
      </ul>

      <h3 className="text-xl font-semibold">Examples</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<ol type="1">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>`}
      </pre>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<ol type="A">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>`}
      </pre>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<ol type="a">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>`}
      </pre>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<ol type="I">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>`}
      </pre>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<ol type="i">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>`}
      </pre>

      {/* Start Attribute */}
      <h2 className="text-2xl font-semibold">Control List Counting</h2>
      <p className="leading-relaxed">
        By default, an ordered list starts at 1. Use the <code>start</code> attribute to specify a starting number.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<ol start="50">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>`}
      </pre>

      {/* Nested Lists */}
      <h2 className="text-2xl font-semibold">Nested HTML Lists</h2>
      <p className="leading-relaxed">
        Lists can be nested inside other lists. A <code>&lt;li&gt;</code> can contain another list, images, links, etc.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<ol>
  <li>Coffee</li>
  <li>Tea
    <ol>
      <li>Black tea</li>
      <li>Green tea</li>
    </ol>
  </li>
  <li>Milk</li>
</ol>`}
      </pre>

      {/* Chapter Summary */}
      <h2 className="text-2xl font-semibold">Chapter Summary</h2>
      <ul className="list-disc list-inside">
        <li>Use <code>&lt;ol&gt;</code> to define an ordered list.</li>
        <li>Use the <code>type</code> attribute to define numbering type.</li>
        <li>Use <code>&lt;li&gt;</code> for list items.</li>
        <li>Lists can be nested inside other lists.</li>
        <li>List items can contain other HTML elements.</li>
      </ul>
    </div>
  );
};

export default HtmlOrderedLists;
