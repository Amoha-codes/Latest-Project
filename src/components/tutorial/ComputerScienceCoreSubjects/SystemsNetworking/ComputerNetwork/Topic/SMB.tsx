import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= SMB ENUMERATION ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      SMB Enumeration
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Jul, 2025</p>

    {/* Introduction */}
    <p className="text-lg leading-relaxed">
      SMB (Server Message Block) is a client–server communication protocol used
      for sharing access to files, printers, serial ports, and other network
      resources. SMB enumeration is the process of gathering information from a
      target system such as hostnames, shared folders, null session checks,
      users, and potential vulnerabilities.
    </p>

    {/* Stages */}
    <h2 className="text-3xl font-bold mt-8">SMB Enumeration Stages</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Hostname Enumeration</li>
      <li>List Shares</li>
      <li>Checking Null Session</li>
      <li>List Users</li>
      <li>Vulnerability Scanning</li>
      <li>Overall Scanning</li>
    </ul>

    {/* Hostname Enumeration */}
    <h2 className="text-3xl font-bold mt-8">SMB Enumeration for Hostname</h2>
    <p className="leading-relaxed">
      Tools like <strong>nmblookup</strong> and <strong>nbtscan</strong> are commonly used.
      Nmblookup queries NetBIOS names and maps them to IP addresses.
    </p>

    <h3 className="text-2xl font-semibold mt-6">1. nmblookup</h3>
    <pre className="bg-gray-400 p-4 rounded-lg text-sm">
      $ nmblookup -A &lt;Target IP&gt;
    </pre>
    <p className="leading-relaxed">
      Example output shows the hostname resolved to <strong>CAJA</strong>.
    </p>

    <h3 className="text-2xl font-semibold mt-6">2. nbtscan</h3>
    <pre className="bg-gray-400 p-4 rounded-lg text-sm">
      $ nbtscan &lt;Target IP&gt;
    </pre>
    <p className="leading-relaxed">
      Output also identifies the hostname as <strong>CAJA</strong>.
    </p>

    {/* Share & Null Session */}
    <h2 className="text-3xl font-bold mt-8">
      SMB Enumeration for Share and Null Session
    </h2>
    <p className="leading-relaxed">
      Enumeration of shared folders can be performed using tools like smbmap,
      smbclient, Nmap, and Metasploit.
    </p>

    {/* smbmap */}
    <h3 className="text-2xl font-semibold mt-6">1. smbmap</h3>
    <p className="leading-relaxed">
      Smbmap enumerates SMB share drives, permissions, and upload/download
      functionality.
    </p>
    <pre className="bg-gray-400 p-4 rounded-lg text-sm">
      $ smbmap -H &lt;Target IP&gt;
    </pre>
    <p className="leading-relaxed">
      To scan using credentials:
    </p>
    <pre className="bg-gray-400 p-4 rounded-lg text-sm">
      $ smbmap -H &lt;Target IP&gt; -u username -p password
    </pre>

    {/* smbclient */}
    <h3 className="text-2xl font-semibold mt-6">2. smbclient</h3>
    <p className="leading-relaxed">
      Smbclient is a Samba client used to test connectivity to Windows shares.
    </p>
    <pre className="bg-gray-400 p-4 rounded-lg text-sm">
      $ smbclient -L &lt;Target IP&gt;
    </pre>

    {/* Nmap share enumeration */}
    <h3 className="text-2xl font-semibold mt-6">3. Nmap (smb-enum-shares)</h3>
    <pre className="bg-gray-400 p-4 rounded-lg text-sm">
      $ nmap --script smb-enum-shares -p 139,445 &lt;Target IP&gt;
    </pre>
    <p className="leading-relaxed">
      This scans for SMB shares. In the example, no shares were found.
    </p>

    {/* Metasploit */}
    <h3 className="text-2xl font-semibold mt-6">4. Metasploit (smb_enumshares)</h3>
    <pre className="bg-gray-400 p-4 rounded-lg text-sm">
{`msf6> use auxiliary/scanner/smb/smb_enumshares
msf6> set rhosts <Target IP>
msf6> set smbuser <username>
msf6> set smbpass <password>
msf6> exploit`}
    </pre>

    {/* Vulnerability Scanning */}
    <h2 className="text-3xl font-bold mt-8">
      SMB Enumeration for Vulnerability Scanning
    </h2>
    <p className="leading-relaxed">
      Nmap’s <strong>smb-vuln*</strong> scripts can detect multiple SMB vulnerabilities.
    </p>

    <pre className="bg-gray-400 p-4 rounded-lg text-sm">
      $ sudo nmap --script smb-vuln* -p 139,445 &lt;Target IP&gt;
    </pre>

    <p className="leading-relaxed">
      Example output shows no vulnerabilities were detected.
    </p>

    {/* Enum4Linux */}
    <h2 className="text-3xl font-bold mt-8">SMB Enumeration using Enum4Linux</h2>
    <p className="leading-relaxed">
      Enum4linux can extract data from Windows, Linux, and other SMB hosts.
    </p>
    <pre className="bg-gray-400 p-4 rounded-lg text-sm">
      $ enum4linux -U &lt;Target IP&gt;
    </pre>

    <p className="leading-relaxed">
      The result includes a list of all user information found on the system.
    </p>

  </div>
);

export default Home;
