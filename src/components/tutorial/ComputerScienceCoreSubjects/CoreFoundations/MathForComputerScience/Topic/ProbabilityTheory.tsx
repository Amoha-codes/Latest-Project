import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Probability Theory ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Probability Theory
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 03 Oct, 2025</p>

    <p className="leading-relaxed">
      Probability theory is an advanced branch of mathematics that deals with measuring the
      likelihood of events occurring. It provides tools to analyze situations involving
      uncertainty and helps in determining how likely certain outcomes are. It uses concepts
      such as random variables, sample space, probability distributions, and more.
    </p>

    {/* Example */}
    <h2 className="text-3xl font-bold mt-8">Example: Flipping a Coin</h2>
    <p className="leading-relaxed">
      Flipping a coin is a random event with two possible outcomes: heads or tails. The probability
      of landing on heads is <strong>1/2</strong>, and similarly, the probability of landing on tails is <strong>1/2</strong>.
    </p>

    {/* Approaches in Probability Theory */}
    <h2 className="text-3xl font-bold mt-8">Different Approaches in Probability Theory</h2>

    <h3 className="text-2xl font-semibold mt-4">1{")"}Theoretical Probability</h3>
    <p className="leading-relaxed">
      Calculated as:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg text-sm">
      P(A) = (Number of favorable outcomes) / (Total number of outcomes)
    </p>
    <p className="leading-relaxed">
      Example: Coin toss → P(Head) = 1/2, P(Tail) = 1/2
    </p>

    <h3 className="text-2xl font-semibold mt-4">2{")"}Experimental Probability</h3>
    <p className="leading-relaxed">
      Calculated by performing experiments:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg text-sm">
      P(E) = (Number of times event A occurred) / (Total number of trials)
    </p>
    <p className="leading-relaxed">
      Example: Toss a coin 10 times → 4 heads, 6 tails → P(H) = 4/10, P(T) = 6/10
    </p>

    <h3 className="text-2xl font-semibold mt-4">3{")"} Subjective Probability</h3>
    <p className="leading-relaxed">
      Probability based on personal belief or intuition rather than formal models.
      <br />Example: A cricket fan assigns 70% chance for a team’s victory based on past performance.
    </p>

    <h3 className="text-2xl font-semibold mt-4">4{")"} Axiomatic Probability</h3>
    <p className="leading-relaxed">
      Based on Kolmogorov's axioms. Probability is a set function defined on events satisfying axioms.
      <br />Example: Fair coin → S = {"{Heads, Tails}, P(Heads) + P(Tails) = 1 → P(Heads) = 0.5"}
    </p>

    {/* Basics */}
    <h2 className="text-3xl font-bold mt-8">Basics of Probability Theory</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Random Experiment:</strong> An experiment that can be repeated with variable outcomes, e.g., coin toss, dice roll.</li>
      <li><strong>Sample Space:</strong> Set of all possible outcomes, e.g., dice → {"{1,2,3,4,5,6}."}</li>
      <li><strong>Event:</strong> A specific outcome or group of outcomes.
        <ul className="list-disc ml-6">
          <li>Independent Events</li>
          <li>Dependent Events</li>
          <li>Mutually Exclusive Events</li>
          <li>Equally Likely Events</li>
        </ul>
      </li>
    </ul>

    {/* Random Variables */}
    <h2 className="text-3xl font-bold mt-8">Random Variable</h2>
    <p className="leading-relaxed">
      A variable representing possible outcomes of an experiment.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Discrete:</strong> Countable values, e.g., number of heads in 3 coin tosses.</li>
      <li><strong>Continuous:</strong> Infinite values in a range, e.g., height, temperature.</li>
    </ul>

    {/* Formulas */}
    <h2 className="text-3xl font-bold mt-8">Probability Theory Formulas</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Theoretical Probability: P(A) = Favorable / Total outcomes</li>
      <li>Experimental Probability: P(E) = Occurrences / Trials</li>
      <li>Addition Rule: P(A ∪ B) = P(A) + P(B) - P(A∩B)</li>
      <li>Complementary Rule: P(A') = 1 - P(A)</li>
      <li>Independent Events: P(A∩B) = P(A) * P(B)</li>
      <li>Conditional Probability: P(A|B) = P(A∩B)/P(B)</li>
      <li>Bayes' Theorem: P(A|B) = P(B|A) * P(A)/P(B)</li>
    </ul>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications of Probability Theory</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Stock and bond performance prediction</li>
      <li>Casino games and gambling</li>
      <li>Weather forecasting</li>
      <li>Risk mitigation</li>
      <li>Consumer product failure analysis</li>
    </ul>

    {/* Solved Examples */}
    <h2 className="text-3xl font-bold mt-8">Solved Questions</h2>

    <h3 className="text-2xl font-semibold mt-4">1{")"} Probability of total 10 on two dice</h3>
    <p className="leading-relaxed">
      Sample space = 36, favorable = {"(4,6),(5,5),(6,4)} → P = 3/36 = 1/12"}
    </p>

    <h3 className="text-2xl font-semibold mt-4">2{")"} Probability of exactly 2 heads in 3 coin tosses</h3>
    <p className="leading-relaxed">
      Sample space = 8, favorable = {"{HHT, HTH, THH} → P = 3/8"}
    </p>

    <h3 className="text-2xl font-semibold mt-4">3{")"} Probability of Ace or King from deck</h3>
    <p className="leading-relaxed">
      Total cards = 52, favorable = 8 → P = 8/52 = 2/13
    </p>

    <h3 className="text-2xl font-semibold mt-4">4{")"} Probability of non-blue marble</h3>
    <p className="leading-relaxed">
      Red + Green = 10, total = 14 → P = 10/14 = 5/7
    </p>

    <h3 className="text-2xl font-semibold mt-4">{")"} Probability of Isha winning</h3>
    <p className="leading-relaxed">
      P(Naveena) = 0.76 → P(Isha) = 1 - 0.76 = 0.24
    </p>

    <h3 className="text-2xl font-semibold mt-4">6{")"}Probability of heart or 7-number card</h3>
    <p className="leading-relaxed">
      Heart: 13/52 = 1/4, 7-number: 4/52 = 1/13
    </p>

    <h3 className="text-2xl font-semibold mt-4">7{")"}Probability of rolling an even number on a die</h3>
    <p className="leading-relaxed">
      Favorable = {"{2,4,6}, total = 6 → P = 3/6 = 1/2 = 0.5 = 50%"}
    </p>

  </div>
);

export default Home;
