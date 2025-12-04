import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Relations in Mathematics ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Relations in Mathematics
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 10 Nov, 2025</p>

    <p className="text-lg leading-relaxed">
      A relation in Mathematics defines the relationship between two sets. If we have two sets, A and B, 
      and each element of set A is related to an element of set B through some rule, then set A is the <strong>domain</strong> 
      and set B is the <strong>range</strong> of the relation.
    </p>

    {/* Example of a Relation */}
    <h2 className="text-3xl font-bold mt-8">Example of a Relation</h2>
    <p className="leading-relaxed">
      Suppose X = {`{4, 36, 49, 50}`} and Y = {`{1, -2, -6, -7, 7, 6, 2}`}. A relation R states: 
      "(x, y) is in the relation R if x is a square of y," represented as:
    </p>
    <p className="font-mono mt-2">R = {"{(4, -2), (4, 2), (36, -6), (36, 6), (49, -7), (49, 7)}"}</p>

    <p className="mt-4 leading-relaxed">
    Another example with sets A = {"{x, y, z}"} and B = {"{1, 2, 3}"} illustrates the relation visually.
    </p>


    {/* Representation of Relations */}
    <h2 className="text-3xl font-bold mt-8">Representation of Relations</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>
  <strong>Set Builder Notation:</strong> Uses logical formulas to define relations.  
    Example: X = {`{2, 4, 6}`}, Y = {`{4, 8, 12}`} → R = {`{(a, b) : b is twice a, a ∈ X, b ∈ Y}`}
    </li>
    <li>
    <strong>Roster (Roaster) Notation:</strong> Uses ordered pairs.  
    Example: X = {`{2, 4, 6}`}, Y = {`{4, 8, 12}`} → R = {`{(2,4), (4,8), (6,12)}`}
    </li>

    </ul>

    {/* Types of Relation */}
    <h2 className="text-3xl font-bold mt-8">Types of Relation</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Empty Relation</li>
      <li>Reflexive Relation</li>
      <li>Symmetric Relation</li>
      <li>Transitive Relation</li>
      <li>Equivalence Relation</li>
      <li>Universal Relation</li>
      <li>Identity Relation</li>
      <li>Inverse Relation</li>
    </ul>

    {/* Graphing Relations */}
    <h2 className="text-3xl font-bold mt-8">Graphing Relations</h2>
    <p className="leading-relaxed">
    Relations can be plotted on a Cartesian plane using ordered pairs {`{(x, y)}`} as coordinates. Steps:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Choose numerical values for x.</li>
      <li>Compute corresponding y values.</li>
     <li>Form ordered pairs {`{(x, y)}`}</li>
      <li>Plot the points and connect them to visualize the relation.</li>
    </ul>

    <p className="mt-2 leading-relaxed">
      Example: Graph of y = x² is a parabola.
    </p>

    {/* Importance in Computer Science */}
    <h2 className="text-3xl font-bold mt-8">Importance in Computer Science</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Databases:</strong> Relational databases use relations as sets of tuples.</li>
      <li><strong>Graphs & Networks:</strong> Vertices and edges can be modeled as relations.</li>
      <li><strong>State Machines:</strong> Transition functions are relations between states and inputs.</li>
      <li><strong>Other Applications:</strong> Adjacency matrices/lists, search engines, and information retrieval use relations.</li>
    </ul>

    {/* Solved Examples */}
    <h2 className="text-3xl font-bold mt-8">Solved Examples of Relations</h2>

    <p className="font-semibold mt-4">1. Inverse relation of R = {"{(1,3),(2,4),(3,5)}"}</p>
    <p>R⁻¹ = {"{(3,1),(4,2),(5,3)}"}</p>

    <p className="font-semibold mt-4">2. Inverse relation of R = {"{(a,x),(b,y),(c,z)}"}</p>
    <p>R⁻¹ = {"{(x,a),(y,b),(z,c)}"}</p>

    <p className="font-semibold mt-4">3. Check equivalence of R = {"{(1,1),(2,2),(3,3),(1,2),(2,1),(2,3),(3,2)}"} on A={"{1,2,3}"}</p>
    <p>Reflexive ✔, Symmetric ✔, Transitive ✖ → Not equivalence.</p>

    <p className="font-semibold mt-4">4. Domain and Range of R = {"{(1,2),(2,3),(3,4),(4,5)}"}</p>
    <p>Domain = {"{1,2,3,4}"}, Range = {"{2,3,4,5}"}</p>

    <p className="font-semibold mt-4">5. Is R = {"{(x,y)|x² + y² = 25}"} a function?</p>
    <p>No, e.g., (0,5) and (0,-5) are both in the relation.</p>

    <p className="font-semibold mt-4">6. Inverse of R = {"{(1,1),(2,4),(3,9),(4,16)}"}</p>
    <p>R⁻¹ = {"{(1,1),(4,2),(9,3),(16,4)}"}</p>

    <p className="font-semibold mt-4">7. Check if R = {"{(x,y)|x-y is even}"} is equivalence</p>
    <p>Yes, Reflexive ✔, Symmetric ✔, Transitive ✔ → Equivalence.</p>

    <p className="font-semibold mt-4">8. Composition R∘S for R = {"{(1,2),(2,3),(3,4)"}, S = {"{(1,1),(2,2),(3,3),(4,4)}"}</p>
    <p>R∘S = {"{(1,2),(2,3),(3,4)}"}</p>

    <p className="font-semibold mt-4">9. Check if R = {"{(a,b)|a is multiple of b}"} on positive integers is transitive</p>
    <p>Yes, it's transitive.</p>

    <p className="font-semibold mt-4">10. Reflexive closure of R = {"{(1,2),(2,3),(3,1)}"} on A={"{1,2,3}"}</p>
    <p>Reflexive closure = {"{(1,1),(2,2),(3,3),(1,2),(2,3),(3,1)}"}</p>

    {/* Unsolved Examples */}
    <h2 className="text-3xl font-bold mt-8">Unsolved Examples of Relations</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Inverse relation of R = {"{(2,5),(3,6),(4,7)}"}</li>
      <li>Inverse relation of R = {"{(p,q),(r,s),(t,u)}"}</li>
      <li>Check reflexive, symmetric, and transitive of R = {"{(1,1),(2,2),(3,3),(1,2),(2,3)}"} on A={"{1,2,3}"}</li>
      <li>Domain and range of R = {"{(2,4),(3,9),(4,16),(5,25)}"}</li>
      <li>Inverse of R = {"{(1,2),(2,3),(3,4),(4,5)}"}</li>
      <li>Inverse of R = {"{(1,2),(2,3),(3,4),(4,5)}"}</li>
      <li>Check if R = {"{(x,y)|x+y is even}"} is equivalence</li>
      <li>Composition of R∘S, R = {"{(1,2),(2,3),(3,1)}"}, S = {"{(1,3),(2,1),(3,2)}"}</li>
      <li>Check if R = {"{(a,b)|a divides b}"} on positive integers is transitive</li>
      <li>Reflexive closure of R = {"{(a,b),(b,c)}"} on A={"{a,b,c}"}</li>
    </ul>

  </div>
);

export default Home;
