import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= MAC Filtering ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      MAC Filtering in Computer Network
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 17 Oct, 2025</p>

    {/* Introduction */}
    <p className="text-lg leading-relaxed">
      Network adapters, whether wired or wireless, use a unique identifier called a 
      MAC (Media Access Control) address, typically shown as 00:00:00:00:00:00. 
      <strong>MAC filtering</strong> is a security feature that uses these addresses to control 
      which devices can connect to a network. By creating a whitelist of approved devices or 
      a deny list of restricted ones, it helps prevent unauthorized access and strengthens 
      overall Wi-Fi security.
    </p>

    {/* Working */}
    <h2 className="text-3xl font-bold mt-8">Working of MAC Filtering</h2>
    <p className="leading-relaxed">
      When a device connects to a router, its MAC address is checked against an approved list:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Devices on the allowed list are granted access; others are blocked.</li>
      <li>Devices on the denied list are blocked from connecting.</li>
      <li>If a MAC address is on both lists, access is denied.</li>
    </ul>
    <p className="leading-relaxed">
      To enable MAC filtering on a network:
    </p>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Go to the DHCP console, right-click the IPv4 node, and click properties.</li>
      <li>Use the filter configuration tab to enable the allow list or deny list.</li>
      <li>Click OK and save changes.</li>
    </ol>

    {/* Updating MAC Filtering */}
    <h2 className="text-3xl font-bold mt-8">Updating MAC Filtering</h2>
    <p className="leading-relaxed">
      If MAC filtering is enabled, devices not on the approved list cannot connect. For 
      troubleshooting, it can be temporarily disabled:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Access your router settings.</li>
      <li>Locate the "MAC Filtering" option in "Wireless" or "Wireless Security".</li>
      <li>Add devices to the allowed list or disable MAC filtering if desired.</li>
    </ul>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications of MAC Filtering</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Access control: Restricts network access to authorized devices.</li>
      <li>Parental control: Limits children’s internet use to specific devices.</li>
      <li>BYOD enforcement: Approves only personal devices to access corporate resources.</li>
      <li>Guest access: Grants controlled access to visitors without exposing the main network.</li>
      <li>Wireless security: Prevents unauthorized devices from connecting to Wi-Fi.</li>
      <li>IoT security: Allows only trusted smart devices.</li>
      <li>Traffic management: Controls the number of connected devices.</li>
      <li>Compliance: Helps adhere to organizational security policies.</li>
      <li>Troubleshooting & monitoring: Detects unauthorized devices and tracks activity.</li>
    </ul>

    {/* Security Risks */}
    <h2 className="text-3xl font-bold mt-8">Security Risks of MAC Filtering</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>MAC address spoofing:</strong> Attackers can capture and spoof valid MAC addresses.</li>
      <li><strong>Deauthentication attacks:</strong> Tools like airplay-ng can disconnect a device and reconnect using a spoofed MAC.</li>
      <li><strong>Unencrypted MAC headers:</strong> MAC addresses remain visible even on WPA2 networks.</li>
      <li><strong>Bypassing encryption:</strong> Impersonating an authorized MAC grants access without cracking passwords.</li>
      <li><strong>Practical limitation:</strong> Experienced attackers can bypass MAC filtering despite its protection.</li>
    </ul>

  </div>
);

export default Home;
