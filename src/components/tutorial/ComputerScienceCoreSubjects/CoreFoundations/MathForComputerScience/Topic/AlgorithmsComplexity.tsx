import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Algorithm Theory ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Definition, Types, Complexity and Examples of Algorithm
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 16 Oct, 2023</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      An <strong>algorithm</strong> is a well-defined sequential computational technique 
      that accepts a value or a collection of values as input and produces the output(s) 
      needed to solve a problem. An algorithm is accurate if and only if it stops with 
      the proper output for each input instance.
    </p>

    {/* Need of Algorithms */}
    <h2 className="text-3xl font-bold mt-8">Need of Algorithms</h2>
    <p className="leading-relaxed">
      Algorithms solve problems or automate tasks efficiently. They guide software or 
      computers through a systematic set of instructions.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Efficiency:</strong> Perform tasks quickly and accurately.</li>
      <li><strong>Consistency:</strong> Repeatable results every execution.</li>
      <li><strong>Scalability:</strong> Handle large datasets or complex problems.</li>
      <li><strong>Automation:</strong> Reduce human intervention.</li>
      <li><strong>Standardization:</strong> Shareable across teams or organizations.</li>
    </ul>

    {/* Example */}
    <h2 className="text-3xl font-bold mt-8">Example</h2>
    <p className="leading-relaxed">
      Consider a <strong>black box</strong>. We give input to it and it gives output. The procedure 
      converting input to output is an <strong>algorithm</strong>. Algorithms are independent of language 
      and provide a logical blueprint to solve problems.
    </p>

    {/* Real-life Examples */}
    <h2 className="text-3xl font-bold mt-8">Real-life Examples</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Clock: Ensures hands move correctly every minute/hour through a procedure.</li>
      <li>Cooking recipe: Steps must be followed in sequence to get desired food.</li>
    </ul>

    {/* Types of Algorithms */}
    <h2 className="text-3xl font-bold mt-8">Types of Algorithms</h2>
    <p className="leading-relaxed">Common types include:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Sorting:</strong> Bubble Sort, Insertion Sort, Selection Sort, Merge Sort, Quick Sort.</li>
      <li><strong>Searching:</strong> Linear Search, Binary Search, Jump Search, Interpolation Search, Hash Table Search.</li>
      <li><strong>Graph Algorithms:</strong> Shortest Path, Minimum Spanning Tree, Maximum Flow, Connectivity.</li>
    </ul>

    {/* Examples of Sorting */}
    <h2 className="text-3xl font-bold mt-8">Sorting Algorithm Examples</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Bubble Sort:</strong> Compare adjacent elements and swap if necessary.</li>
      <li><strong>Insertion Sort:</strong> Insert elements in the correct position in a growing sorted list.</li>
      <li><strong>Selection Sort:</strong> Repeatedly select minimum from unsorted part.</li>
      <li><strong>Merge Sort:</strong> Divide and conquer, sort sublists, then merge.</li>
      <li><strong>Quick Sort:</strong> Pivot-based divide and conquer.</li>
    </ul>

    {/* Examples of Searching */}
    <h2 className="text-3xl font-bold mt-8">Searching Algorithm Examples</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Linear Search:</strong> Iterate through each element to find a match.</li>
      <li><strong>Binary Search:</strong> Divide sorted list in half repeatedly.</li>
      <li><strong>Jump Search:</strong> Jump ahead in steps then linear search nearby.</li>
      <li><strong>Interpolation Search:</strong> Estimate position based on value range.</li>
      <li><strong>Hash Table Search:</strong> Use hash function to map elements to indices.</li>
    </ul>

    {/* Graph Algorithms */}
    <h2 className="text-3xl font-bold mt-8">Graph Algorithms</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Shortest Path: Dijkstra, Bellman-Ford, A*</li>
      <li>Minimum Spanning Tree: Kruskal, Prim</li>
      <li>Maximum Flow: Ford-Fulkerson, Edmonds-Karp</li>
      <li>Connectivity: Depth-first Search, Breadth-first Search</li>
    </ul>

    {/* Creating an Algorithm */}
    <h2 className="text-3xl font-bold mt-8">Creating an Algorithm</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Be clear and unambiguous.</li>
      <li>Define input(s) and output(s).</li>
      <li>Step-by-step independent instructions.</li>
      <li>Algorithm must halt after finite steps.</li>
    </ul>

    {/* Algorithm Examples */}
    <h2 className="text-3xl font-bold mt-8">Algorithm Examples</h2>
    <p className="leading-relaxed"><strong>Multiply Two Numbers:</strong></p>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Start</li>
      <li>Read inputs a and b, declare c for result</li>
      <li>Compute c = a * b</li>
      <li>Print c</li>
      <li>End</li>
    </ol>

    <p className="leading-relaxed"><strong>Find Maximum in Array:</strong></p>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Start</li>
      <li>Set max = first element</li>
      <li>Loop through elements, update max if element &gt; max</li>
      <li>Return/Print max</li>
      <li>End</li>
    </ol>

    <p className="leading-relaxed"><strong>Find Average of 3 Subjects:</strong></p>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Start</li>
      <li>Read 3 subjects S1, S2, S3</li>
      <li>Sum = S1 + S2 + S3</li>
      <li>Average = Sum / 3</li>
      <li>Print Average</li>
      <li>End</li>
    </ol>

    {/* Algorithm Complexity */}
    <h2 className="text-3xl font-bold mt-8">Algorithm Complexity</h2>
    <p className="leading-relaxed">
      Complexity refers to resources required (time/memory). 
      <strong>Time Complexity:</strong> Number of steps for input size n. 
      <strong>Space Complexity:</strong> Memory used including auxiliary space.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Best Case:</strong> Minimum work scenario</li>
      <li><strong>Worst Case:</strong> Maximum work scenario</li>
    </ul>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages of Algorithms</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Easy to understand</li>
      <li>Language independent</li>
      <li>Debugging easier</li>
      <li>Divide problems into sub-problems</li>
    </ul>

    {/* Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Disadvantages of Algorithms</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Designing efficient algorithms is time-consuming</li>
      <li>Complex branching and loops are hard to visualize</li>
    </ul>

  </div>
);

export default Home;
