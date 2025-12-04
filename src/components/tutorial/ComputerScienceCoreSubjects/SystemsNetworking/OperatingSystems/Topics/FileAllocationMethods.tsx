import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= File Allocation Methods ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      File Allocation Methods
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 12 Sep, 2025</p>

    {/* Intro */}
    <p className="text-lg leading-relaxed">
      File allocation methods define how files are stored in disk blocks. The three main methods are:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Contiguous Allocation</li>
      <li>Linked Allocation</li>
      <li>Indexed Allocation</li>
    </ul>
    <p className="leading-relaxed">
      The main goal is to provide efficient disk space utilization and fast file access.
    </p>

    {/* Contiguous Allocation */}
    <h2 className="text-3xl font-bold mt-6">1) Contiguous Allocation</h2>
    <p className="leading-relaxed">
      Each file occupies a contiguous set of disk blocks. The directory entry stores the starting block and the length of the file.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Example:</strong> If a file needs n blocks starting at block b, it occupies blocks b, b+1, b+2,..., b+n-1.</li>
      <li><strong>Advantages:</strong> Supports sequential and direct access, very fast as blocks are contiguous.</li>
      <li><strong>Disadvantages:</strong> Suffers from internal and external fragmentation; growing files require contiguous free space.</li>
    </ul>

    {/* Linked Allocation */}
    <h2 className="text-3xl font-bold mt-6">2) Linked Allocation</h2>
    <p className="leading-relaxed">
      Each file is a linked list of disk blocks. Blocks can be scattered across the disk, and each block contains a pointer to the next.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Advantages:</strong> Flexible file size, no external fragmentation.</li>
      <li><strong>Disadvantages:</strong> Sequential access only, many disk seeks needed, pointers incur overhead.</li>
    </ul>

    {/* Indexed Allocation */}
    <h2 className="text-3xl font-bold mt-6">3) Indexed Allocation</h2>
    <p className="leading-relaxed">
      A special index block contains pointers to all file blocks. Directory entry points to the index block.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Advantages:</strong> Supports direct access, eliminates external fragmentation.</li>
      <li><strong>Disadvantages:</strong> Pointer overhead higher than linked allocation; inefficient for very small files.</li>
    </ul>

    {/* Indexing Schemes for Large Files */}
    <h3 className="text-2xl font-semibold mt-6">Indexing Schemes for Large Files</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Linked Scheme:</strong> Multiple index blocks linked; each block points to data blocks and next index block.</li>
      <li><strong>Multilevel Index:</strong> Hierarchy of index blocks; first-level points to second-level, which point to data blocks. Can extend to multiple levels.</li>
      <li><strong>Combined Scheme (Inode Structure):</strong> Inode stores file metadata and block pointers:
        <ul className="list-disc ml-6">
          <li>Direct Pointers: Directly to data blocks (e.g., first 10).</li>
          <li>Single Indirect Pointer: Points to a block holding more pointers.</li>
          <li>Double Indirect Pointer: Points to block with pointers to indirect blocks.</li>
          <li>Triple Indirect Pointer: Adds another indirection layer for very large files.</li>
        </ul>
      </li>
    </ul>
    <p className="leading-relaxed">
      <strong>Why Combined Scheme is Preferred:</strong> Combines direct access for small files (faster) with scalability for large files. Widely used in modern Linux filesystems like ext2, ext3, ext4.
    </p>

  </div>
);

export default Home;
