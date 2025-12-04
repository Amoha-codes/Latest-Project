import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Renewal Processes ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Mathemaatics | Renewal Processes in Probability
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 05 Oct, 2018</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      A <strong>Renewal process</strong> generalizes the Poisson Process. In this process, the 
      inter-arrival times (time between events or failures) do not necessarily follow the 
      exponential distribution. A counting process <code>N(t)</code> represents the total 
      number of events in the interval (0, t]. The inter-arrival times are independent 
      and identically distributed.
    </p>

    {/* Probability of n events */}
    <p className="font-mono bg-gray-400 p-2 rounded-lg">
      P&#123;N(t) = n&#125; = P&#123;N(t) ≥ n&#125; - P&#123;N(t)  n&#125;
    </p>

    {/* Time of kth event */}
    <p className="leading-relaxed">
      Let <code>T₁, T₂, …, Tₙ</code> be the inter-arrival times. Then the time of the k-th event is:
    </p>
    <p className="font-mono bg-gray-400 p-2 rounded-lg">
      W<sub>k</sub> = Σ<sub>i=1</sub><sup>k</sup> T<sub>i</sub>
    </p>

    {/* Probability using Wk */}
    <p className="leading-relaxed">
      Using W<sub>k</sub>, the probability of exactly n events by time t is:
    </p>
    <p className="font-mono bg-gray-400 p-2 rounded-lg">
      P&#123;N(t) = n&#125; = P&#123;W<sub>n</sub> ≤ t&#125; - P&#123;W<sub>n+1</sub> ≤ t&#125; = F<sub>n</sub>(t) - F<sub>n+1</sub>(t)
    </p>

    {/* Mean value function */}
    <h2 className="text-3xl font-bold mt-8">Properties</h2>
    <p className="leading-relaxed">
      The mean value function <code>m(t)</code> is the expected number of events by time t:
    </p>
    <p className="font-mono bg-gray-400 p-2 rounded-lg">
      m(t) = E[N(t)] = Σ<sub>n=1</sub><sup>∞</sup> F<sub>n</sub>(t)
    </p>

    {/* Renewal equation */}
    <p className="leading-relaxed">
      The renewal function satisfies the integral equation:
    </p>
    <p className="font-mono bg-gray-400 p-2 rounded-lg">
      m(t) = F<sub>a</sub>(t) + ∫<sub>0</sub><sup>t</sup> m(t - s) dF<sub>a</sub>(s)
    </p>
    <p className="leading-relaxed">
      where <code>F<sub>a</sub>(t)</code> is the distribution function of the inter-arrival time (renewal period).
    </p>

  </div>
);

export default Home;
