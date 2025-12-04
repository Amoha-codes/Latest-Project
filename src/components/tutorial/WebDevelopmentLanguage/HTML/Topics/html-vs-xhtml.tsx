import React from "react";

const HtmlVsXhtml: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        HTML Versus XHTML
      </h1>

      <h2 className="text-2xl font-semibold">What is XHTML?</h2>
      <ul className="list-disc ml-6 leading-relaxed">
        <li>XHTML stands for EXtensible HyperText Markup Language</li>
        <li>XHTML is a stricter, more XML-based version of HTML</li>
        <li>XHTML is HTML defined as an XML application</li>
        <li>XHTML is supported by all major browsers</li>
      </ul>

      <h2 className="text-2xl font-semibold">Why XHTML?</h2>
      <p className="leading-relaxed">
        XML is a markup language where all documents must be marked up correctly (be "well-formed").  
        XHTML was developed to make HTML more extensible and flexible to work with other data formats (such as XML).  
        Browsers ignore errors in HTML pages and try to display the website even if there are markup errors.  
        XHTML enforces stricter error handling.
      </p>
      <p className="leading-relaxed">
        If you want to study XML, please read our XML Tutorial.
      </p>

      <h2 className="text-2xl font-semibold">The Most Important Differences from HTML</h2>
      <ul className="list-disc ml-6 leading-relaxed">
        <li>&lt;!DOCTYPE&gt; is mandatory</li>
        <li>The <code>xmlns</code> attribute in &lt;html&gt; is mandatory</li>
        <li>&lt;html&gt;, &lt;head&gt;, &lt;title&gt;, and &lt;body&gt; are mandatory</li>
        <li>Elements must always be properly nested</li>
        <li>Elements must always be closed</li>
        <li>Elements must always be in lowercase</li>
        <li>Attribute names must always be in lowercase</li>
        <li>Attribute values must always be quoted</li>
        <li>Attribute minimization is forbidden</li>
      </ul>

      <h2 className="text-2xl font-semibold">&lt;!DOCTYPE&gt; Is Mandatory</h2>
      <p className="leading-relaxed">
        An XHTML document must have an XHTML &lt;!DOCTYPE&gt; declaration.  
        The <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, <code>&lt;title&gt;</code>, and <code>&lt;body&gt;</code> elements must also be present.  
        The <code>xmlns</code> attribute in &lt;html&gt; must specify the XML namespace for the document.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN"
"http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>Title of document</title>
</head>
<body>

  some content here...

</body>
</html>`}
      </pre>

      <h2 className="text-2xl font-semibold">XHTML Elements Must be Properly Nested</h2>
      <p className="leading-relaxed"><strong>Correct:</strong> <code>&lt;b&gt;&lt;i&gt;Some text&lt;/i&gt;&lt;/b&gt;</code></p>
      <p className="leading-relaxed"><strong>Wrong:</strong> <code>&lt;b&gt;&lt;i&gt;Some text&lt;/b&gt;&lt;/i&gt;</code></p>

      <h2 className="text-2xl font-semibold">XHTML Elements Must Always be Closed</h2>
      <p className="leading-relaxed"><strong>Correct:</strong></p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<p>This is a paragraph</p>
<p>This is another paragraph</p>`}
      </pre>
      <p className="leading-relaxed"><strong>Wrong:</strong></p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<p>This is a paragraph
<p>This is another paragraph`}</pre>

      <h2 className="text-2xl font-semibold">XHTML Empty Elements Must Always be Closed</h2>
      <p className="leading-relaxed"><strong>Correct:</strong></p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`A break: <br />
A horizontal rule: <hr />
An image: <img src="happy.gif" alt="Happy face" />`}
      </pre>
      <p className="leading-relaxed"><strong>Wrong:</strong></p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`A break: <br>
A horizontal rule: <hr>
An image: <img src="happy.gif" alt="Happy face">`}
      </pre>

      <h2 className="text-2xl font-semibold">XHTML Elements Must be in Lowercase</h2>
      <p className="leading-relaxed"><strong>Correct:</strong></p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<body>
<p>This is a paragraph</p>
</body>`}
      </pre>
      <p className="leading-relaxed"><strong>Wrong:</strong></p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<BODY>
<P>This is a paragraph</P>
</BODY>`}
      </pre>

      <h2 className="text-2xl font-semibold">XHTML Attribute Names Must be in Lowercase</h2>
      <p className="leading-relaxed"><strong>Correct:</strong> <code>&lt;a href="https://www.w3schools.com/html/"&gt;Visit our HTML tutorial&lt;/a&gt;</code></p>
      <p className="leading-relaxed"><strong>Wrong:</strong> <code>&lt;a HREF="https://www.w3schools.com/html/"&gt;Visit our HTML tutorial&lt;/a&gt;</code></p>

      <h2 className="text-2xl font-semibold">XHTML Attribute Values Must be Quoted</h2>
      <p className="leading-relaxed"><strong>Correct:</strong> <code>&lt;a href="https://www.w3schools.com/html/"&gt;Visit our HTML tutorial&lt;/a&gt;</code></p>
      <p className="leading-relaxed"><strong>Wrong:</strong> <code>&lt;a href=https://www.w3schools.com/html/&gt;Visit our HTML tutorial&lt;/a&gt;</code></p>

      <h2 className="text-2xl font-semibold">XHTML Attribute Minimization is Forbidden</h2>
      <p className="leading-relaxed"><strong>Correct:</strong></p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<input type="checkbox" name="vehicle" value="car" checked="checked" />
<input type="text" name="lastname" disabled="disabled" />`}
      </pre>
      <p className="leading-relaxed"><strong>Wrong:</strong></p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<input type="checkbox" name="vehicle" value="car" checked />
<input type="text" name="lastname" disabled />`}
      </pre>
    </div>
  );
};

export default HtmlVsXhtml;
