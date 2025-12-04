import React from 'react';

const TreeDiagram: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Tree Diagram ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Tree Diagram: Meaning, Features, Conditional Probability & Examples
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 16 Jan, 2024</p>

    {/* Definition */}
    <h2 className="text-3xl font-bold mt-8">What is a Tree Diagram?</h2>
    <p className="leading-relaxed">
      A tree diagram is a graphical tool used to solve probability problems. It consists of <strong>nodes</strong> and <strong>branches</strong>. 
      - <strong>Parent nodes</strong> represent specific events with probability 1.  
      - <strong>Sibling nodes</strong> represent possible outcomes related to the parent.  
      - <strong>Branches</strong> show the likelihood of events occurring.
    </p>
    <p className="leading-relaxed">
      Example: Tossing a coin. The parent node is the coin toss (probability 1), and sibling nodes are heads and tails, each with probability 0.5.
    </p>

    {/* Features */}
    <h2 className="text-3xl font-bold mt-8">Features of Tree Diagram</h2>
    <ol className="list-decimal list-inside leading-relaxed space-y-2">
      <li>Representation: Shows relationships between events visually.</li>
      <li>Nodes: Points representing events; parent nodes are initial events, sibling nodes are possible outcomes.</li>
      <li>Branches: Connect nodes and display probabilities.</li>
      <li>Dependence: Differentiates between dependent and independent events.</li>
      <li>Probabilities: Numeric values assigned to each branch.</li>
      <li>Construction: Identify outcomes, draw branches, assign probabilities.</li>
      <li>Multiplicative Rule: Multiply probabilities along branches for total probability.</li>
      <li>Versatility: Can be used for simple and complex decision-making scenarios.</li>
    </ol>

    {/* How to Draw */}
    <h2 className="text-3xl font-bold mt-8">How to Draw a Tree Diagram</h2>
    <ol className="list-decimal list-inside leading-relaxed space-y-2">
      <li>Decide if events are dependent or independent.</li>
      <li>Draw branches for initial outcomes.</li>
      <li>Assign probabilities to each branch.</li>
      <li>Draw additional branches for next outcomes with correct probabilities.</li>
      <li>Repeat for all events.</li>
      <li>Multiply probabilities along branches to find total probability; sum should equal 1.</li>
    </ol>
    <p className="leading-relaxed mt-2">
      Example: Rolling a six-sided die twice. Each roll has 6 outcomes (1/6). Multiply along branches to get total probability of each sequence.
    </p>

    {/* Conditional Probability */}
    <h2 className="text-3xl font-bold mt-8">Tree Diagram for Conditional Probability</h2>
    <p className="leading-relaxed">
      Conditional probability diagrams show dependent events.  
      Example: Buying two products online.  
      - P(liking first product) = 0.6 → P(not liking first) = 0.4  
      - If first liked, P(liking second) = 0.9, not liked = 0.1  
      - If first not liked, P(liking second) = 0.4, not liked = 0.6  
      Multiply along branches to find probability of combined events (e.g., disliking both).
    </p>

    {/* Probability Theory */}
    <h2 className="text-3xl font-bold mt-8">Tree Diagram in Probability Theory</h2>
    <ol className="list-decimal list-inside leading-relaxed space-y-2">
      <li><strong>Purpose:</strong> Express likelihood of outcomes systematically.</li>
      <li><strong>Nodes:</strong> Represent events with linked probabilities.</li>
      <li><strong>Root Node:</strong> Starting event, probability 1.</li>
      <li><strong>Sibling Nodes:</strong> Represent all possible outcomes of parent event.</li>
      <li><strong>Application:</strong> Useful for complex probability sequences.</li>
      <li><strong>Calculation Aid:</strong> Breaks sequences into manageable probabilities.</li>
    </ol>

    {/* Examples */}
    <h2 className="text-3xl font-bold mt-8">Examples of Tree Diagram</h2>

    <h3 className="text-2xl font-semibold mt-4">Example 1: Coin and Die</h3>
    <p className="leading-relaxed">
      Toss a coin, then roll a six-sided die.  
      P(Tails) = 1/2, P(Even on die) = 3/6 = 1/2.  
      Probability of Tails and Even = 1/2 × 1/2 = 1/4.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Example 2: Selecting Fruits from Baskets</h3>
    <p className="leading-relaxed">
      Two baskets: A (Apples:Oranges = 3:7), B (Bananas:Grapes = 1:1). Choose a basket, then a fruit.  
      P(Apple from A) = 1/2 × 3/10 = 3/20  
      P(Grape from B) = 1/2 × 1/2 = 1/4  
      Probability of Apple from A AND Grape from B = 3/20 × 1/4 = 3/80.
    </p>

  </div>
);

export default TreeDiagram;
