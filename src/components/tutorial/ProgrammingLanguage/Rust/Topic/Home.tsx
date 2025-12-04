import React from "react";

const RustHome: React.FC = () => (
  <div className="mt-20 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-3">
      Rust Tutorial
    </h1>

    {/* Homeduction */}
    <h2 className="text-2xl font-bold mt-10">What is Rust?</h2>
    <p className="leading-relaxed">
      Rust is a modern systems programming language developed by the Mozilla
      Corporation. It is designed for building highly concurrent, highly secure,
      and performance‑critical applications. Rust compiles to native machine
      code, making it extremely fast like C and C++, while also offering memory
      safety without a garbage collector.
    </p>

    <p className="leading-relaxed">
      This tutorial follows a simple and practical approach to help you learn
      the concepts of Rust programming effectively.
    </p>

    {/* Audience */}
    <h2 className="text-2xl font-bold mt-10">Audience</h2>
    <p className="leading-relaxed">
      This tutorial is intended for beginners as well as developers who want to
      understand both the basic and advanced concepts of Rust. Whether you are
      new to systems programming or transitioning from another language, this
      guide will help you learn Rust step by step.
    </p>

    {/* Prerequisites */}
    <h2 className="text-2xl font-bold mt-10">Prerequisites</h2>
    <p className="leading-relaxed">
      Before starting with this Rust course, you should have a basic
      understanding of general programming concepts such as variables, data
      types, loops, functions, and object‑oriented principles. Knowledge of C or
      C++ is helpful but not mandatory.
    </p>
  </div>
);

export default RustHome;
