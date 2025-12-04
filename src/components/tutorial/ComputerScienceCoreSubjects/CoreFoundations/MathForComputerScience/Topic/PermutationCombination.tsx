import React from 'react';

const PermutationsCombinations: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Header ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Permutations and Combinations
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 24 Sep, 2025</p>

    {/* Definition */}
    <h2 className="text-3xl font-bold mt-8">Overview</h2>
    <p className="leading-relaxed">
      Permutations and Combinations are fundamental in mathematics for selecting or arranging items from a set.
      <strong>Permutation</strong> = arrangements where order matters.  
      <strong>Combination</strong> = selections where order does not matter.
    </p>

    {/* Permutation */}
    <h2 className="text-3xl font-bold mt-8">Permutation</h2>
    <p className="leading-relaxed">
      Permutation refers to arranging items where order is important.  
      Example: For two elements A and B, arrangements are {"{AB, BA}"} – two distinct permutations.  
      Formula: <strong>nPr = n! / (n - r)!</strong>
    </p>
    <p className="leading-relaxed">
      Example: n = 3 (A, B, C), r = 2 → 3P2 = 6 permutations: AB, AC, BA, BC, CA, CB
    </p>

    {/* Combination */}
    <h2 className="text-3xl font-bold mt-8">Combination</h2>
    <p className="leading-relaxed">
      Combination refers to selecting items where order is not important.  
      Example: n = 3 (A, B, C), r = 2 → 3C2 = 3 combinations: AB, AC, BC
    </p>
    <p className="leading-relaxed">
      Formula: <strong>nCr = n! / [r! × (n - r)!]</strong>
    </p>

    {/* Difference Table */}
    <h2 className="text-3xl font-bold mt-8">Permutation vs Combination</h2>
    <table className="table-auto border-collapse border border-gray-300 w-full">
      <thead className='bg-gray-400'> 
        <tr>
          <th className="border border-gray-300 px-4 py-2">Permutation</th>
          <th className="border border-gray-300 px-4 py-2">Combination</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Order matters</td>
          <td className="border border-gray-300 px-4 py-2">Order does not matter</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">nPr = n! / (n - r)!</td>
          <td className="border border-gray-300 px-4 py-2">nCr = n! / [r! × (n - r)!]</td>
        </tr>
      </tbody>
    </table>

    {/* Examples */}
    <h2 className="text-3xl font-bold mt-8">Examples</h2>

    <ol className="list-decimal list-inside leading-relaxed space-y-2">
      <li>
        n = 9, r = 3 → Permutations: 9P3 = 504, Combinations: 9C3 = 84
      </li>
      <li>
        Committee of 4 men from 6 and 2 women from 5 → 6C4 × 5C2 = 15 × 10 = 150 ways
      </li>
      <li>
        Arrange 5 books on a shelf → 5P5 = 120 ways
      </li>
      <li>
        Form 3-letter words from "FABLE" → 5P3 = 60 ways
      </li>
      <li>
        Form a committee of 5 from 10 people → 10C5 = 252 ways
      </li>
      <li>
        Pizza with exactly 2 toppings from 4 → 4C2 = 6 ways
      </li>
      <li>
        2-letter words from "LOVE" → 4P2 = 12
      </li>
      <li>
        3 consonants + 2 vowels from 5 consonants & 3 vowels → 30 × 120 = 3600 ways
      </li>
      <li>
        5 items choose 4 → 5C4 = 5 ways
      </li>
      <li>
        2 consonants + 1 vowel from 6 consonants & 3 vowels → 45 × 6 = 270 ways
      </li>
    </ol>

    {/* Practice Questions */}
    <h2 className="text-3xl font-bold mt-8">Practice Questions</h2>
    <ol className="list-decimal list-inside leading-relaxed space-y-2">
      <li>Arrange 5 books on a shelf</li>
      <li>Choose 3 from 10 people</li>
      <li>4-digit PIN codes using digits 0-9, repetition allowed</li>
      <li>3-topping pizzas from 8 toppings</li>
      <li>Seat 6 people at a round table</li>
      <li>Select 2 boys and 3 girls from 5 boys and 6 girls</li>
      <li>5-card hands from a 52-card deck</li>
      <li>Arrange letters of "MATHEMATICS"</li>
      <li>Select 4 marbles from 5 red, 3 blue, 2 green</li>
      <li>Arrange letters of "MISSISSIPPI"</li>
    </ol>

    {/* Summary */}
    <h2 className="text-3xl font-bold mt-8">Summary</h2>
    <p className="leading-relaxed">
      Permutations and combinations are essential in probability and statistics:  
      <strong>Permutations</strong> = arrangements where order matters (nPr = n! / (n-r)!)  
      <strong>Combinations</strong> = selections where order doesn't matter (nCr = n! / [r!(n-r)!])
    </p>

  </div>
);

export default PermutationsCombinations;
