import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Representation of Graph ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Representation of Graph
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 29 Oct, 2025</p>

    <p className="text-lg leading-relaxed">
      A graph is a non-linear data structure consisting of <strong>vertices</strong> (nodes) and 
      <strong> edges</strong>. A graph is formally represented as G(V, E), where V is the set of vertices and E is the set of edges.
    </p>

    {/* Representations Section */}
    <h2 className="text-3xl font-bold mt-8">Representations of Graph</h2>
    <p className="leading-relaxed">
      There are two common ways to represent a graph (considering unweighted graphs here):
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Adjacency Matrix</li>
      <li>Adjacency List</li>
    </ul>

    {/* Adjacency Matrix */}
    <h2 className="text-3xl font-bold mt-8">Adjacency Matrix Representation</h2>
    <p className="leading-relaxed">
      An adjacency matrix is a 2D matrix where mat[i][j] = 1 if there is an edge from vertex i to vertex j, otherwise 0.
    </p>
    <p className="leading-relaxed font-semibold">Undirected Graph Example:</p>
    <pre className="bg-gray-400 p-4 rounded-lg overflow-x-auto">
{`#include <iostream>
#include <vector>
using namespace std;

vector<vector<int>> createGraph(int V, vector<vector<int>> &edges) {
    vector<vector<int>> mat(V, vector<int>(V, 0));
    for (auto &it : edges) {
        int u = it[0];
        int v = it[1];
        mat[u][v] = 1;
        mat[v][u] = 1; // undirected graph
    }
    return mat;
}

int main() {
    int V = 3;
    vector<vector<int>> edges = {{0,1},{0,2},{1,2}};
    vector<vector<int>> mat = createGraph(V, edges);

    cout << "Adjacency Matrix Representation:" << endl;
    for (int i = 0; i < V; i++) {
        for (int j = 0; j < V; j++)
            cout << mat[i][j] << " ";
        cout << endl;
    }
    return 0;
}`}
    </pre>

    <p className="leading-relaxed font-semibold">Directed Graph Example:</p>
    <pre className="bg-gray-400 p-4 rounded-lg overflow-x-auto">
{`#include <iostream>
#include <vector>
using namespace std;

vector<vector<int>> createGraph(int V, vector<vector<int>> &edges) {
    vector<vector<int>> mat(V, vector<int>(V, 0));
    for (auto &it : edges) {
        int u = it[0];
        int v = it[1];
        mat[u][v] = 1; // directed edge
    }
    return mat;
}

int main() {
    int V = 3;
    vector<vector<int>> edges = {{1,0},{2,0},{1,2}};
    vector<vector<int>> mat = createGraph(V, edges);

    cout << "Adjacency Matrix Representation:" << endl;
    for (int i = 0; i < V; i++) {
        for (int j = 0; j < V; j++)
            cout << mat[i][j] << " ";
        cout << endl;
    }
    return 0;
}`}
    </pre>

    {/* Adjacency List */}
    <h2 className="text-3xl font-bold mt-8">Adjacency List Representation</h2>
    <p className="leading-relaxed">
      An adjacency list stores for each vertex a list of its adjacent vertices.
    </p>
    <p className="leading-relaxed font-semibold">Undirected Graph Example:</p>
    <pre className="bg-gray-400 p-4 rounded-lg overflow-x-auto">
{`#include <iostream>
#include <vector>
using namespace std;

vector<vector<int>> createGraph(int V, vector<vector<int>> &edges) {
    vector<vector<int>> adj(V);
    for (auto &it : edges) {
        int u = it[0];
        int v = it[1];
        adj[u].push_back(v);
        adj[v].push_back(u); // undirected
    }
    return adj;
}

int main() {
    int V = 3;
    vector<vector<int>> edges = {{0,1},{0,2},{1,2}};
    vector<vector<int>> adj = createGraph(V, edges);

    cout << "Adjacency List Representation:" << endl;
    for (int i = 0; i < V; i++) {
        cout << i << ": ";
        for (int j : adj[i])
            cout << j << " ";
        cout << endl;
    }
    return 0;
}`}
    </pre>

    <p className="leading-relaxed font-semibold">Directed Graph Example:</p>
    <pre className="bg-gray-400 p-4 rounded-lg overflow-x-auto">
{`#include <iostream>
#include <vector>
using namespace std;

vector<vector<int>> createGraph(int V, vector<vector<int>> &edges) {
    vector<vector<int>> adj(V);
    for (auto &it : edges) {
        int u = it[0];
        int v = it[1];
        adj[u].push_back(v); // directed
    }
    return adj;
}

int main() {
    int V = 3;
    vector<vector<int>> edges = {{1,0},{1,2},{2,0}};
    vector<vector<int>> adj = createGraph(V, edges);

    cout << "Adjacency List Representation:" << endl;
    for (int i = 0; i < V; i++) {
        cout << i << ": ";
        for (int j : adj[i])
            cout << j << " ";
        cout << endl;
    }
    return 0;
}`}
    </pre>

  </div>
);

export default Home;
