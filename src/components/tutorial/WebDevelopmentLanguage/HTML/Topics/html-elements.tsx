import React from "react";

const HtmlElements: React.FC = () => {
  const elementTable = [
    { start: "<h1>", content: "My First Heading", end: "</h1>" },
    { start: "<p>", content: "My first paragraph.", end: "</p>" },
    { start: "<br>", content: "none", end: "none" },
  ];

  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">HTML Elements</h1>

      <p className="leading-relaxed">
        An HTML element is defined by a start tag, some content, and an end tag.
      </p>

      <h2 className="text-2xl font-bold">HTML Elements</h2>
      <p className="leading-relaxed">
        The HTML element is everything from the start tag to the end tag:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <code>{`<tagname>Content goes here...</tagname>`}</code>
      </pre>

      <p className="leading-relaxed">Examples of some HTML elements:</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <code>{`<h1>My First Heading</h1>
<p>My first paragraph.</p>`}</code>
      </pre>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-400 text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Start tag</th>
              <th className="border px-4 py-2">Element content</th>
              <th className="border px-4 py-2">End tag</th>
            </tr>
          </thead>
          <tbody>
            {elementTable.map((row, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{row.start}</td>
                <td className="border px-4 py-2">{row.content}</td>
                <td className="border px-4 py-2">{row.end}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="leading-relaxed italic text-yellow-700 font-medium">
        Note: Some HTML elements have no content (like the &lt;br&gt; element). These
        elements are called empty elements. Empty elements do not have an end tag!
      </p>

      <h2 className="text-2xl font-bold">Nested HTML Elements</h2>
      <p className="leading-relaxed">
        HTML elements can be nested (this means that elements can contain other
        elements). All HTML documents consist of nested HTML elements.
      </p>
      <p className="leading-relaxed">
        The following example contains four HTML elements (&lt;html&gt;, &lt;body&gt;, &lt;h1&gt;
        and &lt;p&gt;):
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <code>{`<!DOCTYPE html>
<html>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>`}</code>
      </pre>

      <h2 className="text-2xl font-bold">Example Explained</h2>
      <p className="leading-relaxed">
        The &lt;html&gt; element is the root element and it defines the whole HTML
        document. It has a start tag &lt;html&gt; and an end tag &lt;/html&gt;.
      </p>
      <p className="leading-relaxed">
        Inside the &lt;html&gt; element there is a &lt;body&gt; element which defines the
        document's body. It has a start tag &lt;body&gt; and an end tag &lt;/body&gt;.
      </p>
      <p className="leading-relaxed">
        Inside the &lt;body&gt; element there are two other elements: &lt;h1&gt; and &lt;p&gt;.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <code>{`<h1>My First Heading</h1>
<p>My first paragraph.</p>`}</code>
      </pre>

      <p className="leading-relaxed">
        The &lt;h1&gt; element defines a heading, and the &lt;p&gt; element defines a
        paragraph.
      </p>

      <h2 className="text-2xl font-bold">Never Skip the End Tag</h2>
      <p className="leading-relaxed">
        Some HTML elements will display correctly, even if you forget the end
        tag:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <code>{`<html>
<body>

<p>This is a paragraph
<p>This is a paragraph

</body>
</html>`}</code>
      </pre>

      <p className="leading-relaxed font-semibold text-red-700">
        However, never rely on this! Unexpected results and errors may occur if
        you forget the end tag!
      </p>

      <h2 className="text-2xl font-bold">Empty HTML Elements</h2>
      <p className="leading-relaxed">
        HTML elements with no content are called empty elements. The &lt;br&gt; tag
        defines a line break, and is an empty element without a closing tag:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <code>{`<p>This is a <br> paragraph with a line break.</p>`}</code>
      </pre>

      <h2 className="text-2xl font-bold">HTML is Not Case Sensitive</h2>
      <p className="leading-relaxed">
        HTML tags are not case sensitive: &lt;P&gt; means the same as &lt;p&gt;. The HTML
        standard does not require lowercase tags, but W3C recommends lowercase in
        HTML, and demands lowercase for stricter document types like XHTML.
      </p>
    </div>
  );
};

export default HtmlElements;