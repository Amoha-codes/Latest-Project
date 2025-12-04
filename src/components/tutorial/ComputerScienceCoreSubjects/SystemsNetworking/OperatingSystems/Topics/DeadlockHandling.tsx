import React from 'react';

const DeadlockHandling: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Handling Deadlocks ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Handling Deadlocks
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 08 Sep, 2025</p>

    <p className="text-lg leading-relaxed">
      Deadlock handling methods are strategies used in operating systems to ensure processes do not remain permanently blocked, 
      maintaining smooth execution and system reliability.
    </p>

    {/* Methods */}
    <h2 className="text-3xl font-bold mt-8">Methods of Handling Deadlocks</h2>
    <p className="leading-relaxed">
      There are four main approaches to deal with deadlocks:
    </p>

    <ul className="list-decimal ml-6 space-y-4 leading-relaxed">
      {/* 1. Deadlock Prevention */}
      <li>
        <strong>Deadlock Prevention:</strong> 
        <p className="ml-4">
          The OS ensures that at least one of the necessary conditions for deadlock (mutual exclusion, hold and wait, 
          no preemption, circular wait) never occurs. By breaking these conditions in advance, deadlocks are prevented.
        </p>
      </li>

      {/* 2. Deadlock Avoidance */}
      <li>
        <strong>Deadlock Avoidance:</strong> 
        <p className="ml-4">
          The OS makes dynamic decisions to ensure the system never enters an unsafe state. Algorithms like the Banker’s Algorithm 
          or Resource Allocation Graph (RAG) Algorithm are used:
        </p>
        <ul className="list-disc ml-8">
          <li><strong>Banker’s Algorithm:</strong> Simulates resource allocation to keep the system in a safe state (multiple instances of resources).</li>
          <li><strong>RAG Algorithm:</strong> Checks for cycles when each resource has only one instance to avoid unsafe states.</li>
        </ul>
      </li>

      {/* 3. Deadlock Detection & Recovery */}
      <li>
        <strong>Deadlock Detection & Recovery:</strong> 
        <p className="ml-4">
          Deadlock detection periodically checks for circular waits. Recovery methods include:
        </p>
        <ul className="list-disc ml-8">
          <li><strong>Process Termination:</strong> Abort one or more deadlocked processes to break the cycle.</li>
          <li><strong>Resource Preemption:</strong> Temporarily take resources from some processes and reallocate them.</li>
        </ul>
      </li>

      {/* 4. Deadlock Ignorance */}
      <li>
        <strong>Deadlock Ignorance (Ostrich Algorithm):</strong> 
        <p className="ml-4">
          The OS ignores deadlocks, acting as if they never occur. This method is used when deadlocks are extremely rare. 
          If a deadlock occurs, the system may simply be rebooted.
        </p>
      </li>
    </ul>

  </div>
);

export default DeadlockHandling;
