import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= HDD ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Hard Disk Drive (HDD) – Secondary Memory
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 13 Sep, 2025</p>

    <p className="leading-relaxed text-lg">
      A Hard Disk Drive (HDD) is a fixed storage device inside a computer that uses magnetic technology to store and retrieve data permanently. Unlike RAM, HDDs retain data when powered off and are essential for operating systems, applications, and files.
    </p>

    {/* Components and Form Factors */}
    <h2 className="text-3xl font-bold mt-6">HDD Components and Form Factors</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Platters:</strong> Magnetic disks made from aluminium or glass, stacked on a spindle to store data.</li>
      <li><strong>Spindle:</strong> Rotates platters; speed (RPM) affects read/write performance.</li>
      <li><strong>Actuator Arm:</strong> Moves read/write heads to correct positions for data transfer.</li>
      <li><strong>Read/Write Head:</strong> Reads from or writes data to the platters.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Common Form Factors</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>3.5-inch: Standard for desktops.</li>
      <li>2.5-inch: Used in laptops and portable devices.</li>
      <li>1.8-inch: Used in tablets and compact devices.</li>
      <li>Enterprise HDDs: Optimized for servers with higher performance, reliability, and durability.</li>
    </ul>

    {/* External HDDs */}
    <h2 className="text-3xl font-bold mt-6">External HDDs</h2>
    <p className="leading-relaxed">
      External HDDs act as portable storage or backup. Connected via USB, USB-C, or eSATA, they are slower than internal drives but provide portability and convenience.
    </p>

    {/* Features */}
    <h2 className="text-3xl font-bold mt-6">Features of HDD</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Non-Volatile: Retains data when power is off.</li>
      <li>High Capacity: Stores large amounts of data (up to 36TB in 2025).</li>
      <li>Relatively Slow: Access times in milliseconds.</li>
      <li>Mechanical Parts: Spinning disks and moving heads.</li>
      <li>Cost-Effective: Cheaper than SSDs for large storage.</li>
      <li>Reliable: Durable and widely used.</li>
    </ul>

    {/* History */}
    <h2 className="text-3xl font-bold mt-6">History of HDD</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>1956: IBM shipped first HDD (3.75MB, size of a refrigerator).</li>
      <li>1980s: 2.5-inch and 3.5-inch form factors standardized.</li>
      <li>2007: First 1TB HDD released.</li>
      <li>2015: First 10TB HDD introduced.</li>
      <li>2021: 20TB HDDs for enterprise use.</li>
      <li>2025: Modern HDDs up to 36TB with HAMR & MAMR technologies.</li>
    </ul>

    {/* Working */}
    <h2 className="text-3xl font-bold mt-6">How HDDs Work</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Platters spin at high speeds (5,400–15,000 RPM).</li>
      <li>Read/Write heads move to the correct track and sector.</li>
      <li>Data is magnetically written or read from spinning platters.</li>
      <li>Disk controller processes and transfers data to the computer.</li>
    </ul>

    {/* Storage Capacity */}
    <h2 className="text-3xl font-bold mt-6">HDD Storage Capacity</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>16–64 GB: Older or small devices.</li>
      <li>120–256 GB: Entry-level HDDs.</li>
      <li>500 GB–2 TB: Suitable for average users and gamers.</li>
      <li>More than 2 TB: High-resolution files, enterprise users.</li>
    </ul>

    {/* Delays */}
    <h2 className="text-3xl font-bold mt-6">HDD Delays and Access Time</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Seek Time:</strong> Time to move R/W head to the correct track.</li>
      <li><strong>Rotational Latency:</strong> Time for the desired sector to rotate under the head.</li>
      <li><strong>Data Transfer Time:</strong> Time to transfer data.</li>
      <li><strong>Controller Time:</strong> Processing time by the controller.</li>
      <li><strong>Average Access Time:</strong> Seek Time + Average Rotational Latency + Data Transfer Time + Controller Time.</li>
    </ul>

    {/* Common Errors */}
    <h2 className="text-3xl font-bold mt-6">Common HDD Errors</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Electrical Error: Component failure prevents read/write.</li>
      <li>Logical Failure: Software corruption or hacking.</li>
      <li>Disk Failure: Physical malfunction of the drive.</li>
      <li>Disk Full: No free space for data storage.</li>
      <li>Bad Sector: Damaged platter sector inaccessible.</li>
      <li>Firmware Failure: Corrupted maintenance software.</li>
    </ul>

    {/* Advantages and Disadvantages */}
    <h2 className="text-3xl font-bold mt-6">Advantages</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>High storage capacity & cost-effective.</li>
      <li>Data retention even when powered off.</li>
      <li>Easy to upgrade & widely compatible.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-6">Disadvantages</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Slower performance than SSDs.</li>
      <li>Higher power consumption.</li>
      <li>Less durable due to moving parts.</li>
      <li>Noisy operation and heat generation.</li>
    </ul>

  </div>
);

export default Home;
