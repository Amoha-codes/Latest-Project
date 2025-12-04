import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Title ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      What is Internet Protocol (IP)?
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 05 Aug, 2025</p>

    {/* ================= Intro ================= */}
    <p className="text-lg leading-relaxed">
      The <strong>Internet Protocol (IP)</strong> is a set of rules that allows computers and devices 
      to communicate over the Internet. It ensures that data sent from one device reaches the correct 
      destination by using unique numbers called <strong>IP addresses</strong>.
    </p>
    <p className="text-lg leading-relaxed">
      Whether you're browsing websites, sending emails, or streaming videos, IP manages how information 
      travels, ensuring smooth and efficient communication.
    </p>

    {/* ================= Importance ================= */}
    <h2 className="text-3xl font-bold mt-8">Why is Internet Protocol Important?</h2>
    <p className="leading-relaxed">
      IP delivers packets of data from the source host to the destination host based on their IP addresses. 
      Each device on a network is assigned an IP address, acting as a "home address" to enable communication.
    </p>
    <p className="leading-relaxed">
      IP works alongside the <strong>Internet Control Message Protocol (ICMP)</strong> to send error messages 
      and operational information (e.g., destination unreachable, echo requests). IP is a <strong>connectionless protocol</strong>, 
      allowing flexible and efficient data transmission.
    </p>

    {/* ================= Key Terminologies ================= */}
    <h2 className="text-3xl font-bold mt-8">Primary Terminologies</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>IP Address:</strong> Unique number assigned to each device to identify it on a network.</li>
      <li><strong>Packet:</strong> A unit of data containing a header and payload, sent across networks.</li>
      <li><strong>Router:</strong> Network device that forwards packets between networks using routing tables.</li>
      <li><strong>IPv4:</strong> Version 4 of IP, widely used for Internet connectivity.</li>
      <li><strong>IPv6:</strong> Version 6 of IP, designed to handle address exhaustion and improve routing.</li>
    </ul>

    {/* ================= Top 20 Protocols ================= */}
    <h2 className="text-3xl font-bold mt-8">Top 20 Essential Protocols</h2>
    <div className="overflow-x-auto">
      <table border={1} className="w-full border-collapse text-left text-sm">
        <thead className="bg-gray-400">
          <tr>
            <th className="p-2">Port</th>
            <th className="p-2">Protocol</th>
            <th className="p-2">Common Service</th>
            <th className="p-2">Use Case</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="p-2">20</td><td className="p-2">TCP</td><td className="p-2">FTP (Data)</td><td className="p-2">File transfers (active mode)</td></tr>
          <tr><td className="p-2">21</td><td className="p-2">TCP</td><td className="p-2">FTP (Control)</td><td className="p-2">File transfer control</td></tr>
          <tr><td className="p-2">22</td><td className="p-2">TCP</td><td className="p-2">SSH</td><td className="p-2">Secure remote login, SFTP</td></tr>
          <tr><td className="p-2">23</td><td className="p-2">TCP</td><td className="p-2">Telnet</td><td className="p-2">Remote login (insecure)</td></tr>
          <tr><td className="p-2">25</td><td className="p-2">TCP</td><td className="p-2">SMTP</td><td className="p-2">Sending email</td></tr>
          <tr><td className="p-2">53</td><td className="p-2">TCP/UDP</td><td className="p-2">DNS</td><td className="p-2">Domain name resolution</td></tr>
          <tr><td className="p-2">67</td><td className="p-2">UDP</td><td className="p-2">DHCP (Server)</td><td className="p-2">Assigning IP addresses</td></tr>
          <tr><td className="p-2">68</td><td className="p-2">UDP</td><td className="p-2">DHCP (Client)</td><td className="p-2">Receiving IP addresses</td></tr>
          <tr><td className="p-2">80</td><td className="p-2">TCP</td><td className="p-2">HTTP</td><td className="p-2">Web traffic</td></tr>
          <tr><td className="p-2">110</td><td className="p-2">TCP</td><td className="p-2">POP3</td><td className="p-2">Receiving email</td></tr>
          <tr><td className="p-2">123</td><td className="p-2">UDP</td><td className="p-2">NTP</td><td className="p-2">Time synchronization</td></tr>
          <tr><td className="p-2">135</td><td className="p-2">TCP</td><td className="p-2">Microsoft RPC</td><td className="p-2">DCOM services on Windows</td></tr>
          <tr><td className="p-2">137</td><td className="p-2">UDP</td><td className="p-2">NetBIOS Name Service</td><td className="p-2">Windows file sharing</td></tr>
          <tr><td className="p-2">138</td><td className="p-2">UDP</td><td className="p-2">NetBIOS Datagram</td><td className="p-2">Windows file sharing</td></tr>
          <tr><td className="p-2">139</td><td className="p-2">TCP</td><td className="p-2">NetBIOS Session</td><td className="p-2">Windows SMB traffic</td></tr>
          <tr><td className="p-2">143</td><td className="p-2">TCP</td><td className="p-2">IMAP</td><td className="p-2">Email retrieval</td></tr>
          <tr><td className="p-2">161</td><td className="p-2">UDP</td><td className="p-2">SNMP</td><td className="p-2">Network management</td></tr>
          <tr><td className="p-2">443</td><td className="p-2">TCP</td><td className="p-2">HTTPS</td><td className="p-2">Secure web traffic</td></tr>
          <tr><td className="p-2">445</td><td className="p-2">TCP</td><td className="p-2">Microsoft-DS (SMB)</td><td className="p-2">File and printer sharing</td></tr>
          <tr><td className="p-2">3389</td><td className="p-2">TCP</td><td className="p-2">RDP</td><td className="p-2">Remote Desktop Protocol</td></tr>
        </tbody>
      </table>
    </div>

    {/* ================= How IP Addressing Works ================= */}
    <h2 className="text-3xl font-bold mt-8">How Does IP Addressing Work?</h2>
    <p className="leading-relaxed">
      Every device needs a unique identifier to communicate. IP addresses are assigned statically or dynamically 
      through DHCP. DNS translates domain names into IPs, while ARP (IPv4) or NDP (IPv6) maps IPs to MAC addresses. 
      Data is encapsulated in IP packets and routed using protocols such as OSPF or BGP. NAT allows multiple devices 
      to share one public IP in private networks. At the destination, packets are decapsulated for applications.
    </p>

    {/* ================= What is an IP Packet ================= */}
    <h2 className="text-3xl font-bold mt-8">What is an IP Packet?</h2>
    <p className="leading-relaxed">
      An IP packet consists of:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Header:</strong> Control info such as source and destination IP.</li>
      <li><strong>Payload:</strong> Actual data transmitted. Routers use the header to determine routing.</li>
    </ul>

    {/* ================= How IP Routing Works ================= */}
    <h2 className="text-3xl font-bold mt-8">How Does IP Routing Work?</h2>
    <p className="leading-relaxed">
      IP routing forwards data from source to destination by breaking it into packets, which travel through multiple routers. 
      Each router uses its routing table and algorithm to determine the next hop. Packets are reassembled at the destination 
      to restore the original data.
    </p>

  </div>
);

export default Home;
