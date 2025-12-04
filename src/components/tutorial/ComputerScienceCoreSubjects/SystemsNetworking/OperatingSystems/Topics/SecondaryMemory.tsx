import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Secondary Memory ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Secondary Memory
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Sep, 2025</p>

    <p className="leading-relaxed text-lg">
      Secondary memory (secondary storage) refers to devices used to store data persistently, even when the computer is powered off. Unlike primary memory (RAM), it is slower but provides larger storage capacities. Examples include HDDs, SSDs, optical disks, USB drives, and cloud storage.
    </p>

    {/* Use of Secondary Memory */}
    <h2 className="text-3xl font-bold mt-6">Uses of Secondary Memory</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Permanent storage for data, files, and programs.</li>
      <li>Large storage capacity for videos, images, and large files.</li>
      <li>Portability via removable devices for transferring data.</li>
    </ul>

    {/* Types of Secondary Memory */}
    <h2 className="text-3xl font-bold mt-6">Types of Secondary Memory</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Fixed Devices</li>
      <li>Removable Devices</li>
    </ul>

    {/* Fixed Devices */}
    <h3 className="text-2xl font-semibold mt-4">1) Fixed Devices</h3>
    <p className="leading-relaxed">
      Fixed devices are permanently installed in the system and always accessible, e.g., internal HDDs, SSDs, or NAS.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>HDD:</strong> Uses spinning magnetic disks, large storage, low cost, slower speed.</li>
      <li><strong>SSD:</strong> Uses flash memory, faster, reliable, no moving parts.</li>
      <li><strong>Network Attached Storage (NAS):</strong> Connected to a network, allows shared access.</li>
    </ul>

    {/* Removable Devices */}
    <h3 className="text-2xl font-semibold mt-4">2) Removable Devices</h3>
    <p className="leading-relaxed">
      Removable devices can be disconnected and used on different systems. Examples include USB drives, optical disks, and flash memory cards.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Optical Discs:</strong> CD (700MB), DVD (4.7GB+), Blu-ray (25-50GB).</li>
      <li><strong>USB Flash Drives:</strong> Portable, durable, various capacities.</li>
      <li><strong>Magnetic Tapes:</strong> High-capacity archival storage, cost-effective.</li>
      <li><strong>Flash Memory Cards:</strong> SD, MicroSD used in cameras, smartphones.</li>
      <li><strong>External Hard Drives:</strong> Usually removable for backups or transfers.</li>
      <li><strong>Cloud Storage:</strong> Online storage, accessible from any device via the internet.</li>
    </ul>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-6">Applications of Secondary Memory</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Long-term data storage & archiving.</li>
      <li>Backup & recovery of important data.</li>
      <li>Storage of OS and software applications.</li>
      <li>Media & content storage for videos, music, games.</li>
      <li>Database management for businesses, research, education.</li>
      <li>Virtual memory support for better system performance.</li>
      <li>Cloud storage for remote access and collaboration.</li>
      <li>Gaming and high-performance external storage.</li>
    </ul>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-6">Advantages</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Large storage capacity for data and programs.</li>
      <li>Non-volatile: retains data when power is off.</li>
      <li>Portability via removable devices.</li>
      <li>Cost-effective compared to primary memory.</li>
    </ul>

    {/* Disadvantages */}
    <h2 className="text-3xl font-bold mt-6">Disadvantages</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Slower access times than primary memory.</li>
      <li>Prone to mechanical failures (e.g., HDDs).</li>
      <li>Limited lifespan due to read/write cycles.</li>
      <li>Data corruption possible from interference, viruses, or damage.</li>
    </ul>

  </div>
);

export default Home;
