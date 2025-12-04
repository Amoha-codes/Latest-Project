import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= RARP THEORY ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Reverse Address Resolution Protocol - RARP
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 10 Oct, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Reverse Address Resolution Protocol (RARP) is a network protocol that allows a device 
      to discover its IP address when only its MAC (Media Access Control) address is known. 
      It was designed for systems such as diskless workstations, which do not have permanent 
      storage to save their IP addresses. These devices boot from ROM and must request their 
      IP address dynamically from a RARP server on the local network.
    </p>

    <h2 className="text-3xl font-bold mt-8">Components of RARP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>IP Address Assignment:</strong> Diskless systems rely on RARP for IP assignment.</li>
      <li><strong>Physical Address:</strong> Every device has a unique MAC address stored in its NIC.</li>
      <li><strong>RARP Request:</strong> A device broadcasts its MAC address requesting its IP.</li>
      <li><strong>RARP Server:</strong> Maintains MAC-to-IP mappings and replies with the correct IP.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Working of RARP</h2>
    <p className="leading-relaxed">
      RARP is used by a client in a local area network (LAN) to obtain its IP address from a 
      server or gateway router. Systems that cannot store IP information locally broadcast a 
      RARP request and receive their IP dynamically.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>RARP Request:</strong> Client broadcasts MAC address.</li>
      <li><strong>Server Lookup:</strong> Server checks its MAC → IP table.</li>
      <li><strong>RARP Reply:</strong> Server responds with the correct IP.</li>
      <li><strong>Client Configuration:</strong> Device configures itself and joins the network.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">RARP Packet Format & Encapsulation</h2>
    <p className="leading-relaxed">The RARP packet format is identical to ARP except the Operation field:</p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      RARP Request → Operation = 3<br />
      RARP Reply → Operation = 4
    </p>

    <p className="leading-relaxed">
      RARP packets are encapsulated directly into data-link layer frames such as Ethernet frames.
    </p>

    <h2 className="text-3xl font-bold mt-8">Difference Between RARP and ARP</h2>

    <table className="w-full text-left border border-gray-300 text-sm">
      <tbody>
        <tr className="border-b">
          <td className="p-2 font-semibold">RARP</td>
          <td className="p-2">ARP</td>
        </tr>
        <tr className="border-b">
          <td className="p-2">Maps MAC → IP</td>
          <td className="p-2">Maps IP → MAC</td>
        </tr>
        <tr className="border-b">
          <td className="p-2">Used when only MAC is known</td>
          <td className="p-2">Used when IP is known</td>
        </tr>
        <tr className="border-b">
          <td className="p-2">Request uses code 3, reply uses 4</td>
          <td className="p-2">Request uses code 1, reply uses 2</td>
        </tr>
        <tr>
          <td className="p-2">Obsolete in modern networks</td>
          <td className="p-2">Still widely used</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-3xl font-bold mt-8">Is RARP Obsolete?</h2>
    <p className="leading-relaxed">
      Yes. RARP is obsolete due to limitations and has been replaced by:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>BOOTP:</strong> Provides IP, gateway, DNS, and additional configuration.</li>
      <li><strong>DHCP:</strong> Extension of BOOTP; widely used today.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Issues in RARP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Limited scalability</li>
      <li>No security features</li>
      <li>No subnetting support</li>
      <li>Router incompatibility</li>
      <li>Not suitable for modern networks</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Pros of RARP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Simplifies configuration for diskless devices</li>
      <li>Automatic IP assignment reduces manual errors</li>
      <li>Unique MAC-to-IP mapping prevents conflicts</li>
      <li>Useful for legacy hardware</li>
    </ul>

  </div>
);

export default Home;
