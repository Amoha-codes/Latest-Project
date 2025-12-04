import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Arithmetic Operations ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Arithmetic Operations
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Sep, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Arithmetic Operations are the basic mathematical operations—Addition, Subtraction, 
      Multiplication, and Division—used for calculations. They form the foundation of 
      mathematics and are essential in daily life.
    </p>
    <p className="leading-relaxed">
      The term "Arithmetic" comes from the Greek word "arithmos," meaning "numbers."
    </p>

    {/* Basic Arithmetic Operations */}
    <h2 className="text-3xl font-bold mt-8">Basic Arithmetic Operations</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Addition (+):</strong> Combining two or more numbers to get the sum.  
        Example: 4 + 5 = 9
      </li>
      <li>
        <strong>Subtraction (-):</strong> Finding the difference between two numbers.  
        Example: 10 - 6 = 4
      </li>
      <li>
        <strong>Multiplication (×):</strong> Repeated addition of a number.  
        Example: 4 × 5 = 20
      </li>
      <li>
        <strong>Division (÷):</strong> Reverse of multiplication; repeated subtraction.  
        Example: 8 ÷ 2 = 4
      </li>
    </ul>

    {/* Arithmetic Properties */}
    <h2 className="text-3xl font-bold mt-8">Arithmetic Properties</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Closure:</strong> Operations result in numbers of the same set (except division).</li>
      <li><strong>Commutative:</strong> a + b = b + a, a × b = b × a</li>
      <li><strong>Associative:</strong> a + (b + c) = (a + b) + c, a × (b × c) = (a × b) × c</li>
      <li><strong>Distributive:</strong> a × (b + c) = a × b + a × c</li>
      <li><strong>Additive Identity:</strong> a + 0 = a</li>
      <li><strong>Multiplicative Identity:</strong> a × 1 = a</li>
      <li><strong>Additive Inverse:</strong> a + (-a) = 0</li>
      <li><strong>Multiplicative Inverse:</strong> a × (1/a) = 1</li>
    </ul>

    {/* Properties Table */}
    <h3 className="text-2xl font-bold mt-4">Table of Arithmetic Properties</h3>
    <table className="table-auto border-collapse border border-gray-400 mt-2 w-full text-sm">
      <thead>
        <tr className="bg-gray-400">
          <th className="border border-gray-400 px-2 py-1">Property</th>
          <th className="border border-gray-400 px-2 py-1">Addition</th>
          <th className="border border-gray-400 px-2 py-1">Subtraction</th>
          <th className="border border-gray-400 px-2 py-1">Multiplication</th>
          <th className="border border-gray-400 px-2 py-1">Division</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-400 px-2 py-1">Closure</td>
          <td className="border border-gray-400 px-2 py-1">a + b ∈ Z</td>
          <td className="border border-gray-400 px-2 py-1">a - b ∈ Z</td>
          <td className="border border-gray-400 px-2 py-1">a × b ∈ Z</td>
          <td className="border border-gray-400 px-2 py-1">a / b ∉ Z</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-2 py-1">Commutative</td>
          <td className="border border-gray-400 px-2 py-1">a + b = b + a</td>
          <td className="border border-gray-400 px-2 py-1">a - b ≠ b - a</td>
          <td className="border border-gray-400 px-2 py-1">a × b = b × a</td>
          <td className="border border-gray-400 px-2 py-1">a / b ≠ b / a</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-2 py-1">Associative</td>
          <td className="border border-gray-400 px-2 py-1">a + (b + c) = (a + b) + c</td>
          <td className="border border-gray-400 px-2 py-1">a - (b - c) ≠ (a - b) - c</td>
          <td className="border border-gray-400 px-2 py-1">a × (b × c) = (a × b) × c</td>
          <td className="border border-gray-400 px-2 py-1">a / (b / c) ≠ (a / b) / c</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-2 py-1">Distributive</td>
          <td className="border border-gray-400 px-2 py-1">a × (b + c) = a × b + a × c</td>
          <td className="border border-gray-400 px-2 py-1">a × (b - c) = a × b - a × c</td>
          <td className="border border-gray-400 px-2 py-1">-</td>
          <td className="border border-gray-400 px-2 py-1">-</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-2 py-1">Identity</td>
          <td className="border border-gray-400 px-2 py-1">a + 0 = a</td>
          <td className="border border-gray-400 px-2 py-1">-</td>
          <td className="border border-gray-400 px-2 py-1">a × 1 = a</td>
          <td className="border border-gray-400 px-2 py-1">-</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-2 py-1">Inverse</td>
          <td className="border border-gray-400 px-2 py-1">a + (-a) = 0</td>
          <td className="border border-gray-400 px-2 py-1">-</td>
          <td className="border border-gray-400 px-2 py-1">a × (1/a) = 1</td>
          <td className="border border-gray-400 px-2 py-1">-</td>
        </tr>
      </tbody>
    </table>

    {/* Solved Examples */}
    <h2 className="text-3xl font-bold mt-8">Solved Examples</h2>
    <p className="leading-relaxed"><strong>Example 1:</strong> Sum = 100, Difference = 60. Find numbers → 80 & 20</p>
    <p className="leading-relaxed"><strong>Example 2:</strong> Simplify 50 + 10(9) - 9 → 131</p>
    <p className="leading-relaxed"><strong>Example 3:</strong> x + (x + 5) = 39 → x = 17</p>
    <p className="leading-relaxed"><strong>Example 4:</strong> p - 4 = 11 → p = 15</p>
    <p className="leading-relaxed"><strong>Example 5:</strong> y - 9 = 3 → y = 12</p>
    <p className="leading-relaxed"><strong>Example 6:</strong> Simplify -1[(3-28)/5] - 2×24/6 → -3</p>
    <p className="leading-relaxed"><strong>Example 7:</strong> Solve 2x = 10 → x = 5</p>
    <p className="leading-relaxed"><strong>Example 8:</strong> Solve 5x/4 + 1/2 = 2x - 1/2 → x = 4/3</p>

    {/* Practice Problems */}
    <h2 className="text-3xl font-bold mt-8">Practice Problems</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>A student purchased a copy for 20 rupees and a pen for 5 rupees. Total spent?</li>
      <li>5 glasses on table, 2 broken. How many left?</li>
      <li>3 stacks of 10 books each. Total books?</li>
      <li>John has 20 dollars. Toys cost 4 dollars each. How many toys?</li>
      <li>A farmer has 50 apples. Sold 15. How many left?</li>
      <li>Sarah had 30 candies. Gave 12 away. How many remain?</li>
      <li>A car travels 60 km/h. Distance in 3 hours?</li>
      <li>Store sells notebooks at 15 rupees each. Buy 8. Total cost?</li>
      <li>Baker packs 24 cookies into boxes of 6. How many boxes?</li>
      <li>Emily read 45 pages on Monday, 30 on Tuesday. Total pages?</li>
    </ol>

  </div>
);

export default Home;
