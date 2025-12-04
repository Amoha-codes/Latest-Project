import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Covariance and Correlation ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Covariance and Correlation
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Jul, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Covariance and correlation are key statistical concepts used to analyze relationships between two variables.
      Covariance indicates how two variables move together, while correlation standardizes this measure to show both
      direction and strength.
    </p>

    {/* Understanding Relationship */}
    <h2 className="text-3xl font-bold mt-8">Relationship between Independent and Dependent Variables</h2>
    <p className="leading-relaxed">
      Consider sunlight, water, and soil nutrients as independent variables that influence plant growth, our dependent variable.
      Covariance measures how these variables change together—whether in the same or opposite directions.
    </p>

    {/* Covariance */}
    <h2 className="text-3xl font-bold mt-8">What is Covariance?</h2>
    <p className="leading-relaxed">
      Covariance measures how a pair of random variables change together from their mean values.
      It gives the <b>direction</b> of the relationship but not its strength, and the value depends on units.
      It ranges from <b>-∞ to +∞</b>.
    </p>

    {/* Covariance Types */}
    <ul className="list-disc pl-10 space-y-1">
      <li>Positive: both variables increase together</li>
      <li>Negative: one variable increases while the other decreases</li>
      <li>Zero: no linear relationship</li>
    </ul>

    {/* Covariance Formula */}
    <h3 className="text-2xl font-semibold mt-4">Covariance Formula</h3>
    <p className="leading-relaxed font-mono bg-gray-400 p-4 rounded-lg shadow-inner">
      Sample Covariance: Cov<sub>S</sub>(X,Y) = (1 / (n-1)) Σ (X<sub>i</sub> - X̄)(Y<sub>i</sub> - Ȳ) <br/>
      Population Covariance: Cov<sub>P</sub>(X,Y) = (1 / n) Σ (X<sub>i</sub> - μ<sub>X</sub>)(Y<sub>i</sub> - μ<sub>Y</sub>)
    </p>
    <p className="leading-relaxed">
      Where X<sub>i</sub>, Y<sub>i</sub> are sample/population values, X̄, Ȳ are sample means, μ<sub>X</sub>, μ<sub>Y</sub> are population means,
      n is the number of points, and Σ denotes summation.
    </p>

    {/* Correlation */}
    <h2 className="text-3xl font-bold mt-8">What is Correlation?</h2>
    <p className="leading-relaxed">
      Correlation standardizes covariance to show both the <b>strength</b> and <b>direction</b> of a linear relationship.
      Values range from -1 to +1:
    </p>
    <ul className="list-disc pl-10 space-y-1">
      <li>Positive Correlation (+1): variables increase together</li>
      <li>Negative Correlation (-1): one increases while the other decreases</li>
      <li>Zero Correlation: no linear relationship</li>
    </ul>

    {/* Correlation Formula */}
    <h3 className="text-2xl font-semibold mt-4">Correlation Formula</h3>
    <p className="leading-relaxed font-mono bg-gray-400 p-4 rounded-lg shadow-inner">
      ρ(X,Y) = Cov(X,Y) / (σ<sub>X</sub> * σ<sub>Y</sub>)
    </p>
    <p className="leading-relaxed">
      Where σ<sub>X</sub> and σ<sub>Y</sub> are standard deviations of X and Y.
    </p>

    {/* Covariance vs Correlation Table */}
    <h2 className="text-3xl font-bold mt-8">Difference between Covariance and Correlation</h2>
    <table className="table-auto border-collapse border border-gray-400 w-full text-left">
      <thead>
        <tr className="bg-gray-400">
          <th className="border border-gray-400 px-4 py-2">Feature</th>
          <th className="border border-gray-400 px-4 py-2">Covariance</th>
          <th className="border border-gray-400 px-4 py-2">Correlation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Definition</td>
          <td className="border border-gray-400 px-4 py-2">Measures how two variables vary together</td>
          <td className="border border-gray-400 px-4 py-2">Indicates strength and direction of linear relationship</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Range</td>
          <td className="border border-gray-400 px-4 py-2">-∞ to +∞</td>
          <td className="border border-gray-400 px-4 py-2">-1 to +1</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Scale Dependence</td>
          <td className="border border-gray-400 px-4 py-2">Depends on variable scale</td>
          <td className="border border-gray-400 px-4 py-2">Independent of scale</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Units</td>
          <td className="border border-gray-400 px-4 py-2">Has units</td>
          <td className="border border-gray-400 px-4 py-2">Dimensionless</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Information Provided</td>
          <td className="border border-gray-400 px-4 py-2">Direction of relationship</td>
          <td className="border border-gray-400 px-4 py-2">Direction and strength of relationship</td>
        </tr>
      </tbody>
    </table>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <h3 className="text-2xl font-semibold mt-4">Applications of Covariance</h3>
    <ul className="list-disc pl-10 space-y-1">
      <li>Portfolio Management: Assess stock movements for diversification</li>
      <li>Genetics: Study relationship between traits</li>
      <li>Econometrics: Examine GDP vs Inflation or other indicators</li>
      <li>Signal Processing: Analyze and filter signals</li>
      <li>Environmental Science: Study temperature vs humidity changes</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Applications of Correlation</h3>
    <ul className="list-disc pl-10 space-y-1">
      <li>Market Research: Consumer behavior vs sales trends</li>
      <li>Medical Research: Blood pressure vs cholesterol levels</li>
      <li>Weather Forecasting: Temperature vs humidity relationships</li>
      <li>Machine Learning: Feature selection for target prediction</li>
    </ul>

  </div>
);

export default Home;
