import React from "react";

const SwiftHome: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-15">
      Learn Swift
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      <b>Swift</b> is a fast, safe, and modern programming language created by Apple for building
      apps on iOS, macOS, watchOS, tvOS, and even for server-side development.
    </p>

    <p className=" leading-relaxed mt-3">
      Swift offers features like type inference, optionals, value semantics, and powerful
      protocols/generics — making it both beginner-friendly and extremely powerful for
      professional development.
    </p>

    <p className=" leading-relaxed mt-3">
      This tutorial helps you learn Swift from beginner to advanced, covering syntax, types,
      control flow, collections, functions, OOP, protocols, generics, concurrency, and iOS app
      development using Xcode and Interface Builder.
    </p>

    <p className=" leading-relaxed mt-3">
      You can practice Swift easily using our online <b>"Try it Yourself"</b> editor where you can
      write Swift code and instantly see the results.
    </p>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Example</h2>

    <p className=" leading-relaxed mt-3">
      Here is a simple Swift program that prints <b>"Hello, Swift!"</b> to the console:
    </p>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`print("Hello, Swift!")`}
      </pre>
    </div>

    <p className=" leading-relaxed mt-4">
      ✅ This program uses the <b>print()</b> function to output text to the console.
    </p>
  </>
);

export default SwiftHome;
