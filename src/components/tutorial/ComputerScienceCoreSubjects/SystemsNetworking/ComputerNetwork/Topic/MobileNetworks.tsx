import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Generations of Wireless Communication ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Generations of Wireless Communication
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Jul, 2025</p>

    {/* Intro */}
    <p className="text-lg leading-relaxed">
      Wireless communication has evolved significantly over the past few decades.
      Each generation introduced enhanced features, better connectivity, and improved speed.
      Here is a detailed overview of all generations from 0G to 5G.
    </p>

    {/* 0G */}
    <h2 className="text-3xl font-bold mt-8">0th Generation (0G)</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Used before the invention of cell phones (radio telephones).</li>
      <li>Voice-only communication.</li>
      <li>Devices were mounted in cars or trucks.</li>
    </ul>

    {/* 1G */}
    <h2 className="text-3xl font-bold mt-8">1G – First Generation</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>First time mobile voice calling introduced.</li>
      <li>Based on analog signals.</li>
      <li>Used FDD with ~25 MHz bandwidth.</li>
      <li>Small coverage area & no roaming support.</li>
      <li>Poor sound quality.</li>
      <li><strong>Speed:</strong> 2.4 kbps</li>
    </ul>

    {/* 2G */}
    <h2 className="text-3xl font-bold mt-8">2G – Second Generation</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Shifted from analog to digital technology.</li>
      <li>Supported voice and SMS.</li>
      <li>Covered Digital Cellular, Mobile Data, PCS, WLAN.</li>
      <li>Moderate mobile data services.</li>
      <li><strong>Speed:</strong> 64 kbps</li>
    </ul>

    {/* 2.5G & 2.75G */}
    <p className="leading-relaxed mt-4">
      <strong>2.5G</strong> introduced GPRS enabling streaming and email services.  
      <strong>2.75G (EDGE)</strong> offered faster speeds up to 128 kbps.
    </p>

    {/* 3G */}
    <h2 className="text-3xl font-bold mt-8">3G – Third Generation</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Improved mobile internet system.</li>
      <li>High-speed wireless connectivity.</li>
      <li>Technologies used: UMTS & WCDMA.</li>
      <li><strong>Speed:</strong> 2 Mbps</li>
    </ul>

    {/* 4G */}
    <h2 className="text-3xl font-bold mt-8">4G – Fourth Generation</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Fully IP-based protocols.</li>
      <li>LTE for high-speed internet.</li>
      <li>VoLTE for both voice & data.</li>
      <li>High mobility, flexibility, and QoS.</li>
      <li>HD video streaming supported.</li>
      <li><strong>Speed:</strong> 100 Mbps</li>
    </ul>

    {/* 5G */}
    <h2 className="text-3xl font-bold mt-8">5G – Fifth Generation</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Extremely high data rates.</li>
      <li>Faster and more secure connectivity.</li>
      <li>Ultra-low latency communication.</li>
      <li>Massive network capacity.</li>
      <li>30x faster than 4G.</li>
      <li>Highly flexible network design.</li>
    </ul>

  </div>
);

export default Home;
