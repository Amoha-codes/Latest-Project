import React from "react";

const RubyMethods: React.FC = () => (
  <div className="mt-20 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-3">
      Ruby – Methods
    </h1>

    <p className="leading-relaxed">
      Ruby methods are similar to functions in other languages. They bundle one or more statements into a single unit. 
      Method names should start with a lowercase letter.
    </p>

    {/* Method Syntax */}
    <h2 className="text-2xl font-bold mt-10">Method Syntax</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`def method_name([arg1 = default1, arg2 = default2, *args, &block])
  # code here
end`}</pre>

    {/* Simple method example */}
    <h2 className="text-2xl font-bold mt-10">Example – Simple Method</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`#!/usr/bin/ruby

def test(a1 = "Ruby", a2 = "Perl")
  puts "The programming language is #{a1}"
  puts "The programming language is #{a2}"
end

test "C", "C++"
test`}</pre>

    <p className="leading-relaxed font-semibold">Output:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`The programming language is C
The programming language is C++
The programming language is Ruby
The programming language is Perl`}</pre>

    {/* Return Values */}
    <h2 className="text-2xl font-bold mt-10">Return Values from Methods</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`#!/usr/bin/ruby

def test
  i = 100
  j = 200
  k = 300
  return i, j, k
end

var = test
puts var`}</pre>

    <p className="leading-relaxed font-semibold">Output:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`100
200
300`}</pre>

    {/* Variable Number of Parameters */}
    <h2 className="text-2xl font-bold mt-10">Variable Number of Parameters</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`#!/usr/bin/ruby

def sample(*test)
  puts "The number of parameters is #{test.length}"
  for i in 0...test.length
    puts "The parameters are #{test[i]}"
  end
end

sample "Zara", "6", "F"
sample "Mac", "36", "M", "MCA"`}</pre>

    <p className="leading-relaxed font-semibold">Output:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`The number of parameters is 3
The parameters are Zara
The parameters are 6
The parameters are F
The number of parameters is 4
The parameters are Mac
The parameters are 36
The parameters are M
The parameters are MCA`}</pre>

    {/* Class Methods */}
    <h2 className="text-2xl font-bold mt-10">Class Methods</h2>
    <p className="leading-relaxed">
      Methods inside a class are public by default. Class methods can be called without creating an object.
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`class Accounts
  def reading_charge
    # instance method
  end

  def Accounts.return_date
    # class method
  end
end

Accounts.return_date`}</pre>

    {/* Alias Statement */}
    <h2 className="text-2xl font-bold mt-10">Ruby alias Statement</h2>
    <p className="leading-relaxed">
      The <code>alias</code> keyword creates an alternate name for a method or global variable.
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`alias foo bar
alias $MATCH $&`}</pre>

    {/* Undef Statement */}
    <h2 className="text-2xl font-bold mt-10">Ruby undef Statement</h2>
    <p className="leading-relaxed">
      The <code>undef</code> keyword cancels a method definition. It cannot appear inside a method body.
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`undef bar`}</pre>
  </div>
);

export default RubyMethods;
