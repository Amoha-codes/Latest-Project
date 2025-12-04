import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= File Access Methods ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      File Access Methods
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 12 Sep, 2025</p>

    <p className="text-lg leading-relaxed">
      File access methods define how an OS reads and writes data in files. They affect data organization, retrieval, and modification. The main methods are:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Sequential Access</li>
      <li>Direct Access</li>
      <li>Index Sequential Method</li>
      <li>Relative Record Access</li>
      <li>Content Addressable Access</li>
    </ul>

    {/* Sequential Access */}
    <h2 className="text-3xl font-bold mt-6">1) Sequential Access</h2>
    <p className="leading-relaxed">
      Data is read or written one record after another, starting from the beginning. The file pointer moves forward automatically after each operation.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Simple to implement, uses lexicographic order.</li>
      <li>Less prone to corruption.</li>
      <li>Disadvantages: Slow for specific searches, hard to insert/update in the middle, may waste storage for variable-length records.</li>
    </ul>

    {/* Direct Access */}
    <h2 className="text-3xl font-bold mt-6">2) Direct Access</h2>
    <p className="leading-relaxed">
      Data can be read or written directly at any block using its address. Supports random access without scanning previous records.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Advantages: Immediate access, faster average access time.</li>
      <li>Disadvantages: Complex implementation, extra storage for location information.</li>
    </ul>

    {/* Index Sequential Method */}
    <h2 className="text-3xl font-bold mt-6">3) Index Sequential Method</h2>
    <p className="leading-relaxed">
      Built on sequential access, with an index pointing to file blocks. Similar to a book index for quick lookups.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Advantages: Fast searching, supports both sequential & random access, reduced access time for large files.</li>
      <li>Disadvantages: Complex to implement, extra storage for index, slower updates as both data and index must be updated.</li>
    </ul>

    {/* Relative Record Access */}
    <h2 className="text-3xl font-bold mt-6">4) Relative Record Access</h2>
    <p className="leading-relaxed">
      Records are accessed relative to the current file pointer position. Efficient for accessing individual records.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Advantages: Random access, faster retrieval, useful for sequential processing.</li>
      <li>Disadvantages: Fixed record length required, low flexibility, limited for frequent updates.</li>
    </ul>

    {/* Content Addressable Access */}
    <h2 className="text-3xl font-bold mt-6">5) Content Addressable Access (CAA)</h2>
    <p className="leading-relaxed">
      Access is based on record content using a hash function that generates unique keys for each record/block.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Advantages: Efficient search for large databases, flexible insertion/deletion, ensures data integrity.</li>
      <li>Disadvantages: Extra overhead for hash calculation, possible key collisions, limited key space.</li>
    </ul>

  </div>
);

export default Home;
