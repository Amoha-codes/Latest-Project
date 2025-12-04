import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Types of Computer Networks ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Types of Computer Networks
    </h1>

    <p className="text-sm text-gray-500">Last Updated : 20 Sep, 2025</p>

    {/* INTRO */}
    <p className="text-lg leading-relaxed">
      A computer network is a system that connects many independent computers to share 
      information and resources. It consists of two or more computer systems linked through 
      wired or wireless media. Hardware and software work together to enable communication 
      between devices in a network.
    </p>

    <p className="leading-relaxed">
      Computer networks are classified based on multiple factors such as geographical area, 
      ownership, topology, architecture, and transmission technology.
    </p>

    {/* ================= Classification: Geographical Area ================= */}
    <h2 className="text-3xl font-bold mt-8">Classification Based on Geographical Area</h2>

    {/* PAN */}
    <h3 className="text-2xl font-semibold mt-6">1. Personal Area Network (PAN)</h3>
    <p className="leading-relaxed">
      PAN is the most basic network type, connecting devices within a short range (1–10 meters). 
      It is used for personal devices like smartphones, laptops, wearables, and tablets. The 
      network is easy to maintain, inexpensive, and offers high-speed communication.
    </p>
    <p className="leading-relaxed font-semibold">
      Examples: Bluetooth between phone & earbuds, Infrared TV remote communication.
    </p>

    {/* LAN */}
    <h3 className="text-2xl font-semibold mt-6">2. Local Area Network (LAN)</h3>
    <p className="leading-relaxed">
      LAN connects computers within a limited area (up to 2 km), such as homes, offices, or 
      schools. It typically uses Ethernet and Wi-Fi. LAN provides high speed, low cost, and 
      easy maintenance.
    </p>
    <p className="leading-relaxed font-semibold">
      Examples: Home Wi-Fi, corporate office LAN.
    </p>

    {/* CAN */}
    <h3 className="text-2xl font-semibold mt-6">3. Campus Area Network (CAN)</h3>
    <p className="leading-relaxed">
      CAN is larger than a LAN but smaller than a MAN. It connects multiple buildings on a 
      campus, like universities or organizations. It generally uses Ethernet and spans a few 
      kilometers.
    </p>
    <p className="leading-relaxed font-semibold">
      Examples: School or college campus networks.
    </p>

    {/* MAN */}
    <h3 className="text-2xl font-semibold mt-6">4. Metropolitan Area Network (MAN)</h3>
    <p className="leading-relaxed">
      MAN covers a city or large town and is larger than LAN but smaller than WAN. It uses 
      technologies such as FDDI, CDDI, and ATM. It spans 5 km to 50 km and has moderate 
      transmission speed but high maintenance cost.
    </p>
    <p className="leading-relaxed font-semibold">
      Examples: City-wide cable networks, metropolitan communication systems.
    </p>

    {/* WAN */}
    <h3 className="text-2xl font-semibold mt-6">5. Wide Area Network (WAN)</h3>
    <p className="leading-relaxed">
      WAN connects computers across large geographical areas, even globally. It links 
      multiple LANs using leased lines and dial-up technologies. WAN has low transmission 
      speed and high maintenance cost.
    </p>
    <p className="leading-relaxed font-semibold">
      Examples: The Internet (largest WAN), global banking networks.
    </p>

    {/* ================= Classification: Transmission ================= */}
    <h2 className="text-3xl font-bold mt-8">Classification Based on Transmission Technology</h2>

    {/* WLAN */}
    <h3 className="text-2xl font-semibold mt-6">1. Wireless Local Area Network (WLAN)</h3>
    <p className="leading-relaxed">
      WLAN works like a LAN but uses wireless technology (Wi-Fi) instead of cables. Devices 
      communicate through radio waves.
    </p>
    <p className="leading-relaxed font-semibold">
      Example: Wi-Fi.
    </p>

    {/* SAN */}
    <h3 className="text-2xl font-semibold mt-6">2. System Area Network (SAN)</h3>
    <p className="leading-relaxed">
      SAN is designed for high-performance computing environments like supercomputers and 
      data centers. It offers high-speed connectivity and provides access to block-level data 
      storage.
    </p>
    <p className="leading-relaxed font-semibold">
      Example: Disk network accessed by multiple servers.
    </p>

    {/* POLAN */}
    <h3 className="text-2xl font-semibold mt-6">3. Passive Optical LAN (POLAN)</h3>
    <p className="leading-relaxed">
      POLAN is an alternative to LAN that uses optical splitters with a single-mode fiber to 
      distribute signals to multiple devices. It follows point-to-multipoint architecture.
    </p>

    {/* ================= Classification: Ownership ================= */}
    <h2 className="text-3xl font-bold mt-8">Classification Based on Ownership and Access Control</h2>

    {/* Private */}
    <h3 className="text-2xl font-semibold mt-6">1. Private Network</h3>
    <p className="leading-relaxed">
      Completely owned and managed by an individual or organization. Highly secure with 
      restricted access.
    </p>
    <p className="leading-relaxed font-semibold">
      Examples: Company intranet, school network, hospital database systems.
    </p>

    {/* Public */}
    <h3 className="text-2xl font-semibold mt-6">2. Public Network</h3>
    <p className="leading-relaxed">
      Open to the general public. Usually provided by ISPs. Less secure and often requires 
      no authentication.
    </p>
    <p className="leading-relaxed font-semibold">
      Examples: Public Wi-Fi at airports, cafes, city hotspots.
    </p>

    {/* Hybrid */}
    <h3 className="text-2xl font-semibold mt-6">3. Hybrid Network</h3>
    <p className="leading-relaxed">
      Combines private and public network features. Used where different users require 
      different access levels.
    </p>
    <p className="leading-relaxed font-semibold">
      Example: University network with staff-only intranet + guest Wi-Fi.
    </p>

    {/* ================= Internetwork ================= */}
    <h2 className="text-3xl font-bold mt-8">Internetwork</h2>
    <p className="leading-relaxed">
      Internetworking connects two or more networks (like LANs or WANs) using routers or 
      gateways for communication. 
    </p>

    {/* Intranet */}
    <h3 className="text-2xl font-semibold mt-6">1. Intranet</h3>
    <p className="leading-relaxed">
      A private network used within an organization. It provides access to internal tools, 
      documents, and systems.
    </p>
    <p className="leading-relaxed font-semibold">
      Examples: HR portals, staff knowledge bases.
    </p>

    {/* Extranet */}
    <h3 className="text-2xl font-semibold mt-6">2. Extranet</h3>
    <p className="leading-relaxed">
      Extends the intranet to allow limited and secure access to partners, clients, or vendors. 
      Supports inter-organizational collaboration.
    </p>
    <p className="leading-relaxed font-semibold">
      Examples: Supplier portals, client dashboards, partner login systems.
    </p>
  </div>
);

export default Home;
