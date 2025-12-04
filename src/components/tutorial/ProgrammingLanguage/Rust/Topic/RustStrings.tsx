import React from "react";

const RustString: React.FC = () => {
  return (
    <div className="p-8 space-y-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg text-gray-800 dark:text-gray-100 mt-20">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b pb-3">Rust - String</h1>

      <p className="leading-relaxed">
        In Rust, strings are of two types: <strong>String Literal (&str)</strong> and
        <strong> String Object (String)</strong>. Both represent text but differ in how they store and manage memory.
      </p>

      {/* String Literal */}
      <h2 className="text-2xl font-bold mt-8">1. String Literal (&str)</h2>
      <p>
        A string literal is a fixed string stored in the program’s binary. It is immutable and known at compile time.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
    let company: &str = "TutorialsPoint";
    let location: &str = "Hyderabad";
    println!("company: {} location: {}", company, location);
}`}
      </pre>

      <p className="leading-relaxed">
        String literals are static by default, meaning they live for the entire duration of the program.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
    let company: &'static str = "TutorialsPoint";
    let location: &'static str = "Hyderabad";
    println!("company: {} location: {}", company, location);
}`}
      </pre>

      {/* String Object */}
      <h2 className="text-2xl font-bold mt-8">2. String Object (String)</h2>
      <p>
        A <strong>String</strong> is a growable, mutable, heap-allocated UTF-8 encoded text type.
      </p>

      <h3 className="text-xl font-semibold">Creating String Object</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
    let empty_string = String::new();
    println!("length: {}", empty_string.len());

    let content_string = String::from("TutorialsPoint");
    println!("length: {}", content_string.len());
}`}
      </pre>

      {/* Common Methods */}
      <h2 className="text-2xl font-bold mt-8">3. Common Methods</h2>

      <h3 className="text-xl font-semibold">new()</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
    let mut z = String::new();
    z.push_str("hello");
    println!("{}", z);
}`}
      </pre>

      <h3 className="text-xl font-semibold">to_string()</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
    let name = "Hello TutorialsPoint, Hello!".to_string();
    println!("{}", name);
}`}
      </pre>

      <h3 className="text-xl font-semibold">replace()</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
    let text = "Hello TutorialsPoint, Hello!".to_string();
    let new_text = text.replace("Hello", "Howdy");
    println!("{}", new_text);
}`}
      </pre>

      <h3 className="text-xl font-semibold">as_str()</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
    let example = String::from("example_string");
    print_literal(example.as_str());
}

fn print_literal(data: &str) {
    println!("literal: {}", data);
}`}
      </pre>

      <h3 className="text-xl font-semibold">push() & push_str()</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
    let mut company = "Tutorial".to_string();
    company.push('s');
    println!("{}", company);
}`}
      </pre>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
    let mut company = "Tutorials".to_string();
    company.push_str(" Point");
    println!("{}", company);
}`}
      </pre>

      <h3 className="text-xl font-semibold">len()</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
    let fullname = " Tutorials Point";
    println!("length: {}", fullname.len());
}`}
      </pre>

      <h3 className="text-xl font-semibold">trim()</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
    let fullname = " Tutorials Point \\r\\n";
    println!("Before trim: {}", fullname.len());
    println!("After trim: {}", fullname.trim().len());
}`}
      </pre>

      <h3 className="text-xl font-semibold">split_whitespace()</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
    let msg = "Tutorials Point has good tutorials".to_string();
    let mut i = 1;

    for token in msg.split_whitespace() {
        println!("token {} {}", i, token);
        i += 1;
    }
}`}
      </pre>

      <h3 className="text-xl font-semibold">split()</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
    let fullname = "Kannan,Sudhakaran,Tutorialspoint";

    for token in fullname.split(",") {
        println!("token: {}", token);
    }

    let tokens: Vec<&str> = fullname.split(",").collect();
    println!("firstname: {}", tokens[0]);
    println!("lastname: {}", tokens[1]);
    println!("company: {}", tokens[2]);
}`}
      </pre>

      <h3 className="text-xl font-semibold">chars()</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
    let n1 = "Tutorials".to_string();

    for c in n1.chars() {
        println!("{}", c);
    }
}`}
      </pre>

      {/* Concatenation */}
      <h2 className="text-2xl font-bold mt-8">4. String Concatenation</h2>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
    let n1 = "Tutorials".to_string();
    let n2 = "Point".to_string();

    let n3 = n1 + &n2;
    println!("{}", n3);
}`}
      </pre>

      {/* Type Casting */}
      <h2 className="text-2xl font-bold mt-8">5. Type Casting</h2>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
    let number = 2020;
    let number_str = number.to_string();

    println!("{}", number_str);
    println!("{}", number_str == "2020");
}`}
      </pre>

      {/* Format Macro */}
      <h2 className="text-2xl font-bold mt-8">6. Format! Macro</h2>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
    let n1 = "Tutorials".to_string();
    let n2 = "Point".to_string();

    let n3 = format!("{} {}", n1, n2);
    println!("{}", n3);
}`}
      </pre>

    </div>
  );
};

export default RustString;
