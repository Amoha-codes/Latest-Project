import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= SSTF Disk Scheduling ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      SSTF Disk Scheduling Algorithm
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Jul, 2025</p>

    <p className="leading-relaxed text-lg">
      SSTF (Shortest Seek Time First) is a disk scheduling algorithm that selects the disk request closest to the current head position, minimizing seek operations.
    </p>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-6">Advantages</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Better performance than FCFS scheduling.</li>
      <li>Provides higher throughput.</li>
      <li>Reduces average response and waiting time.</li>
      <li>Ideal for batch processing systems.</li>
    </ul>

    {/* Disadvantages */}
    <h2 className="text-3xl font-bold mt-6">Disadvantages</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Starvation possible for far-away requests.</li>
      <li>High variance in response time, unpredictable behavior.</li>
      <li>Direction switching can slow performance.</li>
    </ul>

    {/* Algorithm */}
    <h2 className="text-3xl font-bold mt-6">Algorithm Steps</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Let the request array store requested track numbers, and 'head' be the current head position.</li>
      <li>Calculate the absolute distance of all tracks from the head.</li>
      <li>Select the unaccessed track with minimum distance.</li>
      <li>Increment total seek count by this distance.</li>
      <li>Move head to the serviced track.</li>
      <li>Repeat until all tracks are serviced.</li>
    </ol>

    {/* Example */}
    <h2 className="text-3xl font-bold mt-6">Example</h2>
    <p>Request sequence: {`{176, 79, 34, 60, 92, 11, 41, 114}`}</p>
    <p>Initial head position: 50</p>
    <p>Total seek count calculation:</p>
    <p className="ml-6">
      = (50-41) + (41-34) + (34-11) + (60-11) + (79-60) + (92-79) + (114-92) + (176-114) = 204
    </p>
    <p>Seek sequence: 50, 41, 34, 11, 60, 79, 92, 114, 176</p>

    {/* Implementation */}
    <h2 className="text-3xl font-bold mt-6">C++ Implementation</h2>
    <pre className="bg-gray-400 p-4 rounded-lg overflow-x-auto text-sm">
{`#include <bits/stdc++.h>
using namespace std;

void calculateDifference(int request[], int head, int diff[][2], int n) {
    for(int i = 0; i < n; i++) diff[i][0] = abs(head - request[i]);
}

int findMIN(int diff[][2], int n) {
    int index = -1, minimum = 1e9;
    for(int i = 0; i < n; i++)
        if (!diff[i][1] && minimum > diff[i][0]) {
            minimum = diff[i][0]; index = i;
        }
    return index;
}

void shortestSeekTimeFirst(int request[], int head, int n) {
    if(n == 0) return;
    int diff[n][2] = {{0,0}};
    int seekcount = 0;
    int seeksequence[n+1] = {0};

    for(int i = 0; i < n; i++) {
        seeksequence[i] = head;
        calculateDifference(request, head, diff, n);
        int index = findMIN(diff, n);
        diff[index][1] = 1;
        seekcount += diff[index][0];
        head = request[index];
    }
    seeksequence[n] = head;

    cout << "Total seek operations = " << seekcount << endl;
    cout << "Seek sequence:\n";
    for(int i = 0; i <= n; i++) cout << seeksequence[i] << "\\n";
}

int main() {
    int n = 8;
    int proc[n] = {176, 79, 34, 60, 92, 11, 41, 114};
    shortestSeekTimeFirst(proc, 50, n);
    return 0;
}`}
    </pre>

    {/* Complexity */}
    <h2 className="text-3xl font-bold mt-6">Complexity</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Time Complexity: O(N²)</li>
      <li>Auxiliary Space: O(N)</li>
    </ul>
  </div>
);

export default Home;
