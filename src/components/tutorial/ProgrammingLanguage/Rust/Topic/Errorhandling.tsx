import React from "react";
import { motion } from "framer-motion";

const RustErrorHandling: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-20 space-y-10"
    >
      <h1 className="text-4xl font-extrabold border-b pb-3">
        Rust - Error Handling
      </h1>

      {/* Error Types */}

        <h2 className="text-2xl font-bold">Error Types</h2>
        <p>
          Rust classifies errors into two categories:
        </p>
        <ul className="list-disc ml-5 space-y-2">
          <li>
            <strong>Recoverable:</strong> Can be handled using the <code>Result</code> enum.
          </li>
          <li>
            <strong>Unrecoverable:</strong> Causes program to panic using the <code>panic!</code> macro.
          </li>
        </ul>


      {/* Panic Macro */}
      
        <h2 className="text-2xl font-bold">panic! Macro</h2>
        <p>Used for unrecoverable errors:</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
    panic!("Something went wrong!");
    println!("This will not run");
}`}
        </pre>
        <p>Output:</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`thread 'main' panicked at 'Something went wrong!', main.rs:2`}
        </pre>
    

      {/* Result Enum */}

        <h2 className="text-2xl font-bold">Result Enum</h2>
        <p>
          Used for recoverable errors. Has two variants: <code>Ok(T)</code> and <code>Err(E)</code>.
        </p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`use std::fs::File;

fn main() {
    let f = File::open("main.jpg"); // file may not exist
    match f {
        Ok(file) => println!("File opened: {:?}", file),
        Err(e) => println!("Error opening file: {:?}", e),
    }
    println!("End of main");
}`}
        </pre>
 

      {/* Custom Error Handling */}
      
        <h2 className="text-2xl font-bold">Custom Error Handling</h2>
        <p>Example: check if a number is even.</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
    let result = is_even(13);
    match result {
        Ok(_) => println!("Number is even"),
        Err(msg) => println!("Error: {}", msg),
    }
    println!("End of main");
}

fn is_even(no: i32) -> Result<bool, String> {
    if no % 2 == 0 { Ok(true) } else { Err("NOT_AN_EVEN".to_string()) }
}`}
        </pre>
        <p>Output:</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`Error: NOT_AN_EVEN
End of main`}
        </pre>
    

      {/* unwrap() and expect() */}

        <h2 className="text-2xl font-bold">unwrap() and expect()</h2>
        <p>
          <strong>unwrap():</strong> Returns value inside <code>Ok</code> or <code>Some</code>, panics on <code>Err</code>/<code>None</code>.<br />
          <strong>expect(msg):</strong> Same as unwrap, but shows a custom message on panic.
        </p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`use std::fs::File;

fn main() {
    let f = File::open("pqr.txt").expect("File not able to open");
    println!("End of main");
}`}
        </pre>
        <p>Output:</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`thread 'main' panicked at 'File not able to open: Error { repr: Os { code: 2, message: "No such file or directory" } }', src/libcore/result.rs:860`}
        </pre>
      
    </motion.div>
  );
};

export default RustErrorHandling;
