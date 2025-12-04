import React from "react";

const DartExceptions: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        Dart Programming - Exceptions
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        An <span className="font-semibold">exception</span> is a problem that arises during program execution. When an exception occurs, the normal flow of the program is disrupted.
      </p>

      <p className="leading-relaxed font-semibold">Built-in Dart Exceptions:</p>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>DeferredLoadException</strong> − Thrown when a deferred library fails to load.</li>
        <li><strong>FormatException</strong> − Thrown when data does not have the expected format.</li>
        <li><strong>IntegerDivisionByZeroException</strong> − Thrown when dividing by zero.</li>
        <li><strong>IOException</strong> − Base class for I/O related exceptions.</li>
        <li><strong>IsolateSpawnException</strong> − Thrown when an isolate cannot be created.</li>
        <li><strong>Timeout</strong> − Thrown when a scheduled timeout occurs while waiting for an async result.</li>
      </ul>

      <p className="leading-relaxed">
        Every exception in Dart is a subtype of the <code>Exception</code> class. Exceptions must be handled to prevent abrupt program termination.
      </p>

      {/* try/on/catch */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">The try / on / catch Blocks</h2>
        <p className="leading-relaxed">
          Use <code>try</code> to enclose code that might throw an exception. The <code>on</code> block handles a specific exception type, while <code>catch</code> provides the exception object.
        </p>

        <p className="leading-relaxed font-semibold">Syntax:</p>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          <pre>
            <code>
{`try {
  // code that might throw an exception
}
on ExceptionType {
  // handle specific exception
}
catch(e) {
  // handle any exception
}`}
            </code>
          </pre>
        </div>
      </div>

      {/* Example: ON Block */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Example: Using on Block</h2>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          <pre>
            <code>
{`void main() {
  int x = 12;
  int y = 0;
  int res;

  try {
    res = x ~/ y;
  }
  on IntegerDivisionByZeroException {
    print('Cannot divide by zero');
  }
}`}
            </code>
          </pre>
        </div>
        <p className="leading-relaxed font-semibold">Output:</p>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          Cannot divide by zero
        </div>
      </div>

      {/* Example: catch Block */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Example: Using catch Block</h2>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          <pre>
            <code>
{`void main() {
  int x = 12;
  int y = 0;
  int res;

  try {
    res = x ~/ y;
  }
  catch(e) {
    print(e);
  }
}`}
            </code>
          </pre>
        </div>
        <p className="leading-relaxed font-semibold">Output:</p>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          IntegerDivisionByZeroException
        </div>
      </div>

      {/* Example: on...catch */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Example: Using on...catch Block</h2>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          <pre>
            <code>
{`void main() {
  int x = 12;
  int y = 0;
  int res;

  try {
    res = x ~/ y;
  }
  on IntegerDivisionByZeroException catch(e) {
    print(e);
  }
}`}
            </code>
          </pre>
        </div>
        <p className="leading-relaxed font-semibold">Output:</p>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          IntegerDivisionByZeroException
        </div>
      </div>

      {/* Finally Block */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">The finally Block</h2>
        <p className="leading-relaxed">
          The <code>finally</code> block always executes regardless of whether an exception occurs.
        </p>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          <pre>
            <code>
{`void main() {
  int x = 12;
  int y = 0;
  int res;

  try {
    res = x ~/ y;
  }
  on IntegerDivisionByZeroException {
    print('Cannot divide by zero');
  }
  finally {
    print('Finally block executed');
  }
}`}
            </code>
          </pre>
        </div>
        <p className="leading-relaxed font-semibold">Output:</p>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          Cannot divide by zero <br />
          Finally block executed
        </div>
      </div>

      {/* Throwing Exception */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Throwing an Exception</h2>
        <p className="leading-relaxed">
          Use <code>throw</code> to explicitly raise an exception.
        </p>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          <pre>
            <code>
{`void main() {
  try {
    testAge(-2);
  }
  catch(e) {
    print('Age cannot be negative');
  }
}

void testAge(int age) {
  if(age < 0) {
    throw new FormatException();
  }
}`}
            </code>
          </pre>
        </div>
        <p className="leading-relaxed font-semibold">Output:</p>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          Age cannot be negative
        </div>
      </div>

      {/* Custom Exceptions */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Custom Exceptions</h2>
        <p className="leading-relaxed">
          Dart allows creating custom exceptions by implementing the <code>Exception</code> interface.
        </p>

        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          <pre>
            <code>
{`class AmtException implements Exception {
  String errMsg() => 'Amount should be greater than zero';
}

void main() {
  try {
    withdrawAmt(-1);
  }
  catch(e) {
    print(e.errMsg());
  }
  finally {
    print('Ending requested operation.....');
  }
}

void withdrawAmt(int amt) {
  if(amt <= 0) {
    throw AmtException();
  }
}`}
            </code>
          </pre>
        </div>
        <p className="leading-relaxed font-semibold">Output:</p>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          Amount should be greater than zero <br />
          Ending requested operation.....
        </div>
      </div>
    </div>
  );
};

export default DartExceptions;
