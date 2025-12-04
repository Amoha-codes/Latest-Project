import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Virtual Memory ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Virtual Memory in Operating System
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 13 Sep, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Virtual memory is a memory management technique used by operating systems to give the 
      appearance of a large, continuous block of memory to applications, even if the physical 
      memory (RAM) is limited and not contiguous. The process is divided into <strong>pages</strong>, 
      which can be moved to disk when memory is needed and brought back when required.
    </p>

    {/* Objectives */}
    <h2 className="text-3xl font-bold mt-8">Objectives of Virtual Memory</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>A program doesn’t need to be fully loaded into memory to run.</li>
      <li>Programs can be larger than the available physical memory.</li>
      <li>Virtual memory creates the illusion of a large memory using RAM and disk storage.</li>
      <li>Allows running more programs concurrently and efficient memory management.</li>
    </ul>

    {/* How it works */}
    <h2 className="text-3xl font-bold mt-8">How Virtual Memory Works</h2>
    <p className="leading-relaxed">
      Virtual memory uses hardware and software. Programs use virtual addresses, which the 
      system converts to physical addresses in RAM while running.
    </p>

    {/* Types of Virtual Memory */}
    <h2 className="text-3xl font-bold mt-8">Types of Virtual Memory</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Paging:</strong> Divides memory into fixed-size pages. Unused pages are swapped to disk.</li>
      <li><strong>Segmentation:</strong> Divides memory into variable-sized segments. Only needed segments are loaded.</li>
    </ul>

    {/* Paging Details */}
    <h2 className="text-3xl font-bold mt-8">Paging</h2>
    <p className="leading-relaxed">
      Pages are fixed-size blocks in virtual memory, mapped to frames in physical memory. Page 
      faults occur when a page is not in RAM, and the OS loads it from disk. Effective memory 
      access time can be calculated as:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Effective memory access time = (p * s) + (1 − p) * m <br />
      where <strong>p</strong> = page fault rate, <strong>s</strong> = page fault service time, <strong>m</strong> = main memory access time
    </p>

    {/* Segmentation */}
    <h2 className="text-3xl font-bold mt-8">Segmentation</h2>
    <p className="leading-relaxed">
      Memory is divided into variable-sized segments. Segments not currently needed can be moved 
      to disk. A segment table keeps track of their status, including physical address and modifications.
    </p>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications of Virtual Memory</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Increased effective memory, allowing larger programs to run.</li>
      <li>Memory isolation ensures safety and reliability for each process.</li>
      <li>Efficient memory management using paging and segmentation.</li>
      <li>Simplified programming, allowing programs to use memory as if it were contiguous.</li>
    </ul>

    {/* Management */}
    <h2 className="text-3xl font-bold mt-8">Management of Virtual Memory</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Adjust the page file size automatically or manually to optimize performance.</li>
      <li>Place the page file on an SSD or a separate drive for better speed.</li>
      <li>Monitor and optimize usage using performance tools.</li>
      <li>Disable virtual memory on SSD if sufficient RAM is available.</li>
      <li>Optimize system settings and update drivers for better memory efficiency.</li>
    </ul>

    {/* Benefits */}
    <h2 className="text-3xl font-bold mt-8">Benefits of Using Virtual Memory</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Supports multiprogramming and execution of larger programs.</li>
      <li>Maximizes application capacity by loading only needed parts.</li>
      <li>Eliminates physical memory limitations using disk space.</li>
      <li>Boosts security and isolation for processes.</li>
      <li>Improves CPU and system performance with efficient memory allocation.</li>
      <li>Enhances overall memory management efficiency and prevents fragmentation.</li>
    </ul>

    {/* Limitations */}
    <h2 className="text-3xl font-bold mt-8">Limitations of Virtual Memory</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Slower performance due to disk I/O operations.</li>
      <li>Higher risk of data loss during power failure or disk crash.</li>
      <li>Increases complexity of the operating system.</li>
    </ul>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Virtual Memory vs Physical Memory</h2>
    <table className="table-auto border border-gray-300 text-left w-full mt-4">
      <thead>
        <tr className="bg-gray-200">
          <th className="border px-4 py-2">Feature</th>
          <th className="border px-4 py-2">Virtual Memory</th>
          <th className="border px-4 py-2">Physical Memory (RAM)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">Definition</td>
          <td className="border px-4 py-2">Abstraction extending memory using disk</td>
          <td className="border px-4 py-2">Actual hardware storing data/instructions</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Location</td>
          <td className="border px-4 py-2">Hard drive or SSD</td>
          <td className="border px-4 py-2">On the computer's motherboard</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Speed</td>
          <td className="border px-4 py-2">Slower (disk I/O)</td>
          <td className="border px-4 py-2">Faster (CPU access)</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Capacity</td>
          <td className="border px-4 py-2">Larger, limited by disk space</td>
          <td className="border px-4 py-2">Smaller, limited by installed RAM</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Cost</td>
          <td className="border px-4 py-2">Lower (disk storage)</td>
          <td className="border px-4 py-2">Higher (RAM modules)</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Data Access</td>
          <td className="border px-4 py-2">Indirect via paging and swapping</td>
          <td className="border px-4 py-2">Direct</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Volatility</td>
          <td className="border px-4 py-2">Non-volatile (persists on disk)</td>
          <td className="border px-4 py-2">Volatile (lost when power off)</td>
        </tr>
      </tbody>
    </table>

  </div>
);

export default Home;
