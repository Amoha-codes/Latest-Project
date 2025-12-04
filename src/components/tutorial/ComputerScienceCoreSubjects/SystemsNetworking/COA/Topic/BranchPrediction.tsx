import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Title ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Branch Prediction in Pentium
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Jul, 2025</p>

    {/* ================= Introduction ================= */}
    <p className="text-lg leading-relaxed">
      Pipelining performance can be reduced by program transfer instructions like JMP, CALL, RET, etc. 
      These instructions can invalidate subsequent pipeline instructions, requiring pipeline reloads.
    </p>

    <h2 className="text-3xl font-bold mt-8">Branch Prediction Logic</h2>
    <p className="leading-relaxed">
      Pentium uses <strong>Dynamic Branch Prediction</strong> to predict whether a branch will be taken or not. 
      Correct predictions avoid pipeline flushes, while incorrect predictions flush the pipeline and restart instruction fetch.
    </p>

    <h3 className="text-2xl font-bold mt-4">Branch Target Buffer (BTB)</h3>
    <p className="leading-relaxed">
      BTB is a 4-way set-associative cache with 256 entries that stores branch target addresses and history bits.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Valid Bit: Indicates if the entry is valid.</li>
      <li>History Bit: Tracks how often the branch is taken.</li>
      <li>Source Memory Address: From where the branch instruction was fetched.</li>
    </ul>

    <h3 className="text-2xl font-bold mt-4">Working of Branch Prediction</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>BTB monitors branch instructions during the Decode Instruction stage.</li>
      <li>First-time branch fetch leads to BTB miss; prediction defaults to not taken.</li>
      <li>Execution Unit (EU) confirms if branch is taken or not.</li>
      <li>If branch is taken, BTB updates with target address and sets history bit as strongly taken.</li>
    </ul>

    <h3 className="text-2xl font-bold mt-4">Branch History Table</h3>
    <p className="leading-relaxed">
      Pentium uses 2-bit history for branch predictions:
    </p>
    <table className="table-auto border border-gray-400 w-full text-sm text-left mt-2">
      <thead>
        <tr className="bg-gray-400">
          <th className="border px-2 py-1">History Bits</th>
          <th className="border px-2 py-1">Resulting Description</th>
          <th className="border px-2 py-1">Prediction Made</th>
          <th className="border px-2 py-1">If Branch Taken</th>
          <th className="border px-2 py-1">If Branch Not Taken</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-2 py-1">11</td>
          <td className="border px-2 py-1">Strongly Taken</td>
          <td className="border px-2 py-1">Branch Taken</td>
          <td className="border px-2 py-1">Remains Same</td>
          <td className="border px-2 py-1">Downgraded to Weakly Taken</td>
        </tr>
        <tr>
          <td className="border px-2 py-1">10</td>
          <td className="border px-2 py-1">Weakly Taken</td>
          <td className="border px-2 py-1">Branch Taken</td>
          <td className="border px-2 py-1">Upgraded to Strongly Taken</td>
          <td className="border px-2 py-1">Downgraded to Weakly Not Taken</td>
        </tr>
        <tr>
          <td className="border px-2 py-1">01</td>
          <td className="border px-2 py-1">Weakly Not Taken</td>
          <td className="border px-2 py-1">Branch Not Taken</td>
          <td className="border px-2 py-1">Upgraded to Weakly Taken</td>
          <td className="border px-2 py-1">Downgraded to Strongly Not Taken</td>
        </tr>
        <tr>
          <td className="border px-2 py-1">00</td>
          <td className="border px-2 py-1">Strongly Not Taken</td>
          <td className="border px-2 py-1">Branch Not Taken</td>
          <td className="border px-2 py-1">Upgraded to Weakly Not Taken</td>
          <td className="border px-2 py-1">Remains Same</td>
        </tr>
      </tbody>
    </table>

    {/* ================= Advantages ================= */}
    <h2 className="text-3xl font-bold mt-8">Advantages</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Improved performance via correct prediction of conditional branches.</li>
      <li>Increased instruction throughput by continuing fetch/execution from predicted path.</li>
      <li>Reduced branch misprediction penalties.</li>
      <li>Efficient processor resource utilization.</li>
      <li>Better handling of large codebases.</li>
      <li>More accurate predictions over time using historical data.</li>
      <li>Enhanced pipelining and higher throughput.</li>
    </ul>

    {/* ================= Disadvantages ================= */}
    <h2 className="text-3xl font-bold mt-8">Disadvantages</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Increased complexity of design and manufacturing.</li>
      <li>Higher power consumption due to extra hardware.</li>
      <li>Limited prediction accuracy; mispredictions can occur.</li>
      <li>Increased memory usage to store branch history.</li>
      <li>Difficulty predicting indirect branches (e.g., switch statements).</li>
      <li>Potential vulnerability to side-channel attacks.</li>
      <li>Added software complexity for managing branch history.</li>
    </ul>

  </div>
);

export default Home;
