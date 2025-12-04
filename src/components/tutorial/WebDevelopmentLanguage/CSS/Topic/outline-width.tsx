import React from "react";

const CssOutlineWidth: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Outline Width
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <code>outline-width</code> property specifies the width of an element's outline. 
        It can take predefined values like <b>thin</b>, <b>medium</b>, <b>thick</b>, or a specific size in <b>px, pt, cm, em</b>, etc.
      </p>

      {/* Outline Width Values */}
      <ul className="list-disc ml-5 leading-relaxed">
        <li><b>thin</b> - typically 1px</li>
        <li><b>medium</b> - typically 3px</li>
        <li><b>thick</b> - typically 5px</li>
        <li>Custom size - e.g., 8px, 0.5em, etc.</li>
      </ul>

      {/* Example */}
      <h2 className="text-2xl font-bold">Example</h2>
      <p className="leading-relaxed">
        Demonstration of different outline widths:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`p {
  padding: 5px;
  outline-style: solid;
  outline-color: green;
}

p.ex1 {
  outline-width: thin;
}

p.ex2 {
  outline-width: medium;
}

p.ex3 {
  outline-width: thick;
}

p.ex4 {
  outline-width: 8px;`}
      </pre>

      <p className="leading-relaxed">
        The examples above show outlines ranging from thin to a specific pixel value. Adjust the width to make your element stand out as needed.
      </p>
    </div>
  );
};

export default CssOutlineWidth;
