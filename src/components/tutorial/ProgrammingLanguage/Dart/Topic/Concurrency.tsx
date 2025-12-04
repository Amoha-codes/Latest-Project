import React from "react";

const DartConcurrency: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        Dart Programming - Concurrency
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        <span className="font-semibold">Concurrency</span> refers to executing multiple instruction sequences simultaneously. Dart provides the <span className="font-semibold">Isolate</span> class to perform tasks in parallel and take advantage of multicore processors.
      </p>

      <p className="leading-relaxed">
        An <span className="font-semibold">Isolate</span> is an independent unit of execution. Isolates do not share memory; the only way to communicate between them is by passing messages.
      </p>

      {/* Example */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Example: Running Functions in Parallel</h2>
        <p className="leading-relaxed">
          The following code demonstrates spawning multiple isolates using the <span className="font-semibold">Isolate.spawn()</span> method:
        </p>

        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          <pre>
            <code>{`import 'dart:isolate';

void foo(var message) {
  print('Execution from foo ... the message is: ${"message"}');
}

void main() {
  Isolate.spawn(foo, 'Hello!!');
  Isolate.spawn(foo, 'Greetings!!');
  Isolate.spawn(foo, 'Welcome!!');

  print('Execution from main1');
  print('Execution from main2');
  print('Execution from main3');
}`}</code>
          </pre>
        </div>

        <p className="leading-relaxed font-semibold">Notes:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <span className="font-semibold">spawn()</span> takes two arguments: the function to run and an object passed to it.
          </li>
          <li>If no object is needed, you can pass <span className="font-semibold">null</span>.</li>
          <li>Isolates run independently, so the order of execution between <code>main</code> and <code>foo</code> is not guaranteed.</li>
        </ul>

        <p className="leading-relaxed font-semibold">Possible Output 1:</p>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          execution from main1 <br />
          execution from main2 <br />
          execution from main3 <br />
          execution from foo ... the message is: Hello!!
        </div>

        <p className="leading-relaxed font-semibold">Possible Output 2:</p>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          execution from main1 <br />
          execution from main2 <br />
          execution from main3 <br />
          execution from foo ... the message is: Welcome!! <br />
          execution from foo ... the message is: Hello!! <br />
          execution from foo ... the message is: Greetings!!
        </div>
      </div>

      {/* Isolate vs Future */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Isolate vs Future</h2>
        <p className="leading-relaxed">
          While <span className="font-semibold">Future</span> is used to handle asynchronous tasks in a single thread, <span className="font-semibold">Isolates</span> provide true parallel execution by running independent memory spaces.
        </p>
        <p className="leading-relaxed">
          Use <span className="font-semibold">Future</span> for non-blocking asynchronous operations and <span className="font-semibold">Isolates</span> for CPU-intensive parallel computation.
        </p>
      </div>
    </div>
  );
};

export default DartConcurrency;
