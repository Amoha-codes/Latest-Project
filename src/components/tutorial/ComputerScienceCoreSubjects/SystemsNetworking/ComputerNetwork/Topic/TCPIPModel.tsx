import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= TCP/IP MODEL ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      TCP/IP Model
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 19 Sep, 2025</p>

    {/* Intro */}
    <p className="text-lg leading-relaxed">
      The TCP/IP model is a framework that is used to model the communication in a network. 
      It is mainly a collection of network protocols and the organization of these protocols 
      in different layers for modeling the network.
    </p>

    <p className="leading-relaxed">
      It has four layers: <strong>Application</strong>, <strong>Transport</strong>, 
      <strong> Internet/Network</strong>, and <strong>Network Access</strong>.  
      While the OSI model has seven layers, the 4-layer TCP/IP model is simpler and commonly 
      used in today’s Internet and networking systems.
    </p>

    {/* Role of TCP/IP */}
    <h2 className="text-3xl font-bold mt-8">Role of TCP/IP</h2>
    <p className="leading-relaxed">
      One of its main goals is to ensure that the data sent by the sender arrives safely and 
      correctly at the receiver’s end. Data is broken into smaller parts called packets before 
      being sent. These packets travel separately and are reassembled in the correct order at 
      the destination.
    </p>

    <p className="bg-gray-400 p-4 rounded-lg text-sm shadow-inner">
      <strong>Note:</strong> This helps prevent errors and ensures the message is complete and accurate.
    </p>

    {/* Layers of TCP/IP */}
    <h2 className="text-3xl font-bold mt-8">Layers of TCP/IP Model</h2>

    {/* 1. Application Layer */}
    <h3 className="text-xl font-semibold mt-4">1. Application Layer</h3>
    <p className="leading-relaxed">
      The topmost layer of the TCP/IP model, closest to the user. All applications like 
      browsers, email clients, and file-sharing tools work at this layer.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Acts as a bridge between user software and network layers.</li>
      <li>Protocols: HTTP, FTP, SMTP, DNS.</li>
      <li>Handles data formatting, encryption, and session management.</li>
    </ul>

    {/* 2. Transport Layer */}
    <h3 className="text-xl font-semibold mt-4">2. Transport Layer</h3>
    <p className="leading-relaxed">
      Ensures reliable and ordered delivery of data. Handles communication between devices.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Uses TCP (reliable) and UDP (fast but less reliable).</li>
      <li>TCP ensures ordered delivery and error checking.</li>
      <li>UDP is used for real-time apps like streaming and gaming.</li>
    </ul>

    {/* 3. Internet Layer */}
    <h3 className="text-xl font-semibold mt-4">3. Internet Layer</h3>
    <p className="leading-relaxed">
      Responsible for deciding the best path for data across different networks.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Uses IP (IPv4/IPv6) for logical addressing.</li>
      <li>Handles routing, packet forwarding, and fragmentation.</li>
      <li>Each device gets a unique IP address.</li>
    </ul>

    {/* 4. Network Access Layer */}
    <h3 className="text-xl font-semibold mt-4">4. Network Access Layer</h3>
    <p className="leading-relaxed">
      The bottom layer that deals with the physical hardware used for data transmission.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Uses MAC addresses for device identification.</li>
      <li>Converts packets into frames for physical transmission.</li>
      <li>Handles basic error detection.</li>
    </ul>

    {/* Working of TCP/IP */}
    <h2 className="text-3xl font-bold mt-8">Working of TCP/IP Model</h2>
    <p className="leading-relaxed">
      The working of TCP/IP can be explained using sender and receiver operations:
    </p>

    <h3 className="text-xl font-semibold mt-4">When Sending Data</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Application Layer:</strong> Prepares user data (HTTP, FTP, SMTP).</li>
      <li><strong>Transport Layer:</strong> Breaks data into segments (TCP/UDP).</li>
      <li><strong>Internet Layer:</strong> Adds IP addresses and routing info.</li>
      <li><strong>Network Access Layer:</strong> Converts packets into frames.</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">When Receiving Data</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Network Access Layer:</strong> Receives frames from the medium.</li>
      <li><strong>Internet Layer:</strong> Processes IP header and forwards data.</li>
      <li><strong>Transport Layer:</strong> Reassembles segments and checks for errors.</li>
      <li><strong>Application Layer:</strong> Sends final data to the correct app.</li>
    </ul>

    {/* Why TCP/IP is Used */}
    <h2 className="text-3xl font-bold mt-8">Why TCP/IP is Used Over the OSI Model</h2>

    <table className="w-full border border-gray-300 text-sm mt-4">
      <thead className="bg-gray-400">
        <tr>
          <th className="border px-4 py-2">Reason</th>
          <th className="border px-4 py-2">Explanation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">Simpler Structure</td>
          <td className="border px-4 py-2">Only 4 layers instead of 7.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Protocol-Based Design</td>
          <td className="border px-4 py-2">Designed from real, working protocols.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Flexibility & Robustness</td>
          <td className="border px-4 py-2">Handles routing, congestion, and errors efficiently.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Open Standard</td>
          <td className="border px-4 py-2">Free to use & universally accepted.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Real-World Use</td>
          <td className="border px-4 py-2">Powers today’s Internet.</td>
        </tr>
      </tbody>
    </table>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages of TCP/IP Model</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Interoperability between devices.</li>
      <li>Highly scalable.</li>
      <li>Based on open standards.</li>
      <li>Supports multiple communication types.</li>
      <li>Reliable due to retransmission & error-checking.</li>
    </ul>

    {/* Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Disadvantages of TCP/IP Model</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Not originally designed for security.</li>
      <li>Heavy overhead for small networks.</li>
      <li>IPv4 address exhaustion issues.</li>
      <li>TCP adds extra overhead due to reliability features.</li>
    </ul>

  </div>
);

export default Home;
