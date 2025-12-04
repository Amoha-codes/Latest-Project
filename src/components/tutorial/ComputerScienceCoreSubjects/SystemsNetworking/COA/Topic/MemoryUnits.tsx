import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Introduction to Memory ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Memory and Memory Units
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 30 Oct, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Memory is an essential component of a computer system, responsible for storing data and 
      instructions needed for processing. It enables the CPU to execute programs efficiently 
      and ensures smooth system operation.
    </p>

    <p className="leading-relaxed">
      <strong>Memory Cell:</strong> Smallest unit storing 1 bit of data with a unique address. <br />
      <strong>Word & Byte:</strong> A word is a group of bits; 1 byte = 8 bits. <br />
      <strong>Capacity:</strong> Total number of bits a memory can hold.
    </p>

    {/* Classification */}
    <h2 className="text-3xl font-bold mt-8">Classification of Memory</h2>
    <p className="leading-relaxed">
      Memory is classified into primary and secondary types based on speed, accessibility, and volatility.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Primary Memory:</strong> Directly accessible by the CPU; fast but limited in capacity.</li>
      <li><strong>Secondary Memory:</strong> Used for long-term storage; slower but larger in capacity.</li>
    </ul>

    {/* RAM Section */}
    <h2 className="text-3xl font-bold mt-8">RAM (Random Access Memory)</h2>
    <p className="leading-relaxed">
      RAM is the computer’s main memory used for temporary storage of active programs and data. 
      Data is lost when power is off. It provides fast CPU access, improving multitasking and performance.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Types of RAM</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>SRAM (Static RAM):</strong> Fast, used in cache, retains data while powered.</li>
      <li><strong>DRAM (Dynamic RAM):</strong> Slower, needs periodic refresh; main memory. Includes SDRAM and DDR series.</li>
    </ul>

    {/* ROM Section */}
    <h2 className="text-3xl font-bold mt-8">ROM (Read-Only Memory)</h2>
    <p className="leading-relaxed">
      ROM is non-volatile memory that stores essential instructions permanently. 
      It holds system firmware and boot instructions.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Types of ROM</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>MROM:</strong> Pre-programmed at manufacture</li>
      <li><strong>PROM:</strong> User-programmable once</li>
      <li><strong>EPROM:</strong> UV-erasable</li>
      <li><strong>EEPROM:</strong> Electrically erasable</li>
      <li><strong>Flash Memory:</strong> Fast, used in SSDs and USB drives</li>
    </ul>

    {/* Secondary Memory Section */}
    <h2 className="text-3xl font-bold mt-8">Secondary Memory</h2>
    <p className="leading-relaxed">
      Secondary memory provides long-term data storage and is not directly accessed by the CPU.
    </p>

    <p className="leading-relaxed">
      <strong>Examples:</strong> HDD, SSD, optical discs (CD/DVD/Blu-ray), USB drives, memory cards, magnetic tapes, cloud storage.
    </p>

    <p className="leading-relaxed">
      <strong>Characteristics:</strong> Non-volatile, slower, high capacity, used for storing operating systems, software, and user files.
    </p>

    {/* Differences Table */}
    <h2 className="text-3xl font-bold mt-8">Differences Among RAM, ROM, and Secondary Memory</h2>

    <div className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="p-2">RAM</th>
            <th className="p-2">ROM</th>
            <th className="p-2">Secondary Memory</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">Volatile</td>
            <td className="p-2">Non-volatile</td>
            <td className="p-2">Non-volatile</td>
          </tr>
          <tr>
            <td className="p-2">Temporary workspace</td>
            <td className="p-2">Permanent instructions</td>
            <td className="p-2">Long-term storage</td>
          </tr>
          <tr>
            <td className="p-2">Fast</td>
            <td className="p-2">Moderate</td>
            <td className="p-2">Slow</td>
          </tr>
          <tr>
            <td className="p-2">Read/Write</td>
            <td className="p-2">Mostly Read-only</td>
            <td className="p-2">Read/Write</td>
          </tr>
          <tr>
            <td className="p-2">DRAM, SRAM</td>
            <td className="p-2">PROM, EPROM, EEPROM</td>
            <td className="p-2">HDD, SSD, USB</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Conversions */}
    <h2 className="text-3xl font-bold mt-8">Conversions of Units</h2>

    <div className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      <ul className="list-disc ml-6 leading-relaxed">
        <li>Bit = 1 Bit</li>
        <li>Nibble = 4 Bits</li>
        <li>Byte = 8 Bits</li>
        <li>Kilobyte = 1024 Bytes</li>
        <li>Megabyte = 1024 Kilobytes</li>
        <li>Gigabyte = 1024 Megabytes</li>
        <li>Terabyte = 1024 Gigabytes</li>
        <li>Petabyte = 1024 Terabytes</li>
        <li>Exabyte = 1024 Petabytes</li>
        <li>Zettabyte = 1024 Exabytes</li>
        <li>Yottabyte = 1024 Zettabytes</li>
      </ul>
    </div>

  </div>
);

export default Home;
