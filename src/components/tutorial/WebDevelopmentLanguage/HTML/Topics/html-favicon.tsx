import React from "react";

const HtmlFavicon: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">HTML - Favicon</h1>

      {/* Intro */}
      <p className="leading-relaxed">
        A favicon is a small image displayed next to the page title in the browser tab.
      </p>

      {/* How to Add */}
      <h2 className="text-2xl font-semibold">How To Add a Favicon in HTML</h2>
      <p className="leading-relaxed">
        You can use any image you like as your favicon. You can also create your own favicon 
        on sites like <a href="https://www.favicon.cc" target="_blank" className="text-blue-600 underline">favicon.cc</a>.
      </p>
      <p className="leading-relaxed">
        Tip: A favicon is a small image, so it should be simple with high contrast.
      </p>
      <p className="leading-relaxed">
        To add a favicon to your website, save your favicon image (commonly named 
        <code>favicon.ico</code>) in the root directory or in an <code>images</code> folder.
        Then, add a <code>&lt;link&gt;</code> element to your <code>index.html</code> file 
        after the <code>&lt;title&gt;</code> element.
      </p>

      {/* Example */}
      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<!DOCTYPE html>
<html>
<head>
  <title>My Page Title</title>
  <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
</head>
<body>
  <h1>This is a Heading</h1>
  <p>This is a paragraph.</p>
</body>
</html>`}
      </pre>

      <p className="leading-relaxed">
        Save the file and reload it in your browser. Your browser tab should now display your favicon image to the left of the page title.
      </p>

      {/* File Format Support */}
      <h2 className="text-2xl font-semibold">Favicon File Format Support</h2>
      <p className="leading-relaxed">The following table shows the file format support for a favicon image:</p>
      <table className="table-auto border border-gray-300">
        <thead>
          <tr>
            <th className="border px-2 py-1">Browser</th>
            <th className="border px-2 py-1">ICO</th>
            <th className="border px-2 py-1">PNG</th>
            <th className="border px-2 py-1">GIF</th>
            <th className="border px-2 py-1">JPEG</th>
            <th className="border px-2 py-1">SVG</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-2 py-1">Edge</td>
            <td className="border px-2 py-1">Yes</td>
            <td className="border px-2 py-1">Yes</td>
            <td className="border px-2 py-1">Yes</td>
            <td className="border px-2 py-1">Yes</td>
            <td className="border px-2 py-1">Yes</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">Chrome</td>
            <td className="border px-2 py-1">Yes</td>
            <td className="border px-2 py-1">Yes</td>
            <td className="border px-2 py-1">Yes</td>
            <td className="border px-2 py-1">Yes</td>
            <td className="border px-2 py-1">Yes</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">Firefox</td>
            <td className="border px-2 py-1">Yes</td>
            <td className="border px-2 py-1">Yes</td>
            <td className="border px-2 py-1">Yes</td>
            <td className="border px-2 py-1">Yes</td>
            <td className="border px-2 py-1">Yes</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">Opera</td>
            <td className="border px-2 py-1">Yes</td>
            <td className="border px-2 py-1">Yes</td>
            <td className="border px-2 py-1">Yes</td>
            <td className="border px-2 py-1">Yes</td>
            <td className="border px-2 py-1">Yes</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">Safari</td>
            <td className="border px-2 py-1">Yes</td>
            <td className="border px-2 py-1">Yes</td>
            <td className="border px-2 py-1">Yes</td>
            <td className="border px-2 py-1">Yes</td>
            <td className="border px-2 py-1">Yes</td>
          </tr>
        </tbody>
      </table>

      {/* Chapter Summary */}
      <h2 className="text-2xl font-semibold">Chapter Summary</h2>
      <p className="leading-relaxed">
        Use the HTML <code>&lt;link&gt;</code> element to insert a favicon.
      </p>
    </div>
  );
};

export default HtmlFavicon;
