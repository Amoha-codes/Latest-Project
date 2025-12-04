import React from "react";

const HtmlSymbols: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        HTML Symbols
      </h1>

      <p className="leading-relaxed">
        Symbols or letters that are not present on your keyboard can be added to HTML using entities.  
        You can use the entity name or entity number (decimal or hexadecimal) for the symbol.
      </p>

      <h2 className="text-2xl font-semibold">Example: Euro Sign</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        &lt;p&gt;I will display &amp;euro;&lt;/p&gt;{"\n"}
        &lt;p&gt;I will display &#8364;&lt;/p&gt;{"\n"}
        &lt;p&gt;I will display &#x20AC;&lt;/p&gt;
      </pre>
      <p className="leading-relaxed">
        Will display as: <br />
        I will display € <br />
        I will display € <br />
        I will display €
      </p>

      <h2 className="text-2xl font-semibold">Some HTML Symbol Entities</h2>
      <table className="table-auto border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 px-2 py-1">Char</th>
            <th className="border border-gray-400 px-2 py-1">Number</th>
            <th className="border border-gray-400 px-2 py-1">Entity</th>
            <th className="border border-gray-400 px-2 py-1">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 px-2 py-1">©</td>
            <td className="border border-gray-400 px-2 py-1">&#169;</td>
            <td className="border border-gray-400 px-2 py-1">&amp;copy;</td>
            <td className="border border-gray-400 px-2 py-1">COPYRIGHT</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-2 py-1">®</td>
            <td className="border border-gray-400 px-2 py-1">&#174;</td>
            <td className="border border-gray-400 px-2 py-1">&amp;reg;</td>
            <td className="border border-gray-400 px-2 py-1">REGISTERED TRADEMARK</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-2 py-1">€</td>
            <td className="border border-gray-400 px-2 py-1">&#8364;</td>
            <td className="border border-gray-400 px-2 py-1">&amp;euro;</td>
            <td className="border border-gray-400 px-2 py-1">EURO SIGN</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-2 py-1">™</td>
            <td className="border border-gray-400 px-2 py-1">&#8482;</td>
            <td className="border border-gray-400 px-2 py-1">&amp;trade;</td>
            <td className="border border-gray-400 px-2 py-1">TRADEMARK</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-2 py-1">←</td>
            <td className="border border-gray-400 px-2 py-1">&#8592;</td>
            <td className="border border-gray-400 px-2 py-1">&amp;larr;</td>
            <td className="border border-gray-400 px-2 py-1">LEFT ARROW</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-2 py-1">↑</td>
            <td className="border border-gray-400 px-2 py-1">&#8593;</td>
            <td className="border border-gray-400 px-2 py-1">&amp;uarr;</td>
            <td className="border border-gray-400 px-2 py-1">UP ARROW</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold">Some HTML Mathematical Entities</h2>
      <table className="table-auto border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 px-2 py-1">Char</th>
            <th className="border border-gray-400 px-2 py-1">Number</th>
            <th className="border border-gray-400 px-2 py-1">Entity</th>
            <th className="border border-gray-400 px-2 py-1">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 px-2 py-1">∀</td>
            <td className="border border-gray-400 px-2 py-1">&#8704;</td>
            <td className="border border-gray-400 px-2 py-1">&amp;forall;</td>
            <td className="border border-gray-400 px-2 py-1">For all</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-2 py-1">∂</td>
            <td className="border border-gray-400 px-2 py-1">&#8706;</td>
            <td className="border border-gray-400 px-2 py-1">&amp;part;</td>
            <td className="border border-gray-400 px-2 py-1">Partial differential</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-2 py-1">∃</td>
            <td className="border border-gray-400 px-2 py-1">&#8707;</td>
            <td className="border border-gray-400 px-2 py-1">&amp;exist;</td>
            <td className="border border-gray-400 px-2 py-1">There exists</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold">Some HTML Greek Letters Entities</h2>
      <table className="table-auto border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 px-2 py-1">Char</th>
            <th className="border border-gray-400 px-2 py-1">Number</th>
            <th className="border border-gray-400 px-2 py-1">Entity</th>
            <th className="border border-gray-400 px-2 py-1">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 px-2 py-1">Α</td>
            <td className="border border-gray-400 px-2 py-1">&#913;</td>
            <td className="border border-gray-400 px-2 py-1">&amp;Alpha;</td>
            <td className="border border-gray-400 px-2 py-1">GREEK ALPHA</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-2 py-1">Β</td>
            <td className="border border-gray-400 px-2 py-1">&#914;</td>
            <td className="border border-gray-400 px-2 py-1">&amp;Beta;</td>
            <td className="border border-gray-400 px-2 py-1">GREEK BETA</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-2 py-1">Γ</td>
            <td className="border border-gray-400 px-2 py-1">&#915;</td>
            <td className="border border-gray-400 px-2 py-1">&amp;Gamma;</td>
            <td className="border border-gray-400 px-2 py-1">GREEK GAMMA</td>
          </tr>
        </tbody>
      </table>

      <p className="leading-relaxed">
        More symbols include currency symbols, arrows, mathematical symbols, astrological symbols, musical symbols, dominoes, chess symbols, and many more.
      </p>
    </div>
  );
};

export default HtmlSymbols;
