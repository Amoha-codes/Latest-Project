import React from "react";

const HtmlUnorderedLists: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">HTML - Unordered Lists</h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The HTML <code>&lt;ul&gt;</code> tag defines an unordered (bulleted) list.
      </p>

      {/* Basic Unordered List */}
      <h2 className="text-2xl font-semibold">Unordered HTML List</h2>
      <p className="leading-relaxed">
        An unordered list starts with the <code>&lt;ul&gt;</code> tag. Each list item starts with the <code>&lt;li&gt;</code> tag. List items are marked with bullets by default.
      </p>
      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>`}
      </pre>

      {/* Choosing List Item Marker */}
      <h2 className="text-2xl font-semibold">Choose List Item Marker</h2>
      <p className="leading-relaxed">
        Use the CSS <code>list-style-type</code> property to define the style of the list item marker. Possible values:
      </p>
      <ul className="list-disc list-inside">
        <li><code>disc</code> - bullet (default)</li>
        <li><code>circle</code> - circle</li>
        <li><code>square</code> - square</li>
        <li><code>none</code> - no marker</li>
      </ul>

      {/* Examples */}
      <h3 className="text-xl font-semibold">Example - Disc</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<ul style="list-style-type:disc;">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>`}
      </pre>

      <h3 className="text-xl font-semibold">Example - Circle</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<ul style="list-style-type:circle;">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>`}
      </pre>

      <h3 className="text-xl font-semibold">Example - Square</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<ul style="list-style-type:square;">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>`}
      </pre>

      <h3 className="text-xl font-semibold">Example - None</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<ul style="list-style-type:none;">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>`}
      </pre>
    </div>
  );
};

export default HtmlUnorderedLists;
