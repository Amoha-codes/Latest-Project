import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Introduction of Lexical Analysis ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction of Lexical Analysis
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 26 Aug, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Lexical analysis, also known as <strong>scanning</strong>, is the first phase of the 
      compiler. It reads the source program character by character from left to right and 
      groups them into meaningful sequences called <strong>tokens</strong>.
    </p>

    {/* What is a Token? */}
    <h2 className="text-3xl font-bold mt-8">What is a Token?</h2>
    <p className="leading-relaxed">
      A token is a sequence of characters that acts as a unit in the grammar of a programming 
      language.
    </p>

    {/* Categories of Tokens */}
    <h2 className="text-3xl font-bold mt-8">Categories of Tokens</h2>

    <ul className="list-disc ml-6 leading-relaxed space-y-1">
      <li>
        <strong>Keywords:</strong> Reserved words like <code>if</code>, <code>else</code>, 
        <code>for</code>. Cannot be used as identifiers.
      </li>
      <li>
        <strong>Identifiers:</strong> Names for variables, functions, arrays. Must begin with a 
        letter or underscore. Case-sensitive.
      </li>
      <li>
        <strong>Constants:</strong> Fixed values such as integers, floats, characters, and 
        strings.
      </li>
      <li>
        <strong>Operators:</strong> Symbols used to perform operations on operands.
      </li>
      <li>
        <strong>Special Symbols:</strong> <code>;</code>, <code>,</code>, <code>{}</code>, 
        <code>[]</code> used for structural meaning.
      </li>
    </ul>

    {/* What is a Lexeme */}
    <h2 className="text-3xl font-bold mt-8">What is a Lexeme?</h2>
    <p className="leading-relaxed">
      A lexeme is an actual string of characters that matches a token pattern.
    </p>

    <p className="bg-gray-400 p-4 rounded-lg text-sm shadow-inner">
      Example lexemes: "float", "abs_zero_Kelvin", "=", "-", "273", ";"
    </p>

    {/* Token Table */}
    <h2 className="text-3xl font-bold mt-8">Lexemes and Tokens Representation</h2>

    <table className="w-full border text-left text-sm">
      <thead className="bg-gray-400">
        <tr>
          <th className="border p-2">Lexeme</th>
          <th className="border p-2">Token</th>
          <th className="border p-2">Lexeme</th>
          <th className="border p-2">Token</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border p-2">while</td>
          <td className="border p-2">WHILE</td>
          <td className="border p-2">a</td>
          <td className="border p-2">IDENTIFIER</td>
        </tr>
        <tr>
          <td className="border p-2">(</td>
          <td className="border p-2">LPAREN</td>
          <td className="border p-2">=</td>
          <td className="border p-2">ASSIGNMENT</td>
        </tr>
        <tr>
          <td className="border p-2">a</td>
          <td className="border p-2">IDENTIFIER</td>
          <td className="border p-2">a</td>
          <td className="border p-2">IDENTIFIER</td>
        </tr>
        <tr>
          <td className="border p-2">&gt;=</td>
          <td className="border p-2">COMPARISON</td>
          <td className="border p-2">-</td>
          <td className="border p-2">ARITHMETIC</td>
        </tr>
        <tr>
          <td className="border p-2">b</td>
          <td className="border p-2">IDENTIFIER</td>
          <td className="border p-2">2</td>
          <td className="border p-2">INTEGER</td>
        </tr>
        <tr>
          <td className="border p-2">)</td>
          <td className="border p-2">RPAREN</td>
          <td className="border p-2">;</td>
          <td className="border p-2">SEMICOLON</td>
        </tr>
      </tbody>
    </table>

    {/* How Lexical Analyzer Works */}
    <h2 className="text-3xl font-bold mt-8">How Lexical Analyzer Works?</h2>

    <p className="leading-relaxed">
      Tokens are described using <strong>regular expressions</strong>. A lexical analyzer uses a 
      <strong>Deterministic Finite Automaton (DFA)</strong> to recognize tokens, where each 
      final state corresponds to a specific token type.
    </p>

    <p className="leading-relaxed">
      Errors are reported by providing the row and column number based on the input scanning.
    </p>

    {/* Token Example */}
    <h2 className="text-3xl font-bold mt-8">Example: Token Generation</h2>
    <p className="leading-relaxed">
      Input Statement: <code>a = b + c;</code>
    </p>
    <p className="bg-gray-400 p-4 rounded-lg text-sm shadow-inner">
      Output tokens: id = id + id ;
    </p>

    {/* Program Example */}
    <h2 className="text-3xl font-bold mt-8">Example Program Tokens</h2>

    <pre className="bg-gray-400 p-4 rounded-lg text-sm overflow-x-auto shadow-inner">
{`int main()
{
  int a, b;
  a = 10;
  return 0;
}`}
    </pre>

    <p className="leading-relaxed">Valid Tokens:</p>

    <p className="bg-gray-400 p-4 rounded-lg text-sm shadow-inner">
  {`'int' 'main' '(' ')' '{' 'int' 'a' ',' 'b' ';' 'a' '=' '10' ';' 'return' '0' ';' '}'`}
</p>


    {/* Exercises */}
    <h2 className="text-3xl font-bold mt-8">Exercise 1: Count Tokens</h2>

    <pre className="bg-gray-400 p-4 rounded-lg text-sm shadow-inner">
{`int main()
{
  int a = 10, b = 20;
  printf("sum is:%d",a+b);
  return 0;
}`}
    </pre>

    <p className="leading-relaxed font-semibold">Answer: Total tokens = 27</p>

    <h2 className="text-3xl font-bold mt-8">Exercise 2: Count Tokens</h2>

    <pre className="bg-gray-400 p-4 rounded-lg text-sm shadow-inner">
{`int max(int i);`}
    </pre>

    <p className="leading-relaxed font-semibold">
      Answer: Total tokens = 7 → int, max, (, int, i, ), ;
    </p>

  </div>
);

export default Home;
