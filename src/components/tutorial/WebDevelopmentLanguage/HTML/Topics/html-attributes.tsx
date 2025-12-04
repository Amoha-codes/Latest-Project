import React from "react";

const HtmlAttributes: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">HTML - Attributes</h1>

      {/* Intro */}
      <p className="leading-relaxed">
        HTML attributes provide additional information about HTML elements. They
        help modify or describe how an element behaves, displays, or links to
        other resources.
      </p>

      {/* Attribute Key Points */}
      <h2 className="text-2xl font-bold">HTML Attributes</h2>
      <ul className="list-disc list-inside space-y-1 leading-relaxed">
        <li>All HTML elements can have attributes</li>
        <li>Attributes provide additional information about elements</li>
        <li>Attributes are always specified in the start tag</li>
        <li>Attributes usually come in name/value pairs like: <code>name="value"</code></li>
      </ul>

      {/* href Attribute */}
      <h2 className="text-2xl font-bold">The href Attribute</h2>
      <p className="leading-relaxed">
        The <code>&lt;a&gt;</code> tag defines a hyperlink. The <code>href</code> attribute
        specifies the URL of the page the link goes to:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`<a href="https://www.w3schools.com">Visit W3Schools</a>`}</pre>

      {/* src Attribute */}
      <h2 className="text-2xl font-bold">The src Attribute</h2>
      <p className="leading-relaxed">
        The <code>&lt;img&gt;</code> tag embeds an image in an HTML page. The
        <code> src </code>attribute specifies the path to the image:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`<img src="img_girl.jpg">`}</pre>

      <p className="leading-relaxed font-semibold">Two ways to specify image URLs:</p>
      <ul className="list-decimal list-inside space-y-1 leading-relaxed">
        <li>
          <strong>Absolute URL</strong> — links to an external image:
          <pre className="bg-gray-100 text-black p-2 rounded-md font-mono mt-1">{`src="https://www.w3schools.com/images/img_girl.jpg"`}</pre>
        </li>
        <li>
          <strong>Relative URL</strong> — links to an image stored within the website:
          <pre className="bg-gray-100 text-black p-2 rounded-md font-mono mt-1">{`src="img_girl.jpg"`}</pre>
        </li>
      </ul>

      <p className="leading-relaxed font-semibold">
        Tip: It is usually best to use relative URLs to avoid broken links when changing domains.
      </p>

      {/* width and height Attributes */}
      <h2 className="text-2xl font-bold">The width and height Attributes</h2>
      <p className="leading-relaxed">
        The <code>width</code> and <code>height</code> attributes specify the image size in pixels:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`<img src="img_girl.jpg" width="500" height="600">`}</pre>

      {/* alt Attribute */}
      <h2 className="text-2xl font-bold">The alt Attribute</h2>
      <p className="leading-relaxed">
        The required <code>alt</code> attribute specifies an alternate text if the image cannot be displayed:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`<img src="img_girl.jpg" alt="Girl with a jacket">`}</pre>

      {/* style Attribute */}
      <h2 className="text-2xl font-bold">The style Attribute</h2>
      <p className="leading-relaxed">
        The <code>style</code> attribute is used to add styles like colors, fonts, and sizes:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`<p style="color:red;">This is a red paragraph.</p>`}</pre>

      {/* lang Attribute */}
      <h2 className="text-2xl font-bold">The lang Attribute</h2>
      <p className="leading-relaxed">
        The <code>lang</code> attribute inside the <code>&lt;html&gt;</code> tag declares the language of the webpage:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`<!DOCTYPE html>
<html lang="en">
<body>
...
</body>
</html>`}</pre>

      <p className="leading-relaxed">
        Country codes can also be added for more specific localization:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`<!DOCTYPE html>
<html lang="en-US">
<body>
...
</body>
</html>`}</pre>

      {/* title Attribute */}
      <h2 className="text-2xl font-bold">The title Attribute</h2>
      <p className="leading-relaxed">
        The <code>title</code> attribute defines extra information about an element, shown as a tooltip:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`<p title="I'm a tooltip">This is a paragraph.</p>`}</pre>

      {/* Lowercase Attributes Recommendation */}
      <h2 className="text-2xl font-bold">We Suggest: Always Use Lowercase Attributes</h2>
      <p className="leading-relaxed">
        HTML does not require lowercase attribute names, but lowercase is recommended for readability and XHTML compatibility.
      </p>

      {/* Quoting Attribute Values */}
      <h2 className="text-2xl font-bold">We Suggest: Always Quote Attribute Values</h2>
      <p className="leading-relaxed">
        Although optional, quotes around attribute values prevent errors and improve consistency.
      </p>

      <p className="leading-relaxed font-semibold">Good:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`<a href="https://www.w3schools.com/html/">Visit our HTML tutorial</a>`}</pre>

      <p className="leading-relaxed font-semibold">Bad:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`<a href=https://www.w3schools.com/html/>Visit our HTML tutorial</a>`}</pre>

      {/* Chapter Summary */}
      <h2 className="text-2xl font-bold">Chapter Summary</h2>
      <ul className="list-disc list-inside space-y-1 leading-relaxed">
        <li>All HTML elements can have attributes</li>
        <li>The <code>href</code> attribute defines the link destination</li>
        <li>The <code>src</code> attribute specifies the image file path</li>
        <li>The <code>width</code> and <code>height</code> attributes specify image size</li>
        <li>The <code>alt</code> attribute provides alternative image text</li>
        <li>The <code>style</code> attribute adds styling to elements</li>
        <li>The <code>lang</code> attribute defines the page language</li>
        <li>The <code>title</code> attribute provides extra tooltip information</li>
      </ul>
    </div>
  );
};

export default HtmlAttributes;