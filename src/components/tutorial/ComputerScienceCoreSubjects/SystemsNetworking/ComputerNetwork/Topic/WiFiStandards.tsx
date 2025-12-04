import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Wi-Fi Standards Explained ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Wi-Fi Standards Explained
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 04 Oct, 2025</p>

    {/* Intro */}
    <p className="text-lg leading-relaxed">
      Wi-Fi (Wireless Fidelity) is a wireless networking technology standardized
      under the IEEE <strong>802.11 family</strong>. These standards define how devices communicate
      over wireless networks and determine the speed, frequency, and performance
      of Wi-Fi connections.
    </p>

    {/* Key Parameters */}
    <h2 className="text-3xl font-bold mt-8">Key Parameters of Wi-Fi</h2>

    <p className="leading-relaxed">
      Every Wi-Fi generation is mainly identified by:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Speed (Data Rate):</strong> The rate of data transfer, measured
        in Mbps or Gbps.
      </li>
      <li>
        <strong>Frequency Band:</strong> Typically 2.4 GHz, 5 GHz, and the newer
        6 GHz band.
      </li>
    </ul>

    {/* Frequency Bands */}
    <h2 className="text-3xl font-bold mt-8">Wi-Fi Frequency Bands</h2>

    <p className="leading-relaxed">
      Wi-Fi routers can operate on different bands:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Single-band routers → Support only 2.4 GHz or 5 GHz</li>
      <li>Dual-band routers → Support 2.4 GHz & 5 GHz</li>
      <li>Tri-band routers → Add the 6 GHz band (Wi-Fi 6E & Wi-Fi 7)</li>
    </ul>

    <div className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      <strong>Frequency Band Comparison</strong><br /><br />
      <strong>2.4 GHz</strong><br />
      Speed: Comparatively Low<br />
      Range: High<br />
      Interference: High<br /><br />

      <strong>5 GHz</strong><br />
      Speed: High<br />
      Range: Comparatively Low<br />
      Interference: Low<br /><br />

      <strong>6 GHz</strong><br />
      Speed: Very High<br />
      Range: Shortest<br />
      Interference: Very Low
    </div>

    {/* Wi-Fi Standards */}
    <h2 className="text-3xl font-bold mt-8">Different Wi-Fi Standards</h2>

    <p className="leading-relaxed">
      Since 1997, the IEEE has introduced several Wi-Fi standards under the
      802.11 family:
    </p>

    <div className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      <strong>IEEE 802.11a</strong> (1999) – 5 GHz – 54 Mbps<br />
      <strong>IEEE 802.11b</strong> (1999) – 2.4 GHz – 11 Mbps<br />
      <strong>IEEE 802.11g</strong> (2003) – 2.4 GHz – 54 Mbps<br />
      <strong>IEEE 802.11n</strong> (2009) – 2.4 & 5 GHz – 600 Mbps<br />
      <strong>IEEE 802.11ac</strong> (2013) – 5 GHz – 1.3 Gbps<br />
      <strong>IEEE 802.11ax</strong> (2019) – 2.4 & 5 GHz – Up to 10 Gbps<br />
      <strong>IEEE 802.11ax (6 GHz)</strong> (2020) – 2.4, 5 & 6 GHz – Up to 10 Gbps<br />
      <strong>IEEE 802.11be</strong> (2024) – 2.4, 5 & 6 GHz – Up to 30 Gbps
    </div>

    {/* Naming Standards */}
    <h2 className="text-3xl font-bold mt-8">New Naming Standards</h2>

    <p className="leading-relaxed">
      To simplify naming, the Wi-Fi Alliance introduced user-friendly labels such as
      Wi-Fi 4, Wi-Fi 5, and Wi-Fi 6 instead of complex IEEE codes.
    </p>

    <div className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      <strong>IEEE 802.11n</strong> → Wi-Fi 4<br />
      <strong>IEEE 802.11ac</strong> → Wi-Fi 5<br />
      <strong>IEEE 802.11ax</strong> → Wi-Fi 6<br />
      <strong>IEEE 802.11ax (6 GHz)</strong> → Wi-Fi 6E<br />
      <strong>IEEE 802.11be</strong> → Wi-Fi 7
    </div>

  </div>
);

export default Home;
