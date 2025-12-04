import React from "react";

const RustLoops: React.FC = () => {
  return (
    <>
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b pb-3 mt-20">
        Rust - Loops
      </h1>

      <p className="leading-relaxed mt-4">
        Loops allow a block of code to run repeatedly. Normally, statements run 
        sequentially, but loop structures let you repeat actions based on a 
        condition or a range.
      </p>

      <p className="mt-3">Rust provides three main types of loops:</p>

      <ul className="list-disc ml-8 space-y-1">
        <li><strong>for</strong> loop</li>
        <li><strong>while</strong> loop</li>
        <li><strong>loop</strong> (infinite loop)</li>
      </ul>

      {/* DEFINITE LOOP */}
      <h2 className="text-2xl font-bold mt-10">1. Definite Loop (for Loop)</h2>

      <p>
        A <strong>definite loop</strong> runs a fixed number of times. The 
        <strong> for loop</strong> is an example of such a loop.
      </p>

      <p className="mt-2 font-semibold">Syntax:</p>

      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
{`for temp_variable in lower_bound..upper_bound {
   // statements
}`}
        </pre>
      </div>

      <p className="mt-4">Example:</p>

      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
{`fn main() {
   for x in 1..11 { // 11 is not inclusive
      if x == 5 {
         continue;
      }
      println!("x is {}", x);
   }
}`}
        </pre>
      </div>

      <p className="mt-3 font-semibold">Output:</p>

      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        x is 1<br />
        x is 2<br />
        x is 3<br />
        x is 4<br />
        x is 6<br />
        x is 7<br />
        x is 8<br />
        x is 9<br />
        x is 10
      </div>

      {/* INDEFINITE LOOP */}
      <h2 className="text-2xl font-bold mt-10">2. Indefinite Loops</h2>

      <p>
        An <strong>indefinite loop</strong> runs until some external condition 
        stops it. Rust provides two ways to create indefinite loops:
      </p>

      <ul className="list-disc ml-8 space-y-1 mt-2">
        <li><strong>while</strong> loop — runs while the condition is true</li>
        <li><strong>loop</strong> — creates an infinite loop</li>
      </ul>

      {/* WHILE LOOP */}
      <h3 className="text-xl font-bold mt-6">a) while Loop</h3>

      <p>The <strong>while</strong> loop runs as long as its condition is true.</p>

      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
{`fn main() {
   let mut x = 0;

   while x < 10 {
      x += 1;
      println!("inside loop x value is {}", x);
   }

   println!("outside loop x value is {}", x);
}`}
        </pre>
      </div>

      <p className="mt-2 font-semibold">Output:</p>

      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        inside loop x value is 1<br />
        inside loop x value is 2<br />
        inside loop x value is 3<br />
        inside loop x value is 4<br />
        inside loop x value is 5<br />
        inside loop x value is 6<br />
        inside loop x value is 7<br />
        inside loop x value is 8<br />
        inside loop x value is 9<br />
        inside loop x value is 10<br />
        outside loop x value is 10
      </div>

      {/* LOOP */}
      <h3 className="text-xl font-bold mt-6">b) loop (Infinite Loop)</h3>

      <p>
        The <strong>loop</strong> keyword creates an infinite loop. Use 
        <strong> break</strong> to stop it.
      </p>

      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
{`fn main() {
   let mut x = 0;

   loop {
      x += 1;
      println!("x={}", x);

      if x == 15 {
         break;
      }
   }
}`}
        </pre>
      </div>

      <p className="mt-2 font-semibold">Output:</p>

      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        x=1<br />
        x=2<br />
        x=3<br />
        x=4<br />
        x=5<br />
        x=6<br />
        x=7<br />
        x=8<br />
        x=9<br />
        x=10<br />
        x=11<br />
        x=12<br />
        x=13<br />
        x=14<br />
        x=15
      </div>

      {/* CONTINUE STATEMENT */}
      <h2 className="text-2xl font-bold mt-10">3. Continue Statement</h2>

      <p>
        The <strong>continue</strong> statement skips the rest of the current 
        iteration and starts the next iteration of the loop.
      </p>

      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
{`fn main() {
   let mut count = 0;

   for num in 0..21 {
      if num % 2 == 0 {
         continue;
      }
      count += 1;
   }

   println!("The count of odd values between 0 and 20 is: {}", count);
}`}
        </pre>
      </div>

      <p className="mt-2 font-semibold">Output:</p>

      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        The count of odd values between 0 and 20 is 10
      </div>
    </>
  );
};

export default RustLoops;
