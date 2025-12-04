import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Asynchronous I/O ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Computer Organization | Asynchronous Input/Output Synchronization
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 14 May, 2023</p>

    <p className="text-lg leading-relaxed">
      Asynchronous input/output (I/O) synchronization manages data transfer between the CPU and external devices at unpredictable rates, without a fixed clock signal. Unlike synchronous I/O, data transfer occurs only when the device or CPU is ready, making it suitable for slow or variable-speed devices.
    </p>

    <h2 className="text-3xl font-bold mt-8">Mechanisms for Asynchronous I/O</h2>

    <h3 className="text-2xl font-semibold mt-4">1. Strobe Mechanism</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Source-Initiated Strobe:</strong>
        <ul className="list-disc ml-6">
          <li>Source places data on the bus and activates strobe.</li>
          <li>Destination reads the data and strobe turns OFF.</li>
        </ul>
      </li>
      <li><strong>Destination-Initiated Strobe:</strong>
        <ul className="list-disc ml-6">
          <li>Destination activates strobe to request fresh data.</li>
          <li>Source places data on the bus; destination reads it and strobe deactivates.</li>
        </ul>
      </li>
      <li><strong>Problems:</strong> Uncertainty whether data has been read/written correctly; solved by handshaking.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">2. Handshaking Mechanism</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Source-Initiated Handshaking:</strong>
        <ul className="list-disc ml-6">
          <li>Source places data on bus and enables <em>Data Valid</em> signal.</li>
          <li>Destination accepts data and enables <em>Data Accepted</em> signal.</li>
          <li>Signals are then disabled ensuring data has been read correctly.</li>
        </ul>
      </li>
      <li><strong>Destination-Initiated Handshaking:</strong>
        <ul className="list-disc ml-6">
          <li>Destination activates <em>Request for Data</em> signal.</li>
          <li>Source places data on bus and enables <em>Data Valid</em> signal.</li>
          <li>Destination reads data; signals are deactivated ensuring data correctness.</li>
        </ul>
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Features</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Callback functions:</strong> Notify CPU once a data transfer operation is complete while CPU performs other tasks.</li>
      <li><strong>Interrupts:</strong> Devices signal CPU that a transfer is complete, CPU executes interrupt service routine (ISR).</li>
      <li><strong>Polling:</strong> CPU periodically checks device status to see if data transfer is finished.</li>
      <li><strong>Select function:</strong> Monitors multiple file descriptors for input/output readiness, notifying CPU when transfer is done.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Advantages</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Flexible data transfer rates for varying-speed devices.</li>
      <li>Efficient resource utilization, reducing synchronization overhead.</li>
      <li>Reduces latency in data transfers.</li>
      <li>Improved error handling with acknowledgment signals.</li>
      <li>Compatible with a wide range of devices and systems.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Disadvantages</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>More complex implementation than synchronous I/O.</li>
      <li>Higher overhead due to interrupt monitoring and transfer initiation.</li>
      <li>Potential additional latency when waiting for interrupts.</li>
      <li>Possible synchronization issues with multiple devices or large data transfers.</li>
      <li>Compatibility limitations with devices requiring fixed transfer rates or strict synchronization protocols.</li>
    </ul>

  </div>
);

export default Home;
