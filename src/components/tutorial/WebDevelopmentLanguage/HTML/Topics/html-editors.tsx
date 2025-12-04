import React from "react";

const HtmlEditors: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">HTML Editors</h1>

      {/* Intro */}
      <p className="leading-relaxed">
        A simple text editor is all you need to learn HTML. While professional
        HTML editors exist, starting with a basic editor helps you understand
        how HTML works at its core.
      </p>

      {/* Learn Using Editors */}
      <h2 className="text-2xl font-bold">Learn HTML Using Notepad or TextEdit</h2>
      <p className="leading-relaxed">
        Web pages can be created and modified using advanced HTML editors.
        However, for beginners, we recommend using a simple text editor like
        <strong> Notepad (Windows)</strong> or <strong>TextEdit (Mac)</strong> to
        learn HTML fundamentals.
      </p>

      <p className="leading-relaxed">
        Using a simple editor helps you clearly understand how HTML structure
        and syntax work.
      </p>

      {/* Step 1 Windows */}
      <h2 className="text-2xl font-bold">Step 1: Open Notepad (PC)</h2>
      <p className="leading-relaxed font-semibold">Windows 8 or later:</p>
      <ul className="list-disc list-inside space-y-1 leading-relaxed">
        <li>Open the Start Screen</li>
        <li>Type <strong>Notepad</strong></li>
      </ul>

      <p className="leading-relaxed font-semibold">Windows 7 or earlier:</p>
      <ul className="list-disc list-inside space-y-1 leading-relaxed">
        <li>Go to Start &gt; Programs &gt; Accessories &gt; Notepad</li>
      </ul>

      {/* Step 1 Mac */}
      <h2 className="text-2xl font-bold">Step 1: Open TextEdit (Mac)</h2>
      <ul className="list-disc list-inside space-y-1 leading-relaxed">
        <li>Open Finder &gt; Applications &gt; TextEdit</li>
        <li>
          In Preferences &gt; Format — choose <strong>Plain Text</strong>
        </li>
        <li>
          Under Open and Save — enable "Display HTML files as HTML code instead
          of formatted text"
        </li>
        <li>Open a new document to begin writing code</li>
      </ul>

      {/* Step 2 */}
      <h2 className="text-2xl font-bold">Step 2: Write Some HTML</h2>
      <p className="leading-relaxed">
        Write or copy the following HTML code into Notepad or TextEdit:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`<!DOCTYPE html>
<html>
<body>

  <h1>My First Heading</h1>
  <p>My first paragraph.</p>

</body>
</html>`}
      </pre>

      {/* Step 3 */}
      <h2 className="text-2xl font-bold">Step 3: Save the HTML Page</h2>
      <ul className="list-disc list-inside space-y-1 leading-relaxed">
        <li>Select <strong>File &gt; Save As</strong> in Notepad or TextEdit</li>
        <li>Name your file <strong>"index.htm"</strong></li>
        <li>Set encoding to <strong>UTF-8</strong></li>
      </ul>

      <p className="leading-relaxed">
        Tip: You may also use the <strong>.html</strong> extension — both work
        the same.
      </p>

      {/* Step 4 */}
      <h2 className="text-2xl font-bold">Step 4: View the HTML Page in Your Browser</h2>
      <p className="leading-relaxed">
        Open the saved HTML file in any browser by double-clicking it or using
        right-click &gt; <strong>Open with</strong>.
      </p>

      {/* Online Editor */}
      <h2 className="text-2xl font-bold">W3Schools Online Editor — "Try it Yourself"</h2>
      <p className="leading-relaxed">
        You can also test HTML using an online editor. It displays results
        instantly and provides color coding, sharing options, and quick
        experimentation.
      </p>

      {/* Online Example */}
      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
</head>
<body>

  <h1>This is a Heading</h1>
  <p>This is a paragraph.</p>

</body>
</html>`}
      </pre>

      {/* Conclusion */}
      <p className="leading-relaxed">
        Whether you use a text editor or an online editor, practicing regularly
        will help you understand HTML faster and become confident in web
        development.
      </p>
    </div>
  );
};

export default HtmlEditors;