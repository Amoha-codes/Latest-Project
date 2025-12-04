import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Homogeneous Poisson Process ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Homogeneous Poisson Process
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Jul, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      The Homogeneous Poisson Process models random events occurring over time or space. It is widely used in probability theory to represent counting processes under certain assumptions.
    </p>

    {/* Assumptions */}
    <h2 className="text-3xl font-bold mt-8">Assumptions</h2>
    <ul className="list-disc ml-6 space-y-2">
      <li>Occurrences in disjoint intervals are independent</li>
      <li>The probability of a single occurrence in a small interval is proportional to the interval length</li>
      <li>The probability of more than one occurrence in a small interval is negligible</li>
    </ul>

    {/* PMF */}
    <h2 className="text-3xl font-bold mt-8">Probability Mass Function (PMF)</h2>
    <p className="leading-relaxed">
      Let X(t) denote the number of occurrences in a time interval of length t. Then the PMF is:
    </p>
    <p className="font-mono bg-gray-400 p-2 rounded-lg">
      P(X(t) = n) = (λt)ⁿ * e⁻λt / n!
    </p>
    <p className="leading-relaxed">
      Here, λ is the rate of occurrence. This formula gives the probability of exactly n events in the interval t.
    </p>

    {/* Examples */}
    <h2 className="text-3xl font-bold mt-8">Examples</h2>
    <ul className="list-disc ml-6 space-y-2">
      <li>Number of accidents on a road in a day</li>
      <li>Number of earthquakes in a region over a year</li>
      <li>Number of customer arrivals at a call center</li>
    </ul>

    {/* Derivation */}
    <h2 className="text-3xl font-bold mt-8">Derivation Overview</h2>
    <p className="leading-relaxed">
      1. For a small interval h:
    </p>
    <p className="font-mono bg-gray-400 p-2 rounded-lg">
      P(X(h) = 1) = λh, &nbsp; P(X(h) 1) ≈ 0, &nbsp; P(X(h) = 0) = 1 - λh
    </p>
    <p className="leading-relaxed">
      2. Using independence of intervals and first-order approximations, we derive the differential equations for P₀(t), P₁(t), … , Pₙ(t).
    </p>
    <p className="leading-relaxed">
      3. Solving these differential equations gives the PMF:
    </p>
    <p className="font-mono bg-gray-400 p-2 rounded-lg">
      Pₙ(t) = (λt)ⁿ * e⁻λt / n!
    </p>
    <p className="leading-relaxed">
      This is valid for n = 0, 1, 2, … and proves that the number of occurrences follows a Poisson Distribution.
    </p>

    {/* Extension */}
    <h2 className="text-3xl font-bold mt-8">Extension</h2>
    <p className="leading-relaxed">
      If λ varies with time, the process is called a Non-Homogeneous Poisson Process. The homogeneous case assumes λ is constant over time.
    </p>

    {/* Python Implementation */}
    <h2 className="text-3xl font-bold mt-8">Python Implementation</h2>
    <pre className="bg-gray-400 p-4 rounded-lg overflow-x-auto font-mono shadow-inner">
{`import numpy as np
import matplotlib.pyplot as plt

lambda_rate = 3  # events per interval
time_interval = 10
size = 1000

# Simulate number of events in Poisson process
data = np.random.poisson(lam=lambda_rate*time_interval, size=size)

plt.hist(data, bins=30, density=True, alpha=0.7, color='skyblue')
plt.title('Homogeneous Poisson Process')
plt.xlabel('Number of Events')
plt.ylabel('Probability')
plt.show()`}
    </pre>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <ul className="list-disc ml-6 space-y-2">
      <li>Call centers: number of calls in a time period</li>
      <li>Traffic flow: number of cars passing a checkpoint</li>
      <li>Natural events: earthquakes, meteor strikes</li>
      <li>Network traffic: number of packets received in a time interval</li>
    </ul>

  </div>
);

export default Home;
