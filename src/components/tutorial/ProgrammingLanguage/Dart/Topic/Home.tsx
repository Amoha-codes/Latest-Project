import React from "react";

const DartHome: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">Dart Programming Tutorial</h1>

      <div className="space-y-4">
    
        <p className="leading-relaxed ">
          Dart is an open-source, general-purpose programming language. It was originally developed by
          Google and later approved as a standard by ECMA. Dart can be used for both server and browser
          environments. The Dart SDK ships with its own compiler, the Dart VM, and a utility named
          <span className="font-semibold"> dart2js</span>, a transpiler that converts Dart code into JavaScript.
          This tutorial provides a basic-level understanding of the Dart programming language.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Audience</h2>
        <p className="leading-relaxed  ">
          This tutorial is useful for developers who want to create single-page web applications using Dart.
          It is ideal for programmers who already understand object-oriented concepts.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Prerequisites</h2>
        <p className="leading-relaxed  ">
          We assume that readers are familiar with object-oriented programming. If you have experience with
          JavaScript, you will be able to learn Dart more quickly and easily.
        </p>
      </div>
    </div>
  );
};

export default DartHome;
