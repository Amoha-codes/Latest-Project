import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Leaky Bucket Algorithm ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Leaky Bucket Algorithm
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 03 Oct, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      The Leaky Bucket algorithm is a traffic-shaping mechanism that controls the data flow
      rate in networks. Incoming packets are stored in a fixed-size buffer (bucket) and are
      transmitted at a constant rate. If the bucket overflows due to incoming bursts, the
      excess packets are discarded.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Ensures smooth, constant-rate transmission.</li>
      <li>Discarding occurs when the bucket buffer overflows.</li>
      <li>Controls bursty senders by enforcing a committed output rate.</li>
    </ul>

    {/* ================= Working Section ================= */}
    <h2 className="text-3xl font-bold mt-8">Working of Leaky Bucket Algorithm</h2>
    <p className="leading-relaxed">
      The algorithm uses a FIFO queue to regulate outgoing traffic. Fixed-size packets are
      removed at each clock tick, while variable-size packets are transmitted based on a
      constant bit or byte rate.
    </p>

    <p className="leading-relaxed">The algorithm for variable-length packets:</p>

    <ul className="list-decimal ml-6 leading-relaxed">
      <li>Initialize a counter to <strong>n</strong> at each clock tick.</li>
      <li>
        Repeat until <strong>n</strong> becomes smaller than the size of the packet at the
        queue head:
        <ul className="list-disc ml-6">
          <li>Remove packet P from the queue.</li>
          <li>Send packet P to the network.</li>
          <li>Decrease <strong>n</strong> by the size of P.</li>
        </ul>
      </li>
      <li>Reset the counter and repeat on the next clock tick.</li>
    </ul>

    {/* ================= Example Section ================= */}
    <h2 className="text-3xl font-bold mt-8">Example</h2>

    <p className="leading-relaxed">
      Let <strong>n = 1000</strong>.  
      Suppose packet sizes are {`{200, 400, 450}`}.  
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Since 1000 &gt; 200, send packet of 200 → remaining n = 800</li>
      <li>Since 800 &gt; 400, send packet of 400 → remaining n = 400</li>
      <li>Since 400 &lt; 450, stop and wait for next clock tick</li>
      <li>Reset n = 1000 and repeat</li>
    </ul>

    {/* ================= C++ Code Block ================= */}
    <h2 className="text-3xl font-bold mt-8">Implementation (C++)</h2>

    <pre className="bg-gray-400 p-4 rounded-lg overflow-x-auto text-sm">
{`// C++ program to implement Leaky Bucket Algorithm
#include <bits/stdc++.h>
using namespace std;

int main() {
    int no_of_queries, storage, output_pkt_size;
    int input_pkt_size, bucket_size, size_left;

    storage = 0;            // initial packets in bucket
    no_of_queries = 4;      // number of checks
    bucket_size = 10;       // max bucket capacity
    input_pkt_size = 4;     // packets entering at a time
    output_pkt_size = 1;    // packets leaving at a time

    for (int i = 0; i < no_of_queries; i++) {
        size_left = bucket_size - storage;

        if (input_pkt_size <= size_left) {
            storage += input_pkt_size;
        } else {
            printf("Packet loss = %d\\n", input_pkt_size);
        }

        printf("Buffer size = %d out of bucket size = %d\\n",
               storage, bucket_size);

        storage -= output_pkt_size;
    }
    return 0;
}`}
    </pre>

    <h3 className="text-xl font-semibold mt-4">Output</h3>
    <pre className="bg-gray-400 p-4 rounded-lg overflow-x-auto text-sm">
{`Buffer size= 4 out of bucket size= 10
Buffer size= 7 out of bucket size= 10
Buffer size= 10 out of bucket size= 10
Packet loss = 4
Buffer size= 9 out of bucket size= 10`}
    </pre>

    {/* ================= Difference Section ================= */}
    <h2 className="text-3xl font-bold mt-8">
      Difference Between Leaky Bucket and Token Bucket
    </h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Leaky: packets enter bucket → Token: bucket stores tokens.</li>
      <li>Leaky: constant leak rate → Token: bucket has max capacity.</li>
      <li>Leaky: converts bursty traffic to uniform → Token: allows bursts.</li>
      <li>Leaky: finite queue output → Token: packets sent only when tokens exist.</li>
    </ul>

    {/* ================= Advantages Section ================= */}
    <h2 className="text-3xl font-bold mt-8">Advantages of Leaky Bucket</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>No token wastage as in Token Bucket.</li>
      <li>Lower delay since no waiting for tokens.</li>
      <li>Flexible for variable traffic patterns.</li>
      <li>Simple to implement and maintain.</li>
      <li>Prevents congestion by enforcing steady output rate.</li>
    </ul>

  </div>
);

export default Home;
