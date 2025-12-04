import React from "react";

const HtmlEntities: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        HTML Entities
      </h1>

      <p className="leading-relaxed">
        Reserved characters in HTML must be replaced with entities:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        &lt; (less than) = &amp;lt;{"\n"}
        &gt; (greater than) = &amp;gt;
      </pre>

      <h2 className="text-2xl font-semibold">HTML Character Entities</h2>
      <p className="leading-relaxed">
        Some characters are reserved in HTML. If you use the &lt; or &gt; signs in your HTML text, the browser might mix them with tags.
      </p>
      <p className="leading-relaxed">
        Entity names or entity numbers can be used to display reserved HTML characters:
      </p>

      <ul className="list-disc pl-5 space-y-1">
        <li>Entity names look like this: <code>&amp;entity_name;</code></li>
        <li>Entity numbers look like this: <code>&#12345;</code></li>
      </ul>

      <p className="leading-relaxed">
        To display a less than sign (&lt;), write <code>&amp;lt;</code> or <code>&#60;</code>.  
        Entity names are easier to remember than entity numbers.
      </p>

      <h2 className="text-2xl font-semibold">Non-breaking Space</h2>
      <p className="leading-relaxed">
        A commonly used HTML entity is the non-breaking space: <code>&amp;nbsp;</code>.  
        A non-breaking space is a space that will not break into a new line. Two words separated by a non-breaking space will stick together.  
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        Examples:{"\n"}
        § 10{"\n"}
        10 km/h{"\n"}
        10 PM
      </pre>

      <p className="leading-relaxed">
        It can also prevent browsers from truncating spaces in HTML pages.  
        If you write 10 spaces in your text, the browser will remove 9 of them. Using <code>&amp;nbsp;</code> preserves them.
      </p>

      <p className="leading-relaxed">
        The non-breaking hyphen (<code>&#8209;</code>) defines a hyphen (‑) that does not break into a new line.
      </p>

      <h2 className="text-2xl font-semibold">Some Useful HTML Character Entities</h2>
      <table className="table-auto border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 px-2 py-1">Result</th>
            <th className="border border-gray-400 px-2 py-1">Description</th>
            <th className="border border-gray-400 px-2 py-1">Name</th>
            <th className="border border-gray-400 px-2 py-1">Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 px-2 py-1">&nbsp;</td>
            <td className="border border-gray-400 px-2 py-1">non-breaking space</td>
            <td className="border border-gray-400 px-2 py-1">&amp;nbsp;</td>
            <td className="border border-gray-400 px-2 py-1">&#160;</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-2 py-1">&lt;</td>
            <td className="border border-gray-400 px-2 py-1">less than</td>
            <td className="border border-gray-400 px-2 py-1">&amp;lt;</td>
            <td className="border border-gray-400 px-2 py-1">&#60;</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-2 py-1">&gt;</td>
            <td className="border border-gray-400 px-2 py-1">greater than</td>
            <td className="border border-gray-400 px-2 py-1">&amp;gt;</td>
            <td className="border border-gray-400 px-2 py-1">&#62;</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-2 py-1">&amp;</td>
            <td className="border border-gray-400 px-2 py-1">ampersand</td>
            <td className="border border-gray-400 px-2 py-1">&amp;amp;</td>
            <td className="border border-gray-400 px-2 py-1">&#38;</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-2 py-1">"</td>
            <td className="border border-gray-400 px-2 py-1">double quotation mark</td>
            <td className="border border-gray-400 px-2 py-1">&amp;quot;</td>
            <td className="border border-gray-400 px-2 py-1">&#34;</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-2 py-1">'</td>
            <td className="border border-gray-400 px-2 py-1">single quotation mark</td>
            <td className="border border-gray-400 px-2 py-1">&amp;apos;</td>
            <td className="border border-gray-400 px-2 py-1">&#39;</td>
          </tr>
        </tbody>
      </table>

      <p className="leading-relaxed">
        <strong>Note:</strong> Entity names are case sensitive.
      </p>

      <h2 className="text-2xl font-semibold">Combining Diacritical Marks</h2>
      <p className="leading-relaxed">
        A diacritical mark is a "glyph" added to a letter, such as accents. They can be combined with characters to produce letters not in the encoding.
      </p>

      <table className="table-auto border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 px-2 py-1">Mark</th>
            <th className="border border-gray-400 px-2 py-1">Character</th>
            <th className="border border-gray-400 px-2 py-1">Construct</th>
            <th className="border border-gray-400 px-2 py-1">Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 px-2 py-1">̀</td>
            <td className="border border-gray-400 px-2 py-1">a</td>
            <td className="border border-gray-400 px-2 py-1">a&#768;</td>
            <td className="border border-gray-400 px-2 py-1">à</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-2 py-1">́</td>
            <td className="border border-gray-400 px-2 py-1">O</td>
            <td className="border border-gray-400 px-2 py-1">O&#769;</td>
            <td className="border border-gray-400 px-2 py-1">Ó</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-2 py-1">̂</td>
            <td className="border border-gray-400 px-2 py-1">a</td>
            <td className="border border-gray-400 px-2 py-1">a&#770;</td>
            <td className="border border-gray-400 px-2 py-1">â</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HtmlEntities;
