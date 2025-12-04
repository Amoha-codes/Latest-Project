import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Descriptive Statistics ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Descriptive Statistics
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 18 Nov, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Statistics is the foundation of data science. Descriptive statistics are simple tools that help us understand and summarize data, showing features such as averages, extremes, and spread.
    </p>

    {/* Types */}
    <h2 className="text-3xl font-bold mt-8">Types of Descriptive Statistics</h2>
    <p className="leading-relaxed">
      Descriptive statistics help us understand:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Where the data centers (Measures of Central Tendency)</li>
      <li>How spread out the data is (Measures of Variability)</li>
      <li>How the data is distributed (Measures of Frequency Distribution)</li>
    </ul>

    {/* Measures of Central Tendency */}
    <h2 className="text-3xl font-bold mt-8">1. Measures of Central Tendency</h2>
    <p className="leading-relaxed">
      These describe the central position within a dataset. Common measures include Mean, Median, and Mode.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Mean</h3>
    <p className="leading-relaxed">
      Mean is the sum of observations divided by the number of observations:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      x̄ = ∑x / n
    </p>
    <p className="leading-relaxed font-semibold">Python Example:</p>
    <pre className="bg-gray-400 p-4 rounded text-sm overflow-x-auto">
{`import numpy as np

arr = [5, 6, 11]
mean = np.mean(arr)
print("Mean =", mean)  # Output: 7.333333333333333`}
    </pre>

    <h3 className="text-2xl font-semibold mt-4">Mode</h3>
    <p className="leading-relaxed">
      Mode is the most frequently occurring value in a dataset.
    </p>
    <pre className="bg-gray-400 p-4 rounded text-sm overflow-x-auto">
{`import scipy.stats as stats

arr = [1, 2, 2, 3]
mode = stats.mode(arr)
print("Mode =", mode)  # Output: ModeResult(mode=array([2]), count=array([2]))`}
    </pre>

    <h3 className="text-2xl font-semibold mt-4">Median</h3>
    <p className="leading-relaxed">
      Median is the middle value in a sorted dataset.
    </p>
    <pre className="bg-gray-400 p-4 rounded text-sm overflow-x-auto">
{`import numpy as np

arr = [1, 2, 3, 4]
median = np.median(arr)
print("Median =", median)  # Output: 2.5`}
    </pre>

    {/* Measures of Variability */}
    <h2 className="text-3xl font-bold mt-8">2. Measures of Variability</h2>
    <p className="leading-relaxed">
      Measures of variability describe how spread out the data is. Key measures include Range, Variance, and Standard Deviation.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Range</h3>
    <p className="leading-relaxed">
      Range = Maximum value − Minimum value
    </p>
    <pre className="bg-gray-400 p-4 rounded text-sm overflow-x-auto">
{`arr = [1, 2, 3, 4, 5]
Maximum = max(arr)
Minimum = min(arr)
Range = Maximum - Minimum
print(f"Maximum = {Maximum}, Minimum = {Minimum}, Range = {Range}")  # Output: 5, 1, 4`}
    </pre>

    <h3 className="text-2xl font-semibold mt-4">Variance</h3>
    <p className="leading-relaxed">
      Variance measures the average squared deviation from the mean.
    </p>
    <pre className="bg-gray-400 p-4 rounded text-sm overflow-x-auto">
{`import statistics

arr = [1, 2, 3, 4, 5]
print("Var =", statistics.variance(arr))  # Output: 2.5`}
    </pre>

    <h3 className="text-2xl font-semibold mt-4">Standard Deviation</h3>
    <p className="leading-relaxed">
      Standard deviation is the square root of the variance:
    </p>
    <pre className="bg-gray-400 p-4 rounded text-sm overflow-x-auto">
{`import statistics

arr = [1, 2, 3, 4, 5]
print("Std =", statistics.stdev(arr))  # Output: 1.5811388300841898`}
    </pre>

    {/* Measures of Frequency Distribution */}
    <h2 className="text-3xl font-bold mt-8">3. Measures of Frequency Distribution</h2>
    <p className="leading-relaxed">
      Frequency distribution tables summarize how data points are distributed across categories or intervals. Key components:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Data intervals or categories</li>
      <li>Frequency counts</li>
      <li>Relative frequencies (percentages)</li>
      <li>Cumulative frequencies</li>
    </ul>

  </div>
);

export default Home;
