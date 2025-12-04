import React from "react";
import { motion } from "framer-motion";

const RustFileIO: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-20 space-y-10"
    >
      <h1 className="text-4xl font-extrabold border-b pb-3">
        Rust - File Input / Output
      </h1>

      {/* File struct methods */}
   
        <h2 className="text-2xl font-bold">File Struct Methods</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li><b>open():</b> Open a file in read-only mode.</li>
          <li><b>create():</b> Create a new file in write-only mode (overwrites if exists).</li>
          <li><b>remove_file():</b> Deletes a file.</li>
          <li><b>append():</b> Opens file in append mode.</li>
          <li><b>write_all():</b> Writes an entire buffer to a file.</li>
          <li><b>read_to_string():</b> Reads file contents into a string.</li>
        </ul>
      

      {/* Writing to a File */}
   
        <h2 className="text-2xl font-bold">Write to a File</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`use std::io::Write;

fn main() {
    let mut file = std::fs::File::create("data.txt").expect("create failed");
    file.write_all("Hello World".as_bytes()).expect("write failed");
    file.write_all("\\nTutorialsPoint".as_bytes()).expect("write failed");
    println!("data written to file");
}`}
        </pre>
        <p>Output:</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`data written to file`}
        </pre>
      

      {/* Reading from a File */}
   
        <h2 className="text-2xl font-bold">Read from a File</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`use std::io::Read;

fn main() {
    let mut file = std::fs::File::open("data.txt").unwrap();
    let mut contents = String::new();
    file.read_to_string(&mut contents).unwrap();
    print!("{}", contents);
}`}
        </pre>
        <p>Output:</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`Hello World
TutorialsPoint`}
        </pre>
      

      {/* Delete a File */}
   
        <h2 className="text-2xl font-bold">Delete a File</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`use std::fs;

fn main() {
    fs::remove_file("data.txt").expect("could not remove file");
    println!("file is removed");
}`}
        </pre>
        <p>Output:</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`file is removed`}
        </pre>
      

      {/* Append Data to a File */}
   
        <h2 className="text-2xl font-bold">Append Data to a File</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`use std::fs::OpenOptions;
use std::io::Write;

fn main() {
    let mut file = OpenOptions::new()
        .append(true)
        .open("data.txt")
        .expect("cannot open file");
    file.write_all("Hello World".as_bytes()).expect("write failed");
    file.write_all("\\nTutorialsPoint".as_bytes()).expect("write failed");
    println!("file append success");
}`}
        </pre>
        <p>Output:</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`file append success`}
        </pre>
      

      {/* Copy a File */}
   
        <h2 className="text-2xl font-bold">Copy a File</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`use std::io::{Read, Write};

fn main() {
    let mut args = std::env::args();
    args.next().unwrap(); // skip executable name
    let source = args.next().unwrap();
    let destination = args.next().unwrap();

    let mut file_in = std::fs::File::open(source).unwrap();
    let mut file_out = std::fs::File::create(destination).unwrap();
    let mut buffer = [0u8; 4096];

    loop {
        let nbytes = file_in.read(&mut buffer).unwrap();
        file_out.write(&buffer[..nbytes]).unwrap();
        if nbytes < buffer.len() { break; }
    }
}`}
        </pre>
        <p>Execution Example:</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`> main.exe data.txt datacopy.txt
Copies content from data.txt to datacopy.txt`}
        </pre>
      
    </motion.div>
  );
};

export default RustFileIO;
