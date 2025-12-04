import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Dekker's Algorithm ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Dekker's Algorithm in Process Synchronization
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 29 Aug, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Dekker’s Algorithm was the first correct solution to the critical section problem for two processes.
      It avoids strict turn-taking drawbacks, uses only shared memory (flags and turn variable),
      and ensures <strong>Mutual Exclusion</strong>, <strong>Progress</strong>, and <strong>Bounded Waiting</strong>.
    </p>

    {/* General Process Representation */}
    <h2 className="text-3xl font-bold mt-8">Process Representation</h2>
    <pre className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm overflow-x-auto">
{`do {
    // entry section
        critical section
    // exit section
        remainder section
} while (TRUE);`}
    </pre>

    {/* Conditions for Critical Section Solution */}
    <h2 className="text-3xl font-bold mt-8">Required Conditions</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Mutual Exclusion</li>
      <li>Progress</li>
      <li>Bounded Waiting</li>
    </ul>

    {/* Dekker's Algorithm Core */}
    <h2 className="text-3xl font-bold mt-8">Algorithm</h2>
    <pre className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm overflow-x-auto">
{`var flag: array [0..1] of boolean;
turn: 0..1;
repeat
    flag[i] := true;
    while flag[j] do
        if turn = j then
        begin
            flag[i] := false;
            while turn = j do no-op;
            flag[i] := true;
        end;
    critical section
    turn := j;
    flag[i] := false;
    remainder section
until false;`}
    </pre>

    {/* Evolution of Dekker's Algorithm */}
    <h2 className="text-3xl font-bold mt-8">Evolution of Dekker's Algorithm</h2>
    <p className="leading-relaxed">
      Dekker's algorithm evolved through five versions to fix issues like deadlock, starvation, and mutual exclusion violations.
    </p>

    {/* Version 1 */}
    <h3 className="text-2xl font-bold mt-4">1. First Version</h3>
    <p className="leading-relaxed">
      Uses a shared turn variable to allow only the process whose turn matches its ID to enter. Problem: No progress guarantee.
    </p>

    {/* Version 2 */}
    <h3 className="text-2xl font-bold mt-4">2. Second Version</h3>
    <p className="leading-relaxed">
      Introduces two Boolean flags to indicate intent. Problem: Both may enter if preempted → mutual exclusion violated.
    </p>

    {/* Version 3 */}
    <h3 className="text-2xl font-bold mt-4">3. Third Version</h3>
    <p className="leading-relaxed">
      Flags set before entry section ensures mutual exclusion. Problem: Both may set flags simultaneously → deadlock possible.
    </p>

    {/* Version 4 */}
    <h3 className="text-2xl font-bold mt-4">4. Fourth Version</h3>
    <p className="leading-relaxed">
      Uses backoff and retries to avoid deadlock. Problem: Starvation may occur if one process keeps losing.
    </p>

    {/* Version 5 */}
    <h3 className="text-2xl font-bold mt-4">5. Final Version</h3>
    <p className="leading-relaxed">
      Combines flags (intent) + turn (priority). Favoured thread decides entry if both want to enter.
      Guarantees <strong>Mutual Exclusion, Progress, and Bounded Waiting</strong>.
    </p>

    {/* Summary Table */}
    <h2 className="text-3xl font-bold mt-8">Summary of Versions</h2>
    <table className="table-auto border border-gray-300 w-full text-left">
      <thead>
        <tr>
          <th className="border px-2 py-1">Version</th>
          <th className="border px-2 py-1">Mechanism</th>
          <th className="border px-2 py-1">Problem</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-2 py-1">1</td>
          <td className="border px-2 py-1">Turn variable only</td>
          <td className="border px-2 py-1">No progress if one process exits permanently</td>
        </tr>
        <tr>
          <td className="border px-2 py-1">2</td>
          <td className="border px-2 py-1">Flags (after entry)</td>
          <td className="border px-2 py-1">Mutual exclusion violated</td>
        </tr>
        <tr>
          <td className="border px-2 py-1">3</td>
          <td className="border px-2 py-1">Flags (before entry)</td>
          <td className="border px-2 py-1">Deadlock possible</td>
        </tr>
        <tr>
          <td className="border px-2 py-1">4</td>
          <td className="border px-2 py-1">Flags + random backoff</td>
          <td className="border px-2 py-1">Starvation possible</td>
        </tr>
        <tr>
          <td className="border px-2 py-1">5</td>
          <td className="border px-2 py-1">Flags + turn variable</td>
          <td className="border px-2 py-1">Correct solution (all 3 requirements)</td>
        </tr>
      </tbody>
    </table>

  </div>
);

export default Home;
