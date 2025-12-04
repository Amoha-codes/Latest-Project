import React from "react";

const SSL: React.FC = () => {
  return (
    <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-2">
        Secure Socket Layer (SSL)
      </h1>
      <p className="text-sm text-gray-500">Last Updated : 15 Oct, 2025</p>

      {/* Introduction */}
      <p className="text-lg leading-relaxed">
        Secure Sockets Layer (SSL) is an Internet security protocol that encrypts data to ensure secure communication between devices over a network. 
        Originally developed by Netscape in 1995, SSL provides <strong>privacy, authentication, and data integrity</strong> for online communications. 
        SSL is the predecessor of TLS (Transport Layer Security), which is now the standard protocol for secure communications on the Internet.
      </p>

      {/* Note */}
      <p className="text-md leading-relaxed text-gray-600">
        <strong>Note:</strong> Websites using SSL/TLS display "HTTPS" in their URLs instead of "HTTP," indicating that communications are encrypted and secure.
      </p>

      {/* Working */}
      <h2 className="text-3xl font-bold mt-8">Working of SSL</h2>
      <ul className="list-disc ml-6 mt-2 space-y-1">
        <li>
          <strong>Encryption:</strong> Data transmitted over the network is encrypted, preventing unauthorized parties from reading it.
        </li>
        <li>
          <strong>Authentication:</strong> SSL uses a handshake process to authenticate both the client and server, ensuring each party is legitimate.
        </li>
        <li>
          <strong>Data Integrity:</strong> SSL digitally signs transmitted data to detect any tampering, ensuring the data received is exactly what was sent.
        </li>
      </ul>

      {/* Importance */}
      <h2 className="text-3xl font-bold mt-8">Importance of SSL</h2>
      <p className="leading-relaxed">
        Before SSL, web data was transmitted in plaintext, making it vulnerable to interception. SSL solves this by encrypting sensitive information such as login credentials, financial transactions, and personal data, authenticating web servers, and ensuring data integrity.
      </p>

      {/* SSL Protocols */}
      <h2 className="text-3xl font-bold mt-8">SSL Protocols</h2>
      <ul className="list-disc ml-6 mt-2 space-y-1">
        <li>
          <strong>SSL Record Protocol:</strong> Provides confidentiality and message integrity. Application data is divided into fragments, optionally compressed, appended with a MAC, encrypted, and transmitted with an SSL header.
        </li>
        <li>
          <strong>Handshake Protocol:</strong> Establishes SSL sessions and authenticates clients and servers. Four phases: 
          exchanging hello packets, server certificate exchange, client response and key exchange, and Change Cipher Spec activation.
        </li>
        <li>
          <strong>Change-Cipher Spec Protocol:</strong> Signals that cryptographic parameters from the handshake should now become active. It consists of a single 1-byte message.
        </li>
        <li>
          <strong>Alert Protocol:</strong> Communicates SSL warnings or errors. Level 1 (Warning) for non-critical issues, Level 2 (Fatal) for critical errors that terminate the connection.
        </li>
      </ul>

      {/* Versions */}
      <h2 className="text-3xl font-bold mt-8">Versions of SSL/TLS</h2>
      <ul className="list-disc ml-6 mt-2 space-y-1">
        <li>SSL 1 – Never released, insecure</li>
        <li>SSL 2 – 1995, first public release</li>
        <li>SSL 3 – 1996, improved security</li>
        <li>TLS 1.0 – 1999, successor to SSL 3.0</li>
        <li>TLS 1.1 – 2006, improved encryption and security</li>
        <li>TLS 1.2 – 2008, widely adopted, strong encryption</li>
        <li>TLS 1.3 – 2018, modern, efficient, secure protocol</li>
      </ul>

      {/* SSL Certificates */}
      <h2 className="text-3xl font-bold mt-8">SSL Certificates</h2>
      <p className="leading-relaxed">
        SSL certificates are digital certificates issued by trusted Certificate Authorities (CAs) to secure and verify websites. They provide encryption, authentication, data integrity, non-repudiation, public-key cryptography, and session management.
      </p>

      {/* Types */}
      <h3 className="text-2xl font-semibold mt-4">Types of SSL Certificates</h3>
      <ul className="list-disc ml-6 mt-2 space-y-1">
        <li>Single-Domain – Secures one domain.</li>
        <li>Wildcard – Secures one domain and all its subdomains.</li>
        <li>Multi-Domain – Secures multiple unrelated domains in one certificate.</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-4">Validation Levels</h3>
      <ul className="list-disc ml-6 mt-2 space-y-1">
        <li>Domain Validation (DV) – Confirms domain ownership.</li>
        <li>Organization Validation (OV) – Confirms organization identity.</li>
        <li>Extended Validation (EV) – Rigorous verification, highest trust level, often indicated by a green address bar.</li>
      </ul>

      {/* SSL vs TLS */}
      <h2 className="text-3xl font-bold mt-8">SSL vs TLS</h2>
      <p className="leading-relaxed">
        SSL is the older protocol and is no longer considered secure. TLS is the updated and more secure version. Despite TLS being the standard, the term "SSL" is still widely used in marketing and casual references.
      </p>
    </div>
  );
};

export default SSL;
