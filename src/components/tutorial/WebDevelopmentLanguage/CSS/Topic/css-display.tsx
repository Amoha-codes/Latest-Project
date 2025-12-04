import React from "react";

const CssDisplayProperty: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS The Display Property
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <code>display</code> property is one of the most important CSS 
        properties for controlling layout. It defines whether an element is 
        treated as a block, inline, flex, grid, or hidden element.
      </p>

      <p className="leading-relaxed">
        Every HTML element has a default display type—usually 
        <code>block</code> or <code>inline</code>. You can change this default 
        behavior using the <code>display</code> property.
      </p>

      {/* Block-level Elements */}
      <h2 className="text-2xl font-bold">Block-level Elements</h2>
      <p className="leading-relaxed">
        A block-level element always starts on a new line and takes up the full 
        available width.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`<div>
<h1> to <h6>
<p>
<form>
<header>
<footer>
<section>`}
      </pre>

      {/* Inline Elements */}
      <h2 className="text-2xl font-bold">Inline Elements</h2>
      <p className="leading-relaxed">
        An inline element does not start on a new line and only takes as much 
        width as necessary.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`<span>
<a>
<img>`}
      </pre>

      {/* Common Display Values */}
      <h2 className="text-2xl font-bold">Common Display Values</h2>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`inline         → Displays an element inline
block          → Displays an element as a block
contents       → Makes container disappear, children move up
flex           → Block-level flex container
grid           → Block-level grid container
inline-block   → Inline element but allows width/height
none           → Element is hidden and takes no space`}
      </pre>

      {/* display:none */}
      <h2 className="text-2xl font-bold">CSS display: none;</h2>
      <p className="leading-relaxed">
        <code>display: none</code> hides the element completely—it takes no 
        space and is removed from normal flow.
      </p>

      {/* Show element example */}
      <h3 className="text-xl font-semibold">Show Hidden Element</h3>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`#panel {
  display: none;
}

function myFunction() {
  document.getElementById("panel").style.display = "block";
}`}
      </pre>

      {/* Toggle example */}
      <h3 className="text-xl font-semibold">Toggle Visibility</h3>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`#panel {
  display: none;
}

function myFunction() {
  var x = document.getElementById("panel");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}`}
      </pre>

      {/* Override Default Display */}
      <h2 className="text-2xl font-bold">Override Default Display Value</h2>
      <p className="leading-relaxed">
        You can change an element's default display type. For example, turning 
        list items into inline elements creates a horizontal menu.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`li {
  display: inline;
}`}
      </pre>

      <p className="leading-relaxed">
        Note: Changing an element’s display type does not change what type of 
        content it is allowed to contain.
      </p>

      <h3 className="text-xl font-semibold">Span as Block Element</h3>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`span {
  display: block;
}`}
      </pre>

      <h3 className="text-xl font-semibold">Anchor as Block Element</h3>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`a {
  display: block;
}`}
      </pre>

      {/* More Display Values */}
      <h2 className="text-2xl font-bold">More Display Examples</h2>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`p.ex1 { display: none; }
p.ex2 { display: inline; }
p.ex3 { display: block; }
p.ex4 { display: inline-block; }
p.ex5 { display: flex; }
p.ex6 { display: grid; }`}
      </pre>

      {/* display:none vs visibility:hidden */}
      <h2 className="text-2xl font-bold">display:none vs visibility:hidden</h2>

      <p className="leading-relaxed font-semibold">display: none</p>
      <p className="leading-relaxed">
        ❌ Hidden  
        ❌ Takes no space  
        ✔ Removes element from layout  
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`h1.hidden {
  display: none;
}`}
      </pre>

      <p className="leading-relaxed font-semibold">visibility: hidden</p>
      <p className="leading-relaxed">
        ❌ Hidden  
        ✔ Still takes space  
        ✔ Layout does not shift  
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`h1.hidden {
  visibility: hidden;
}`}
      </pre>

    </div>
  );
};

export default CssDisplayProperty;
