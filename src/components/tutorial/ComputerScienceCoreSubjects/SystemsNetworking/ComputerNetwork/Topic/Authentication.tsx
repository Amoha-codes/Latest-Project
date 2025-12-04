import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Authentication ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Authentication in Computer Network
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 16 Oct, 2025</p>

    {/* Introduction */}
    <p className="text-lg leading-relaxed">
      Authentication is the process of verifying the identity of a user or system.
      User authentication ensures that a user logging into a computer system is
      who they claim to be.
    </p>

    {/* Authentication Methods */}
    <h2 className="text-3xl font-bold mt-8">Authentication Methods</h2>
    <p className="leading-relaxed">
      Operating systems generally authenticate users using the following three methods:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Passwords:</strong> The most common method. Users are assigned a username and password. Login succeeds if credentials match stored values.</li>
      <li><strong>Physical Identification:</strong> Uses badges, cards, or smart cards. Often combined with a password (e.g., ATMs) for two-factor verification. Cards can store passwords internally but losing the card is a risk.</li>
      <li><strong>Biometrics:</strong> Uses unique biological features of the user such as fingerprints, facial recognition, voice, retina patterns, hand geometry, or signature.</li>
    </ul>

    {/* Biometric Examples */}
    <h3 className="text-2xl font-semibold mt-6">Biometric Authentication Types</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Facial Characteristics:</strong> Differentiated by eyes, nose, lips, eyebrows, and chin shape.</li>
      <li><strong>Fingerprints:</strong> Unique to each individual.</li>
      <li><strong>Hand Geometry:</strong> Shape, length, and width of fingers.</li>
      <li><strong>Retinal Pattern:</strong> Detailed structure of the eye.</li>
      <li><strong>Signature:</strong> Individual style of handwriting.</li>
      <li><strong>Voice:</strong> Frequency pattern of an individual’s voice.</li>
    </ul>

    {/* Types of Authentication */}
    <h2 className="text-3xl font-bold mt-8">Types of Authentication</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Single-Factor Authentication (SFA)</h3>
    <p className="leading-relaxed">
      The earliest and simplest method, where a user provides a username and password. Access is denied if either is incorrect.
    </p>
    <p className="font-semibold">Advantages:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Simple and straightforward to use</li>
      <li>Low-cost implementation</li>
      <li>Minimal technical knowledge required</li>
    </ul>
    <p className="font-semibold">Disadvantages:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Security depends entirely on password strength</li>
      <li>Low overall protection</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6">2. Two-Factor Authentication (2FA)</h3>
    <p className="leading-relaxed">
      Requires a username, password, and an additional factor such as a wireless token, virtual token, or OTP.
    </p>
    <p className="font-semibold">Advantages:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Stronger security than single-factor authentication</li>
      <li>Protects against password theft</li>
      <li>Increases user confidence and trust</li>
    </ul>
    <p className="font-semibold">Disadvantages:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>More time-consuming</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6">3. Multi-Factor Authentication (MFA)</h3>
    <p className="leading-relaxed">
      Requires multiple authentication factors for access, providing enhanced security against phishing, keyloggers, and other attacks.
    </p>
    <p className="font-semibold">Advantages:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>High level of security</li>
      <li>No risk of stolen information</li>
      <li>Protection against keylogger and data capture attacks</li>
    </ul>
    <p className="font-semibold">Disadvantages:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Time-consuming</li>
      <li>May rely on third-party services</li>
    </ul>

    {/* Conclusion */}
    <h2 className="text-3xl font-bold mt-8">Objective of Authentication</h2>
    <p className="leading-relaxed">
      The main goal of authentication is to allow authorized users to access a system
      while denying access to unauthorized users, ensuring data and system security.
    </p>

  </div>
);

export default Home;
