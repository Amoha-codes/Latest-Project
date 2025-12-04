import React from "react";

const HTMLComments: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">HTML - Comments</h1>

      {/* Intro */}
      <p className="leading-relaxed">
        HTML comments are not displayed in the browser, but they help document
        your HTML source code for better readability and understanding.
      </p>

      {/* Comment Syntax */}
      <h2 className="text-2xl font-bold">HTML Comment Tag</h2>
      <p className="leading-relaxed">
        You can add comments in HTML using the following syntax:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <code>{`<!-- Write your comments here -->`}</code>
      </pre>

      <p className="leading-relaxed">
        Notice that there is an exclamation point <strong>(!)</strong> in the
        start tag, but not in the end tag.
      </p>

      <p className="leading-relaxed italic">
        Note: Comments are not visible in the browser, but they help document
        your HTML code.
      </p>

      {/* Adding Comments */}
      <h2 className="text-2xl font-bold">Add Comments</h2>
      <p className="leading-relaxed">
        Use comments to add notes, explanations, or reminders within your HTML
        code.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <code>{`<!-- This is a comment -->

<p>This is a paragraph.</p>

<!-- Remember to add more information here -->`}</code>
      </pre>

      {/* Hiding Content */}
      <h2 className="text-2xl font-bold">Hide Content</h2>
      <p className="leading-relaxed">
        Comments can temporarily hide HTML content without deleting it.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <code>{`<p>This is a paragraph.</p>

<!-- <p>This is another paragraph </p> -->

<p>This is a paragraph too.</p>`}</code>
      </pre>

      <p className="leading-relaxed">
        You can hide multiple lines at once. Everything between
        <code> &lt;!-- </code> and <code> --&gt; </code> will be ignored by the
        browser.
      </p>

      {/* Multiple Line Comment Example */}
      <h3 className="text-xl font-semibold">Example: Hide a Section of HTML Code</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <code>{`<p>This is a paragraph.</p>
<!--
<p>Look at this cool image:</p>
<img border="0" src="pic_trulli.jpg" alt="Trulli">
-->
<p>This is a paragraph too.</p>`}</code>
      </pre>

      {/* Summary */}
      <h2 className="text-2xl font-bold">Summary</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>Comments help explain and organize HTML code.</li>
        <li>They are not shown in the browser.</li>
        <li>Useful for debugging, clarification, and reminders.</li>
        <li>Can temporarily hide content without deleting it.</li>
      </ul>
    </div>
  );
};

export default HTMLComments;