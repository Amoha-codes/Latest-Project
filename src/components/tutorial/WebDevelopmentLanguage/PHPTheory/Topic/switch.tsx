import React from "react";

const PhpSwitch: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP switch Statement
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <strong>switch</strong> statement in PHP allows you to execute
        different blocks of code depending on different conditions.
      </p>

      {/* Explanation */}
      <h2 className="text-2xl font-bold mt-10">What is the switch Statement?</h2>

      <p className="leading-relaxed">
        The <code>switch</code> statement evaluates an expression once, then
        compares its value with multiple <code>case</code> options.  
        When a match is found, the corresponding block of code runs.
      </p>

      {/* Syntax */}
      <h3 className="text-xl font-semibold mt-6">Syntax</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`switch (expression) {
  case label1:
    // code block
    break;
  case label2:
    // code block
    break;
  case label3:
    // code block
    break;
  default:
    // default code block
}`}
      </pre>

      <p className="leading-relaxed">
        The <strong>break</strong> keyword stops PHP from executing the next cases.
      </p>

      {/* Basic Example */}
      <h3 className="text-xl font-semibold mt-6">Example</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$favcolor = "red";

switch ($favcolor) {
  case "red":
    echo "Your favorite color is red!";
    break;
  case "blue":
    echo "Your favorite color is blue!";
    break;
  case "green":
    echo "Your favorite color is green!";
    break;
  default:
    echo "Your favorite color is neither red, blue, nor green!";
}`}
      </pre>

      {/* break Explanation */}
      <h2 className="text-2xl font-bold mt-10">The break Keyword</h2>

      <p className="leading-relaxed">
        When PHP reaches a <code>break</code> statement, it exits the switch block.
        If break is missing, PHP continues to execute the next case — even if it does not match.
      </p>

      <h3 className="text-xl font-semibold mt-6">
        Example Without break
      </h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$favcolor = "red";

switch ($favcolor) {
  case "red":
    echo "Your favorite color is red!";
  case "blue":
    echo "Your favorite color is blue!";
    break;
  case "green":
    echo "Your favorite color is green!";
    break;
  default:
    echo "Your favorite color is neither red, blue, nor green!";
}`}
      </pre>

      <p className="leading-relaxed">
        Since <code>case "red"</code> does not have break,  
        PHP will also run the <strong>blue</strong> message.
      </p>

      {/* Default Keyword */}
      <h2 className="text-2xl font-bold mt-10">The default Keyword</h2>

      <p className="leading-relaxed">
        The <code>default</code> case runs when none of the cases match.
      </p>

      <h3 className="text-xl font-semibold mt-6">Example</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$d = 4;

switch ($d) {
  case 6:
    echo "Today is Saturday";
    break;
  case 0:
    echo "Today is Sunday";
    break;
  default:
    echo "Looking forward to the Weekend";
}`}
      </pre>

      <p className="leading-relaxed">
        The <code>default</code> case can be placed anywhere,  
        but placing it last is recommended.
      </p>

      {/* Common Code Blocks */}
      <h2 className="text-2xl font-bold mt-10">Multiple Cases Using Same Code</h2>

      <p className="leading-relaxed">
        You can make several cases run the same block of code by grouping them together.
      </p>

      <h3 className="text-xl font-semibold mt-6">Example</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$d = 3;

switch ($d) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    echo "The week feels so long!";
    break;
  case 6:
  case 0:
    echo "Weekends are the best!";
    break;
  default:
    echo "Something went wrong";
}`}
      </pre>

    </div>
  );
};

export default PhpSwitch;
