import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Scheduling and Load Balancing ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Scheduling and Load Balancing in Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 03 Dec, 2025</p>

    <p className="text-lg leading-relaxed">
      Scheduling and load balancing are essential mechanisms in distributed systems.
      They determine how tasks are assigned, migrated, and executed across nodes in
      order to optimize overall system performance, improve resource utilization,
      and reduce response time.
    </p>

    {/* Scheduling Section */}
    <h2 className="text-3xl font-bold mt-8">Scheduling in Distributed Systems</h2>
    <p className="leading-relaxed">
      Scheduling defines how processes are distributed across multiple nodes. The major scheduling
      approaches used in distributed systems include:
    </p>

    <h3 className="text-xl font-semibold mt-4">1. Task Assignment Approach</h3>
    <p className="leading-relaxed">
      A user-submitted process is composed of multiple related tasks. These tasks are assigned to
      suitable nodes to enhance system performance. This approach, however, is rarely used in practice
      because it requires prior knowledge such as inter-process communication costs and resource needs.
    </p>

    <h3 className="text-xl font-semibold mt-4">2. Load Balancing Approach</h3>
    <p className="leading-relaxed">
      The workload is distributed among several nodes so that no single node becomes overloaded.
      The goal is to balance the load to improve response time and system throughput.
    </p>

    <h3 className="text-xl font-semibold mt-4">3. Load Sharing Approach</h3>
    <p className="leading-relaxed">
      Load sharing ensures that no node is left idle while others are overloaded. Even though this
      method does not guarantee perfect balance, it ensures that available processing power is not wasted.
    </p>

    <p className="bg-gray-200 p-4 rounded-lg text-sm">
      Note: Task Assignment has limited applicability because it assumes that details like communication
      cost and resource usage are known beforehand.
    </p>

    {/* Characteristics of Good Scheduling Algorithm */}
    <h2 className="text-3xl font-bold mt-8">Characteristics of a Good Scheduling Algorithm</h2>

    <ul className="list-disc ml-6 leading-relaxed space-y-2">
      <li>
        Should not require extensive prior knowledge about the properties or resource requirements
        of user-submitted processes.
      </li>
      <li>
        Must support <strong>dynamic scheduling</strong> since the initial allocation may need to be
        adjusted as system load changes.
      </li>
      <li>
        Should be flexible for <strong>process migration</strong> when the system load varies.
      </li>
      <li>
        Must ensure <strong>stability</strong> and avoid unnecessary process migrations to prevent overhead.
      </li>
      <li>
        Should make <strong>quick scheduling decisions</strong> using heuristic methods that give
        near-optimal results with minimal computation.
      </li>
      <li>
        Must operate with minimal global state information, since maintaining global state increases overhead.
      </li>
      <li>
        Should remain functional even if some nodes fail or network partitions occur, ensuring
        <strong>fault tolerance</strong>.
      </li>
      <li>
        Must be <strong>scalable</strong>. Requesting workload information from all nodes becomes inefficient
        as the system grows, so examining only a subset of nodes is preferred.
      </li>
      <li>
        Must ensure <strong>fairness</strong> so that no node suffers significantly poorer response times
        compared to others.
      </li>
    </ul>

    {/* Load Balancing Section */}
    <h2 className="text-3xl font-bold mt-8">Load Balancing in Distributed Systems</h2>
    <p className="leading-relaxed">
      Load balancing involves distributing workload across multiple processing elements. The goal is to
      prevent nodes from becoming overloaded or idle, ensuring maximum system throughput and parallel
      performance. When properly balanced, all processors complete their work at approximately the same time.
    </p>

    <h2 className="text-2xl font-semibold mt-6">Types of Load Balancing Algorithms</h2>

    {/* Static Load Balancing */}
    <h3 className="text-xl font-semibold mt-4">1. Static Load Balancing</h3>
    <p className="leading-relaxed">
      Static algorithms do not consider the current system state. They are simple but less flexible.
      Their subtypes include:
    </p>

    <ul className="list-disc ml-6 leading-relaxed space-y-2">
      <li>
        <strong>Deterministic:</strong> Uses fixed rules based on node and process properties. Hard to optimize
        and expensive to implement.
      </li>
      <li>
        <strong>Probabilistic:</strong> Uses statistical properties such as network size or topology for
        process placement. Usually less efficient.
      </li>
    </ul>

    {/* Dynamic Load Balancing */}
    <h3 className="text-xl font-semibold mt-4">2. Dynamic Load Balancing</h3>
    <p className="leading-relaxed">
      Dynamic algorithms consider the real-time load of each node and redistribute workloads accordingly.
      They are more complex but generally provide superior performance.
    </p>

    <ul className="list-disc ml-6 leading-relaxed space-y-2">
      <li>
        <strong>Centralized:</strong> A single node makes scheduling decisions. Efficient but suffers from
        reduced fault tolerance and scalability issues.
      </li>
      <li>
        <strong>Distributed:</strong> Each node participates in scheduling decisions. Faster and more scalable,
        with no need for global state.
      </li>
    </ul>

    {/* Cooperative vs Non-Cooperative */}
    <h3 className="text-xl font-semibold mt-4">Types of Distributed Load Balancing</h3>

    <ul className="list-disc ml-6 leading-relaxed space-y-2">
      <li>
        <strong>Cooperative:</strong> Nodes work together to make scheduling decisions. More stable but adds overhead.
      </li>
      <li>
        <strong>Non-cooperative:</strong> Nodes act independently. Lower overhead but can be less stable.
      </li>
    </ul>

    {/* Issues in Designing Load Balancing Algorithms */}
    <h2 className="text-3xl font-bold mt-8">Issues in Designing Load-Balancing Algorithms</h2>

    <ul className="list-disc ml-6 leading-relaxed space-y-2">
      <li><strong>Load Estimation:</strong> Determining the load of each node.</li>
      <li><strong>Process Transfer:</strong> Deciding whether a process should run locally or remotely.</li>
      <li><strong>State Information Exchange:</strong> How nodes share load information.</li>
      <li><strong>Location Policy:</strong> Selecting the destination node for migration.</li>
      <li><strong>Priority Assignment:</strong> Deciding whether local or remote tasks get priority.</li>
      <li><strong>Migration Limiting:</strong> Setting a limit on how many times a process may migrate.</li>
    </ul>

  </div>
);

export default Home;
