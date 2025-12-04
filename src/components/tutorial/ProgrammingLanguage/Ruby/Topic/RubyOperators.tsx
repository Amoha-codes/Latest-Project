import React from "react";

const RubyOperators: React.FC = () => (
  <div className="mt-20 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-3">
      Ruby – Operators
    </h1>

    {/* Intro */}
    <p className="leading-relaxed">
      Ruby supports many operators, and most of them are actually method calls.
      For example, <code>a + b</code> is interpreted internally as <code>a.+(b)</code>.
    </p>

    {/* Arithmetic Operators */}
    <h2 className="text-2xl font-bold mt-10">Ruby Arithmetic Operators</h2>
    <p>Assume <code>a = 10</code> and <code>b = 20</code></p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`a + b   # 30
a - b   # -10
a * b   # 200
b / a   # 2
b % a   # 0
a ** b  # 10 to the power 20`}</pre>

    {/* Comparison Operators */}
    <h2 className="text-2xl font-bold mt-10">Ruby Comparison Operators</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`a == b   # false
a != b   # true
a > b    # false
a < b    # true
a <= b   # true
a >= b   # false
a <=> b  # -1
(1...10) === 5  # true
1.eql?(1.0)     # false`}</pre>

    {/* Assignment Operators */}
    <h2 className="text-2xl font-bold mt-10">Ruby Assignment Operators</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`c = a + b
c += a   # c = c + a
c -= a   # c = c - a
c *= a   # c = c * a
c /= a   # c = c / a
c %= a   # c = c % a
c **= a  # c = c ** a`}</pre>

    {/* Parallel Assignment */}
    <h2 className="text-2xl font-bold mt-10">Ruby Parallel Assignment</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`a, b, c = 10, 20, 30
a, b = b, a  # swapping values`}</pre>

    {/* Bitwise Operators */}
    <h2 className="text-2xl font-bold mt-10">Ruby Bitwise Operators</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`a = 60  # 0011 1100
b = 13  # 0000 1101

a & b   # 12
a | b   # 61
a ^ b   # 49
~a      # -61
a << 2  # 240
a >> 2  # 15`}</pre>

    {/* Logical Operators */}
    <h2 className="text-2xl font-bold mt-10">Ruby Logical Operators</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`a && b   # true
a || b   # true
!(a && b) # false
not(a && b) # false
a and b  # true
a or b   # true`}</pre>

    {/* Ternary */}
    <h2 className="text-2xl font-bold mt-10">Ruby Ternary Operator</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`age = 18
puts age >= 18 ? "Adult" : "Minor"`}</pre>

    {/* Range Operators */}
    <h2 className="text-2xl font-bold mt-10">Ruby Range Operators</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`1..10   # inclusive
1...10  # exclusive`}</pre>

    {/* defined? */}
    <h2 className="text-2xl font-bold mt-10">Ruby defined? Operator</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`foo = 42
defined? foo   # "local-variable"
defined? puts  # "method"
defined? bar   # nil`}</pre>

    {/* Dot and Colon */}
    <h2 className="text-2xl font-bold mt-10">Ruby Dot "." and Double Colon "::"</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`module Foo
  MR_COUNT = 2
end

puts Foo::MR_COUNT

# Calling methods using dot:
Math.sqrt(9)`}</pre>

    {/* Precedence */}
    <h2 className="text-2xl font-bold mt-10">Ruby Operator Precedence</h2>
    <p>Highest to lowest (simplified):</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`::   # highest
**  
! ~ + -  
* / %  
+ -  
>> <<  
&  
^ |  
< > <= >=  
<=> == === !=  
&&  
||  
.. ...  
? :  
= += -= *= etc.
not  
or and   # lowest`}</pre>
  </div>
);

export default RubyOperators;
