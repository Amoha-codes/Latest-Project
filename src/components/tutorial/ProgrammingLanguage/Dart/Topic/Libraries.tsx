import React from "react";

const DartLibraries: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        Dart Programming - Libraries
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        A <span className="font-semibold">library</span> in Dart is a collection of reusable routines, including classes, constants, functions, typedefs, and exceptions. Libraries allow code to be organized and reused across programs.
      </p>

      {/* Importing a Library */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Importing a Library</h2>
        <p className="leading-relaxed">
          Use the <span className="font-semibold">import</span> keyword to include a library. You can import multiple libraries in a single file.
        </p>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          <pre>
            <code>{`import 'dart:io';
import 'package:lib1/libfile.dart';`}</code>
          </pre>
        </div>

        <h3 className="text-xl font-semibold">Selective Import</h3>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          <pre>
            <code>{`import 'package:lib1/lib1.dart' show foo, bar;   // Only foo & bar
import 'package:mylib/mylib.dart' hide foo;          // All except foo`}</code>
          </pre>
        </div>
      </div>

      {/* Common Libraries */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Common Dart Libraries</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><span className="font-semibold">dart:io</span> - File, socket, HTTP, and server-side I/O support.</li>
          <li><span className="font-semibold">dart:core</span> - Built-in types, collections, and core functionalities (auto-imported).</li>
          <li><span className="font-semibold">dart:math</span> - Math constants, functions, and random numbers.</li>
          <li><span className="font-semibold">dart:convert</span> - Encoders/decoders (JSON, UTF-8).</li>
          <li><span className="font-semibold">dart:typed_data</span> - Efficient fixed-size lists (e.g., unsigned integers).</li>
        </ul>

   
        <p className="leading-relaxed font-semibold">Output:</p>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          Square root of 36 is: 6.0
        </div>
      </div>

      {/* Encapsulation */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Encapsulation in Libraries</h2>
        <p className="leading-relaxed">
          Prefix identifiers with an underscore <span className="font-semibold">_</span> to make them private to the library.
        </p>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          <pre>
            <code>{`library loggerlib;

void _log(msg) {
  print("Log method called: $msg");
}

// Importing and calling _log externally will result in an error.`}</code>
          </pre>
        </div>
      </div>

      {/* Custom Library */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Creating a Custom Library</h2>
        <p className="leading-relaxed">Steps to create a custom library:</p>
        <ol className="list-decimal list-inside space-y-2">
          <li>Declare a library using <span className="font-semibold">library library_name;</span></li>
          <li>Associate/import the library using <span className="font-semibold">import 'library_name';</span></li>
        </ol>

        <h3 className="text-xl font-semibold">Example: calculator.dart</h3>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          <pre>
            <code>{`library calculator_lib;
import 'dart:math';

int add(int a, int b) {
  print("inside add method");
  return a + b;
}

int modulus(int a, int b) {
  print("inside modulus method");
  return a % b;
}

int randomInt(int max) {
  return Random().nextInt(max);
}`}</code>
          </pre>
        </div>

        <h3 className="text-xl font-semibold">Using the Custom Library</h3>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          <pre>
            <code>{`import 'calculator.dart';

void main() {
  var num1 = 10;
  var num2 = 20;
  var sum = add(num1, num2);
  var mod = modulus(num1, num2);
  var r = randomInt(10);

  print("$num1 + $num2 = $sum");
  print("$num1 % $num2 = $mod");
  print("random no $r");
}`}</code>
          </pre>
        </div>

        <p className="leading-relaxed font-semibold">Output (example):</p>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          inside add method <br />
          inside modulus method <br />
          10 + 20 = 30 <br />
          10 % 20 = 10 <br />
          random no 0
        </div>
      </div>

      {/* Library Prefix */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Library Prefix</h2>
        <p className="leading-relaxed">
          Use <span className="font-semibold">as</span> to assign a prefix to libraries and avoid identifier conflicts.
        </p>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          <pre>
            <code>{`import 'loggerlib.dart';
import 'webloggerlib.dart' as web;

void main() {
  log("hello from loggerlib");
  web.log("hello from webloggerlib");
}`}</code>
          </pre>
        </div>
        <p className="leading-relaxed font-semibold">Output:</p>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          Log method called in loggerlib msg: hello from loggerlib <br />
          Log method called in webloggerlib msg: hello from webloggerlib
        </div>
      </div>
    </div>
  );
};

export default DartLibraries;
