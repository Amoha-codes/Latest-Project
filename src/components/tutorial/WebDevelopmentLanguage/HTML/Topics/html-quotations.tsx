import React from "react";

const HtmlQuotationCitation: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        HTML - Quotation and Citation Elements
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        HTML provides several elements used for quotations, citations, defining
        abbreviations, contact information, and text direction. These elements
        help add meaning and proper formatting to text content.
      </p>

      {/* Example */}
      <h2 className="text-2xl font-bold">Example</h2>
      <div className="border p-4 rounded-lg space-y-2">
        <p>Here is a quote from WWF's website:</p>
        <blockquote>
          For 60 years, WWF has worked to help people and nature thrive. As the
          world's leading conservation organization, WWF works in nearly 100
          countries. At every level, we collaborate with people around the
          world to develop and deliver innovative solutions that protect
          communities, wildlife, and the places in which they live.
        </blockquote>
      </div>

      {/* List */}
      <h2 className="text-2xl font-bold">HTML Quotation & Citation Elements</h2>
      <ul className="list-disc ml-8 space-y-1">
        <li><b>&lt;blockquote&gt;</b> — Defines a quoted section</li>
        <li><b>&lt;q&gt;</b> — Defines a short inline quotation</li>
        <li><b>&lt;abbr&gt;</b> — Defines an abbreviation or acronym</li>
        <li><b>&lt;address&gt;</b> — Defines contact information</li>
        <li><b>&lt;cite&gt;</b> — Defines the title of a creative work</li>
        <li><b>&lt;bdo&gt;</b> — Overrides text direction</li>
      </ul>

      {/* Blockquote */}
      <h2 className="text-2xl font-bold">HTML &lt;blockquote&gt; for Quotations</h2>
      <p>
        The <b>&lt;blockquote&gt;</b> element is used to define extended
        quotations from another source. Browsers usually indent its content.
      </p>
      <div className="border p-4 rounded-lg">
        <p>Here is a quote from WWF's website:</p>
        <blockquote cite="http://www.worldwildlife.org/who/index.html">
          For 60 years, WWF has worked to help people and nature thrive...
        </blockquote>
      </div>

      {/* q */}
      <h2 className="text-2xl font-bold">HTML &lt;q&gt; for Short Quotations</h2>
      <p>
        The <b>&lt;q&gt;</b> tag defines a short, inline quotation. Browsers
        usually add quotation marks automatically.
      </p>
      <div className="border p-4 rounded-lg">
        <p>
          WWF's goal is to:{" "}
          <q>Build a future where people live in harmony with nature.</q>
        </p>
      </div>

      {/* abbr */}
      <h2 className="text-2xl font-bold">HTML &lt;abbr&gt; for Abbreviations</h2>
      <p>
        The <b>&lt;abbr&gt;</b> element marks abbreviations and acronyms. Using
        the <b>title</b> attribute provides full meaning on hover.
      </p>
      <div className="border p-4 rounded-lg">
        <p>
          The <abbr title="World Health Organization">WHO</abbr> was founded in
          1948.
        </p>
      </div>

      {/* address */}
      <h2 className="text-2xl font-bold">HTML &lt;address&gt; for Contact Information</h2>
      <p>
        The <b>&lt;address&gt;</b> element represents contact details like email,
        phone, or physical location.
      </p>
      <div className="border p-4 rounded-lg">
        <address>
          Written by John Doe.<br />
          Visit us at:<br />
          Example.com<br />
          Box 564, Disneyland<br />
          USA
        </address>
      </div>

      {/* cite */}
      <h2 className="text-2xl font-bold">HTML &lt;cite&gt; for Work Titles</h2>
      <p>
        The <b>&lt;cite&gt;</b> element defines the title of a creative work like
        books, movies, paintings, etc.
      </p>
      <div className="border p-4 rounded-lg">
        <p>
          <cite>The Scream</cite> by Edvard Munch. Painted in 1893.
        </p>
      </div>

      {/* bdo */}
      <h2 className="text-2xl font-bold">HTML &lt;bdo&gt; for Bi-Directional Override</h2>
      <p>
        The <b>&lt;bdo&gt;</b> element forces text direction—useful for
        right-to-left languages.
      </p>
      <div className="border p-4 rounded-lg">
        <bdo dir="rtl">This text will be written from right to left</bdo>
      </div>
    </div>
  );
};

export default HtmlQuotationCitation;
