import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Eigenvalues and Eigenvectors ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Eigenvalues and Eigenvectors
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 08 Sep, 2025</p>

    {/* Intro */}
    <p className="text-lg leading-relaxed">
      Eigenvalues and eigenvectors are fundamental concepts in linear algebra,
      widely used in matrix diagonalization, differential equations, stability
      analysis, quantum mechanics, and machine learning techniques such as PCA
      (Principal Component Analysis). They provide insight into how a matrix 
      transformation stretches, compresses, or rotates vectors.
    </p>

    {/* Eigenvalues */}
    <h2 className="text-3xl font-bold mt-8">Eigenvalues</h2>
    <p className="leading-relaxed">
      Eigenvalues are unique scalar values that represent the scaling factor
      by which an eigenvector is stretched or compressed when multiplied by a
      matrix or linear operator.
    </p>

    <p className="text-lg font-semibold mt-4">
      The eigenvalue equation is given by:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm font-mono">
      A v = λ v
    </p>

    <p className="leading-relaxed">
      Where:<br />
      • A is a square matrix <br />
      • v is the eigenvector <br />
      • λ (lambda) is the scalar eigenvalue
    </p>

    {/* Eigenvectors */}
    <h2 className="text-3xl font-bold mt-8">Eigenvectors</h2>
    <p className="leading-relaxed">
      Eigenvectors are non-zero vectors that maintain their direction when a
      matrix transformation is applied. They may change in magnitude but not direction.
      For an n × n matrix A, the eigenvector is of size n × 1 (column vector).
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm font-mono">
      A v = λ v
    </p>

    <p className="leading-relaxed">
      Rearranging the above equation:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm font-mono">
      (A - λI) v = 0
    </p>

    <p className="leading-relaxed">
      For non-zero vector v, the matrix must be singular, hence:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm font-mono">
      det(A - λI) = 0
    </p>

    <p className="leading-relaxed">
      This is called the <strong>characteristic equation</strong>. Solving it gives
      eigenvalues λ, which are then used to find eigenvectors.
    </p>

    {/* Steps */}
    <h2 className="text-3xl font-bold mt-8">Steps to Find Eigenvectors</h2>
    <ul className="list-decimal ml-6 leading-relaxed">
      <li>Find eigenvalues using det(A − λI) = 0</li>
      <li>Solve the resulting polynomial for λ</li>
      <li>Substitute λ into (A − λI)v = 0 to solve for vector v</li>
      <li>Normalize or scale the vector if necessary</li>
    </ul>

    {/* Types */}
    <h2 className="text-3xl font-bold mt-8">Types of Eigenvectors</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Right Eigenvector:</strong> A Vᵣ = λ Vᵣ</li>
      <li><strong>Left Eigenvector:</strong> Vₗ A = λ Vₗ</li>
    </ul>

    {/* Example 2x2 */}
    <h2 className="text-3xl font-bold mt-8">Example: Eigenvalues & Eigenvectors of a 2×2 Matrix</h2>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm font-mono">
      A = [ 1 2 ; 5 4 ]
    </p>

    <p className="leading-relaxed">
      Compute determinant det(A - λI) = 0:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm font-mono">
      (1−λ)(4−λ) − (2×5) = 0<br />
      λ² − 5λ − 6 = 0<br />
      (λ − 6)(λ + 1) = 0<br />
      λ = 6, λ = −1
    </p>

    <p className="leading-relaxed">
      For λ = 6, solving (A − 6I)v = 0 gives eigenvector:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm font-mono">
      v = [ 2 ; 5 ]
    </p>

    <p className="leading-relaxed">
      For λ = −1:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm font-mono">
      v = [ 1 ; −1 ]
    </p>

    <p className="leading-relaxed font-semibold">
      Therefore, the eigenvectors are [2, 5] and [1, −1]
    </p>

    {/* Example 3x3 */}
    <h2 className="text-3xl font-bold mt-8">Example: Eigenvectors of a 3×3 Matrix</h2>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm font-mono">
      A = [ 2 2 2 ; 2 2 2 ; 2 2 2 ]
    </p>

    <p className="leading-relaxed">
      Solving det(A − λI) = 0 gives eigenvalues:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm font-mono">
      λ = 6, λ = 0, λ = 0
    </p>

    <p className="leading-relaxed">
      Eigenvector for λ = 6:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm font-mono">
      v = [1, 1, 1]
    </p>

    <p className="leading-relaxed">
      Eigenvectors for λ = 0:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm font-mono">
      v = [−1, 1, 0],  v = [−1, 0, 1]
    </p>

    {/* Conclusion */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      Eigenvalues define the scaling factor of transformation, and eigenvectors define
      direction. They are essential in simplifying matrix operations, diagonalization,
      optimization, and machine learning such as PCA and spectral clustering.
    </p>

    {/* ================= Eigenspace ================= */}
    <h2 className="text-3xl font-bold">Eigenspace</h2>
    <p className="leading-relaxed">
      We define the eigenspace of a matrix as the set of all the eigenvectors of the matrix.
      All the vectors in the eigenspace are linearly independent of each other.
    </p>

    <p className="leading-relaxed font-semibold">To find the Eigenspace of the matrix we have to follow the following steps:</p>
    <ul className="list-decimal ml-6 leading-relaxed">
      <li>Find all the eigenvalues of the given square matrix.</li>
      <li>For each eigenvalue find the corresponding eigenvector.</li>
      <li>Take the set of all the eigenvectors (say A). The resultant set so formed is called the Eigenspace.</li>
    </ul>

    <p className="leading-relaxed">
      From the above example of given 3 × 3 matrix A, the eigenspace so formed is:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm font-mono">
      [ -1 1 0 ], [ -1 0 1 ], [ 1 1 1 ]
    </p>

    {/* ================= Diagonalization ================= */}
    <h2 className="text-3xl font-bold mt-8">Diagonalize Matrix Using Eigenvalues and Eigenvectors</h2>

    <p className="leading-relaxed">
      Eigenvalues and Eigenvectors are used to find diagonal matrices.
      A diagonal matrix is a matrix which can be written as:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm font-mono text-center">
      A = X D X⁻¹
    </p>

    <p className="leading-relaxed">
      Where:<br />
      • A is the original matrix<br />
      • X is the matrix formed by eigenvectors<br />
      • D is the diagonal matrix whose diagonal elements are eigenvalues of A<br />
      • X⁻¹ is the inverse of X
    </p>

    <h3 className="text-2xl font-bold mt-6">Example:</h3>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm font-mono">
      A = [ 2 2 2 ; 2 2 2 ; 2 2 2 ]
    </p>

    <p className="leading-relaxed">
      The eigenvalues of A are λ = 6, λ = 0, λ = 0<br />
      The eigenvectors of A are:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm font-mono">
      [ 1 1 1 ], [ -1 1 0 ], [ -1 0 1 ]
    </p>

    <p className="leading-relaxed font-semibold">Thus,</p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm font-mono">
      D = [ 6 0 0 ; 0 0 0 ; 0 0 0 ]
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm font-mono">
      X = [ 1 1 1 ; 1 -1 0 ; 1 0 -1 ]
    </p>

    {/* ================= Applications ================= */}
    <h2 className="text-3xl font-bold mt-8">Applications of Eigenvalues and Eigenvectors</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Google PageRank Algorithm</strong> – Determines page importance using eigenvector of link matrix.</li>
      <li><strong>Markov Processes & Steady-State Analysis</strong> – Long-term probability distribution.</li>
      <li><strong>Principal Component Analysis (PCA)</strong> –Used for dimensionality reduction & ML.</li>
      <li><strong>Latent Semantic Analysis (LSA)</strong> – Improves NLP search & similarity.</li>
      <li><strong>Spectral Graph Theory</strong> – Community detection in networks.</li>
      <li><strong>Computer Vision (Eigenfaces)</strong> – Face recognition.</li>
      <li><strong>Control System Stability</strong> – Determines system convergence.</li>
      <li><strong>Signal Processing</strong> – Feature extraction & noise filtering.</li>
    </ul>

    {/* ================= Solved Example 1 ================= */}
    <h2 className="text-3xl font-bold mt-8">Solved Example 1</h2>
    <p className="leading-relaxed">
      Find the eigenvectors of the matrix:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm font-mono">
      A = [ 1 1 0 ; 0 1 1 ; 0 0 1 ]
    </p>

    <p className="leading-relaxed">
      |A − λI| = 0 → (1 − λ)³ = 0 → λ = 1, 1, 1<br />
      Solving (A − λI)v = 0 gives:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm font-mono">
      v = k [1 0 0]
    </p>

    {/* ================= Solved Example 2 ================= */}
    <h2 className="text-3xl font-bold mt-8">Solved Example 2</h2>
    <p className="leading-relaxed">
      Find the eigenvectors of the matrix:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm font-mono">
      A = [ 5 0 ; 0 5 ]
    </p>

    <p className="leading-relaxed">
      |A − λI| = 0 → (5 − λ)² = 0 → λ = 5, 5<br />
      Solving gives eigenvectors:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm font-mono">
      [1 0], [0 1]
    </p>

  </div>

  
);

export default Home;
