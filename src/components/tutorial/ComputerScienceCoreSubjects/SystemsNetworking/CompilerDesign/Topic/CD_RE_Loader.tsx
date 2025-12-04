import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Loader in C/C++ ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Loader in C/C++
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 29 Sep, 2025</p>

    {/* Intro */}
    <p className="text-lg leading-relaxed">
      A <strong>loader</strong> is a system program that loads an executable file 
      from disk into main memory (RAM) and prepares it for execution. It allocates 
      memory, sets up the process environment, and transfers control to the first 
      instruction of the program.
    </p>

    <p className="leading-relaxed">
      Loading a program includes reading the executable's content, mapping 
      program instructions and data into memory, and performing essential steps 
      needed to start execution.
    </p>

    {/* Example */}
    <h2 className="text-3xl font-bold mt-8">Example Program</h2>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm whitespace-pre-line">
{`#include <stdio.h>
int main() {
    printf("Testing of Loader !");
    return 0;
}`}
    </p>

    <p className="leading-relaxed mt-4">
      After compilation (for example, using <strong>xlC</strong> on AIX), an executable 
      file is created which the loader loads during execution.
    </p>

    {/* Loader Execution Process */}
    <h2 className="text-3xl font-bold mt-8">What Happens When the Executable Runs?</h2>
    <p className="leading-relaxed">
      When executing the program, tools like <strong>strace</strong> (Linux) or 
      <strong>truss</strong> (AIX) reveal system calls made during loading.
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm whitespace-pre-line">
      execve("./ak1.out", ...)
      sbrk(...)
      loadquery(...)
      __loadx(...)
      loadbind(...)
      kwrite(...)
      _exit(0)
    </p>

    <p className="leading-relaxed">
      The <strong>execve()</strong> system call is the first loader-related call. It 
      indicates that the loader has begun loading the executable into memory.
    </p>

    {/* Loader Responsibilities */}
    <h2 className="text-3xl font-bold mt-8">Responsibilities of the Loader</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Reading the executable file</strong> and creating the process’s 
        address space.
      </li>
      <li>
        Creating page-table entries for code, data, and process stack.
      </li>
      <li>
        Initializing CPU registers and runtime environment.
      </li>
      <li>
        Executing a jump instruction to the program’s first instruction (often 
        causing a page fault which loads the first instruction block).
      </li>
    </ul>

    {/* Additional Notes */}
    <h2 className="text-3xl font-bold mt-8">Additional Notes</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        The <strong>kwrite()</strong> system call is invoked internally by 
        <strong>printf()</strong> to print output to the console.
      </li>
      <li>
        The <strong>_exit(0)</strong> system call is performed when the program 
        finishes, returning control to the operating system.
      </li>
    </ul>

  </div>
);

export default Home;
