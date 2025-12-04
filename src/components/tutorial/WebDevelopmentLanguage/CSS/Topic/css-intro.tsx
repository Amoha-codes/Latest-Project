import React from "react";

const CssIntroduction: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Introduction
      </h1>

      {/* What is CSS */}
      <h2 className="text-2xl font-bold">What is CSS?</h2>
      <p className="leading-relaxed">
        CSS is the language we use to style a web page. It describes how HTML
        elements should be displayed on screen, paper, or in other types of
        media.
      </p>

      <ul className="list-disc list-inside space-y-1 leading-relaxed">
        <li>CSS stands for <strong>Cascading Style Sheets</strong></li>
        <li>
          CSS controls how HTML elements are displayed across different devices
          and formats
        </li>
        <li>CSS saves a lot of work by controlling layouts of multiple pages at once</li>
        <li>External stylesheets are stored in separate <code>.css</code> files</li>
      </ul>

      {/* Demo Section */}
      <h2 className="text-2xl font-bold">
        CSS Demo — One HTML Page, Multiple Styles!
      </h2>
      <p className="leading-relaxed">
        Below is an example showing one HTML page styled using four different
        stylesheets. Clicking links like <strong>Stylesheet 1</strong>,{" "}
        <strong>Stylesheet 2</strong>, <strong>Stylesheet 3</strong>, and{" "}
        <strong>Stylesheet 4</strong> would show how the same page looks with
        different CSS files applied.
      </p>

      {/* Placeholder Demo Links */}
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
          Stylesheet 1
        </button>
        <button className="px-4 py-2 bg-green-600 text-white rounded-md">
          Stylesheet 2
        </button>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-md">
          Stylesheet 3
        </button>
        <button className="px-4 py-2 bg-red-600 text-white rounded-md">
          Stylesheet 4
        </button>
      </div>

      {/* Why Use CSS */}
      <h2 className="text-2xl font-bold">Why Use CSS?</h2>
      <p className="leading-relaxed">
        CSS is used to define the appearance of web pages, including layout,
        colors, fonts, spacing, and responsiveness across different devices and
        screen sizes.
      </p>

      {/* CSS Example */}
      <h2 className="text-2xl font-bold">CSS Example</h2>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`body {
  background-color: lightblue;
}

h1 {
  color: white;
  text-align: center;
}

p {
  font-family: verdana;
  font-size: 20px;
}`}</pre>
    </div>
  );
};

export default CssIntroduction;
