import React from "react";

const PhpLoops: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP Loops
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        In PHP, loops are used to repeat a block of code as long as a specified 
        condition is true. This helps reduce repetition and makes your programs 
        more efficient.
      </p>

      <p className="leading-relaxed">
        PHP provides several types of loops, each designed for specific situations.
      </p>

      {/* Loop Types */}
      <h2 className="text-2xl font-bold mt-10">Types of Loops in PHP</h2>

      <ul className="list-disc list-inside space-y-2 leading-relaxed">
        <li>
          <strong>while</strong> – Repeats code as long as a condition is true.
        </li>
        <li>
          <strong>do...while</strong> – Executes the block once, then continues 
          looping as long as the condition is true.
        </li>
        <li>
          <strong>for</strong> – Loops a specific number of times.
        </li>
        <li>
          <strong>foreach</strong> – Loops through each element in an array.
        </li>
      </ul>

      <p className="leading-relaxed">
        Each loop type will be explained in detail in the upcoming chapters.
      </p>

      {/* General Idea */}
      <h2 className="text-2xl font-bold mt-10">Why Use Loops?</h2>

      <p className="leading-relaxed">
        Loops help you avoid writing repetitive code. For example, instead of 
        writing <code>echo</code> 10 times, you can use a loop to repeat it 
        automatically.
      </p>

      {/* Example Concept */}
      <h3 className="text-xl font-semibold mt-6">Example Concept</h3>

      <p className="leading-relaxed">
        This is how a loop generally works:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`while (condition) {
  // repeat this block until condition becomes false
}`}
      </pre>

      <p className="leading-relaxed">
        The next chapters will show detailed examples of each loop type with 
        real PHP code.
      </p>

    </div>
  );
};

export default PhpLoops;
