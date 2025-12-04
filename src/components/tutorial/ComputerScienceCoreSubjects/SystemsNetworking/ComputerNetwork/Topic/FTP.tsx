import React from "react";

const FTPTheory: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= File Transfer Protocol ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      File Transfer Protocol (FTP) in Application Layer
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 28 Dec, 2024</p>

    {/* Introduction */}
    <p className="text-lg leading-relaxed">
      FTP or File Transfer Protocol is one of the earliest and most common methods of transferring files on the internet. 
      Located in the application layer of the OSI model, FTP transfers files reliably and efficiently between a client and a server, 
      even if the systems have different file structures or operating systems. Unlike HTTP, which deals with hypertexts, FTP focuses on transferring text, binary, or image files.
    </p>

    {/* What is FTP */}
    <h2 className="text-3xl font-bold mt-8">What is File Transfer Protocol?</h2>
    <p className="leading-relaxed">
      FTP is a standard communication protocol that efficiently transfers files between heterogeneous systems. It supports ASCII, EBCDIC, and image file formats.
    </p>

    {/* Types of FTP */}
    <h2 className="text-3xl font-bold mt-8">Types of FTP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Anonymous FTP:</strong> Public files accessed without username/password. Limited permissions (e.g., copy files).</li>
      <li><strong>Password Protected FTP:</strong> Requires login credentials.</li>
      <li><strong>FTP Secure (FTPS):</strong> Uses TLS/SSL for secure data transfer.</li>
      <li><strong>FTP over Explicit SSL/TLS (FTPES):</strong> Upgrades connection from port 21 to encrypted connection.</li>
      <li><strong>Secure FTP (SFTP):</strong> Works via SSH (port 22), not a traditional FTP protocol.</li>
    </ul>

    {/* Uses of FTP */}
    <h2 className="text-3xl font-bold mt-8">Uses of FTP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Transferring large files efficiently.</li>
      <li>Remote file management: upload, download, delete, rename, copy.</li>
      <li>Automating file transfers using scripts.</li>
      <li>Accessing public files via anonymous FTP.</li>
    </ul>

    {/* How to use FTP */}
    <h2 className="text-3xl font-bold mt-8">How to Use FTP</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Connect to the FTP server using credentials (or anonymously).</li>
      <li>Navigate directories (e.g., <code>ls</code>, <code>cd</code>).</li>
      <li>Transfer files (<code>get</code> for download, <code>put</code> for upload).</li>
      <li>Manage files (delete, rename, copy).</li>
      <li>Close the connection (<code>bye</code> or <code>quit</code>).</li>
    </ol>

    {/* How FTP works */}
    <h2 className="text-3xl font-bold mt-8">How FTP Works</h2>
    <p className="leading-relaxed">
      FTP is a client-server protocol with two communication channels:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Control Channel:</strong> For sending commands and user authentication (port 21).</li>
      <li><strong>Data Channel:</strong> For transferring the actual file content (port 20).</li>
    </ul>

    {/* Types of Connections */}
    <h2 className="text-3xl font-bold mt-8">Types of Connections in FTP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Control Connection:</strong> Handles commands and user authentication.</li>
      <li><strong>Data Connection:</strong> Handles actual file transfer.</li>
    </ul>

    {/* FTP Clients */}
    <h2 className="text-3xl font-bold mt-8">FTP Clients</h2>
    <p className="leading-relaxed">
      FTP clients run on a user’s computer to interact with remote servers. Common commands include:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><code>get filename</code> – download a file.</li>
      <li><code>mget filename</code> – download multiple files.</li>
      <li><code>ls</code> – list files in the server directory.</li>
    </ul>

    {/* FTP Data Types */}
    <h2 className="text-3xl font-bold mt-8">FTP Data Types</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>ASCII:</strong> Text files with end-of-line markers.</li>
      <li><strong>EBCDIC:</strong> IBM character set text files.</li>
      <li><strong>Image:</strong> Binary files transferred byte by byte.</li>
      <li><strong>Local:</strong> Files with logical bytes other than 8-bit.</li>
    </ul>

    {/* FTP Replies */}
    <h2 className="text-3xl font-bold mt-8">FTP Replies</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>200 – Command okay</li>
      <li>530 – Not logged in</li>
      <li>331 – Username okay, need password</li>
      <li>221 – Service closing control connection</li>
      <li>551 – Requested action aborted: page type unknown</li>
      <li>502 – Command not implemented</li>
      <li>503 – Bad sequence of commands</li>
      <li>504 – Command not implemented for that parameter</li>
    </ul>

    {/* Advantages and Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages of FTP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Fast and efficient file transfers.</li>
      <li>Supports file sharing between multiple users.</li>
      <li>Provides login-based access for security.</li>
      <li>Allows bidirectional file movement.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Disadvantages of FTP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>File size limit (usually 2GB).</li>
      <li>Single recipient only; no multicast.</li>
      <li>Data is not encrypted (security risk).</li>
      <li>Vulnerable to attacks despite username/password login.</li>
    </ul>

    {/* Difference Between FTP and SFTP */}
    <h2 className="text-3xl font-bold mt-8">Difference Between FTP and SFTP</h2>
    <table className="table-auto border-collapse border border-gray-400 w-full">
      <thead>
        <tr>
          <th className="border px-4 py-2">FTP</th>
          <th className="border px-4 py-2">SFTP</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">File Transfer Protocol</td>
          <td className="border px-4 py-2">Secure File Transfer Protocol</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">No secure channel</td>
          <td className="border px-4 py-2">Uses secure channel via SSH</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Port 21</td>
          <td className="border px-4 py-2">Port 22</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Does not encrypt data</td>
          <td className="border px-4 py-2">Encrypts data before sending</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Simple file transfers</td>
          <td className="border px-4 py-2">Secure transfers using SSH keys</td>
        </tr>
      </tbody>
    </table>

    {/* Conclusion */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      FTP remains a powerful method for transferring files and automating transfers.  
      However, due to security vulnerabilities like clear-text passwords and lack of encryption, safer alternatives like SFTP or FTPS are recommended for sensitive data.
    </p>

  </div>
);

export default FTPTheory;
