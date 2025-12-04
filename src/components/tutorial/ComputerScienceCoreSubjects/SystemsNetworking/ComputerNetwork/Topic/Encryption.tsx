import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Encryption ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Encryption, Its Algorithms, And Its Future
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 16 Oct, 2025</p>

    {/* Introduction */}
    <p className="text-lg leading-relaxed">
      Encryption is a cryptographic process that transforms readable data (plaintext) 
      into an unreadable format (ciphertext) using an algorithm called a cipher. Only authorized 
      parties with the correct decryption key can convert it back to plaintext, ensuring 
      confidentiality, integrity, and security of sensitive information during storage and transmission.
    </p>

    {/* Components of Encryption */}
    <h2 className="text-3xl font-bold mt-8">Components of Encryption</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Plaintext:</strong> Original unencrypted message.</li>
      <li><strong>Encryption Algorithm:</strong> Process used to convert plaintext to ciphertext.</li>
      <li><strong>Encryption Key:</strong> Key used to encrypt and decrypt data.</li>
      <li><strong>Ciphertext:</strong> Encrypted version of plaintext.</li>
    </ul>

    {/* Features of Encryption */}
    <h2 className="text-3xl font-bold mt-8">Features of Encryption</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Confidentiality:</strong> Only authorized users can access data.</li>
      <li><strong>Integrity:</strong> Prevents unauthorized alteration of data.</li>
      <li><strong>Authentication:</strong> Confirms the identity of the sender.</li>
      <li><strong>Non-repudiation:</strong> Prevents sender from denying their transmission.</li>
      <li><strong>Access Control:</strong> Restricts data access to authorized users.</li>
    </ul>

    {/* Types of Encryption */}
    <h2 className="text-3xl font-bold mt-8">Types of Encryption</h2>

    {/* Symmetric Encryption */}
    <h3 className="text-2xl font-semibold mt-6">1. Symmetric Encryption</h3>
    <p className="leading-relaxed">
      Symmetric encryption uses the same key for encryption and decryption. It is fast and efficient but requires secure key sharing.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>AES (Advanced Encryption Standard):</strong> Block cipher with key lengths 128, 192, or 256 bits. Faster and more secure than DES.</li>
      <li><strong>Triple DES (3DES):</strong> Applies DES algorithm three times with three keys. Stronger but slower than AES.</li>
      <li><strong>Twofish:</strong> Successor to Blowfish. Uses 256-bit keys. Efficient for software and hardware implementations.</li>
      <li><strong>Blowfish:</strong> Free algorithm using 64-bit block size and keys 32–448 bits. Uses Feistel structure with 16 rounds.</li>
    </ul>

    {/* Asymmetric Encryption */}
    <h3 className="text-2xl font-semibold mt-6">2. Asymmetric Encryption</h3>
    <p className="leading-relaxed">
      Asymmetric encryption uses a key pair: public key for encryption and private key for decryption. It enables secure communication without sharing private keys.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>RSA:</strong> Based on factoring large numbers. Widely used for secure communication.</li>
      <li><strong>Elliptic Curve Cryptography (ECC):</strong> Uses elliptic curves for strong security with smaller key sizes. Efficient for devices with limited processing power.</li>
      <li><strong>Digital Signature Algorithm (DSA):</strong> Designed for creating and verifying digital signatures. Ensures authenticity, integrity, and non-repudiation.</li>
    </ul>

    {/* Benefits and Challenges */}
    <h2 className="text-3xl font-bold mt-8">Benefits and Challenges of Encryption</h2>
    <p className="leading-relaxed">
      Encryption provides strong protection but comes with challenges:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Benefits:</strong> Data protection, confidentiality, integrity, regulatory compliance, non-repudiation.</li>
      <li><strong>Challenges:</strong> Complexity, key management, cost, performance impact, integration difficulties.</li>
    </ul>

    {/* Future of Encryption */}
    <h2 className="text-3xl font-bold mt-8">Future of Encryption</h2>
    <p className="leading-relaxed">
      Emerging encryption technologies will address challenges like quantum computing and cloud security.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Bring Your Own Encryption (BYOE):</strong> Organizations manage their own encryption and keys for better privacy.</li>
      <li><strong>Homomorphic Encryption:</strong> Enables computations on encrypted data without decryption.</li>
      <li><strong>Quantum Cryptography:</strong> Uses quantum mechanics for secure communication. Quantum Key Distribution (QKD) resists quantum computer attacks.</li>
      <li><strong>Honey Encryption:</strong> Returns realistic false data with wrong keys to mislead attackers.</li>
    </ul>

  </div>
);

export default Home;
