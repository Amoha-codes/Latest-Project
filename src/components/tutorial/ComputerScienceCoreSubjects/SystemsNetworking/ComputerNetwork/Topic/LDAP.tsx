import React from "react";

const LDAPTheory: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= LDAP ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Lightweight Directory Access Protocol (LDAP)
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 21 Jun, 2019</p>

    {/* Introduction */}
    <p className="text-lg leading-relaxed">
      LDAP (Lightweight Directory Access Protocol) is an Internet protocol that operates over TCP/IP for accessing and managing directory information. It is commonly used to interact with Active Directory services or other directory servers.
    </p>

    {/* Features */}
    <h2 className="text-3xl font-bold mt-6">Features of LDAP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Simple and lightweight compared to older directory protocols.</li>
      <li>Uses strings to represent data.</li>
      <li>Organizes data hierarchically in directories similar to telephone directories.</li>
      <li>Supports distributed directory services.</li>
      <li>Provides operations for searching, adding, deleting, modifying entries, and updating distinguished names.</li>
    </ul>

    {/* LDAP Models */}
    <h2 className="text-3xl font-bold mt-6">LDAP Models</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Information Model:</strong> Defines structure of directory data. Entries represent objects (people, servers, organizations) with attributes and values.</li>
      <li><strong>Naming Model:</strong> Organizes entries in a hierarchical tree called Directory Information Tree (DIT). Each entry has a unique Distinguished Name (DN).</li>
      <li><strong>Functional Model:</strong> Defines LDAP operations in a language-independent way: Query, Update, and Authentication.</li>
      <li><strong>Security Model:</strong> Protects directory information from unauthorized access using BIND operations for authentication.</li>
    </ul>

    {/* Client-Server Interaction */}
    <h2 className="text-3xl font-bold mt-6">LDAP Client and Server Interaction</h2>
    <p className="leading-relaxed">
      LDAP follows a client-server architecture:
    </p>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Client sends a protocol request to the LDAP server.</li>
      <li>Server performs the requested operation (search, update, delete, etc.).</li>
      <li>Server sends a response back to the client.</li>
    </ol>
    <p className="leading-relaxed">
      Popular LDAP servers include Microsoft Active Directory, OpenLDAP, and Sun Directory Server. LDAP clients can be built using SDKs in languages like C, C++, Perl, and Java.
    </p>

    {/* LDAP Operations */}
    <h2 className="text-3xl font-bold mt-6">LDAP Operations</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Authentication:</strong> BIND, UNBIND, and Abandon operations establish and end client sessions securely.</li>
      <li><strong>Query:</strong> SEARCH and COMPARE operations retrieve information from the directory.</li>
      <li><strong>Update:</strong> ADD, DELETE, MODIFY, and MODIFY RDN operations update directory entries.</li>
    </ul>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-6">Advantages of LDAP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Directory data is accessible to multiple clients and libraries.</li>
      <li>Supports a wide range of applications.</li>
      <li>Provides basic security mechanisms for authentication and access control.</li>
    </ul>

    {/* Disadvantages */}
    <h2 className="text-3xl font-bold mt-6">Disadvantages of LDAP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Not suitable for handling relational database operations.</li>
    </ul>

  </div>
);

export default LDAPTheory;
