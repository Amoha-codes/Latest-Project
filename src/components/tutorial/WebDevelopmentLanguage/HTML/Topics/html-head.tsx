import React from "react";

const HtmlHead: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        HTML - The Head Element
      </h1>

      <p className="leading-relaxed">
        The HTML <code>&lt;head&gt;</code> element is a container for metadata and is placed between the <code>&lt;html&gt;</code> tag and the <code>&lt;body&gt;</code> tag. Metadata is not displayed on the page.
      </p>

      <h2 className="text-2xl font-semibold">The HTML &lt;title&gt; Element</h2>
      <p className="leading-relaxed">
        The <code>&lt;title&gt;</code> element defines the title of the document. It is shown in the browser's title bar or tab. The title is very important for SEO.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        {`<!DOCTYPE html>
<html>
<head>
  <title>A Meaningful Page Title</title>
</head>
<body>
The content of the document......
</body>
</html>`}
      </pre>

      <h2 className="text-2xl font-semibold">The HTML &lt;style&gt; Element</h2>
      <p className="leading-relaxed">
        The <code>&lt;style&gt;</code> element defines style information for a single HTML page.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        {`<style>
  body {background-color: powderblue;}
  h1 {color: red;}
  p {color: blue;}
</style>`}
      </pre>

      <h2 className="text-2xl font-semibold">The HTML &lt;link&gt; Element</h2>
      <p className="leading-relaxed">
        The <code>&lt;link&gt;</code> element defines a relationship between the document and an external resource. Most often used to link external stylesheets.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        {`<link rel="stylesheet" href="mystyle.css">`}
      </pre>

      <h2 className="text-2xl font-semibold">The HTML &lt;meta&gt; Element</h2>
      <p className="leading-relaxed">
        The <code>&lt;meta&gt;</code> element is used to specify character set, description, keywords, author, and viewport settings. Metadata is not displayed on the page.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        {`<meta charset="UTF-8">
<meta name="description" content="Free Web tutorials">
<meta name="keywords" content="HTML, CSS, JavaScript">
<meta name="author" content="John Doe">
<meta http-equiv="refresh" content="30">
<meta name="viewport" content="width=device-width, initial-scale=1.0">`}
      </pre>

      <h2 className="text-2xl font-semibold">Setting The Viewport</h2>
      <p className="leading-relaxed">
        The viewport is the visible area of a web page. Include the viewport meta tag to make your page responsive:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        {`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}
      </pre>

      <h2 className="text-2xl font-semibold">The HTML &lt;script&gt; Element</h2>
      <p className="leading-relaxed">
        The <code>&lt;script&gt;</code> element is used to define client-side JavaScripts.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        {`<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Hello JavaScript!";
}
</script>`}
      </pre>

      <h2 className="text-2xl font-semibold">The HTML &lt;base&gt; Element</h2>
      <p className="leading-relaxed">
        The <code>&lt;base&gt;</code> element specifies the base URL and/or target for all relative URLs in a page. Only one <code>&lt;base&gt;</code> tag is allowed per document.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        {`<head>
<base href="https://www.w3schools.com/" target="_blank">
</head>

<body>
<img src="images/stickman.gif" width="24" height="39" alt="Stickman">
<a href="tags/tag_base.asp">HTML base Tag</a>
</body>`}
      </pre>

      <h2 className="text-2xl font-semibold">Chapter Summary</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>The <code>&lt;head&gt;</code> element is a container for metadata.</li>
        <li>It is placed between <code>&lt;html&gt;</code> and <code>&lt;body&gt;</code>.</li>
        <li>The <code>&lt;title&gt;</code> element is required and defines the document title.</li>
        <li>The <code>&lt;style&gt;</code> element defines page-specific styles.</li>
        <li>The <code>&lt;link&gt;</code> element is used for external stylesheets.</li>
        <li>The <code>&lt;meta&gt;</code> element specifies charset, description, keywords, author, and viewport.</li>
        <li>The <code>&lt;script&gt;</code> element defines client-side JavaScripts.</li>
        <li>The <code>&lt;base&gt;</code> element specifies base URL and/or target for relative links.</li>
      </ul>
    </div>
  );
};

export default HtmlHead;
