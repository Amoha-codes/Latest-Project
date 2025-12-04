import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Function in Maths ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Function in Maths
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Jul, 2025</p>

    <p className="text-lg leading-relaxed">
      A function in math is like a machine that takes an input, does something to it, and gives a specific output. 
      For each input, there’s exactly one output. It’s a rule that connects each input to one and only one result. 
      Functions are fundamental in fields like algebra and calculus. They help model relationships and solve 
      real-world problems.
    </p>

    <p className="leading-relaxed">
      Here is how we represent a function:
      <br />
      <strong>f(x) = y</strong> [Here, f() is a function, x is the input, and y is the corresponding output.]
    </p>

    <p className="leading-relaxed">
      If we collect all inputs in one set called <strong>A</strong> and all outputs in one set called <strong>B</strong>, 
      then we can also write the function as:
      <br />
      <strong>f: A → B</strong> [This means that for every element x in set A, there is exactly one element f(x) in set B.]
    </p>

    {/* Example Function */}
    <h2 className="text-3xl font-bold mt-8">Example</h2>
    <p className="leading-relaxed">
      Consider the function <strong>f(x) = 2x</strong>. If the input is 3, the output is <strong>f(3) = 2 * 3 = 6</strong>. 
      The function takes the value of x, performs an operation on it (multiplication by 2 in this case), and returns the result.
    </p>

    {/* Definition */}
    <h2 className="text-3xl font-bold mt-8">What is a Function in Maths?</h2>
    <p className="leading-relaxed">
      In mathematics, a function is a relationship or rule that assigns each input (often called the <strong>domain</strong>) 
      to exactly one output (often called the <strong>co-domain</strong>).
    </p>

    {/* Key Concepts */}
    <h2 className="text-3xl font-bold mt-8">Key Concepts of Functions</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Introduction to Functions</li>
      <li>Function Notation</li>
      <li>Domain and Range of a Function</li>
      <li>Classes of Functions</li>
      <li>Codomain vs. Range</li>
      <li>Real-Life Applications of Functions</li>
    </ul>

    {/* Types of Functions */}
    <h2 className="text-3xl font-bold mt-8">Types of Functions</h2>
    <h3 className="text-2xl font-semibold mt-4">Based on Mapping Properties</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>One-to-One (Injective) Function</li>
      <li>Onto (Surjective) Function</li>
      <li>Bijective Function</li>
      <li>Many-One Function</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Algebraic Functions</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Constant Function</li>
      <li>Identity Function</li>
      <li>Polynomial Function</li>
      <li>Rational Function</li>
      <li>Linear Functions</li>
      <li>Absolute Value Function</li>
      <li>Transcendental Functions</li>
      <li>Exponential Function</li>
      <li>Logarithmic Function</li>
      <li>Trigonometric Function</li>
      <li>Inverse Trigonometric Functions</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Special Categories</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Piecewise Functions</li>
      <li>Even and Odd Functions</li>
      <li>Periodic Functions</li>
      <li>Increasing and Decreasing Functions</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Real-World Functions</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Real Functions</li>
      <li>Real-Valued Functions</li>
      <li>Implicit Functions</li>
    </ul>

    {/* Operations on Functions */}
    <h2 className="text-3xl font-bold mt-8">Operations on Functions</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Algebra of Functions</li>
      <li>Algebra of Derivative of Functions</li>
      <li>Algebra of Real Functions</li>
      <li>Algebra of Continuous Functions</li>
      <li>Composition of Functions</li>
      <li>Inverse of a Function</li>
      <li>Vertical Line Test</li>
    </ul>

    {/* Graphic Representation */}
    <h2 className="text-3xl font-bold mt-8">Graphic Representation of Functions</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Function Table</li>
      <li>Graphing of Function</li>
      <li>Graphing Quadratic Function</li>
      <li>Graphing Polynomial Functions</li>
      <li>Graphing Rational Function with Holes</li>
      <li>Graphing Sine and Cosine Functions</li>
      <li>Analyzing the Graphs of Functions</li>
    </ul>

    {/* Practice */}
    <h2 className="text-3xl font-bold mt-8">Practice Questions & Quizzes on Functions</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Practice Questions on Functions</li>
      <li>Quiz on Functions</li>
      <li>Quiz on Relation and Function</li>
      <li>Even and Odd Trigonometric Functions</li>
      <li>Domain and Range Worksheet</li>
    </ul>

    {/* Conclusion */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      Functions are the building blocks of mathematics, connecting inputs to outputs in predictable ways. 
      Whether you're solving equations or modeling real-world phenomena, understanding functions is essential.
    </p>

  </div>
);

export default Home;
