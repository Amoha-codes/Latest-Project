import React from "react";
import { motion } from "framer-motion";

const RustArray: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-20 space-y-10"
    >
      <h1 className="text-4xl font-extrabold border-b pb-3">Rust - Array</h1>

      {/* Intro */}

        <p>
          An array is a homogeneous collection of values of the same data type.
          Unlike a scalar variable, which can store only a single value, an
          array can store multiple values sequentially in memory.
        </p>
        <p>Arrays are static, and their size cannot be changed after initialization.</p>
  

      {/* Declaring and Initializing Arrays */}
    
        <h2 className="text-2xl font-bold">Declaring and Initializing Arrays</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`// Syntax 1
let variable_name = [value1, value2, value3];

// Syntax 2
let variable_name: [dataType; size] = [value1, value2, value3];

// Syntax 3
let variable_name: [dataType; size] = [default_value; size];`}
        </pre>
     

      {/* Simple Array */}

        <h2 className="text-2xl font-bold">Simple Array</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
    let arr: [i32; 4] = [10, 20, 30, 40];
    println!("array is {:?}", arr);
    println!("array size is: {}", arr.len());
}`}
        </pre>
  

      {/* Array without type */}

        <h2 className="text-2xl font-bold">Array without Data Type</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
    let arr = [10, 20, 30, 40];
    println!("array is {:?}", arr);
    println!("array size is: {}", arr.len());
}`}
        </pre>
  

      {/* Default Values */}
      
        <h2 className="text-2xl font-bold">Array with Default Values</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
    let arr: [i32; 4] = [-1; 4];
    println!("array is {:?}", arr);
    println!("array size is: {}", arr.len());
}`}
        </pre>
   

      {/* For Loop */}
    
        <h2 className="text-2xl font-bold">Array with For Loop</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
    let arr: [i32; 4] = [10, 20, 30, 40];
    println!("array is {:?}", arr);
    println!("array size is: {}", arr.len());

    for index in 0..arr.len() {
        println!("index is: {} & value is: {}", index, arr[index]);
    }
}`}
        </pre>
 

      {/* Iter() */}

        <h2 className="text-2xl font-bold">Using the iter() Function</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
    let arr: [i32; 4] = [10, 20, 30, 40];
    println!("array is {:?}", arr);
    println!("array size is: {}", arr.len());

    for val in arr.iter() {
        println!("value is: {}", val);
    }
}`}
        </pre>
      

      {/* Mutable Array */}

        <h2 className="text-2xl font-bold">Mutable Array</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
    let mut arr: [i32; 4] = [10, 20, 30, 40];
    arr[1] = 0;
    println!("{:?}", arr);
}`}
        </pre>
     

      {/* Passing Arrays as Parameters */}

        <h2 className="text-2xl font-bold">Passing Arrays as Parameters</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`// Pass by value
fn main() {
    let arr = [10, 20, 30];
    update(arr);
    println!("Inside main {:?}", arr);
}
fn update(mut arr: [i32; 3]) {
    for i in 0..3 {
        arr[i] = 0;
    }
    println!("Inside update {:?}", arr);
}

// Pass by reference
fn main() {
    let mut arr = [10, 20, 30];
    update(&mut arr);
    println!("Inside main {:?}", arr);
}
fn update(arr: &mut [i32; 3]) {
    for i in 0..3 {
        arr[i] = 0;
    }
    println!("Inside update {:?}", arr);
}`}
        </pre>


      {/* Constants */}

        <h2 className="text-2xl font-bold">Array Declaration and Constants</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
    const N: usize = 20;
    let arr = [0; N];
    println!("{}", arr[10]);
}`}
        </pre>
      
    </motion.div>
  );
};

export default RustArray;
