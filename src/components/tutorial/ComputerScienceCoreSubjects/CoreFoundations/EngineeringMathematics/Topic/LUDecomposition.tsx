import React from 'react';

const Home: React.FC = () => (
    <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

        {/* ================= LU Decomposition ================= */}
        <h1 className="text-4xl font-extrabold border-b-2 pb-2">
            LU Decomposition
        </h1>
        <p className="text-sm text-gray-500">Last Updated : 01 Sep, 2025</p>

        {/* Intro Paragraph */}
        <p className="text-lg leading-relaxed">
            <strong>LU Decomposition</strong> is a method of decomposing a square matrix into the
            product of two triangular matrices — a lower triangular matrix <strong>L</strong> and
            an upper triangular matrix <strong>U</strong> — such that:
        </p>

        <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
            A = L × U
        </p>

        <p className="leading-relaxed">
            It is widely used to solve systems of linear equations, find matrix inverses, and compute
            determinants efficiently.
        </p>

        {/* Example Section */}
        <h2 className="text-3xl font-bold mt-8">Example of LU Decomposition</h2>
        <p className="leading-relaxed">
            Consider the matrix A:
        </p>

        <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
            A = ( 4  3<br />
            6  3 )
        </p>

        <p className="leading-relaxed">
            Apply Gaussian elimination to obtain the upper triangular matrix U:
        </p>

        <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
            U = ( 43<br />
            0 −1.5 )
        </p>

        <p className="leading-relaxed">
            The multipliers used during elimination form the lower triangular matrix L:
        </p>

        <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
            L = ( 10<br />
            1.51 )
        </p>

        <p className="leading-relaxed font-semibold">Verification:</p>

        <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
            A = L × U =
            ( 10<br /> 1.5 1 ) × ( 43<br /> 0−1.5 ) = ( 43<br /> 63 )
        </p>

        {/* Steps Section */}
        <h2 className="text-3xl font-bold mt-8">Steps for LU Decomposition</h2>
        <ul className="list-disc ml-6 leading-relaxed">
            <li>Start with a square matrix A</li>
            <li>Apply Gaussian elimination to convert A into U</li>
            <li>Store elimination multipliers into matrix L</li>
            <li>L has 1s on its diagonal</li>
            <li>Verify A = L × U</li>
        </ul>

        {/* System Solving Example */}
        <h2 className="text-3xl font-bold mt-8">
            Solving System of Equations using LU Decomposition
        </h2>

        <p className="leading-relaxed font-semibold">Given equations:</p>
        <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
            x₁ + x₂ + x₃ = 1 <br />
            4x₁ + 3x₂ − x₃ = 6 <br />
            3x₁ + 5x₂ + 3x₃ = 4
        </p>

        <p className="leading-relaxed">
            Convert AX = C into two simpler systems:
        </p>

        <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
            LZ = C  → Solve for Z<br />
            UX = Z  → Solve for X
        </p>

        <p className="leading-relaxed">
            Solving gives:
        </p>

        <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
            x₁ = 1,x₂ = 0.5,x₃ = −0.5
        </p>

        <p className="leading-relaxed font-semibold">
            Therefore, X = [ 1, 0.5, −0.5 ]
        </p>

        {/* Applications */}
        <h2 className="text-3xl font-bold mt-8">Applications of LU Decomposition</h2>
        <ul className="list-disc ml-6 leading-relaxed">
            <li>Solving linear equation systems</li>
            <li>Computing determinants efficiently</li>
            <li>Matrix inversion</li>
            <li>Engineering structural analysis</li>
            <li>Weather and climate modeling</li>
            <li>Computer graphics & 3D transformations</li>
        </ul>

        {/* Practice Problems */}
        <h2 className="text-3xl font-bold mt-8">Practice Problems</h2>
        <ul className="list-disc ml-6 leading-relaxed">
            <li>Perform LU decomposition for A = [[2,3,1],[4,5,2],[6,7,3]]</li>
            <li>Find L and U for A = [[1,2,1],[3,2,4],[1,5,3]]</li>
            <li>Perform LU decomposition when A is diagonal. What do you observe?</li>
            <li>Decompose A = [[2,0,1],[4,3,2],[6,0,5]] and identify special handling for zeros.</li>
        </ul>

    </div>
);

export default Home;
