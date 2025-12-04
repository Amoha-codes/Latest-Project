import React from 'react';

const DNSTheory: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Domain Name System ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Domain Name System (DNS)
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 29 Nov, 2025</p>

    {/* Introduction */}
    <p className="text-lg leading-relaxed">
      DNS is a hierarchical and distributed naming system that translates domain names into IP addresses.  
      For example, typing <code>www.geeksforgeeks.org</code> in your browser uses DNS to locate the correct server.  
      Without DNS, we would need to remember the numerical IP of every website, which is highly impractical.
    </p>

    {/* Working of DNS */}
    <h2 className="text-3xl font-bold mt-8">How DNS Works</h2>
    <p className="leading-relaxed">
      The DNS process ensures that users can access websites by typing domain names. The main steps are:
    </p>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li><strong>User Input:</strong> Enter a website address in the browser.</li>
      <li><strong>Local Cache Check:</strong> Browser checks its local cache for the IP address.</li>
      <li><strong>DNS Resolver Query:</strong> If not cached, the request is sent to a DNS resolver (often provided by your ISP).</li>
      <li><strong>Root DNS Server:</strong> Resolver queries the root server, which points to the correct TLD server.</li>
      <li><strong>TLD Server:</strong> Directs the resolver to the authoritative DNS server for the domain.</li>
      <li><strong>Authoritative DNS Server:</strong> Returns the IP address of the domain to the resolver.</li>
      <li><strong>Final Response:</strong> Resolver sends the IP to your computer, allowing it to connect to the website.</li>
    </ol>

    {/* Structure of DNS */}
    <h2 className="text-3xl font-bold mt-8">Structure of DNS</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Root DNS Servers:</strong> Highest-level servers, directing queries to TLD servers.</li>
      <li><strong>TLD Servers:</strong> Manage domain extensions like .com, .org, .net, .edu, .gov, etc.</li>
      <li><strong>Authoritative DNS Servers:</strong> Store actual DNS records for domains, providing correct IPs.</li>
    </ul>

    {/* Types of Domains */}
    <h2 className="text-3xl font-bold mt-8">Types of Domains</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Generic Domains:</strong> Common TLDs like .com, .org, .net, .edu.</li>
      <li><strong>Country Code Domains:</strong> Represent countries, e.g., .in (India), .us (USA), .uk (UK).</li>
      <li><strong>Inverse Domains:</strong> Used for reverse DNS lookups, mapping IPs back to domain names.</li>
    </ul>

    {/* DNS Lookup */}
    <h2 className="text-3xl font-bold mt-8">DNS Lookup / DNS Resolution</h2>
    <p className="leading-relaxed">
      DNS Lookup translates a human-readable domain name into its IP address. Key steps include:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>DNS Resolver:</strong> Initiates the lookup process.</li>
      <li><strong>Recursive Query:</strong> Resolver queries multiple servers until the IP is found.</li>
      <li><strong>Iterative Query:</strong> Resolver asks servers for the best answer available.</li>
      <li><strong>Non-Recursive Query:</strong> Resolver queries a server that already has the record cached.</li>
    </ul>

    {/* Example inline */}
    <p className="leading-relaxed">
      Example command to check DNS for a domain: <code>nslookup www.geeksforgeeks.org</code>
    </p>

    {/* DNS Caching and TTL */}
    <h2 className="text-3xl font-bold mt-8">DNS Caching and TTL</h2>
    <p className="leading-relaxed">
      DNS caching stores records locally to avoid repeated external queries.  
      TTL (Time-to-Live) specifies how long a record is cached before it expires.  
      Example: If TTL for <code>www.geeksforgeeks.org</code> is 3600 seconds, it is cached for 1 hour before a new lookup occurs.
    </p>

    {/* DNS Security and DNSSEC */}
    <h2 className="text-3xl font-bold mt-8">DNS Security and DNSSEC</h2>
    <p className="leading-relaxed">
      DNS is vulnerable to attacks like cache poisoning. DNSSEC (DNS Security Extensions) addresses this by:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Adding cryptographic signatures to DNS records.</li>
      <li>Allowing resolvers to verify authenticity and integrity of responses.</li>
      <li>Ensuring safe and authentic browsing experiences.</li>
    </ul>

    {/* Reverse DNS Lookup */}
    <h2 className="text-3xl font-bold mt-8">Reverse DNS Lookup</h2>
    <p className="leading-relaxed">
      Reverse DNS maps an IP address back to a domain name. It is used for:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Network diagnostics to identify the source of traffic.</li>
      <li>Email security to verify legitimate sources of incoming emails.</li>
    </ul>

    {/* DNS Record Types */}
    <h2 className="text-3xl font-bold mt-8">DNS Record Types</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>A Record:</strong> Maps domain to IPv4 address (e.g., geeksforgeeks.org → 185.199.109.153).</li>
      <li><strong>CNAME Record:</strong> Aliases one domain name to another (e.g., www.geeksforgeeks.org → geeksforgeeks.org).</li>
      <li><strong>MX Record:</strong> Specifies mail servers responsible for receiving emails for a domain.</li>
      <li><strong>TXT Record:</strong> Stores text information, often used for domain verification and email security (SPF, DKIM).</li>
    </ul>

  </div>
);

export default DNSTheory;
