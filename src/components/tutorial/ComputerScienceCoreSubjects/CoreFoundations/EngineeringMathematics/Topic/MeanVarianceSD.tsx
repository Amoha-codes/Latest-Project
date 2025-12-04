import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Mean, Variance and Standard Deviation ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Mean, Variance and Standard Deviation
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Jul, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Mean, Variance, and Standard Deviation are fundamental statistical concepts used to analyze 
      and interpret data. They help understand the central tendency, spread, and variability of a dataset, 
      which is crucial in engineering, finance, and data analysis.
    </p>

    {/* Mean Section */}
    <h2 className="text-3xl font-bold mt-8">Mean (Average)</h2>
    <p className="leading-relaxed">
      The mean represents the average value of a dataset. It is calculated by summing all data points 
      and dividing by the number of values (n). Denoted by <strong>μ</strong>.
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      μ = (x₁ + x₂ + x₃ + ... + xₙ) / n
    </p>
    <p className="leading-relaxed">
      <strong>Example:</strong> For the dataset {`{4, 8, 6, 5, 3, 7}`}, mean μ = (4+8+6+5+3+7)/6 = 5.5
    </p>

    {/* Variance Section */}
    <h2 className="text-3xl font-bold mt-8">Variance</h2>
    <p className="leading-relaxed">
      Variance measures the dispersion of data points from the mean. It is the average of the squared differences from the mean.
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      σ² = (Σ (xᵢ − μ)²) / n
    </p>
    <p className="leading-relaxed">
      <strong>Example:</strong> Dataset {`{4, 8, 6, 5, 3, 7}`}, mean μ = 5.5  
      Variance σ² = [(4−5.5)² + (8−5.5)² + ... + (7−5.5)²] / 6 = 2.92
    </p>

    {/* Standard Deviation Section */}
    <h2 className="text-3xl font-bold mt-8">Standard Deviation</h2>
    <p className="leading-relaxed">
      Standard deviation is the square root of variance and provides a measure of spread in the same units as the data.
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      σ = √σ²
    </p>
    <p className="leading-relaxed">
      <strong>Example:</strong> With variance σ² = 2.92, standard deviation σ = √2.92 ≈ 1.71
    </p>

    {/* Relationship Section */}
    <h2 className="text-3xl font-bold mt-8">Relationship between Mean, Variance, and Standard Deviation</h2>
    <p className="leading-relaxed">
      - Mean shows the center of the data.  
      - Variance quantifies the average squared deviation from the mean.  
      - Standard deviation converts variance back to the original units to measure data spread.
    </p>

    {/* Solved Examples Section */}
    <h2 className="text-3xl font-bold mt-8">Solved Examples</h2>

    <p className="leading-relaxed font-semibold">Example 1:</p>
    <p className="leading-relaxed">
      Dataset: {`{5, 7, 9, 11, 13}`}  
      Mean μ = 9, Variance σ² = 8, Standard Deviation σ = √8 ≈ 2.83
    </p>

    <p className="leading-relaxed font-semibold">Example 2:</p>
    <p className="leading-relaxed">
      Dataset: {`{4, 8, 6, 5, 3, 9}`}  
      Mean μ = 5.83, Variance σ² = 4.80, Standard Deviation σ ≈ 2.19
    </p>

    <p className="leading-relaxed font-semibold">Example 3:</p>
    <p className="leading-relaxed">
      Dataset: {`{2, 4, 6, 8, 10}`}  
      Mean μ = 6, Variance σ² = 8, Standard Deviation σ ≈ 2.83
    </p>

    {/* Unsolved Questions Section */}
    <h2 className="text-3xl font-bold mt-8">Practice Questions</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>10, 15, 20, 25, 30</li>
      <li>5, 10, 15, 20, 25</li>
      <li>4, 6, 8, 10, 12, 14</li>
      <li>1, 4, 9, 16, 25</li>
      <li>3, 6, 9, 12, 15</li>
    </ul>

    {/* Applications Section */}
    <h2 className="text-3xl font-bold mt-8">Applications in Engineering</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Quality control in manufacturing to monitor variations in product dimensions.</li>
      <li>Signal processing to analyze noise and signal strength.</li>
      <li>Reliability engineering to estimate lifespan and failure rates.</li>
      <li>Financial analysis to evaluate investment risks and returns.</li>
      <li>Civil engineering to assess material test data and structural performance.</li>
    </ul>

    {/* Conclusion */}
    <h2 className="text-3xl font-bold mt-8">Summary</h2>
    <p className="leading-relaxed">
      Mean, variance, and standard deviation are key statistical tools that provide insights 
      into the central tendency and variability of data. Mastery of these concepts is essential 
      for engineering, finance, and scientific data analysis.
    </p>

  </div>
);

export default Home;
