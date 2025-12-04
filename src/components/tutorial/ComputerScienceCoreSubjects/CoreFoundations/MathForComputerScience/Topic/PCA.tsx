import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= PCA Theory ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Mathematical Approach to PCA
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Jul, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      The main guiding principle for Principal Component Analysis (PCA) is <strong>FEATURE EXTRACTION</strong>, i.e., features of a dataset should be fewer and as dissimilar as possible. PCA extracts a new set of features from the original features which are orthogonal to each other, transforming an n-dimensional feature space into an m-dimensional space.
    </p>

    {/* Orthogonality */}
    <h2 className="text-3xl font-bold mt-8">Concept of Orthogonality</h2>
    <p className="leading-relaxed">
      In vector space, vectors can be represented as a linear combination of basis vectors:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      v = ∑<sub>i=1</sub><sup>n</sup> a<sub>i</sub> u<sub>i</sub>
    </p>
    <p className="leading-relaxed">
      Here, a<sub>i</sub> are scalars and u<sub>i</sub> are orthogonal basis vectors. PCA transforms feature vectors into principal components, similar to basis vectors in a vector space.
    </p>

    {/* Objectives */}
    <h2 className="text-3xl font-bold mt-8">Objectives of PCA</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>The new features are distinct, i.e., covariance between principal components is 0.</li>
      <li>Principal components are generated in order of variance: first captures maximum variance, second captures next highest variance, and so on.</li>
      <li>The sum of variance of the principal components equals the sum of variance of original features.</li>
    </ul>

    {/* Working Steps */}
    <h2 className="text-3xl font-bold mt-8">Working of PCA</h2>
    <ol className="list-decimal ml-6 leading-relaxed space-y-2">
      <li>Calculate the covariance matrix of the dataset.</li>
      <li>Compute the eigenvectors of the covariance matrix.</li>
      <li>Eigenvector with the highest eigenvalue points in the direction of maximum variance → first principal component.</li>
      <li>Eigenvector with the next highest eigenvalue points in the direction of next highest variance orthogonal to the first → second principal component.</li>
      <li>Repeat to select top 'k' eigenvectors for 'k' principal components.</li>
    </ol>

    {/* Numerical Example */}
    <h2 className="text-3xl font-bold mt-8">Numerical Example</h2>
    <p className="leading-relaxed">
      Consider the dataset:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      x1: 2.5, 0.5, 2.2, 1.9, 3.1, 2.3, 2.0, 1.0, 1.5, 1.1<br/>
      x2: 2.4, 0.7, 2.9, 2.2, 3.0, 2.7, 1.6, 1.1, 1.6, 0.9
    </p>

    <h3 className="text-2xl font-semibold mt-4">Step 1: Standardize the Dataset</h3>
    <p className="leading-relaxed">
      Mean(x1) = 1.81, Mean(x2) = 1.91
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      x1_new = x1 - Mean(x1) → 0.69, -1.31, 0.39, 0.09, 1.29, 0.49, 0.19, -0.81, -0.31, -0.71<br/>
      x2_new = x2 - Mean(x2) → 0.49, -1.21, 0.99, 0.29, 1.09, 0.79, -0.31, -0.81, -0.31, -1.01
    </p>

    <h3 className="text-2xl font-semibold mt-4">Step 2: Eigenvalues and Eigenvectors</h3>
    <p className="leading-relaxed">
      Covariance matrix: C = (X ⋅ X<sup>T</sup>)/(N-1) = 
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      [0.616556  0.615444]<br/>
      [0.615444  0.716556]
    </p>
    <p className="leading-relaxed">
      Eigenvalues: λ1 = 1.28403, λ2 = 0.0490834
    </p>
    <p className="leading-relaxed">
      Eigenvectors: <br/>
      For λ1: [0.67787, 0.73518]<br/>
      For λ2: [0.73518, -0.67787]
    </p>

    <h3 className="text-2xl font-semibold mt-4">Step 3: Arrange Eigenvalues</h3>
    <p className="leading-relaxed">
      Eigenvector with highest eigenvalue is the first principal component.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Step 4: Form Feature Vector</h3>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Feature Vector = [0.677873  0.735179]<br/>
                       [0.735179 -0.677879]
    </p>

    <h3 className="text-2xl font-semibold mt-4">Step 5: Transform Original Dataset</h3>
    <p className="leading-relaxed">
      Z = X ⋅ V → transformed dataset (principal components)
    </p>

    <h3 className="text-2xl font-semibold mt-4">Step 6: Reconstruct Data</h3>
    <p className="leading-relaxed">
      Original dataset can be reconstructed by: X = Z ⋅ V<sup>T</sup> + original mean
    </p>

    <p className="leading-relaxed">
      Thus, the principal component of the dataset is λ1 = 1.28403 followed by λ2 = 0.0490834.
    </p>

  </div>
);

export default Home;
