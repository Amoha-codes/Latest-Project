import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Principle of Inclusion and Exclusion ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Principle of Inclusion and Exclusion
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 13 Aug, 2025</p>

    <p className="text-lg leading-relaxed">
      The Principle of Inclusion and Exclusion (PIE) is a counting technique used to find the size of the union of multiple sets 
      by systematically including and excluding overlapping parts. It corrects overcounting by alternately adding and subtracting 
      the sizes of intersections.
    </p>

    <h2 className="text-3xl font-bold mt-8">General Formula</h2>
    <p className="leading-relaxed">
      For n sets A1, A2, ..., An:
    </p>
    <p className="leading-relaxed font-mono bg-gray-400 p-4 rounded">
      |A1 ∪ A2 ∪ ... ∪ An| = Σ |Ai| - Σ |Ai ∩ Aj| + Σ |Ai ∩ Aj ∩ Ak| - ... + (-1)ⁿ⁺¹ |A1 ∩ ... ∩ An|
    </p>
    <p className="leading-relaxed">
      - First term: sum of sizes of individual sets. <br/>
      - Second term: subtract pairwise intersections. <br/>
      - Third term: add three-way intersections. <br/>
      - Continue alternating signs until intersection of all sets is counted once.
    </p>

    <h2 className="text-3xl font-bold mt-8">Two Sets</h2>
    <p className="leading-relaxed font-mono bg-gray-400 p-4 rounded">
      |A ∪ B| = |A| + |B| - |A ∩ B|
    </p>

    <h2 className="text-3xl font-bold mt-8">Three Sets</h2>
    <p className="leading-relaxed font-mono bg-gray-400 p-4 rounded">
      |A ∪ B ∪ C| = |A| + |B| + |C| - |A ∩ B| - |A ∩ C| - |B ∩ C| + |A ∩ B ∩ C|
    </p>

    <h2 className="text-3xl font-bold mt-8">Applications in Computer Science</h2>
    <ul className="list-disc ml-6 leading-relaxed space-y-1">
      <li>Counting problems in algorithms: arrangements, subsets, or configurations with overlapping constraints.</li>
      <li>Cryptography & error-correcting codes: counting possible keys/codewords satisfying multiple constraints.</li>
      <li>Bitmask DP: dynamic programming on subsets using PIE for optimization.</li>
      <li>Graph theory & network problems: counting vertices/edges with certain properties.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Solved Examples</h2>
    <p className="leading-relaxed">
      <strong>Example 1:</strong> 100 students: 60 Math, 45 Science, 20 both. <br/>
      |Math ∪ Science| = 60 + 45 - 20 = 85 students.
    </p>
    <p className="leading-relaxed">
      <strong>Example 2:</strong> 120 tea, 70 coffee, 50 both → 120 + 70 - 50 = 100 people like either tea or coffee.
    </p>
    <p className="leading-relaxed">
      <strong>Example 3:</strong> 30 employees: 10 Task A, 15 Task B, 5 both → 10 + 15 - 5 = 20 assigned to at least one task.
    </p>
    <p className="leading-relaxed">
      <strong>Example 4:</strong> 200 people: 120 pizza, 100 burgers, 80 tacos; intersections: pizza & burgers = 60, burgers & tacos = 40, pizza & tacos = 30, all three = 20 → |Pizza ∪ Burgers ∪ Tacos| = 120 + 100 + 80 - 60 - 40 - 30 + 20 = 190
    </p>
    <p className="leading-relaxed">
      <strong>Example 5:</strong> 300 students: 150 Math, 120 Physics, 100 Chemistry; intersections: Math & Physics = 80, Physics & Chemistry = 60, Math & Chemistry = 50, all three = 30 → |Math ∪ Physics ∪ Chemistry| = 150 + 120 + 100 - 80 - 60 - 50 + 30 = 210
    </p>

    <h2 className="text-3xl font-bold mt-8">Practice Questions</h2>
    <ul className="list-disc ml-6 leading-relaxed space-y-1">
      <li>200 people: 120 chocolate, 90 vanilla, 50 both → how many like chocolate or vanilla?</li>
      <li>100 students play football (70), basketball (60), cricket (50); intersections: 30, 25, 20; all three = 15 → how many play at least one sport?</li>
      <li>150 attendees: Workshop A (80), Workshop B (70), 40 both → attendees of at least one workshop?</li>
      <li>Deck of 52 cards: probability of heart, face card, or red card? (consider overlaps)</li>
      <li>300 students: Math (180), Science (150), English (120); intersections: Math & Science = 90, Science & English = 80, Math & English = 70, all three = 50 → how many enrolled in at least one subject?</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Answer Key</h2>
    <ul className="list-disc ml-6 leading-relaxed space-y-1">
      <li>160 people like chocolate or vanilla.</li>
      <li>120 students play at least one sport.</li>
      <li>110 people attended at least one workshop.</li>
      <li>Probability = 8/13.</li>
      <li>260 students are enrolled in at least one subject.</li>
    </ul>

  </div>
);

export default Home;
