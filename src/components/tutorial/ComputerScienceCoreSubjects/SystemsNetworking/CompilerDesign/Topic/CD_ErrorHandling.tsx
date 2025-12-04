import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Error Handling in Compiler Design ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Error Handling in Compiler Design
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 27 Aug, 2025</p>

    {/* Intro */}
    <p className="text-lg leading-relaxed">
      During the process of language translation, a compiler can encounter various errors. 
      While the compiler may not always know the exact cause of an error, it can detect 
      visible issues and report them to the programmer. The main goal of error handling 
      is to identify, report, and recover from errors efficiently.
    </p>

    <p className="leading-relaxed font-semibold">
      Error Handler = Error Detection + Error Reporting + Error Recovery
    </p>

    {/* Sources of Error */}
    <h2 className="text-3xl font-bold mt-8">Sources of Error in Compiler Design</h2>

    <p className="leading-relaxed">
      Errors can occur at any stage of compilation, although most are detected by the parser. 
      A common source of error is blank or incorrect entries in the symbol table.
      When an error is found, the parser should detect it, report it, and continue processing 
      the remaining input without major performance loss.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Types of Errors</h3>

    <ol className="list-decimal ml-6 leading-relaxed">
      <li>
        <strong>Run-Time Errors</strong>
        <p className="ml-4 mt-2">
          These occur while the program is executing. Common causes include:
        </p>
        <ul className="list-disc ml-10">
          <li>Lack of memory to run the program</li>
          <li>Memory conflicts with other programs</li>
          <li>Logical errors causing incorrect output</li>
        </ul>
      </li>

      <li className="mt-4">
        <strong>Compile-Time Errors</strong>
        <p className="ml-4 mt-2">
          These errors occur during compilation and prevent the program from being 
          successfully compiled. Examples include:
        </p>
        <ul className="list-disc ml-10">
          <li>Syntax errors such as missing semicolons</li>
          <li>Missing file references</li>
        </ul>
      </li>
    </ol>

    {/* Finding Errors */}
    <h2 className="text-3xl font-bold mt-8">Finding and Reporting Errors</h2>

    <p className="leading-relaxed">
      The concept of a <strong>viable-prefix</strong> allows early detection of syntax errors.
      An error is reported as soon as the prefix of an input does not match any prefix 
      of a valid string in the language.
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Example: <code>for(;)</code> will immediately report an error because the loop 
      contains two semicolons without a proper condition.
    </p>

    {/* Error Recovery */}
    <h2 className="text-3xl font-bold mt-8">Error Recovery</h2>

    <p className="leading-relaxed">
      Error recovery ensures the compiler continues processing instead of stopping 
      at the first error. Common recovery strategies include:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Panic Mode Recovery</strong> – Skips invalid input until a synchronizing 
        token is found and resumes parsing.
      </li>
      <li>
        <strong>Phase-Level Recovery</strong> – Replaces small erroneous segments 
        with corrected versions.
      </li>
      <li>
        <strong>Error Productions</strong> – Uses grammar rules to detect common 
        errors and offer specific suggestions.
      </li>
      <li>
        <strong>Global Correction</strong> – Makes minimal changes to transform an 
        incorrect program into a valid one.
      </li>
    </ul>

  </div>
);

export default Home;
