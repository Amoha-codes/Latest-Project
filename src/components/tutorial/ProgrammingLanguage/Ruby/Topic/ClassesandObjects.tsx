import React from "react";

const RubyClassesObjects: React.FC = () => (
  <div className="mt-20 space-y-6">

    <h1 className="text-4xl font-extrabold border-b-2 pb-3">
      Ruby – Classes and Objects
    </h1>

    {/* Introduction */}
    <p className="leading-relaxed">
      Ruby is a fully object-oriented programming language. Every value in Ruby is an object,
      including primitive data types. Ruby supports major OOP features like:
    </p>

    <ul className="list-disc ml-8 space-y-2">
      <li>Data Encapsulation</li>
      <li>Data Abstraction</li>
      <li>Polymorphism</li>
      <li>Inheritance</li>
    </ul>

    <p className="leading-relaxed">
      A <strong>class</strong> is a blueprint for objects, and an <strong>object</strong> is an
      instance of a class. For example, your bicycle is an object of the class <strong>Bicycle</strong>.
    </p>

    {/* Vehicle Example */}
    <h2 className="text-2xl font-bold mt-10">Class Example: Vehicle</h2>

    <p className="leading-relaxed">
      A vehicle has characteristics like wheels, horsepower, and tank capacity, and also behaviors
      such as driving, halting, and speeding.
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`Class Vehicle {
   Number no_of_wheels
   Number horsepower
   Characters type_of_tank
   Number capacity

   Function speeding { }
   Function driving { }
   Function halting { }
}`}
    </pre>

    <p className="leading-relaxed">
      By giving different values to these members, Ruby can create many objects like cars,
      airplanes, or bikes.
    </p>

    {/* Defining a Class in Ruby */}
    <h2 className="text-2xl font-bold mt-10">Defining a Class in Ruby</h2>

    <p className="leading-relaxed">
      Ruby classes always start with the keyword <code>class</code> and end with <code>end</code>.
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`class Customer
end`}
    </pre>

    {/* Variables */}
    <h2 className="text-2xl font-bold mt-10">Variables in a Ruby Class</h2>

    <p>Ruby provides four types of variables:</p>

    <ul className="list-disc ml-8 space-y-2">
      <li><strong>Local Variables</strong> – begin with lowercase or <code>_</code></li>
      <li><strong>Instance Variables</strong> – begin with <code>@</code></li>
      <li><strong>Class Variables</strong> – begin with <code>@@</code></li>
      <li><strong>Global Variables</strong> – begin with <code>$</code></li>
    </ul>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`class Customer
  @@no_of_customers = 0
end`}
    </pre>

    {/* Creating Objects */}
    <h2 className="text-2xl font-bold mt-10">Creating Objects Using new Method</h2>

    <p className="leading-relaxed">
      Objects are instances of a class. Ruby uses the <code>new</code> method to create objects.
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`cust1 = Customer.new
cust2 = Customer.new`}
    </pre>

    {/* initialize method */}
    <h2 className="text-2xl font-bold mt-10">Using initialize to Pass Parameters</h2>

    <p className="leading-relaxed">
      The <code>initialize</code> method runs automatically when <code>new</code> is called.
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`class Customer
  @@no_of_customers = 0

  def initialize(id, name, addr)
    @cust_id = id
    @cust_name = name
    @cust_addr = addr
  end
end

cust1 = Customer.new("1", "John", "Wisdom Apartments")
cust2 = Customer.new("2", "Poul", "New Empire Road")`}
    </pre>

    {/* Methods */}
    <h2 className="text-2xl font-bold mt-10">Member Methods in Ruby</h2>

    <p className="leading-relaxed">
      Methods in Ruby are defined using <code>def</code> and closed using <code>end</code>.
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`class Sample
  def hello
    puts "Hello Ruby!"
  end
end

object = Sample.new
object.hello`}
    </pre>

    <p>The output will be:</p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
Hello Ruby!
    </pre>

  </div>
);

export default RubyClassesObjects;
