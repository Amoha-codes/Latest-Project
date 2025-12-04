import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Logical Clock Title ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Logical Clock in Distributed System
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 17 Sep, 2025</p>

    {/* ================= Introduction ================= */}
    <p className="text-lg leading-relaxed">
      In distributed systems, ensuring synchronized events across multiple nodes is crucial for
      consistency and reliability. Enter logical clocks, a fundamental concept that orchestrates
      event ordering without relying on physical time. By assigning logical timestamps to events, 
      these clocks enable systems to reason about causality and sequence events accurately, even 
      across network delays and varied system clocks. This article explores how logical clocks 
      enhance distributed system design.
    </p>

    {/* ================= What Are Logical Clocks ================= */}
    <h2 className="text-3xl font-bold mt-8">What are Logical Clocks?</h2>

    <p className="leading-relaxed">
      Logical clocks are a concept used in distributed systems to order events without relying on 
      physical time synchronization. They provide a way to establish a partial ordering of events 
      based on causality rather than real-time clock values.
    </p>

    <p className="leading-relaxed">
      By assigning logical timestamps to events, logical clocks allow distributed systems to maintain 
      consistency and coherence across different nodes, despite varying clock speeds and network 
      delays. This ensures correct event ordering and reliable behavior across distributed nodes.
    </p>

    {/* ================= Differences ================= */}
    <h2 className="text-3xl font-bold mt-8">
      Differences Between Physical and Logical Clocks
    </h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Nature of Time:</strong>  
        <br />
        <strong>Physical:</strong> Relies on real-world time (NTP).  
        <br />
        <strong>Logical:</strong> Uses counters/timestamps based on causality.
      </li>

      <li>
        <strong>Usage:</strong>  
        <br />
        <strong>Physical:</strong> Real-time scheduling, precise logging.  
        <br />
        <strong>Logical:</strong> Event ordering and coordination.
      </li>

      <li>
        <strong>Dependency:</strong>  
        <br />
        <strong>Physical:</strong> Depends on clock hardware.  
        <br />
        <strong>Logical:</strong> Depends on causality rules.
      </li>
    </ul>

    {/* ================= Types of Logical Clocks ================= */}
    <h2 className="text-3xl font-bold mt-8">
      Types of Logical Clocks in Distributed System
    </h2>

    {/* ================= Lamport Clock ================= */}
    <h3 className="text-2xl font-semibold mt-6">1. Lamport Clocks</h3>

    <p className="leading-relaxed">
      Lamport clocks order events using a simple counter mechanism maintained by each node.
    </p>

    <h4 className="text-xl font-semibold mt-3">Characteristics:</h4>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Simple to implement.</li>
      <li>Provides total order of events.</li>
      <li>Cannot detect concurrency.</li>
    </ul>

    <h4 className="text-xl font-semibold mt-3">Algorithm:</h4>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Initialization: L = 0</li>
      <li>Internal Event: L = L + 1</li>
      <li>Send Message: L = L + 1 (include L in message)</li>
      <li>Receive Message: L = max(L, T) + 1</li>
    </ul>

    <h4 className="text-xl font-semibold mt-3">Advantages:</h4>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Easy to understand.</li>
      <li>Ensures event ordering.</li>
    </ul>

    {/* ================= Vector Clock ================= */}
    <h3 className="text-2xl font-semibold mt-6">2. Vector Clocks</h3>

    <p className="leading-relaxed">
      Vector clocks use an array of integers, one per node, to track causality.
    </p>

    <h4 className="text-xl font-semibold mt-3">Characteristics:</h4>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Captures causality and concurrency.</li>
      <li>Higher storage and message overhead.</li>
    </ul>

    <h4 className="text-xl font-semibold mt-3">Algorithm:</h4>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Initialization: V = {`[0,0,...,0]`}</li>
      <li>Internal Event: V[i] = V[i] + 1</li>
      <li>Send Message: include V</li>
      <li>
        Receive Message:  
        <br />
        Update each k → V[k] = max(V[k], Vj[k])  
        <br />
        Increment own → V[i] = V[i] + 1
      </li>
    </ul>

    <h4 className="text-xl font-semibold mt-3">Advantages:</h4>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Accurately detects concurrency.</li>
      <li>More expressive than Lamport clocks.</li>
    </ul>

    {/* ================= Matrix Clock ================= */}
    <h3 className="text-2xl font-semibold mt-6">3. Matrix Clocks</h3>

    <p className="leading-relaxed">
      Matrix clocks extend vector clocks to maintain a complete matrix representing the view of all 
      nodes about all nodes.
    </p>

    <h4 className="text-xl font-semibold mt-3">Characteristics:</h4>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Most detailed causality tracking.</li>
      <li>Very high overhead.</li>
    </ul>

    <h4 className="text-xl font-semibold mt-3">Algorithm:</h4>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Initialization: M = matrix of zeros</li>
      <li>Internal Event: M[i][i]++</li>
      <li>Send Message: include M</li>
      <li>
        Receive Message:  
        Update each entry → M[k][l] = max(M[k][l], Mj[k][l])  
        <br />
        Increment own → M[i][i]++
      </li>
    </ul>

    <h4 className="text-xl font-semibold mt-3">Advantages:</h4>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Deep causality analysis.</li>
      <li>Useful for debugging complex distributed processes.</li>
    </ul>

    {/* ================= Hybrid Logical Clock ================= */}
    <h3 className="text-2xl font-semibold mt-6">4. Hybrid Logical Clocks (HLCs)</h3>

    <p className="leading-relaxed">
      Hybrid clocks combine physical time with logical ordering, used in large-scale systems like 
      Google Spanner and Cassandra.
    </p>

    <h4 className="text-xl font-semibold mt-3">Characteristics:</h4>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Maintains both real-time accuracy and causality.</li>
      <li>More complex than pure logical clocks.</li>
    </ul>

    <h4 className="text-xl font-semibold mt-3">Algorithm:</h4>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Initialization: H = physical time</li>
      <li>Internal Event: increment logical component</li>
      <li>Send Message: include H</li>
      <li>Receive Message: H = max(H_local, H_received) + 1</li>
    </ul>

    <h4 className="text-xl font-semibold mt-3">Advantages:</h4>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Best of both worlds: causality + real-time ordering.</li>
      <li>Used in distributed databases, ledgers, etc.</li>
    </ul>

    {/* ================= Version Vector ================= */}
    <h3 className="text-2xl font-semibold mt-6">5. Version Vectors</h3>

    <p className="leading-relaxed">
      Version vectors track versions of replicated objects across nodes.
    </p>

    <h4 className="text-xl font-semibold mt-3">Characteristics:</h4>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Efficient object version tracking.</li>
      <li>Common in distributed file systems.</li>
    </ul>

    <h4 className="text-xl font-semibold mt-3">Algorithm:</h4>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Initialization: all zeros</li>
      <li>Update: node increments its version</li>
      <li>Send: include version vector</li>
      <li>Receive: merge using max()</li>
    </ul>

    <h4 className="text-xl font-semibold mt-3">Advantages:</h4>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Great for conflict resolution.</li>
      <li>Used in DynamoDB, Cassandra-like systems.</li>
    </ul>

    {/* ================= Applications ================= */}
    <h2 className="text-3xl font-bold mt-8">Applications of Logical Clocks</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Event Ordering</strong> – ensure correct processing order.</li>
      <li><strong>Causal Consistency</strong> – maintain consistent views in databases.</li>
      <li><strong>Distributed Debugging</strong> – timestamps for log tracing.</li>
      <li><strong>Distributed Snapshots</strong> – checkpoint creation and global state detection.</li>
      <li><strong>Concurrency Control</strong> – detect conflicts using timestamps.</li>
    </ul>

    {/* ================= Challenges ================= */}
    <h2 className="text-3xl font-bold mt-8">
      Challenges and Limitations with Logical Clocks
    </h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Scalability issues with vector/matrix clocks.</li>
      <li>High communication & storage overhead.</li>
      <li>Hard to handle failures & partitions.</li>
      <li>Only partial ordering in many cases.</li>
      <li>Complex implementation for large systems.</li>
      <li>Propagation delays cause temporary inconsistencies.</li>
    </ul>

  </div>
);

export default Home;
