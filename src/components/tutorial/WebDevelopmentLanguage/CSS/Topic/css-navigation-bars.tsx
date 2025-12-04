import React from "react";

const CssNavigationBars: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Navigation Bars
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        Navigation bars are one of the most important parts of a website.
        They help users navigate between different sections easily.
      </p>

      <p className="leading-relaxed">
        Navigation bars are typically created using HTML lists 
        (<code>&lt;ul&gt;</code> and <code>&lt;li&gt;</code>), and then styled 
        using CSS to look great.
      </p>

      <p className="leading-relaxed">
        Navigation bars are usually placed at the top or on the left side of a webpage.
      </p>

      {/* Navigation Bar = List of Links */}
      <h2 className="text-2xl font-bold">Navigation Bar = List of Links</h2>
      <p className="leading-relaxed">
        A navigation bar is simply a list of links. So using 
        <code>&lt;ul&gt;</code> and <code>&lt;li&gt;</code> tags makes perfect sense.
      </p>

      {/* Example HTML */}
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`<ul>
  <li><a href="default.asp">Home</a></li>
  <li><a href="news.asp">News</a></li>
  <li><a href="contact.asp">Contact</a></li>
  <li><a href="about.asp">About</a></li>
</ul>`}
      </pre>

      {/* Remove Default List Styling */}
      <h2 className="text-2xl font-bold">Remove List Styling</h2>
      <p className="leading-relaxed">
        Before styling the navigation menu, remove the browser's default list
        bullets, margin, and padding.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}`}
      </pre>

    </div>
  );
};

export default CssNavigationBars;
