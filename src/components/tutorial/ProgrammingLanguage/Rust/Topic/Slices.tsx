import React from "react";
import { motion } from "framer-motion";

const RustSlices: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-20 space-y-10"
    >
      <h1 className="text-4xl font-extrabold border-b pb-3">Rust - Slices</h1>

      {/* Intro */}
   
        <p>
          A slice is a reference to a contiguous block of memory. Slices allow you to access a portion of an array, vector, or string without taking ownership. The size of a slice is determined at runtime.
        </p>
        <p>
          Slices use index ranges (<code>start_index..end_index</code>) to specify which elements to borrow. The <code>end_index</code> is exclusive.
        </p>


      {/* Slicing a string */}
     
        <h2 className="text-2xl font-bold">Slicing a String</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
    let n1 = "Tutorials".to_string();
    println!("length of string is {}", n1.len());

    let c1 = &n1[4..9]; // characters at index 4,5,6,7,8
    println!("{}", c1); // Output: rials
}`}
        </pre>
 

      {/* Slicing an array */}
     
        <h2 className="text-2xl font-bold">Slicing an Array</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
    let data = [10, 20, 30, 40, 50];
    use_slice(&data[1..4]); // borrows elements 20,30,40
}

fn use_slice(slice: &[i32]) {
    println!("length of slice is {:?}", slice.len());
    println!("{:?}", slice);
}`}
        </pre>
        <p>Output:</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`length of slice is 3
[20, 30, 40]`}
        </pre>
      

      {/* Mutable slices */}
     
        <h2 className="text-2xl font-bold">Mutable Slices</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
    let mut data = [10, 20, 30, 40, 50];
    use_slice(&mut data[1..4]); // borrows elements 20,30,40 mutably
    println!("{:?}", data); // Output: [10, 1010, 30, 40, 50]
}

fn use_slice(slice: &mut [i32]) {
    println!("length of slice is {:?}", slice.len());
    println!("{:?}", slice);
    slice[0] = 1010; // replaces 20 with 1010
}`}
        </pre>
   
    </motion.div>
  );
};

export default RustSlices;
