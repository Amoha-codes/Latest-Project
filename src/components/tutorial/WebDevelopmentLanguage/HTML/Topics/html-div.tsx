import React from "react";

const HtmlDivElement: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">HTML - Div Element</h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <code>&lt;div&gt;</code> element is used as a container for other HTML elements. By default, it is a block element, meaning it takes all available width and comes with line breaks before and after.
      </p>

      <h2 className="text-2xl font-semibold">Example - Basic Div</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`Lorem Ipsum <div>I am a div</div> dolor sit amet.`}
      </pre>
      <p className="leading-relaxed">
        Result:
      </p>
      <pre className="bg-gray-50 p-4 rounded overflow-x-auto">
{`Lorem Ipsum
I am a div
dolor sit amet.`}
      </pre>

      <h2 className="text-2xl font-semibold">&lt;div&gt; as a container</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<div>
  <h2>London</h2>
  <p>London is the capital city of England.</p>
  <p>London has over 9 million inhabitants.</p>
</div>`}
      </pre>

      <h2 className="text-2xl font-semibold">Center align a &lt;div&gt;</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<div style="width:300px; margin:auto;">
  <h2>London</h2>
  <p>London is the capital city of England.</p>
</div>`}
      </pre>

      <h2 className="text-2xl font-semibold">Multiple &lt;div&gt; elements</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<div>
  <h2>London</h2>
  <p>London is the capital city of England.</p>
  <p>London has over 9 million inhabitants.</p>
</div>

<div>
  <h2>Oslo</h2>
  <p>Oslo is the capital city of Norway.</p>
  <p>Oslo has over 700,000 inhabitants.</p>
</div>

<div>
  <h2>Rome</h2>
  <p>Rome is the capital city of Italy.</p>
  <p>Rome has over 4 million inhabitants.</p>
</div>`}
      </pre>

      <h2 className="text-2xl font-semibold">Aligning &lt;div&gt; elements side by side</h2>
      <p className="leading-relaxed">
        There are several ways to align <code>&lt;div&gt;</code> elements side by side:
      </p>

      <h3 className="text-xl font-semibold">Float</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`.mycontainer {
  width:100%;
  overflow:auto;
}
.mycontainer div {
  width:33%;
  float:left;
}`}
      </pre>

      <h3 className="text-xl font-semibold">Inline-block</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`div {
  width:30%;
  display:inline-block;
}`}
      </pre>

      <h3 className="text-xl font-semibold">Flex</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`.mycontainer {
  display:flex;
}
.mycontainer > div {
  width:33%;
}`}
      </pre>

      <h3 className="text-xl font-semibold">Grid</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`.grid-container {
  display:grid;
  grid-template-columns: 33% 33% 33%;
}`}
      </pre>

      <h2 className="text-2xl font-semibold">Exercise</h2>
      <p className="leading-relaxed">
        Consider the following code:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<div style='width:200px;margin:auto'>
  <h2>London</h2>
</div>`}
      </pre>
      <p className="leading-relaxed font-semibold">How will the DIV element be aligned?</p>
      <ul className="list-disc pl-5">
        <li>Left aligned</li>
        <li className="font-bold">Center aligned</li>
        <li>Right aligned</li>
      </ul>

      <h2 className="text-2xl font-semibold">HTML Tags</h2>
      <table className="border-collapse border border-black w-full">
        <thead>
          <tr>
            <th className="border border-black p-2">Tag</th>
            <th className="border border-black p-2">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black p-2">&lt;div&gt;</td>
            <td className="border border-black p-2">Defines a section in a document (block-level)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HtmlDivElement;
