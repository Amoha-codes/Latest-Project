import React from "react";

const PhpRegex: React.FC = () => {
  return (
    <div className="mt-20 space-y-10">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP Regular Expressions
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        A <strong>regular expression</strong> is a sequence of characters that forms a search pattern.
        It is used for text searching and text replacement operations.
      </p>

      {/* What is Regex */}
      <h2 className="text-2xl font-bold mt-6">What is a Regular Expression?</h2>

      <p>
        Regular expressions can be a single character or a more complex pattern.  
        In PHP, they are written inside delimiters:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`$exp = "/w3schools/i";`}
      </pre>

      <p>
        Here:
      </p>

      <ul className="list-disc ml-8 space-y-2">
        <li><code>/</code> — delimiter</li>
        <li><code>w3schools</code> — pattern</li>
        <li><code>i</code> — case-insensitive modifier</li>
      </ul>

      <p>
        You can use other delimiters like <code>#</code> or <code>~</code> if your pattern contains slashes.
      </p>

      {/* Regex Functions */}
      <h2 className="text-2xl font-bold mt-10">Regular Expression Functions</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-400 text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-3 py-2">Function</th>
              <th className="border px-3 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-3 py-2">preg_match()</td>
              <td className="border px-3 py-2">Returns 1 if the pattern is found, 0 if not</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">preg_match_all()</td>
              <td className="border px-3 py-2">Returns the number of matches found</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">preg_replace()</td>
              <td className="border px-3 py-2">Replaces matched patterns in a string</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* preg_match Example */}
      <h3 className="text-xl font-semibold mt-8">Using preg_match()</h3>

      <p>Example: Case-insensitive search for "w3schools".</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`$str = "Visit W3Schools";
$pattern = "/w3schools/i";
echo preg_match($pattern, $str);`}
      </pre>

      {/* preg_match_all Example */}
      <h3 className="text-xl font-semibold mt-8">Using preg_match_all()</h3>

      <p>
        Example: Count how many times "ain" appears in the string.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`$str = "The rain in SPAIN falls mainly on the plains.";
$pattern = "/ain/i";
echo preg_match_all($pattern, $str);`}
      </pre>

      {/* preg_replace Example */}
      <h3 className="text-xl font-semibold mt-8">Using preg_replace()</h3>

      <p>Example: Replace "Microsoft" with "W3Schools".</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`$str = "Visit Microsoft!";
$pattern = "/microsoft/i";
echo preg_replace($pattern, "W3Schools", $str);`}
      </pre>

      {/* Modifiers */}
      <h2 className="text-2xl font-bold mt-10">Regular Expression Modifiers</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-400 text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-3 py-2">Modifier</th>
              <th className="border px-3 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border px-3 py-2">i</td><td className="border px-3 py-2">Case-insensitive</td></tr>
            <tr><td className="border px-3 py-2">m</td><td className="border px-3 py-2">Multiline mode</td></tr>
            <tr><td className="border px-3 py-2">u</td><td className="border px-3 py-2">UTF-8 mode</td></tr>
          </tbody>
        </table>
      </div>

      {/* Patterns */}
      <h2 className="text-2xl font-bold mt-10">Regular Expression Patterns</h2>

      <p>Brackets define character ranges:</p>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-400 text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-3 py-2">Expression</th>
              <th className="border px-3 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border px-3 py-2">[abc]</td><td className="border px-3 py-2">Matches a, b, or c</td></tr>
            <tr><td className="border px-3 py-2">[^abc]</td><td className="border px-3 py-2">Any char except a, b, c</td></tr>
            <tr><td className="border px-3 py-2">[a-z]</td><td className="border px-3 py-2">Lowercase letters</td></tr>
            <tr><td className="border px-3 py-2">[A-Z]</td><td className="border px-3 py-2">Uppercase letters</td></tr>
            <tr><td className="border px-3 py-2">[0-9]</td><td className="border px-3 py-2">Digits</td></tr>
          </tbody>
        </table>
      </div>

      {/* Metacharacters */}
      <h2 className="text-2xl font-bold mt-10">Metacharacters</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-400 text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-3 py-2">Symbol</th>
              <th className="border px-3 py-2">Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border px-3 py-2">|</td><td className="border px-3 py-2">OR operator</td></tr>
            <tr><td className="border px-3 py-2">.</td><td className="border px-3 py-2">Any character</td></tr>
            <tr><td className="border px-3 py-2">^</td><td className="border px-3 py-2">Start of string</td></tr>
            <tr><td className="border px-3 py-2">$</td><td className="border px-3 py-2">End of string</td></tr>
            <tr><td className="border px-3 py-2">\d</td><td className="border px-3 py-2">Digit</td></tr>
            <tr><td className="border px-3 py-2">\s</td><td className="border px-3 py-2">Whitespace</td></tr>
            <tr><td className="border px-3 py-2">\w</td><td className="border px-3 py-2">Word character</td></tr>
            <tr><td className="border px-3 py-2">\b</td><td className="border px-3 py-2">Word boundary</td></tr>
          </tbody>
        </table>
      </div>

      {/* Quantifiers */}
      <h2 className="text-2xl font-bold mt-10">Quantifiers</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-400 text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-3 py-2">Quantifier</th>
              <th className="border px-3 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border px-3 py-2">n+</td><td className="border px-3 py-2">One or more n</td></tr>
            <tr><td className="border px-3 py-2">n*</td><td className="border px-3 py-2">Zero or more n</td></tr>
            <tr><td className="border px-3 py-2">n?</td><td className="border px-3 py-2">Zero or one n</td></tr>
            <tr><td className="border px-3 py-2">n{3}</td><td className="border px-3 py-2">Exactly 3 n's</td></tr>
            <tr><td className="border px-3 py-2">n{"2,5"}</td><td className="border px-3 py-2">Between 2 and 5 n's</td></tr>
            <tr><td className="border px-3 py-2">n{"3,"}</td><td className="border px-3 py-2">At least 3 n's</td></tr>
          </tbody>
        </table>
      </div>

      <p className="mt-4">
        To search for special characters, escape them with <code>\</code>.  
        Example to search for question marks:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`$pattern = '/\\?+/';`}
      </pre>

      {/* Grouping */}
      <h2 className="text-2xl font-bold mt-10">Grouping</h2>

      <p>Parentheses allow grouping and capturing inside patterns.</p>

      <h3 className="text-xl font-semibold mt-4">Example: Match "banana"</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`$str = "Apples and bananas.";
$pattern = "/ba(na){2}/i";
echo preg_match($pattern, $str);`}
      </pre>

    </div>
  );
};

export default PhpRegex;
