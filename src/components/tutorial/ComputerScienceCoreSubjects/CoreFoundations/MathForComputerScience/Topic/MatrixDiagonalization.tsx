import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Matrix Diagonalization ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Matrix Diagonalization
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Jul, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Matrix diagonalization is the process of converting a square matrix into its 
      <strong> diagonal form</strong> using a similarity transformation. Diagonal matrices 
      are easier to work with, especially when raising them to integer powers. Not all 
      matrices are diagonalizable; a matrix is diagonalizable if each eigenvalue's geometric 
      multiplicity equals its algebraic multiplicity.
    </p>

    {/* Similarity Transformation */}
    <h2 className="text-3xl font-bold mt-8">Matrix Similarity Transformation</h2>
    <p className="leading-relaxed">
      Two matrices A and B of order n are <strong>similar</strong> if there exists an 
      invertible matrix P such that:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      B = P⁻¹ A P
    </p>
    <p className="leading-relaxed">
      Similar matrices share the same rank, trace, determinant, and eigenvalues, including 
      algebraic and geometric multiplicities.
    </p>

    {/* Diagonalization */}
    <h2 className="text-3xl font-bold mt-8">Diagonalization of a Matrix</h2>
    <p className="leading-relaxed">
      If a matrix A is diagonalizable, there exists a diagonal matrix D and a modal matrix P 
      (whose columns are the eigenvectors of A) such that:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      D = P⁻¹ A P
    </p>
    <p className="leading-relaxed">
      In simpler terms, diagonalization converts a square matrix into a diagonal matrix 
      using its eigenvectors.
    </p>

    {/* Steps */}
    <h2 className="text-3xl font-bold mt-8">Steps to Diagonalize a Matrix</h2>
    <ol className="list-decimal ml-6 leading-relaxed space-y-2">
      <li>Initialize the diagonal matrix D with unknown eigenvalues λ₁, λ₂, λ₃.</li>
      <li>Find eigenvalues by solving det(A − λI) = 0.</li>
      <li>Compute eigenvectors X₁, X₂, X₃ corresponding to each λ.</li>
      <li>Create the modal matrix P using eigenvectors as columns.</li>
      <li>Compute P⁻¹ and find D using D = P⁻¹ A P.</li>
    </ol>

    {/* Example Problem */}
    <h2 className="text-3xl font-bold mt-8">Example Problem</h2>
    <p className="leading-relaxed">
      Consider the matrix:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      A = [[1, 0, -1], [1, 2, 1], [2, 2, 3]]
    </p>
    <p className="leading-relaxed">
      Eigenvalues: λ = 1, 2, 3 <br/>
      Eigenvectors: X₁ = [1, -1, 0], X₂ = [-2, 1, 2], X₃ = [1, -1, -2]
    </p>
    <p className="leading-relaxed">
      Modal matrix P = [X₁ X₂ X₃] = [[1, -2, 1], [-1, 1, -1], [0, 2, -2]] <br/>
      Diagonal matrix D = P⁻¹ A P = [[1, 0, 0], [0, 2, 0], [0, 0, 3]]
    </p>

    {/* Notes */}
    <h2 className="text-3xl font-bold mt-8">Notes</h2>
    <ul className="list-disc ml-6 leading-relaxed space-y-2">
      <li>Diagonalization is not unique; eigenvalues can be reordered, and eigenvectors can be scaled.</li>
      <li>Once diagonalized, computing A⁻¹ (if it exists) is straightforward: A⁻¹ = P D⁻¹ P⁻¹.</li>
      <li>Repeated eigenvalues require careful choice of eigenvector bases for diagonalization.</li>
    </ul>

    {/* Practice Problems */}
    <h2 className="text-3xl font-bold mt-8">Practice Problems</h2>
    <ol className="list-decimal ml-6 leading-relaxed space-y-2">
      <li>Check if A = [[4, 1], [6, -1]] is diagonalizable.</li>
      <li>Diagonalize A = [[2, 0, 0], [1, 3, 1], [0, 0, 3]] and find D and P.</li>
      <li>Diagonalize A = [[1, 2], [4, 3]] and find A⁻¹ using diagonalization.</li>
      <li>Check if A = [[6, -2], [2, 2]] with repeated eigenvalue is diagonalizable.</li>
      <li>Diagonalize A = [[7, -4, 4], [-4, 8, -4], [4, -4, 7]] and find P and D.</li>
    </ol>

  </div>
);

export default Home;
