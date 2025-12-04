import React from "react";

const HtmlHeadings: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">HTML - Headings</h1>

      {/* Intro */}
      <p className="leading-relaxed">
        HTML headings are titles or subtitles that you want to display on a
        webpage.
      </p>

      {/* Example Headings Output */}
      <h2 className="text-2xl font-bold">Example</h2>
      <div className="space-y-1">
        <h1 className="text-3xl font-bold">Heading 1</h1>
        <h2 className="text-2xl font-semibold">Heading 2</h2>
        <h3 className="text-xl font-semibold">Heading 3</h3>
        <h4 className="text-lg font-semibold">Heading 4</h4>
        <h5 className="font-semibold">Heading 5</h5>
        <h6 className="text-sm font-semibold">Heading 6</h6>
      </div>

      {/* HTML Headings Definition */}
      <h2 className="text-2xl font-bold">HTML Headings</h2>
      <p className="leading-relaxed">
        HTML headings are defined with the <code>&lt;h1&gt;</code> to
        <code> &lt;h6&gt;</code> tags.
      </p>
      <p className="leading-relaxed">
        <code>&lt;h1&gt;</code> defines the most important heading.
        <code> &lt;h6&gt;</code> defines the least important heading.
      </p>

      {/* Code Example */}
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono overflow-x-auto">
{`<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`}
      </pre>

      {/* Browser Spacing Note */}
      <p className="leading-relaxed italic">
        Note: Browsers automatically add some white space (a margin) before and
        after a heading.
      </p>

      {/* Importance of Headings */}
      <h2 className="text-2xl font-bold">Headings Are Important</h2>
      <p className="leading-relaxed">
        Search engines use headings to index the structure and content of your
        web pages.
      </p>
      <p className="leading-relaxed">
        Users often skim a page by its headings, so it is important to use
        headings to show the document structure.
      </p>
      <p className="leading-relaxed">
        <code>&lt;h1&gt;</code> headings should be used for main headings,
        followed by <code>&lt;h2&gt;</code> headings, then the less important
        <code> &lt;h3&gt;</code>, and so on.
      </p>

      {/* Structural Example */}
      <h3 className="text-xl font-semibold">For example:</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>
          <code>&lt;h1&gt;</code> - Page title
        </li>
        <li>
          <code>&lt;h2&gt;</code> - Section titles
        </li>
        <li>
          <code>&lt;h3&gt;</code> - Sub-sections
        </li>
      </ul>

      {/* Travel Guide Example */}
      <h2 className="text-2xl font-bold">Example</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono overflow-x-auto">
{`<h1>Travel Guide</h1>

<h2>Europe</h2>
<h3>France</h3>
<h3>Italy</h3>

<h2>Asia</h2>
<h3>India</h3>
<h3>Thailand</h3>`}
      </pre>
    </div>
  );
};

export default HtmlHeadings;
