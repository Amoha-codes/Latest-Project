import React from 'react';

const BankersAlgorithm: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Banker’s Algorithm ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Banker's Algorithm
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 04 Sep, 2025</p>

    <p className="text-lg leading-relaxed">
      Banker's Algorithm is a resource allocation and deadlock avoidance strategy used in operating systems. 
      It ensures that the system remains in a safe state by allocating resources to processes while preventing unsafe states that could lead to deadlocks.
    </p>

    <p className="leading-relaxed">
      The algorithm tracks the resources each process may need and what is currently available. 
      It only grants resources if doing so keeps the system in a safe state.
    </p>

    {/* ================= Components ================= */}
    <h2 className="text-2xl font-semibold">Components of Banker's Algorithm</h2>
    <ul className="list-disc ml-6 space-y-2 leading-relaxed">
      <li>
        <strong>Available:</strong> 1-D array of size 'm', indicating the number of available instances of each resource.
      </li>
      <li>
        <strong>Max:</strong> 2-D array of size 'n*m', showing the maximum resources each process may request.
      </li>
      <li>
        <strong>Allocation:</strong> 2-D array of size 'n*m', indicating current allocation of resources to processes.
      </li>
      <li>
        <strong>Need:</strong> 2-D array showing additional resources each process may request to complete its task. 
        <code>Need[i][j] = Max[i][j] – Allocation[i][j]</code>
      </li>
    </ul>

    {/* ================= Key Concepts ================= */}
    <h2 className="text-2xl font-semibold">Key Concepts</h2>
    <ul className="list-disc ml-6 space-y-2 leading-relaxed">
      <li><strong>Safe State:</strong> There exists at least one sequence of processes that can complete without deadlock.</li>
      <li><strong>Unsafe State:</strong> System may allocate resources but cannot guarantee all processes can finish safely.</li>
    </ul>

    {/* ================= Safety Algorithm ================= */}
    <h2 className="text-2xl font-semibold">Safety Algorithm</h2>
    <p className="leading-relaxed">
      Steps to check if the system is in a safe state:
    </p>
    <ol className="list-decimal ml-6 space-y-2 leading-relaxed">
      <li>Initialize Work = Available and Finish[i] = false for all processes.</li>
      <li>Find a process Pi such that Finish[i] = false and Need[i] ≤ Work.</li>
      <li>If found, pretend to allocate resources: Work = Work + Allocation[i], Finish[i] = true, repeat step 2.</li>
      <li>If all Finish[i] = true, system is safe.</li>
    </ol>

    {/* ================= Resource Request Algorithm ================= */}
    <h2 className="text-2xl font-semibold">Resource Request Algorithm</h2>
    <ol className="list-decimal ml-6 space-y-2 leading-relaxed">
      <li>Check if Request[i] ≤ Need[i]; if not, raise an error.</li>
      <li>Check if Request[i] ≤ Available; if not, process waits.</li>
      <li>Temporarily allocate resources:
        <ul className="list-disc ml-6">
          <li>Available = Available – Request[i]</li>
          <li>Allocation[i] = Allocation[i] + Request[i]</li>
          <li>Need[i] = Need[i] – Request[i]</li>
        </ul>
      </li>
      <li>Run Safety Algorithm. If safe, grant request; else, rollback.</li>
    </ol>

    {/* ================= C++ Code Example ================= */}
    <h2 className="text-2xl font-semibold">C++ Implementation</h2>
    <pre className="bg-gray-400 p-4 rounded overflow-auto text-sm">
{`#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n = 5; // Number of processes
    int r = 3; // Number of resources

    vector<vector<int>> alloc = {{0,0,1},{3,0,0},{1,0,1},{2,3,2},{0,0,3}};
    vector<vector<int>> max = {{7,6,3},{3,2,2},{8,0,2},{2,1,2},{5,2,3}};
    vector<int> avail = {2,3,2};

    vector<int> f(n,0), ans(n);
    vector<vector<int>> need(n, vector<int>(r));
    int ind = 0;

    for(int i=0;i<n;i++)
        for(int j=0;j<r;j++)
            need[i][j] = max[i][j] - alloc[i][j];

    for(int k=0;k<n;k++){
        for(int i=0;i<n;i++){
            if(f[i]==0){
                int flag = 0;
                for(int j=0;j<r;j++){
                    if(need[i][j]>avail[j]){
                        flag=1; break;
                    }
                }
                if(flag==0){
                    ans[ind++]=i;
                    for(int y=0;y<r;y++)
                        avail[y]+=alloc[i][y];
                    f[i]=1;
                }
            }
        }
    }

    cout << "SAFE Sequence: ";
    for(int i=0;i<n-1;i++) cout << "P" << ans[i] << " -> ";
    cout << "P" << ans[n-1] << endl;
    return 0;
}`}
    </pre>

    <p className="leading-relaxed">
      In this example, the safe sequence is: <strong>P1 → P3 → P0 → P2 → P4</strong>.
    </p>

  </div>
);

export default BankersAlgorithm;
