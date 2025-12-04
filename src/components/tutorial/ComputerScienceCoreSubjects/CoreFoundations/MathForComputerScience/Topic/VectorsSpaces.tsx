import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Vector Space ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Vector Space
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Aug, 2025</p>

    <p className="text-lg leading-relaxed">
      A vector space <strong>V</strong> over a field <strong>F</strong> is a collection of vectors closed under addition and scalar multiplication. These operations satisfy ten axioms that define the structure and ensure its applications in linear algebra, geometry, physics, and computer science.
    </p>

    <h2 className="text-3xl font-bold mt-8">Vector Operations</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Vector Addition:</strong> Takes u, v ∈ V to produce u + v ∈ V</li>
      <li><strong>Scalar Multiplication:</strong> Takes scalar c ∈ F and vector v ∈ V to produce cv ∈ V</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Vector Space Axioms</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Closure under addition: x + y ∈ V</li>
      <li>Closure under scalar multiplication: ax ∈ V</li>
      <li>Commutativity of addition: x + y = y + x</li>
      <li>Associativity of addition: (x + y) + z = x + (y + z)</li>
      <li>Additive identity exists: 0 ∈ V such that x + 0 = x</li>
      <li>Additive inverse exists: -x ∈ V such that x + (-x) = 0</li>
      <li>Multiplicative identity: 1 ∈ F such that 1x = x</li>
      <li>Associativity of scalar multiplication: (ab)x = a(bx)</li>
      <li>Distributive over vectors: a(x + y) = ax + ay</li>
      <li>Distributive over scalars: (a + b)x = ax + bx</li>
    </ol>

    <h2 className="text-3xl font-bold mt-8">Examples of Vector Spaces</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Real Numbers ℝ:</strong> All real numbers with standard addition and scalar multiplication.</li>
      <li><strong>Euclidean Space ℝ<sup>n</sup>:</strong> Vectors as n-tuples of real numbers, e.g., (x, y, z) in ℝ³.</li>
      <li><strong>Polynomials:</strong> All polynomials with coefficients from a field, e.g., quadratic ax² + bx + c.</li>
      <li><strong>Matrices:</strong> All m×n matrices with entries from a field, with element-wise addition and scalar multiplication.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Solved Example</h2>
    <p className="leading-relaxed">
      <strong>Question:</strong> Is the set of all 2×2 matrices with real entries a vector space? Verify all axioms.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Closure under addition: Sum of two 2×2 matrices is another 2×2 matrix.</li>
      <li>Closure under scalar multiplication: Multiplying a 2×2 matrix by a scalar gives another 2×2 matrix.</li>
      <li>Commutativity & associativity of addition hold.</li>
      <li>Additive identity is the zero matrix.</li>
      <li>Additive inverse exists: -A such that A + (-A) = 0.</li>
      <li>Multiplicative identity exists: 1·A = A.</li>
      <li>Associativity of scalar multiplication: c(dA) = (cd)A.</li>
      <li>Distributive properties hold: c(A + B) = cA + cB, (c + d)A = cA + dA.</li>
    </ul>
    <p className="leading-relaxed">Thus, all axioms are satisfied → the set is a vector space.</p>

    <h2 className="text-3xl font-bold mt-8">Dimension and Basis</h2>
    <p className="leading-relaxed">
      <strong>Dimension:</strong> Number of vectors in a basis. Example: dim(ℝ<sup>n</sup>) = n.<br/>
      <strong>Basis:</strong> A set of vectors that spans the space and is linearly independent.
    </p>

    <h2 className="text-3xl font-bold mt-8">Vector Addition and Scalar Multiplication</h2>
    <p className="leading-relaxed">
      Vector addition adds corresponding components: v + w = ⟨v₁ + w₁, v₂ + w₂, …⟩.<br/>
      Scalar multiplication multiplies each component by a scalar: k·v = ⟨k·v₁, k·v₂, …⟩.
    </p>

    <h2 className="text-3xl font-bold mt-8">Linear Combinations and Span</h2>
    <p className="leading-relaxed">
      Any vector can be written as k₁v₁ + k₂v₂ + … + kᵣvᵣ where kᵢ are scalars.
    </p>

    <h2 className="text-3xl font-bold mt-8">Properties of Vector Spaces</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Closure under addition and scalar multiplication</li>
      <li>Associativity & commutativity of addition</li>
      <li>Additive identity & additive inverse</li>
      <li>Distributive properties of scalars</li>
      <li>Multiplicative identity</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Subspaces</h2>
    <p className="leading-relaxed">
      Subset W ⊆ V is a subspace if it is itself a vector space. It must:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Contain the zero vector</li>
      <li>Be closed under addition</li>
      <li>Be closed under scalar multiplication</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Difference Between Vector Space and Euclidean Space</h2>
    <table className="table-auto border-collapse border border-gray-400 mt-2">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">Vector Space</th>
          <th className="border border-gray-300 px-4 py-2">Euclidean Space</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Abstract algebraic structure with addition & scalar multiplication</td>
          <td className="border border-gray-300 px-4 py-2">Geometric space with coordinates and distances</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Focuses on algebraic properties of vectors</td>
          <td className="border border-gray-300 px-4 py-2">Focuses on geometry, distances, and angles</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Used in linear algebra and mathematics</td>
          <td className="border border-gray-300 px-4 py-2">Used in geometry, physics, and engineering</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-3xl font-bold mt-8">Applications of Vector Spaces</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Data representation in n-dimensional space</li>
      <li>Machine learning: PCA, SVD, clustering</li>
      <li>Feature vectors for models</li>
      <li>Vector operations in algorithms</li>
      <li>Search engines for similarity measures</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Practice Problems</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Verify α(u + v) = αu + αv and (α + β)u = αu + βu for given vectors.</li>
      <li>
        Check if V = {"{(x, y) ∈ ℝ² | x ≥ 0, y ≥ 0}"} is closed under addition.
        </li>

      <li>Find additive inverse of v = (3, −4) and verify v + (−v) = 0.</li>
      <li>Check if the set of all 2×2 matrices with real entries is a vector space.</li>
    </ol>

  </div>
);

export default Home;
