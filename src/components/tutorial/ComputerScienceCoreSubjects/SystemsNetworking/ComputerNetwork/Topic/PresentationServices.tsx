import React from "react";

const PresentationLayerServices: React.FC = () => {
  return (
    <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-2">
        Presentation Layer Services
      </h1>
      <p className="text-sm text-gray-500">Last Updated : 15 Oct, 2025</p>

      {/* Intro */}
      <p className="text-lg leading-relaxed">
        The <strong>Presentation Layer</strong> is the 6th layer in the Open System Interconnection (OSI) model. 
        It acts as the translator between the Application layer (Layer 7) and the lower layers of the OSI model. 
        Its main purpose is to ensure that the data sent from the sender’s system can be understood by the receiver’s 
        system, regardless of differences in encoding, encryption, or compression.
      </p>

      <p className="italic mt-2">
        Note: This is why the Presentation Layer is often referred to as the <strong>Translation Layer</strong>. 
        It bridges the gap between application-level data and lower-level transmission mechanisms.
      </p>

      {/* Core Services */}
      <h2 className="text-3xl font-bold mt-8">Core Services Offered by the Presentation Layer</h2>
      <p className="leading-relaxed">
        The Presentation Layer provides essential services that prepare, secure, and optimize data for transmission across networks:
      </p>

      {/* Service 1: Data Translation */}
      <h3 className="text-2xl font-semibold mt-4">1. Data Translation</h3>
      <p className="leading-relaxed">
        Different systems may use different encoding formats for data representation. The Presentation Layer translates data into a format 
        that the receiving system can interpret correctly.
      </p>
      <ul className="list-disc ml-6 mt-1 space-y-1">
        <li>Character coding systems: ASCII (American Standard Code for Information Interchange), EBCDIC (Extended Binary Coded Decimal Interchange Code)</li>
        <li>Example: If the sender uses ASCII and the receiver supports EBCDIC, the Presentation Layer converts ASCII-encoded data into EBCDIC.</li>
      </ul>

      {/* Service 2: Data Compression */}
      <h3 className="text-2xl font-semibold mt-4">2. Data Compression</h3>
      <p className="leading-relaxed">
        Reduces the size of transmitted data, optimizing bandwidth usage and improving transmission speed. The Presentation Layer compresses data at 
        the sender and decompresses it at the receiver.
      </p>
      <ul className="list-disc ml-6 mt-1 space-y-1">
        <li><strong>Lossless compression:</strong> No data is lost. Decompressed data is identical to the original (e.g., ZIP files for text).</li>
        <li><strong>Lossy compression:</strong> Sacrifices some data accuracy for higher compression efficiency (e.g., JPEG for images).</li>
      </ul>

      {/* Service 3: Data Encryption/Decryption */}
      <h3 className="text-2xl font-semibold mt-4">3. Data Encryption and Decryption</h3>
      <p className="leading-relaxed">
        To maintain data security, the Presentation Layer encrypts data before transmission and decrypts it upon reception.
      </p>
      <ul className="list-disc ml-6 mt-1 space-y-1">
        <li><strong>Encryption:</strong> Converts plaintext into ciphertext, unreadable to unauthorized users.</li>
        <li><strong>Decryption:</strong> Converts ciphertext back into plaintext at the receiver.</li>
        <li>Example: Protocols like SSL (Secure Sockets Layer) and TLS (Transport Layer Security) secure sensitive data like passwords and banking details.</li>
      </ul>

      {/* Service 4: Syntax and Semantics Management */}
      <h3 className="text-2xl font-semibold mt-4">4. Syntax and Semantics Management</h3>
      <p className="leading-relaxed">
        Ensures data is correctly structured (syntax) and meaningful (semantics) for the receiving system.
      </p>
      <ul className="list-disc ml-6 mt-1 space-y-1">
        <li><strong>Syntax management:</strong> Validates the structure or format of transmitted data.</li>
        <li><strong>Semantics management:</strong> Ensures the meaning of transmitted data remains intact.</li>
        <li>Example: Conversion between XML and JSON so applications can correctly interpret shared information.</li>
      </ul>

      {/* Limitations */}
      <h2 className="text-3xl font-bold mt-8">Limitations of the Presentation Layer</h2>
      <ul className="list-disc ml-6 mt-2 space-y-1">
        <li>Limited error handling: Relies on the Transport Layer for error detection and correction.</li>
        <li>Protocol dependency: Communication may fail if incompatible protocols or unsupported formats are used.</li>
        <li>Processing overhead: Extra workload due to encryption, compression, and translation.</li>
        <li>No direct communication control: Depends on lower layers for physical data transfer.</li>
        <li>Protocol constraints: Effectiveness is limited to supported standards like SSL/TLS, MIME, etc.</li>
      </ul>
    </div>
  );
};

export default PresentationLayerServices;
