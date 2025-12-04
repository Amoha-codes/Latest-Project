import React from "react";

const ScalesOfMeasurement: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg  mt-20">

    {/* ================= Scales of Measurement ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Scales of Measurement
    </h1>

    <p className="text-lg leading-relaxed">
      In statistics and data analysis, variables can be categorized into different levels of measurement.
      These scales determine the types of data collected, the mathematical operations allowed,
      and the statistical techniques that can be applied. The four primary scales of measurement are:
      <b> Nominal, Ordinal, Interval,</b> and <b>Ratio</b>.
    </p>

    {/* Properties */}
    <h2 className="text-2xl font-bold">Properties of Measurement Scales</h2>
    <ul className="list-disc pl-10 space-y-2">
      <li><b>Identity</b> – Each value has a unique meaning.</li>
      <li><b>Magnitude</b> – Values can be ordered or ranked.</li>
      <li><b>Equal Intervals</b> – The difference between scale values is consistent.</li>
      <li><b>Absolute / True Zero</b> – A meaningful zero exists below which values cannot go.</li>
    </ul>

    {/* Nominal Scale */}
    <h2 className="text-2xl font-bold">1. Nominal Scale</h2>
    <p className="text-lg leading-relaxed">
      The nominal scale categorizes data without assigning numeric value or order.
      It only provides labels and satisfies the property of <b>Identity</b> only.
      Arithmetic operations such as addition, subtraction, multiplication, or division
      are not applicable.
    </p>
    <p className="text-lg font-semibold">Example:</p>
    <ul className="list-disc pl-10">
      <li>Gender: Male / Female</li>
      <li>Blood Group: A, B, AB, O</li>
      <li>Nationality: Indian, American, British</li>
    </ul>

    {/* Ordinal Scale */}
    <h2 className="text-2xl font-bold">2. Ordinal Scale</h2>
    <p className="text-lg leading-relaxed">
      The ordinal scale ranks values in order based on magnitude.
      However, the exact difference between values is not known. It satisfies
      both <b>Identity</b> and <b>Magnitude</b> properties.
    </p>
    <p className="text-lg font-semibold">Example:</p>
    <ul className="list-disc pl-10">
      <li>Rank in a race: 1st, 2nd, 3rd</li>
      <li>Customer feedback: Poor, Average, Good, Excellent</li>
      <li>Education Level: High School,Graduate,Postgraduate</li>
    </ul>

    {/* Interval Scale */}
    <h2 className="text-2xl font-bold">3. Interval Scale</h2>
    <p className="text-lg leading-relaxed">
      The interval scale has ordered values with equal distances between them.
      It does not have a true zero point (zero does not mean absence).
      It satisfies the properties:
    </p>
    <ul className="list-disc pl-10">
      <li>Identity</li>
      <li>Magnitude</li>
      <li>Equal Intervals</li>
    </ul>

    <p className="text-lg font-semibold">Example:</p>
    <ul className="list-disc pl-10">
      <li>Temperature in Celsius or Fahrenheit</li>
      <li>Calendar years (e.g., 2000, 2020 — no true zero year)</li>
    </ul>

    {/* Ratio Scale */}
    <h2 className="text-2xl font-bold">4. Ratio Scale</h2>
    <p className="text-lg leading-relaxed">
      The ratio scale is the most informative measurement scale.
      It has all four properties including a <b>true zero</b>.
      A true zero allows meaningful mathematical operations like
      ratios and percentages.
    </p>

    <p className="text-lg font-semibold">Properties of Ratio Scale:</p>
    <ul className="list-disc pl-10">
      <li>Identity</li>
      <li>Magnitude</li>
      <li>Equal Intervals</li>
      <li>True / Absolute Zero</li>
    </ul>

    <p className="text-lg font-semibold">Example:</p>
    <ul className="list-disc pl-10">
      <li>Length, height, weight</li>
      <li>Income or money</li>
      <li>Distance: 10 miles is twice 5 miles</li>
    </ul>

  </div>
);

export default ScalesOfMeasurement;
