import React from "react";
import { motion } from "framer-motion";

const RustTuple: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-20 space-y-10"
    >
      <h1 className="text-4xl font-extrabold border-b pb-3">Rust - Tuple</h1>

      {/* Intro */}
  
        <p>
          A <span className="font-semibold">tuple</span> is a compound data type in Rust
          that can store multiple values of different types. Tuples have a
          fixed length and their values can be accessed using index positions.
        </p>
        <p>Tuple indices start from <strong>0</strong>.</p>
     

      {/* Syntax */}
    
        <h2 className="text-2xl font-bold">Syntax</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`// Syntax 1
let tuple_name: (data_type1, data_type2, data_type3) = (value1, value2, value3);

// Syntax 2
let tuple_name = (value1, value2, value3);`}</pre>
     

      {/* Display tuple */}

        <h2 className="text-2xl font-bold">Display a Tuple</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`fn main() {
    let tuple: (i32, f64, u8) = (-325, 4.9, 22);
    println!("{:?}", tuple);
}`}</pre>
      

      {/* Access values */}
 
        <h2 className="text-2xl font-bold">Access Individual Tuple Values</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`fn main() {
    let tuple: (i32, f64, u8) = (-325, 4.9, 22);

    println!("integer is: {:?}", tuple.0);
    println!("float is: {:?}", tuple.1);
    println!("unsigned integer is: {:?}", tuple.2);
}`}</pre>
      

      {/* Passing tuple to function */}

        <h2 className="text-2xl font-bold">Passing Tuple as Function Parameter</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`fn main() {
    let b: (i32, bool, f64) = (110, true, 10.9);
    print(b);
}

fn print(x: (i32, bool, f64)) {
    println!("Inside print method");
    println!("{:?}", x);
}`}</pre>
    

      {/* Destructuring */}

        <h2 className="text-2xl font-bold">Destructuring a Tuple</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`fn main() {
    let b: (i32, bool, f64) = (30, true, 7.9);
    print(b);
}

fn print(x: (i32, bool, f64)) {
    println!("Inside print method");

    let (age, is_male, cgpa) = x; // destructuring

    println!("Age is {} , isMale? {} , cgpa is {}", age, is_male, cgpa);
}`}</pre>
     
    </motion.div>
  );
};

export default RustTuple;