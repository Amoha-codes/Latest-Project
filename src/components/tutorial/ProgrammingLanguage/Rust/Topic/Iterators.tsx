import React from "react";
import { motion } from "framer-motion";

const RustIteratorClosure: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-20 space-y-10"
    >
      <h1 className="text-4xl font-extrabold border-b pb-3">
        Rust - Iterator and Closure
      </h1>

      {/* Iterators Section */}

        <h2 className="text-2xl font-bold">Iterators</h2>
        <p>
          Iterators help to traverse collections such as arrays, vectors, or maps.
          Iterators implement the <code>Iterator</code> trait. Use <code>iter()</code> to borrow,
          <code>into_iter()</code> to consume, and <code>iter_mut()</code> to modify elements.
        </p>

        <h3 className="font-semibold mt-2">Example - Using <code>iter()</code></h3>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
    let a = [10, 20, 30];
    let mut iter = a.iter();
    println!("{:?}", iter.next());
    println!("{:?}", iter.next());
    println!("{:?}", iter.next());
    println!("{:?}", iter.next());
}`}</pre>
        <p>Output:</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`Some(10)
Some(20)
Some(30)
None`}</pre>

        <h3 className="font-semibold mt-2">Example - <code>into_iter()</code></h3>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`let names = vec!["Kannan", "Mohtashim", "Kiran"];
for name in names.into_iter() {
    println!("Hello {}", name);
}
// cannot reuse names after into_iter`}
        </pre>

        <h3 className="font-semibold mt-2">Example - <code>iter_mut()</code></h3>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`let mut names = vec!["Kannan", "Mohtashim", "Kiran"];
for name in names.iter_mut() {
    *name = match name {
        &mut "Mohtashim" => "Rustacean",
        _ => name,
    };
}
println!("{:?}", names);`}
        </pre>
      

      {/* Closures Section */}

        <h2 className="text-2xl font-bold">Closures</h2>
        <p>
          Closures are anonymous functions that can capture variables from their environment.
          They can be assigned to variables and passed as parameters to other functions.
        </p>

        <h3 className="font-semibold mt-2">Example - Simple Closure</h3>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
    let is_even = |x| x % 2 == 0;
    let no = 13;
    println!("{} is even? {}", no, is_even(no));
}`}
        </pre>
        <p>Output:</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`13 is even? false`}</pre>

        <h3 className="font-semibold mt-2">Example - Closure accessing outer variable</h3>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
    let val = 10;
    let closure2 = |x| x + val;
    println!("{}", closure2(2));
}`}
        </pre>
        <p>Output:</p>
        <pre className="bg-gray-800 text-white p-4 rounded-xl text-sm">
{`12`}</pre>
      
    </motion.div>
  );
};

export default RustIteratorClosure;
