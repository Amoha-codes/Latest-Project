import React from "react";

const HtmlPageTitle: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">HTML - Page Title</h1>

      {/* Intro */}
      <p className="leading-relaxed">
        Every web page should have a page title to describe the meaning of the page.
      </p>

      {/* The Title Element */}
      <h2 className="text-2xl font-semibold">The &lt;title&gt; Element</h2>
      <p className="leading-relaxed">
        The <code>&lt;title&gt;</code> element adds a title to your page:
      </p>

      {/* Example */}
      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<!DOCTYPE html>
<html>
<head>
  <title>HTML Tutorial</title>
</head>
<body>

The content of the document......

</body>
</html>`}
      </pre>

      <p className="leading-relaxed">
        The title is shown in the browser's title bar.
      </p>

      {/* Good Title */}
      <h2 className="text-2xl font-semibold">What is a Good Title?</h2>
      <p className="leading-relaxed">
        The title should describe the content and the meaning of the page. The page title is very important for 
        search engine optimization (SEO). The text is used by search engine algorithms to decide the order when listing pages in search results.
      </p>

      {/* Title Element Uses */}
      <h3 className="text-xl font-semibold">The &lt;title&gt; Element:</h3>
      <ul className="list-disc ml-6 leading-relaxed">
        <li>Defines a title in the browser toolbar</li>
        <li>Provides a title for the page when it is added to favorites</li>
        <li>Displays a title for the page in search engine results</li>
      </ul>
      <p className="leading-relaxed">
        So, try to make the title as accurate and meaningful as possible!
      </p>

      {/* Tag Description */}
      <h2 className="text-2xl font-semibold">HTML Title Tag</h2>
      <table className="table-auto border border-gray-300">
        <thead>
          <tr>
            <th className="border px-2 py-1">Tag</th>
            <th className="border px-2 py-1">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-2 py-1"><code>&lt;title&gt;</code></td>
            <td className="border px-2 py-1">Defines the title of the document</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HtmlPageTitle;
