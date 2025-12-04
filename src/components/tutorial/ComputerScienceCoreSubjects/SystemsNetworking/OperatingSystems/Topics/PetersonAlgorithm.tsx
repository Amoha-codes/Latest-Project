import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Peterson's Algorithm ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Peterson's Algorithm in Process Synchronization
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 29 Aug, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Peterson’s Algorithm is a classic software-based solution for the critical section problem in operating systems. 
      It ensures <strong>mutual exclusion</strong> between two processes, meaning only one process can access a shared resource at a time, preventing race conditions.
    </p>

    {/* Shared Variables */}
    <h2 className="text-3xl font-bold mt-8">Shared Variables</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>flag[i]:</strong> Indicates whether process i wants to enter the critical section.</li>
      <li><strong>turn:</strong> Indicates whose turn it is to enter if both processes want access at the same time.</li>
    </ul>

    {/* Algorithm */}
    <h2 className="text-3xl font-bold mt-8">The Algorithm</h2>
    <p className="leading-relaxed">
      For process <strong>Pi</strong>:
    </p>
    <pre className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm overflow-x-auto">
{`do {
    flag[i] = true;         // Pi wants to enter
    turn = j;               // Give turn to Pj

    while (flag[j] && turn == j);  // Wait if Pj also wants to enter

    // Critical Section

    flag[i] = false;        // Pi leaves critical section

    // Remainder Section
} while (true);`}
    </pre>

    <p className="leading-relaxed mt-4">
      For process <strong>Pj</strong>:
    </p>
    <pre className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm overflow-x-auto">
{`do {
    flag[j] = true;         
    turn = i;               

    while (flag[i] && turn == i);

    // Critical Section

    flag[j] = false;        

    // Remainder Section
} while (true);`}
    </pre>

    {/* Step-by-Step Explanation */}
    <h2 className="text-3xl font-bold mt-8">Step-by-Step Explanation</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Intent to Enter:</strong> Process sets its flag to true when it wants to enter.</li>
      <li><strong>Turn Assignment:</strong> Gives turn to the other process to allow it priority.</li>
      <li><strong>Waiting Condition:</strong> Waits if the other process wants to enter and it’s the other’s turn.</li>
      <li><strong>Critical Section:</strong> Enters safely once the condition is false.</li>
      <li><strong>Exit:</strong> Resets flag to false, allowing the other process to proceed.</li>
    </ul>

    <p className="leading-relaxed mt-2">
      This guarantees:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Mutual Exclusion: Only one process enters the critical section.</li>
      <li>Progress: A process will eventually enter if no other is inside.</li>
      <li>Bounded Waiting: No process waits indefinitely.</li>
    </ul>

    {/* Example Use Cases */}
    <h2 className="text-3xl font-bold mt-8">Example Use Cases</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Accessing a shared printer: Ensures only one process can print at a time.</li>
      <li>Reading/writing a shared file: Prevents concurrent access issues.</li>
      <li>Competing for a shared resource: Ensures mutual exclusion for resources like network connections or hardware.</li>
    </ul>
    <p className="leading-relaxed mt-2">
      <strong>Note:</strong> Modern systems usually rely on hardware instructions or higher-level concurrency primitives rather than Peterson's Algorithm.
    </p>

    {/* Peterson's Algorithm Code */}
    <h2 className="text-3xl font-bold mt-8">Peterson's Algorithm in C++ Example</h2>
    <pre className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm overflow-x-auto">
{`#include <iostream>
#include <thread>
#include <vector>

const int N = 2; // Number of threads
std::vector<bool> flag(N, false);
int turn = 0;

void process(int id) {
    int other = 1 - id;
    while (true) {
        // Entry Section
        flag[id] = true;
        turn = other;
        while (flag[other] && turn == other) { }

        // Critical Section
        std::cout << "Process " << id << " is in critical section\\n";

        // Exit Section
        flag[id] = false;

        // Remainder Section
        std::cout << "Process " << id << " is in remainder section\\n";
    }
}

int main() {
    std::thread t1(process, 0);
    std::thread t2(process, 1);

    t1.join();
    t2.join();

    return 0;
}`}
    </pre>

    {/* Code Explanation */}
    <h2 className="text-3xl font-bold mt-8">Explanation of the Code</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>flag[id] = true:</strong> Process expresses intent to enter the critical section.</li>
      <li><strong>turn = other:</strong> Gives priority to the other process if both want to enter.</li>
      <li><strong>while(flag[other] && turn == other):</strong> Busy wait until safe to enter.</li>
      <li><strong>Critical Section:</strong> Only one process enters at a time.</li>
      <li><strong>flag[id] = false:</strong> Resets intent after leaving, allowing the other process to enter.</li>
    </ul>

  </div>
);

export default Home;
