import React from "react";
import { motion } from "framer-motion";

const RustPackage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-20 space-y-10"
    >
      <h1 className="text-4xl font-extrabold border-b pb-3">Rust - Package Manager (Cargo)</h1>

      {/* Cargo Commands */}

        <h2 className="text-2xl font-bold">Common Cargo Commands</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li><b>cargo build:</b> Compiles the current project.</li>
          <li><b>cargo check:</b> Analyzes the project, reports errors without building.</li>
          <li><b>cargo run:</b> Builds and executes <code>src/main.rs</code>.</li>
          <li><b>cargo clean:</b> Removes the target directory.</li>
          <li><b>cargo update:</b> Updates dependencies listed in <code>Cargo.lock</code>.</li>
          <li><b>cargo new:</b> Creates a new cargo project.</li>
        </ul>
      

      {/* Creating a new cargo project */}

        <h2 className="text-2xl font-bold">Create a New Cargo Project</h2>
        <p>Create a binary crate:</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`cargo new project_name --bin`}
        </pre>
        <p>Create a library crate:</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`cargo new project_name --lib`}
        </pre>
        <p>Check cargo version:</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`cargo --version`}
        </pre>
      

      {/* Guessing Game Example */}

        <h2 className="text-2xl font-bold">Number Guessing Game using Cargo</h2>
        <p>Step 1: Create a new binary project:</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`cargo new guess-game-app --bin`}
        </pre>

        <p>Step 2: Add dependency <code>rand</code> in <code>Cargo.toml</code>:</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`[dependencies]
rand = "0.5.5"`}
        </pre>

        <p>Step 3: Edit <code>main.rs</code>:</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`use std::io;
extern crate rand;
use rand::random;

fn get_guess() -> u8 {
    loop {
        println!("Input guess");
        let mut guess = String::new();
        io::stdin().read_line(&mut guess)
            .expect("could not read from stdin");
        match guess.trim().parse::<u8>() {
            Ok(v) => return v,
            Err(e) => println!("could not understand input {}", e)
        }
    }
}

fn handle_guess(guess: u8, correct: u8) -> bool {
    if guess < correct {
        println!("Too low");
        false
    } else if guess > correct {
        println!("Too high");
        false
    } else {
        println!("You got it ..");
        true
    }
}

fn main() {
    println!("Welcome to number guessing game");
    let correct: u8 = random();
    println!("correct value is {}", correct);
    loop {
        let guess = get_guess();
        if handle_guess(guess, correct) { break; }
    }
}`}
        </pre>

        <p>Step 4: Compile and run:</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`cargo run`}
        </pre>

        <p>Example Output:</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`Welcome to number guessing game
correct value is 97
Input guess
20
Too low
Input guess
100
Too high
Input guess
97
You got it ..`}
        </pre>
      
    </motion.div>
  );
};

export default RustPackage;
