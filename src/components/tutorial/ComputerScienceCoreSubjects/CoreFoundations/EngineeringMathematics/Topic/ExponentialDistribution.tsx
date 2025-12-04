import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Exponential Distribution ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Exponential Distribution
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 24 Jul, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      The Exponential Distribution models the time or space between events in a Poisson process. 
      It describes how long you have to wait before an event occurs, such as a bus arriving or a customer calling a help center.
    </p>

    {/* PDF */}
    <h2 className="text-3xl font-bold mt-8">Probability Density Function (PDF)</h2>
    <p className="leading-relaxed">
      The PDF of the Exponential Distribution is:
    </p>
    <p className="font-mono bg-gray-400 p-2 rounded-lg">
      f(x; λ) = λ * e<sup>-λx</sup>, x ≥ 0
    </p>
    <p className="leading-relaxed">
      Where λ &gt; 0 is the rate parameter, and x is the time until the next event.
    </p>

    {/* CDF */}
    <h2 className="text-3xl font-bold mt-8">Cumulative Distribution Function (CDF)</h2>
    <p className="leading-relaxed">
      The CDF gives the probability that the event occurs within time x:
    </p>
    <p className="font-mono bg-gray-400 p-2 rounded-lg">
      F(x; λ) = 1 - e<sup>-λx</sup>, x ≥ 0
    </p>

    {/* Mean and Variance */}
    <h2 className="text-3xl font-bold mt-8">Mean and Variance</h2>
    <ul className="list-disc ml-6 space-y-2">
      <li><strong>Mean:</strong> E[X] = 1 / λ</li>
      <li><strong>Variance:</strong> Var[X] = 1 / λ²</li>
    </ul>

    {/* Memoryless Property */}
    <h2 className="text-3xl font-bold mt-8">Memoryless Property</h2>
    <p className="leading-relaxed">
      The exponential distribution is memoryless, meaning:
    </p>
    <p className="font-mono bg-gray-400 p-2 rounded-lg">
      P(X &gt; s + t | X &gt; s) = P(X &gt; t)
    </p>
    <p className="leading-relaxed">
      The probability of waiting longer does not depend on how long you’ve already waited.
    </p>

    {/* Example */}
    <h2 className="text-3xl font-bold mt-8">Example: Customer Support Calls</h2>
    <p className="leading-relaxed">
      Suppose calls come at an average rate of 2 per minute. What is the probability of waiting more than 30 seconds for the next call?
    </p>
    <ul className="list-disc ml-6 space-y-2">
      <li>Rate: λ = 2 calls/minute</li>
      <li>Convert 30 seconds to minutes: 0.5 min</li>
      <li>Probability: 
        <span className="font-mono block mt-1">
          P(X &gt; 0.5) = e<sup>-λx</sup> = e<sup>-2*0.5</sup> ≈ 0.3679
        </span>
      </li>
    </ul>
    <p className="leading-relaxed">
      There is about a 36.79% chance the next call comes after 30 seconds.
    </p>

    {/* Python Implementation */}
    <h2 className="text-3xl font-bold mt-8">Python Implementation</h2>
    <p className="leading-relaxed">
      Generate and visualize exponential data using NumPy, Matplotlib, and Seaborn:
    </p>
    <pre className="bg-gray-400 p-4 rounded-lg overflow-x-auto font-mono shadow-inner">
{`import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Set rate parameter lambda
lam = 1.5

# Generate exponential data
data = np.random.exponential(1/lam, 1000)

# Plot KDE and histogram
sns.histplot(data, kde=True, stat="density")
plt.title("Exponential Distribution (lambda=1.5)")
plt.xlabel("Time")
plt.ylabel("Density")
plt.show()`}
    </pre>

    {/* Note */}
    <h2 className="text-3xl font-bold mt-8">Note</h2>
    <p className="leading-relaxed">
      The exponential distribution is closely related to the Poisson distribution. 
      If events follow a Poisson process with rate λ, the time between events is exponentially distributed with the same parameter λ.
    </p>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Real-World Applications</h2>
    <ul className="list-disc ml-6 space-y-2">
      <li>Call Centers: Time between incoming calls</li>
      <li>Bank Queues: Time between customer arrivals</li>
      <li>Web Servers: Time between requests</li>
      <li>Manufacturing: Time until a machine part fails</li>
      <li>Transport: Time between buses or trains</li>
    </ul>

  </div>
);

export default Home;
