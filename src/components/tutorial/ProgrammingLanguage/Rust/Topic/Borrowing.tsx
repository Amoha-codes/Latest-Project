import React from "react";
import { motion } from "framer-motion";

const RustBorrowing: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-20 space-y-10"
    >
      <h1 className="text-4xl font-extrabold border-b pb-3">Rust - Borrowing</h1>

      {/* Intro */}
   
        <p>
          In Rust, passing ownership back and forth between functions can be inconvenient. Borrowing allows a function to access a value temporarily without taking ownership.
        </p>


      {/* Example without borrowing */}
      
        <h2 className="text-2xl font-bold">Passing Ownership (without Borrowing)</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
    let v = vec![10,20,30];
    print_vector(v);
    println!("{}", v[0]); // Error: v was moved
}

fn print_vector(x: Vec<i32>) {
    println!("Inside print_vector {:?}", x);
}`}
        </pre>
   

      {/* What is Borrowing */}
      
        <h2 className="text-2xl font-bold">What is Borrowing?</h2>
        <p>
          Borrowing allows a function to use a value temporarily by passing a reference using <code>&</code> without taking ownership. The original owner retains control after the function finishes.
        </p>
      

      {/* Example with borrowing */}
      
        <h2 className="text-2xl font-bold">Borrowing Example</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
    let v = vec![10,20,30];
    print_vector(&v); // pass reference
    println!("v[0] from main: {}", v[0]);
}

fn print_vector(x: &Vec<i32>) {
    println!("Inside print_vector {:?}", x);
}`}
        </pre>


      {/* Mutable references */}
     
        <h2 className="text-2xl font-bold">Mutable References</h2>
        <p>
          A mutable reference (<code>&mut</code>) allows a function to modify a borrowed value. Only mutable variables can be borrowed mutably.
        </p>
 
      {/* Mutating an integer */}
    
        <h2 className="text-2xl font-bold">Mutating an Integer Reference</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn add_one(e: &mut i32) {
    *e += 1;
}

fn main() {
    let mut i = 3;
    add_one(&mut i);
    println!("{}", i); // Output: 4
}`}
        </pre>
    

      {/* Mutating a string */}

        <h2 className="text-2xl font-bold">Mutating a String Reference</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn display(param_name: &mut String) {
    println!("param_name value: {}", param_name);
    param_name.push_str(" Rocks"); // modify the original string
}

fn main() {
    let mut name = String::from("TutorialsPoint");
    display(&mut name);
    println!("Name after modification: {}", name); // Output: TutorialsPoint Rocks
}`}
        </pre>
   
    </motion.div>
  );
};

export default RustBorrowing;
