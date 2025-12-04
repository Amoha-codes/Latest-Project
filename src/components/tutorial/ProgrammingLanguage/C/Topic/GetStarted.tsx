import React from "react";

const CGetStarted: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">C Get Started</h1>

      {/* Get Started With C */}
      <h2 className="text-2xl font-bold">Get Started With C</h2>
      <p className="leading-relaxed">
        You can try C without installing anything. Many online C editors run directly in your
        browser and show both code and output instantly.
      </p>

      <h3 className="text-xl font-bold">Code:</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`#include <stdio.h>

int main() {
  printf("Hello World!");
  return 0;
}`}
      </pre>

      <h3 className="text-xl font-bold">Result:</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
Hello World!
      </pre>

      <p className="leading-relaxed">
        This type of editor will be used throughout the tutorial to demonstrate different
        C concepts.
      </p>

      {/* Install C */}
      <h2 className="text-2xl font-bold">Install C</h2>
      <p className="leading-relaxed">
        If you want to run C programs on your own computer, you need two tools:
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>A text editor (like Notepad) to write C code.</li>
        <li>A compiler (like GCC) to translate C code into machine language.</li>
      </ul>

      <p className="leading-relaxed">
        There are many editors and compilers available. For simplicity, you can use an IDE
        that includes both.
      </p>

      {/* Install IDE */}
      <h2 className="text-2xl font-bold">Install IDE</h2>
      <p className="leading-relaxed">
        An <span className="font-semibold">IDE (Integrated Development Environment)</span> is a tool used to write,
        edit, compile, and debug code—all in one place.
      </p>

      <p className="leading-relaxed">
        Popular IDEs for C include Code::Blocks, Eclipse, and Visual Studio. These are free
        and beginner-friendly. Web-based IDEs also work, but with limited functionality.
      </p>

      <p className="leading-relaxed">
        In this tutorial, we will use <span className="font-semibold">Code::Blocks</span>, which is a great choice for
        beginners.
      </p>

      <p className="leading-relaxed">
        Download Code::Blocks from the official website and install the{" "}
        <span className="font-semibold">mingw-setup.exe</span> version. This includes the text editor and compiler.
      </p>

      {/* C Quickstart */}
      <h2 className="text-2xl font-bold">C Quickstart</h2>
      <p className="leading-relaxed">
        Let’s create your first C program using Code::Blocks.
      </p>

      <ul className="list-decimal pl-6 space-y-2">
        <li>Open Code::Blocks.</li>
        <li>Go to <span className="font-semibold">File &gt; New &gt; Empty File</span>.</li>
        <li>Write the following C code.</li>
        <li>
          Save the file as <span className="font-semibold">myfirstprogram.c</span> using{" "}
          <span className="font-semibold">File &gt; Save File As</span>.
        </li>
      </ul>

      <h3 className="text-xl font-bold">myfirstprogram.c</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`#include <stdio.h>

int main() {
  printf("Hello World!");
  return 0;
}`}
      </pre>

      <p className="leading-relaxed">
        Don’t worry if you don’t understand the code yet—we will explain everything in later
        chapters.
      </p>

      <p className="leading-relaxed">
        Now, run the program by clicking <span className="font-semibold">Build &gt; Build and Run</span>.
      </p>

      <h3 className="text-xl font-bold">Output:</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
Hello World!
Process returned 0 (0x0)
execution time : 0.011 s
Press any key to continue...
      </pre>

      <p className="leading-relaxed font-semibold">
        Congratulations! You have successfully written and executed your first C program.
      </p>
    </div>
  );
};

export default CGetStarted;
