import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Network Devices ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Network Devices
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 03 Oct, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Network devices are essential hardware components in computer networking that operate
      across different layers of the OSI and TCP/IP models. They enable data transmission,
      regulate traffic flow, ensure interconnectivity between networks, and enforce security
      policies for reliable and efficient communication.
    </p>

    <h2 className="text-3xl font-bold mt-8">Functions of Network Devices</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Enable communication by transmitting and receiving data.</li>
      <li>Connect devices to networks efficiently and securely.</li>
      <li>Improve network performance by managing congestion and traffic.</li>
      <li>Provide security by preventing unauthorized access.</li>
      <li>Extend network coverage and resolve signal loss issues.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Common Networking Devices</h2>

    {/* Access Point */}
    <h3 className="text-2xl font-semibold mt-6">1. Access Point (AP)</h3>
    <p className="leading-relaxed">
      Creates a wireless local area network (WLAN) and allows devices such as laptops, smartphones,
      and IoT devices to connect to a wired network. Commonly used to extend Wi-Fi coverage in
      homes, offices, and public areas.
    </p>

    {/* Modem */}
    <h3 className="text-2xl font-semibold mt-6">2. Modem</h3>
    <p className="leading-relaxed">
      A modem (Modulator/Demodulator) converts digital signals from computers into analog signals
      for transmission over telephone or cable lines, and vice versa. It is the primary internet
      access device for home users.
    </p>
    <p className="leading-relaxed font-semibold">Types of Modems:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>DSL Modem – Uses telephone lines, slower than cable.</li>
      <li>Cable Modem – Uses TV cables, faster than DSL.</li>
      <li>Wireless Modem – Provides Wi-Fi-based internet.</li>
      <li>Cellular Modem – Uses mobile data networks.</li>
    </ul>

    {/* Firewall */}
    <h3 className="text-2xl font-semibold mt-6">3. Firewall</h3>
    <p className="leading-relaxed">
      A firewall monitors and filters incoming and outgoing traffic. It blocks unauthorized access
      while allowing trusted data and protects systems from malware, hackers, and cyber threats.
    </p>

    {/* Repeater */}
    <h3 className="text-2xl font-semibold mt-6">4. Repeater</h3>
    <p className="leading-relaxed">
      A repeater operates at the Physical Layer and regenerates weak signals to extend network
      range. Used in large LANs or WANs to solve signal attenuation issues.
    </p>

    {/* Hub */}
    <h3 className="text-2xl font-semibold mt-6">5. Hub</h3>
    <p className="leading-relaxed">
      A hub is a multiport repeater that broadcasts data to all connected devices, making it less
      efficient due to collisions.
    </p>
    <p className="leading-relaxed font-semibold">Types of Hubs:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Active Hub – Boosts signals.</li>
      <li>Passive Hub – Simply relays signals.</li>
      <li>Intelligent Hub – Provides monitoring and management features.</li>
    </ul>

    {/* Bridge */}
    <h3 className="text-2xl font-semibold mt-6">6. Bridge</h3>
    <p className="leading-relaxed">
      A bridge operates at the Data Link Layer (Layer 2) and connects two LAN segments. It filters
      traffic using MAC addresses to forward data only where needed.
    </p>
    <p className="leading-relaxed font-semibold">Types of Bridges:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Transparent Bridge – Learns MAC addresses automatically.</li>
      <li>Source Routing Bridge – Follows routes defined by the sender.</li>
    </ul>

    {/* Switch */}
    <h3 className="text-2xl font-semibold mt-6">7. Switch</h3>
    <p className="leading-relaxed">
      A switch is an advanced form of bridge with multiple ports. It reduces collisions by
      creating separate collision domains and works mainly at the Data Link Layer.
    </p>
    <p className="leading-relaxed font-semibold">Types of Switches:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Unmanaged Switches – Plug-and-play.</li>
      <li>Managed Switches – Supports VLANs, QoS, and monitoring.</li>
      <li>Layer 2 Switches – Forward frames within the same network.</li>
      <li>Layer 3 Switches – Provide routing functionality.</li>
      <li>PoE Switches – Provide power + data over a single cable.</li>
      <li>Gigabit Switches – High-speed Ethernet support.</li>
      <li>Modular Switches – Expandable for large networks.</li>
    </ul>

    {/* Router */}
    <h3 className="text-2xl font-semibold mt-6">8. Router</h3>
    <p className="leading-relaxed">
      A router operates at the Network Layer (Layer 3). It uses IP addresses and routing tables
      to send data between networks such as LANs and WANs. It also divides broadcast domains.
    </p>

    {/* Gateway */}
    <h3 className="text-2xl font-semibold mt-6">9. Gateway</h3>
    <p className="leading-relaxed">
      A gateway connects two networks that use different protocols or architectures. It performs
      protocol conversion and may work at any OSI layer.
    </p>

    {/* Brouter */}
    <h3 className="text-2xl font-semibold mt-6">10. Brouter (Bridging Router)</h3>
    <p className="leading-relaxed">
      A hybrid network device that functions as both a bridge (Layer 2) and router (Layer 3). It
      filters traffic within LANs and routes packets between networks.
    </p>

    {/* NIC */}
    <h3 className="text-2xl font-semibold mt-6">11. NIC (Network Interface Card)</h3>
    <p className="leading-relaxed">
      A hardware adapter that enables a device to connect to a network. It works at the Data Link
      Layer and contains a unique MAC address. NICs can be wired (Ethernet) or wireless (Wi-Fi).
    </p>

  </div>
);

export default Home;
