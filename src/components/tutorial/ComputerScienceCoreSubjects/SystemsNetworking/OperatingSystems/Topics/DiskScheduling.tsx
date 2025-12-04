import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Disk Scheduling Algorithms ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Disk Scheduling Algorithms
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 16 Sep, 2025</p>

    <p className="leading-relaxed text-lg">
      Disk scheduling algorithms manage how data is read from and written to a hard disk. They optimize disk operations, reduce access time, and improve system efficiency. Disk scheduling is also called I/O scheduling.
    </p>

    {/* Importance */}
    <h2 className="text-3xl font-bold mt-6">Importance in OS</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Multiple I/O requests may arrive; only one can be served at a time.</li>
      <li>Requests may be far apart, leading to increased disk arm movement.</li>
      <li>Hard drives are slow; efficient scheduling improves performance.</li>
    </ul>

    {/* Key Terms */}
    <h2 className="text-3xl font-bold mt-6">Key Terms</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Seek Time:</strong> Time to move disk arm to the track with data.</li>
      <li><strong>Rotational Latency:</strong> Time for the sector to rotate under the head.</li>
      <li><strong>Transfer Time:</strong> Time to read/write data.</li>
      <li><strong>Disk Access Time:</strong> Seek Time + Rotational Latency + Transfer Time</li>
      <li><strong>Total Seek Time:</strong> Total head movement × Seek Time</li>
    </ul>

    {/* Disk Response Time */}
    <h2 className="text-3xl font-bold mt-6">Disk Response Time</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Response Time:</strong> Time a request waits before I/O starts.</li>
      <li><strong>Average Response Time:</strong> Mean waiting time of all requests.</li>
      <li><strong>Variance in Response Time:</strong> Difference between individual waiting times and average.</li>
    </ul>

    {/* Goals */}
    <h2 className="text-3xl font-bold mt-6">Goals of Disk Scheduling</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Minimize seek time</li>
      <li>Maximize throughput</li>
      <li>Minimize latency</li>
      <li>Ensure fairness</li>
      <li>Efficient resource utilization</li>
    </ul>

    {/* Algorithms */}
    <h2 className="text-3xl font-bold mt-6">Disk Scheduling Algorithms</h2>
    <p className="leading-relaxed">
      Common methods include FCFS, SSTF, SCAN, C-SCAN, LOOK, C-LOOK, RSS, LIFO, N-STEP SCAN, and F-SCAN.
    </p>

    {/* FCFS */}
    <h3 className="text-2xl font-semibold mt-4">1. FCFS (First Come First Serve)</h3>
    <p>Requests are serviced in the order they arrive. Example:</p>
    <p>Requests: (82,170,43,140,24,16,190), Head at 50</p>
    <p>Total arm movement = 642</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Advantages: Fair to all requests, no indefinite postponement.</li>
      <li>Disadvantages: May not optimize seek time.</li>
    </ul>

    {/* SSTF */}
    <h3 className="text-2xl font-semibold mt-4">2. SSTF (Shortest Seek Time First)</h3>
    <p>Requests with the shortest seek time are served first. Example:</p>
    <p>Requests: (82,170,43,140,24,16,190), Head at 50</p>
    <p>Total arm movement = 208</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Advantages: Reduces average response time, increases throughput.</li>
      <li>Disadvantages: Can cause starvation, overhead to calculate seek times.</li>
    </ul>

    {/* SCAN */}
    <h3 className="text-2xl font-semibold mt-4">3. SCAN (Elevator Algorithm)</h3>
    <p>Disk arm moves in one direction servicing requests, reverses at the end. Example:</p>
    <p>Head at 50, moving towards larger values</p>
    <p>Total movement = 332</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Advantages: High throughput, low response time variance.</li>
      <li>Disadvantages: Long wait for requests just visited.</li>
    </ul>

    {/* C-SCAN */}
    <h3 className="text-2xl font-semibold mt-4">4. C-SCAN (Circular SCAN)</h3>
    <p>Disk arm moves in one direction, jumps to start instead of reversing. Example:</p>
    <p>Total movement = 391</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Advantage: Uniform wait time.</li>
    </ul>

    {/* LOOK */}
    <h3 className="text-2xl font-semibold mt-4">5. LOOK</h3>
    <p>Disk arm goes only as far as the last request before reversing. Example:</p>
    <p>Total movement = 314</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Advantages: Reduces unnecessary movement, faster response.</li>
    </ul>

    {/* C-LOOK */}
    <h3 className="text-2xl font-semibold mt-4">6. C-LOOK</h3>
    <p>Disk arm goes to the last request in one direction, then jumps to the last request in the other. Example:</p>
    <p>Total movement = 341</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Advantages: Uniform wait time, reduced head movement.</li>
    </ul>

    {/* RSS */}
    <h3 className="text-2xl font-semibold mt-4">7. RSS (Random Scheduling)</h3>
    <p>Used when scheduling involves random attributes like random processing times, due dates, or machine breakdowns. Mainly for simulation/analysis.</p>

    {/* LIFO */}
    <h3 className="text-2xl font-semibold mt-4">8. LIFO (Last In First Out)</h3>
    <p>Newest requests are serviced first.</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Advantages: Maximizes resource utilization.</li>
      <li>Disadvantages: Can cause starvation of older requests.</li>
    </ul>

    {/* N-STEP SCAN */}
    <h3 className="text-2xl font-semibold mt-4">9. N-STEP SCAN</h3>
    <p>Requests are grouped into N-sized buffers. Each buffer is serviced completely before moving to the next.</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Advantages: Eliminates starvation.</li>
    </ul>

    {/* F-SCAN */}
    <h3 className="text-2xl font-semibold mt-4">10. F-SCAN</h3>
    <p>Uses two sub-queues. First queue is serviced while new requests go to the second queue.</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Advantages: Prevents arm stickiness, ensures fairness.</li>
    </ul>

  </div>
);

export default Home;
