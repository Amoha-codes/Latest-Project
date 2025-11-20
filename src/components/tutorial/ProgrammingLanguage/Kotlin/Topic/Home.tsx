import React from "react";

const KotlinHome: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Kotlin Tutorial
    </h1>

    <h2 className="text-2xl font-bold  mt-4">Learn Kotlin</h2>
    <p className="text-lg  leading-relaxed mt-3">
      Kotlin is a modern, trending programming language.
    </p>

    <p className="text-lg  leading-relaxed mt-2">
      Kotlin is easy to learn, especially if you already know Java (it is 100% compatible with Java).
    </p>

    <p className="text-lg  leading-relaxed mt-2">
      Kotlin is used to develop Android apps, server-side apps, and much more.
    </p>

    <p className="text-lg  leading-relaxed mt-4">
      🏁 <strong>Tip:</strong> Sign in to track your progress — it's free.
    </p>

    <h2 className="text-2xl font-bold  mt-8">Examples in Each Chapter</h2>
    <p className="text-lg  leading-relaxed mt-2">
      Our <strong>"Try it Yourself"</strong> editor makes it easy to learn Kotlin. You can edit the code and view the result in your browser:
    </p>

    <h3 className="text-xl font-semibold  mt-4">Example</h3>
    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
{`fun main() {
  println("Hello World")
}`}
    </pre>
  </div>
);

export default KotlinHome;
