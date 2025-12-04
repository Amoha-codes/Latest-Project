import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Unix File System ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Unix File System
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 18 Sep, 2025</p>

    {/* Intro */}
    <p className="text-lg leading-relaxed">
      The Unix File System (UFS) organizes and stores data logically, allowing efficient 
      management of large amounts of information. All data is stored in files, which are 
      organized into directories forming a hierarchical tree structure. The top-most directory 
      is the <strong>root (/)</strong>, and all other files are descendants of root. 
      Unix also uses a permission system to control access to files and directories.
    </p>

    {/* Unix File Concept */}
    <h2 className="text-3xl font-bold mt-8">Files on Unix</h2>
    <p className="leading-relaxed">
      In Unix, everything is treated as a file, including devices, which are represented as special files in <code>/dev</code>. 
      Each file has a unique inode. Device files are categorized as:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Block Special File:</strong> Data transferred in fixed-size blocks.</li>
      <li><strong>Character Special File:</strong> Data transferred as a stream of bits, sequentially.</li>
    </ul>

    {/* Important Directories */}
    <h2 className="text-3xl font-bold mt-8">Important Unix Directories</h2>
    <table className="table-auto border-collapse border border-gray-300 w-full text-left">
      <thead>
        <tr className="bg-gray-400">
          <th className="border px-4 py-2">Directory</th>
          <th className="border px-4 py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border px-4 py-2">/</td><td className="border px-4 py-2">Root of the filesystem.</td></tr>
        <tr><td className="border px-4 py-2">/bin</td><td className="border px-4 py-2">Essential binaries/utilities.</td></tr>
        <tr><td className="border px-4 py-2">/boot</td><td className="border px-4 py-2">Boot files.</td></tr>
        <tr><td className="border px-4 py-2">/dev</td><td className="border px-4 py-2">Device files.</td></tr>
        <tr><td className="border px-4 py-2">/etc</td><td className="border px-4 py-2">System configuration files.</td></tr>
        <tr><td className="border px-4 py-2">/home</td><td className="border px-4 py-2">User home directories.</td></tr>
        <tr><td className="border px-4 py-2">/lib</td><td className="border px-4 py-2">System libraries and kernel modules.</td></tr>
        <tr><td className="border px-4 py-2">/proc</td><td className="border px-4 py-2">Virtual filesystem for process info.</td></tr>
        <tr><td className="border px-4 py-2">/tmp</td><td className="border px-4 py-2">Temporary files.</td></tr>
        <tr><td className="border px-4 py-2">/usr</td><td className="border px-4 py-2">Executables, libraries, shared resources.</td></tr>
        <tr><td className="border px-4 py-2">/var</td><td className="border px-4 py-2">Variable files like logs, mail, spools.</td></tr>
      </tbody>
    </table>

    {/* Types of Unix Files */}
    <h2 className="text-3xl font-bold mt-8">Types of Unix Files</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Ordinary Files:</strong> Contain data, text, or program instructions. Represented by "-" in <code>ls -l</code>.</li>
      <li><strong>Directories:</strong> Store files and other directories. Represented by "d" in <code>ls -l</code>.</li>
      <li><strong>Special Files:</strong> Represent devices for I/O operations. Character files ("c") and block files ("b").</li>
      <li><strong>Pipes:</strong> Temporary files for one-way data flow between commands. Represented by "p".</li>
      <li><strong>Sockets:</strong> Files for local inter-process communication. Represented by "s".</li>
      <li><strong>Symbolic Links:</strong> Soft links pointing to other files. Represented by "l".</li>
    </ul>

    {/* Advantages & Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages of Unix File System</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Hierarchical organization for easy navigation.</li>
      <li>Robust and stable for large data.</li>
      <li>Security via file permissions.</li>
      <li>Compatible across Unix-based systems.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Disadvantages of Unix File System</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Complex to understand for beginners.</li>
      <li>Steep learning curve for command-line interface.</li>
      <li>Lack of user-friendly graphical interface.</li>
      <li>Limited support for some non-native file systems.</li>
    </ul>

  </div>
);

export default Home;
