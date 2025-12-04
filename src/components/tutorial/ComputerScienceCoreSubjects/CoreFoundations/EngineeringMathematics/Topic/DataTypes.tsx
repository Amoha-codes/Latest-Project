import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Univariate, Bivariate and Multivariate Data ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Univariate, Bivariate and Multivariate Data and Analysis
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Nov, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Data analysis helps in understanding hidden patterns, relationships, and trends in raw information.
      Based on the number of variables considered, data can be classified as <b>Univariate</b>, <b>Bivariate</b>, or <b>Multivariate</b>.
    </p>

    {/* Univariate Data */}
    <h2 className="text-3xl font-bold mt-8">1. Univariate Data</h2>
    <p className="leading-relaxed">
      Univariate data involves only one variable. The analysis focuses on summarizing and describing its properties.
    </p>
    <ul className="list-disc pl-10 space-y-1">
      <li>Measures of central tendency: mean, median, mode</li>
      <li>Measures of dispersion: range, variance, standard deviation</li>
      <li>Patterns: skewness, outliers</li>
      <li>Visualizations: histograms, box plots, density plots</li>
    </ul>
    <p className="leading-relaxed font-semibold">Example:</p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm font-mono">
      Heights (cm) of seven students: [164, 167.3, 170, 174.2, 178, 180, 186]
    </p>

    {/* Bivariate Data */}
    <h2 className="text-3xl font-bold mt-8">2. Bivariate Data</h2>
    <p className="leading-relaxed">
      Bivariate data involves two variables for each observation. The goal is to explore relationships between the two variables.
    </p>
    <ul className="list-disc pl-10 space-y-1">
      <li>Detects positive, negative, or no correlation</li>
      <li>Measures relationship strength using correlation (-1 to +1)</li>
      <li>Visualizations: scatter plots, regression lines</li>
    </ul>
    <p className="leading-relaxed font-semibold">Example:</p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm font-mono">
      Temperature (°C) : [20, 25, 30, 35] <br/>
      Ice Cream Sales : [2000, 2500, 4000, 5000]
    </p>

    {/* Multivariate Data */}
    <h2 className="text-3xl font-bold mt-8">3. Multivariate Data</h2>
    <p className="leading-relaxed">
      Multivariate data contains three or more variables per observation. The analysis uncovers interactions among variables and their collective effect on outcomes.
    </p>
    <ul className="list-disc pl-10 space-y-1">
      <li>Techniques: multiple regression, PCA, MANOVA, clustering</li>
      <li>Reduces dimensionality for complex datasets</li>
      <li>Visualizations: heatmaps, pair plots, 3D scatter plots</li>
    </ul>
    <p className="leading-relaxed font-semibold">Example:</p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm font-mono">
      Advertisement Type, Gender, Click Rate: <br/>
      Ad1, Male, 80 <br/>
      Ad3, Female, 55 <br/>
      Ad2, Female, 123 <br/>
      Ad1, Male, 66 <br/>
      Ad3, Male, 35
    </p>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Comparison: Univariate vs Bivariate vs Multivariate</h2>
    <table className="table-auto border-collapse border border-gray-400 w-full text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-gray-400 px-4 py-2">Feature</th>
          <th className="border border-gray-400 px-4 py-2">Univariate</th>
          <th className="border border-gray-400 px-4 py-2">Bivariate</th>
          <th className="border border-gray-400 px-4 py-2">Multivariate</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Variables</td>
          <td className="border border-gray-400 px-4 py-2">One</td>
          <td className="border border-gray-400 px-4 py-2">Two</td>
          <td className="border border-gray-400 px-4 py-2">More than two</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Objective</td>
          <td className="border border-gray-400 px-4 py-2">Describe single variable</td>
          <td className="border border-gray-400 px-4 py-2">Examine relationship between two variables</td>
          <td className="border border-gray-400 px-4 py-2">Understand relationships among multiple variables</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Dependency</td>
          <td className="border border-gray-400 px-4 py-2">None</td>
          <td className="border border-gray-400 px-4 py-2">One dependent variable</td>
          <td className="border border-gray-400 px-4 py-2">Multiple dependent variables</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Techniques</td>
          <td className="border border-gray-400 px-4 py-2">Descriptive statistics, histogram</td>
          <td className="border border-gray-400 px-4 py-2">Correlation, scatter plot, regression</td>
          <td className="border border-gray-400 px-4 py-2">Regression, PCA, MANOVA</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Visualization</td>
          <td className="border border-gray-400 px-4 py-2">Histogram, Box Plot</td>
          <td className="border border-gray-400 px-4 py-2">Scatter Plot, Regression Line</td>
          <td className="border border-gray-400 px-4 py-2">Pair Plot, Heatmap, 3D Analysis</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Example</td>
          <td className="border border-gray-400 px-4 py-2">Height of students</td>
          <td className="border border-gray-400 px-4 py-2">Temperature vs Ice Cream Sales</td>
          <td className="border border-gray-400 px-4 py-2">Ad Type, Gender & Click Rate</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Complexity</td>
          <td className="border border-gray-400 px-4 py-2">Low</td>
          <td className="border border-gray-400 px-4 py-2">Moderate</td>
          <td className="border border-gray-400 px-4 py-2">High</td>
        </tr>
      </tbody>
    </table>

  </div>
);

export default Home;
