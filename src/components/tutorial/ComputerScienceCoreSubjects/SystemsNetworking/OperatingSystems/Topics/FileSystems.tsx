import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= File Systems ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      File Systems in Operating System
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 17 Sep, 2025</p>

    {/* Intro */}
    <p className="text-lg leading-relaxed">
      File systems provide a structured way to store, organize, and manage data on storage devices 
      such as HDDs, SSDs, and USB drives. They act as a bridge between the operating system 
      and physical storage, enabling users and applications to perform CRUD operations efficiently.
    </p>

    {/* Layers of File System */}
    <h2 className="text-3xl font-bold mt-8">Layers of a File System</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>User Application:</strong> Programs requesting file operations (read, write, delete).</li>
      <li><strong>Logical File System:</strong> Manages metadata, file names, directories, and access permissions.</li>
      <li><strong>Virtual File System (VFS):</strong> Provides a uniform interface to different file systems.</li>
      <li><strong>Physical File System:</strong> Handles actual storage of data blocks on the disk.</li>
      <li><strong>Partitions:</strong> Divisions of the storage device where files are physically stored.</li>
    </ul>

    {/* Popular File Systems */}
    <h2 className="text-3xl font-bold mt-8">Popular File Systems</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>FAT (File Allocation Table) – Older Windows and legacy systems</li>
      <li>NTFS (New Technology File System) – Modern Windows with permissions, compression, and encryption</li>
      <li>ext (Extended File System) – Linux/Unix-based systems</li>
      <li>HFS (Hierarchical File System) – macOS</li>
      <li>APFS (Apple File System) – Modern macOS and iOS devices</li>
    </ul>

    {/* File Naming */}
    <h2 className="text-3xl font-bold mt-8">File Naming</h2>
    <p className="leading-relaxed">
      File names are usually divided into two parts: <strong>Name</strong> and <strong>Extension</strong>, separated by a period.
    </p>

    {/* File Directories */}
    <h2 className="text-3xl font-bold mt-8">File Directories</h2>
    <p className="leading-relaxed">
      A directory is a collection of files and contains information like attributes, location, and more. 
      Directories themselves are treated as files by the operating system and can be accessed via file management routines.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Advantages of Directories</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Efficiency:</strong> Quick file lookup.</li>
      <li><strong>Naming:</strong> Unique or duplicate file names managed conveniently.</li>
      <li><strong>Grouping:</strong> Logical grouping based on file types or properties.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Directory Structures</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Single-Level Directory: One directory for all users.</li>
      <li>Two-Level Directory: Separate directories for each user.</li>
      <li>Tree-Structured Directory: Hierarchical tree structure; supports absolute and relative paths, efficient searching, and grouping.</li>
    </ul>

    {/* File Allocation */}
    <h2 className="text-3xl font-bold mt-8">File Allocation Methods</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Continuous Allocation</li>
      <li>Linked Allocation (Non-contiguous)</li>
      <li>Indexed Allocation</li>
    </ul>

    {/* Disk Free Space Management */}
    <h2 className="text-3xl font-bold mt-8">Disk Free Space Management</h2>
    <p className="leading-relaxed">
      To allocate files, the OS must track free blocks on the disk. Common methods include:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Bit Tables:</strong> Vector with 0 for free block, 1 for allocated block.</li>
      <li><strong>Free Block List:</strong> Sequential list of free block numbers stored in a reserved disk block.</li>
      <li><strong>Linked List:</strong> Free blocks linked together; each stores the next free block address.</li>
      <li><strong>Boundary Tags:</strong> Each block has a tag indicating size and whether it is free or occupied.</li>
    </ul>

  </div>
);

export default Home;
