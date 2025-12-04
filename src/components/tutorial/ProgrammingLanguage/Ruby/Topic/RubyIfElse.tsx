import React from "react";

const RubyConditionals: React.FC = () => (
  <div className="mt-20 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-3">
      Ruby – if...else, case, unless
    </h1>

    {/* Intro */}
    <p className="leading-relaxed">
      Ruby offers conditional structures that are common to modern languages. 
      Here we explain all conditional statements and modifiers available in Ruby.
    </p>

    {/* if...else */}
    <h2 className="text-2xl font-bold mt-10">Ruby if...else Statement</h2>
    <p className="leading-relaxed">
      Executes code if the conditional is true. If false, executes the <code>else</code> clause.
      Ruby uses <code>elsif</code> (not <code>else if</code> or <code>elif</code>).
      Conditional expressions are separated from code by <code>then</code>, newline, or semicolon.
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`#!/usr/bin/ruby

x = 1
if x > 2
   puts "x is greater than 2"
elsif x <= 2 and x != 0
   puts "x is 1"
else
   puts "I can't guess the number"
end`}</pre>

    <p className="leading-relaxed font-semibold">Output:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`x is 1`}</pre>

    {/* if modifier */}
    <h2 className="text-2xl font-bold mt-10">Ruby if Modifier</h2>
    <p className="leading-relaxed">
      Executes code only if the condition is true. Syntax: <code>code if condition</code>.
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`#!/usr/bin/ruby

$debug = 1
print "debug\\n" if $debug`}</pre>

    <p className="leading-relaxed font-semibold">Output:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`debug`}</pre>

    {/* unless */}
    <h2 className="text-2xl font-bold mt-10">Ruby unless Statement</h2>
    <p className="leading-relaxed">
      Executes code if the conditional is false. Optional <code>else</code> executes if true.
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`#!/usr/bin/ruby

x = 1 
unless x >= 2
   puts "x is less than 2"
else
   puts "x is greater than 2"
end`}</pre>

    <p className="leading-relaxed font-semibold">Output:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`x is less than 2`}</pre>

    {/* unless modifier */}
    <h2 className="text-2xl font-bold mt-10">Ruby unless Modifier</h2>
    <p className="leading-relaxed">
      Executes code only if the condition is false. Syntax: <code>code unless condition</code>.
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`#!/usr/bin/ruby

$var =  1
print "1 -- Value is set\\n" if $var
print "2 -- Value is set\\n" unless $var

$var = false
print "3 -- Value is set\\n" unless $var`}</pre>

    <p className="leading-relaxed font-semibold">Output:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`1 -- Value is set
3 -- Value is set`}</pre>

    {/* case */}
    <h2 className="text-2xl font-bold mt-10">Ruby case Statement</h2>
    <p className="leading-relaxed">
      Compares a value with multiple <code>when</code> clauses using the <code>===</code> operator.
      Executes the matching clause or <code>else</code> if none match.
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`#!/usr/bin/ruby

$age = 5
case $age
when 0 .. 2
   puts "baby"
when 3 .. 6
   puts "little child"
when 7 .. 12
   puts "child"
when 13 .. 18
   puts "youth"
else
   puts "adult"
end`}</pre>

    <p className="leading-relaxed font-semibold">Output:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`little child`}</pre>
  </div>
);

export default RubyConditionals;
