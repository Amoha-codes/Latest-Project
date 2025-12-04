import React from "react";
import { motion } from "framer-motion";

const RustStructures: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-20 space-y-10"
    >
      <h1 className="text-4xl font-extrabold border-b pb-3">Rust - Structure</h1>

      {/* Intro */}
    
        <p>
          Structures in Rust allow you to combine data items of different types into a single user-defined type. Each field in a structure has a name and a type.
        </p>
      

      {/* Declaring and initializing a struct */}
      
        <h2 className="text-2xl font-bold">Declaring and Initializing a Struct</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`struct Employee {
    name: String,
    company: String,
    age: u32
}

fn main() {
    let emp1 = Employee {
        name: String::from("Mohtashim"),
        company: String::from("TutorialsPoint"),
        age: 50
    };

    println!("Name is: {} company is {} age is {}", emp1.name, emp1.company, emp1.age);
}`}
        </pre>
        <p>Output:</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`Name is: Mohtashim company is TutorialsPoint age is 50`}
        </pre>
   

      {/* Modifying a struct */}
     
        <h2 className="text-2xl font-bold">Modifying a Struct Instance</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`let mut emp1 = Employee {
    name: String::from("Mohtashim"),
    company: String::from("TutorialsPoint"),
    age: 50
};
emp1.age = 40;
println!("Name is: {} company is {} age is {}", emp1.name, emp1.company, emp1.age);`}
        </pre>
        <p>Output:</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`Name is: Mohtashim company is TutorialsPoint age is 40`}
        </pre>
   

      {/* Passing struct to a function */}

        <h2 className="text-2xl font-bold">Passing Struct to a Function</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn display(emp: Employee) {
    println!("Name is: {} company is {} age is {}", emp.name, emp.company, emp.age);
}

fn main() {
    let emp1 = Employee { name: String::from("Mohtashim"), company: String::from("TutorialsPoint"), age: 50 };
    let emp2 = Employee { name: String::from("Kannan"), company: String::from("TutorialsPoint"), age: 32 };

    display(emp1);
    display(emp2);
}`}
        </pre>
   

      {/* Returning struct from a function */}
      
        <h2 className="text-2xl font-bold">Returning a Struct from a Function</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn who_is_elder(emp1: Employee, emp2: Employee) -> Employee {
    if emp1.age > emp2.age { emp1 } else { emp2 }
}

fn main() {
    let emp1 = Employee { name: String::from("Mohtashim"), company: String::from("TutorialsPoint"), age: 50 };
    let emp2 = Employee { name: String::from("Kannan"), company: String::from("TutorialsPoint"), age: 32 };

    let elder = who_is_elder(emp1, emp2);
    display(elder);
}

fn display(emp: Employee) {
    println!("Name is: {} company is {} age is {}", emp.name, emp.company, emp.age);
}`}
        </pre>
      

      {/* Methods in structure */}
    
        <h2 className="text-2xl font-bold">Methods in a Structure</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`struct Rectangle {
    width: u32,
    height: u32
}

impl Rectangle {
    fn area(&self) -> u32 {
        self.width * self.height
    }
}

fn main() {
    let small = Rectangle { width: 10, height: 20 };
    println!("width is {} height is {} area of Rectangle is {}", small.width, small.height, small.area());
}`}
        </pre>
     

      {/* Static method in structure */}
    
        <h2 className="text-2xl font-bold">Static Methods in a Structure</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`struct Point {
    x: i32,
    y: i32
}

impl Point {
    fn getInstance(x: i32, y: i32) -> Point {
        Point { x, y }
    }

    fn display(&self) {
        println!("x = {} y = {}", self.x, self.y);
    }
}

fn main() {
    let p1 = Point::getInstance(10, 20);
    p1.display();
}`}
        </pre>
  
    </motion.div>
  );
};

export default RustStructures;
