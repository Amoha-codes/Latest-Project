import React from 'react';

const Congruency: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Congruency Theory ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Congruency
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Jul, 2025</p>

    {/* Introduction */}
    <p className="text-lg leading-relaxed">
      Congruency in mathematics refers to two or more objects having the same shape and size or being mirror images of each other.  
      Two shapes are congruent if their corresponding sides and angles are equal. They can be superimposed on each other exactly.
    </p>

    {/* Definition */}
    <h2 className="text-3xl font-bold mt-8">Definition of Congruency</h2>
    <p className="leading-relaxed">
      Congruency means exactly equal in shape and size. Mathematically, it is represented using the ≅ symbol.
    </p>

    {/* Significance */}
    <h2 className="text-3xl font-bold mt-8">Significance of Congruency</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Helps analyze shapes and their properties.</li>
      <li>Ensures accurate measurements in geometry and trigonometry.</li>
      <li>Used in real-life applications like architecture and design.</li>
    </ul>

    {/* Geometric Concepts */}
    <h2 className="text-3xl font-bold mt-8">Geometric Concepts Related to Congruency</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Line Segment: Two line segments are congruent if their lengths are equal.</li>
      <li>Angles: Two angles are congruent if their measures are equal.</li>
      <li>Circles: Two circles are congruent if their diameters (or radii) are equal.</li>
    </ul>

    {/* Identifying Congruent Figures */}
    <h2 className="text-3xl font-bold mt-8">Identifying Congruent Figures</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Check the type of 2D shape (triangle, square, etc.) by counting vertices.</li>
      <li>Check the lengths of all sides.</li>
      <li>Check the measures of all angles.</li>
      <li>If all measures match, the figures are congruent.</li>
    </ol>

    {/* Types of Congruency */}
    <h2 className="text-3xl font-bold mt-8">Types of Congruency</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Reflectional Congruence:</strong> Figures remain congruent after flipping over a line of reflection.</li>
      <li><strong>Rotational Congruence:</strong> Figures remain congruent after rotation around a center point.</li>
      <li><strong>Translational Congruence:</strong> Figures remain congruent when shifted/translated without rotation or flipping.</li>
    </ul>

    {/* Congruency in Triangles */}
    <h2 className="text-3xl font-bold mt-8">Congruency in Triangles</h2>
    <p className="leading-relaxed">
      Two triangles are congruent if all corresponding sides and angles are equal. Criteria include:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>SSS: Side-Side-Side</li>
      <li>SAS: Side-Angle-Side</li>
      <li>ASA: Angle-Side-Angle</li>
      <li>AAS: Angle-Angle-Side</li>
      <li>RHS: Right angle-Hypotenuse-Side</li>
    </ul>

    {/* Properties of Congruent Figures */}
    <h2 className="text-3xl font-bold mt-8">Properties and Characteristics</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Congruent Angles and Sides:</strong> Corresponding angles and sides are equal.</li>
      <li><strong>Corresponding Parts:</strong> Equal sides and angles allow one figure to be superimposed on the other.</li>
    </ul>

    {/* Practical Applications */}
    <h2 className="text-3xl font-bold mt-8">Practical Applications</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Architectural design and construction.</li>
      <li>Engineering for maintaining balance and alignment.</li>
      <li>Computer graphics and animation.</li>
      <li>Trigonometry and geometric problem-solving.</li>
    </ul>

    {/* Real-Life Examples */}
    <h2 className="text-3xl font-bold mt-8">Real-Life Examples</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Pages of the same book.</li>
      <li>Mobile phones of the same model.</li>
      <li>A pair of bricks or bangles.</li>
      <li>Windows, doors, and other architectural elements.</li>
    </ul>

    {/* Congruent vs Similar Figures */}
    <h2 className="text-3xl font-bold mt-8">Congruent vs Similar Figures</h2>
    <p className="leading-relaxed">
      Congruent figures have equal sides and angles, while similar figures have the same shape but not necessarily the same size.
    </p>

    {/* Solved Examples */}
    <h2 className="text-3xl font-bold mt-8">Solved Examples</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>
        ABCD is a square. AC is the diagonal. Prove triangles ABC and CDA are congruent.  
        Solution: AB = CD, BC = DA, AC is common → SSS rule → Triangles are congruent.
      </li>
      <li>
        Check whether given quadrilaterals ABCD and PQRS are congruent.  
        Solution: ∠ABC ≠ ∠PQR → Figures are not congruent.
      </li>
    </ol>

  </div>
);

export default Congruency;
