import React from "react";
import { motion } from "framer-motion";

const RustOwnership: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-20 space-y-10"
    >
      <h1 className="text-4xl font-extrabold border-b pb-3">Rust - Ownership</h1>

      {/* Intro */}

        <p>
          Rust manages memory using <strong>ownership</strong> rules. Memory in a Rust program is
          allocated either on the <strong>stack</strong> or the <strong>heap</strong>.
        </p>
        <p>
          <strong>Stack:</strong> Stores values whose size is known at compile time. Data is stored in a last-in-first-out (LIFO) manner.
        </p>
        <p>
          <strong>Heap:</strong> Stores values whose size is unknown at compile time. Used for dynamic data.
        </p>


      {/* What is Ownership */}
     
        <h2 className="text-2xl font-bold">What is Ownership?</h2>
        <p>
          Every value in Rust has a variable that is its <strong>owner</strong>. Each value can have
          only one owner at a time. Ownership can be transferred by:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Assigning a value to another variable</li>
          <li>Passing a value to a function</li>
          <li>Returning a value from a function</li>
        </ul>
 

      {/* Assigning value to another variable */}

        <h2 className="text-2xl font-bold">Assigning Value to Another Variable</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
    let v = vec![1,2,3]; // v owns the vector
    let v2 = v;          // ownership moves to v2
    println!("{:?}", v); // Error: v is no longer valid
}`}
        </pre>
      

      {/* Passing value to a function */}

        <h2 className="text-2xl font-bold">Passing Value to a Function</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
    let v = vec![1,2,3];
    display(v);        // ownership moves to display
    println!("In main {:?}", v); // Error: v no longer valid
}

fn display(v: Vec<i32>) {
    println!("Inside display {:?}", v);
}`}
        </pre>


      {/* Returning value from a function */}

        <h2 className="text-2xl font-bold">Returning Value from a Function</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
    let v = vec![1,2,3];
    let v_returned = display(v); // ownership returned
    println!("In main {:?}", v_returned);
}

fn display(v: Vec<i32>) -> Vec<i32> {
    println!("Inside display {:?}", v);
    v // return ownership back
}`}
        </pre>
    

      {/* Ownership and primitive types */}

        <h2 className="text-2xl font-bold">Ownership and Primitive Types</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
    let u1 = 10;
    let u2 = u1; // primitive types are copied, not moved
    println!("u1 = {}", u1); // works fine
}`}
        </pre>
   
    </motion.div>
  );
};

export default RustOwnership;
