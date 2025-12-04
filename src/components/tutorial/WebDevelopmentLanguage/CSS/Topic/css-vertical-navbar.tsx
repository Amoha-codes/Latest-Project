import React from "react";

const CssVerticalNavbar: React.FC = () => {
  return (
    <div className="mt-20 space-y-10">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Vertical Navigation Bar
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        A vertical navigation bar stacks links vertically and is usually placed
        along the left or right side of a webpage.
      </p>

      <p className="leading-relaxed">
        It is built using an unordered list <code>&lt;ul&gt;</code> containing
        list items <code>&lt;li&gt;</code>, each with a link <code>&lt;a&gt;</code>.
      </p>

      {/* Basic Vertical Navbar Example */}
      <h2 className="text-2xl font-bold">CSS Vertical Navbar Example</h2>

      <p className="leading-relaxed">
        Here is a basic vertical navbar with a gray background, and hover effects
        for changing background and text color.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #f1f1f1;
}

li a {
  display: block;
  color: black;
  padding: 8px 16px;
  text-decoration: none;
}

/* Hover effect */
li a:hover {
  background-color: #555555;
  color: white;
}`}
      </pre>

      {/* Explanation */}
      <h2 className="text-2xl font-bold">Example Explained</h2>
      <ul className="list-disc pl-6 leading-relaxed">
        <li><b>&lt;ul&gt;</b> gets a fixed width and a light gray background.</li>
        <li>
          <b>li a</b> is styled as <code>display: block</code> so the entire row
          becomes clickable and allows padding, width, and height adjustments.
        </li>
        <li>Underlines are removed for the links, and padding is added.</li>
        <li>
          <b>li a:hover</b> adds a background and text color change when hovering.
        </li>
      </ul>

      {/* Active State */}
      <h2 className="text-2xl font-bold">Active State</h2>
      <p className="leading-relaxed">
        Use the <code>.active</code> class to highlight the current page link.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`.active {
  background-color: #04AA6D;
  color: white;
}`}
      </pre>

      {/* Center Navbar Links + Borders */}
      <h2 className="text-2xl font-bold">Center Navbar Links & Add Borders</h2>
      <p className="leading-relaxed">
        To center the navbar text, use <code>text-align: center</code>.  
        To add borders, apply them to <code>&lt;ul&gt;</code> or individual
        <code>&lt;li&gt;</code> elements.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`ul {
  border: 1px solid #555555;
}

li {
  text-align: center;
  border-bottom: 1px solid #555555;
}

li:last-child {
  border-bottom: none;
}`}
      </pre>

      {/* Full Height Vertical Navbar */}
      <h2 className="text-2xl font-bold">Full-height Vertical Navbar</h2>
      <p className="leading-relaxed">
        Create a full-height, sticky sidebar navigation that remains fixed while
        scrolling.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 130px;
  background-color: #f1f1f1;
  height: 100%;        /* Full height */
  position: fixed;      /* Sticks to the page */
  overflow: auto;       /* Scroll if content exceeds screen */
}`}
      </pre>

    </div>
  );
};

export default CssVerticalNavbar;
