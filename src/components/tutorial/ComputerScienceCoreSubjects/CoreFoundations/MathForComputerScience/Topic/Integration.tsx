import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Integration Section ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Integration
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Jul, 2025</p>

    <p className="text-lg leading-relaxed">
      Integration is a process of adding up small pieces to find the total of something, 
      especially when those pieces change or are not uniform. For example, if a car's speed changes over time, 
      integration allows you to calculate the total distance travelled by summing up tiny segments of motion.
    </p>

    <h2 className="text-3xl font-bold mt-8">Key Concepts Related to Integration</h2>
    <p className="leading-relaxed">
      This section covers key integration concepts, methods, and applications, including the Fundamental Theorem of Calculus, 
      integration techniques, and how to find areas, volumes, and other geometric properties.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Introduction to Integration</li>
      <li>Antiderivative: Integration as Inverse Process of Differentiation</li>
      <li>Fundamental Theorem of Calculus</li>
      <li>
        Types of Integrals
        <ul className="list-disc ml-6">
          <li>Definite Integrals</li>
          <li>Definite Integral as the Limit of a Riemann Sum</li>
          <li>Properties of Definite Integrals</li>
          <li>Evaluation of Definite Integrals</li>
          <li>Indefinite Integrals</li>
          <li>Improper Integrals</li>
        </ul>
      </li>
      <li>
        Riemann Sum
        <ul className="list-disc ml-6">
          <li>Riemann Sums in Summation Notation</li>
          <li>Functions defined by Integrals</li>
        </ul>
      </li>
      <li>Integration Formulas</li>
      <li>
        Methods of Integration
        <ul className="list-disc ml-6">
          <li>Integration by Substitution</li>
          <li>Integration by Trigonometric Substitution</li>
          <li>Integration by Parts</li>
          <li>Integration by Partial Fraction</li>
        </ul>
      </li>
      <li>
        Applications of Integration
        <ul className="list-disc ml-6">
          <li>Area Under a Curve</li>
          <li>Area Between Curves</li>
          <li>Area Between Polar Curves</li>
          <li>Volume of Solids of Revolution</li>
          <li>Arc Length of Curves</li>
          <li>Surface Area of Revolution</li>
          <li>Line Integral</li>
          <li>Surface Integral</li>
          <li>Double Integration</li>
          <li>Triple Integration</li>
        </ul>
      </li>
      <li>
        Integration Practice: Quizzes and practice questions on key topics like basic integration, applications, and integration by substitution.
      </li>
    </ul>

  </div>
);

export default Home;
