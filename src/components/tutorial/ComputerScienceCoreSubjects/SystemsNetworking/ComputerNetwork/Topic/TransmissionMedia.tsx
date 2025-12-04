import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Transmission Media ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Transmission Media in Computer Networks
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 03 Oct, 2025</p>

    <p className="text-lg leading-relaxed">
      Transmission media is the physical medium through which data is transmitted from one device 
      to another within a network. These media can be <strong>wired (guided)</strong> or 
      <strong> wireless (unguided)</strong>. The choice of medium depends on distance, speed, and interference.
    </p>

    {/* Guided Media */}
    <h2 className="text-3xl font-bold mt-8">1. Guided Media</h2>
    <p className="leading-relaxed">
      Guided Media, also called wired or bounded media, confine signals using physical links. 
      Major types: Twisted Pair, Coaxial Cable, Optical Fiber, Stripline, Microstripline.
    </p>

    <h3 className="text-2xl font-semibold mt-4">1.1 Twisted Pair Cable</h3>
    <p className="leading-relaxed">
      Consists of two insulated wires twisted together. Widely used for telephone and LAN connections.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Unshielded Twisted Pair (UTP):</strong> Cost-effective, easy to install, moderate speed; suitable for short distances.</li>
      <li><strong>Shielded Twisted Pair (STP):</strong> Shielded for higher speed and crosstalk reduction; bulkier and expensive.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">1.2 Coaxial Cable</h3>
    <p className="leading-relaxed">
      Central conductor with insulating layer, metallic shield, and outer plastic cover. Used in TV, broadband, CCTV. Modes: Baseband and Broadband.
    </p>

    <h3 className="text-2xl font-semibold mt-4">1.3 Optical Fiber Cable</h3>
    <p className="leading-relaxed">
      Uses light through a glass core for high-speed, long-distance communication. Immune to EMI and corrosion. Supports unidirectional and bidirectional transmission via WDM.
    </p>

    <h3 className="text-2xl font-semibold mt-4">1.4 Stripline</h3>
    <p className="leading-relaxed">
      A planar transmission line for high-frequency signals, sandwiched between ground planes, providing EMI immunity.
    </p>

    <h3 className="text-2xl font-semibold mt-4">1.5 Microstripline</h3>
    <p className="leading-relaxed">
      Flat conducting strip on a dielectric above a ground plane; commonly used in microwave and RF circuits.
    </p>

    {/* Unguided Media */}
    <h2 className="text-3xl font-bold mt-8">2. Unguided Media</h2>
    <p className="leading-relaxed">
      Unguided media, or wireless media, transmit signals through air without physical guides. 
      Types include Radio waves, Microwaves, and Infrared waves.
    </p>

    <h3 className="text-2xl font-semibold mt-4">2.1 Radio Waves</h3>
    <p className="leading-relaxed">
      Omni-directional, penetrate buildings, no precise alignment needed. Frequency: 3 KHz – 1 GHz. Used in AM/FM radio and cordless phones.
    </p>

    <h3 className="text-2xl font-semibold mt-4">2.2 Microwaves</h3>
    <p className="leading-relaxed">
      Line-of-sight transmission requiring antenna alignment. Frequency: 1 GHz – 300 GHz. Used in mobile communication, TV, and satellite links.
    </p>

    <h3 className="text-2xl font-semibold mt-4">2.3 Infrared</h3>
    <p className="leading-relaxed">
      Short-range communication; cannot penetrate obstacles. Frequency: 300 GHz – 400 THz. Used in TV remotes, wireless mouse, keyboards, and printers.
    </p>

    <h2 className="text-3xl font-bold mt-8">Difference Between Radio Waves, Microwaves, and Infrared Waves</h2>

<div className="overflow-x-auto">
  <table className="min-w-full border border-gray-300 divide-y divide-gray-300">
    <thead className="bg-gray-400">
      <tr>
        <th className="px-4 py-2 text-left border-b">Basis</th>
        <th className="px-4 py-2 text-left border-b">Radiowave</th>
        <th className="px-4 py-2 text-left border-b">Microwave</th>
        <th className="px-4 py-2 text-left border-b">Infrared Wave</th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      <tr>
        <td className="px-4 py-2 border-b">Direction</td>
        <td className="px-4 py-2 border-b">Omni-directional in nature</td>
        <td className="px-4 py-2 border-b">Unidirectional in nature</td>
        <td className="px-4 py-2 border-b">Unidirectional in nature</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b">Penetration</td>
        <td className="px-4 py-2 border-b">At low frequency, can penetrate solid objects and walls; high frequency bounces off obstacles</td>
        <td className="px-4 py-2 border-b">At low frequency, can penetrate objects and walls; high frequency cannot penetrate</td>
        <td className="px-4 py-2 border-b">Cannot penetrate any solid object or walls</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b">Frequency Range</td>
        <td className="px-4 py-2 border-b">3 KHz – 1 GHz</td>
        <td className="px-4 py-2 border-b">1 GHz – 300 GHz</td>
        <td className="px-4 py-2 border-b">300 GHz – 400 THz</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b">Security</td>
        <td className="px-4 py-2 border-b">Poor</td>
        <td className="px-4 py-2 border-b">Medium</td>
        <td className="px-4 py-2 border-b">High</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b">Attenuation</td>
        <td className="px-4 py-2 border-b">High</td>
        <td className="px-4 py-2 border-b">Variable</td>
        <td className="px-4 py-2 border-b">Low</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b">Government License</td>
        <td className="px-4 py-2 border-b">Some frequencies require license</td>
        <td className="px-4 py-2 border-b">Some frequencies require license</td>
        <td className="px-4 py-2 border-b">No license required</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b">Usage Cost</td>
        <td className="px-4 py-2 border-b">Moderate</td>
        <td className="px-4 py-2 border-b">High</td>
        <td className="px-4 py-2 border-b">Very low</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b">Communication</td>
        <td className="px-4 py-2 border-b">Used in long distance communication</td>
        <td className="px-4 py-2 border-b">Used in long distance communication</td>
        <td className="px-4 py-2 border-b">Not used in long distance communication</td>
      </tr>
    </tbody>
  </table>
</div>


    {/* Transmission Impairment */}
    <h2 className="text-3xl font-bold mt-8">Causes of Transmission Impairment</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Attenuation:</strong> Loss of signal strength over distance.</li>
      <li><strong>Distortion:</strong> Signal shape changes due to different frequency speeds.</li>
      <li><strong>Noise:</strong> Unwanted signals like crosstalk, thermal noise, or impulse noise.</li>
    </ul>

    {/* Design Factors */}
    <h2 className="text-3xl font-bold mt-8">Factors Considered in Designing Transmission Media</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Bandwidth:</strong> Determines data transmission speed.</li>
      <li><strong>Transmission Impairment:</strong> Affects signal quality.</li>
      <li><strong>Interference:</strong> Disturbances caused by undesired signals.</li>
    </ul>

    {/* Applications Table */}
    <h2 className="text-3xl font-bold mt-8">Applications of Transmission Media</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 divide-y divide-gray-300">
        <thead className="bg-gray-400">
          <tr>
            <th className="px-4 py-2 text-left border-b">Transmission Media</th>
            <th className="px-4 py-2 text-left border-b">Applications</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-4 py-2 border-b">UTP</td>
            <td className="px-4 py-2 border-b">LAN, telephones</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">STP</td>
            <td className="px-4 py-2 border-b">Industrial networks, high-interference environments</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Optical Fiber</td>
            <td className="px-4 py-2 border-b">Internet backbones, long-distance communication</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Coaxial</td>
            <td className="px-4 py-2 border-b">Cable TV, broadband, CCTV</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Stripline</td>
            <td className="px-4 py-2 border-b">PCBs, microwave circuits</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Microstripline</td>
            <td className="px-4 py-2 border-b">RF circuits, satellite communication</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Radio Waves</td>
            <td className="px-4 py-2 border-b">Wireless communication, mobile phones, AM/FM radio</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Infrared</td>
            <td className="px-4 py-2 border-b">Remote controls, short-range communication</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Microwave</td>
            <td className="px-4 py-2 border-b">Satellite communication, radar, long-distance links</td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
);

export default Home;
