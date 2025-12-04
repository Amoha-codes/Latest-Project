import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Types of Network Topology ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Types of Network Topology
    </h1>

    <p className="text-sm text-gray-500">Last Updated : 03 Nov, 2025</p>

    {/* Intro */}
    <p className="text-lg leading-relaxed">
      A network topology is the arrangement of devices (nodes) and connections (links)
      in a computer network. It shows how computers, servers, and other devices are connected
      and how data flows between them. There are two main types:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Physical Topology:</strong> The actual physical layout of devices and cables.</li>
      <li><strong>Logical Topology:</strong> The path through which data flows logically.</li>
    </ul>

    <p className="leading-relaxed font-semibold">
      Choosing the right topology affects performance, cost, reliability, and security.
    </p>

    {/* Point-to-Point */}
    <h2 className="text-3xl font-bold mt-8">Point-to-Point Topology</h2>
    <p className="leading-relaxed">
      Point-to-point topology is the simplest network topology where a single communication
      link connects exactly two nodes — one sender and one receiver. It provides high bandwidth.
    </p>

    {/* Mesh Topology */}
    <h2 className="text-3xl font-bold mt-8">Mesh Topology</h2>
    <p className="leading-relaxed">
      In a mesh topology, every device is connected to every other device through dedicated links.
      Protocols used include AHCP and DHCP.
    </p>

    <p className="leading-relaxed">
      For <strong>N devices</strong>:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Ports required per device: <strong>N - 1</strong></li>
      <li>Total links required: <strong>N(N - 1) / 2</strong></li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Advantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Fast communication</li>
      <li>Very robust</li>
      <li>Easy fault diagnosis</li>
      <li>High security and privacy</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Disadvantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Difficult installation</li>
      <li>Very high cabling cost</li>
      <li>High maintenance cost</li>
    </ul>

    <p className="leading-relaxed italic">
      Examples include the internet backbone, military networks, and aircraft navigation systems.
    </p>

    {/* Star Topology */}
    <h2 className="text-3xl font-bold mt-8">Star Topology</h2>
    <p className="leading-relaxed">
      In star topology, all devices connect to a central hub, which can be active or passive.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Advantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Easy setup</li>
      <li>Only 1 port required per device</li>
      <li>Robust — failure of one link does not affect others</li>
      <li>Easy fault identification</li>
      <li>Cost-effective cables</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Disadvantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Central hub failure crashes the network</li>
      <li>High installation cost</li>
      <li>Performance depends on hub</li>
    </ul>

    {/* Bus Topology */}
    <h2 className="text-3xl font-bold mt-8">Bus Topology</h2>
    <p className="leading-relaxed">
      In bus topology, all devices connect to a single backbone cable. It is bi-directional but
      not robust — failure of the backbone breaks the entire network.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Advantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Only one backbone cable + N drop lines</li>
      <li>Low cable cost</li>
      <li>Simple installation</li>
      <li>Well-known troubleshooting methods</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Disadvantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>High cabling overall</li>
      <li>Backbone failure crashes network</li>
      <li>High collision rate</li>
      <li>Adding new devices slows performance</li>
      <li>Low security</li>
    </ul>

    {/* Ring Topology */}
    <h2 className="text-3xl font-bold mt-8">Ring Topology</h2>
    <p className="leading-relaxed">
      In ring topology, each device connects to exactly two neighboring devices forming a loop.
      Token Passing protocol is used for data transfer.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Operations</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>A monitor station manages the ring</li>
      <li>Token must be acquired to transmit data</li>
      <li>Token circulates when idle</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Advantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>High-speed data transfer</li>
      <li>Minimal collisions</li>
      <li>Low installation cost</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Disadvantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Single node failure breaks network</li>
      <li>Difficult troubleshooting</li>
      <li>Less secure</li>
    </ul>

    {/* Tree Topology */}
    <h2 className="text-3xl font-bold mt-8">Tree Topology</h2>
    <p className="leading-relaxed">
      Tree topology is a hierarchical variation of star topology where multiple secondary hubs
      connect to a central hub.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Advantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Supports more devices in hierarchy</li>
      <li>Network segments can be isolated</li>
      <li>Easy expansion</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Disadvantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Central hub failure crashes network</li>
      <li>High cabling cost</li>
      <li>Difficult reconfiguration when expanding</li>
    </ul>

    {/* Hybrid Topology */}
    <h2 className="text-3xl font-bold mt-8">Hybrid Topology</h2>
    <p className="leading-relaxed">
      A hybrid topology combines two or more topologies such as star, bus, or ring,
      making it flexible and scalable.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Advantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Highly flexible</li>
      <li>Supports easy expansion</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Disadvantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Complex design</li>
      <li>Very expensive hubs</li>
      <li>High infrastructure cost</li>
    </ul>

    {/* Why Topology Matters */}
    <h2 className="text-3xl font-bold mt-8">Why is Network Topology Important?</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Network Performance:</strong> Correct topology improves efficiency.</li>
      <li><strong>Network Reliability:</strong> Some topologies provide backup paths.</li>
      <li><strong>Network Expansion:</strong> Helps in adding more devices easily.</li>
      <li><strong>Network Security:</strong> Determines how securely devices communicate.</li>
    </ul>

  </div>
);

export default Home;
