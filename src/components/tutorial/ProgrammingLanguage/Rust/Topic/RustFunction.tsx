import React from "react";
import { motion } from "framer-motion";

const RustFunctions: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-20 space-y-10"
    >
      <h1 className="text-4xl font-extrabold border-b pb-3">Rust - Functions</h1>

      {/* Intro */}

        <p>
          Functions are essential building blocks in Rust, enabling clean,
          reusable, and organized code. A function contains a set of
          instructions that perform a specific task.
        </p>
        <p>
          Rust functions must be defined before they are used, and every
          function begins with the <code className="font-semibold">fn</code>{" "}
          keyword.
        </p>
      

      {/* Defining a function */}

        <h2 className="text-2xl font-bold">Defining a Function</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`// Defining a simple function
fn fn_hello() {
    println!("hello from function fn_hello");
}`}
        </pre>
  

      {/* Invoking a function */}

        <h2 className="text-2xl font-bold">Invoking a Function</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
    fn_hello();
}

fn fn_hello() {
    println!("hello from function fn_hello");
}`}
        </pre>
   

      {/* Returning value */}

        <h2 className="text-2xl font-bold">Returning Value from a Function</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
    println!("pi value is {}", get_pi());
}

fn get_pi() -> f64 {
    22.0 / 7.0 // return shorthand (no semicolon)
}`}
        </pre>


      {/* Function with parameters (pass by value) */}

        <h2 className="text-2xl font-bold">Pass by Value</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
    let no: i32 = 5;
    mutate_no_to_zero(no);
    println!("The value of no is:{}", no);
}

fn mutate_no_to_zero(mut param_no: i32) {
    param_no = 0;
    println!("param_no value is:{}", param_no);
}`}
        </pre>
      

      {/* Pass by reference */}

        <h2 className="text-2xl font-bold">Pass by Reference</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
    let mut no: i32 = 5;
    mutate_no_to_zero(&mut no);
    println!("The value of no is:{}", no);
}

fn mutate_no_to_zero(param_no: &mut i32) {
    *param_no = 0; // dereferencing
}`}
        </pre>
   

      {/* Passing string */}
      
        <h2 className="text-2xl font-bold">Passing a String to a Function</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
    let name: String = String::from("TutorialsPoint");
    display(name);
}

fn display(param_name: String) {
    println!("param_name value is: {}", param_name);
}`}
        </pre>
   
    </motion.div>
  );
};

export default RustFunctions;
