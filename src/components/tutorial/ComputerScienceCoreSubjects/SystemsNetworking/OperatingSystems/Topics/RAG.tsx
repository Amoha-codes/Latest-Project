import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Resource Allocation Graph (RAG) ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Resource Allocation Graph (RAG)
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 25 Oct, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      A <strong>Resource Allocation Graph (RAG)</strong> is a graphical way to visualize how 
      resources are allocated and requested by processes in an operating system. It helps in 
      understanding deadlocks more clearly than tables by representing processes as 
      <strong> circles</strong> and resources as <strong>squares</strong>.
    </p>

    <p className="leading-relaxed">
      RAG shows:
      <ul className="list-disc ml-6 mt-2">
        <li>Which resources are allocated</li>
        <li>Which resources are being requested</li>
        <li>How processes and resource requests affect the entire system</li>
      </ul>
    </p>

    {/* Types of Vertices */}
    <h2 className="text-3xl font-bold mt-8">Types of Vertices in RAG</h2>
    <p className="leading-relaxed">
      RAG contains two types of vertices:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Process Vertex:</strong> Represented using a circle.
      </li>
      <li>
        <strong>Resource Vertex:</strong> Represented using a square. Resources can be:
        <ul className="list-disc ml-6 mt-1">
          <li><strong>Single Instance Resource</strong> – only one copy exists.</li>
          <li><strong>Multi Instance Resource</strong> – multiple instances exist.</li>
        </ul>
      </li>
    </ul>

    {/* Types of Edges */}
    <h2 className="text-3xl font-bold mt-8">Types of Edges in RAG</h2>
    <p className="leading-relaxed">
      There are two types of edges in a Resource Allocation Graph:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Assign Edge:</strong> Resource → Process (resource is allocated).
      </li>
      <li>
        <strong>Request Edge:</strong> Process → Resource (process requests a resource).
      </li>
    </ul>

    <p className="leading-relaxed">
      Example:  
      If a process is using a resource, arrow goes from resource to process.  
      If a process is requesting a resource, arrow goes from process to resource.
    </p>

    {/* Example 1 */}
    <h2 className="text-3xl font-bold mt-8">Example 1: Single Instance RAG</h2>
    <p className="leading-relaxed">
      If the RAG contains a <strong>cycle</strong> and each resource in the cycle has only 
      one instance, then the system is in <strong>deadlock</strong>.
    </p>

    <p className="leading-relaxed">
      Example:  
      If P1 holds R1, P2 holds R2, P1 waits for R2, and P2 waits for R1 → deadlock occurs.
    </p>

    <p className="leading-relaxed">
      A cycle in a single-instance resource graph is a <strong>sufficient condition</strong> for deadlock.
    </p>

    {/* Example 2 */}
    <h2 className="text-3xl font-bold mt-8">Example 2: Multi-Instance RAG</h2>
    <p className="leading-relaxed">
      In multi-instance resource systems, the presence of a cycle does <strong>not always</strong> 
      indicate deadlock. It is only a <strong>necessary</strong> condition, not sufficient.
    </p>

    <p className="leading-relaxed">
      To determine deadlock, we build:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Allocation Matrix</strong> – shows current allocations.</li>
      <li><strong>Request Matrix</strong> – shows current resource requests.</li>
    </ul>

    <p className="leading-relaxed">
      If available resources cannot satisfy any process requests, the system is in deadlock.
    </p>

    {/* Detection Section */}
    <h2 className="text-3xl font-bold mt-8">Deadlock Detection using RAG</h2>
    <p className="leading-relaxed">
      Deadlock detection depends on whether cycles exist and whether resources have 
      single or multiple instances:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>No cycle ⇒ No deadlock</strong></li>
      <li><strong>Cycle + Single Instance ⇒ Deadlock</strong></li>
      <li><strong>Cycle + Multi Instance ⇒ Deadlock possible (not guaranteed)</strong></li>
    </ul>

    <p className="leading-relaxed">
      Example of Deadlock Situation:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>P1 waits for R1 held by P2</li>
      <li>P2 waits for R3 held by P3</li>
      <li>P3 waits for R2 whose instances are held by P1 and P2</li>
    </ul>

    <p className="leading-relaxed">
      Example of a Cycle <strong>without</strong> Deadlock:
      The system has enough free resource instances to eventually break the cycle.
    </p>

  </div>
);

export default Home;
