import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Byte and Word Addressable Memory ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Byte and Word Addressable Memory
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 30 Oct, 2025</p>

    <p className="text-lg leading-relaxed">
      Memory is a crucial storage component in a computer, used to store application programs and data.  
      Memory is organized into cells, each capable of storing a fixed number of bits. Each cell is uniquely identified by a binary address, allowing the CPU to efficiently locate and access data.
    </p>

    <h2 className="text-3xl font-bold mt-8">Memory Chip Example</h2>
    <p className="leading-relaxed">
      Example: A memory chip with configuration 64K × 8 has:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>64K memory locations (cells)</li>
      <li>8 bits per cell</li>
    </ul>
    <p className="leading-relaxed">
      From this configuration, we can derive:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Data Space in the Chip: 64K × 8 bits</li>
      <li>Data Space in a Single Cell: 8 bits</li>
      <li>Address Space in the Chip: log₂(64K) = 16 bits</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Byte Addressable Memory</h2>
    <p className="leading-relaxed">
      In byte-addressable memory, each memory cell stores 1 byte (8 bits), and each address corresponds to a single byte.  
      This design allows the CPU to access data at the byte level, which is efficient for most programs and data structures.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Each address refers to 1 byte (8 bits).</li>
      <li>Enables direct byte-level access.</li>
      <li>Ideal for programs processing data byte by byte.</li>
      <li>Standard in modern CPUs and general-purpose systems.</li>
      <li>Example: 64K × 8 memory chip → 16-bit addresses, 1 byte per cell.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Word Addressable Memory</h2>
    <p className="leading-relaxed">
      In word-addressable memory, each memory cell stores a word equal to the CPU’s word length (e.g., 16 or 32 bits), and each address refers to an entire word.  
      Accessing a specific byte requires fetching the word containing it and then extracting the desired byte.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Each address refers to a word (CPU word length).</li>
      <li>Byte access requires fetching the entire word.</li>
      <li>Data is stored word by word.</li>
      <li>Rare in modern systems due to indirect byte access.</li>
      <li>Example: 64K × 16 memory chip → 16-bit addresses, 16 bits per cell.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Important Points</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Address Size vs. Cell Size: Number of address bits depends on total cells; cell size differs for byte-addressable and word-addressable memory.</li>
      <li>Default Memory Configuration: Modern computers typically use byte-addressable memory for direct access to individual bytes, which is efficient for most applications.</li>
    </ul>

  </div>
);

export default Home;
