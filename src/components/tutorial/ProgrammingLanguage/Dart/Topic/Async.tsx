import React from "react";

const DartAsync: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        Dart Programming - Async
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        An <span className="font-semibold">asynchronous operation</span> executes in a thread separate from the main application thread. The main application can continue executing while the asynchronous task is running.
      </p>

      {/* Synchronous Example */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Synchronous Example</h2>
        <p className="leading-relaxed">
          The <span className="font-semibold">stdin.readLineSync()</span> method is synchronous, which means it blocks execution until input is provided.
        </p>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          <pre>
            <code>{`import 'dart:io';

void main() {
  print("Enter your name:");
  
  String name = stdin.readLineSync(); // waits for user input

  print("Hello Mr. ${name}");
  print("End of main");
}`}</code>
          </pre>
        </div>
        <p className="leading-relaxed font-semibold">Output:</p>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          Enter your name : <br />
          Tom <br />
          Hello Mr. Tom <br />
          End of main
        </div>
      </div>

      {/* Async Concept */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Asynchronous Programming Concept</h2>
        <p className="leading-relaxed">
          In asynchronous programming, the application does <span className="font-semibold">not wait</span> for a task to finish. For example, a web server should handle multiple requests without waiting for the current request to complete.
        </p>
        <p className="leading-relaxed">
          Dart provides the <span className="font-semibold">dart:async</span> package to implement asynchronous operations.
        </p>
      </div>

      {/* Async Example */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Example: Reading a File Asynchronously</h2>
        <p className="leading-relaxed">
          Create a file <span className="font-semibold">contact.txt</span> in the <span className="font-semibold">data</span> folder:
        </p>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          <pre>
            <code>{`1, Tom
2, John
3, Tim
4, Jane`}</code>
          </pre>
        </div>

        <p className="leading-relaxed">Dart program to read the file asynchronously:</p>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          <pre>
            <code>{`import 'dart:async';
import 'dart:io';

void main() {
  File file = File(Directory.current.path + "\\data\\contact.txt");
  Future<String> f = file.readAsString(); // Async method returns a Future

  f.then((data) => print(data)); // Callback executed once file is read

  print("End of main"); // Executes first, demonstrating non-blocking
}`}</code>
          </pre>
        </div>

        <p className="leading-relaxed font-semibold">Output:</p>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          End of main <br />
          1, Tom <br />
          2, John <br />
          3, Tim <br />
          4, Jane
        </div>
      </div>

      {/* Dart Future */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Dart Future</h2>
        <p className="leading-relaxed">
          A <span className="font-semibold">Future</span> represents a value that will be available sometime in the future. Many Dart asynchronous methods return a <span className="font-semibold">Future</span>.
        </p>
        <p className="leading-relaxed">
          Futures allow Dart programs to run non-blocking code, avoiding freezes even in single-threaded execution. Once the asynchronous operation completes, the result can be processed using <span className="font-semibold">then()</span> or <span className="font-semibold">await</span>.
        </p>
      </div>
    </div>
  );
};

export default DartAsync;
