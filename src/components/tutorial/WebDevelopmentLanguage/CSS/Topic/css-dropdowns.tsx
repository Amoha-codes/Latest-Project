import React from "react";

const CssDropdowns: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Dropdowns
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        CSS dropdowns allow you to show hidden content when a user{" "}
        <b>hovers</b> or <b>clicks</b> on an element.  
        A dropdown consists of a <b>trigger element</b> (like a button or div)
        and a <b>dropdown-content</b> element that becomes visible on interaction.
      </p>

      <p className="leading-relaxed">
        Dropdowns are commonly used in menus, toolbars, navigation bars,
        and image overlays.
      </p>

      {/* Section – Basic Dropdown */}
      <h2 className="text-2xl font-bold">Dropdown Box with Text</h2>

      <p className="leading-relaxed">
        This example displays a simple dropdown box when hovering over a
        <code> &lt;div&gt; </code>.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`.dropdown {
  position: relative;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 130px;
  box-shadow: 0px 8px 16px rgba(0,0,0,0.2);
  padding: 12px 16px;
}

.dropdown:hover .dropdown-content {
  display: block;
}`}
      </pre>

      <p className="leading-relaxed font-semibold">HTML:</p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`<div class="dropdown">Mouse over me!
  <div class="dropdown-content">Hello World!</div>
</div>`}
      </pre>

      <h3 className="text-xl font-semibold">Explanation</h3>
      <ul className="list-disc ml-6 space-y-2 leading-relaxed">
        <li><b>position: relative</b> keeps dropdown content aligned below the trigger.</li>
        <li>Dropdown content is hidden with <code>display: none</code>.</li>
        <li>Hovering over <code>.dropdown</code> makes content appear.</li>
        <li><b>box-shadow</b> makes the dropdown look like a floating card.</li>
      </ul>

      {/* Dropdown Menu */}
      <h2 className="text-2xl font-bold">CSS Dropdown Menu</h2>

      <p className="leading-relaxed">
        This menu appears when the user hovers over a button:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`.dropdown {
  position: relative;
}

.dropbtn {
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  border: none;
  cursor: pointer;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 200px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
}

.dropdown-content a {
  padding: 12px 16px;
  display: block;
  text-decoration: none;
  color: black;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}

.dropdown:hover .dropdown-content {
  display: block;
}`}
      </pre>

      {/* Right-aligned Dropdown */}
      <h2 className="text-2xl font-bold">CSS Right-Aligned Dropdown</h2>

      <p className="leading-relaxed">
        Add <code>right: 0;</code> inside <code>.dropdown-content</code> to align
        dropdown to the right side.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`.dropdown-content {
  right: 0;
}`}
      </pre>

      {/* Dropdown Image */}
      <h2 className="text-2xl font-bold">CSS Dropdown with Image</h2>

      <p className="leading-relaxed">
        You can also place images, text, or any HTML inside the dropdown:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`<div class="dropdown">
  <img src="image.jpg" width="200" />
  <div class="dropdown-content">
    <p>Beautiful Location: Cinque Terre</p>
  </div>
</div>`}
      </pre>

      {/* Navbar Dropdown */}
      <h2 className="text-2xl font-bold">CSS Dropdown in a Navigation Bar</h2>

      <p className="leading-relaxed">
        Dropdown menus are very common inside navigation bars. 
        You can style them the same way using hover.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`.navbar .dropdown:hover .dropdown-content {
  display: block;
}`}
      </pre>

      {/* Conclusion */}
      <h2 className="text-2xl font-bold">Conclusion</h2>

      <p className="leading-relaxed">
        CSS dropdowns are easy to create using <code>:hover</code>,{" "}
        <b>positioning</b>, and <b>hidden elements</b>.  
        They work for text, menus, images, and navigation bars.
      </p>

    </div>
  );
};

export default CssDropdowns;
