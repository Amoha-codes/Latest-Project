import React from "react";

const RubyHome: React.FC = () => (
  <div className="mt-20 space-y-6">

    <h1 className="text-4xl font-extrabold border-b-2 pb-3">
      What is Ruby?
    </h1>

    <p className="text-lg leading-relaxed">
      Ruby is an open-source, high-level programming language known for its
      simplicity and developer-friendliness. Designed by Yukihiro Matsumoto,
      Ruby focuses on making programming more enjoyable and productive. It
      provides features like object-orientation, dynamic typing, readable
      syntax, and a large standard library.
    </p>

    {/* Why Learn Ruby */}
    <h2 className="text-2xl font-bold mt-10">Why Learn Ruby?</h2>

    <ul className="list-disc ml-8 space-y-3">
      <li>
        <strong>Simplicity & Readable Syntax:</strong> Ruby’s clean and concise
        syntax makes code easy to read and write.
      </li>
      <li>
        <strong>Powerful Frameworks:</strong> Ruby supports frameworks like
        <em> Ruby on Rails </em> for efficient web development.
      </li>
      <li>
        <strong>Strong Community:</strong> A huge ecosystem with RubyGems,
        libraries, and active community support.
      </li>
      <li>
        <strong>Great for Prototyping:</strong> Dynamic nature allows rapid
        iterations—ideal for startups.
      </li>
    </ul>

    {/* Characteristics */}
    <h2 className="text-2xl font-bold mt-10">Characteristics of Ruby</h2>

    <ul className="list-disc ml-8 space-y-3">
      <li>
        <strong>Object-Oriented:</strong> Everything in Ruby is an object,
        including numbers, strings, and nil.
      </li>
      <li>
        <strong>Dynamic Typing:</strong> No need for explicit type declarations;
        Ruby determines types at runtime.
      </li>
      <li>
        <strong>Automatic Memory Management:</strong> Garbage collection handles
        memory automatically.
      </li>
      <li>
        <strong>Large Standard Library:</strong> Provides built-in classes for
        I/O, data processing, and more.
      </li>
      <li>
        <strong>Metaprogramming:</strong> Ruby can modify classes/objects at
        runtime, enabling dynamic flexibility.
      </li>
    </ul>

    {/* Hello World */}
    <h2 className="text-2xl font-bold mt-10">Ruby Hello, World! Program</h2>

    <p>
      The basic Ruby program prints <code>"Hello, World!"</code> using{" "}
      <code>puts</code>.
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md font-mono dark:text-gray-100">
{`# Ruby code to print Hello, World!
puts "Hello, World!"`}
    </pre>

    {/* Applications */}
    <h2 className="text-2xl font-bold mt-10">Applications of Ruby</h2>

    <ul className="list-disc ml-8 space-y-3">
      <li>
        <strong>Web & API Development:</strong> Ruby on Rails powers sites like
        GitHub, Shopify, and Airbnb.
      </li>
      <li>
        <strong>Scripting & Automation:</strong> Ideal for CLI tools, data
        processing, system tasks, automation.
      </li>
      <li>
        <strong>Data Extraction & Analysis:</strong> Libraries like Nokogiri and
        HTTParty help with scraping and analysis.
      </li>
      <li>
        <strong>DevOps:</strong> Tools like Chef and Puppet are built in Ruby.
      </li>
      <li>
        <strong>Application Development:</strong> Used in game development,
        ecommerce platforms, social apps.
      </li>
    </ul>

    {/* Careers */}
    <h2 className="text-2xl font-bold mt-10">Jobs / Careers with Ruby</h2>

    <ul className="list-disc ml-8 space-y-2">
      <li>Ruby / Ruby on Rails Developer</li>
      <li>Software Engineer</li>
      <li>DevOps Engineer</li>
      <li>Full-Stack Developer</li>
      <li>Data Analyst / Scientist</li>
      <li>API Developer</li>
      <li>Game Developer</li>
    </ul>

    {/* Target Audience */}
    <h2 className="text-2xl font-bold mt-10">
      Target Audience: Who Should Learn Ruby?
    </h2>

    <p>
      This Ruby tutorial is great for aspiring and experienced developers,
      full-stack developers, Ruby on Rails developers, startup teams, prototyping
      developers, test-driven developers, and DevOps engineers.
    </p>

    {/* Prerequisites */}
    <h2 className="text-2xl font-bold mt-10">Prerequisites</h2>

    <ul className="list-disc ml-8 space-y-2">
      <li>Basic computer knowledge</li>
      <li>Knowledge of text editors or IDEs</li>
      <li>Familiarity with version control like Git</li>
    </ul>

  </div>
);

export default RubyHome;
