import React from "react";

const HtmlBasicExamples: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">HTML Basic Examples</h1>

      {/* Intro */}
      <p className="leading-relaxed">
        In this chapter, we will explore some basic HTML examples. Don't worry
        if some tags are unfamiliar — you will learn them as you continue
        studying HTML.
      </p>

      {/* HTML Documents */}
      <h2 className="text-2xl font-bold">HTML Documents</h2>
      <p className="leading-relaxed">
        All HTML documents must start with a document type declaration:
        <code> &lt;!DOCTYPE html&gt;</code>.
      </p>
      <p className="leading-relaxed">
        The HTML document itself begins with <code>&lt;html&gt;</code> and ends
        with <code>&lt;/html&gt;</code>.
      </p>
      <p className="leading-relaxed">
        The visible part of the webpage is placed between
        <code> &lt;body&gt;</code> and <code>&lt;/body&gt;</code>.
      </p>

      {/* Example */}
      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`<!DOCTYPE html>
<html>
<body>

  <h1>My First Heading</h1>
  <p>My first paragraph.</p>

</body>
</html>`}
      </pre>

      {/* DOCTYPE Declaration */}
      <h2 className="text-2xl font-bold">The &lt;!DOCTYPE&gt; Declaration</h2>
      <p className="leading-relaxed">
        The <code>&lt;!DOCTYPE&gt;</code> declaration represents the document
        type and helps browsers display web pages correctly.
      </p>
      <ul className="list-disc list-inside space-y-1 leading-relaxed">
        <li>It must only appear once, at the top of the page</li>
        <li>It is not case sensitive</li>
        <li>The HTML5 declaration is:</li>
      </ul>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`<!DOCTYPE html>`}
      </pre>

      {/* Headings */}
      <h2 className="text-2xl font-bold">HTML Headings</h2>
      <p className="leading-relaxed">
        HTML headings are defined using the <code>&lt;h1&gt;</code> to
        <code>&lt;h6&gt;</code> tags. <code>&lt;h1&gt;</code> defines the most
        important heading, while <code>&lt;h6&gt;</code> defines the least
        important.
      </p>

      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>`}
      </pre>

      {/* Paragraphs */}
      <h2 className="text-2xl font-bold">HTML Paragraphs</h2>
      <p className="leading-relaxed">
        HTML paragraphs are defined using the <code>&lt;p&gt;</code> tag.
      </p>

      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`<p>This is a paragraph.</p>
<p>This is another paragraph.</p>`}
      </pre>

      {/* Links */}
      <h2 className="text-2xl font-bold">HTML Links</h2>
      <p className="leading-relaxed">
        HTML links are created using the <code>&lt;a&gt;</code> tag.
      </p>

      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`<a href="https://www.w3schools.com">This is a link</a>`}
      </pre>

      <p className="leading-relaxed">
        The link's destination is defined in the <code>href</code> attribute.
        Attributes provide additional information about HTML elements.
      </p>

      {/* Images */}
      <h2 className="text-2xl font-bold">HTML Images</h2>
      <p className="leading-relaxed">
        HTML images are displayed using the <code>&lt;img&gt;</code> tag. The
        source file, alternative text, width, and height are defined using
        attributes.
      </p>

      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`<img src="w3schools.jpg" alt="W3Schools.com" width="104" height="142">`}
      </pre>

      {/* Viewing HTML Source */}
      <h2 className="text-2xl font-bold">How to View HTML Source</h2>
      <p className="leading-relaxed">
        Have you ever looked at a website and wondered how it was built? You can
        easily view its HTML.
      </p>

      <p className="leading-relaxed font-semibold">View HTML Source Code:</p>
      <ul className="list-disc list-inside space-y-1 leading-relaxed">
        <li>Press <strong>CTRL + U</strong> on most browsers</li>
        <li>Right-click and choose <strong>View Page Source</strong></li>
      </ul>

      <p className="leading-relaxed font-semibold">Inspect an HTML Element:</p>
      <ul className="list-disc list-inside space-y-1 leading-relaxed">
        <li>Right-click an element and select <strong>Inspect</strong></li>
        <li>Check the HTML and CSS in the developer tools panel</li>
        <li>You can edit HTML or CSS temporarily to test changes</li>
      </ul>

      {/* Conclusion */}
      <p className="leading-relaxed">
        These examples introduce some of the most common HTML elements. As you
        continue learning, you will discover more powerful features of HTML.
      </p>
    </div>
  );
};

export default HtmlBasicExamples;