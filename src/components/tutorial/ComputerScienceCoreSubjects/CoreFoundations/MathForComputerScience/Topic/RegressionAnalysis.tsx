import React from 'react';

const RegressionAnalysis: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Regression Analysis ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Regression Analysis
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 08 Nov, 2025</p>

    <p className="text-lg leading-relaxed">
      Regression Analysis is a statistical method used to understand the relationship between input features and a target value that varies across a continuous numeric range. It helps measure how changes in factors affect outcomes, allowing better predictions and decision-making.
    </p>

    {/* Need for Regression */}
    <h2 className="text-3xl font-bold mt-8">Need for Regression Analysis</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Identifies strength and direction of relationships between variables.</li>
      <li>Predicts continuous outcomes using historical or current data.</li>
      <li>Helps estimate the impact of multiple factors simultaneously.</li>
      <li>Enables trend forecasting in business, finance, and manufacturing.</li>
      <li>Reduces uncertainty through mathematically grounded predictions.</li>
    </ul>

    {/* Types of Regression */}
    <h2 className="text-3xl font-bold mt-8">Types of Regression</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Linear Regression: Models straight-line relationships between predictors and outputs.</li>
      <li>Multiple Regression: Uses multiple inputs to predict one continuous outcome.</li>
      <li>Polynomial Regression: Captures non-linear patterns using polynomial terms.</li>
    </ul>

    {/* Linear Regression */}
    <h3 className="text-2xl font-semibold mt-6">1. Linear Regression</h3>
    <p className="leading-relaxed">
      Linear Regression forms a straight-line relationship between independent variables and the target.
    </p>
    <p className="leading-relaxed">
      Formula: <b>Y = β₀ + β₁X + ϵ</b>
    </p>
    <p className="leading-relaxed">
      Where Y = predicted value, β₀ = intercept, β₁ = coefficient, ϵ = error term
    </p>

    <h4 className="font-semibold mt-2">Python Implementation:</h4>
    <pre className="bg-gray-400 p-4 rounded-md overflow-auto">
{`from sklearn.linear_model import LinearRegression

X = [[1], [2], [3], [4], [5]]
y = [50, 55, 65, 70, 80]

model = LinearRegression()
model.fit(X, y)

print("Predicted score for 6 hours:", model.predict([[6]])[0])
print("Coefficient:", model.coef_)
print("Intercept:", model.intercept_)`}
    </pre>

    <p className="leading-relaxed">
      Output: Predicted score for 6 hours: 86.5, Coefficient: [7.5], Intercept: 41.5
    </p>

    {/* Multiple Regression */}
    <h3 className="text-2xl font-semibold mt-6">2. Multiple Regression</h3>
    <p className="leading-relaxed">
      Extends linear regression to include several independent variables:
    </p>
    <p className="leading-relaxed">
      Formula: <b>Y = β₀ + β₁X₁ + β₂X₂ + ... + βₙXₙ + ϵ</b>
    </p>

    <h4 className="font-semibold mt-2">Python Implementation:</h4>
    <pre className="bg-gray-400 p-4 rounded-md overflow-auto">
{`from sklearn.linear_model import LinearRegression

X = [[2, 70], [3, 80], [4, 85], [5, 90]]
y = [60, 65, 70, 78]

model = LinearRegression()
model.fit(X, y)

print("Prediction:", model.predict([[6, 95]])[0])
print("Coefficients:", model.coef_)
print("Intercept:", model.intercept_)`}
    </pre>

    <p className="leading-relaxed">
      Output: Prediction: 84.0, Coefficients: [ 8.5 -0.4], Intercept: 71.0
    </p>

    {/* Polynomial Regression */}
    <h3 className="text-2xl font-semibold mt-6">3. Polynomial Regression</h3>
    <p className="leading-relaxed">
      Models non-linear relationships by introducing polynomial terms: <b>y = β₀ + β₁x + β₂x² + ... + βₙxⁿ + ϵ</b>
    </p>

    <h4 className="font-semibold mt-2">Python Implementation:</h4>
    <pre className="bg-gray-400 p-4 rounded-md overflow-auto">
{`from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures

X = [[1], [2], [3], [4], [5]]
y = [2, 6, 14, 28, 45]

poly = PolynomialFeatures(degree=2)
X_poly = poly.fit_transform(X)

model = LinearRegression()
model.fit(X_poly, y)

print("Prediction:", model.predict(poly.transform([[6]]))[0])`}
    </pre>

    <p className="leading-relaxed">Output: Prediction: 67.4</p>

    {/* Evaluation Metrics */}
    <h2 className="text-3xl font-bold mt-8">Evaluation Metrics</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>R² Score: Variance explained by the model.</li>
      <li>RMSE: Root Mean Squared Error, penalizes large errors.</li>
      <li>MAE: Mean Absolute Error, average prediction error magnitude.</li>
    </ul>

    {/* Regression vs Regression Analysis */}
    <h2 className="text-3xl font-bold mt-8">Regression vs Regression Analysis</h2>
    <table className="table-auto border border-gray-300 mt-4">
      <thead>
        <tr className="bg-gray-400">
          <th className="border px-4 py-2">Feature</th>
          <th className="border px-4 py-2">Regression</th>
          <th className="border px-4 py-2">Regression Analysis</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">Meaning</td>
          <td className="border px-4 py-2">Predicting a dependent variable using independent variables</td>
          <td className="border px-4 py-2">Complete process including model building, evaluation, and interpretation</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Scope</td>
          <td className="border px-4 py-2">Focuses on the model</td>
          <td className="border px-4 py-2">Includes workflow, assumptions, evaluation</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Output</td>
          <td className="border px-4 py-2">Regression model/equation</td>
          <td className="border px-4 py-2">Insights, predictions, coefficients, metrics</td>
        </tr>
      </tbody>
    </table>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Stock Market Forecasting</li>
      <li>Sales Prediction</li>
      <li>Real Estate Pricing</li>
      <li>Healthcare Monitoring</li>
      <li>Manufacturing Optimization</li>
    </ul>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Clear Interpretability of coefficients</li>
      <li>Accurate numerical forecasting</li>
      <li>Supports multi-variable modeling</li>
      <li>Strong statistical foundation</li>
      <li>Versatile applicability</li>
      <li>Detects trend strength and direction</li>
    </ul>

    {/* Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Disadvantages</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Prone to multicollinearity</li>
      <li>Can underfit non-linear data</li>
      <li>Requires proper feature engineering</li>
      <li>Limited extrapolation reliability</li>
    </ul>

  </div>
);

export default RegressionAnalysis;
