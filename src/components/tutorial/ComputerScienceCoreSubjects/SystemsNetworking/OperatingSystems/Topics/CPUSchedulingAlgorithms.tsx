import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      CPU Scheduling in Operating Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Oct, 2025</p>

    {/* Introduction */}
    <p className="text-lg leading-relaxed">
      CPU scheduling is a process used by the operating system to decide which process gets to use the CPU at a particular time. Since a CPU can only execute one task at a time, scheduling ensures efficient utilization and responsiveness.
    </p>

    {/* Purpose */}
    <h2 className="text-3xl font-bold mt-8">Purpose of CPU Scheduling</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Maximize CPU utilization.</li>
      <li>Minimize response time and waiting time of processes.</li>
    </ul>

    {/* Need for Scheduling */}
    <h2 className="text-3xl font-bold mt-8">Need for CPU Scheduling Algorithm</h2>
    <p className="leading-relaxed">
      CPU scheduling decides which process will use the CPU while others wait. The main function is to ensure the CPU is never idle when there are ready processes available.
    </p>

    {/* Terminologies */}
    <h2 className="text-3xl font-bold mt-8">Terminologies Used in CPU Scheduling</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Arrival Time:</strong> Time when process arrives in the ready queue.</li>
      <li><strong>Completion Time:</strong> Time when process finishes execution.</li>
      <li><strong>Burst Time:</strong> CPU time required by a process.</li>
      <li><strong>Turn Around Time (TAT):</strong> Completion Time - Arrival Time.</li>
      <li><strong>Waiting Time (WT):</strong> TAT - Burst Time.</li>
      <li><strong>Response Time:</strong> Time from submission to first response output.</li>
    </ul>

    {/* Design Considerations */}
    <h2 className="text-3xl font-bold mt-8">Things to Consider While Designing a CPU Scheduling Algorithm</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>CPU Utilization: Keep the CPU as busy as possible (40–90% in real-time systems).</li>
      <li>Throughput: Number of processes completed per unit time.</li>
      <li>Turn Around Time: Total time from process arrival to completion.</li>
      <li>Waiting Time: Time spent in ready queue before execution.</li>
      <li>Response Time: Time taken to produce the first response in interactive systems.</li>
    </ul>

    {/* Types of Scheduling */}
    <h2 className="text-3xl font-bold mt-8">Types of CPU Scheduling</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Preemptive:</strong> A running process can be interrupted and moved to ready state.</li>
      <li><strong>Non-Preemptive:</strong> A running process cannot be interrupted until it terminates or moves to waiting state.</li>
    </ul>

    {/* Algorithms */}
    <h2 className="text-3xl font-bold mt-8">CPU Scheduling Algorithms</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>FCFS – First Come, First Serve</li>
      <li>SJF – Shortest Job First</li>
      <li>SRTF – Shortest Remaining Time First</li>
      <li>Round Robin (RR)</li>
      <li>Priority Scheduling (Preemptive & Non-Preemptive)</li>
      <li>HRRN – Highest Response Ratio Next</li>
      <li>Multiple Queue Scheduling</li>
      <li>Multilevel Feedback Queue Scheduling</li>
    </ul>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Comparison of CPU Scheduling Algorithms</h2>
    <table className="table-auto border-collapse border border-gray-300 w-full text-left">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">Algorithm</th>
          <th className="border border-gray-300 px-4 py-2">Allocation</th>
          <th className="border border-gray-300 px-4 py-2">Complexity</th>
          <th className="border border-gray-300 px-4 py-2">Average Waiting Time</th>
          <th className="border border-gray-300 px-4 py-2">Preemption</th>
          <th className="border border-gray-300 px-4 py-2">Starvation</th>
          <th className="border border-gray-300 px-4 py-2">Performance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">FCFS</td>
          <td className="border border-gray-300 px-4 py-2">According to arrival time</td>
          <td className="border border-gray-300 px-4 py-2">Simple</td>
          <td className="border border-gray-300 px-4 py-2">Large</td>
          <td className="border border-gray-300 px-4 py-2">No</td>
          <td className="border border-gray-300 px-4 py-2">No</td>
          <td className="border border-gray-300 px-4 py-2">Slow</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">SJF</td>
          <td className="border border-gray-300 px-4 py-2">Lowest CPU burst time</td>
          <td className="border border-gray-300 px-4 py-2">Moderate</td>
          <td className="border border-gray-300 px-4 py-2">Smaller</td>
          <td className="border border-gray-300 px-4 py-2">No</td>
          <td className="border border-gray-300 px-4 py-2">Yes</td>
          <td className="border border-gray-300 px-4 py-2">Minimum AWT</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">SRTF</td>
          <td className="border border-gray-300 px-4 py-2">Shortest remaining burst (preemptive)</td>
          <td className="border border-gray-300 px-4 py-2">Complex</td>
          <td className="border border-gray-300 px-4 py-2">Depends on measures</td>
          <td className="border border-gray-300 px-4 py-2">Yes</td>
          <td className="border border-gray-300 px-4 py-2">Yes</td>
          <td className="border border-gray-300 px-4 py-2">Short jobs favored</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Round Robin (RR)</td>
          <td className="border border-gray-300 px-4 py-2">Fixed time quantum</td>
          <td className="border border-gray-300 px-4 py-2">Depends on TQ size</td>
          <td className="border border-gray-300 px-4 py-2">Moderate</td>
          <td className="border border-gray-300 px-4 py-2">Yes</td>
          <td className="border border-gray-300 px-4 py-2">No</td>
          <td className="border border-gray-300 px-4 py-2">Fair time allocation</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Priority Scheduling</td>
          <td className="border border-gray-300 px-4 py-2">Based on priority</td>
          <td className="border border-gray-300 px-4 py-2">Moderate</td>
          <td className="border border-gray-300 px-4 py-2">Smaller</td>
          <td className="border border-gray-300 px-4 py-2">Yes/No</td>
          <td className="border border-gray-300 px-4 py-2">Yes</td>
          <td className="border border-gray-300 px-4 py-2">Good but can starve low priority</td>
        </tr>
      </tbody>
    </table>

    {/* Example Problems */}
    <h2 className="text-3xl font-bold mt-8">Practice Questions</h2>
    <p className="leading-relaxed font-semibold">
      Q1: Which of the following is false about SJF?
    </p>
    <p className="leading-relaxed">
      S1: It causes minimum average waiting time <br />
      S2: It can cause starvation <br />
      Answer: (D) Neither S1 nor S2 is false. SJF minimizes average waiting time but can cause starvation.
    </p>

    <p className="leading-relaxed font-semibold">
      Q2: Preemptive SJF example: P0(9), P1(4), P2(9), arrival times 0,1,2. Average waiting time = 5 ms
    </p>

    <p className="leading-relaxed font-semibold">
      Q3: SRTF example: P1(5), P2(3), P3(3), P4(1), arrival times 0,1,2,4. Average turnaround time = 5.50
    </p>

    <p className="leading-relaxed font-semibold">
      Q4: SRTF example: P1(20), P2(25), P3(10), P4(15), arrival times 0,15,30,45. Total waiting time for P2 = 15
    </p>

  </div>
);

export default Home;
