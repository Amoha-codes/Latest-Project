import React from "react";

const RustConstant: React.FC = () => (
  <div className="mt-20 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-3">
      Rust – Constants
    </h1>

    {/* Intro */}
    <p className="leading-relaxed">
      Constants represent values that cannot be changed. Once a constant is
      declared, its value cannot be modified. Constants use the{" "}
      <strong>const</strong> keyword and must always have an explicitly defined
      data type.
    </p>

    {/* Syntax */}
    <h2 className="text-2xl font-bold mt-10">Syntax</h2>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`const VARIABLE_NAME: dataType = value;`}
    </pre>

    {/* Naming Convention */}
    <h2 className="text-2xl font-bold mt-10">Rust Constant Naming Convention</h2>

    <p className="leading-relaxed">
      Constant naming follows similar rules as variables, but the recommended
      style is:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Constant names are written in <strong>UPPERCASE</strong>.</li>
      <li>Use underscores between words for readability.</li>
      <li>The <code>let</code> keyword is <strong>not</strong> used for constants.</li>
    </ul>

    {/* Example */}
    <h2 className="text-2xl font-bold mt-10">Example</h2>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
   const USER_LIMIT: i32 = 100;    // integer constant
   const PI: f32 = 3.14;           // float constant

   println!("user limit is {}", USER_LIMIT);
   println!("pi value is {}", PI);
}`}
    </pre>

    {/* Constants vs Variables */}
    <h2 className="text-2xl font-bold mt-10">Constants vs Variables</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        Constants use the <code>const</code> keyword, while variables use{" "}
        <code>let</code>.
      </li>
      <li>
        Constants <strong>must</strong> have an explicit data type.
      </li>
      <li>
        Variables are immutable by default but can be made mutable using{" "}
        <code>mut</code>. Constants are always immutable.
      </li>
      <li>
        Constants can only be set to <strong>constant expressions</strong>, not
        the result of runtime computations.
      </li>
      <li>
        Constants can be declared in any scope, including global scope.
      </li>
    </ul>

    {/* Shadowing */}
    <h2 className="text-2xl font-bold mt-10">Shadowing of Variables</h2>

    <p className="leading-relaxed">
      Rust allows declaring a new variable with the same name as a previous one.
      The new declaration <strong>shadows</strong> the previous variable.
    </p>

    {/* Shadowing Example */}
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
   let salary = 100.00;
   let salary = 1.50;
   println!("The value of salary is: {}", salary);
}`}
    </pre>

    <p className="leading-relaxed">
      Output: <strong>The value of salary is: 1.50</strong>
    </p>

    {/* Shadowing with different data types */}
    <h2 className="text-2xl font-bold mt-10">Shadowing with Different Types</h2>

    <p className="leading-relaxed">
      Rust also allows shadowing with a change in data type.
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
   let uname = "Mohtashim";
   let uname = uname.len();
   println!("name changed to integer: {}", uname);
}`}
    </pre>

    <p className="leading-relaxed">
      Output: <strong>name changed to integer: 9</strong>
    </p>
  </div>
);

export default RustConstant;
