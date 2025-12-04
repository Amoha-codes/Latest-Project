import React from "react";
import { motion } from "framer-motion";

const RustSmartPointers: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-20 space-y-10"
    >
      <h1 className="text-4xl font-extrabold border-b pb-3">
        Rust - Smart Pointers
      </h1>

      {/* Box Pointer Section */}
 
        <h2 className="text-2xl font-bold">Box Smart Pointer</h2>
        <p>
          The <code>Box</code> smart pointer stores data on the heap instead of the stack.
          The stack contains a pointer to the heap data.
        </p>

        <h3 className="font-semibold mt-2">Example - Using Box</h3>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
    let var_i32 = 5; // stack
    let b = Box::new(var_i32); // heap
    println!("b = {}", b);
}`}
        </pre>
        <p>Output:</p>
        <pre className="bg-gray-800 text-white p-4 rounded-xl text-sm">b = 5</pre>

        <h3 className="font-semibold mt-2">Dereferencing a Box</h3>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
    let x = 5;
    let y = Box::new(x);

    println!("{}", 5 == x);
    println!("{}", 5 == *y); // dereferencing Box
}`}
        </pre>
        <p>Output:</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`true
true`}</pre>
      

      {/* Deref Trait Section */}
 
        <h2 className="text-2xl font-bold">Deref Trait</h2>
        <p>
          The <code>Deref</code> trait allows smart pointers to behave like references.
          Implementing <code>deref()</code> enables dereferencing the inner value.
        </p>

        <h3 className="font-semibold mt-2">Example - Custom Box with Deref</h3>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`use std::ops::Deref;

struct MyBox<T>(T);

impl<T> MyBox<T> {
    fn new(x: T) -> MyBox<T> {
        MyBox(x)
    }
}

impl<T> Deref for MyBox<T> {
    type Target = T;
    fn deref(&self) -> &T {
        &self.0
    }
}

fn main() {
    let x = 5;
    let y = MyBox::new(x);

    println!("5==x is {}", 5 == x);
    println!("5==*y is {}", 5 == *y);
}`}
        </pre>
        <p>Output:</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`5==x is true
5==*y is true`}</pre>
      

      {/* Drop Trait Section */}
 
        <h2 className="text-2xl font-bold">Drop Trait</h2>
        <p>
          The <code>Drop</code> trait allows you to run code when a value goes out of scope,
          enabling automatic memory deallocation.
        </p>

        <h3 className="font-semibold mt-2">Example - Drop Trait</h3>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`struct MyBox<T>(T);

impl<T> MyBox<T> {
    fn new(x: T) -> MyBox<T> {
        MyBox(x)
    }
}

impl<T> Drop for MyBox<T> {
    fn drop(&mut self) {
        println!("dropping MyBox object from memory");
    }
}

fn main() {
    let x = 50;
    MyBox::new(x);
    MyBox::new("Hello");
}`}
        </pre>
        <p>Output:</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`dropping MyBox object from memory
dropping MyBox object from memory`}</pre>
      
    </motion.div>
  );
};

export default RustSmartPointers;
