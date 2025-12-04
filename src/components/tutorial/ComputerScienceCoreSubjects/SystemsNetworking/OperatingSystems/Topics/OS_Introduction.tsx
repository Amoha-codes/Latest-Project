import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Introduction to Operating System ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Operating System
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 08 Nov, 2025</p>

    {/* Introduction Paragraphs */}
    <p className="text-lg leading-relaxed">
      An operating system acts as an intermediary between the user of a
      computer and the computer hardware. In short, it is an interface
      between hardware and the user.
    </p>

    <p className="leading-relaxed">
      The purpose of an operating system is to provide an environment in which
      a user can execute programs conveniently and efficiently. The operating
      system (OS) is a program that runs at all times on a computer. All other
      programs, including application programs, run on top of the OS.
    </p>

    <p className="leading-relaxed">
      It assigns system resources like memory, processors, and input/output
      devices to processes that need them. The resource assignment must be
      fair and secure.
    </p>

    {/* ================= OS and User Interaction ================= */}
    <h2 className="text-3xl font-bold mt-8">Operating System and User Interaction</h2>

    <p className="leading-relaxed">
      Every general-purpose computer consists of hardware, an operating
      system, system programs, and application programs.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>The hardware includes CPU, ALU, memory, I/O devices, peripheral devices, and storage devices.</li>
      <li>The system programs include compilers, loaders, editors, and the OS itself.</li>
      <li>The application programs perform specific user-level tasks.</li>
    </ul>

    <p className="leading-relaxed">
      The operating system always runs in the background to manage and coordinate 
      hardware resources among system and application programs. The OS itself is not 
      just a user interface. Instead, it provides:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>CLI</strong> – via shells and terminal commands</li>
      <li><strong>GUI</strong> – via windows, icons, menus</li>
    </ul>

    <p className="leading-relaxed font-semibold">
      Note: At the core of the OS lies the <strong>Kernel</strong>, the primary interface 
      between hardware and software that handles low-level operations like memory 
      management, process handling, file control, and device communication.
    </p>

    {/* ================= Goals of Operating System ================= */}
    <h2 className="text-3xl font-bold mt-10">Goals of Operating System</h2>

    <h3 className="text-xl font-semibold mt-4">Primary Goals</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>User Convenience:</strong> Provide an easy and user-friendly environment.</li>
      <li><strong>Program Execution:</strong> Enable users to run programs efficiently.</li>
      <li><strong>Resource Management:</strong> Manage CPU, memory, disk, I/O devices.</li>
      <li><strong>Security:</strong> Protect data from unauthorized access.</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">Secondary Goals</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Efficient Resource Utilization</strong> – maximize CPU, memory, and I/O usage.</li>
      <li><strong>Reliability</strong> – handle errors gracefully and remain stable.</li>
    </ul>

    {/* ================= Components of an OS ================= */}
    <h2 className="text-3xl font-bold mt-10">Components of an Operating System</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Shell:</strong> Outermost layer; handles user interaction.</li>
      <li><strong>Kernel:</strong> Core component; manages hardware and low-level operations.</li>
    </ul>

    {/* ================= List of Common Operating Systems ================= */}
    <h2 className="text-3xl font-bold mt-10">List of Common Operating Systems</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Windows OS:</strong> Used in PCs, business environments, gaming.</li>
      <li><strong>macOS:</strong> Popular in creative industries and professional use.</li>
      <li><strong>Linux:</strong> Open-source; used in servers, programming, and tech computing.</li>
      <li><strong>Unix:</strong> Used in servers, workstations, research environments.</li>
    </ul>

    {/* ================= Applications of Operating System ================= */}
    <h2 className="text-3xl font-bold mt-10">Applications of Operating System</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Acts as a platform for running application programs.</li>
      <li>Manages input/output devices and storage resources.</li>
      <li>Supports multitasking and inter-process communication.</li>
      <li>Manages memory and file systems efficiently.</li>
      <li>Provides system and application security.</li>
    </ul>

    {/* ================= Choosing an Operating System ================= */}
    <h2 className="text-3xl font-bold mt-10">How to Choose the Operating System?</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Price Factor:</strong> Some OS are free (Linux), others are paid (Windows, macOS).</li>
      <li><strong>Accessibility:</strong> macOS/iOS easy to use; Linux more advanced.</li>
      <li><strong>Compatibility:</strong> Some OS support more applications than others.</li>
      <li><strong>Security:</strong> macOS provides strong security; Windows is more vulnerable.</li>
    </ul>

    {/* ================= History of Operating System ================= */}
    <h2 className="text-3xl font-bold mt-10">History of Operating System</h2>

    <table className="w-full border border-gray-400 text-left text-sm">
      <thead className='bg-gray-400'>
        <tr className="">
          <th className="border p-2">Era</th>
          <th className="border p-2">Key Developments</th>
          <th className="border p-2">Examples</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border p-2">1956</td>
          <td className="border p-2">First OS was GM-NAA I/O by General Motors</td>
          <td className="border p-2">GM-NAA I/O (1956)</td>
        </tr>
        <tr>
          <td className="border p-2">1960s</td>
          <td className="border p-2">IBM developed time-sharing system TSS/360</td>
          <td className="border p-2">OS/360, DOS/360, TSS/360</td>
        </tr>
        <tr>
          <td className="border p-2">1970s</td>
          <td className="border p-2">Unix popularized multitasking; rise of personal computers</td>
          <td className="border p-2">Unix (1971), CP/M (1974)</td>
        </tr>
        <tr>
          <td className="border p-2">1980s</td>
          <td className="border p-2">GUI-based OSs; networking became standard</td>
          <td className="border p-2">Macintosh (1984), Windows (1985)</td>
        </tr>
        <tr>
          <td className="border p-2">1990s</td>
          <td className="border p-2">Linux emerged; Windows & Mac OS GUIs improved</td>
          <td className="border p-2">Linux (1991), Windows 95 (1995)</td>
        </tr>
        <tr>
          <td className="border p-2">2000s–Present</td>
          <td className="border p-2">Mobile OS and cloud virtualization advanced computing</td>
          <td className="border p-2">iOS (2007), Android (2008)</td>
        </tr>
      </tbody>
    </table>

  </div>
);

export default Home;
