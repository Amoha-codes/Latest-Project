import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Nonhomogeneous Poisson Process ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Nonhomogeneous Poisson Process (NHPP)
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 21 Sep, 2018</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      A Nonhomogeneous Poisson Process models the number of events or failures up to time t when the event rate varies with time. Unlike the homogeneous case, the rate function λ(t) is time-dependent.
    </p>

    {/* Assumptions */}
    <h2 className="text-3xl font-bold mt-8">Assumptions</h2>
    <ul className="list-disc ml-6 space-y-2">
      <li>The process has independent increments; the number of failures in (t, t+s) depends on t and s, not past history</li>
       <li>Probability of exactly one failure in a small interval &Delta;t: P(1 failure in (t, t + &Delta;t)) &asymp; &lambda;(t) &Delta;t</li>
        <li>Probability of two or more failures in &Delta;t is negligible: P(&ge; 2 failures in (t, t + &Delta;t)) &asymp; 0</li>
         <li>Initial condition: N(0) = 0</li>
    </ul>

    {/* Probability */}
    <h2 className="text-3xl font-bold mt-8">Probability of n Failures</h2>
    <p className="leading-relaxed">
      Let m(t) denote the mean value function (expected number of failures up to time t):
    </p>
    <p className="font-mono bg-gray-400 p-2 rounded-lg">
      m(t) = E[N(t)] = ∫₀ᵗ λ(s) ds
    </p>
    <p className="leading-relaxed">
      Then the probability of exactly n failures in (0, t) is:
    </p>
    <p className="font-mono bg-gray-400 p-2 rounded-lg">
  P&#123;N(t) = n&#125; = [m(t)]<sup>n</sup> * e<sup>-m(t)</sup> / n!
</p>


    {/* Reliability */}
    <h2 className="text-3xl font-bold mt-8">Reliability Function</h2>
    <p className="leading-relaxed">
      The reliability function, the probability of zero failures in (0, t), is:
    </p>
    <p className="font-mono bg-gray-400 p-2 rounded-lg">
    R(t) = P&#123;N(t) = 0&#125; = e<sup>-m(t)</sup>
    </p>

    <p className="leading-relaxed">
      More generally, the probability of no failures in (t, t+x) is:
    </p>
    <p className="font-mono bg-gray-400 p-2 rounded-lg">
    R(x|t) = P&#123;N(t + x) - N(t) = 0&#125; = e<sup>-[m(t + x) - m(t)]</sup>
    </p>


    {/* Density Function */}
    <h2 className="text-3xl font-bold mt-8">Density Function</h2>
    <p className="leading-relaxed">
      The density of the time until the next event is:
    </p>
    <p className="font-mono bg-gray-400 p-2 rounded-lg">
      f(x) = λ(t+x) * e⁻[ᵐ⁽ᵗ⁺ˣ⁾ − ᵐ⁽ᵗ⁾], &nbsp; where λ(x) = dm(x)/dx
    </p>

    {/* Variance */}
    <h2 className="text-3xl font-bold mt-8">Variance</h2>
    <p className="leading-relaxed">
      The variance of the number of events up to time t is equal to the mean value function:
    </p>
    <p className="font-mono bg-gray-400 p-2 rounded-lg">
      Var[N(t)] = ∫₀ᵗ λ(s) ds = m(t)
    </p>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <ul className="list-disc ml-6 space-y-2">
      <li>Reliability engineering: modeling time-dependent failure rates</li>
      <li>Software reliability: tracking number of faults discovered over time</li>
      <li>Repairable systems: predicting failures in maintenance schedules</li>
      <li>Network traffic analysis: modeling arrival rates of packets with time-varying intensity</li>
    </ul>

    {/* Python Implementation */}
    <h2 className="text-3xl font-bold mt-8">Python Implementation</h2>
    <pre className="bg-gray-400 p-4 rounded-lg overflow-x-auto font-mono shadow-inner">
{`import numpy as np
import matplotlib.pyplot as plt

# Time-dependent rate function lambda(t)
def lambda_t(t):
    return 0.5 + 0.1*t  # example: linearly increasing rate

t_max = 20
size = 1000

# Mean value function m(t)
def m(t):
    return 0.5*t + 0.05*t**2

# Simulate NHPP: generate Poisson counts using mean m(t_max)
data = np.random.poisson(lam=m(t_max), size=size)

plt.hist(data, bins=30, density=True, alpha=0.7, color='skyblue')
plt.title('Nonhomogeneous Poisson Process (NHPP)')
plt.xlabel('Number of Events')
plt.ylabel('Probability')
plt.show()`}
    </pre>

  </div>
);

export default Home;
