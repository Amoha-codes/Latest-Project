import React from "react";

const CSpecialCharacters: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        C - Strings: Special Characters
      </h1>

      <p className="leading-relaxed">
        Strings in C must be written within double quotes. Special characters like quotes can cause errors if used directly. To handle them, use the backslash (<code>\</code>) escape character.
      </p>

      {/* Escape Characters Table */}
      <h2 className="text-2xl font-bold">Escape Characters</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">Escape Character</th>
              <th className="p-2 border">Result</th>
              <th className="p-2 border">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border text-center">\'</td>
              <td className="p-2 border">'</td>
              <td className="p-2 border">Single quote</td>
            </tr>
            <tr>
              <td className="p-2 border text-center">\"</td>
              <td className="p-2 border">"</td>
              <td className="p-2 border">Double quote</td>
            </tr>
            <tr>
              <td className="p-2 border text-center">\\</td>
              <td className="p-2 border">\</td>
              <td className="p-2 border">Backslash</td>
            </tr>
            <tr>
              <td className="p-2 border text-center">\n</td>
              <td className="p-2 border">New Line</td>
              <td className="p-2 border">Moves to a new line</td>
            </tr>
            <tr>
              <td className="p-2 border text-center">\t</td>
              <td className="p-2 border">Tab</td>
              <td className="p-2 border">Inserts a tab space</td>
            </tr>
            <tr>
              <td className="p-2 border text-center">\0</td>
              <td className="p-2 border">Null</td>
              <td className="p-2 border">Null terminator for strings</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Examples */}
      <h2 className="text-2xl font-bold">Examples</h2>

      {/* Double Quotes */}
      <p className="leading-relaxed">Insert double quotes:</p>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`char txt[] = "We are the so-called \"Vikings\" from the north.";
printf("%s", txt);`}</pre>
      </div>

      {/* Single Quote */}
      <p className="leading-relaxed">Insert single quote:</p>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`char txt[] = "It\'s alright.";
printf("%s", txt);`}</pre>
      </div>

      {/* Backslash */}
      <p className="leading-relaxed">Insert a backslash:</p>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`char txt[] = "The character \\ is called backslash.";
printf("%s", txt);`}</pre>
      </div>

      {/* Newline and Tab */}
      <p className="leading-relaxed">New line and tab example:</p>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`printf("Hello\\nWorld!");  // Prints Hello in one line, World! in next line
printf("A\\tB");          // Prints A     B with a tab space`}</pre>
      </div>
    </div>
  );
};

export default CSpecialCharacters;
