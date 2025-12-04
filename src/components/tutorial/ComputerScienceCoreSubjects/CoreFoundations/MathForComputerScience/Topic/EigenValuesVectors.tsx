import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Eigenvalues and Eigenvectors ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Eigenvalues and Eigenvectors
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 08 Sep, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Eigenvalues and eigenvectors are fundamental concepts in linear algebra, used in 
      applications such as matrix diagonalization, stability analysis, and data analysis 
      (e.g., Principal Component Analysis). They provide insights into properties of square matrices.
    </p>

    {/* Eigenvalues Section */}
    <h2 className="text-3xl font-bold mt-8">Eigenvalues</h2>
    <p className="leading-relaxed">
      Eigenvalues are scalars λ such that for a square matrix A, there exists a non-zero 
      vector v (eigenvector) satisfying:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      A v = λ v
    </p>
    <p className="leading-relaxed">
      Here, A is the matrix, v is the eigenvector, and λ is the eigenvalue. Eigenvalues indicate 
      how an eigenvector is stretched or compressed.
    </p>

    {/* Eigenvectors Section */}
    <h2 className="text-3xl font-bold mt-8">Eigenvectors</h2>
    <p className="leading-relaxed">
      Eigenvectors are non-zero vectors whose direction remains unchanged under the matrix 
      transformation. They satisfy:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      (A - λI) v = 0
    </p>
    <p className="leading-relaxed">
      The eigenvectors can be right (multiplied from the right) or left (multiplied from the left):
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Right eigenvector: A V_R = λ V_R</li>
      <li>Left eigenvector: V_L A = λ V_L</li>
    </ul>

    {/* Steps to Find Eigenvectors */}
    <h2 className="text-3xl font-bold mt-8">How to Find Eigenvectors</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Compute eigenvalues λ by solving det(A - λI) = 0.</li>
      <li>Substitute each λ into (A - λI)v = 0 to find corresponding eigenvectors.</li>
      <li>Repeat for all eigenvalues.</li>
    </ol>

    {/* Examples Section */}
    <h2 className="text-3xl font-bold mt-8">Examples</h2>

    <h3 className="text-2xl font-semibold mt-4">Example 1: 2×2 Matrix</h3>
    <p className="leading-relaxed">
      Find eigenvalues and eigenvectors of A = [[1,2],[5,4]].
    </p>
    <p className="leading-relaxed">
      Eigenvalues: λ = 6, -1 <br />
      Eigenvectors: [2,5] and [1,-1]
    </p>

    <h3 className="text-2xl font-semibold mt-4">Example 2: 3×3 Matrix</h3>
    <p className="leading-relaxed">
      Find eigenvalues and eigenvectors of A = [[2,2,2],[2,2,2],[2,2,2]].
    </p>
    <p className="leading-relaxed">
      Eigenvalues: λ = 6, 0, 0 <br />
      Eigenvectors: [1,1,1], [-1,1,0], [-1,0,1]
    </p>

    {/* Eigenspace Section */}
    <h2 className="text-3xl font-bold mt-8">Eigenspace</h2>
    <p className="leading-relaxed">
      The eigenspace is the set of all eigenvectors corresponding to a particular eigenvalue. 
      Vectors in the eigenspace are linearly independent.
    </p>

    {/* Diagonalization Section */}
    <h2 className="text-3xl font-bold mt-8">Diagonalization of a Matrix</h2>
    <p className="leading-relaxed">
      A square matrix A can be diagonalized as A = X D X⁻¹, where D is a diagonal matrix of 
      eigenvalues and X is a matrix of corresponding eigenvectors.
    </p>

    {/* Applications Section */}
    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Google PageRank Algorithm</li>
      <li>Markov Processes & Steady-State Analysis</li>
      <li>Principal Component Analysis (PCA)</li>
      <li>Latent Semantic Analysis (LSA) in NLP</li>
      <li>Spectral Graph Theory in Network Analysis</li>
      <li>Computer Vision (Eigenfaces)</li>
      <li>Control System Stability in Robotics & AI</li>
      <li>Signal Processing & Data Transmission</li>
    </ul>

    {/* Conclusion */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      Eigenvalues and eigenvectors provide essential insights into linear transformations, 
      stability, and dimensionality reduction, making them foundational in applied mathematics 
      and engineering.
    </p>

  </div>
);

export default Home;
