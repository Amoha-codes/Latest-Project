import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Bakery Algorithm ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Bakery Algorithm in Process Synchronization
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 25 Aug, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      The Bakery Algorithm, proposed by Leslie Lamport, is a well-known solution for mutual exclusion for <strong>N processes</strong>.
      It guarantees fairness and follows a <strong>First-Come-First-Serve (FCFS)</strong> order using a ticketing system.
    </p>

    {/* How it works */}
    <h2 className="text-3xl font-bold mt-8">How the Bakery Algorithm Works</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Each process takes a ticket (number) before entering the critical section.</li>
      <li>The process with the smallest ticket enters the critical section first.</li>
      <li>If two processes have the same ticket, the process with the smaller process ID is prioritized.</li>
      <li>Numbers always increase in lexicographical order: (ticket number, process ID).</li>
    </ul>

    {/* Shared Data and Notation */}
    <h2 className="text-3xl font-bold mt-8">Shared Data & Notation</h2>
    <p className="leading-relaxed">
      Two arrays are used:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>choosing[0..n-1]</strong> - boolean array indicating if a process is choosing its ticket.</li>
      <li><strong>number[0..n-1]</strong> - integer array storing the ticket numbers for each process.</li>
    </ul>

    {/* Pseudocode */}
    <h2 className="text-3xl font-bold mt-8">Algorithm Pseudocode</h2>
    <pre className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm overflow-x-auto">
{`repeat
    choosing[i] := true
    number[i] := max(number[0..n-1]) + 1
    choosing[i] := false

    for j := 0 to n-1 do
        while choosing[j] do skip
        while number[j] ≠ 0 and (number[j], j) < (number[i], i) do skip
    end for

    critical section

    number[i] := 0
    remainder section
until false`}
    </pre>

    {/* Explanation */}
    <h2 className="text-3xl font-bold mt-8">Step-by-Step Explanation</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Choosing a Ticket:</strong> Process announces choosing, assigns next highest ticket, then finishes choosing.</li>
      <li><strong>Waiting Phase:</strong> Wait if another process is still choosing or has a smaller ticket (or same ticket but smaller ID).</li>
      <li><strong>Critical Section:</strong> Enter when no process has priority.</li>
      <li><strong>Exit Section:</strong> Release the ticket by setting number[i] := 0.</li>
      <li>Ensures <strong>Mutual Exclusion</strong>, <strong>Fairness (FCFS)</strong>, no deadlock, and no starvation.</li>
    </ul>

    {/* C++ Implementation */}
    <h2 className="text-3xl font-bold mt-8">C++ Implementation</h2>
    <pre className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm overflow-x-auto">
{`#include <iostream>
#include <thread>
#include <vector>
#include <atomic>
#include <mutex>
#include <chrono>

#define THREAD_COUNT 8

std::vector<std::atomic<int>> tickets(THREAD_COUNT);
std::vector<std::atomic<int>> choosing(THREAD_COUNT);
volatile int resource = 0;
std::mutex mtx; // For safe printing

void lock(int thread) {
    choosing[thread].store(1, std::memory_order_relaxed);
    int max_ticket = 0;
    for (int i = 0; i < THREAD_COUNT; ++i) {
        int t = tickets[i].load(std::memory_order_relaxed);
        if (t > max_ticket) max_ticket = t;
    }
    tickets[thread].store(max_ticket + 1, std::memory_order_relaxed);
    choosing[thread].store(0, std::memory_order_relaxed);

    for (int other = 0; other < THREAD_COUNT; ++other) {
        if (other == thread) continue;
        while (choosing[other].load(std::memory_order_relaxed)) { std::this_thread::yield(); }
        while (tickets[other].load(std::memory_order_relaxed) != 0 &&
              (tickets[other].load(std::memory_order_relaxed) < tickets[thread].load(std::memory_order_relaxed) ||
              (tickets[other].load(std::memory_order_relaxed) == tickets[thread].load(std::memory_order_relaxed) && other < thread))) {
            std::this_thread::yield();
        }
    }
}

void unlock(int thread) { tickets[thread].store(0, std::memory_order_relaxed); }

void use_resource(int thread) {
    std::lock_guard<std::mutex> lock(mtx);
    resource = thread;
    std::cout << "Thread " << thread << " using resource\\n";
    std::this_thread::sleep_for(std::chrono::microseconds(50));
    resource = 0;
}

void thread_body(int thread) { lock(thread); use_resource(thread); unlock(thread); }

int main() {
    for (int i = 0; i < THREAD_COUNT; ++i) { tickets[i].store(0); choosing[i].store(0); }
    std::vector<std::thread> threads;
    for (int i = 0; i < THREAD_COUNT; ++i) threads.emplace_back(thread_body, i);
    for (auto &t : threads) t.join();
    return 0;
}`}
    </pre>

    {/* Advantages and Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Fairness: Ensures all processes get a fair chance to access the critical section.</li>
      <li>Easy to Implement: Uses simple ticket and flag concepts.</li>
      <li>No Deadlock: System will never deadlock.</li>
      <li>No Starvation: Every process eventually enters the critical section.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Disadvantages</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Not Scalable: Overhead increases with the number of processes.</li>
      <li>High Time Complexity: Waiting loops increase as threads increase.</li>
      <li>Busy Waiting: CPU cycles are wasted during waiting.</li>
      <li>Memory Overhead: Extra arrays for tickets and choosing are required.</li>
    </ul>

  </div>
);

export default Home;
