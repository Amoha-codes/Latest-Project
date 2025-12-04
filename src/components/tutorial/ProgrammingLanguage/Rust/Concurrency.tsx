import React from "react";
import { motion } from "framer-motion";

const RustConcurrency: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-20 space-y-10"
    >
      <h1 className="text-4xl font-extrabold border-b pb-3">Rust - Concurrency</h1>

      {/* Threads Section */}
 
        <h2 className="text-2xl font-bold">Threads</h2>
        <p>
          Threads allow different parts of a program to execute independently. In Rust, you can spawn
          threads using <code>thread::spawn</code>.
        </p>

        <h3 className="font-semibold mt-2">Example - Creating a Thread</h3>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`use std::thread;
use std::time::Duration;

fn main() {
    thread::spawn(|| {
        for i in 1..10 {
            println!("hi number {} from the spawned thread!", i);
            thread::sleep(Duration::from_millis(1));
        }
    });

    for i in 1..5 {
        println!("hi number {} from the main thread!", i);
        thread::sleep(Duration::from_millis(1));
    }
}`}
        </pre>
        <p>Output (may vary):</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`hi number 1 from the main thread!
hi number 1 from the spawned thread!
hi number 2 from the main thread!
hi number 2 from the spawned thread!
hi number 3 from the main thread!
hi number 3 from the spawned thread!
hi number 4 from the spawned thread!
hi number 4 from the main thread!`}
        </pre>
      

      {/* Join Handles Section */}
 
        <h2 className="text-2xl font-bold">Join Handles</h2>
        <p>
          Spawned threads may not run completely if the main thread finishes first. Use a{" "}
          <code>JoinHandle</code> and <code>join()</code> to wait for the thread to finish.
        </p>

        <h3 className="font-semibold mt-2">Example - Join Handle</h3>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`use std::thread;
use std::time::Duration;

fn main() {
    let handle = thread::spawn(|| {
        for i in 1..10 {
            println!("hi number {} from the spawned thread!", i);
            thread::sleep(Duration::from_millis(1));
        }
    });

    for i in 1..5 {
        println!("hi number {} from the main thread!", i);
        thread::sleep(Duration::from_millis(1));
    }

    handle.join().unwrap();
}`}
        </pre>
        <p>Output (may vary):</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`hi number 1 from the main thread!
hi number 1 from the spawned thread!
hi number 2 from the spawned thread!
hi number 2 from the main thread!
...
hi number 9 from the spawned thread!`}
        </pre>
        <p>
          The <code>join()</code> ensures the main thread waits for the spawned thread to complete.
        </p>
      
    </motion.div>
  );
};

export default RustConcurrency;
