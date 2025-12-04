import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Deadlock Free Condition ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Program for Deadlock Free Condition in Operating System
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Jul, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Deadlock occurs when two or more processes wait indefinitely for resources held 
      by each other, forming a circular dependency that halts system progress. 
      Deadlocks occur only when all four conditions exist simultaneously:
      <strong> Mutual Exclusion</strong>, <strong>Hold and Wait</strong>, 
      <strong> No Preemption</strong>, and <strong>Circular Wait</strong>.
    </p>

    <p className="leading-relaxed">
      To maintain smooth system execution, deadlocks must be avoided. Below we study 
      the mathematical condition and programmatic implementation to ensure the system 
      remains deadlock-free.
    </p>

    {/* Mathematical Condition Section */}
    <h2 className="text-3xl font-bold mt-8">Mathematical Condition for Deadlock Avoidance</h2>

    <p className="leading-relaxed">
      For a system with <strong>R</strong> identical resources and <strong>P</strong> processes, 
      where each process may require up to <strong>N</strong> resources, the deadlock-free 
      condition is:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm font-semibold">
      R ≥ P × (N − 1) + 1
    </p>

    <p className="leading-relaxed">
      This ensures that even if every process holds <strong>N − 1</strong> resources, 
      at least one extra resource will still be available so that one process can 
      complete, release its resources, and allow others to proceed.
    </p>

    <h3 className="text-2xl font-bold mt-6">Examples</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>P = 3, N = 4 → R ≥ 10</li>
      <li>P = 7, N = 2 → R ≥ 8</li>
    </ul>

    {/* C++ Program Section */}
    <h2 className="text-3xl font-bold mt-8">Implementation Using Mathematical Condition</h2>

    <p className="leading-relaxed">
      The following program calculates the minimum number of resources required to 
      guarantee a deadlock-free system:
    </p>

    <pre className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm whitespace-pre-wrap">
{`// C++ implementation of determining minimum resources
#include <bits/stdc++.h>
using namespace std;

// Function to compute minimum resources
int Resources(int process, int need) {
    return process * (need - 1) + 1;
}

int main() {
    int process = 3, need = 4;
    cout << "R >= " << Resources(process, need);
    return 0;
}`}
    </pre>

    <p className="leading-relaxed font-semibold">
      Output: R ≥ 10
    </p>

    <p className="leading-relaxed">
      At 3 resources per process, 1 extra resource remains available. 
      That single resource ensures one process always completes, releasing its 
      resources and preventing deadlock.
    </p>

    {/* Semaphore Implementation Section */}
    <h2 className="text-3xl font-bold mt-10">Implementation Using Semaphores</h2>

    <p className="leading-relaxed">
      Below is a deadlock-free solution to the Dining Philosophers Problem using 
      semaphores. Deadlock is avoided by reversing the order of chopstick pickup 
      for one philosopher.
    </p>

    <pre className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm whitespace-pre-wrap">
{`#include <pthread.h>
#include <semaphore.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

sem_t chopstick[5]; // Semaphore for each chopstick

void* philosopher(void* arg) {
    int id = *(int*)arg;
    int left = id;
    int right = (id + 1) % 5;

    // Philosopher 4 picks in reverse order to avoid deadlock
    if (id == 4) {
        int temp = left;
        left = right;
        right = temp;
    }

    while (1) {
        sem_wait(&chopstick[left]);
        sem_wait(&chopstick[right]);

        printf("Philosopher %d is eating\\n", id);
        sleep(2);

        sem_post(&chopstick[left]);
        sem_post(&chopstick[right]);

        printf("Philosopher %d is thinking\\n", id);
        sleep(2);
    }
}

int main() {
    pthread_t philosophers[5];

    for (int i = 0; i < 5; i++) {
        sem_init(&chopstick[i], 0, 1);
    }

    for (int i = 0; i < 5; i++) {
        int* id = (int*)malloc(sizeof(int));
        *id = i;
        pthread_create(&philosophers[i], NULL, philosopher, id);
    }

    for (int i = 0; i < 5; i++) {
        pthread_join(philosophers[i], NULL);
    }

    for (int i = 0; i < 5; i++) {
        sem_destroy(&chopstick[i]);
    }

    return 0;
}`}
    </pre>

    <p className="leading-relaxed font-semibold mt-4">
      Output (sample):
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Philosopher 1 is eating<br />
      Philosopher 3 is eating<br />
      Philosopher 1 is thinking<br />
      Philosopher 0 is eating<br />
      Philosopher 3 is thinking<br />
      Philosopher 2 is eating<br />
      Philosopher 0 is thinking<br />
      Philosopher 4 is eating<br />
      ...
    </p>

    <p className="leading-relaxed">
      By reversing the order of chopstick pickup for one philosopher, circular wait 
      is prevented, ensuring a deadlock-free system.
    </p>

  </div>
);

export default Home;
