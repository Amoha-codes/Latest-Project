import React from "react";

const CssHowToAdd: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">How To Add CSS</h1>

      {/* Intro */}
      <p className="leading-relaxed">
        When a browser reads a style sheet, it formats the HTML document based
        on the instructions in the CSS file. There are three main ways to insert
        CSS into a webpage:
      </p>

      <ul className="list-disc list-inside space-y-1 leading-relaxed">
        <li>External CSS</li>
        <li>Internal CSS</li>
        <li>Inline CSS</li>
      </ul>

      {/* External CSS */}
      <h2 className="text-2xl font-bold">External CSS</h2>
      <p className="leading-relaxed">
        An external style sheet allows you to change the look of an entire
        website using just one CSS file. Each HTML page must reference the CSS
        file inside the <code>&lt;link&gt;</code> tag in the{" "}
        <code>&lt;head&gt;</code> section.
      </p>

      <p className="leading-relaxed font-semibold">Example:</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="mystyle.css">
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>`}</pre>

      <p className="leading-relaxed">
        The external CSS file must be saved with a <strong>.css</strong>{" "}
        extension and should not contain HTML tags.
      </p>

      <p className="leading-relaxed font-semibold">
        Example: "mystyle.css" file:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`body {
  background-color: lightblue;
}

h1 {
  color: navy;
  margin-left: 20px;
}`}</pre>

      <p className="leading-relaxed font-semibold">
        Note: Do not add a space between value and unit.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`Incorrect: margin-left: 20 px;
Correct:   margin-left: 20px;`}</pre>

      {/* Internal CSS */}
      <h2 className="text-2xl font-bold">Internal CSS</h2>
      <p className="leading-relaxed">
        Internal CSS is used when a single HTML page needs a unique style. It is
        placed inside the <code>&lt;style&gt;</code> tag within the{" "}
        <code>&lt;head&gt;</code> section.
      </p>

      <p className="leading-relaxed font-semibold">Example:</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`<!DOCTYPE html>
<html>
<head>
<style>
body {
  background-color: linen;
}

h1 {
  color: maroon;
  margin-left: 40px;
}
</style>
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>`}</pre>

      {/* Inline CSS */}
      <h2 className="text-2xl font-bold">Inline CSS</h2>
      <p className="leading-relaxed">
        Inline CSS is used to apply a unique style to a single HTML element. It
        is written inside the <code>style</code> attribute of the element.
      </p>

      <p className="leading-relaxed font-semibold">Example:</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`<!DOCTYPE html>
<html>
<body>

<h1 style="color:blue;text-align:center;">This is a heading</h1>
<p style="color:red;">This is a paragraph.</p>

</body>
</html>`}</pre>

      <p className="leading-relaxed font-semibold">
        Tip: Inline styles should be avoided because they mix content with
        presentation.
      </p>

      {/* Multiple Style Sheets */}
      <h2 className="text-2xl font-bold">Multiple Style Sheets</h2>
      <p className="leading-relaxed">
        When multiple style sheets target the same element, the style from the
        last read style sheet will be used.
      </p>

      <p className="leading-relaxed">
        External sheet example for <code>&lt;h1&gt;</code>:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`h1 {
  color: navy;
}`}</pre>

      <p className="leading-relaxed">
        Internal sheet example for <code>&lt;h1&gt;</code>:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`h1 {
  color: orange;
}`}</pre>

      <p className="leading-relaxed font-semibold">If internal CSS comes after external CSS:</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`<head>
<link rel="stylesheet" href="mystyle.css">
<style>
h1 {
  color: orange;
}
</style>
</head>`}</pre>

      <p className="leading-relaxed">Result: <strong>color = orange</strong></p>

      <p className="leading-relaxed font-semibold">If internal CSS comes before external CSS:</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`<head>
<style>
h1 {
  color: orange;
}
</style>
<link rel="stylesheet" href="mystyle.css">
</head>`}</pre>

      <p className="leading-relaxed">Result: <strong>color = navy</strong></p>

      {/* Cascading Order */}
      <h2 className="text-2xl font-bold">Cascading Order</h2>
      <p className="leading-relaxed">
        When multiple styles are applied to an element, CSS uses the following
        priority order (highest to lowest):
      </p>

      <ol className="list-decimal list-inside space-y-1 leading-relaxed">
        <li>Inline styles</li>
        <li>Internal and external style sheets</li>
        <li>Browser default styles</li>
      </ol>

      <p className="leading-relaxed font-semibold">
        Inline styles override both internal and external CSS.
      </p>
    </div>
  );
};

export default CssHowToAdd;
