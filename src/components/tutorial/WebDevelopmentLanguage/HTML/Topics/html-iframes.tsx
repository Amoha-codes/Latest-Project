import React from "react";

const HtmlIframes: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">HTML - Iframes</h1>

      {/* Intro */}
      <p className="leading-relaxed">
        An HTML <code>&lt;iframe&gt;</code> is used to display a web page within a web page.
      </p>

      <h2 className="text-2xl font-semibold">HTML Iframe Syntax</h2>
      <p className="leading-relaxed">
        The <code>&lt;iframe&gt;</code> tag specifies an inline frame, used to embed another document within the current HTML document.
      </p>
      <p className="leading-relaxed">
        Syntax:
        <br />
        <code>&lt;iframe src="url" title="description"&gt;&lt;/iframe&gt;</code>
      </p>
      <p className="leading-relaxed">
        Tip: Always include a <code>title</code> attribute for accessibility.
      </p>

      <h2 className="text-2xl font-semibold">Iframe - Set Height and Width</h2>
      <p className="leading-relaxed">
        Use the <code>height</code> and <code>width</code> attributes or CSS to set the iframe size:
      </p>
      <iframe
        src="demo_iframe.htm"
        height={200}
        width={300}
        title="Iframe Example"
        className="border"
      ></iframe>
      <iframe
        src="demo_iframe.htm"
        style={{ height: "200px", width: "300px" }}
        title="Iframe Example"
        className="border"
      ></iframe>

      <h2 className="text-2xl font-semibold">Iframe - Remove the Border</h2>
      <p className="leading-relaxed">
        By default, iframes have a border. Use CSS <code>border</code> property to remove or style it:
      </p>
      <iframe
        src="demo_iframe.htm"
        style={{ border: "none" }}
        title="Iframe Example"
      ></iframe>
      <iframe
        src="demo_iframe.htm"
        style={{ border: "2px solid red" }}
        title="Iframe Example"
      ></iframe>

      <h2 className="text-2xl font-semibold">Iframe - Target for a Link</h2>
      <p className="leading-relaxed">
        An iframe can be used as the target frame for a link. The link's <code>target</code> attribute must match the iframe's <code>name</code>:
      </p>
      <iframe
        src="demo_iframe.htm"
        name="iframe_a"
        title="Iframe Example"
        style={{ border: "1px solid #ccc", width: "300px", height: "200px" }}
      ></iframe>
      <p className="mt-2">
        <a
          href="https://www.w3schools.com"
          target="iframe_a"
          className="text-blue-600 underline"
        >
          W3Schools.com
        </a>
      </p>

      <h2 className="text-2xl font-semibold">Chapter Summary</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>The <code>&lt;iframe&gt;</code> tag specifies an inline frame.</li>
        <li>The <code>src</code> attribute defines the URL of the page to embed.</li>
        <li>Always include a <code>title</code> attribute (for screen readers).</li>
        <li>The <code>height</code> and <code>width</code> attributes specify the size of the iframe.</li>
        <li>Use <code>border:none;</code> to remove the border around the iframe.</li>
      </ul>
    </div>
  );
};

export default HtmlIframes;
