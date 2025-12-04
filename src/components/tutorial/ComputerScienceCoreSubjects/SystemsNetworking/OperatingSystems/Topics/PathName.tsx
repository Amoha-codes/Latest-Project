import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Path Name in File Directory ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Path Name in File Directory
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 25 Oct, 2025</p>

    {/* Intro */}
    <p className="text-lg leading-relaxed">
      In a file system organized as a directory tree, <strong>path names</strong> uniquely identify 
      and access files or directories. A path name specifies the location of a file or directory 
      in the file system hierarchy. There are two main types:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Absolute Path Name</li>
      <li>Relative Path Name</li>
    </ul>

    {/* Absolute Path Name */}
    <h2 className="text-3xl font-bold mt-8">Absolute Path Name</h2>
    <p className="leading-relaxed">
      An <strong>absolute path</strong> specifies the complete path from the root directory ("/") 
      to the target file or directory. It is unique and independent of the current working directory.
    </p>
    <p className="leading-relaxed"><strong>Examples:</strong></p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>UNIX/Linux: <code>/usr/ast/mailbox</code></li>
      <li>Windows: <code>C:\usr\ast\mailbox</code></li>
    </ul>
    <p className="leading-relaxed">
      Key features:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Always starts from the root.</li>
      <li>Unique across the system.</li>
      <li>Works regardless of the current directory.</li>
    </ul>
    <p className="leading-relaxed"><strong>Example command in UNIX:</strong></p>
    <pre className="bg-gray-400 p-2 rounded">
      cp /usr/ast/mailbox /usr/ast/mailbox.bak
    </pre>

    {/* Relative Path Name */}
    <h2 className="text-3xl font-bold mt-8">Relative Path Name</h2>
    <p className="leading-relaxed">
      A <strong>relative path</strong> specifies the location of a file relative to the current 
      working directory (CWD). It is shorter and more flexible than an absolute path.
    </p>
    <p className="leading-relaxed"><strong>Example:</strong></p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Current working directory: <code>/usr/ast</code></li>
      <li>Relative reference to mailbox: <code>mailbox</code></li>
    </ul>
    <p className="leading-relaxed"><strong>Example command in UNIX:</strong></p>
    <pre className="bg-gray-400 p-2 rounded">
      cp mailbox mailbox.bak
    </pre>

    {/* Working Directory */}
    <h3 className="text-2xl font-semibold mt-8">Working Directory</h3>
    <p className="leading-relaxed">
      The working directory is the default directory for all relative path operations.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>View it using: <code>pwd</code></li>
      <li>Change it using: <code>cd /usr/ast</code></li>
    </ul>

    {/* Absolute vs Relative Path Comparison */}
    <h3 className="text-2xl font-semibold mt-8">Absolute vs Relative Path</h3>
    <table className="table-auto border-collapse border border-gray-300 w-full text-left mt-2">
      <thead>
        <tr className="bg-gray-400">
          <th className="border px-4 py-2">Criteria</th>
          <th className="border px-4 py-2">Absolute Path</th>
          <th className="border px-4 py-2">Relative Path</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border px-4 py-2">Definition</td><td className="border px-4 py-2">Full path from root directory</td><td className="border px-4 py-2">Path relative to current working directory</td></tr>
        <tr><td className="border px-4 py-2">Dependency</td><td className="border px-4 py-2">Independent of working directory</td><td className="border px-4 py-2">Depends on working directory</td></tr>
        <tr><td className="border px-4 py-2">Uniqueness</td><td className="border px-4 py-2">Always unique</td><td className="border px-4 py-2">May vary depending on current directory</td></tr>
        <tr><td className="border px-4 py-2">Usage</td><td className="border px-4 py-2">Used in scripts or programs requiring fixed file references</td><td className="border px-4 py-2">Used in user-level commands or local navigation</td></tr>
        <tr><td className="border px-4 py-2">Example (UNIX)</td><td className="border px-4 py-2">/usr/lib/dictionary</td><td className="border px-4 py-2">../lib/dictionary</td></tr>
      </tbody>
    </table>

    {/* Why Absolute Paths */}
    <h3 className="text-2xl font-semibold mt-8">Why Use Absolute Path Names</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Ensures certainty about the file’s location.</li>
      <li>Scripts or programs may run in different working directories.</li>
      <li>Access system-wide or shared files.</li>
      <li>Useful for automated tasks (cron jobs, daemons) where CWD may vary.</li>
    </ul>
    <p className="leading-relaxed">
      Example: Spell-checking program requiring dictionary file at <code>/usr/lib/dictionary</code>.
    </p>

  </div>
);

export default Home;
