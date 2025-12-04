import React from "react";

const HtmlStyleGuide: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        HTML Style Guide
      </h1>

      <p className="leading-relaxed">
        Consistent, clean, and tidy HTML code makes it easier for others to read and understand your code. Here are some guidelines and tips for creating good HTML code.
      </p>

      <h2 className="text-2xl font-semibold">Always Declare Document Type</h2>
      <p className="leading-relaxed">
        Always declare the document type as the first line in your document:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        &lt;!DOCTYPE html&gt;
      </pre>

      <h2 className="text-2xl font-semibold">Use Lowercase Element Names</h2>
      <p className="leading-relaxed">
        Lowercase element names look cleaner and are easier to type.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        Good: 
        {"\n"}&lt;body&gt;
        {"\n"}  &lt;p&gt;This is a paragraph.&lt;/p&gt;
        {"\n"}&lt;/body&gt;

        Bad: 
        {"\n"}&lt;BODY&gt;
        {"\n"}  &lt;P&gt;This is a paragraph.&lt;/P&gt;
        {"\n"}&lt;/BODY&gt;
      </pre>

      <h2 className="text-2xl font-semibold">Close All HTML Elements</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        Good:
        {"\n"}&lt;section&gt;
        {"\n"}  &lt;p&gt;This is a paragraph.&lt;/p&gt;
        {"\n"}  &lt;p&gt;This is a paragraph.&lt;/p&gt;
        {"\n"}&lt;/section&gt;

        Bad:
        {"\n"}&lt;section&gt;
        {"\n"}  &lt;p&gt;This is a paragraph.
        {"\n"}  &lt;p&gt;This is a paragraph.
        {"\n"}&lt;/section&gt;
      </pre>

      <h2 className="text-2xl font-semibold">Use Lowercase Attribute Names</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        Good:
        {"\n"}&lt;a href="https://www.w3schools.com/html/"&gt;Visit our HTML tutorial&lt;/a&gt;

        Bad:
        {"\n"}&lt;a HREF="https://www.w3schools.com/html/"&gt;Visit our HTML tutorial&lt;/a&gt;
      </pre>

      <h2 className="text-2xl font-semibold">Always Quote Attribute Values</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        Good:
        {"\n"}&lt;table class="striped"&gt;

        Bad:
        {"\n"}&lt;table class=striped&gt;

        Very bad:
        {"\n"}&lt;table class=table striped&gt;
      </pre>

      <h2 className="text-2xl font-semibold">Specify alt, width, and height for Images</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        Good:
        {"\n"}&lt;img src="html5.gif" alt="HTML5" style="width:128px;height:128px"&gt;

        Bad:
        {"\n"}&lt;img src="html5.gif"&gt;
      </pre>

      <h2 className="text-2xl font-semibold">Spaces and Equal Signs</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        Good:
        {"\n"}&lt;link rel="stylesheet" href="styles.css"&gt;

        Bad:
        {"\n"}&lt;link rel = "stylesheet" href = "styles.css"&gt;
      </pre>

      <h2 className="text-2xl font-semibold">Avoid Long Code Lines</h2>
      <p className="leading-relaxed">
        Break long lines for readability. Use blank lines and indentation (2 spaces recommended) for large or logical blocks.
      </p>

      <h2 className="text-2xl font-semibold">Good Table Example</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        &lt;table&gt;
        {"\n"}  &lt;tr&gt;
        {"\n"}    &lt;th&gt;Name&lt;/th&gt;
        {"\n"}    &lt;th&gt;Description&lt;/th&gt;
        {"\n"}  &lt;/tr&gt;
        {"\n"}  &lt;tr&gt;
        {"\n"}    &lt;td&gt;A&lt;/td&gt;
        {"\n"}    &lt;td&gt;Description of A&lt;/td&gt;
        {"\n"}  &lt;/tr&gt;
        {"\n"}&lt;/table&gt;
      </pre>

      <h2 className="text-2xl font-semibold">Good List Example</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        &lt;ul&gt;
        {"\n"}  &lt;li&gt;London&lt;/li&gt;
        {"\n"}  &lt;li&gt;Paris&lt;/li&gt;
        {"\n"}  &lt;li&gt;Tokyo&lt;/li&gt;
        {"\n"}&lt;/ul&gt;
      </pre>

      <h2 className="text-2xl font-semibold">Never Skip the &lt;title&gt; Element</h2>
      <p className="leading-relaxed">
        The <code>&lt;title&gt;</code> element is required for SEO, browser toolbar, and bookmarks:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        &lt;title&gt;HTML Style Guide and Coding Conventions&lt;/title&gt;
      </pre>

      <h2 className="text-2xl font-semibold">Add lang Attribute</h2>
      <p className="leading-relaxed">
        Always include the <code>lang</code> attribute in the <code>&lt;html&gt;</code> tag:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        &lt;html lang="en-us"&gt;
        {"\n"}  &lt;head&gt;
        {"\n"}    &lt;meta charset="UTF-8"&gt;
        {"\n"}    &lt;title&gt;Page Title&lt;/title&gt;
        {"\n"}  &lt;/head&gt;
        {"\n"}  &lt;body&gt;
        {"\n"}    &lt;h1&gt;This is a heading&lt;/h1&gt;
        {"\n"}    &lt;p&gt;This is a paragraph.&lt;/p&gt;
        {"\n"}  &lt;/body&gt;
        {"\n"}&lt;/html&gt;
      </pre>

      <h2 className="text-2xl font-semibold">Setting The Viewport</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
      </pre>

      <h2 className="text-2xl font-semibold">HTML Comments</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        Short comment:
        {"\n"}&lt;!-- This is a comment --&gt;

        Long comment:
        {"\n"}&lt;!--
        {"\n"}  This is a long comment example.
        {"\n"}  This is a long comment example.
        {"\n"}--&gt;
      </pre>

      <h2 className="text-2xl font-semibold">Linking Style Sheets</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        &lt;link rel="stylesheet" href="styles.css"&gt;
      </pre>

      <h2 className="text-2xl font-semibold">Loading JavaScript</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        &lt;script src="myscript.js"&gt;&lt;/script&gt;
      </pre>

      <h2 className="text-2xl font-semibold">Use Lowercase File Names</h2>
      <p className="leading-relaxed">
        Always use lowercase file names to avoid issues on case-sensitive servers.
      </p>

      <h2 className="text-2xl font-semibold">File Extensions</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>HTML: .html or .htm</li>
        <li>CSS: .css</li>
        <li>JavaScript: .js</li>
      </ul>

      <h2 className="text-2xl font-semibold">Default Filenames</h2>
      <p className="leading-relaxed">
        When a URL does not specify a filename, the server usually serves "index.html" or "default.html".
      </p>
    </div>
  );
};

export default HtmlStyleGuide;
