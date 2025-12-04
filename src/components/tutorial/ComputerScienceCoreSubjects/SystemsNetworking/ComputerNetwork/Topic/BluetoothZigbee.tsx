import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Bluetooth ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      What is Bluetooth?
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 03 Oct, 2025</p>

    <p className="text-lg leading-relaxed">
      Bluetooth is a short-range wireless communication technology used for 
      voice and data transfer. It belongs to Wireless Personal Area Network 
      (WPAN) technology and operates in the unlicensed ISM band between 
      <strong> 2.4 GHz and 2.485 GHz</strong>. It was invented by Ericsson in 1994 and enables 
      devices to share information without cables.
    </p>

    <p className="leading-relaxed">
      Bluetooth typically works within a range of <strong>10 meters</strong> and supports 
      speeds of <strong>1–3 Mbps</strong>. It uses 
      <strong>Frequency-Hopping Spread Spectrum (FHSS)</strong> for more security.
    </p>

    <p className="leading-relaxed">
      A Bluetooth network is called a <strong>piconet</strong>, and a group of piconets creates a 
      <strong>scatternet</strong>.
    </p>

    {/* Key Features */}
    <h2 className="text-3xl font-bold mt-8">Key Features of Bluetooth</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Wireless communication up to 720 kbps</li>
      <li>Low-cost short-range connectivity</li>
      <li>Robust and flexible</li>
      <li>Radio-wave based link</li>
      <li>Uses Piconet architecture</li>
    </ul>

    {/* Architecture */}
    <h2 className="text-3xl font-bold mt-8">Architecture of Bluetooth</h2>

    <h3 className="text-2xl font-semibold mt-4">Piconet</h3>
    <p className="leading-relaxed">
      It consists of <strong>one master</strong> and <strong>seven active slaves</strong>. Up to 
      <strong>255 parked devices</strong> can exist.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Scatternet</h3>
    <p className="leading-relaxed">
      Formed by multiple piconets. A device may act as slave in one piconet 
      and master in another.
    </p>

    {/* Protocol Stack */}
    <h2 className="text-3xl font-bold mt-8">Bluetooth Protocol Stack</h2>
    <div className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm leading-relaxed">
      <strong>Radio Layer:</strong> Handles modulation and frequencies.<br /><br />
      <strong>Baseband Layer:</strong> Connection setup and timing.<br /><br />
      <strong>Link Manager:</strong> Authentication, encryption, and link control.<br /><br />
      <strong>L2CAP:</strong> Multiplexing, segmentation, data packaging.<br /><br />
      <strong>SDP:</strong> Service discovery.<br /><br />
      <strong>RF Comm:</strong> Serial port emulation.<br /><br />
      <strong>OBEX:</strong> Object transfer.<br /><br />
      <strong>WAP:</strong> Wireless Internet.<br /><br />
      <strong>TCS:</strong> Telephony signaling.<br /><br />
      <strong>Application Layer:</strong> User interface and apps.
    </div>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications of Bluetooth</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Wireless headsets</li>
      <li>File sharing</li>
      <li>PANs and LANs</li>
      <li>Medical and fitness devices</li>
    </ul>

    {/* ================= ZigBee ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-20">
      Introduction of ZigBee
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 19 Jul, 2025</p>

    {/* Intro */}
    <p className="text-lg leading-relaxed">
      ZigBee is a low-power, low-data-rate wireless communication standard 
      created for home networking, IoT, and industrial control applications. 
      It is based on the IEEE <strong>802.15.4</strong> standard and designed by the 
      <strong>ZigBee Alliance</strong>.
    </p>

    <p className="leading-relaxed">
      ZigBee provides a global, open protocol for secure, reliable and 
      low-power wireless networks. Devices can be placed anywhere and still 
      communicate efficiently within the network.
    </p>

    <p className="leading-relaxed">
      IEEE 802.15.4 handles the <strong>PHY</strong> and <strong>MAC</strong> layers, while ZigBee 
      defines the upper layers.
    </p>

    {/* Features */}
    <h2 className="text-3xl font-bold mt-8">General Characteristics of ZigBee</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Low power consumption</li>
      <li>Low data rate (20–250 kbps)</li>
      <li>Short range (75–100 meters)</li>
      <li>Fast network join time (~30 ms)</li>
      <li>Supports up to 65,000 nodes (theoretical)</li>
      <li>Low cost of implementation</li>
      <li>Operates in 868 MHz, 915 MHz, 2.4 GHz bands</li>
      <li>27 communication channels</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Types of ZigBee Devices</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>ZigBee Coordinator:</strong> Manages the network and routers</li>
      <li><strong>ZigBee Router:</strong> Forwards data across devices</li>
      <li><strong>ZigBee End Device:</strong> The controlled device (sensor, switch, etc.)</li>
    </ul>

    {/* Features */}
    <h2 className="text-3xl font-bold mt-8">Key Features of ZigBee</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Stochastic addressing</li>
      <li>Link quality management</li>
      <li>Frequency agility for interference handling</li>
      <li>Asymmetric link support</li>
      <li>Power management for battery-based devices</li>
    </ul>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages of ZigBee</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Low power usage</li>
      <li>Secure communication</li>
      <li>Ideal for smart home networks</li>
      <li>Low-cost hardware</li>
      <li>Mesh networking support</li>
      <li>High reliability even in interference</li>
    </ul>

    {/* Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Disadvantages of ZigBee</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Limited communication range</li>
      <li>Low data rate</li>
      <li>Not widely adopted (interoperability issues)</li>
      <li>Security vulnerabilities</li>
    </ul>

    {/* Topologies */}
    <h2 className="text-3xl font-bold mt-8">ZigBee Network Topologies</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Star Topology:</strong> All end devices connect to coordinator</li>
      <li><strong>Mesh Topology:</strong> Self-healing network with routers</li>
      <li><strong>Tree Topology:</strong> Coordinator → Routers → End devices</li>
    </ul>

    {/* Architecture */}
    <h2 className="text-3xl font-bold mt-8">Architecture of ZigBee</h2>

    <p className="leading-relaxed">
      ZigBee architecture consists of six layers:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Physical Layer</li>
      <li>MAC Layer</li>
      <li>Network Layer</li>
      <li>Security Layer</li>
      <li>Application Interface Layer</li>
      <li>Application Layer</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Physical Layer</h3>
    <p className="leading-relaxed">
      Converts data packets to radio signals and handles transmission.
    </p>

    <h3 className="text-2xl font-semibold mt-4">MAC Layer</h3>
    <p className="leading-relaxed">
      Handles PAN ID, network discovery, and frame control.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Network Layer</h3>
    <p className="leading-relaxed">
      Responsible for mesh routing and linking upper layers.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Application Layer</h3>
    <p className="leading-relaxed">
      Handles user-level communication and device objects.
    </p>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">ZigBee Applications</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Home Automation</li>
      <li>Medical Data Collection</li>
      <li>Industrial Control</li>
      <li>Meter Reading</li>
      <li>Lighting Control</li>
      <li>Commercial & Government Systems</li>
      <li>Home Networking</li>
    </ul>

  </div>
);

export default Home;
