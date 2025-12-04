import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= BUS Arbitration ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Bus Arbitration in Computer Organization
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 09 Apr, 2024</p>

    {/* Introduction */}
    <p className="text-lg leading-relaxed">
      In computer systems, multiple devices such as the CPU, memory, and I/O controllers share a 
      common communication pathway called a <strong>bus</strong>. When multiple devices attempt to use 
      the bus simultaneously, conflicts occur that may lead to data corruption or system instability.
      <strong> Bus arbitration</strong> is the mechanism used to ensure that only one device accesses 
      the bus at a time.
    </p>

    <p className="leading-relaxed">
      Bus arbitration ensures orderly access to the bus by assigning control to one device at a time. 
      The device currently controlling the bus is called the <strong>Bus Master</strong>. Arbitration 
      resolves conflicts that arise when multiple processors, DMA controllers, or I/O modules request 
      bus access simultaneously.
    </p>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications of Bus Arbitration</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Shared Memory Systems:</strong> Ensures safe access to shared memory.</li>
      <li><strong>Multi-Processor Systems:</strong> Allows CPUs to communicate and share data.</li>
      <li><strong>I/O Devices:</strong> Enables multiple I/O devices to exchange data with the CPU.</li>
      <li><strong>Real-Time Systems:</strong> Ensures timely execution of critical operations.</li>
      <li><strong>Embedded Systems:</strong> Coordinates sensors, controllers, and actuators.</li>
    </ul>

    {/* Approaches */}
    <h2 className="text-3xl font-bold mt-8">Approaches to Bus Arbitration</h2>

    <h3 className="text-2xl font-semibold mt-4">1. Centralized Bus Arbitration</h3>
    <p className="leading-relaxed">
      A single bus arbiter controls which device becomes the bus master based on priority.
    </p>

    <h3 className="text-xl font-semibold mt-4">(i) Daisy Chaining Method</h3>
    <p className="leading-relaxed">
      All bus masters share a common request line. The bus grant signal is passed serially from one 
      device to the next until it reaches a device requesting the bus. That device captures the signal 
      and becomes the bus master.
    </p>

    <p className="font-semibold mt-2">Advantages:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Simple and cost-effective.</li>
      <li>Easy to add new devices in the chain.</li>
    </ul>

    <p className="font-semibold mt-2">Disadvantages:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Priority depends on the physical position.</li>
      <li>Propagation delay increases with more devices.</li>
      <li>Failure of one device breaks the whole system.</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">(ii) Polling / Rotating Priority Method</h3>
    <p className="leading-relaxed">
      A controller generates addresses cyclically. When a device recognizes its priority address, it 
      takes control of the bus.
    </p>

    <p className="font-semibold mt-2">Advantages:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>No device is permanently favored.</li>
      <li>Failure of one device does not affect the entire system.</li>
    </ul>

    <p className="font-semibold mt-2">Disadvantages:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Adding new bus masters requires more address lines.</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">(iii) Fixed Priority (Independent Request) Method</h3>
    <p className="leading-relaxed">
      Each device has separate bus request and bus grant lines. A priority encoder selects the 
      highest-priority request.
    </p>

    <p className="font-semibold mt-2">Advantages:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Fastest arbitration method.</li>
    </ul>

    <p className="font-semibold mt-2">Disadvantages:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>High hardware cost due to multiple dedicated lines.</li>
    </ul>

    {/* Distributed Arbitration */}
    <h3 className="text-2xl font-semibold mt-8">2. Distributed Bus Arbitration</h3>
    <p className="leading-relaxed">
      All devices participate in the selection of the next bus master. Each device has a unique 
      4-bit ID, and priority is determined based on this ID.
    </p>

    {/* Uses */}
    <h2 className="text-3xl font-bold mt-8">Uses of Bus Arbitration</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Efficient resource utilization.</li>
      <li>Prevents data corruption by ensuring mutual exclusion.</li>
      <li>Allows multiple devices to share a communication pathway.</li>
      <li>Supports real-time high-priority tasks.</li>
      <li>Improves system reliability and prevents conflicts.</li>
    </ul>

    {/* Issues */}
    <h2 className="text-3xl font-bold mt-8">Issues in Bus Arbitration</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Resource contention when multiple devices frequently request access.</li>
      <li>Priority inversion, where low-priority devices wait too long.</li>
      <li>Latency in bus access for time-critical devices.</li>
      <li>Complexity in hardware and arbitration protocols.</li>
      <li>Possible bottlenecks affecting system performance.</li>
    </ul>

  </div>
);

export default Home;
