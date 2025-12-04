import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Features of Global Scheduling Algorithm ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Features of Global Scheduling Algorithm in Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 03 Dec, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      A global scheduling algorithm coordinates task execution across multiple nodes in a 
      distributed system. An effective algorithm should ensure high performance, reliability, 
      and adaptability. The key features are:
    </p>

    {/* Fault Tolerance */}
    <h2 className="text-3xl font-bold mt-8">1. Fault Tolerance</h2>
    <p className="leading-relaxed">
      The algorithm should continue operating even if some nodes fail or become temporarily 
      unavailable. It must handle node crashes gracefully and maintain system stability.
    </p>

    {/* Scalability */}
    <h2 className="text-3xl font-bold mt-8">2. Scalability</h2>
    <p className="leading-relaxed">
      The algorithm should perform efficiently as the number of nodes increases. It should 
      distribute workloads intelligently among nodes without causing bottlenecks, and avoid 
      overloading less efficient nodes.
    </p>

    {/* Minimal Prior Knowledge */}
    <h2 className="text-3xl font-bold mt-8">3. Minimal Prior Knowledge</h2>
    <p className="leading-relaxed">
      A good scheduler requires minimal information about process characteristics or resource 
      requirements, reducing overhead for users and simplifying deployment.
    </p>

    {/* Quick Decision-Making */}
    <h2 className="text-3xl font-bold mt-8">4. Quick Decision-Making</h2>
    <p className="leading-relaxed">
      The scheduler must make fast decisions to assign processes to nodes efficiently. Heuristic 
      methods are often preferred because they provide near-optimal results with low computational 
      effort, unlike exhaustive algorithms which may be too slow.
    </p>

    {/* Stability */}
    <h2 className="text-3xl font-bold mt-8">5. Stability</h2>
    <p className="leading-relaxed">
      The scheduler should prevent unnecessary migration of processes. Excessive movement of tasks 
      between nodes creates overhead and reduces system performance, so stability is crucial.
    </p>

    {/* Dynamic Nature */}
    <h2 className="text-3xl font-bold mt-8">6. Dynamic in Nature</h2>
    <p className="leading-relaxed">
      Process allocations should adapt to the current system load rather than fixed plans. The 
      scheduler must be able to move tasks dynamically to maintain balanced resource utilization.
    </p>

    {/* Conclusion */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      An effective global scheduling algorithm in distributed systems ensures fault tolerance, 
      scalability, stability, quick decision-making, minimal prior knowledge, and dynamic adaptability, 
      ultimately maximizing system efficiency and performance.
    </p>

  </div>
);

export default Home;
