import React from "react";

const HtmlLinks: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        HTML Links
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        Links are found in nearly all web pages. They allow users to navigate from page to page. 
        HTML links are created using the <code>&lt;a&gt;</code> tag.
      </p>

      {/* Basic Syntax */}
      <h2 className="text-2xl font-bold">HTML Links - Hyperlinks</h2>
      <p className="leading-relaxed">
        The <code>&lt;a&gt;</code> element defines a hyperlink. The <code>href</code> attribute specifies the URL of the page the link goes to.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<a href="https://www.w3schools.com/">Visit W3Schools.com!</a>`}
      </pre>

      {/* Link States */}
      <p className="leading-relaxed">
        By default, links appear as:
      </p>
      <ul className="list-disc ml-6 space-y-1">
        <li>Unvisited: underlined and blue</li>
        <li>Visited: underlined and purple</li>
        <li>Active: underlined and red</li>
      </ul>

      {/* Target attribute */}
      <h2 className="text-2xl font-bold">The target Attribute</h2>
      <p className="leading-relaxed">
        The <code>target</code> attribute specifies where to open the linked document:
      </p>
      <ul className="list-disc ml-6 space-y-1">
        <li><code>_self</code> - default, opens in the same window/tab</li>
        <li><code>_blank</code> - opens in a new window/tab</li>
        <li><code>_parent</code> - opens in the parent frame</li>
        <li><code>_top</code> - opens in the full body of the window</li>
      </ul>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<a href="https://www.w3schools.com/" target="_blank">Visit W3Schools!</a>`}
      </pre>

      {/* Absolute vs Relative URLs */}
      <h2 className="text-2xl font-bold">Absolute URLs vs Relative URLs</h2>
      <h3 className="text-xl font-semibold">Absolute URLs</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<a href="https://www.w3.org/">W3C</a>
<a href="https://www.google.com/">Google</a>`}
      </pre>
      <h3 className="text-xl font-semibold">Relative URLs</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<a href="html_images.asp">HTML Images</a>
<a href="/css/default.asp">CSS Tutorial</a>`}
      </pre>

      {/* Image as a Link */}
      <h2 className="text-2xl font-bold">Use an Image as a Link</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<a href="default.asp">
  <img src="smiley.gif" alt="HTML tutorial" style={{width:"42px", height:"42px"}} />
</a>`}
      </pre>

      {/* Email Link */}
      <h2 className="text-2xl font-bold">Link to an Email Address</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<a href="mailto:someone@example.com">Send email</a>`}
      </pre>

      {/* Button as a Link */}
      <h2 className="text-2xl font-bold">Button as a Link</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<button onClick={() => document.location='default.asp'}>HTML Tutorial</button>`}
      </pre>

      {/* Link Titles */}
      <h2 className="text-2xl font-bold">Link Titles</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<a href="https://www.w3schools.com/html/" title="Go to W3Schools HTML section">
  Visit our HTML Tutorial
</a>`}
      </pre>

      {/* Chapter Summary */}
      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-xl">
        <p className="leading-relaxed">
          ✅ Use <code>&lt;a&gt;</code> for links <br />
          ✅ Use <code>href</code> for the link destination <br />
          ✅ Use <code>target</code> to specify where to open the link <br />
          ✅ Use <code>&lt;img&gt;</code> inside <code>&lt;a&gt;</code> for image links <br />
          ✅ Use <code>mailto:</code> in <code>href</code> for email links
        </p>
      </div>
    </div>
  );
};

export default HtmlLinks;
