import React from "react";

const RustVariables: React.FC = () => (
  <div className="mt-20 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-3">
      Rust – Variables
    </h1>

    {/* Intro */}
    <p className="leading-relaxed">
      A variable is a named storage that programs can manipulate. Variables in
      Rust are associated with a specific data type which determines memory
      layout, allowed operations, and range of values.
    </p>

    {/* Rules for Naming */}
    <h2 className="text-2xl font-bold mt-10">Rules for Naming a Variable</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Variable names may include letters, digits, and underscores.</li>
      <li>They must begin with a letter or an underscore.</li>
      <li>Rust is case-sensitive — uppercase and lowercase are distinct.</li>
    </ul>

    {/* Syntax */}
    <h2 className="text-2xl font-bold mt-10">Syntax</h2>

    <p className="leading-relaxed">
      Rust can infer the data type automatically if not explicitly provided.
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`let variable_name = value;            // no type specified
let variable_name:dataType = value;   // type specified`}
    </pre>

    {/* Example */}
    <h2 className="text-2xl font-bold mt-10">Illustration</h2>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
   let fees = 25_000;
   let salary: f64 = 35_000.00;
   println!("fees is {} and salary is {}", fees, salary);
}`}
    </pre>

    <p className="leading-relaxed">
      Output: <strong>fees is 25000 and salary is 35000</strong>
    </p>

    {/* Immutable */}
    <h2 className="text-2xl font-bold mt-10">Immutable</h2>

    <p className="leading-relaxed">
      Variables in Rust are <strong>immutable by default</strong>. Their values
      cannot be changed once assigned.
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
   let fees = 25_000;
   println!("fees is {}", fees);
   fees = 35_000;    // error
   println!("fees changed is {}", fees);
}`}
    </pre>

    {/* Error Output */}
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`error[E0384]: re-assignment of immutable variable \`fees\`
 --> main.rs:6:3
  |
3 | let fees = 25_000;
  | ---- first assignment to \`fees\`
...
6 | fees = 35_000;
  | ^^^^^^^^^^^ re-assignment of immutable variable

error: aborting due to previous error(s)`}
    </pre>

    <p className="leading-relaxed">
      Rust prevents modifying immutable variables to ensure safety and avoid
      concurrency issues.
    </p>

    {/* Mutable */}
    <h2 className="text-2xl font-bold mt-10">Mutable</h2>

    <p className="leading-relaxed">
      To make a variable mutable, use the <code>mut</code> keyword.
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`let mut variable_name = value;
let mut variable_name:dataType = value;`}
    </pre>

    <h3 className="text-xl font-bold mt-6">Example</h3>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
   let mut fees: i32 = 25_000;
   println!("fees is {}", fees);
   fees = 35_000;
   println!("fees changed is {}", fees);
}`}
    </pre>

    <p className="leading-relaxed">
      Output:
      <br />– <strong>fees is 25000</strong>
      <br />– <strong>fees changed is 35000</strong>
    </p>
  </div>
);

export default RustVariables;
