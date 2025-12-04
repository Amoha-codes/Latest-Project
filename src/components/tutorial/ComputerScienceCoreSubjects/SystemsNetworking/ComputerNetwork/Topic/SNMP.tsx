import React from "react";

const SNMPTheory: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= SNMP ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Simple Network Management Protocol (SNMP)
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 03 Oct, 2025</p>

    {/* Introduction */}
    <p className="text-lg leading-relaxed">
      Simple Network Management Protocol (SNMP) is a widely used protocol for monitoring and managing network devices such as routers, switches, servers, printers, firewalls, and load balancers. 
      Operating at the application layer, SNMP allows administrators to monitor network performance, detect faults, and plan for growth.
    </p>

    {/* What is SNMP */}
    <h2 className="text-3xl font-bold mt-8">What is SNMP?</h2>
    <p className="leading-relaxed">
      SNMP is an Internet standard protocol that monitors and manages devices in IP networks. It typically uses UDP ports <strong>161</strong> for queries and <strong>162</strong> for traps.
    </p>

    {/* Architecture */}
    <h2 className="text-3xl font-bold mt-8">Architecture of SNMP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>SNMP Manager:</strong> Centralized system (Network Management Station, NMS) to monitor the network.</li>
      <li><strong>SNMP Agent:</strong> Software module on managed devices that stores information and responds to manager queries.</li>
      <li><strong>Management Information Base (MIB):</strong> Hierarchical collection of managed objects. Categories include system, interface, IP, TCP, UDP, ICMP, EGP, and address translation.</li>
    </ul>

    {/* SNMP Messages */}
    <h2 className="text-3xl font-bold mt-8">SNMP Messages</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>GetRequest:</strong> Retrieve data from an agent.</li>
      <li><strong>GetNextRequest:</strong> Retrieve the next entry in a table.</li>
      <li><strong>SetRequest:</strong> Set the value of an object on the agent.</li>
      <li><strong>Response:</strong> Confirmation from agent after SetRequest.</li>
      <li><strong>Trap:</strong> Unsolicited message from agent when a fault occurs.</li>
      <li><strong>InformRequest:</strong> Trap with acknowledgement, introduced in SNMPv2c.</li>
    </ul>

    {/* SNMP Security Levels */}
    <h2 className="text-3xl font-bold mt-8">SNMP Security Levels</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>noAuthNoPriv:</strong> Community string authentication, no encryption.</li>
      <li><strong>authNoPriv:</strong> Authentication using HMAC-MD5, no encryption.</li>
      <li><strong>authPriv:</strong> Authentication (HMAC-MD5/SHA) and encryption using DES-56.</li>
    </ul>

    {/* SNMP Versions */}
    <h2 className="text-3xl font-bold mt-8">Versions of SNMP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>SNMPv1:</strong> Community-based, UDP only, simple setup.</li>
      <li><strong>SNMPv2c:</strong> Community-based, supports UDP or TCP, improved MIB and protocol.</li>
      <li><strong>SNMPv3:</strong> Uses authentication and encryption (MD5/SHA, DES-56), supports TCP, most secure version.</li>
    </ul>

    {/* Characteristics */}
    <h2 className="text-3xl font-bold mt-8">Characteristics of SNMP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Monitors network devices.</li>
      <li>Detects network faults.</li>
      <li>Configures remote devices.</li>
      <li>Standardized information collection across multiple vendors.</li>
    </ul>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages of SNMP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Easy to implement.</li>
      <li>Widely deployed agents.</li>
      <li>Minimal agent overhead.</li>
      <li>Robust and extensible.</li>
      <li>Effective polling for LAN-based devices.</li>
      <li>Direct manager-agent interface.</li>
    </ul>

    {/* Limitations */}
    <h2 className="text-3xl font-bold mt-8">Limitations of SNMP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Poor scalability.</li>
      <li>No object-oriented data view.</li>
      <li>Lack of standardized control definitions.</li>
      <li>Many private MIB extensions exist.</li>
      <li>High communication overhead due to polling.</li>
    </ul>

    {/* Conclusion */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      SNMP is a crucial protocol for managing and monitoring network-connected devices. It allows administrators to track performance, detect errors, and configure remote devices efficiently. 
      While its simplicity and popularity offer advantages, challenges like scalability and communication overhead remain. Despite these drawbacks, SNMP continues to be an essential tool in network management.
    </p>

  </div>
);

export default SNMPTheory;
