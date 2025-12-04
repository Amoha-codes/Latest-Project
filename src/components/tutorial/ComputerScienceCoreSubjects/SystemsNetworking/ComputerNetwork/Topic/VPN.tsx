import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Virtual Private Network (VPN) ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Virtual Private Network (VPN)
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 16 Oct, 2025</p>

    <p className="text-lg leading-relaxed">
      A VPN (Virtual Private Network) encrypts your internet traffic and creates a secure tunnel
      between your device and the internet. It hides your IP address, routes data through remote
      servers, prevents tracking by hackers or ISPs, and allows access to restricted content
      while maintaining online privacy and anonymity.
    </p>

    {/* Key Benefits */}
    <h2 className="text-3xl font-bold mt-8">Key Benefits of Using a VPN</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Privacy Protection: Hides your IP and browsing activities.</li>
      <li>Security on Public Networks: Encrypts connection on public Wi-Fi.</li>
      <li>Bypass Geo-restrictions: Access content blocked in certain regions.</li>
      <li>Prevent Data Throttling: Avoid ISP speed restrictions during streaming/gaming.</li>
      <li>Access Remote Work Resources: Securely connect to private networks.</li>
    </ul>

    {/* Working of VPN */}
    <h2 className="text-3xl font-bold mt-8">How a VPN Works</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Connection Establishment: Connects to a VPN server operated by the provider.</li>
      <li>Encryption: Data is encrypted to prevent interception by third parties.</li>
      <li>Traffic Redirection: Internet traffic is routed through the VPN server, masking your IP.</li>
      <li>Decryption: VPN server decrypts data and sends it to the destination securely.</li>
    </ol>

    {/* Types of VPN */}
    <h2 className="text-3xl font-bold mt-8">Types of VPN</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Remote Access VPN: Secure connection for individual users.</li>
      <li>Site-to-Site VPN: Connects entire networks over the internet.</li>
      <li>Mobile VPN: Maintains stable connections while switching networks.</li>
      <li>MPLS VPN: Scalable solution for large enterprises.</li>
      <li>PPTP VPN: Fast but outdated and insecure.</li>
      <li>L2TP/IPsec VPN: Combines tunneling with encryption for moderate security.</li>
      <li>OpenVPN: Open-source, secure, flexible, and widely used.</li>
      <li>IKEv2/IPsec VPN: Fast, secure, mobile-friendly, auto-reconnects.</li>
    </ul>

    {/* How to Choose */}
    <h2 className="text-3xl font-bold mt-8">Choosing the Right VPN</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Security Features: Strong encryption, no-logs, secure protocols.</li>
      <li>Speed: Choose high-speed servers for streaming/gaming.</li>
      <li>Server Locations: More locations provide better access to geo-blocked content.</li>
      <li>Device Compatibility: Ensure support for your devices (Windows, Mac, Android, iOS).</li>
      <li>Customer Support: Reliable support for troubleshooting and guidance.</li>
    </ul>

    {/* VPN Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Types of VPNs Comparison</h2>
    <table className="table-auto border-collapse border border-gray-300 w-full text-left">
      <thead>
        <tr className="bg-gray-400">
          <th className="border px-4 py-2">VPN Type</th>
          <th className="border px-4 py-2">Description</th>
          <th className="border px-4 py-2">Use Case</th>
          <th className="border px-4 py-2">Security</th>
          <th className="border px-4 py-2">Speed</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">Remote Access VPN</td>
          <td className="border px-4 py-2">Connects individuals remotely.</td>
          <td className="border px-4 py-2">Remote workers</td>
          <td className="border px-4 py-2">High</td>
          <td className="border px-4 py-2">Moderate</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Site-to-Site VPN</td>
          <td className="border px-4 py-2">Connects two networks securely.</td>
          <td className="border px-4 py-2">Businesses with multiple offices</td>
          <td className="border px-4 py-2">Very High</td>
          <td className="border px-4 py-2">High</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Mobile VPN</td>
          <td className="border px-4 py-2">VPN for mobile devices.</td>
          <td className="border px-4 py-2">Healthcare, logistics</td>
          <td className="border px-4 py-2">High</td>
          <td className="border px-4 py-2">Moderate</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">MPLS VPN</td>
          <td className="border px-4 py-2">Scalable enterprise solution.</td>
          <td className="border px-4 py-2">Large enterprises</td>
          <td className="border px-4 py-2">Very High</td>
          <td className="border px-4 py-2">Very High</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">PPTP VPN</td>
          <td className="border px-4 py-2">Old, fast, insecure.</td>
          <td className="border px-4 py-2">Legacy systems</td>
          <td className="border px-4 py-2">Low</td>
          <td className="border px-4 py-2">Very High</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">L2TP/IPsec VPN</td>
          <td className="border px-4 py-2">Tunneling + encryption.</td>
          <td className="border px-4 py-2">Corporate environments</td>
          <td className="border px-4 py-2">High</td>
          <td className="border px-4 py-2">Moderate</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">OpenVPN</td>
          <td className="border px-4 py-2">Open-source, secure.</td>
          <td className="border px-4 py-2">Advanced users</td>
          <td className="border px-4 py-2">Very High</td>
          <td className="border px-4 py-2">Moderate</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">IKEv2/IPsec VPN</td>
          <td className="border px-4 py-2">Fast, mobile-friendly.</td>
          <td className="border px-4 py-2">Mobile users</td>
          <td className="border px-4 py-2">Very High</td>
          <td className="border px-4 py-2">High</td>
        </tr>
      </tbody>
    </table>

    {/* Drawbacks */}
    <h2 className="text-3xl font-bold mt-8">Drawbacks of Using VPN</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Slower internet speeds due to encryption and server routing.</li>
      <li>Some VPNs log data or provide subpar protection.</li>
      <li>VPN access can be blocked by certain websites or countries.</li>
      <li>Manual setup may require technical knowledge.</li>
      <li>Premium VPNs may incur recurring costs.</li>
    </ul>

  </div>
);

export default Home;
