import React from "react";

const HtmlParagraphs: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">HTML - Paragraphs</h1>

      {/* Intro */}
      <p className="leading-relaxed">
        A paragraph always starts on a new line, and is usually a block of text.
      </p>

      {/* What is HTML Paragraph */}
      <h2 className="text-2xl font-semibold">HTML Paragraphs</h2>
      <p className="leading-relaxed">
        The HTML <code>&lt;p&gt;</code> element defines a paragraph.
      </p>
      <p className="leading-relaxed">
        A paragraph always starts on a new line, and browsers automatically add some
        white space (a margin) before and after a paragraph.
      </p>

      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<p>This is a paragraph.</p>
<p>This is another paragraph.</p>`}
      </pre>

      {/* Display behavior */}
      <h2 className="text-2xl font-semibold">HTML Display</h2>
      <p className="leading-relaxed">
        You cannot be sure how HTML will be displayed. Large or small screens, and
        resized windows will create different results.
      </p>
      <p className="leading-relaxed">
        With HTML, you cannot change the display by adding extra spaces or extra
        lines in your HTML code. The browser will automatically remove any extra
        spaces and lines when the page is displayed:
      </p>

      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`<p>
This paragraph
contains a lot of lines
in the source code,
but the browser
ignores it.
</p>

<p>
This paragraph
contains         a lot of spaces
in the source         code,
but the        browser
ignores it.
</p>`}
      </pre>

      {/* Horizontal Rule */}
      <h2 className="text-2xl font-semibold">HTML Horizontal Rules</h2>
      <p className="leading-relaxed">
        The <code>&lt;hr&gt;</code> tag defines a thematic break in an HTML page, and is
        most often displayed as a horizontal rule.
      </p>
      <p className="leading-relaxed">
        The <code>&lt;hr&gt;</code> element is used to separate content (or define a
        change) in an HTML page:
      </p>

      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<h1>This is heading 1</h1>
<p>This is some text.</p>
<hr>
<h2>This is heading 2</h2>
<p>This is some other text.</p>
<hr>`}
      </pre>
      <p className="leading-relaxed">
        The <code>&lt;hr&gt;</code> tag is an empty tag, which means that it has no end tag.
      </p>

      {/* Line Break */}
      <h2 className="text-2xl font-semibold">HTML Line Breaks</h2>
      <p className="leading-relaxed">
        The HTML <code>&lt;br&gt;</code> element defines a line break.
      </p>
      <p className="leading-relaxed">
        Use <code>&lt;br&gt;</code> if you want a line break (a new line) without starting a
        new paragraph:
      </p>

      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<p>This is<br>a paragraph<br>with line breaks.</p>`}
      </pre>
      <p className="leading-relaxed">
        The <code>&lt;br&gt;</code> tag is an empty tag, which means that it has no end tag.
      </p>

      {/* The Poem Problem */}
      <h2 className="text-2xl font-semibold">The Poem Problem</h2>
      <p className="leading-relaxed">This poem will display on a single line:</p>

      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`<p>
  My Bonnie lies over the ocean.

  My Bonnie lies over the sea.

  My Bonnie lies over the ocean.

  Oh, bring back my Bonnie to me.
</p>`}
      </pre>

      {/* Solution */}
      <h2 className="text-2xl font-semibold">Solution - The HTML &lt;pre&gt; Element</h2>
      <p className="leading-relaxed">
        The HTML <code>&lt;pre&gt;</code> element defines preformatted text. The text inside a
        <code>&lt;pre&gt;</code> element is displayed in a fixed-width font (usually Courier),
        and it preserves both spaces and line breaks:
      </p>

      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`<pre>
  My Bonnie lies over the ocean.

  My Bonnie lies over the sea.

  My Bonnie lies over the ocean.

  Oh, bring back my Bonnie to me.
</pre>`}
      </pre>
    </div>
  );
};

export default HtmlParagraphs;