import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Mutual Exclusion in Distributed Systems ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Mutual Exclusion in Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Jul, 2025</p>

    {/* Introduction */}
    <p className="text-lg leading-relaxed">
      Mutual exclusion is a concurrency control property that prevents race conditions by 
      ensuring that only one process can execute its critical section at any given time. 
      In distributed systems, mutual exclusion is challenging due to the absence of shared 
      memory and a global clock, requiring message-passing approaches to control access to 
      critical sections.
    </p>

    {/* Single vs Distributed System */}
    <h2 className="text-3xl font-bold mt-8">Single vs Distributed Systems</h2>
    <p className="leading-relaxed">
      In a single computer system, shared memory allows processes to coordinate via 
      semaphores or other shared variables. In distributed systems, processes do not have 
      complete information about the system state. Mutual exclusion is therefore implemented 
      using <strong>message passing</strong> between sites.
    </p>

    {/* Requirements */}
    <h2 className="text-3xl font-bold mt-8">Requirements of Mutual Exclusion Algorithms</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>No Deadlock:</strong> Sites should not wait indefinitely for messages that may never arrive.</li>
      <li><strong>No Starvation:</strong> Every site requesting the critical section should eventually get access.</li>
      <li><strong>Fairness:</strong> Requests should be granted in the order they are made.</li>
      <li><strong>Fault Tolerance:</strong> The system should detect failures and continue functioning without disruption.</li>
    </ul>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Occurs when concurrent access to shared resources by multiple sites is involved.</li>
      <li>Fundamental issue in designing distributed systems.</li>
      <li>Local mutual exclusion techniques are insufficient due to resource distribution, message delays, and lack of global information.</li>
    </ul>

    {/* Solutions */}
    <h2 className="text-3xl font-bold mt-8">Solutions to Distributed Mutual Exclusion</h2>
    <p className="leading-relaxed">
      Since shared variables cannot be used, mutual exclusion in distributed systems is implemented using <strong>message passing</strong>. There are three main approaches:
    </p>

    {/* Token-Based */}
    <h3 className="text-2xl font-semibold mt-6">1. Token-Based Algorithms</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>A unique token circulates among all sites; possession of the token allows entry into the critical section.</li>
      <li>Sequence numbers are used to order requests and distinguish old vs current requests.</li>
      <li>Ensures mutual exclusion as the token is unique.</li>
      <li>Example: <strong>Suzuki–Kasami Algorithm</strong></li>
    </ul>

    {/* Non-Token Based */}
    <h3 className="text-2xl font-semibold mt-6">2. Non-Token-Based Algorithms</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Sites communicate to determine which site enters the critical section next, often requiring multiple rounds of messages.</li>
      <li>Timestamps are used to order requests and resolve conflicts.</li>
      <li>Logical clocks (Lamport clocks) maintain order.</li>
      <li>Example: <strong>Ricart–Agrawala Algorithm</strong></li>
    </ul>

    {/* Quorum-Based */}
    <h3 className="text-2xl font-semibold mt-6">3. Quorum-Based Algorithms</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Instead of requesting permission from all sites, each site requests a subset called a quorum.</li>
      <li>Any two quorums intersect at a common site that ensures mutual exclusion.</li>
      <li>Example: <strong>Maekawa’s Algorithm</strong></li>
    </ul>

    {/* FAQs */}
    <h2 className="text-3xl font-bold mt-8">FAQs</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>How does a token-based algorithm handle failure of a site holding the token?</strong> 
        The token is lost until the site recovers or another site generates a new token. No site can enter the critical section until the token is restored.
      </li>
      <li>
        <strong>What is a quorum in quorum-based algorithms?</strong> 
        A quorum is a subset of sites that a site requests permission from to enter the critical section. Overlapping subsets ensure mutual exclusion.
      </li>
      <li>
        <strong>How is fairness ensured in non-token-based algorithms?</strong> 
        Logical clocks order requests across sites. Each site updates its clock with each message, ensuring requests are executed in arrival order.
      </li>
    </ul>

  </div>
);

export default Home;
