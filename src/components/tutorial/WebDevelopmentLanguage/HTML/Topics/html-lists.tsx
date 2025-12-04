import React from "react";

const HtmlLists: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">HTML - Lists</h1>

      {/* Intro */}
      <p className="leading-relaxed">
        HTML lists allow web developers to group a set of related items.
      </p>

      {/* Unordered List */}
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

      {/* Ordered List */}
      <h2 className="text-2xl font-semibold">Ordered HTML List</h2>
      <p className="leading-relaxed">
        An ordered list starts with the <code>&lt;ol&gt;</code> tag. Each list item starts with the <code>&lt;li&gt;</code> tag. List items are marked with numbers by default.
      </p>
      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>`}
      </pre>

      {/* Description List */}
      <h2 className="text-2xl font-semibold">HTML Description Lists</h2>
      <p className="leading-relaxed">
        A description list is a list of terms, with a description for each term. Use <code>&lt;dl&gt;</code> for the list, <code>&lt;dt&gt;</code> for the term, and <code>&lt;dd&gt;</code> for the description.
      </p>
      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<dl>
  <dt>Coffee</dt>
  <dd>- black hot drink</dd>
  <dt>Milk</dt>
  <dd>- white cold drink</dd>
</dl>`}
      </pre>
    </div>
  );
};

export default HtmlLists;
