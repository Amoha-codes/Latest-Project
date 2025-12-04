import React from "react";
import { motion } from "framer-motion";

const RustModules: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-20 space-y-10"
    >
      <h1 className="text-4xl font-extrabold border-b pb-3">Rust - Modules</h1>

      {/* Intro */}
      
        <p>
          A <strong>module</strong> is a logical group of code. Multiple modules are compiled into a unit called a <strong>crate</strong>.
          Rust programs may contain a <strong>binary crate</strong> (executable with <code>main()</code>) or a <strong>library crate</strong> (reusable components without <code>main()</code>).
        </p>
        <p>Modules are similar to namespaces in other languages. Modules are private by default; public modules are prefixed with <code>pub</code>.</p>


      {/* Module Syntax */}
    
        <h2 className="text-2xl font-bold">Module Syntax</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`// Public module
pub mod a_public_module {
    pub fn a_public_function() {
        println!("This is public");
    }
    fn a_private_function() {
        println!("This is private");
    }
}

// Private module
mod a_private_module {
    fn a_private_function() {}
}`}
        </pre>


      {/* Defining a Module */}
      
        <h2 className="text-2xl font-bold">Defining a Module</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`pub mod movies {
    pub fn play(name: String) {
        println!("Playing movie {}", name);
    }
}

fn main() {
    movies::play("Herold and Kumar".to_string());
}`}
        </pre>
        <p>Output:</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`Playing movie Herold and Kumar`}
        </pre>
     

      {/* Using `use` keyword */}

        <h2 className="text-2xl font-bold">Using <code>use</code> Keyword</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`pub mod movies {
    pub fn play(name: String) {
        println!("Playing movie {}", name);
    }
}

use movies::play;

fn main() {
    play("Herold and Kumar".to_string());
}`}
        </pre>
        <p>Output:</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`Playing movie Herold and Kumar`}
        </pre>
  

      {/* Nested Modules */}
      
        <h2 className="text-2xl font-bold">Nested Modules</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`pub mod movies {
    pub mod english {
        pub mod comedy {
            pub fn play(name: String) {
                println!("Playing comedy movie {}", name);
            }
        }
    }
}

use movies::english::comedy::play;

fn main() {
    // Short path
    play("Herold and Kumar".to_string());
    play("The Hangover".to_string());

    // Full path
    movies::english::comedy::play("Airplane!".to_string());
}`}
        </pre>
        <p>Output:</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`Playing comedy movie Herold and Kumar
Playing comedy movie The Hangover
Playing comedy movie Airplane!`}
        </pre>
     

      {/* Library Crate Example */}
      
        <h2 className="text-2xl font-bold">Library Crate Example</h2>
        <p>
          Create a library crate <code>movie_lib</code> with a module <code>movies</code>. Then consume it in a binary crate.
        </p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`// movie-lib/src/movies.rs
pub fn play(name: String) {
    println!("Playing movie {} : movies-app", name);
}

// movie-lib/src/lib.rs
pub mod movies;

// Binary crate - main.rs
extern crate movies_lib;
use movies_lib::movies::play;

fn main() {
    println!("Inside main of test");
    play("Tutorialspoint".to_string());
}`}
        </pre>
        <p>Output when running binary crate:</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`Inside main of test
Playing movie Tutorialspoint : movies-app`}
        </pre>
   
    </motion.div>
  );
};

export default RustModules;
