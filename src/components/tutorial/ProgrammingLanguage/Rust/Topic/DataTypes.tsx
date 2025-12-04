import React from "react";

const RustDataTypes: React.FC = () => (
  <div className="mt-20 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-3">
      Rust – Data Types
    </h1>

    {/* Intro */}
    <p className="leading-relaxed">
      The Type System represents the different types of values supported by the
      language. It ensures values are valid before they are stored or manipulated,
      allowing Rust programs to behave as expected.
    </p>

    <p className="leading-relaxed">
      Rust is a <strong>statically typed</strong> language, meaning every value has
      a specific data type. Rust can also <strong>infer</strong> the type from the
      assigned value.
    </p>

    {/* Declare a Variable */}
    <h2 className="text-2xl font-bold mt-10">Declare a Variable</h2>

    <p className="leading-relaxed">
      Use the <code>let</code> keyword to declare a variable.
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
   let company_string = "TutorialsPoint";  // string type
   let rating_float = 4.5;                 // float type
   let is_growing_boolean = true;          // boolean type
   let icon_char = '⭐';                    // unicode character type

   println!("company name is:{}", company_string);
   println!("company rating on 5 is:{}", rating_float);
   println!("company is growing :{}", is_growing_boolean);
   println!("company icon is:{}", icon_char);
}`}
    </pre>

    <p className="leading-relaxed">
      The <code>println!</code> macro uses  as a placeholder,
      which gets replaced by the variable's value.
    </p>

    {/* Scalar Types */}
    <h2 className="text-2xl font-bold mt-10">Scalar Types</h2>

    <p className="leading-relaxed">
      A scalar type represents a single value. Rust has four primary scalar types:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Integer</li>
      <li>Floating-point</li>
      <li>Boolean</li>
      <li>Character</li>
    </ul>

    {/* Integer */}
    <h2 className="text-2xl font-bold mt-10">Integer</h2>

    <p className="leading-relaxed">
      Integers represent whole numbers without fractional parts. They come in
      signed and unsigned forms.
    </p>

    {/* Integer table */}
    <table className="w-full border border-gray-300 mt-4">
      <thead>
        <tr className="bg-gray-200">
          <th className="border px-4 py-2">Size</th>
          <th className="border px-4 py-2">Signed</th>
          <th className="border px-4 py-2">Unsigned</th>
        </tr>
      </thead>
      <tbody>
        {[
          ["8 bit", "i8", "u8"],
          ["16 bit", "i16", "u16"],
          ["32 bit", "i32", "u32"],
          ["64 bit", "i64", "u64"],
          ["128 bit", "i128", "u128"],
          ["Arch", "isize", "usize"],
        ].map(([size, signed, unsigned], idx) => (
          <tr key={idx} className="text-center">
            <td className="border px-4 py-2">{size}</td>
            <td className="border px-4 py-2">{signed}</td>
            <td className="border px-4 py-2">{unsigned}</td>
          </tr>
        ))}
      </tbody>
    </table>

    {/* Integer Example */}
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-4">
{`fn main() {
   let result = 10;      // i32 by default
   let age: u32 = 20;
   let sum: i32 = 5 - 15;
   let mark: isize = 10;
   let count: usize = 30;

   println!("result value is {}", result);
   println!("sum is {} and age is {}", sum, age);
   println!("mark is {} and count is {}", mark, count);
}`}
    </pre>

    {/* Integer Overflow */}
    <h3 className="text-xl font-bold mt-8">Integer Overflow</h3>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
   let age: u8 = 255;

   let weight: u8 = 256;  // overflow: 0
   let height: u8 = 257;  // overflow: 1
   let score: u8 = 258;   // overflow: 2

   println!("age is {}", age);
   println!("weight is {}", weight);
   println!("height is {}", height);
   println!("score is {}", score);
}`}
    </pre>

    {/* Float */}
    <h2 className="text-2xl font-bold mt-10">Float</h2>

    <p className="leading-relaxed">
      Rust has two floating-point types: <strong>f32</strong> and{" "}
      <strong>f64</strong> (default).
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
   let result = 10.00;        // f64 by default
   let interest: f32 = 8.35;
   let cost: f64 = 15000.600;

   println!("result value is {}", result);
   println!("interest is {}", interest);
   println!("cost is {}", cost);
}`}
    </pre>

    {/* Automatic Type Casting */}
    <h2 className="text-2xl font-bold mt-10">Automatic Type Casting</h2>

    <p className="leading-relaxed">
      Rust does <strong>not</strong> support automatic type conversion.
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
   let interest: f32 = 8;   
   println!("interest is {}", interest);
}`}
    </pre>

    {/* Number Separator */}
    <h2 className="text-2xl font-bold mt-10">Number Separator</h2>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
   let float_with_separator = 11_000.555_001;
   println!("float value {}", float_with_separator);

   let int_with_separator = 50_000;
   println!("int value {}", int_with_separator);
}`}
    </pre>

    {/* Boolean */}
    <h2 className="text-2xl font-bold mt-10">Boolean</h2>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
   let isfun: bool = true;
   println!("Is Rust Programming Fun? {}", isfun);
}`}
    </pre>

    {/* Character */}
    <h2 className="text-2xl font-bold mt-10">Character</h2>

    <p className="leading-relaxed">
      Rust’s <code>char</code> type represents a Unicode scalar value.
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fn main() {
   let special_character = '@';
   let alphabet: char = 'A';
   let emoji: char = '🔥';

   println!("special character is {}", special_character);
   println!("alphabet is {}", alphabet);
   println!("emoji is {}", emoji);
}`}
    </pre>
  </div>
);

export default RustDataTypes;
