import React from "react";

const BayesTheorem: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Bayes' Theorem ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Bayes' Theorem
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 03 Oct, 2025</p>

    <p className="leading-relaxed">
      Bayes' Theorem is a mathematical formula used to determine the conditional probability of an event 
      based on prior knowledge and new evidence. It helps update probabilities as new information becomes available.
    </p>

    {/* Conditional Probability */}
    <h2 className="text-3xl font-bold mt-8">Bayes Theorem and Conditional Probability</h2>
    <p className="leading-relaxed">
      Bayes' theorem calculates the probability of event A given that event B has occurred:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg text-sm">
      P(A|B) = [P(B|A) * P(A)] / P(B)
    </p>
    <p className="leading-relaxed">
      Example: Probability that a white marble comes from the first bag given that a white marble was drawn.
    </p>

    {/* General Formula */}
    <h2 className="text-3xl font-bold mt-8">Bayes Theorem Formula</h2>
    <p className="leading-relaxed">
      For events A and B:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg text-sm">
      P(A|B) = [P(B|A) * P(A)] / P(B)
    </p>

    {/* n events formula */}
    <h2 className="text-3xl font-bold mt-8">Bayes Theorem for n Events</h2>
    <p className="leading-relaxed">
      Let E1, E2, …, En be a partition of the sample space S and A be an event:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg text-sm">
      P(Ei|A) = [P(Ei) * P(A|Ei)] / Σk=1 to n [P(Ek) * P(A|Ek)]
    </p>

    {/* Derivation */}
    <h2 className="text-3xl font-bold mt-8">Bayes Theorem Derivation</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>P(Ei|A) = P(Ei ∩ A) / P(A)</li>
      <li>P(Ei ∩ A) = P(Ei) * P(A|Ei) (Multiplication Rule)</li>
      <li>P(A) = Σk=1 to n P(Ek) * P(A|Ek) (Total Probability Theorem)</li>
      <li>Substitute → P(Ei|A) = [P(Ei) * P(A|Ei)] / Σk=1 to n [P(Ek) * P(A|Ek)]</li>
    </ol>

    {/* Terms */}
    <h2 className="text-3xl font-bold mt-8">Terms Related to Bayes' Theorem</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Hypotheses:</strong> Possible events in the sample space (E1, E2, …, En)</li>
      <li><strong>Priori Probability P(Ei):</strong> Initial probability before new data</li>
      <li><strong>Posterior Probability P(Ei|A):</strong> Updated probability after new information</li>
      <li><strong>Conditional Probability P(A|B):</strong> Probability of A given B has occurred</li>
      <li><strong>Joint Probability P(A ∩ B):</strong> Probability of A and B occurring together</li>
      <li><strong>Random Variables:</strong> Variables determined by random experiments</li>
    </ul>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications of Bayes Theorem</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>AI & Machine Learning → Naïve Bayes classifiers</li>
      <li>Medical Testing → Disease probability after a positive test</li>
      <li>Spam Filters → Email classification</li>
      <li>Weather Prediction → Updating chance of rain</li>
    </ul>

    {/* Difference from Conditional Probability */}
    <h2 className="text-3xl font-bold mt-8">Difference Between Conditional Probability and Bayes Theorem</h2>
    <table className="table-auto border-collapse border border-gray-300 w-full text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="border px-4 py-2">Bayes Theorem</th>
          <th className="border px-4 py-2">Conditional Probability</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">Used to find reverse probability using prior knowledge.</td>
          <td className="border px-4 py-2">Probability of A given B has occurred.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Formula: P(A|B) = [P(B|A) * P(A)] / P(B)</td>
          <td className="border px-4 py-2">Formula: P(A|B) = P(A∩B) / P(B)</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Focus: Updates probabilities with new evidence.</td>
          <td className="border px-4 py-2">Focus: Direct relationship between two events.</td>
        </tr>
      </tbody>
    </table>

    {/* Theorem of Total Probability */}
    <h2 className="text-3xl font-bold mt-8">Theorem of Total Probability</h2>
    <p className="leading-relaxed">
      If E1, E2, …, En are mutually exclusive and exhaustive events:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg text-sm">
      P(E) = Σi=1 to n P(E|Ei) * P(Ei)
    </p>

    {/* Solved Examples */}
    <h2 className="text-3xl font-bold mt-8">Solved Examples</h2>

    <h3 className="text-2xl font-semibold mt-4">Example 1</h3>
    <p className="leading-relaxed">
      Probability that a job will be completed on time given rain or no rain:
      <br />
      P(C) = 0.45*0.44 + 0.55*0.95 = 0.7205
    </p>

    <h3 className="text-2xl font-semibold mt-4">Example 2</h3>
    <p className="leading-relaxed">
      Probability of drawing a white ball from 3 urns:
      <br />
      P(E) = (3/5 * 1/3) + (2/5 * 1/3) + (4/5 * 1/3) = 3/5
    </p>

    <h3 className="text-2xl font-semibold mt-4">Example 3</h3>
    <p className="leading-relaxed">
      Probability lost card is a heart given 2 hearts drawn from remaining 51 cards:
      <br />
      P(E1|E) = 0.22
    </p>

    <h3 className="text-2xl font-semibold mt-4">Example 4</h3>
    <p className="leading-relaxed">
      Probability that selected orator is male: P(Male) = 15/40 = 3/8
    </p>

    <h3 className="text-2xl font-semibold mt-4">Example 5</h3>
    <p className="leading-relaxed">
      Die reported as six by a man who lies 1/4 times:
      <br />
      P(E1|E) = 3/8
    </p>

    {/* Practice Problems */}
    <h2 className="text-3xl font-bold mt-8">Practice Problems</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Medical test 95% accurate, disease probability 0.01 → Find probability of having disease given positive test.</li>
      <li>Bag with 4 red and 6 blue balls → Two drawn, first red → probability second is red.</li>
      <li>Factory: Machine A 80%, Machine B 20%, defective rates 2% & 5% → Probability defective product from A.</li>
      <li>Survey: 70% like ice cream, 40% like ice cream & chocolate → Probability likes chocolate given likes ice cream.</li>
    </ol>
    <p className="leading-relaxed">Answers: 16.1%, 33.33%, 61.5%, 57.1%</p>
  </div>
);

export default BayesTheorem;
