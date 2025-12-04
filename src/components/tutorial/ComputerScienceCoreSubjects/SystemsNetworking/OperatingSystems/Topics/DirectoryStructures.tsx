import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Structures of Directory ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Structures of Directory in Operating System
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 12 Sep, 2025</p>

    {/* Intro */}
    <p className="text-lg leading-relaxed">
      Directories in an operating system track where files are stored, similar to folders 
      organizing papers. Different directory structures exist to suit organizational needs, 
      making file management and navigation simpler.
    </p>

    {/* Directory Types */}
    <h2 className="text-3xl font-bold mt-8">Types of Directory Structures</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Single-Level Directory</li>
      <li>Two-Level Directory</li>
      <li>Tree Structure / Hierarchical Structure</li>
      <li>Acyclic Graph Structure</li>
      <li>General-Graph Directory Structure</li>
    </ul>

    {/* Single-Level Directory */}
    <h3 className="text-2xl font-semibold mt-6">1) Single-Level Directory</h3>
    <p className="leading-relaxed">
      All files are contained in a single directory. Simple to implement, easy to search, 
      and fast for small numbers of files. Each file must have a unique name.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Advantages:</strong> Logical organization, efficiency, security, easy backup, scalable for small usage.</li>
      <li><strong>Disadvantages:</strong> Name collisions possible, inefficient for large directories, cannot group similar files.</li>
    </ul>

    {/* Two-Level Directory */}
    <h3 className="text-2xl font-semibold mt-6">2) Two-Level Directory</h3>
    <p className="leading-relaxed">
      Each user has a separate User File Directory (UFD) while a Master File Directory (MFD) 
      points to all UFDs. Prevents filename conflicts among users.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Advantages:</strong> Supports duplicate filenames for different users, enhances security, easier search.</li>
      <li><strong>Disadvantages:</strong> Users cannot share files easily, cannot create subdirectories, limited scalability.</li>
    </ul>

    {/* Tree Structure */}
    <h3 className="text-2xl font-semibold mt-6">3) Tree / Hierarchical Structure</h3>
    <p className="leading-relaxed">
      A tree with a root directory at the top containing user directories. Users can create 
      files and subdirectories inside their directory but cannot access root or other users' directories.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Advantages:</strong> Supports subdirectories, easier search, scalable, better file organization.</li>
      <li><strong>Disadvantages:</strong> File sharing limited, complex search if subdirectories increase, root modification restricted.</li>
    </ul>

    {/* Acyclic Graph Structure */}
    <h3 className="text-2xl font-semibold mt-6">4) Acyclic Graph Structure</h3>
    <p className="leading-relaxed">
      Allows files or directories to be shared across multiple directories using links. 
      Changes in a shared file are visible to all users accessing it.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Advantages:</strong> Supports file sharing, flexible access, easier searching.</li>
      <li><strong>Disadvantages:</strong> Complex to implement, users must be careful when editing/deleting shared files, deletion requires removing all references.</li>
    </ul>

    {/* General Graph Structure */}
    <h3 className="text-2xl font-semibold mt-6">5) General-Graph Directory Structure</h3>
    <p className="leading-relaxed">
      Allows cycles in directories (looping back). Offers more flexibility but increases implementation complexity.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Advantages:</strong> Highly flexible, supports cycles between directories.</li>
      <li><strong>Disadvantages:</strong> Expensive to implement, requires garbage collection for unused files/directories.</li>
    </ul>

  </div>
);

export default Home;
