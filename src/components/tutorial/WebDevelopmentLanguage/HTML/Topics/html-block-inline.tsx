import React from "react";

const HtmlBlockInlineElements: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">HTML - Block and Inline Elements</h1>

      {/* Intro */}
      <p className="leading-relaxed">
        Every HTML element has a default display value, depending on what type of element it is. The two most common display values are block and inline.
      </p>

      {/* Block-level Elements */}
      <h2 className="text-2xl font-semibold">Block-level Elements</h2>
      <p className="leading-relaxed">
        A block-level element always starts on a new line, and browsers automatically add some space (a margin) before and after the element. It takes up the full width available.
      </p>
      <p className="leading-relaxed">
        Two commonly used block elements are: <code>&lt;p&gt;</code> and <code>&lt;div&gt;</code>.
      </p>
      <p className="leading-relaxed">
        The <code>&lt;p&gt;</code> element defines a paragraph in an HTML document.  
        The <code>&lt;div&gt;</code> element defines a division or section in an HTML document.
      </p>
      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<p>Hello World</p>
<div>Hello World</div>`}
      </pre>

      <p className="leading-relaxed">
        Here are the block-level elements in HTML:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`<address><article><aside><blockquote><canvas><dd><div><dl><dt>
<fieldset><figcaption><figure><footer><form><h1>-<h6><header>
<hr><li><main><nav><noscript><ol><p><pre><section><table><tfoot>
<ul><video>`}
      </pre>

      {/* Inline Elements */}
      <h2 className="text-2xl font-semibold">Inline Elements</h2>
      <p className="leading-relaxed">
        An inline element does not start on a new line and only takes up as much width as necessary.
      </p>
      <p className="leading-relaxed">
        Example: This is a <code>&lt;span&gt;</code> element inside a paragraph.
      </p>
      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<span>Hello World</span>`}
      </pre>
    </div>
  );
};

export default HtmlBlockInlineElements;
