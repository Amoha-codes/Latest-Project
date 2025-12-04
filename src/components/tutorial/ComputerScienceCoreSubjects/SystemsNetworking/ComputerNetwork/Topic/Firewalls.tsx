import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Firewall ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction of Firewall in Computer Network
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 20 Nov, 2025</p>

    {/* Introduction */}
    <p className="text-lg leading-relaxed">
      A firewall is a network security system, available as hardware or software, that monitors 
      and controls incoming and outgoing traffic based on predefined rules. It acts like a security 
      guard, filtering data packets to either:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Accept:</strong> Allow the traffic.</li>
      <li><strong>Reject:</strong> Block with an error response.</li>
      <li><strong>Drop:</strong> Block silently without response.</li>
    </ul>

    {/* Importance */}
    <h2 className="text-3xl font-bold mt-8">Importance of Firewalls</h2>
    <p className="leading-relaxed">
      Firewalls act as the first line of defense in cybersecurity, enforcing a single checkpoint 
      where all traffic is monitored and filtered. They are essential because they:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Prevent Unauthorized Access:</strong> Only trusted users and traffic are allowed.</li>
      <li><strong>Block Malicious Traffic:</strong> Stops viruses, phishing attempts, or DoS attacks.</li>
      <li><strong>Protect Sensitive Information:</strong> Safeguards personal and business data.</li>
      <li><strong>Control Network Usage:</strong> Enforces policies like parental controls or workplace restrictions.</li>
      <li><strong>Mitigate Insider Risks:</strong> Detects suspicious activity within the network.</li>
    </ul>

    {/* Working */}
    <h2 className="text-3xl font-bold mt-8">Working of Firewall</h2>
    <p className="leading-relaxed">
      Firewalls inspect all incoming and outgoing traffic and decide whether to allow or block it:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>All packets entering or leaving the network pass through the firewall.</li>
      <li>The firewall checks each packet against predefined security rules.</li>
      <li>Safe packets are allowed; suspicious or malicious packets are blocked.</li>
      <li>Blocked traffic is logged, and alerts may be generated for serious threats.</li>
      <li>If no specific rule exists, a default policy (accept, reject, or drop) is applied. Setting it to <strong>drop</strong> or <strong>reject</strong> is best practice.</li>
    </ul>

    {/* Types of Firewall */}
    <h2 className="text-3xl font-bold mt-8">Types of Firewall</h2>
    <p className="leading-relaxed">
      Firewalls can be categorized based on generation, system protection, filtering method, and form factor:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Network Placement:</strong> Packet Filtering, Stateful Inspection, Proxy (Application Level), Circuit-Level Gateway, Web Application Firewall (WAF), Next-Generation Firewall (NGFW).</li>
      <li><strong>Systems Protected:</strong> Network Firewall, Host-Based Firewall.</li>
      <li><strong>Data Filtering Method:</strong> Perimeter Firewall, Internal Firewall, Distributed Firewall.</li>
      <li><strong>Form Factors:</strong> Hardware Firewall, Software Firewall.</li>
    </ul>

    {/* History */}
    <h2 className="text-3xl font-bold mt-8">History of Firewalls</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Late 1980s:</strong> Jeff Mogul, Brian Reid, and Paul Vixie at DEC developed packet-filtering technology, laying the groundwork for firewalls.</li>
      <li><strong>Late 1980s - Early 1990s:</strong> AT&T Bell Labs researchers developed circuit-level gateways to vet ongoing connections efficiently.</li>
      <li><strong>1991-1992:</strong> Marcus Ranum introduced security proxies at DEC, creating the Secure External Access Link (SEAL), the first commercial application-layer firewall.</li>
      <li><strong>1993-1994:</strong> Check Point’s Gil Shwed pioneered stateful inspection technology; Nir Zuk developed a graphical interface for Firewall-1, making firewalls widely adopted.</li>
    </ul>

  </div>
);

export default Home;
