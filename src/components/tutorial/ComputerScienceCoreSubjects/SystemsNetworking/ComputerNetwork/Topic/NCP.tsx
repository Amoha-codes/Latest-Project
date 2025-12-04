import React from "react";

const NovellNetWare: React.FC = () => {
  return (
    <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-2">
        Introduction of Novell NetWare
      </h1>
      <p className="text-sm text-gray-500">Last Updated : 03 Oct, 2025</p>

      {/* Intro */}
      <p className="text-lg leading-relaxed">
        Novell NetWare is a type of <strong>Network Operating System (NOS)</strong> that provides wide networking services, ranging from simple file sharing to user, data, security, and resource management. 
        It is primarily designed for Local Area Networks (LANs). Novell NetWare was widely used in the PC world, especially for companies transitioning from mainframe systems to networks of PCs. 
        It has low hardware requirements and includes memory protection to keep individual processes safe from each other. 
        Although now discontinued, Novell NetWare remains one of the historically powerful network operating systems. 
        Novell NetWare 6.5 is one of its most recent versions.
      </p>

      {/* Protocols Section */}
      <h2 className="text-3xl font-bold mt-8">Protocols in Novell NetWare</h2>
      <ul className="list-disc ml-6 mt-2 space-y-1">
        <li>
          <strong>Internet Packet Exchange (IPX)</strong> – A network layer protocol that runs a connectionless internetwork protocol. 
          IPX is used for routing packets from one network node to another across an internetwork.
        </li>
        <li>
          <strong>NetWare Core Protocol (NCP)</strong> – A client-server protocol used mainly for LANs. 
          NCP connects with NetWare operating systems and also works with UNIX, Linux, and Windows NT.
        </li>
        <li>
          <strong>Sequenced Packet Exchange (SPX)</strong> – Handles packet sequencing in Novell NetWare networks. 
          SPX is now largely considered a legacy protocol, replaced by TCP/IP.
        </li>
      </ul>

      {/* Features Section */}
      <h2 className="text-3xl font-bold mt-8">Features of Novell NetWare</h2>
      <ul className="list-disc ml-6 mt-2 space-y-1">
        <li>
          <strong>Directory Service</strong> – Novell Directory Service (NDS) is a distributed directory for managing users, servers, and peripherals. 
          NDS provides resource access and authentication. Types of directory services include Bindery, NDS, and eDirectory.
        </li>
        <li>
          <strong>User Interface</strong> – Simple interface allowing easy interaction between the user and computer system.
        </li>
        <li>
          <strong>Hardware Requirements</strong> – Minimal hardware devices are required to run this network operating system.
        </li>
        <li>
          <strong>Interoperability</strong> – Improves the ability of computer systems and software to exchange and use information with various types of systems.
        </li>
      </ul>
    </div>
  );
};

export default NovellNetWare;
