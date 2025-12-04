import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Load-Sharing Approach ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Load-Sharing Approach in Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 03 Dec, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Load sharing in distributed systems ensures that all nodes share the overall workload, 
      preventing idle nodes and maintaining system efficiency. If some nodes fail, the load 
      is redistributed among the remaining nodes.
    </p>

    {/* Example */}
    <h2 className="text-3xl font-bold mt-8">Example</h2>
    <p className="leading-relaxed">
      Suppose there are two server connections with bandwidths of 500 Mbps and 250 Mbps and 
      two data packets. One packet is sent through the 500 Mbps link and the other through 
      the 250 Mbps link. This approach balances the workload instead of using the same link for all traffic.
    </p>

    {/* Importance of Load Sharing */}
    <h2 className="text-3xl font-bold mt-8">Why Use Load Sharing?</h2>
    <p className="leading-relaxed">
      Load-sharing algorithms address several challenges in distributed systems:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Load Assessment:</strong> Evaluate node workload.</li>
      <li><strong>Process Transfer:</strong> Decide whether a process should run locally or remotely.</li>
      <li><strong>State Information Exchange:</strong> Share load information among nodes efficiently.</li>
      <li><strong>Location Policy:</strong> Choose target nodes for process migration.</li>
      <li><strong>Priority Assignment:</strong> Determine execution priority for local and remote processes.</li>
      <li><strong>Migration Limiting:</strong> Control the number of times a process can migrate.</li>
    </ul>

    {/* Location Policies */}
    <h2 className="text-3xl font-bold mt-8">1. Location Policies</h2>
    <p className="leading-relaxed">
      These policies determine which node selects the target for process migration:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Sender-Initiated:</strong> The overloaded sender node searches for a lightly loaded receiver node.</li>
      <li><strong>Receiver-Initiated:</strong> The underloaded receiver node searches for a heavily loaded sender node to accept a process.</li>
    </ul>

    {/* Process Transfer Policy */}
    <h2 className="text-3xl font-bold mt-8">2. Process Transfer Policy</h2>
    <p className="leading-relaxed">
      Typically uses an all-or-nothing approach. Nodes become receivers if idle and senders if overloaded. Thresholds can be adjusted to optimize processing power utilization.
    </p>

    {/* State Information Exchange Policy */}
    <h2 className="text-3xl font-bold mt-8">3. State Information Exchange Policy</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Broadcast on State Change:</strong> Nodes broadcast only when load state changes.</li>
      <li><strong>Polling on State Change:</strong> Nodes query other nodes for load information until a suitable node is found.</li>
    </ul>

    {/* Load Estimation Policy */}
    <h2 className="text-3xl font-bold mt-8">4. Load Estimation Policy</h2>
    <p className="leading-relaxed">
      Simplest approach counts the total number of processes on a node to determine if it is idle or busy.
    </p>

    {/* Priority Assignment Policy */}
    <h2 className="text-3xl font-bold mt-8">5. Priority Assignment Policy</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Selfish:</strong> Local processes get higher priority than remote processes.</li>
      <li><strong>Altruistic:</strong> Remote processes get higher priority than local processes.</li>
      <li><strong>Intermediate:</strong> Priority depends on the relative number of local and remote processes.</li>
    </ul>

    {/* Migration Limiting Policy */}
    <h2 className="text-3xl font-bold mt-8">6. Migration Limiting Policy</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Uncontrolled:</strong> A process can migrate any number of times.</li>
      <li><strong>Controlled:</strong> Migration count is limited to prevent instability and excessive overhead.</li>
    </ul>

    {/* Conclusion */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      Load-sharing algorithms ensure balanced workloads across nodes, improve resource utilization, 
      and maintain system stability. By carefully applying location, transfer, priority, and migration 
      policies, distributed systems can operate efficiently even under dynamic conditions.
    </p>

  </div>
);

export default Home;
