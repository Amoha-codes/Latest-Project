import React from 'react';

const HypothesisTesting: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Hypothesis Testing ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Hypothesis Testing
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 28 Jul, 2025</p>

    <p className="text-lg leading-relaxed">
      Hypothesis testing compares two opposite ideas about a population using data from a sample to determine which idea is more likely true.
    </p>

    {/* Example Intro */}
    <p className="leading-relaxed">
      Example: A company claims its website gets 50 visitors daily. Hypothesis testing uses past visitor data to verify this claim.
    </p>

    {/* Defining Hypotheses */}
    <h2 className="text-3xl font-bold mt-8">Defining Hypotheses</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><b>Null Hypothesis (H₀):</b> Starting assumption. E.g., "The average visits are 50."</li>
      <li><b>Alternative Hypothesis (H₁):</b> Opposite claim. E.g., "The average visits are not 50."</li>
    </ul>

    {/* Key Terms */}
    <h2 className="text-3xl font-bold mt-8">Key Terms</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><b>Significance Level (α):</b> Threshold to reject H₀, usually 0.05.</li>
      <li><b>p-value:</b> Probability of observing data if H₀ is true. Reject H₀ if p ≤ α.</li>
      <li><b>Test Statistic:</b> Number used to determine whether data supports or rejects H₀.</li>
      <li><b>Critical Value:</b> Cutoff to compare with the test statistic.</li>
      <li><b>Degrees of Freedom:</b> Depends on data size, used for critical values.</li>
    </ul>

    {/* Types of Hypothesis Testing */}
    <h2 className="text-3xl font-bold mt-8">Types of Hypothesis Testing</h2>
    <h3 className="text-2xl font-semibold mt-4">1. One-Tailed Test</h3>
    <p className="leading-relaxed">
      Checks for effect in one direction only.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><b>Left-Tailed Test:</b> H₀: μ ≥ 50, H₁: μ {"< 50"}</li>
      <li><b>Right-Tailed Test:</b> H₀: μ ≤ 50, H₁: μ {">"} 50</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">2. Two-Tailed Test</h3>
    <p className="leading-relaxed">
      Checks for effect in either direction. Example: H₀: μ = 50, H₁: μ ≠ 50
    </p>

    {/* Type I and Type II Errors */}
    <h2 className="text-3xl font-bold mt-8">Type I and Type II Errors</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><b>Type I Error (α):</b> Rejecting H₀ when it is true.</li>
      <li><b>Type II Error (β):</b> Accepting H₀ when it is false.</li>
    </ul>

    <table className="table-auto border border-gray-300 mt-4">
      <thead>
        <tr className="bg-gray-400">
          <th className="border px-4 py-2">Decision</th>
          <th className="border px-4 py-2">H₀ True</th>
          <th className="border px-4 py-2">H₀ False</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">Accept H₀</td>
          <td className="border px-4 py-2">Correct</td>
          <td className="border px-4 py-2">Type II Error</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Reject H₀</td>
          <td className="border px-4 py-2">Type I Error</td>
          <td className="border px-4 py-2">Correct</td>
        </tr>
      </tbody>
    </table>

    {/* Steps */}
    <h2 className="text-3xl font-bold mt-8">Steps in Hypothesis Testing</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li><b>Define Hypotheses:</b> H₀ (no effect), H₁ (effect present)</li>
      <li><b>Choose Significance Level:</b> Usually α = 0.05</li>
      <li><b>Collect and Analyze Data:</b> Gather sample data and compute relevant statistics</li>
      <li><b>Calculate Test Statistic:</b> Z-test, T-test, Chi-square, etc.</li>
      <li><b>Make Decision:</b> Compare statistic to critical value or use p-value</li>
      <li><b>Interpret Results:</b> Conclude whether there is evidence to support H₁</li>
    </ol>

    {/* Real-life Example */}
    <h2 className="text-3xl font-bold mt-8">Real-Life Example</h2>
    <p className="leading-relaxed">
      A pharmaceutical company tests a new drug's effect on blood pressure.
    </p>
    <p className="leading-relaxed">
      <b>Before Treatment:</b> 120, 122, 118, 130, 125, 128, 115, 121, 123, 119<br/>
      <b>After Treatment:</b> 115, 120, 112, 128, 122, 125, 110, 117, 119, 114
    </p>
    <p className="leading-relaxed">
      Null Hypothesis: H₀ = no effect<br/>
      Alternative Hypothesis: H₁ = drug lowers blood pressure
    </p>

    {/* Python Implementation */}
    <h2 className="text-3xl font-bold mt-8">Python Implementation (Paired T-test)</h2>
    <pre className="bg-gray-400 p-4 rounded-md overflow-auto">
{`import numpy as np
from scipy import stats

b = np.array([120, 122, 118, 130, 125, 128, 115, 121, 123, 119])
a = np.array([115, 120, 112, 128, 122, 125, 110, 117, 119, 114])

alpha = 0.05
t_stat, p_val = stats.ttest_rel(a, b)

m = np.mean(a - b)
s = np.std(a - b, ddof=1)
n = len(b)
t_manual = m / (s / np.sqrt(n))

decision = "Reject" if p_val <= alpha else "Fail reject"
concl = "Significant difference." if decision == "Reject" else "No significant difference."

print("T:", t_stat)
print("P:", p_val)
print("T manual:", t_manual)
print(f"Decision: {decision} H0 at α={alpha}")
print("Conclusion:", concl)`}
    </pre>

    <p className="leading-relaxed">
      Output:<br/>
      T: -9.0<br/>
      P: 8.538e-06<br/>
      T manual: -9.0<br/>
      Decision: Reject H₀ at α=0.05<br/>
      Conclusion: Significant difference
    </p>

    {/* Limitations */}
    <h2 className="text-3xl font-bold mt-8">Limitations of Hypothesis Testing</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Limited Scope: Focuses on specific hypotheses only.</li>
      <li>Data Quality Dependence: Poor-quality data may mislead conclusions.</li>
      <li>Missed Patterns: May ignore other important relationships.</li>
      <li>Context Limitations: Doesn’t always capture bigger picture.</li>
      <li>Need for Additional Methods: Should be combined with other analyses for deeper insights.</li>
    </ul>

  </div>
);

export default HypothesisTesting;
