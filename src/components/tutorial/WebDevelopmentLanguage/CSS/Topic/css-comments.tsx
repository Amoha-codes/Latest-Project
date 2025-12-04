import React from "react";

const CssComments: React.FC = () => {
  return (
      <div className="mt-20 space-y-8">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">CSS Comments</h1>

      <p className="text-base">
        CSS comments are used to explain your code and make it easier to edit
        later. They are ignored by browsers and do not affect the output.
      </p>

      <h2 className="text-2xl font-semibold">Single-Line Comment</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`/* This is a single-line comment */
p {
  color: red;
}`}
      </pre>

      <h2 className="text-2xl font-semibold">Comment Inside Code</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`p {
  color: red;  /* Set text color to red */
}`}
      </pre>

      <h2 className="text-2xl font-semibold">Comment in the Middle of a Value</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`p {
  color: /*red*/ blue;
}`}
      </pre>

      <h2 className="text-2xl font-semibold">Multi-Line Comment</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`/* This is
a multi-line
comment */

p {
  color: red;
}`}
      </pre>

      <h2 className="text-2xl font-semibold">HTML + CSS Comments Example</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<!DOCTYPE html>
<html>
<head>
<style>
p {
  color: red; /* Set text color to red */
}
</style>
</head>
<body>

<h2>My Heading</h2>

<!-- These paragraphs will be red -->
<p>Hello World!</p>
<p>This paragraph is styled with CSS.</p>
<p>HTML and CSS comments are not shown in the output.</p>

</body>
</html>`}
      </pre>
    </div>
  );
};

export default CssComments;
