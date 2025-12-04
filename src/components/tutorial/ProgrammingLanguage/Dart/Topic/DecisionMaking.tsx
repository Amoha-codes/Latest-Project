import React from "react";

const DartDecisionMaking: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        Dart Programming – Decision Making
      </h1>

      <p className="leading-relaxed">
        Decision-making constructs allow a program to evaluate conditions and
        execute specific blocks of code based on whether the condition is
        <b> true</b> or <b>false</b>.
      </p>

      <h2 className="text-2xl font-bold border-b pb-1">Types of Conditional Statements</h2>

      <table className="w-full border">
        <tbody>
          <tr>
            <td className="p-2 border w-40">if statement</td>
            <td className="p-2 border">
              Executes a block of code when a boolean condition is true.
            </td>
          </tr>

          <tr>
            <td className="p-2 border w-40">if…else statement</td>
            <td className="p-2 border">
              Executes one block if the condition is true, otherwise the else block runs.
            </td>
          </tr>

          <tr>
            <td className="p-2 border w-40">else if ladder</td>
            <td className="p-2 border">
              Useful for checking multiple conditions in sequence.
            </td>
          </tr>

          <tr>
            <td className="p-2 border w-40">switch…case</td>
            <td className="p-2 border">
              Evaluates an expression and executes the case that matches its value.
            </td>
          </tr>
        </tbody>
      </table>

      {/* if statement */}
      <h2 className="text-2xl font-bold border-b pb-1">if Statement</h2>

      <p className="leading-relaxed">
        An <b>if</b> statement consists of a condition followed by a block of statements that execute
        only if the condition evaluates to true.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`void main() {
  int num = 10;

  if (num > 5) {
    print("Number is greater than 5");
  }
}`}
      </pre>

      {/* if else */}
      <h2 className="text-2xl font-bold border-b pb-1">if…else Statement</h2>

      <p className="leading-relaxed">
        When the <b>if</b> condition fails, the <b>else</b> block gets executed.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`void main() {
  int age = 16;

  if (age >= 18) {
    print("Eligible to vote");
  } else {
    print("Not eligible to vote");
  }
}`}
      </pre>

      {/* else-if ladder */}
      <h2 className="text-2xl font-bold border-b pb-1">else if Ladder</h2>

      <p className="leading-relaxed">
        The else-if ladder is used when multiple conditions need to be checked one after another.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`void main() {
  int marks = 72;

  if (marks >= 90) {
    print("A Grade");
  } else if (marks >= 75) {
    print("B Grade");
  } else if (marks >= 60) {
    print("C Grade");
  } else {
    print("Fail");
  }
}`}
      </pre>

      {/* Switch Case */}
      <h2 className="text-2xl font-bold border-b pb-1">switch…case Statement</h2>

      <p className="leading-relaxed">
        The <b>switch</b> statement compares an expression against multiple <b>case</b> values.
        When a match is found, the corresponding block executes.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`void main() {
  var grade = "B";

  switch (grade) {
    case "A":
      print("Excellent");
      break;

    case "B":
      print("Good");
      break;

    case "C":
      print("Average");
      break;

    default:
      print("Invalid grade");
  }
}`}
      </pre>
    </div>
  );
};

export default DartDecisionMaking;
