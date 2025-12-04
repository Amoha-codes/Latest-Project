import React from "react";

const CStatements: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        C Programming – Statements
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        A computer program is a list of instructions that the computer executes
        step by step. In C, these instructions are called{" "}
        <span className="font-semibold">statements</span>.
      </p>

      <p className="leading-relaxed">
        The following C statement tells the compiler to print{" "}
        <code>"Hello World"</code> to the screen:
      </p>

      {/* Example */}
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
          <code>{`printf("Hello World!");`}</code>
        </pre>
      </div>

      <p className="leading-relaxed">
        It is important to end every statement with a semicolon <code>;</code>.  
        If you forget it, the compiler will throw an error:
      </p>

      {/* Error Example */}
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
          <code>{`printf("Hello World!")
error: expected ';' before 'return'`}</code>
        </pre>
      </div>

      {/* Many Statements */}
      <h2 className="text-2xl font-bold">Many Statements</h2>

      <p className="leading-relaxed">
        Most C programs contain many statements. These statements run one after
        another in the same order they are written:
      </p>

      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
          <code>{`printf("Hello World!");
printf("Have a good day!");
return 0;`}</code>
        </pre>
      </div>

      {/* Explanation */}
      <h2 className="text-2xl font-bold">Example Explained</h2>

      <ul className="list-disc list-inside space-y-2 leading-relaxed">
        <li>
          <code>printf("Hello World!");</code> — prints "Hello World!" to the
          screen.
        </li>
        <li>
          <code>printf("Have a good day!");</code> — prints "Have a good day!" to
          the screen.
        </li>
        <li>
          <code>return 0;</code> — ends the C program successfully.
        </li>
      </ul>

      <p className="leading-relaxed">
        These statements run in order, from top to bottom.
      </p>
    </div>
  );
};

export default CStatements;
