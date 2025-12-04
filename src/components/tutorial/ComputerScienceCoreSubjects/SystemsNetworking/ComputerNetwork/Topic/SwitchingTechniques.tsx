import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Switching in Computer Networks ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Switching in Computer Networks
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 26 Sep, 2025</p>

    <p className="text-lg leading-relaxed">
      <strong>Switching</strong> is the process of transferring data packets from one device to another, either within the same network or across networks, using switches. 
      It operates primarily at the <strong>Data Link Layer (Layer 2)</strong> of the OSI Model.
    </p>

    <h2 className="text-3xl font-bold mt-8">Overview of a Network Switch</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>A switch connects multiple devices in a network.</li>
      <li>Ensures data from different devices does not interfere.</li>
      <li>Acts like a traffic controller, sending data packets to the correct port.</li>
      <li>Forwards data directly to connected devices (e.g., computers, phones).</li>
      <li>For other networks, forwards data to a router for further delivery.</li>
      <li>Example: Opening a website involves packets traveling through multiple switches before reaching the server.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">How a Network Switch Works</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Frame Reception:</strong> Switch receives a frame from a device.</li>
      <li><strong>MAC Address Extraction:</strong> Reads the destination MAC address from the frame.</li>
      <li><strong>Lookup:</strong> Searches its switching table for the destination MAC address.</li>
      <li><strong>Forwarding:</strong> If found, sends the frame to the correct port; otherwise, uses flooding (sends to all ports except incoming one).</li>
      <li><strong>Table Update:</strong> Learns new MAC addresses and updates the table for future forwarding.</li>
      <li><strong>Frame Transition:</strong> Forwards the frame to the correct device or network.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Types of Switching</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Message Switching:</strong> Entire data/message is sent across the network. Obsolete and inefficient.</li>
      <li><strong>Circuit Switching:</strong> Dedicated connection between sender and receiver is established before communication. The connection gets full bandwidth until transfer completes.</li>
      <li><strong>Packet Switching:</strong> Data is divided into small packets that travel independently. Each packet carries the destination address. Packets are reassembled at the destination. Used in modern networks and the Internet.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Comparison of Switching Types</h2>
    <table className="table-auto border-collapse border border-gray-400 w-full text-left">
      <thead>
        <tr className="bg-gray-400">
          <th className="border border-gray-400 px-4 py-2">Feature</th>
          <th className="border border-gray-400 px-4 py-2">Message Switching</th>
          <th className="border border-gray-400 px-4 py-2">Circuit Switching</th>
          <th className="border border-gray-400 px-4 py-2">Packet Switching</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Path</td>
          <td className="border border-gray-400 px-4 py-2">None</td>
          <td className="border border-gray-400 px-4 py-2">Predefined</td>
          <td className="border border-gray-400 px-4 py-2">Dynamic / Virtual</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Efficiency</td>
          <td className="border border-gray-400 px-4 py-2">Very low</td>
          <td className="border border-gray-400 px-4 py-2">Low (idle wastage)</td>
          <td className="border border-gray-400 px-4 py-2">High</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Delay</td>
          <td className="border border-gray-400 px-4 py-2">High (Store & Forward)</td>
          <td className="border border-gray-400 px-4 py-2">Low after setup</td>
          <td className="border border-gray-400 px-4 py-2">Variable</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Reliability</td>
          <td className="border border-gray-400 px-4 py-2">Low</td>
          <td className="border border-gray-400 px-4 py-2">High</td>
          <td className="border border-gray-400 px-4 py-2">High</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Example</td>
          <td className="border border-gray-400 px-4 py-2">Telegraph</td>
          <td className="border border-gray-400 px-4 py-2">Landline Calls</td>
          <td className="border border-gray-400 px-4 py-2">Internet</td>
        </tr>
      </tbody>
    </table>

  </div>
);

export default Home;
