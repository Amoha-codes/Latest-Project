import React from "react";
import { motion } from "framer-motion";

const RustEnums: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-20 space-y-10"
    >
      <h1 className="text-4xl font-extrabold border-b pb-3">Rust - Enums</h1>

      {/* Intro */}
      <div className="rounded-2xl shadow-md p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 space-y-4">
        <p>
          Enums in Rust are used to define a type that can have one of several possible variants.
        </p>
      </div>

      {/* Basic Enum */}
 
        <h2 className="text-2xl font-bold">Basic Enum</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`#[derive(Debug)]
enum GenderCategory {
    Male,
    Female
}

fn main() {
    let male = GenderCategory::Male;
    let female = GenderCategory::Female;

    println!("{:?}", male);
    println!("{:?}", female);
}`}
        </pre>
        <p>Output:</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`Male
Female`}
        </pre>
     

      {/* Struct + Enum */}

        <h2 className="text-2xl font-bold">Struct and Enum</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`#[derive(Debug)]
enum GenderCategory {
    Male,
    Female
}

#[derive(Debug)]
struct Person {
    name: String,
    gender: GenderCategory
}

fn main() {
    let p1 = Person { name: String::from("Mohtashim"), gender: GenderCategory::Male };
    let p2 = Person { name: String::from("Amy"), gender: GenderCategory::Female };

    println!("{:?}", p1);
    println!("{:?}", p2);
}`}
        </pre>
        <p>Output:</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`Person { name: "Mohtashim", gender: Male }
Person { name: "Amy", gender: Female }`}
        </pre>
      
      {/* Option Enum */}
    
        <h2 className="text-2xl font-bold">Option Enum</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn is_even(no: i32) -> Option<bool> {
    if no % 2 == 0 {
        Some(true)
    } else {
        None
    }
}

fn main() {
    println!("{:?}", is_even(3));
    println!("{:?}", is_even(30));
}`}
        </pre>
        <p>Output:</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`None
Some(true)`}
        </pre>
      
      {/* Match with Enum */}
     
        <h2 className="text-2xl font-bold">Match Statement with Enum</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`enum CarType {
    Hatch,
    Sedan,
    SUV
}

fn print_size(car: CarType) {
    match car {
        CarType::Hatch => println!("Small sized car"),
        CarType::Sedan => println!("Medium sized car"),
        CarType::SUV => println!("Large sized Sports Utility car"),
    }
}

fn main() {
    print_size(CarType::SUV);
    print_size(CarType::Hatch);
    print_size(CarType::Sedan);
}`}
        </pre>
        <p>Output:</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`Large sized Sports Utility car
Small sized car
Medium sized car`}
        </pre>
      
      {/* Enum with Data */}

        <h2 className="text-2xl font-bold">Enum with Data</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`#[derive(Debug)]
enum GenderCategory {
    Name(String),
    Usr_ID(i32)
}

fn main() {
    let p1 = GenderCategory::Name(String::from("Mohtashim"));
    let p2 = GenderCategory::Usr_ID(100);

    println!("{:?}", p1);
    println!("{:?}", p2);

    match p1 {
        GenderCategory::Name(val) => println!("{}", val),
        GenderCategory::Usr_ID(val) => println!("{}", val),
    }
}`}
        </pre>
        <p>Output:</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`Name("Mohtashim")
Usr_ID(100)
Mohtashim`}
        </pre>
      
    </motion.div>
  );
};

export default RustEnums;
