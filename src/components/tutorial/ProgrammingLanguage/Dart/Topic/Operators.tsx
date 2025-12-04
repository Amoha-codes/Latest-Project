import React from "react";

const DartOperators: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        Dart Programming – Operators
      </h1>

      <p className="leading-relaxed">
        An expression is a statement that evaluates to a value. Every
        expression contains:
        <br />• <b>Operands</b> – The data being processed
        <br />• <b>Operators</b> – Symbols that define how operands are
        processed
      </p>

      <p className="leading-relaxed">
        Example: In <b>2 + 3</b>, the numbers are operands and <b>+</b> is the
        operator.
      </p>

      {/* Sections */}
      <h2 className="text-2xl font-bold">Types of Operators</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>Arithmetic Operators</li>
        <li>Equality & Relational Operators</li>
        <li>Type Test Operators</li>
        <li>Bitwise Operators</li>
        <li>Assignment Operators</li>
        <li>Logical Operators</li>
        <li>Conditional Expressions</li>
      </ul>

      {/* Arithmetic */}
      <h2 className="text-2xl font-bold border-b pb-1">Arithmetic Operators</h2>
      <table className="w-full border">
        <tbody>
          <tr><td className="p-2 border">+</td><td className="p-2 border">Add</td></tr>
          <tr><td className="p-2 border">−</td><td className="p-2 border">Subtract</td></tr>
          <tr><td className="p-2 border">-expr</td><td className="p-2 border">Unary minus (negation)</td></tr>
          <tr><td className="p-2 border">*</td><td className="p-2 border">Multiply</td></tr>
          <tr><td className="p-2 border">/</td><td className="p-2 border">Divide</td></tr>
          <tr><td className="p-2 border">~/</td><td className="p-2 border">Integer division</td></tr>
          <tr><td className="p-2 border">%</td><td className="p-2 border">Modulo</td></tr>
          <tr><td className="p-2 border">++</td><td className="p-2 border">Increment</td></tr>
          <tr><td className="p-2 border">--</td><td className="p-2 border">Decrement</td></tr>
        </tbody>
      </table>

      {/* Relational */}
      <h2 className="text-2xl font-bold border-b pb-1">
        Equality & Relational Operators
      </h2>
      <p className="leading-relaxed">
        These operators compare two values and return a Boolean (true/false).
      </p>

      <table className="w-full border">
        <tbody>
          <tr><td className="p-2 border">&gt;</td><td className="p-2 border">Greater than</td></tr>
          <tr><td className="p-2 border">&lt;</td><td className="p-2 border">Less than</td></tr>
          <tr><td className="p-2 border">&gt;=</td><td className="p-2 border">Greater or equal</td></tr>
          <tr><td className="p-2 border">&lt;=</td><td className="p-2 border">Less or equal</td></tr>
          <tr><td className="p-2 border">==</td><td className="p-2 border">Equal</td></tr>
          <tr><td className="p-2 border">!=</td><td className="p-2 border">Not equal</td></tr>
        </tbody>
      </table>

      {/* Type Test */}
      <h2 className="text-2xl font-bold border-b pb-1">Type Test Operators</h2>
      <table className="w-full border">
        <tbody>
          <tr><td className="p-2 border">is</td><td className="p-2 border">True if object is of the type</td></tr>
          <tr><td className="p-2 border">is!</td><td className="p-2 border">False if object is of the type</td></tr>
        </tbody>
      </table>

      {/* Bitwise */}
      <h2 className="text-2xl font-bold border-b pb-1">Bitwise Operators</h2>
      <table className="w-full border">
        <tbody>
          <tr><td className="p-2 border">a & b</td><td className="p-2 border">Bitwise AND</td></tr>
          <tr><td className="p-2 border">a | b</td><td className="p-2 border">Bitwise OR</td></tr>
          <tr><td className="p-2 border">a ^ b</td><td className="p-2 border">Bitwise XOR</td></tr>
          <tr><td className="p-2 border">~a</td><td className="p-2 border">Bitwise NOT</td></tr>
          <tr><td className="p-2 border">a &lt;&lt; b</td><td className="p-2 border">Left shift</td></tr>
          <tr><td className="p-2 border">a &gt;&gt; b</td><td className="p-2 border">Right shift</td></tr>
        </tbody>
      </table>

      {/* Assignment */}
      <h2 className="text-2xl font-bold border-b pb-1">Assignment Operators</h2>
      <table className="w-full border">
        <tbody>
          <tr><td className="p-2 border">=</td><td className="p-2 border">Simple assignment</td></tr>
          <tr><td className="p-2 border">??=</td><td className="p-2 border">Assign only if value is null</td></tr>
          <tr><td className="p-2 border">+=</td><td className="p-2 border">Add & assign</td></tr>
          <tr><td className="p-2 border">-=</td><td className="p-2 border">Subtract & assign</td></tr>
          <tr><td className="p-2 border">*=</td><td className="p-2 border">Multiply & assign</td></tr>
          <tr><td className="p-2 border">/=</td><td className="p-2 border">Divide & assign</td></tr>
        </tbody>
      </table>

      {/* Logical */}
      <h2 className="text-2xl font-bold border-b pb-1">Logical Operators</h2>
      <table className="w-full border">
        <tbody>
          <tr><td className="p-2 border">&&</td><td className="p-2 border">Logical AND</td></tr>
          <tr><td className="p-2 border">||</td><td className="p-2 border">Logical OR</td></tr>
          <tr><td className="p-2 border">!</td><td className="p-2 border">Logical NOT</td></tr>
        </tbody>
      </table>

      {/* Conditional */}
      <h2 className="text-2xl font-bold border-b pb-1">Conditional Expressions</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <b>condition ? expr1 : expr2</b> — returns <b>expr1</b> if condition is
          true, else <b>expr2</b>.
        </li>
        <li>
          <b>expr1 ?? expr2</b> — returns <b>expr1</b> if not null, else{" "}
          <b>expr2</b>.
        </li>
      </ul>

      {/* Examples */}
      <h2 className="text-2xl font-bold border-b pb-1">Example</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`void main() {
  var a = 10;
  var res = a > 12 ? "value greater than 10" : "value lesser than or equal to 10";
  print(res);
}`}
      </pre>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`void main() {
  var a = null;
  var b = 12;
  var res = a ?? b;
  print(res);
}`}
      </pre>
    </div>
  );
};

export default DartOperators;
