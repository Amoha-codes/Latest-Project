import React from "react";

const RubyVariables: React.FC = () => (
  <div className="mt-20 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-3">
      Ruby – Variables, Constants & Literals
    </h1>

    {/* Global Variables */}
    <h2 className="text-2xl font-bold mt-10">Ruby Global Variables</h2>
    <p className="leading-relaxed">
      Global variables start with <code>$</code>. They can be accessed anywhere in the
      program.
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`#!/usr/bin/ruby

$global_variable = 10
class Class1
  def print_global
    puts "Global variable in Class1 is #$global_variable"
  end
end
class Class2
  def print_global
    puts "Global variable in Class2 is #$global_variable"
  end
end

c1 = Class1.new
c1.print_global
c2 = Class2.new
c2.print_global`}</pre>

    {/* Instance Variables */}
    <h2 className="text-2xl font-bold mt-10">Ruby Instance Variables</h2>
    <p className="leading-relaxed">
      Instance variables start with <code>@</code>. They belong to individual objects.
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`class Customer
  def initialize(id, name, addr)
    @cust_id = id
    @cust_name = name
    @cust_addr = addr
  end

  def display_details
    puts "Customer id #@cust_id"
    puts "Customer name #@cust_name"
    puts "Customer address #@cust_addr"
  end
end

cust1 = Customer.new("1", "John", "Wisdom Apartments")
cust2 = Customer.new("2", "Poul", "New Empire Road")

cust1.display_details
cust2.display_details`}</pre>

    {/* Class Variables */}
    <h2 className="text-2xl font-bold mt-10">Ruby Class Variables</h2>
    <p className="leading-relaxed">
      Class variables start with <code>@@</code> and are shared among all objects.
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`class Customer
  @@no_of_customers = 0

  def initialize(id, name, addr)
    @cust_id = id
    @cust_name = name
    @cust_addr = addr
  end

  def total_no_of_customers
    @@no_of_customers += 1
    puts "Total number of customers: #@@no_of_customers"
  end
end

c1 = Customer.new("1", "John", "Wisdom")
c2 = Customer.new("2", "Poul", "Empire")
c1.total_no_of_customers
c2.total_no_of_customers`}</pre>

    {/* Constants */}
    <h2 className="text-2xl font-bold mt-10">Ruby Constants</h2>
    <p className="leading-relaxed">Constants begin with uppercase letters.</p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`class Example
  VAR1 = 100
  VAR2 = 200

  def show
    puts "Value of first Constant is #{VAR1}"
    puts "Value of second Constant is #{VAR2}"
  end
end

obj = Example.new
obj.show`}</pre>

    {/* Literals */}
    <h2 className="text-2xl font-bold mt-10">Ruby Literals</h2>

    <h3 className="text-xl font-semibold">Integer Literals</h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`123
1_234
-500
0377
0xff
0b1011
?a
?\n`}</pre>

    <h3 className="text-xl font-semibold">Floating Literals</h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`123.4
1.0e6
4E20
4e+20`}</pre>

    <h3 className="text-xl font-semibold">String Literals</h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`puts 'escape using "\\"'
puts 'That\'s right'`}</pre>

    <h3 className="text-xl font-semibold">Array Literals</h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`ary = ["fred", 10, 3.14, "string", "last"]
ary.each { |i| puts i }`}</pre>

    <h3 className="text-xl font-semibold">Hash Literals</h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`hsh = {"red" => 0xf00, "green" => 0x0f0, "blue" => 0x00f}
hsh.each { |k,v| puts "#{k} is #{v}" }`}</pre>

    <h3 className="text-xl font-semibold">Range Literals</h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`(10..15).each { |n| print n, ' ' }`}</pre>
  </div>
);

export default RubyVariables;
