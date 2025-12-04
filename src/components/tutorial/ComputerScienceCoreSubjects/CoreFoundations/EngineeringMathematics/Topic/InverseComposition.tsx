import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Inverse Functions & Composite Functions ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Inverse Functions and Composition of Functions
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Jul, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      In mathematics, a <strong>function</strong> is said to have an <strong>inverse</strong> if another
      function exists that reverses its output back to the original input. Additionally, we can
      combine two or more functions using the concept of <strong>composition of functions</strong>.
    </p>

    {/* Inverse Functions Section */}
    <h2 className="text-3xl font-bold mt-8">Inverse Functions</h2>
    <p className="leading-relaxed">
      A function <strong>a</strong> is said to be the inverse of another function <strong>b</strong>
      if for every output of <strong>b</strong>, the function <strong>a</strong> returns the original input value.
      In other words, if:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      If b(x) = y and a(y) = x, then a is the inverse of b.
    </p>

    <h3 className="text-xl font-semibold mt-4">Example of Inverse Function</h3>
    <p className="leading-relaxed">
      Consider the functions:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      a(x) = 5x + 2, &nbsp;&nbsp; b(y) = (y - 2) / 5
    </p>

    <p className="leading-relaxed">
      Let x = 1 ⇒ a(1) = 5(1) + 2 = 7. Now applying function b:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      b(7) = (7 - 2) / 5 = 1
    </p>

    <p className="leading-relaxed font-semibold">
      Therefore, b is the inverse of a.
    </p>

    <h3 className="text-xl font-semibold mt-4">Properties of Inverse Functions:</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Two functions f and g are inverses if both are <strong>one-to-one</strong>.</li>
      <li>The domain of f becomes the range of g and vice-versa.</li>
      <li>Some functions are invertible only over restricted domains.</li>
    </ul>

    {/* Composite Functions Section */}
    <h2 className="text-3xl font-bold mt-8">Composite Functions</h2>
    <p className="leading-relaxed">
      A <strong>composite function</strong> is a function whose input is another function. If A(x)
      maps elements from set B to C, and D(x) maps from C to E, then the composite function
      <strong> D ∘ A </strong> maps B to E:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      D ∘ A = D(A(x))
    </p>

    <h3 className="text-xl font-semibold mt-4">Example of Composite Functions</h3>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Let A(x) = 5x + 2 and B(x) = x + 1.
      <br />
      A ∘ B = A(B(x)) = 5(x + 1) + 2
    </p>

    <h3 className="text-xl font-semibold mt-4">Properties of Composite Functions:</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>The co-domain of g must be a subset of the domain of f in f ∘ g.</li>
      <li>Composite functions are <strong>associative</strong>: (a ∘ b) ∘ c = a ∘ (b ∘ c).</li>
      <li>Composite functions are <strong>not commutative</strong>: A ∘ B ≠ B ∘ A.</li>
    </ul>

    {/* Conclusion Section */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      Inverse functions reverse the effect of another function, while composite functions
      combine functions to create new ones. Understanding these concepts is crucial for
      advanced mathematics, real-world modeling, and problem solving.
    </p>

  </div>
);

export default Home;
