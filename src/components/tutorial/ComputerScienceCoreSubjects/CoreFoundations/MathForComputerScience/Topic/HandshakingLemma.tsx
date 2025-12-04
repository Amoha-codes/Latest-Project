import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Handshaking Lemma and Interesting Tree Properties ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Handshaking Lemma and Interesting Tree Properties
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Jul, 2025</p>

    {/* Introduction */}
    <p className="leading-relaxed">
      Trees are a fundamental concept in graph theory. Understanding their properties helps solve
      many graph-related problems. In this article, we explore the Handshaking Lemma and some
      interesting properties of trees.
    </p>

    {/* Handshaking Lemma */}
    <h2 className="text-3xl font-bold mt-8">Handshaking Lemma</h2>
    <p className="leading-relaxed">
      The Handshaking Lemma states that in any finite undirected graph, the sum of the degrees
      of all vertices is equal to twice the number of edges:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg text-sm">
      ∑ deg(v) = 2 |E|
    </p>
    <p className="leading-relaxed">
      For a tree with <strong>n vertices</strong> and <strong>n-1 edges</strong>, the sum of degrees
      of all vertices is 2(n-1). This is because each edge contributes 2 to the total degree sum.
    </p>
    <p className="leading-relaxed">
      The Handshaking Lemma is also useful in determining Eulerian paths and cycles: if a graph
      has an Eulerian path or cycle, the sum of vertex degrees must be even.
    </p>

    {/* Interesting Tree Properties */}
    <h2 className="text-3xl font-bold mt-8">Interesting Properties of Trees</h2>

    <h3 className="text-2xl font-semibold mt-4">1) k-ary Trees</h3>
    <p className="leading-relaxed">
      In a k-ary tree where every node has either 0 or k children, the number of leaf nodes (L) and
      internal nodes (I) satisfy:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg text-sm">
      L = (k - 1) * I + 1
    </p>
    <p className="leading-relaxed">
      Proof using Handshaking Lemma:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Total edges in tree: |E| = L + I - 1</li>
      <li>Sum of degrees: L + (I-1)*(k+1) + k = 2*(L + I - 1)</li>
      <li>Simplifying gives: (k-1)*I + 1 = L</li>
    </ul>
    <p className="leading-relaxed">
      Alternate proof without Handshaking Lemma: Total children = k * I. Out of these, I-1 are
      internal nodes. Remaining children are leaves: L = K*I - (I-1) = (K-1)*I + 1.
    </p>

    <h3 className="text-2xl font-semibold mt-4">2) Binary Trees</h3>
    <p className="leading-relaxed">
      In a binary tree, the number of leaf nodes (L) is always one more than the number of internal
      nodes with two children (T):
    </p>
    <p className="bg-gray-400 p-4 rounded-lg text-sm">
      L = T + 1
    </p>
    <p className="leading-relaxed">
      Proof (three cases):
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Case 1:</strong> Single node → T = 0, L = 1 (holds).</li>
      <li><strong>Case 2:</strong> Root has two children.
        <p className="ml-4">
          Sum of degrees: (T-1)*3 + S*2 + L + 2 = 2*(S + T + L - 1) → Simplifying: T = L - 1
        </p>
      </li>
      <li><strong>Case 3:</strong> Root has one child.
        <p className="ml-4">
          Sum of degrees: T*3 + (S-1)*2 + L + 1 = 2*(S + T + L - 1) → Simplifying: T = L - 1
        </p>
      </li>
    </ul>

    <p className="leading-relaxed">
      These properties are essential in analyzing tree structures, calculating leaf nodes,
      and understanding node distributions in k-ary and binary trees.
    </p>

  </div>
);

export default Home;
