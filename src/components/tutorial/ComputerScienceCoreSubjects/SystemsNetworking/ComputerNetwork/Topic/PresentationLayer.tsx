import React from "react";

const PresentationLayer: React.FC = () => {
  return (
    <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-2">
        Presentation Layer in OSI Model
      </h1>
      <p className="text-sm text-gray-500">Last Updated : 14 Oct, 2025</p>

      {/* Intro */}
      <p className="text-lg leading-relaxed">
        The <strong>Presentation Layer</strong> is the sixth layer of the OSI (Open Systems Interconnection) model. 
        It acts as a translator for the network, ensuring that the data exchanged between devices is in a format 
        both systems can understand. Because of its role in ensuring proper data representation, this layer is 
        often referred to as the <strong>Translation Layer</strong> or the <strong>Syntax Layer</strong>.
      </p>

      {/* Role */}
      <h2 className="text-3xl font-bold mt-8">Role of the Presentation Layer</h2>
      <p className="leading-relaxed">
        When the Application Layer generates data, the Presentation Layer converts it into a standard form that 
        can be transmitted across the network. Similarly, when data is received, it translates it into a format 
        the receiving system can process.
      </p>

      <p className="italic mt-2">
        Key highlights:
      </p>
      <ul className="list-disc ml-6 mt-1 space-y-1">
        <li>Maintains proper syntax and semantics of the data.</li>
        <li>Provides encryption and decryption for secure communication.</li>
        <li>Applies compression techniques to optimize bandwidth usage.</li>
        <li>Ensures compatibility between different systems and devices.</li>
      </ul>

      {/* Functions */}
      <h2 className="text-3xl font-bold mt-8">Functions of the Presentation Layer</h2>
      <ul className="list-decimal ml-6 mt-2 space-y-2">
        <li>Data Translation</li>
        <li>Data Compression</li>
        <li>Data Encryption/Decryption</li>
        <li>Syntax and Semantics Management</li>
        <li>Transfer Syntax Negotiation</li>
        <li>Interoperability</li>
      </ul>

      {/* Services */}
      <h2 className="text-3xl font-bold mt-8">Services Provided by the Presentation Layer</h2>
      <ul className="list-disc ml-6 mt-2 space-y-1">
        <li><strong>Compression:</strong> Reduces data size for faster transmission.</li>
        <li><strong>Encryption/Decryption:</strong> Protects data from unauthorized access.</li>
        <li><strong>Format Translation:</strong> Converts application-specific data into a standard format.</li>
        <li><strong>Compatibility:</strong> Makes communication possible between different operating systems and platforms.</li>
      </ul>

      {/* Working */}
      <h2 className="text-3xl font-bold mt-8">Working of the Presentation Layer</h2>
      <p className="leading-relaxed">
        The Presentation Layer works as an intermediary between the Application Layer (Layer 7) and the 
        Session Layer (Layer 5).
      </p>
      <ul className="list-disc ml-6 mt-1 space-y-1">
        <li>At the sender’s end: formats, encrypts, and compresses data from the Application Layer before sending it to the Session Layer.</li>
        <li>At the receiver’s end: decrypts, decompresses, and translates data into a readable form before delivering it to the Application Layer.</li>
      </ul>

      {/* Protocols */}
      <h2 className="text-3xl font-bold mt-8">Presentation Layer Protocols</h2>
      <ul className="list-disc ml-6 mt-2 space-y-1">
        <li>Apple Filing Protocol (AFP): File services protocol for macOS.</li>
        <li>Lightweight Presentation Protocol (LPP): Provides ISO presentation services over TCP/IP stacks.</li>
        <li>NetWare Core Protocol (NCP): Used in Novell NetWare for file and print services.</li>
        <li>Network Data Representation (NDR): Defines data types and representations for network communication.</li>
        <li>External Data Representation (XDR): Standard for describing and encoding data across different architectures.</li>
        <li>Secure Socket Layer (SSL): Provides encryption and secure communication between web browsers and servers.</li>
        <li>Transport Layer Security (TLS): The modern, more secure successor to SSL.</li>
      </ul>

      {/* Attacks */}
      <h2 className="text-3xl font-bold mt-8">Presentation Layer Attacks</h2>
      <p className="leading-relaxed">
        Since this layer deals with data formatting, compression, and encryption, it is often targeted by attackers. Common attacks include:
      </p>
      <ul className="list-disc ml-6 mt-1 space-y-1">
        <li>Man-in-the-Middle (MITM) Attacks: Interception of communication to steal sensitive data.</li>
        <li>SSL/TLS Downgrade Attacks: Forcing weaker encryption protocols.</li>
        <li>Certificate Spoofing: Using fake certificates to impersonate trusted entities.</li>
        <li>Code Injection: Exploiting vulnerabilities in data parsing or formatting.</li>
      </ul>
    </div>
  );
};

export default PresentationLayer;
