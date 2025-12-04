import React from "react";

const CBreakContinue: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        C - Break and Continue
      </h1>

      {/* Break */}
      <h2 className="text-2xl font-bold">Break Statement</h2>
      <p className="leading-relaxed">
        The <code>break</code> statement is used to exit a loop immediately.
      </p>

      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`int i;

for (i = 0; i < 10; i++) {
    if (i == 4) {
        break; // stops the loop
    }
    printf("%d\\n", i);
}`}</pre>
      </div>

      {/* Continue */}
      <h2 className="text-2xl font-bold">Continue Statement</h2>
      <p className="leading-relaxed">
        The <code>continue</code> statement skips the current iteration and moves to the next.
      </p>

      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`int i;

for (i = 0; i < 10; i++) {
    if (i == 4) {
        continue; // skips this iteration
    }
    printf("%d\\n", i);
}`}</pre>
      </div>

      {/* Break vs Continue */}
      <p className="leading-relaxed">
        <strong>Good to remember:</strong><br/>
        <code>break</code> = stop the loop completely.<br/>
        <code>continue</code> = skip this iteration, but keep looping.
      </p>

      {/* Combining Break and Continue */}
      <h2 className="text-2xl font-bold">Combining Break and Continue</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`int i;

for (i = 0; i < 6; i++) {
    if (i == 2) {
        continue; // skip printing 2
    }
    if (i == 4) {
        break; // stop loop at 4
    }
    printf("%d\\n", i);
}`}</pre>
      </div>

      {/* While loop examples */}
      <h2 className="text-2xl font-bold">Break and Continue in While Loop</h2>
      <p className="leading-relaxed"><strong>Break Example:</strong></p>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`int i = 0;

while (i < 10) {
    if (i == 4) {
        break;
    }
    printf("%d\\n", i);
    i++;
}`}</pre>
      </div>

      <p className="leading-relaxed"><strong>Continue Example:</strong></p>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`int i = 0;

while (i < 10) {
    if (i == 4) {
        i++;
        continue; // skip iteration when i==4
    }
    printf("%d\\n", i);
    i++;
}`}</pre>
      </div>

      {/* Real-Life Example */}
      <h2 className="text-2xl font-bold">Real-Life Example</h2>
      <p className="leading-relaxed">
        Process a list of numbers, skip negative numbers, and stop if zero is found:
      </p>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`int myNumbers[] = {3, -1, 7, 0, 9};
int length = sizeof(myNumbers) / sizeof(myNumbers[0]);
int i;

for (i = 0; i < length; i++) {
    if (myNumbers[i] < 0) {
        continue; // skip negative numbers
    }
    if (myNumbers[i] == 0) {
        break; // stop loop at zero
    }
    printf("%d\\n", myNumbers[i]);
}`}</pre>
      </div>
    </div>
  );
};

export default CBreakContinue;
