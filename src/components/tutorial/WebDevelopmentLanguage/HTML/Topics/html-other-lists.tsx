import React from "react";

const HtmlDescriptionLists: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">HTML - Description Lists</h1>

      {/* Intro */}
      <p className="leading-relaxed">
        HTML also supports description lists. A description list is a list of terms, with a description of each term.
      </p>

      {/* Description List */}
      <h2 className="text-2xl font-semibold">HTML Description Lists</h2>
      <p className="leading-relaxed">
        The <code>&lt;dl&gt;</code> tag defines the description list, the <code>&lt;dt&gt;</code> tag defines the term (name), and the <code>&lt;dd&gt;</code> tag describes each term.
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

      {/* Chapter Summary */}
      <h2 className="text-2xl font-semibold">Chapter Summary</h2>
      <ul className="list-disc list-inside">
        <li>Use <code>&lt;dl&gt;</code> to define a description list.</li>
        <li>Use <code>&lt;dt&gt;</code> to define the description term.</li>
        <li>Use <code>&lt;dd&gt;</code> to describe the term in a description list.</li>
      </ul>
    </div>
  );
};

export default HtmlDescriptionLists;
