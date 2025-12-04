import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Law of Total Probability ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Law of Total Probability
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 22 Jul, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      The Law of Total Probability allows you to compute the probability of an event based on a partition of the sample space.
      If an event can occur in several ways, the total probability is the sum of the probabilities of the different ways it can occur.
    </p>

    {/* Formula Section */}
    <h2 className="text-3xl font-bold mt-8">Formula</h2>
    <p className="leading-relaxed font-mono bg-gray-400 p-4 rounded-lg shadow-inner">
      If A₁, A₂, …, Aₙ are mutually exclusive and exhaustive events, and B is any event:<br/>
      P(B) = Σ P(B | Aᵢ) × P(Aᵢ),  i = 1 to n
    </p>

    {/* Explanation Section */}
    <h2 className="text-3xl font-bold mt-8">Explanation</h2>
    <p className="leading-relaxed">
      Here, the events A₁, A₂, …, Aₙ form a partition of the sample space, meaning they are disjoint and cover all outcomes.
      P(B | Aᵢ) is the conditional probability of B given Aᵢ, and P(Aᵢ) is the probability of scenario Aᵢ.
    </p>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications</h2>

    <h3 className="text-2xl font-semibold mt-4">Bayes’ Theorem</h3>
    <p className="leading-relaxed">
      The Law of Total Probability is used in the denominator of Bayes’ Theorem:
    </p>
    <p className="leading-relaxed font-mono bg-gray-400 p-4 rounded-lg shadow-inner">
      P(Eᵢ | A) = P(Eᵢ) × P(A | Eᵢ) / Σ P(Eₖ) × P(A | Eₖ), k = 1 to n
    </p>
    <p className="leading-relaxed">
      It is widely used in spam detection, classification, and sentiment analysis.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Expectation-Maximization (EM) Algorithm</h3>
    <p className="leading-relaxed">
      Computes expected values of hidden variables using the law of total probability, essential for Gaussian Mixture Models (GMMs).
    </p>

    <h3 className="text-2xl font-semibold mt-4">Hidden Markov Models (HMMs)</h3>
    <p className="leading-relaxed">
      Used to compute the probability of observed sequences with hidden states via the Forward-Backward Algorithm:
    </p>
    <p className="leading-relaxed font-mono bg-gray-400 p-4 rounded-lg shadow-inner">
      P(X) = Σ P(X | Z) × P(Z)
    </p>

    <h3 className="text-2xl font-semibold mt-4">Bayesian Networks & Marginalization</h3>
    <p className="leading-relaxed">
      Law of Total Probability helps infer marginal probabilities in graphical models:
    </p>
    <p className="leading-relaxed font-mono bg-gray-400 p-4 rounded-lg shadow-inner">
      P(X) = Σ P(X, Y, Z)
    </p>

    {/* Solved Examples */}
    <h2 className="text-3xl font-bold mt-8">Solved Examples</h2>
    <ul className="list-disc ml-6 space-y-2">
      <li>
        <strong>Card Draw:</strong> Two cards drawn with replacement. Probability second card is a king:
        P(E) = P(A)P(E|A) + P(B)P(E|B) = 0.0769
      </li>
      <li>
        <strong>Factory Defective Products:</strong> Three products P1, P2, P3 with different defect rates:
        P(D) = 0.022
      </li>
      <li>
        <strong>Traffic Lights:</strong> Probability second light is green:
        P(G2) = 0.32
      </li>
      <li>
        <strong>Policy Support:</strong> Town survey for policy support:
        P(P) = 0.50
      </li>
      <li>
        <strong>Storm Prediction:</strong> Probability of a storm:
        P(S) = 0.215
      </li>
    </ul>

    {/* Conclusion */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      The Law of Total Probability is a foundational principle for determining event probabilities when multiple disjoint scenarios exist.
      It underpins Bayes’ theorem, probabilistic models, and decision-making in uncertain situations.
    </p>

  </div>
);

export default Home;
