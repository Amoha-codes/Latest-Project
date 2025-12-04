import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Title ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Difference between OSPF and IS-IS
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 15 Jul, 2025</p>

    {/* ================= Intro Section ================= */}
    <p className="text-lg leading-relaxed">
      <strong>OSPF (Open Shortest Path First)</strong> is a popular link-state routing protocol 
      developed for high-functionality routing in TCP/IP networks. It supports features like 
      authentication, VLSM, route summarization, and is widely used within enterprise networks.
    </p>

    <p className="text-lg leading-relaxed">
      <strong>IS-IS (Intermediate System to Intermediate System)</strong> is a standardized 
      link-state IGP created for OSI networks and later adapted for IP routing. It is highly 
      scalable and commonly used in ISP backbone environments due to stability and robustness.
    </p>

    <h2 className="text-3xl font-bold mt-8">Difference between OSPF and IS-IS</h2>

    {/* ================= Table Section ================= */}
    <div className="overflow-x-auto">
      <table border={1} className="w-full border-collapse text-left text-sm">
        <thead className="bg-gray-400">
          <tr>
            <th className="p-2">S.No.</th>
            <th className="p-2">Parameter</th>
            <th className="p-2">OSPF</th>
            <th className="p-2">IS-IS</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="p-2">1</td>
            <td className="p-2">Administrative Distance</td>
            <td className="p-2">110</td>
            <td className="p-2">115</td>
          </tr>

          <tr>
            <td className="p-2">2</td>
            <td className="p-2">Standard</td>
            <td className="p-2">RFC 2328 (OSPFv2)</td>
            <td className="p-2">ISO 10589, RFC 1195</td>
          </tr>

          <tr>
            <td className="p-2">3</td>
            <td className="p-2">Operating OSI Layer</td>
            <td className="p-2">Works over IP (Layer 3)</td>
            <td className="p-2">Operates over Layer 2</td>
          </tr>

          <tr>
            <td className="p-2">4</td>
            <td className="p-2">Virtual Links Supported</td>
            <td className="p-2">Yes</td>
            <td className="p-2">No</td>
          </tr>

          <tr>
            <td className="p-2">5</td>
            <td className="p-2">DR/BDR Election</td>
            <td className="p-2">Elects DR and BDR</td>
            <td className="p-2">Elects a single DIS</td>
          </tr>

          <tr>
            <td className="p-2">6</td>
            <td className="p-2">IP Connectivity Required</td>
            <td className="p-2">Yes</td>
            <td className="p-2">No (uses CLNS)</td>
          </tr>

          <tr>
            <td className="p-2">7</td>
            <td className="p-2">Supported Networks</td>
            <td className="p-2">NBMA & Point-to-Multipoint supported</td>
            <td className="p-2">Not supported</td>
          </tr>

          <tr>
            <td className="p-2">8</td>
            <td className="p-2">Router Area Membership</td>
            <td className="p-2">Can belong to multiple areas</td>
            <td className="p-2">Belongs to one area only</td>
          </tr>

          <tr>
            <td className="p-2">9</td>
            <td className="p-2">Area / Level Types</td>
            <td className="p-2">Backbone, Standard Area</td>
            <td className="p-2">Level 1, Level 2, Level 1/2</td>
          </tr>

          <tr>
            <td className="p-2">10</td>
            <td className="p-2">Security</td>
            <td className="p-2">More prone to attack</td>
            <td className="p-2">More secure (runs over L2)</td>
          </tr>

          <tr>
            <td className="p-2">11</td>
            <td className="p-2">Identification</td>
            <td className="p-2">Uses Router ID</td>
            <td className="p-2">Uses System ID</td>
          </tr>

          <tr>
            <td className="p-2">12</td>
            <td className="p-2">Flexibility</td>
            <td className="p-2">Less Flexible</td>
            <td className="p-2">Highly Flexible in ISP domain</td>
          </tr>

          <tr>
            <td className="p-2">13</td>
            <td className="p-2">Table Refresh</td>
            <td className="p-2">Refreshes entire table every 30 min</td>
            <td className="p-2">No periodic full refresh</td>
          </tr>

          <tr>
            <td className="p-2">14</td>
            <td className="p-2">Related Terms</td>
            <td className="p-2">Area, ABR, ASBR, Backbone, Host</td>
            <td className="p-2">IS, L1, L2, L1/L2, Subdomain, ES</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* ================= Conclusion ================= */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      OSPF is widely used in enterprise networks for its flexibility and compatibility with IP,
      while IS-IS is preferred in large ISP environments due to scalability, stability, and its
      independence from IP transport. Both are powerful link-state protocols but serve different
      operational needs.
    </p>

  </div>
);

export default Home;
