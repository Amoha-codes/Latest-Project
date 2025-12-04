import React from 'react';

const DeadlockPrevention: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Deadlock Prevention ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Deadlock Prevention
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 04 Sep, 2025</p>

    <p className="text-lg leading-relaxed">
      Deadlock prevention is a strategy used in computer systems to ensure that processes can run smoothly 
      without getting stuck waiting for each other forever. Think of it like a traffic system where cars (processes) 
      move through intersections (resources) without causing a gridlock.
    </p>

    <p className="leading-relaxed">
      Deadlocks occur only if all four conditions hold simultaneously: Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait. 
      Preventing deadlock involves eliminating any of these conditions.
    </p>

    <ul className="list-decimal ml-6 space-y-4 leading-relaxed">

      {/* 1. Eliminate Mutual Exclusion */}
      <li>
        <strong>Eliminate Mutual Exclusion:</strong>
        <p className="ml-4">
          Some resources like printers are non-sharable and this condition cannot be removed. 
          Sharable resources like read-only files can be accessed by multiple processes simultaneously.
        </p>
      </li>

      {/* 2. Eliminate Hold and Wait */}
      <li>
        <strong>Eliminate Hold and Wait:</strong>
        <p className="ml-4">
          Hold and wait occurs when a process holds one resource and waits for another. This can be prevented by:
        </p>
        <ul className="list-disc ml-8">
          <li>
            <strong>Eliminate wait:</strong> The process requests all required resources in advance. 
            Example: Process1 declares it needs Resource1 and Resource2 at start.
          </li>
          <li>
            <strong>Eliminate hold:</strong> The process releases all held resources before requesting new ones. 
            Example: Process1 releases Resource2 and Resource3 before requesting Resource1.
          </li>
        </ul>
      </li>

      {/* 3. Eliminate No Preemption */}
      <li>
        <strong>Eliminate No Preemption:</strong>
        <p className="ml-4">
          Resources can’t be forcibly taken from a process once allocated. To prevent this:
        </p>
        <ul className="list-disc ml-8">
          <li>Processes release resources voluntarily after use.</li>
          <li>If resources are unavailable, the process releases all held resources and waits until all required resources are free.</li>
        </ul>
      </li>

      {/* 4. Eliminate Circular Wait */}
      <li>
        <strong>Eliminate Circular Wait:</strong>
        <p className="ml-4">
          Circular wait occurs when processes form a cycle, each waiting for a resource held by the next. Prevention can be done by:
        </p>
        <ul className="list-disc ml-8">
          <li>Impose a strict ordering on resources.</li>
          <li>Assign each resource a unique number.</li>
          <li>Processes can request resources only in increasing order of their numbers, preventing cycles.</li>
        </ul>
      </li>

    </ul>
  </div>
);

export default DeadlockPrevention;
