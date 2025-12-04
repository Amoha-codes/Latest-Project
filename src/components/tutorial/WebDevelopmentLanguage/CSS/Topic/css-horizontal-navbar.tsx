import React from "react";

const CssHorizontalNavbar: React.FC = () => {
  return (
    <div className="mt-20 space-y-10">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Horizontal Navigation Bar
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        A horizontal navigation bar displays links horizontally across the top
        of a webpage. It is built using an unordered list 
        (<code>&lt;ul&gt;</code>) with list items (<code>&lt;li&gt;</code>), 
        each containing a link (<code>&lt;a&gt;</code>).
      </p>

      <p className="leading-relaxed">
        It is common to wrap the navigation bar inside a 
        <code>&lt;nav&gt;</code> container.
      </p>

      {/* Horizontal Navbar Using Float */}
      <h2 className="text-2xl font-bold">Horizontal Navbar Using Float</h2>
      <p className="leading-relaxed">
        One way to create a horizontal navigation bar is to float the 
        <code>&lt;li&gt;</code> elements to the left.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`/* Horizontal navbar with float */
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;             
  background-color: #333333;    
}

ul li {
  float: left;                  
}

ul li a {
  display: block;               
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;        
}

ul li a:hover {
  background-color: #111111;
}`}
      </pre>

      <h2 className="text-xl font-semibold">Example Explained</h2>
      <ul className="list-disc pl-6 leading-relaxed">
        <li><code>overflow: hidden;</code> prevents floated items from overflowing.</li>
        <li><code>background-color</code> styles the navbar.</li>
        <li><code>float: left;</code> places the items horizontally.</li>
        <li><code>display: block;</code> allows padding and full clickable area.</li>
        <li><code>text-decoration: none;</code> removes underlines.</li>
      </ul>

      {/* Horizontal Navbar Using Flex */}
      <h2 className="text-2xl font-bold">Horizontal Navbar Using Flex</h2>
      <p className="leading-relaxed">
        Flexbox is the modern way to create a horizontal navbar, automatically 
        aligning elements from left to right.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`/* Horizontal navbar with flex */
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  background-color: #333333;
  display: flex;                
}

ul li a {
  display: block;
  color: white;
  padding: 14px 16px;
  text-decoration: none;
}

ul li a:hover {
  background-color: #111111;
}`}
      </pre>

      {/* Centered Navbar with Flex */}
      <h2 className="text-2xl font-bold">Centered Horizontal Navbar with Flex</h2>
      <p className="leading-relaxed">
        Add <code>justify-content: center;</code> to horizontally center the 
        navbar links.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  background-color: #333333;
  display: flex;
  justify-content: center;      
}`}
      </pre>

      {/* Active State */}
      <h2 className="text-2xl font-bold">Active State</h2>
      <p className="leading-relaxed">
        To highlight the current page, use an <code>.active</code> class.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`ul li a.active {
  background-color: #04AA6D;
}`}
      </pre>

      {/* Gray Horizontal Navbar */}
      <h2 className="text-2xl font-bold">Gray Horizontal Navbar</h2>
      <p className="leading-relaxed">
        This example demonstrates a gray navbar with a thin border.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  border: 1px solid #e7e7e7;
  background-color: #f3f3f3;
}`}
      </pre>

      {/* Right-align One Link */}
      <h2 className="text-2xl font-bold">Right-align One Link</h2>
      <p className="leading-relaxed">
        Float one or more <code>&lt;li&gt;</code> elements to the right.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`<ul>
  <li><a href="#home" class="active">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li style="float:right"><a href="#about">About</a></li>
</ul>`}
      </pre>

      {/* Border Dividers */}
      <h2 className="text-2xl font-bold">Border Dividers</h2>
      <p className="leading-relaxed">
        Add right borders to each list item to create dividers.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`ul li {
  float: left;
  border-right: 1px solid #bbbbbb;
}

ul li:last-child {
  border-right: none;
}`}
      </pre>

      {/* Fixed Navigation Bar */}
      <h2 className="text-2xl font-bold">Fixed Navigation Bar</h2>
      <p className="leading-relaxed">
        Use <code>position: fixed;</code> to stick the navbar to the top or bottom.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`/* Fixed Top */
ul {
  position: fixed;
  top: 0;
  width: 100%;
}

/* Fixed Bottom */
ul {
  position: fixed;
  bottom: 0;
  width: 100%;
}`}
      </pre>

      {/* Sticky Navbar */}
      <h2 className="text-2xl font-bold">Sticky Navigation Bar</h2>
      <p className="leading-relaxed">
        A sticky navbar is positioned normally until the user scrolls past it.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`ul {
  position: sticky;
  top: 0;
}`}
      </pre>

      <p className="leading-relaxed">
        Note: Sticky requires at least one offset like <code>top</code> or 
        <code>bottom</code>.
      </p>

    </div>
  );
};

export default CssHorizontalNavbar;
