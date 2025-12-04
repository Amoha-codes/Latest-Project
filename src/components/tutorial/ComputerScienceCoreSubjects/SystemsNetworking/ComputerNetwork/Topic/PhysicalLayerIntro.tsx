import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Physical Layer in OSI Model ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Physical Layer in OSI Model
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 19 Sep, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      The Physical Layer is the bottom-most layer in the Open System Interconnection (OSI) Model,
      responsible for the <strong>physical and electrical transmission of data</strong>.
      It consists of components such as power plugs, connectors, receivers, and cable types.
      This layer sends data bits from one device to another.
    </p>

    {/* Functions of Physical Layer */}
    <h2 className="text-3xl font-bold mt-8">Functions of Physical Layer</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>The Physical Layer is responsible for sending raw data as bits over a physical medium.</li>
      <li>It converts data into signals that can travel through wires, fiber optics, or wireless channels (encoding) and turns them back into data (decoding).</li>
      <li>It uses techniques like modulation and demodulation to prepare and retrieve data.</li>
      <li>It defines the flow modes (simplex, half-duplex, full-duplex) and controls transmission speed and timing.</li>
    </ul>

    {/* Physical Topologies */}
    <h2 className="text-3xl font-bold mt-8">Physical Topologies</h2>

    <p className="leading-relaxed">
      Physical topologies describe the physical arrangement of devices and cables in a network.
      Common topologies include:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Point-to-Point Configuration</strong>: A dedicated link between two devices.
      </li>

      <li>
        <strong>Multipoint Configuration</strong>: Multiple devices share the same link.
      </li>
    </ul>

    {/* Protocols */}
    <h2 className="text-3xl font-bold mt-8">Protocols in Physical Layer</h2>

    <p className="leading-relaxed">
      The Physical Layer consists of hardware and software protocols that control data transmission.
      Some common Layer 1 protocols include:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Ethernet (IEEE 802.3)</strong> – Wired communication</li>
      <li><strong>Wi-Fi (IEEE 802.11)</strong> – Wireless networks</li>
      <li><strong>Bluetooth (IEEE 802.15.1)</strong> – Short-range wireless</li>
      <li><strong>USB</strong> – Short-distance device communication</li>
    </ul>

    {/* Security */}
    <h2 className="text-3xl font-bold mt-8">Need of Physical Layer in Security</h2>

    <p className="leading-relaxed">
      Security threats can occur before any software is involved.
      Attacks at this layer target the hardware or transmission medium, such as:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Cable Tapping</strong> – Intercepting data from cables</li>
      <li><strong>Unauthorized Physical Access</strong> – Entering hardware areas</li>
      <li><strong>Wireless Signal Interception</strong> – Capturing Wi-Fi signals</li>
      <li><strong>Signal Jamming</strong> – Blocking wireless communication</li>
      <li><strong>Hardware Manipulation</strong> – Tampering with routers/USB ports</li>
    </ul>

    {/* Pros */}
    <h2 className="text-3xl font-bold mt-8">Pros of the Physical Layer</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Ensures devices can transmit and receive raw data over physical mediums.</li>
      <li>Provides universal standards for cables, connectors, and signaling.</li>
      <li>Supports both wired and wireless transmission technologies.</li>
    </ul>

    {/* Limitations */}
    <h2 className="text-3xl font-bold mt-8">Limitations of the Physical Layer</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>No error detection or correction.</li>
      <li>Susceptible to physical damage (cables/connectors).</li>
      <li>Only transmits raw bits — no understanding of data content.</li>
    </ul>

  </div>
);

export default Home;
