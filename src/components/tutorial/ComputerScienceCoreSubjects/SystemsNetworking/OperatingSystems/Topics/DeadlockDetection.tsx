import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Deadlock Detection and Recovery ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Deadlock Detection and Recovery
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Jul, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Deadlock Detection and Recovery is the mechanism used in operating systems to detect 
      and resolve deadlocks, ensuring processes run smoothly. A <strong>deadlock</strong> occurs 
      when two or more processes are blocked, each waiting for resources held by the other.
    </p>

    {/* What is Deadlock */}
    <h2 className="text-3xl font-bold mt-8">What is Deadlock?</h2>
    <p className="leading-relaxed">
      A deadlock is a situation where processes wait indefinitely for events that never occur. 
      It is similar to a traffic jam at an intersection where each vehicle blocks the others, 
      preventing all from moving.
    </p>

    {/* Approaches */}
    <h2 className="text-3xl font-bold mt-8">Approaches to Deadlock Detection and Recovery</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Prevention:</strong> The OS ensures that deadlocks cannot occur, using safe resource allocation strategies like the Banker's Algorithm.</li>
      <li><strong>Detection and Recovery:</strong> If deadlocks occur, the OS detects them (e.g., Wait-For Graph) and resolves them through process termination, resource preemption, or rollback.</li>
    </ul>

    <p className="leading-relaxed">
      <strong>Difference:</strong> Prevention avoids deadlocks entirely, while Detection and Recovery handle deadlocks that have already occurred.
    </p>

    {/* Deadlock Detection */}
    <h2 className="text-3xl font-bold mt-8">Deadlock Detection</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Single Instance Resources:</strong> Check for cycles in the Resource Allocation Graph; a cycle confirms deadlock.</li>
      <li><strong>Multiple Instance Resources:</strong> Cycle detection is necessary but not sufficient. Algorithms like Banker's Algorithm can periodically check for unsafe states.</li>
      <li><strong>Wait-For Graph Algorithm:</strong> Builds a directed graph of process-resource dependencies to detect deadlocks; cycles indicate deadlocks.</li>
    </ul>

    {/* Deadlock Recovery */}
    <h2 className="text-3xl font-bold mt-8">Deadlock Recovery</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Process Termination:</strong> Abort one or more processes to break the deadlock cycle.</li>
      <li><strong>Process Rollback:</strong> Roll back deadlocked processes to a previously saved safe state using checkpoints.</li>
      <li><strong>Resource Preemption:</strong> Temporarily take resources from some processes to allow others to continue, which may lead to starvation.</li>
      <li><strong>Concurrency Control:</strong> Ensures that processes do not simultaneously access shared resources in conflicting ways, reducing the chances of deadlock.</li>
    </ul>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages of Deadlock Detection and Recovery</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Improved System Stability by preventing system-wide stalls.</li>
      <li>Better Resource Utilization, ensuring efficient allocation and responsiveness.</li>
      <li>Insights for Better System Design by analyzing process-resource interactions.</li>
    </ul>

    {/* Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Disadvantages of Deadlock Detection and Recovery</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Performance Overhead due to periodic deadlock checks.</li>
      <li>Implementation Complexity, especially with advanced detection algorithms.</li>
      <li>Possibility of False Positives or Negatives in detection.</li>
      <li>Risk of Data Loss if rollback or termination is applied.</li>
    </ul>

    {/* Conclusion */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      Deadlock Detection and Recovery is essential for maintaining OS stability and resource efficiency. 
      Choosing the right approach depends on system requirements, trade-offs between performance, complexity, 
      and risk tolerance.
    </p>

  </div>
);

export default Home;
