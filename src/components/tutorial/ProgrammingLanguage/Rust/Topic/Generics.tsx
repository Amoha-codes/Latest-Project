import React from "react";
import { motion } from "framer-motion";

const RustGenerics: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-20 space-y-10"
    >
      <h1 className="text-4xl font-extrabold border-b pb-3">
        Rust - Generic Types
      </h1>

      {/* Introduction */}

        <p>
          Generics allow writing code that works with multiple types, reducing
          duplication while providing type safety. The <code>&lt;T&gt;</code> syntax is used to declare type parameters.
        </p>
  

      {/* Generic Collection */}

        <h2 className="text-2xl font-bold">Generic Collection</h2>
        <p>Vector storing integers:</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main(){
    let mut vector_integer: Vec<i32> = vec![20,30];
    vector_integer.push(40);
    println!("{:?}", vector_integer);
}`}
        </pre>
        <p>Output:</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`[20, 30, 40]`}
        </pre>
  

      {/* Generic Structure */}

        <h2 className="text-2xl font-bold">Generic Structure</h2>
        <p>Structure using type parameter <code>&lt;T&gt;</code>:</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`struct Data<T> {
    value: T,
}

fn main() {
    let t: Data<i32> = Data { value: 350 };
    println!("value is: {}", t.value);

    let t2: Data<String> = Data { value: "Tom".to_string() };
    println!("value is: {}", t2.value);
}`}
        </pre>
        <p>Output:</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`value is: 350
value is: Tom`}
        </pre>
  

      {/* Traits */}

        <h2 className="text-2xl font-bold">Traits</h2>
        <p>Traits define shared behavior (like interfaces) that structures can implement.</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`struct Book {
    name: &'static str,
    id: u32,
}

trait Printable {
    fn print(&self);
}

impl Printable for Book {
    fn print(&self) {
        println!("Printing book with id:{} and name {}", self.id, self.name);
    }
}

fn main() {
    let b1 = Book { id: 1001, name: "Rust in Action" };
    b1.print();
}`}
        </pre>
        <p>Output:</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`Printing book with id:1001 and name Rust in Action`}
        </pre>
  

      {/* Generic Functions */}

        <h2 className="text-2xl font-bold">Generic Functions</h2>
        <p>Function that works with any type implementing <code>Display</code>:</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`use std::fmt::Display;

fn print_pro<T: Display>(t: T) {
    println!("Inside print_pro generic function:");
    println!("{}", t);
}

fn main() {
    print_pro(10 as u8);
    print_pro(20 as u16);
    print_pro("Hello TutorialsPoint");
}`}
        </pre>
        <p>Output:</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`Inside print_pro generic function:
10
Inside print_pro generic function:
20
Inside print_pro generic function:
Hello TutorialsPoint`}
        </pre>
  
    </motion.div>
  );
};

export default RustGenerics;
