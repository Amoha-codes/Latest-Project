import React from "react";

const HtmlTextFormatting: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        HTML - Text Formatting
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        HTML contains several elements used to format text and give it special
        meaning. These formatting elements help highlight importance, emphasis,
        style, deletions, insertions, and more.
      </p>

      {/* Basic Example */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Example</h2>
        <div className="border p-4 rounded-lg space-y-2">
          <p><b>This text is bold</b></p>
          <p><i>This text is italic</i></p>
          <p>This is <sub>subscript</sub> and <sup>superscript</sup></p>
        </div>
      </div>

      {/* Formatting List */}
      <h2 className="text-2xl font-bold">HTML Formatting Elements</h2>
      <ul className="list-disc ml-8 space-y-1">
        <li><b>&lt;b&gt;</b> - Bold text</li>
        <li><b>&lt;strong&gt;</b> - Important text</li>
        <li><b>&lt;i&gt;</b> - Italic text</li>
        <li><b>&lt;em&gt;</b> - Emphasized text</li>
        <li><b>&lt;mark&gt;</b> - Marked/highlighted text</li>
        <li><b>&lt;small&gt;</b> - Smaller text</li>
        <li><b>&lt;del&gt;</b> - Deleted text</li>
        <li><b>&lt;ins&gt;</b> - Inserted text</li>
        <li><b>&lt;sub&gt;</b> - Subscript text</li>
        <li><b>&lt;sup&gt;</b> - Superscript text</li>
      </ul>

      {/* Bold */}
      <h2 className="text-2xl font-bold">HTML &lt;b&gt; and &lt;strong&gt; Elements</h2>
      <p>The <b>&lt;b&gt;</b> tag makes text bold without extra importance.</p>

      <div className="border p-4 rounded-lg">
        <b>This text is bold</b>
      </div>

      <p>
        The <b>&lt;strong&gt;</b> tag defines text with strong importance and is
        usually displayed in bold.
      </p>

      <div className="border p-4 rounded-lg">
        <strong>This text is important!</strong>
      </div>

      {/* Italics */}
      <h2 className="text-2xl font-bold">HTML &lt;i&gt; and &lt;em&gt; Elements</h2>
      <p>
        The <b>&lt;i&gt;</b> tag defines text in an alternate voice or mood and is
        usually displayed in italic.
      </p>

      <div className="border p-4 rounded-lg">
        <i>This text is italic</i>
      </div>

      <p>
        The <b>&lt;em&gt;</b> tag defines emphasized text, and screen readers apply
        emphasis to it.
      </p>

      <div className="border p-4 rounded-lg">
        <em>This text is emphasized</em>
      </div>

      {/* Small */}
      <h2 className="text-2xl font-bold">HTML &lt;small&gt; Element</h2>
      <div className="border p-4 rounded-lg">
        <small>This is some smaller text.</small>
      </div>

      {/* Mark */}
      <h2 className="text-2xl font-bold">HTML &lt;mark&gt; Element</h2>
      <div className="border p-4 rounded-lg">
        <p>Do not forget to buy <mark>milk</mark> today.</p>
      </div>

      {/* Deleted */}
      <h2 className="text-2xl font-bold">HTML &lt;del&gt; Element</h2>
      <div className="border p-4 rounded-lg">
        <p>My favorite color is <del>blue</del> red.</p>
      </div>

      {/* Inserted */}
      <h2 className="text-2xl font-bold">HTML &lt;ins&gt; Element</h2>
      <div className="border p-4 rounded-lg">
        <p>My favorite color is <del>blue</del> <ins>red</ins>.</p>
      </div>

      {/* Subscript */}
      <h2 className="text-2xl font-bold">HTML &lt;sub&gt; Element</h2>
      <div className="border p-4 rounded-lg">
        <p>This is <sub>subscripted</sub> text.</p>
      </div>

      {/* Superscript */}
      <h2 className="text-2xl font-bold">HTML &lt;sup&gt; Element</h2>
      <div className="border p-4 rounded-lg">
        <p>This is <sup>superscripted</sup> text.</p>
      </div>
    </div>
  );
};

export default HtmlTextFormatting;
