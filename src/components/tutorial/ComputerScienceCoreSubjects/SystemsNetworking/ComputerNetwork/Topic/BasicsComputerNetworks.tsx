import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Basics of Computer Networking ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Basics of Computer Networking
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 18 Sep, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      A computer network is a collection of interconnected devices that share resources and
      information. These devices may include computers, servers, printers, and mobile devices.
      Networks enable efficient data exchange and support applications like email, file sharing,
      and web browsing.
    </p>

    {/* Basic Terminologies */}
    <h2 className="text-3xl font-bold mt-8">Basic Terminologies of Computer Networks</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Network:</strong> A group of connected devices that can communicate and share data.</li>
      <li><strong>Node:</strong> Any device that sends, receives, or forwards data (laptops, mobiles, printers, servers, etc.).</li>
      <li><strong>Networking Devices:</strong> Routers, switches, hubs, and access points.</li>
      <li><strong>Transmission Media:</strong> Physical or wireless medium for data flow.</li>
      <li>Wired media: Ethernet cables, optical fiber</li>
      <li>Wireless media: Wi-Fi, Bluetooth, infrared</li>
      <li><strong>Service Provider Networks:</strong> Internet providers, telecom networks, etc.</li>
    </ul>

    {/* How Networks Work */}
    <h2 className="text-3xl font-bold mt-8">How Does a Computer Network Work?</h2>
    <p className="leading-relaxed">
      The basic building blocks of a network are <strong>nodes</strong> and <strong>links</strong>.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Node:</strong> Any device like a modem, router, or computer that sends/receives data.</li>
      <li><strong>Link:</strong> The connecting medium such as cables or wireless signals.</li>
      <li><strong>Working:</strong> Devices communicate using rules called <strong>protocols</strong>, and every device is identified by an <strong>IP Address</strong>.</li>
      <li><strong>Firewall:</strong> A security tool that monitors, allows, or blocks traffic based on rules.</li>
    </ul>

    {/* Network Architecture Types */}
    <h2 className="text-3xl font-bold mt-8">Types of Computer Network Architecture</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Client-Server Architecture:</strong> Devices act as clients or servers, where the server
        manages the behavior of clients.
      </li>
      <li>
        <strong>Peer-to-Peer (P2P):</strong> No central server; every device can act as client or server.
      </li>
    </ul>

    {/* Network Devices */}
    <h2 className="text-3xl font-bold mt-8">Network Devices</h2>
    <p className="leading-relaxed">
      Network devices support communication between multiple devices. Common network devices include:
    </p>

    <ul className="list-decimal ml-6 leading-relaxed">
      <li><strong>Router:</strong> Connects multiple networks and directs data packets.</li>
      <li><strong>Switch:</strong> Connects devices within the same network and forwards data efficiently.</li>
      <li><strong>Hub:</strong> Sends data to all devices (less efficient).</li>
      <li><strong>Bridge:</strong> Connects and filters traffic between two segments.</li>
      <li><strong>Gateway:</strong> Connects different types of networks and translates protocols.</li>
      <li><strong>Access Point (AP):</strong> Provides wireless connectivity by extending a wired network.</li>
      <li><strong>Modem:</strong> Converts digital signals for phone/cable lines, enabling internet access.</li>
      <li><strong>Firewall:</strong> Monitors and controls traffic to block unauthorized access.</li>
    </ul>

    {/* Goals of Networks */}
    <h2 className="text-3xl font-bold mt-8">Goals of Networks</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Convenience</li>
      <li>Efficiency</li>
      <li>Resource Management</li>
      <li>Security & Protection</li>
      <li>Reliability & Fault Tolerance</li>
      <li>Scalability</li>
    </ul>

    {/* Uses of Networks */}
    <h2 className="text-3xl font-bold mt-8">Uses of Computer Networks</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Communication: Email, chat, video conferencing</li>
      <li>Resource Sharing: Printers, scanners, files</li>
      <li>Remote Access</li>
      <li>Collaboration</li>
      <li>E-commerce</li>
      <li>Education and online learning</li>
    </ul>

    {/* Characteristics */}
    <h2 className="text-3xl font-bold mt-8">Characteristics of Computer Networks</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li><strong>Security:</strong> Protects data using firewalls, encryption, authentication.</li>
      <li><strong>Reliability:</strong> Redundancy and backups ensure availability.</li>
      <li><strong>Scalability:</strong> Can grow without performance issues.</li>
      <li><strong>High Performance:</strong> Fast data transfer and low latency.</li>
      <li><strong>Quality of Service (QoS):</strong> Prioritizes important data for smooth streaming/calls.</li>
    </ol>

  </div>
);

export default Home;
