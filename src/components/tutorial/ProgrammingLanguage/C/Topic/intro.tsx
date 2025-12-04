import React from "react";

const CIntroduction: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">C Introduction</h1>

      {/* What is C? */}
      <h2 className="text-2xl font-bold">What is C?</h2>
      <p className="leading-relaxed">
        <span className="font-semibold">C</span> is a general-purpose programming language
        created by <span className="font-semibold">Dennis Ritchie</span> at Bell Laboratories in 1972.
      </p>

      <p className="leading-relaxed">
        Even though it is old, C remains one of the most widely used programming languages.
        Its popularity comes from being a fundamental language in the world of computer science.
      </p>

      <p className="leading-relaxed">
        C is strongly linked with UNIX, as the UNIX operating system was originally written in C.
      </p>

      {/* Why Learn C? */}
      <h2 className="text-2xl font-bold">Why Learn C?</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>It is one of the most popular programming languages in the world.</li>
        <li>
          Learning C makes it easier to learn other programming languages such as
          Java, Python, C++, C#, and more because the syntax is similar.
        </li>
        <li>If you know C, you understand how computer memory works.</li>
        <li>C is very fast compared to languages like Java and Python.</li>
        <li>C is versatile and can be used for applications, systems, and technologies.</li>
      </ul>

      {/* Difference Between C and C++ */}
      <h2 className="text-2xl font-bold">Difference Between C and C++</h2>
      <p className="leading-relaxed">
        C++ was developed as an extension of C, and both languages share almost the same syntax.
      </p>
      <p className="leading-relaxed">
        The key difference is that <span className="font-semibold">C++ supports classes and objects</span>,
        while <span className="font-semibold">C does not</span>.
      </p>

      {/* Get Started Section */}
      <h2 className="text-2xl font-bold">Get Started</h2>
      <p className="leading-relaxed">
        This tutorial will teach you the basics of C programming.
      </p>
      <p className="leading-relaxed">
        When you complete this tutorial, you will be able to write C programs
        and build real-world examples.
      </p>
      <p className="leading-relaxed">
        No prior programming experience is required — this tutorial starts from the very basics.
      </p>
    </div>
  );
};

export default CIntroduction;
