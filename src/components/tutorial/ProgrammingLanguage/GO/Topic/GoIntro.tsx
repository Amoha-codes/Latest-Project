import React from "react";

const GoIntro: React.FC = () => (
  <div className="mt-20 px-6">
    <h1 className="text-4xl font-extrabold text-gray-900 border-b-2 pb-2">
      Go Introduction
    </h1>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">What is Go?</h2>
    <p className="text-gray-700 leading-relaxed mt-3">
      Go is a cross-platform, open-source programming language designed for
      simplicity, efficiency, and high performance. It was developed at Google
      in 2007 by <b>Robert Griesemer</b>, <b>Rob Pike</b>, and{" "}
      <b>Ken Thompson</b>. Go’s syntax is similar to <b>C++</b> and allows
      developers to build powerful, scalable, and efficient applications.
    </p>

    <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-3 space-y-1">
      <li>Go is a cross-platform, open source programming language.</li>
      <li>Go can be used to create high-performance applications.</li>
      <li>
        Go is a fast, statically typed, compiled language known for simplicity
        and efficiency.
      </li>
      <li>Developed at Google in 2007 by Robert Griesemer, Rob Pike, and Ken Thompson.</li>
      <li>Go’s syntax is similar to C++.</li>
    </ul>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-8">What is Go Used For?</h2>
    <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-3 space-y-1">
      <li>Web development (server-side)</li>
      <li>Developing network-based programs</li>
      <li>Developing cross-platform enterprise applications</li>
      <li>Cloud-native development</li>
    </ul>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-8">Why Use Go?</h2>
    <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-3 space-y-1">
      <li>Go is fun and easy to learn</li>
      <li>Go has fast run time and compilation time</li>
      <li>Go supports concurrency</li>
      <li>Go has memory management</li>
      <li>Go works on multiple platforms (Windows, Mac, Linux, Raspberry Pi, etc.)</li>
    </ul>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-8">
      Go Compared to Python and C++
    </h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left text-gray-700">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">Feature</th>
            <th className="p-2 border">Go</th>
            <th className="p-2 border">Python</th>
            <th className="p-2 border">C++</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border">Typing</td>
            <td className="p-2 border">Statically typed</td>
            <td className="p-2 border">Dynamically typed</td>
            <td className="p-2 border">Statically typed</td>
          </tr>
          <tr>
            <td className="p-2 border">Run time</td>
            <td className="p-2 border">Fast</td>
            <td className="p-2 border">Slow</td>
            <td className="p-2 border">Fast</td>
          </tr>
          <tr>
            <td className="p-2 border">Compilation</td>
            <td className="p-2 border">Compiled</td>
            <td className="p-2 border">Interpreted</td>
            <td className="p-2 border">Compiled</td>
          </tr>
          <tr>
            <td className="p-2 border">Compile time</td>
            <td className="p-2 border">Fast</td>
            <td className="p-2 border">Interpreted</td>
            <td className="p-2 border">Slow</td>
          </tr>
          <tr>
            <td className="p-2 border">Concurrency</td>
            <td className="p-2 border">
              Supports concurrency through goroutines and channels
            </td>
            <td className="p-2 border">
              No built-in concurrency mechanism
            </td>
            <td className="p-2 border">
              Supports concurrency through threads
            </td>
          </tr>
          <tr>
            <td className="p-2 border">Garbage Collection</td>
            <td className="p-2 border">Automatic</td>
            <td className="p-2 border">Automatic</td>
            <td className="p-2 border">No automatic garbage collection</td>
          </tr>
          <tr>
            <td className="p-2 border">Classes and Objects</td>
            <td className="p-2 border">Not supported</td>
            <td className="p-2 border">Supported</td>
            <td className="p-2 border">Supported</td>
          </tr>
          <tr>
            <td className="p-2 border">Inheritance</td>
            <td className="p-2 border">Not supported</td>
            <td className="p-2 border">Supported</td>
            <td className="p-2 border">Supported</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-8">Notes</h2>
    <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-3 space-y-1">
      <li>
        <b>Compilation time</b> refers to translating the code into an executable program.
      </li>
      <li>
        <b>Concurrency</b> means performing multiple tasks simultaneously or out of order, without affecting the final outcome.
      </li>
      <li>
        <b>Statically typed</b> means variable types are known at compile time.
      </li>
    </ul>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-8">Get Started</h2>
    <p className="text-gray-700 leading-relaxed mt-3">
      This tutorial will teach you the basics of Go. No prior programming
      experience is required — just curiosity and a willingness to learn!
    </p>
  </div>
);

export default GoIntro;
