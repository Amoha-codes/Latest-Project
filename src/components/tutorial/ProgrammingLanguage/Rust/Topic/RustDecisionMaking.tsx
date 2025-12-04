import React from "react";

const RustDecisionMaking: React.FC = () => {
  return (
    <>
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b pb-3 mt-20">
        Rust - Decision Making
      </h1>

      <p className="leading-relaxed mt-4">
        Decision-making structures allow you to execute different blocks of code
        based on conditions. These conditions must evaluate to a
        <strong> Boolean value</strong> (<code>true</code> or <code>false</code>).
      </p>

      <p className="mt-3">Common decision-making statements in Rust:</p>

      <ul className="list-disc ml-8 space-y-1">
        <li><strong>if</strong> statement</li>
        <li><strong>if...else</strong> statement</li>
        <li><strong>else if</strong> ladder / Nested if</li>
        <li><strong>match</strong> statement</li>
      </ul>

      {/* IF STATEMENT */}
      <h2 className="text-2xl font-bold mt-10">1. if Statement</h2>

      <p className="mt-2">
        The <strong>if</strong> statement executes a block of code only when a condition is true.
      </p>

      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
{`fn main() {
   let num: i32 = 5;

   if num > 0 {
      println!("number is positive");
   }
}`}
        </pre>
      </div>

      <p className="mt-2 font-semibold">Output:</p>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        number is positive
      </div>

      {/* IF ELSE */}
      <h2 className="text-2xl font-bold mt-10">2. if...else Statement</h2>

      <p>
        The <strong>else</strong> block runs when the condition in the <strong>if</strong> statement is false.
      </p>

      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
{`fn main() {
   let num = 12;

   if num % 2 == 0 {
      println!("Even");
   } else {
      println!("Odd");
   }
}`}
        </pre>
      </div>

      <p className="mt-2 font-semibold">Output:</p>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        Even
      </div>

      {/* ELSE IF LADDER */}
      <h2 className="text-2xl font-bold mt-10">3. else if Ladder (Nested If)</h2>

      <p>
        Use <strong>else if</strong> when multiple conditions need to be checked sequentially.
      </p>

      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
{`fn main() {
   let num = 2;

   if num > 0 {
      println!("{} is positive", num);
   } else if num < 0 {
      println!("{} is negative", num);
   } else {
      println!("{} is neither positive nor negative", num);
   }
}`}
        </pre>
      </div>

      <p className="mt-2 font-semibold">Output:</p>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        2 is positive
      </div>

      {/* MATCH STATEMENT */}
      <h2 className="text-2xl font-bold mt-10">4. match Statement</h2>

      <p>
        The <strong>match</strong> statement compares a value against multiple patterns.
        It works like a <strong>switch</strong> statement in other languages.
      </p>

      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
{`fn main() {
   let state_code = "MH";

   let state = match state_code {
      "MH" => { 
         println!("Found match for MH"); 
         "Maharashtra" 
      },
      "KL" => "Kerala",
      "KA" => "Karnataka",
      "GA" => "Goa",
      _ => "Unknown",
   };

   println!("State name is {}", state);
}`}
        </pre>
      </div>

      <p className="mt-2 font-semibold">Output:</p>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        Found match for MH <br />
        State name is Maharashtra
      </div>
    </>
  );
};

export default RustDecisionMaking;
