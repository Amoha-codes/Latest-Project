import React from "react";

const KotlinBreakContinue: React.FC = () => (
  <div className="mt-20 px-6">
    <h1 className="text-4xl font-extrabold text-gray-900 border-b-2 pb-2">
      Kotlin Break and Continue
    </h1>

    <h2 className="text-2xl font-bold mt-6">Kotlin Break</h2>
    <p className="text-lg text-gray-700 mt-2">
      The <code>break</code> statement is used to jump out of a loop immediately.
    </p>

    <p className="text-lg text-gray-700 mt-2">
      Example: This loop stops when <code>i</code> is equal to 4:
    </p>
    <pre className="bg-gray-100 p-4 rounded-lg mt-2 text-sm">
      <code>{`var i = 0
while (i < 10) {
  println(i)
  i++
  if (i == 4) {
    break
  }
}`}</code>
    </pre>

    <h2 className="text-2xl font-bold mt-6">Kotlin Continue</h2>
    <p className="text-lg text-gray-700 mt-2">
      The <code>continue</code> statement skips the current iteration of the loop and moves to the next iteration if a specified condition occurs.
    </p>

    <p className="text-lg text-gray-700 mt-2">
      Example: This loop skips printing the value 4:
    </p>
    <pre className="bg-gray-100 p-4 rounded-lg mt-2 text-sm">
      <code>{`var i = 0
while (i < 10) {
  if (i == 4) {
    i++
    continue
  }
  println(i)
  i++
}`}</code>
    </pre>
  </div>
);

export default KotlinBreakContinue;
