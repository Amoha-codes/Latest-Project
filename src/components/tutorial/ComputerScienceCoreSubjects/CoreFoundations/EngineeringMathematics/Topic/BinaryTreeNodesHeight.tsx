import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Relationship between number of nodes and height ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Relationship between Number of Nodes and Height of Binary Tree
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 01 Feb, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      A <strong>Binary Tree</strong> is a hierarchical data structure in which each node has
      at most two children, referred to as the <strong>left child</strong> and the
      <strong> right child</strong>. It is widely used for efficient searching, sorting,
      and organizing hierarchical information.
    </p>

    <p className="leading-relaxed">
      The <strong>height of a binary tree</strong> is the length of the longest path
      from the root node to any leaf node.
    </p>

    {/* Height Section */}
    <h2 className="text-3xl font-bold mt-8">Height of Binary Tree</h2>
    <p className="leading-relaxed">
      For example, if the longest path from root to a leaf contains 2 edges, the height is 2.
      If the longest path contains 4 edges, the height is 4.
    </p>

    {/* Min-Max Height from Nodes */}
    <h2 className="text-3xl font-bold mt-8">Calculating Minimum and Maximum Height from Number of Nodes</h2>
    <p className="leading-relaxed">
      If a binary tree contains <strong>n</strong> nodes:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Maximum Height (h<sub>max</sub>) = n - 1 <br />
      Minimum Height (h<sub>min</sub>) = ⌊log₂(n)⌋
    </p>

    <p className="leading-relaxed">
      Example: A left-skewed tree with 5 nodes has height = 5 − 1 = 4, while a full binary
      tree with 5 nodes has height = ⌊log₂(5)⌋ = 2.
    </p>

    {/* Min-Max Nodes from Height */}
    <h2 className="text-3xl font-bold mt-8">Calculating Minimum and Maximum Nodes from Height</h2>
    <p className="leading-relaxed">
      If a binary tree has height <strong>h</strong>:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Minimum Nodes = h + 1 <br />
      Maximum Nodes = 2⁰ + 2¹ + ... + 2ʰ = 2^(h + 1) − 1
    </p>

    <p className="leading-relaxed">
      Example: A binary tree of height 2 has minimum nodes = 2 + 1 = 3 and maximum nodes = 2³ − 1 = 7.
    </p>

    {/* Questions Section */}
    <h2 className="text-3xl font-bold mt-8">Questions on Finding Height of Binary Tree</h2>

    <p className="leading-relaxed font-semibold">Question 1</p>
    <p className="leading-relaxed">
      The maximum and minimum number of nodes in a binary tree of height 5 are:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>(A) 63 and 6</li>
      <li>(B) 64 and 5</li>
      <li>(C) 32 and 6</li>
      <li>(D) 31 and 5</li>
    </ul>

    <p className="leading-relaxed font-semibold">Solution:</p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Maximum nodes = 2^(h+1) − 1 = 2⁶ − 1 = 63 <br />
      Minimum nodes = h + 1 = 5 + 1 = 6
    </p>

    <p className="leading-relaxed font-semibold">Correct Answer: (A)</p>

    <p className="leading-relaxed font-semibold mt-6">Question 2</p>
    <p className="leading-relaxed">
      Which of the following heights is NOT possible for a binary tree with 50 nodes?
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>(A) 4</li>
      <li>(B) 5</li>
      <li>(C) 6</li>
      <li>(D) None</li>
    </ul>

    <p className="leading-relaxed font-semibold">Solution:</p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Minimum height = ⌊log₂(50)⌋ = 5, so height 4 is not possible.
    </p>

    <p className="leading-relaxed font-semibold">Correct Answer: (A)</p>

  </div>
);

export default Home;
