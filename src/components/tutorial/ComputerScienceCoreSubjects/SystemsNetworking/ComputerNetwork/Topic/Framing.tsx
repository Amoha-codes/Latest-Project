import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Framing in Data Link Layer ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Framing in Data Link Layer
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 22 Sep, 2025</p>

    <p className="text-lg leading-relaxed">
      In computer networks and telecommunications, <strong>frames</strong> are the fundamental 
      units of digital transmission. A frame consists of a sequence of bits organized into a 
      structured block that conveys data along with control information such as addressing and 
      error detection codes. In the Data Link Layer (DLL) of the OSI model, framing plays a 
      critical role by dividing the continuous stream of bits into manageable, meaningful chunks 
      that can be reliably transmitted and processed by the receiver.
    </p>

    <h2 className="text-3xl font-bold mt-8">Purpose of Framing</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Provides a clear boundary between frames for the receiver.</li>
      <li>Includes source and destination addresses for point-to-point communication.</li>
      <li>Enables error detection and correction to ensure data integrity.</li>
      <li>Allows reliable and organized transmission of data.</li>
      <li>Transparent to the user; fully managed by the data link layer protocol.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Types of Framing</h2>

    <h3 className="text-2xl font-semibold mt-4">1. Fixed-Size Framing</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Frames have a predefined, fixed size.</li>
      <li>No explicit start or end delimiters are needed; frame size acts as the boundary.</li>
      <li><strong>Drawback:</strong> Internal fragmentation occurs if data is smaller than frame size.</li>
      <li><strong>Solution:</strong> Padding is used to fill the frame.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">2. Variable-Size Framing</h3>
    <p className="leading-relaxed">
      Requires explicit indicators of frame boundaries. Two popular techniques:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Length Field:</strong> Frame includes a length field specifying size. Example: Ethernet (802.3). If corrupted, frame cannot be parsed.</li>
      <li><strong>End Delimiter (ED):</strong> Unique pattern marks frame end. Example: Token Ring. ED pattern may appear in data, solved with stuffing techniques.</li>
    </ul>

    <h4 className="text-xl font-semibold mt-4">a) Character/Byte Stuffing</h4>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Used for character-based data.</li>
      <li>If data contains the special delimiter (e.g., $), an escape character (e.g., \O) is inserted.</li>
      <li>Example: ED = $, Data = $ → becomes \O$</li>
      <li><strong>Disadvantage:</strong> High processing overhead, mostly obsolete.</li>
    </ul>

    <h4 className="text-xl font-semibold mt-4">b) Bit Stuffing</h4>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>ED pattern is a sequence of bits (e.g., 01111).</li>
      <li>If pattern appears in data, insert a 0 to prevent confusion.</li>
      <li>Example 1: Data = 011100011110, ED = 0111 → Bit stuffed → 011010001101100</li>
      <li>Example 2: Data = 110001001, ED = 1000 → Bit stuffed → 11001010011</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Problems in Framing</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Start & End Detection:</strong> Receiver must identify frame boundaries using delimiters or flags.</li>
      <li><strong>Synchronization:</strong> Sender and receiver must align frame timing, especially at high speeds.</li>
      <li><strong>Error Handling:</strong> Noise can corrupt data or delimiters; error detection methods like CRC/checksum are used.</li>
      <li><strong>Overhead:</strong> Headers/trailers add control info but reduce usable bandwidth.</li>
      <li><strong>Efficiency:</strong> Maximize payload while minimizing overhead and delays.</li>
      <li><strong>Compatibility:</strong> Different devices may use different framing methods causing misinterpretation.</li>
    </ul>

  </div>
);

export default Home;
