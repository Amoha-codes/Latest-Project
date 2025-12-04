import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Content Distribution Network ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      What is a Content Distribution Network (CDN) and How Does It Work?
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 12 Jul, 2025</p>

    {/* Introduction */}
    <p className="text-lg leading-relaxed">
      With the growing number of Internet users, delivering content efficiently worldwide is challenging. For example, YouTube has 2 billion users and Netflix has over 160 million. Hosting all content in a single data center can cause slower delivery for remote users, create a single point of failure, and waste bandwidth.
    </p>

    {/* What is a CDN */}
    <h2 className="text-3xl font-bold mt-8">What is a CDN?</h2>
    <p className="leading-relaxed">
      A Content Distribution Network (CDN) is a network of geographically distributed servers that work together to deliver web content faster and more reliably to users worldwide. A CDN:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Manages servers distributed across multiple locations.</li>
      <li>Stores copies of web content on its servers.</li>
      <li>Directs users to the nearest server for faster content delivery.</li>
    </ul>

    {/* How CDN Works */}
    <h2 className="text-3xl font-bold mt-8">How Does a CDN Work?</h2>
    <p className="leading-relaxed">
      A CDN caches your website content in multiple geographical locations called Points of Presence (PoPs). Each PoP contains edge servers responsible for delivering content to users nearby. This reduces the distance between users and servers, ensuring faster delivery.
    </p>
    <p className="leading-relaxed">
      <strong>Example:</strong> Suppose your origin server is in Australia, and a CDN provider like XYZ is used. When a user in India requests a video:
    </p>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>The user's local DNS server forwards the request to your website's authoritative DNS server.</li>
      <li>The authoritative server identifies the user is far away and sends the request to XYZ’s DNS server.</li>
      <li>XYZ’s network returns the address of the nearest edge server to the local DNS server.</li>
      <li>The edge server delivers the content to the user. Subsequent requests from the same local network are directly routed to the edge server.</li>
    </ol>
    <p className="leading-relaxed">
      By using PoPs close to users, a CDN reduces the number of hops and improves content delivery speed.
    </p>

    {/* Benefits */}
    <h2 className="text-3xl font-bold mt-8">Benefits of Using a CDN</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Improved Security:</strong> CDNs provide DDoS mitigation, security certificates, and optimizations.</li>
      <li><strong>Increased Availability and Redundancy:</strong> CDNs handle traffic spikes and hardware failures better than a single server.</li>
      <li><strong>Faster Load Times:</strong> Users are served content from nearby edge servers, reducing page load times and bounce rates.</li>
      <li><strong>Lower Bandwidth Costs:</strong> Caching and optimizations reduce the data an origin server must provide, lowering hosting costs.</li>
    </ul>

  </div>
);

export default Home;
