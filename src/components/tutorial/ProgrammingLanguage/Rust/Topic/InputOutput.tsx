import React from "react";
import { motion } from "framer-motion";

const RustIO: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-20 space-y-10"
    >
      <h1 className="text-4xl font-extrabold border-b pb-3">
        Rust - Input / Output
      </h1>

      {/* Reader and Writer Types */}
   
        <h2 className="text-2xl font-bold">Reader and Writer Types</h2>
        <p>
          Rust's standard library I/O is organized around <code>Read</code> and <code>Write</code> traits.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><b>Read:</b> Byte-oriented input, e.g., <code>Stdin</code>, <code>File</code>.</li>
          <li><b>Write:</b> Byte-oriented & UTF-8 output, e.g., <code>Stdout</code>, <code>File</code>.</li>
        </ul>
  

      {/* Reading from the Console */}
   
        <h2 className="text-2xl font-bold">Reading from the Console - <code>stdin()</code></h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
    let mut line = String::new();
    println!("Enter your name :");
    let b1 = std::io::stdin().read_line(&mut line).unwrap();
    println!("Hello, {}", line);
    println!("Number of bytes read: {}", b1);
}`}
        </pre>
        <p>Output:</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`Enter your name:
Mohtashim
Hello, Mohtashim
Number of bytes read: 10`}
        </pre>
  

      {/* Writing to the Console */}
   
        <h2 className="text-2xl font-bold">Writing to the Console - <code>stdout()</code></h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`use std::io::Write;

fn main() {
    let b1 = std::io::stdout().write("Tutorials ".as_bytes()).unwrap();
    let b2 = std::io::stdout().write(String::from("Point").as_bytes()).unwrap();
    std::io::stdout().write(format!("\nBytes written: {}", (b1 + b2)).as_bytes()).unwrap();
}`}
        </pre>
        <p>Output:</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`Tutorials Point
Bytes written: 15`}
        </pre>
  

      {/* Command Line Arguments */}
   
        <h2 className="text-2xl font-bold">Command Line Arguments</h2>
        <p>
          Use <code>std::env::args()</code> to access arguments passed to the program.
        </p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
    let cmd_line = std::env::args();
    println!("Number of elements: {}", cmd_line.len());
    
    for arg in cmd_line {
        println!("[{}]", arg);
    }
}`}
        </pre>
        <p>Example execution:</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`> main.exe hello tutorialspoint
Number of elements: 3
[main.exe]
[hello]
[tutorialspoint]`}
        </pre>
  

      {/* Summing Command Line Arguments */}
      
        <h2 className="text-2xl font-bold">Sum of Command Line Arguments</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
    let cmd_line = std::env::args();
    println!("Number of elements: {}", cmd_line.len());
    
    let mut sum = 0;
    let mut has_read_first_arg = false;

    for arg in cmd_line {
        if has_read_first_arg {
            sum += arg.parse::<i32>().unwrap();
        }
        has_read_first_arg = true;
    }

    println!("Sum is {}", sum);
}`}
        </pre>
        <p>Example execution:</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`> main.exe 1 2 3 4
Number of elements: 5
Sum is 10`}
        </pre>
  
    </motion.div>
  );
};

export default RustIO;
