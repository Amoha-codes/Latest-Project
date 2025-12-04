import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Vector Clocks in Distributed Systems ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Vector Clocks in Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 17 Sep, 2025</p>

    {/* Intro */}
    <p className="text-lg leading-relaxed">
      Vector clocks are a fundamental concept in distributed systems used to track the partial
      ordering of events and preserve causality across multiple nodes. Unlike ordinary timestamps,
      vector clocks allow event ordering even without any global physical clock, making them
      essential for conflict detection and maintaining consistency.
    </p>

    {/* What are Vector Clocks? */}
    <h2 className="text-3xl font-bold mt-8">What are Vector Clocks?</h2>
    <p className="leading-relaxed">
      Vector clocks are logical clocks used to track causality between events in distributed systems.
      Each process maintains a vector of clock values (one entry per process). Whenever an event
      occurs, the local clock is incremented. During communication, vector clocks are exchanged and
      updated so that systems can determine whether events are causally related or concurrent.
    </p>

    {/* Use Cases */}
    <h2 className="text-3xl font-bold mt-8">
      Use Cases of Vector Clocks in Distributed Systems
    </h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        Used in distributed databases like Cassandra and Amazon DynamoDB to resolve conflicts between independently updated replicas.
      </li>
      <li>
        Used in collaborative editing tools (e.g., Google Docs) to track simultaneous edits.
      </li>
      <li>
        Useful in distributed logging/monitoring where event ordering is important.
      </li>
      <li>
        Helpful in debugging distributed systems by identifying causality.
      </li>
      <li>
        Applied in distributed file systems like HDFS and GFS to manage simultaneous updates.
      </li>
    </ul>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-8">
      Advantages of Vector Clocks in Distributed Systems
    </h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Causality Tracking:</strong> Helps in identifying causal relationships between events.</li>
      <li><strong>Conflict Resolution:</strong> Useful for detecting conflicting updates.</li>
      <li><strong>No Central Authority:</strong> Works without a global clock or coordinator.</li>
      <li><strong>Fault Tolerance:</strong> Works even during network partitions.</li>
      <li><strong>Scalability:</strong> Scales well since each process maintains its own vector.</li>
    </ul>

    {/* Limitations */}
    <h2 className="text-3xl font-bold mt-8">
      Limitations of Vector Clocks in Distributed Systems
    </h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Scalability Issue:</strong> Vector size grows linearly with the number of nodes.
      </li>
      <li>
        <strong>Complex Implementation:</strong> Hard to maintain when nodes frequently join/leave.
      </li>
      <li>
        <strong>Partial Ordering:</strong> Cannot establish total ordering of all events.
      </li>
      <li>
        <strong>Communication Overhead:</strong> Vector must be sent with every message.
      </li>
      <li>
        <strong>Network Dynamics:</strong> Assumes fixed node set; dynamic networks complicate synchronization.
      </li>
    </ul>

    {/* Algorithm */}
    <h2 className="text-3xl font-bold mt-8">How Does the Vector Clock Algorithm Work?</h2>

    <p className="leading-relaxed">Rules of the algorithm:</p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>All vector clock values start at 0.</li>
      <li>On an <strong>internal event</strong>, the process increments its own clock entry.</li>
      <li>On sending a message, the sender increments its own clock and attaches the vector.</li>
      <li>On receiving a message, the receiver updates each clock entry:<br />
        <span className="font-semibold">VC[i] = max(local[i], received[i])</span>
      </li>
      <li>The receiver then increments its own clock entry.</li>
    </ul>

    <p className="leading-relaxed">
      This ensures that causality is preserved and concurrency can be detected.
    </p>

    {/* Pseudocode Explanation */}
    <h2 className="text-3xl font-bold mt-8">Example Implementation of Vector Clocks</h2>

    <p className="leading-relaxed">
      Below is a Python example showing how vector clocks are implemented in a distributed system.
    </p>

    <pre className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm overflow-x-auto">
{`class Node:
    def __init__(self, node_id, total_nodes):
        self.node_id = node_id
        self.vector_clock = [0] * total_nodes

    def send_message(self, receiver, message_text):
        self.vector_clock[self.node_id] += 1
        message = Message(self.node_id, message_text, list(self.vector_clock))
        receiver.receive_message(message)

    def receive_message(self, message):
        self.vector_clock = [max(vc1, vc2)
                             for vc1, vc2 in zip(self.vector_clock, message.vector_clock)]
        self.vector_clock[self.node_id] += 1
        print(f"Node {self.node_id} received message: {message.text}")
        print(f"Updated vector clock: {self.vector_clock}")

class Message:
    def __init__(self, sender_id, text, vector_clock):
        self.sender_id = sender_id
        self.text = text
        self.vector_clock = vector_clock

class DistributedSystem:
    def __init__(self, num_nodes):
        self.nodes = [Node(i, num_nodes) for i in range(num_nodes)]

    def simulate(self):
        self.nodes[0].send_message(self.nodes[1], "Hello from Node 0")
        self.nodes[1].send_message(self.nodes[2], "Hello from Node 1")
        self.nodes[2].send_message(self.nodes[0], "Hello from Node 2")

        for node in self.nodes:
            print(node)

system = DistributedSystem(3)
system.simulate()`}
    </pre>

    {/* Real World Applications */}
    <h2 className="text-3xl font-bold mt-8">
      Real-World Applications of Vector Clocks
    </h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Version Control:</strong> Used to detect conflicts in collaborative development.
      </li>
      <li>
        <strong>Distributed Databases:</strong> DynamoDB and Cassandra use vector clocks to track replica versions.
      </li>
      <li>
        <strong>Event Logging:</strong> Helps in determining event order across distributed nodes.
      </li>
      <li>
        <strong>Distributed File Systems:</strong> Systems like AFS and Coda use vector clocks to resolve file update conflicts.
      </li>
    </ul>

  </div>
);

export default Home;
