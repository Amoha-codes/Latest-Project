import React from "react";

const HtmlIntroduction: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">HTML Introduction</h1>

      {/* Intro */}
      <p className="leading-relaxed">
        HTML is the standard markup language used for creating Web pages. It
        structures content on the web and tells the browser how to display text,
        images, links, and other media.
      </p>

      {/* What is HTML */}
      <h2 className="text-2xl font-bold">What is HTML?</h2>
      <ul className="list-disc list-inside space-y-1 leading-relaxed">
        <li><strong>HTML</strong> stands for <strong>Hyper Text Markup Language</strong></li>
        <li>It is the standard markup language for creating Web pages</li>
        <li>HTML describes the structure of a webpage</li>
        <li>HTML consists of a series of elements</li>
        <li>HTML elements tell the browser how to display content</li>
        <li>Elements label content like headings, paragraphs, links, and more</li>
      </ul>

      {/* Simple HTML Document */}
      <h2 className="text-2xl font-bold">A Simple HTML Document</h2>

      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
</head>
<body>

  <h1>My First Heading</h1>
  <p>My first paragraph.</p>

</body>
</html>`}
      </pre>

      {/* Example Explained */}
      <h2 className="text-2xl font-bold">Example Explained</h2>
      <ul className="list-disc list-inside space-y-1 leading-relaxed">
        <li>The <code>&lt;!DOCTYPE html&gt;</code> declaration defines that the document is HTML5</li>
        <li>The <code>&lt;html&gt;</code> element is the root element of an HTML page</li>
        <li>The <code>&lt;head&gt;</code> element contains meta information about the page</li>
        <li>The <code>&lt;title&gt;</code> element specifies the title shown in the browser tab</li>
        <li>The <code>&lt;body&gt;</code> element holds all visible content like headings, paragraphs, images, and links</li>
        <li>The <code>&lt;h1&gt;</code> element defines a top-level heading</li>
        <li>The <code>&lt;p&gt;</code> element defines a paragraph</li>
      </ul>

      {/* What is an HTML Element */}
      <h2 className="text-2xl font-bold">What is an HTML Element?</h2>
      <p className="leading-relaxed">
        An HTML element is defined by a start tag, some content, and an end tag:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`<tagname> Content goes here... </tagname>`}
      </pre>

      <p className="leading-relaxed">The entire structure—from start tag to end tag—is considered an HTML element:</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`<h1>My First Heading</h1>
<p>My first paragraph.</p>`}
      </pre>

      {/* Tag Structure Table */}
      <table className="w-full border border-gray-300 rounded-md">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-3 py-2 text-left">Start tag</th>
            <th className="border px-3 py-2 text-left">Element content</th>
            <th className="border px-3 py-2 text-left">End tag</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-3 py-2">&lt;h1&gt;</td>
            <td className="border px-3 py-2">My First Heading</td>
            <td className="border px-3 py-2">&lt;/h1&gt;</td>
          </tr>
          <tr>
            <td className="border px-3 py-2">&lt;p&gt;</td>
            <td className="border px-3 py-2">My first paragraph.</td>
            <td className="border px-3 py-2">&lt;/p&gt;</td>
          </tr>
          <tr>
            <td className="border px-3 py-2">&lt;br&gt;</td>
            <td className="border px-3 py-2">none</td>
            <td className="border px-3 py-2">none</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HtmlIntroduction;
