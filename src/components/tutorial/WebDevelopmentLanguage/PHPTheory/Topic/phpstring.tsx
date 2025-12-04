import React from "react";

const PhpStrings: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP Strings
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        A string is a sequence of characters, like <code>"Hello world!"</code>.
      </p>

      <p className="leading-relaxed">
        In PHP, strings are wrapped in either **double quotes** or **single quotes**.
      </p>

      {/* Basic Example */}
      <h2 className="text-2xl font-bold">String Examples</h2>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black whitespace-pre-wrap">
{`echo "Hello";
echo 'Hello';`}
      </pre>

      <p className="leading-relaxed font-semibold">
        ⚠ Double quotes behave differently than single quotes!
      </p>

      {/* Double vs Single Quotes */}
      <h2 className="text-2xl font-bold">Double or Single Quotes?</h2>

      <p className="leading-relaxed">
        Double-quoted strings process variables and special characters.
      </p>

      <h3 className="text-xl font-semibold">Example — Double Quotes</h3>
      <p className="leading-relaxed">Variables inside double quotes get evaluated:</p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black whitespace-pre-wrap">
{`$x = "John";
echo "Hello $x";   // Outputs: Hello John`}
      </pre>

      <h3 className="text-xl font-semibold">Example — Single Quotes</h3>
      <p className="leading-relaxed">
        Single-quoted strings do <strong>not</strong> evaluate variables:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black whitespace-pre-wrap">
{`$x = "John";
echo 'Hello $x';   // Outputs: Hello $x`}
      </pre>

      {/* String Length */}
      <h2 className="text-2xl font-bold">String Length</h2>

      <p className="leading-relaxed">
        Use <code>strlen()</code> to return the length of a string.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black whitespace-pre-wrap">
{`echo strlen("Hello world!");   // Outputs: 12`}
      </pre>

      {/* Word Count */}
      <h2 className="text-2xl font-bold">Word Count</h2>

      <p className="leading-relaxed">
        The <code>str_word_count()</code> function counts the number of words in a string.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black whitespace-pre-wrap">
{`echo str_word_count("Hello world!");   // Outputs: 2`}
      </pre>

      {/* strpos */}
      <h2 className="text-2xl font-bold">Search Within a String</h2>

      <p className="leading-relaxed">
        Use <code>strpos()</code> to search for text inside a string.
      </p>

      <p className="leading-relaxed">
        It returns the **position** of the first match, or **FALSE** if not found.
      </p>

      <h3 className="text-xl font-semibold">Example</h3>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black whitespace-pre-wrap">
{`echo strpos("Hello world!", "world");   // Outputs: 6`}
      </pre>

    </div>
  );
};

export default PhpStrings;
