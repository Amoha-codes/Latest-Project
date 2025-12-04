import React from "react";

const HTTPSTheory: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= HTTPS ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      HyperText Transfer Protocol Secure (HTTPS)
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 16 Oct, 2025</p>

    {/* Introduction */}
    <p className="text-lg leading-relaxed">
      HTTPS (HyperText Transfer Protocol Secure) is the secure version of HTTP, used for communication between a web browser and a website. It ensures that data transfer is encrypted for security and privacy.
    </p>

    <p className="leading-relaxed">
      Any website requiring login or sensitive information should use HTTPS. A padlock icon in the URL bar indicates a secure page. Modern browsers, like Google Chrome, mark non-HTTPS websites as "Not Secure."
    </p>

    {/* Working of HTTPS */}
    <h2 className="text-3xl font-bold mt-8">How HTTPS Works</h2>
    <p className="leading-relaxed">
      HTTPS works by layering SSL/TLS (Secure Socket Layer / Transport Layer Security) over the HTTP protocol:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>HTTP transfers data as plain text, whereas HTTPS encrypts it for security.</li>
      <li>SSL/TLS ensures data confidentiality, integrity, and authentication during transmission.</li>
      <li>The workflow of HTTP remains the same, but all communication occurs over a secure channel.</li>
    </ul>

    {/* Importance */}
    <h2 className="text-3xl font-bold mt-8">Why HTTPS Matters</h2>
    <p className="leading-relaxed">
      HTTPS protects information from interception or tampering, especially over public networks. Without HTTPS, data packets can be easily captured and read.
    </p>
    <p className="leading-relaxed">
      Example:
      <br />
      Before encryption: "This is readable text"
      <br />
      After encryption: "ITM0IRyiEhVpa6VnKyExMiEgNveroyWBPlgGyfkflYjDaaFf/Kn3bo3OfghBPDWo6AfSHlNtL8N7ITEwIXc1gU5X73xMsJormzzXlwOyrCs+9XCPk63Y+z0="
    </p>

    {/* SSL */}
    <h2 className="text-3xl font-bold mt-8">Secure Socket Layer (SSL/TLS)</h2>
    <p className="leading-relaxed">
      SSL/TLS encrypts and decrypts data during transmission. HTTPS uses SSL certificates to establish a secure connection between client and server.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Ensures the browser communicates directly with the correct server.</li>
      <li>Ensures only the communicating parties can access the exchanged messages.</li>
    </ul>

    {/* Encryption */}
    <h2 className="text-3xl font-bold mt-8">Encryption in HTTPS</h2>
    <p className="leading-relaxed">
      HTTPS uses asymmetric encryption with public and private keys:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Private Key:</strong> Stored on the server, used to decrypt messages encrypted with the public key.</li>
      <li><strong>Public Key:</strong> Accessible to all users; used to encrypt messages sent to the server.</li>
    </ul>
    <p className="leading-relaxed">
      Algorithms used:
      <br />
      <strong>RSA:</strong> For secure key exchange during the TLS handshake.
      <br />
      <strong>SHA-256:</strong> For data integrity and digital signatures.
    </p>

    {/* HTTP vs HTTPS */}
    <h2 className="text-3xl font-bold mt-8">HTTP vs HTTPS</h2>
    <table className="table-auto border-collapse border border-gray-400 w-full text-left">
      <thead>
        <tr>
          <th className="border border-gray-400 px-4 py-2">HTTP</th>
          <th className="border border-gray-400 px-4 py-2">HTTPS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-400 px-4 py-2">HyperText Transfer Protocol</td>
          <td className="border border-gray-400 px-4 py-2">HyperText Transfer Protocol Secure</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">URL starts with "http://"</td>
          <td className="border border-gray-400 px-4 py-2">URL starts with "https://"</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Application layer</td>
          <td className="border border-gray-400 px-4 py-2">Transport layer (SSL/TLS)</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Faster speed</td>
          <td className="border border-gray-400 px-4 py-2">Slightly slower due to encryption</td>
        </tr>
      </tbody>
    </table>

  </div>
);

export default HTTPSTheory;
