import React from 'react';

const CristianAlgorithm: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Cristian's Algorithm ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Cristian's Algorithm
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 17 Sep, 2025</p>

    {/* Introduction */}
    <p className="text-lg leading-relaxed">
      Cristian's Algorithm is a clock synchronization technique used to synchronize the local time 
      of a client process with a trusted time server. It works efficiently in low-latency networks 
      where the Round Trip Time (RTT) between request and response is small. In networks with high 
      latency or redundancy, the algorithm may not provide accurate synchronization.
    </p>

    {/* Algorithm Steps */}
    <h2 className="text-3xl font-bold mt-8">Algorithm Steps</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>The client sends a request for the current time to the clock server at <strong>T₀</strong>.</li>
      <li>The clock server receives the request and responds with its current time <strong>T_SERVER</strong>.</li>
      <li>The client receives the response at <strong>T₁</strong> and calculates its synchronized clock time:</li>
    </ol>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      T_CLIENT = T_SERVER + (T₁ - T₀) / 2
    </p>

    {/* Working / Reliability */}
    <h2 className="text-3xl font-bold mt-8">Working and Reliability</h2>
    <p className="leading-relaxed">
      The term <strong>(T₁ - T₀)</strong> represents the combined network and server processing delay. 
      Assuming symmetric network latency, the client’s clock differs from the true time by at most 
      <strong>(T₁ - T₀)/2</strong> seconds. Therefore, the synchronization error lies within:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      error ∈ [-(T₁ - T₀)/2, (T₁ - T₀)/2]
    </p>

    {/* Python Client Example */}
    <h2 className="text-3xl font-bold mt-8">Python Client Implementation</h2>
    <p className="leading-relaxed">
      Below is a Python example demonstrating a client synchronizing its clock using Cristian's Algorithm:
    </p>
    <pre className="bg-gray-400 p-4 rounded-lg overflow-x-auto text-sm">
{`import socket
import datetime
from dateutil import parser
from timeit import default_timer as timer

def synchronizeTime():
    s = socket.socket()
    port = 8000
    s.connect(('127.0.0.1', port))
    request_time = timer()
    server_time = parser.parse(s.recv(1024).decode())
    response_time = timer()
    actual_time = datetime.datetime.now()
    client_time = server_time + datetime.timedelta(seconds=(response_time - request_time)/2)
    error = actual_time - client_time
    print("Synchronization error:", error.total_seconds(), "seconds")
    s.close()

if __name__ == '__main__':
    synchronizeTime()`}
    </pre>

    {/* Improvement */}
    <h2 className="text-3xl font-bold mt-8">Improved Synchronization</h2>
    <p className="leading-relaxed">
      To reduce synchronization error, we can consider the minimum request and response times 
      over multiple iterations, <strong>T_min1</strong> and <strong>T_min2</strong>. The improved 
      synchronized client time can be calculated as:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      T_CLIENT = T_SERVER + (T₁ - T₀)/2 + (T_min2 - T_min1)/2
    </p>
    <p className="leading-relaxed">
      This method accounts for network variations and clock drift, resulting in more accurate 
      synchronization over iterative tests.
    </p>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Simple and easy to implement on most systems.</li>
      <li>Fast synchronization with minimal network traffic.</li>
      <li>Efficient for small networks with low latency.</li>
      <li>Reduces the need for complex distributed algorithms for clock synchronization.</li>
    </ul>

    {/* Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Disadvantages</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Requires a trusted time server; inaccurate server time causes errors.</li>
      <li>Limited scalability for large networks or high-latency environments.</li>
      <li>Does not handle network failures effectively.</li>
      <li>Vulnerable to attacks like man-in-the-middle attacks.</li>
    </ul>

  </div>
);

export default CristianAlgorithm;
