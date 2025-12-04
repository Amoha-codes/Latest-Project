import React from "react";

const HTTPTheory: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= HTTP ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Hypertext Transfer Protocol (HTTP)
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 16 Oct, 2025</p>

    {/* Introduction */}
    <p className="text-lg leading-relaxed">
      HTTP (Hypertext Transfer Protocol) is a fundamental Internet protocol that enables data transfer between a client and a server. It is the foundation of the World Wide Web and provides a standard for communication between web browsers and web servers.
    </p>

    {/* Features */}
    <h2 className="text-3xl font-bold mt-8">Features</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Stateless:</strong> Each request is independent; the server does not retain previous interactions.</li>
      <li><strong>Text-Based:</strong> Messages are in plain text, readable and debuggable.</li>
      <li><strong>Client-Server Model:</strong> Follows client-server architecture for resource requests and responses.</li>
      <li><strong>Request-Response:</strong> Operates on a request-response cycle.</li>
      <li><strong>Request Methods:</strong> Supports GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS, TRACE, CONNECT.</li>
      <li><strong>HTTP/3:</strong> Also called HTTP QUIC, developed by Google for improved performance.</li>
    </ul>

    {/* Methods */}
    <h2 className="text-3xl font-bold mt-8">HTTP Methods</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>GET:</strong> Retrieve data from a resource.</li>
      <li><strong>POST:</strong> Submit data to be processed.</li>
      <li><strong>PUT:</strong> Update or create a resource.</li>
      <li><strong>PATCH:</strong> Partially update a resource.</li>
      <li><strong>DELETE:</strong> Remove a resource.</li>
      <li><strong>HEAD:</strong> Retrieve only headers of a resource.</li>
      <li><strong>OPTIONS:</strong> Get communication options for a resource.</li>
      <li><strong>TRACE:</strong> Echo request for debugging.</li>
      <li><strong>CONNECT:</strong> Establish a tunnel via HTTP proxy, often for SSL/TLS.</li>
    </ul>

    {/* HTTP Request-Response */}
    <h2 className="text-3xl font-bold mt-8">HTTP Request/Response</h2>
    <p className="leading-relaxed">
      HTTP is a request-response protocol. The client sends a request, the server processes it, and returns a response. The response includes a status code, headers, and optional body.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Example of HTTP Requests</h3>
    <table className="table-auto border-collapse border border-gray-400 w-full text-left">
      <thead>
        <tr>
          <th className="border border-gray-400 px-4 py-2">Requested Resource</th>
          <th className="border border-gray-400 px-4 py-2">Resource Type</th>
          <th className="border border-gray-400 px-4 py-2">Server Response</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-400 px-4 py-2">HTML Page</td>
          <td className="border border-gray-400 px-4 py-2">HTML</td>
          <td className="border border-gray-400 px-4 py-2">Server sends HTML file</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">CSS</td>
          <td className="border border-gray-400 px-4 py-2">CSS</td>
          <td className="border border-gray-400 px-4 py-2">Server sends CSS file</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Image</td>
          <td className="border border-gray-400 px-4 py-2">Image (JPG/PNG)</td>
          <td className="border border-gray-400 px-4 py-2">Server sends image</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">JavaScript</td>
          <td className="border border-gray-400 px-4 py-2">JS</td>
          <td className="border border-gray-400 px-4 py-2">Server sends JS file</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Data</td>
          <td className="border border-gray-400 px-4 py-2">XML/JSON</td>
          <td className="border border-gray-400 px-4 py-2">Server sends XML/JSON data</td>
        </tr>
      </tbody>
    </table>

    {/* Request & Response Components */}
    <h2 className="text-3xl font-bold mt-8">HTTP Request and Response Components</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Request Headers:</strong> Key-value info about the client and requested data.</li>
      <li><strong>Request Body:</strong> Data sent to the server (forms, authentication, etc.).</li>
      <li><strong>Response:</strong> Status code, headers, and optional body from the server.</li>
      <li><strong>Status Codes:</strong> 1xx (Informational), 2xx (Success), 3xx (Redirection), 4xx (Client Error), 5xx (Server Error).</li>
      <li><strong>Response Headers:</strong> Information like content type, language, caching.</li>
      <li><strong>Response Body:</strong> Actual data/content returned (HTML, JSON, images, etc.).</li>
    </ul>

    {/* History */}
    <h2 className="text-3xl font-bold mt-8">History of HTTP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Invented by Tim Berners-Lee at CERN.</li>
      <li>HTTP/0.9: Initial version (1991).</li>
      <li>HTTP/1.0: Introduced in 1996 (RFC 1945).</li>
      <li>HTTP/1.1: Introduced 1997 (RFC 2068, refined RFC 2616 in 1999).</li>
      <li>HTTP/2.0: Published 2015 (RFC 7540).</li>
      <li>HTTP/3: Based on QUIC protocol, developed by Google.</li>
    </ul>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages of HTTP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Platform independent.</li>
      <li>Compatible with various protocols and technologies.</li>
      <li>Optimized for performance.</li>
      <li>Supports encryption for secure transfers.</li>
    </ul>

    {/* Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Disadvantages of HTTP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Vulnerable to attacks like man-in-the-middle.</li>
      <li>Performance issues for large data transfers.</li>
      <li>Statelessness requires additional mechanisms to maintain state.</li>
    </ul>

  </div>
);

export default HTTPTheory;
