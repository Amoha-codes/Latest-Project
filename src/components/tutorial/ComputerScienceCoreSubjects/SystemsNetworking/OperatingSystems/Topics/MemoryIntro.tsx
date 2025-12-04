import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Memory and Memory Units ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Memory and Memory Units
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 30 Oct, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Memory is a crucial component of a computer system, responsible for storing both data
      and instructions required by the CPU for processing. It ensures smooth operation and
      efficient execution of programs.
    </p>

    {/* Memory Cell */}
    <h2 className="text-3xl font-bold mt-8">Basic Terms</h2>
    <p className="leading-relaxed">
      <strong>Memory Cell:</strong> The smallest storage unit that holds 1 bit of data and has a unique address.
    </p>
    <p className="leading-relaxed">
      <strong>Word & Byte:</strong> A word is a fixed-sized group of bits. One byte contains <strong>8 bits</strong>.
    </p>
    <p className="leading-relaxed">
      <strong>Memory Capacity:</strong> The total number of bits a memory unit can store.
    </p>

    {/* Classification */}
    <h2 className="text-3xl font-bold mt-8">Classification of Memory</h2>
    <p className="leading-relaxed">
      Memory in computer systems is broadly classified into primary and secondary memory based
      on factors like speed, volatility, and accessibility.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Primary Memory:</strong> Directly accessible by the CPU, very fast but limited in size.</li>
      <li><strong>Secondary Memory:</strong> Used for long-term storage; slower but higher in capacity.</li>
    </ul>

    {/* RAM */}
    <h2 className="text-3xl font-bold mt-8">RAM (Random Access Memory)</h2>
    <p className="leading-relaxed">
      RAM is the main memory of the computer, used for temporary storage of active programs and
      data. It is <strong>volatile</strong>, meaning all stored information is lost when power is turned off.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Types of RAM</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>SRAM (Static RAM):</strong> Faster and used in cache memory.</li>
      <li><strong>DRAM (Dynamic RAM):</strong> Slower and used as main memory; includes SDRAM and DDR.</li>
    </ul>

    {/* ROM */}
    <h2 className="text-3xl font-bold mt-8">ROM (Read-Only Memory)</h2>
    <p className="leading-relaxed">
      ROM is a non-volatile memory used to store permanent instructions such as firmware,
      essential for booting and system startup.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Types of ROM</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>MROM:</strong> Pre-programmed during manufacturing.</li>
      <li><strong>PROM:</strong> Can be programmed once by the user.</li>
      <li><strong>EPROM:</strong> Erasable using UV light.</li>
      <li><strong>EEPROM:</strong> Electrically erasable and rewriteable.</li>
      <li><strong>Flash Memory:</strong> Faster, used in SSDs and USB drives.</li>
    </ul>

    {/* Secondary Memory */}
    <h2 className="text-3xl font-bold mt-8">Secondary Memory</h2>
    <p className="leading-relaxed">
      Secondary memory provides permanent, long-term storage for data. It is not directly
      accessible by the CPU.
    </p>

    <p className="leading-relaxed font-semibold mt-4">Examples:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Hard Disk Drives (HDD)</li>
      <li>Solid State Drives (SSD)</li>
      <li>USB Drives and SD Cards</li>
      <li>Optical Discs (CD, DVD, Blu-ray)</li>
      <li>Cloud Storage</li>
    </ul>

    {/* Differences */}
    <h2 className="text-3xl font-bold mt-8">Differences Among RAM, ROM and Secondary Memory</h2>

    <div className="bg-gray-400 p-4 text-sm rounded-lg shadow-inner overflow-x-auto">
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
        </tbody>
      </table>
    </div>

    {/* Unit Conversions */}
    <h2 className="text-3xl font-bold mt-8">Conversions of Memory Units</h2>

    <div className="bg-gray-400 p-4 text-sm rounded-lg shadow-inner overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="p-2">Name</th>
            <th className="p-2">Equal To</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="p-2">Bit</td><td className="p-2">1 Bit</td></tr>
          <tr><td className="p-2">Nibble</td><td className="p-2">4 Bits</td></tr>
          <tr><td className="p-2">Byte</td><td className="p-2">8 Bits</td></tr>
          <tr><td className="p-2">Kilobyte</td><td className="p-2">1024 Bytes</td></tr>
          <tr><td className="p-2">Megabyte</td><td className="p-2">1024 KB</td></tr>
          <tr><td className="p-2">Gigabyte</td><td className="p-2">1024 MB</td></tr>
          <tr><td className="p-2">Terabyte</td><td className="p-2">1024 GB</td></tr>
          <tr><td className="p-2">Petabyte</td><td className="p-2">1024 TB</td></tr>
          <tr><td className="p-2">Exabyte</td><td className="p-2">1024 PB</td></tr>
          <tr><td className="p-2">Zettabyte</td><td className="p-2">1024 EB</td></tr>
          <tr><td className="p-2">Yottabyte</td><td className="p-2">1024 ZB</td></tr>
        </tbody>
      </table>
    </div>

    {/* Quiz */}
    <h2 className="text-3xl font-bold mt-8">Suggested Quiz</h2>
    <p className="leading-relaxed font-semibold">
      A memory that loses its contents when power is turned off and allows random access is:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>A — ROM</li>
      <li>B — DRAM ✔ (Correct Answer)</li>
      <li>C — Flash Memory</li>
      <li>D — PROM</li>
    </ul>

  </div>
);

export default Home;
