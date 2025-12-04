import React from "react";

const DartStrings: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        Dart Programming – Strings
      </h1>

      <p>
        The <strong>String</strong> data type represents a sequence of characters. A Dart string is a
        sequence of UTF-16 code units and can be created using single, double, or triple quotes.
      </p>

      <p>Triple quotes are used for multi-line strings.</p>

      <h2 className="text-2xl font-bold">Syntax</h2>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`String variable_name = 'value';

String variable_name = "value";

String variable_name = '''line1
line2''';

String variable_name = """line1
line2""";`}
      </pre>

      <h2 className="text-2xl font-bold">Example</h2>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`void main() { 
   String str1 = 'this is a single line string'; 
   String str2 = "this is a single line string"; 
   String str3 = '''this is a multiline line string'''; 
   String str4 = """this is a multiline line string"""; 
   
   print(str1);
   print(str2); 
   print(str3); 
   print(str4); 
}`}
      </pre>

      <p><strong>Output:</strong></p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`this is a single line string
this is a single line string
this is a multiline line string
this is a multiline line string`}
      </pre>

      <p>
        Strings in Dart are immutable. However, several operations allow you to create new modified
        strings.
      </p>

      <h2 className="text-2xl font-bold">String Interpolation</h2>

      <p>
        Concatenation or interpolation allows creating new strings by inserting values inside static
        strings. The <strong>+</strong> operator and <strong>${"{}"}</strong> syntax are commonly used.
      </p>

      <h3 className="text-xl font-semibold">Example 1: Concatenation</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`void main() { 
   String str1 = "hello"; 
   String str2 = "world"; 
   String res = str1 + str2; 
   
   print("The concatenated string : ${"res"}"); 
}`}
      </pre>

      <p><strong>Output:</strong></p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`The concatenated string : helloworld`}
      </pre>

      <h3 className="text-xl font-semibold">Example 2: Expression Interpolation</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`void main() { 
   int n = 1 + 1; 
   
   String str1 = "The sum of 1 and 1 is ${"n"}"; 
   print(str1); 
   
   String str2 = "The sum of 2 and 2 is ${2 + 2}"; 
   print(str2); 
}`}
      </pre>

      <p><strong>Output:</strong></p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`The sum of 1 and 1 is 2
The sum of 2 and 2 is 4`}
      </pre>

      <h2 className="text-2xl font-bold">String Properties</h2>

      <table className="w-full border mt-4">
        <thead className="border-b">
          <tr>
            <th className="p-2 font-semibold text-left">Property</th>
            <th className="p-2 font-semibold text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["codeUnits", "Returns the UTF-16 code units of the string."],
            ["isEmpty", "True if the string is empty."],
            ["length", "Returns the length of the string."]
          ].map(([prop, desc], i) => (
            <tr key={i} className="border-b">
              <td className="p-2 font-medium">{prop}</td>
              <td className="p-2">{desc}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="text-2xl font-bold">String Methods</h2>

      <table className="w-full border mt-4">
        <thead className="border-b">
          <tr>
            <th className="p-2 font-semibold text-left">Method</th>
            <th className="p-2 font-semibold text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["toLowerCase()", "Converts all characters to lowercase."],
            ["toUpperCase()", "Converts all characters to uppercase."],
            ["trim()", "Removes leading and trailing spaces."],
            ["compareTo()", "Compares this string to another."],
            ["replaceAll()", "Replaces all matching substrings."],
            ["split()", "Splits the string into a list of substrings."],
            ["substring()", "Returns part of the string by index range."],
            ["toString()", "Returns the string itself."],
            ["codeUnitAt()", "Returns the UTF-16 code unit at an index."]
          ].map(([method, desc], i) => (
            <tr key={i} className="border-b">
              <td className="p-2 font-medium">{method}</td>
              <td className="p-2">{desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DartStrings;
