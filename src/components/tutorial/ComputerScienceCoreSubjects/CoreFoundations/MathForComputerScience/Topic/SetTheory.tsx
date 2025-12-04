import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Set Theory ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Set Theory
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Jul, 2025</p>

    <p className="text-lg leading-relaxed">
      Set theory is a branch of mathematics that deals with collections of objects, called sets. 
      A set is simply a collection of distinct elements, such as numbers, letters, or even 
      everyday objects, that share a common property or rule.
    </p>

    {/* Example of Sets */}
    <h2 className="text-3xl font-bold mt-8">Example of Sets</h2>
    <p className="leading-relaxed">
      Some examples of sets include:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>A set of fruits: &#123;apple, banana, orange&#125;</li>
      <li>A set of numbers: &#123;1, 2, 3, 4&#125;</li>
      <li>A set of even numbers: &#123;2, 4, 6, 8, 10, ...&#125;</li>
      <li>A set of months with exactly 6 Sundays: &#123;&empty;&#125;. This set is empty.</li>
    </ul>

    {/* Key Concepts */}
    <h2 className="text-3xl font-bold mt-8">Key Concepts in Set Theory</h2>
    <p className="leading-relaxed">
      This section introduces the basics of Set Theory, helping you understand key concepts 
      like types of sets, set operations, and important formulas through clear examples and symbols.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Representation of Sets: Roaster Form and Set Builder Notation</li>
      <li>Subsets & Supersets</li>
      <li>Power Set</li>
      <li>Set Theory Symbols</li>
      <li>Set Theory Formulas</li>
      <li>Types of Sets</li>
      <li>Operations on Sets</li>
      <li>Cardinality of Sets</li>
      <li>Venn Diagrams</li>
      <li>De Morgan's Laws</li>
      <li>Set Notations in LaTeX</li>
    </ul>

    {/* Advanced Topics */}
    <h2 className="text-3xl font-bold mt-8">Advanced Topics of Set Theory</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Cartesian Product of a Set</li>
      <li>Relations</li>
      <li>Functions (Types of Functions)</li>
    </ul>

    {/* Practice Section */}
    <h2 className="text-3xl font-bold mt-8">Practice for Set Theory</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Set Theory Solved Questions</li>
      <li>Set Theory Quiz</li>
      <li>Practice Operations on Sets</li>
    </ul>

    {/* Programming with Sets */}
    <h2 className="text-3xl font-bold mt-8">Programs of Set Theory</h2>
    <p className="leading-relaxed">
      This section shows how to work with sets in different programming languages like C++, Python, 
      C#, and JavaScript, using built-in set data structures and operations.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Set in C++</li>
      <li>Unordered Set in C++</li>
      <li>Multiset in C++</li>
      <li>Set in Python</li>
      <li>Set in C#</li>
      <li>Set in JavaScript</li>
    </ul>

    {/* Standard Problems */}
    <h2 className="text-3xl font-bold mt-8">Standard Problems Associated with Set Data Structure</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Find the Union and Intersection of two unsorted arrays</li>
      <li>Count distinct elements in an array</li>
      <li>Longest Consecutive Subsequence</li>
      <li>Remove duplicates from a sorted array</li>
      <li>K’th Smallest/Largest Element in Unsorted Array</li>
    </ul>

    {/* Common Questions */}
    <h2 className="text-3xl font-bold mt-8">Commonly Asked Questions on Set Theory</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>What is the basis of set theory?</strong> Set Theory is the study of a collection of objects which are called sets and the relation between different sets.
      </li>
      <li>
        <strong>How do you define a set?</strong> A set is a well-defined collection of objects. These objects are called elements of the set.
      </li>
      <li>
        <strong>Who Invented Set Theory?</strong> Set Theory was invented by German Mathematician Georg Cantor.
      </li>
      <li>
        <strong>What is the Algebra of Sets?</strong> Deals with Commutative, Associative, Distributive, Identity, and Idempotent Laws.
      </li>
      <li>
        <strong>What is a Subset?</strong> A subset is a set that has fewer or equal elements of another set. The other set is called a Superset.
      </li>
      <li>
        <strong>What is De Morgan's Law?</strong> De Morgan's Law deals with the union and intersection of sets. There are two laws: Law of Union and Law of Intersection.
      </li>
    </ul>

  </div>
);

export default Home;
