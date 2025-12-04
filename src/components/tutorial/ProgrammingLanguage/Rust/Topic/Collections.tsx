import React from "react";
import { motion } from "framer-motion";

const RustCollections: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-20 space-y-10"
    >
      <h1 className="text-4xl font-extrabold border-b pb-3">Rust - Collections</h1>

      {/* Vector Intro */}
    
        <h2 className="text-2xl font-bold">Vector</h2>
        <p>
          A <strong>Vector</strong> is a resizable, homogeneous array stored in contiguous memory. It supports operations like push, remove, contains, and length calculation.
        </p>
   

      {/* Vector - Examples */}
    
        <h3 className="text-xl font-semibold">Creating a Vector</h3>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
    let mut v = Vec::new();
    v.push(20);
    v.push(30);
    v.push(40);

    println!("size of vector is :{}", v.len());
    println!("{:?}", v);
}`}
        </pre>
        <p>Output:</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`size of vector is :3
[20, 30, 40]`}
        </pre>
   

      {/* HashMap Intro */}
    
        <h2 className="text-2xl font-bold">HashMap</h2>
        <p>
          A <strong>HashMap</strong> stores key-value pairs. Keys must be unique and values can be retrieved or removed using the key.
        </p>
    

      {/* HashMap Examples */}
      
        <h3 className="text-xl font-semibold">Insert and Access</h3>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`use std::collections::HashMap;

fn main() {
    let mut state_codes = HashMap::new();
    state_codes.insert("KL","Kerala");
    state_codes.insert("MH","Maharashtra");

    println!("Size of map: {}", state_codes.len());
    match state_codes.get(&"KL") {
        Some(value) => println!("Value for KL: {}", value),
        None => println!("Nothing found")
    }
}`}
        </pre>
        <p>Output:</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`Size of map: 2
Value for KL: Kerala`}
        </pre>
     

      {/* HashSet Intro */}

        <h2 className="text-2xl font-bold">HashSet</h2>
        <p>
          A <strong>HashSet</strong> is a collection of unique values. Supports fast insertion, removal, and lookup operations.
        </p>
     

      {/* HashSet Examples */}
      
        <h3 className="text-xl font-semibold">Insert and Iteration</h3>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`use std::collections::HashSet;

fn main() {
    let mut names = HashSet::new();
    names.insert("Mohtashim");
    names.insert("Kannan");
    names.insert("TutorialsPoint");
    names.insert("Mohtashim"); // duplicates ignored

    for name in names.iter() {
        println!("{}", name);
    }
}`}
        </pre>
        <p>Output:</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`TutorialsPoint
Mohtashim
Kannan`}
        </pre>
   
    </motion.div>
  );
};

export default RustCollections;
