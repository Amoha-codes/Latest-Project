import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Title ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Instruction Level Parallelism (ILP)
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 03 Oct, 2025</p>

    {/* ================= Introduction ================= */}
    <p className="text-lg leading-relaxed">
      Instruction-Level Parallelism (ILP) refers to the processor's ability to execute multiple instructions 
      at the same time. Instead of running instructions strictly sequentially, ILP overlaps instruction 
      execution wherever dependencies allow.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Identifies independent instructions and runs them in parallel</li>
      <li>Works within a single processor (not across multiple cores)</li>
      <li>Basis of modern CPU instruction scheduling</li>
      <li>Machines without ILP have more complex hardware</li>
    </ul>

    {/* ================= Example ================= */}
    <h2 className="text-3xl font-bold mt-8">Example of ILP Execution</h2>
    <p className="leading-relaxed">
      Suppose a processor has 4 functional units (Integer ALU, Integer Multiplication, Floating Point Operations, Load/Store) 
      with latencies 1, 2, 3, 2, 1 cycles respectively. Consider the following instruction sequence:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      y1 = x1*1010<br />
      y2 = x2*1100<br />
      z1 = y1+0010<br />
      z2 = y2+0101<br />
      t1 = t1+1<br />
      p = q*1000<br />
      clr = clr+0010<br />
      r = r+0001
    </p>

    <p className="leading-relaxed">
      In a sequential processor, instructions execute one at a time. With ILP, the processor can execute independent instructions in parallel, 
      filling idle cycles ('nop's) caused by instruction latency. For example, sequential execution may take 12 cycles, 
      while ILP execution can complete the same operations in only 4 cycles.
    </p>

    {/* ================= ILP Architecture ================= */}
    <h2 className="text-3xl font-bold mt-8">Instruction Level Parallelism Architecture</h2>
    <p className="leading-relaxed">
      ILP is achieved by executing multiple operations per cycle or utilizing gaps created by instruction latencies. 
      The compiler usually decides which operations can be executed in parallel.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Classification of ILP Architectures</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Sequential Architecture:</strong> Program does not explicitly convey parallelism (e.g., superscalar).</li>
      <li><strong>Dependence Architectures:</strong> Program provides information about dependencies (e.g., dataflow).</li>
      <li><strong>Independence Architecture:</strong> Program indicates which instructions are independent to reduce 'nop's.</li>
    </ul>

    <p className="leading-relaxed">
      To implement ILP, compilers and hardware determine: data dependencies, independent operations, scheduling, 
      functional unit assignment, and registers to store intermediate results.
    </p>

    {/* ================= Advantages ================= */}
    <h2 className="text-3xl font-bold mt-8">Advantages of ILP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Improved Performance:</strong> Executes multiple instructions simultaneously → faster programs.</li>
      <li><strong>Efficient Resource Utilization:</strong> Reduces idle functional units and increases processor efficiency.</li>
      <li><strong>Reduced Instruction Dependency:</strong> Minimizes bottlenecks caused by sequential instruction execution.</li>
      <li><strong>Increased Throughput:</strong> Supports multi-threaded and parallel processing by overlapping execution.</li>
    </ul>

    {/* ================= Disadvantages ================= */}
    <h2 className="text-3xl font-bold mt-8">Disadvantages of ILP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Increased Complexity:</strong> Additional hardware required → more complex and expensive CPU.</li>
      <li><strong>Instruction Overhead:</strong> Extra instructions for scheduling/management can reduce performance.</li>
      <li><strong>Data Dependency:</strong> Limits parallelism, can reduce throughput.</li>
      <li><strong>Reduced Energy Efficiency:</strong> Extra hardware and operations consume more power.</li>
    </ul>

  </div>
);

export default Home;
