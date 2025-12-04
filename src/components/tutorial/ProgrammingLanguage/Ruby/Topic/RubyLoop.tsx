import React from "react";

const RubyLoops: React.FC = () => (
  <div className="mt-20 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-3">
      Ruby – Loops
    </h1>

    <p className="leading-relaxed">
      Loops in Ruby are used to execute the same block of code multiple times. 
      Ruby supports <code>while</code>, <code>until</code>, <code>for</code> loops, and modifiers, 
      along with <code>break</code>, <code>next</code>, <code>redo</code>, and <code>retry</code> statements.
    </p>

    {/* while loop */}
    <h2 className="text-2xl font-bold mt-10">Ruby while Statement</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`#!/usr/bin/ruby

$i = 0
$num = 5

while $i < $num do
  puts("Inside the loop i = #$i")
  $i += 1
end`}</pre>
    <p className="leading-relaxed font-semibold">Output:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`Inside the loop i = 0
Inside the loop i = 1
Inside the loop i = 2
Inside the loop i = 3
Inside the loop i = 4`}</pre>

    {/* while modifier */}
    <h2 className="text-2xl font-bold mt-10">Ruby while Modifier</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`#!/usr/bin/ruby

$i = 0
$num = 5
begin
  puts("Inside the loop i = #$i")
  $i += 1
end while $i < $num`}</pre>

    <p className="leading-relaxed font-semibold">Output:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`Inside the loop i = 0
Inside the loop i = 1
Inside the loop i = 2
Inside the loop i = 3
Inside the loop i = 4`}</pre>

    {/* until loop */}
    <h2 className="text-2xl font-bold mt-10">Ruby until Statement</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`#!/usr/bin/ruby

$i = 0
$num = 5

until $i > $num do
  puts("Inside the loop i = #$i")
  $i += 1
end`}</pre>

    <p className="leading-relaxed font-semibold">Output:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`Inside the loop i = 0
Inside the loop i = 1
Inside the loop i = 2
Inside the loop i = 3
Inside the loop i = 4
Inside the loop i = 5`}</pre>

    {/* until modifier */}
    <h2 className="text-2xl font-bold mt-10">Ruby until Modifier</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`#!/usr/bin/ruby

$i = 0
$num = 5
begin
  puts("Inside the loop i = #$i")
  $i += 1
end until $i > $num`}</pre>

    <p className="leading-relaxed font-semibold">Output:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`Inside the loop i = 0
Inside the loop i = 1
Inside the loop i = 2
Inside the loop i = 3
Inside the loop i = 4
Inside the loop i = 5`}</pre>

    {/* for loop */}
    <h2 className="text-2xl font-bold mt-10">Ruby for Statement</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`#!/usr/bin/ruby

for i in 0..5
  puts "Value of local variable is #{i}"
end`}</pre>

    <p className="leading-relaxed font-semibold">Output:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`Value of local variable is 0
Value of local variable is 1
Value of local variable is 2
Value of local variable is 3
Value of local variable is 4
Value of local variable is 5`}</pre>

    {/* for loop using each */}
    <h2 className="text-2xl font-bold mt-10">for loop using each</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`#!/usr/bin/ruby

(0..5).each do |i|
  puts "Value of local variable is #{i}"
end`}</pre>

    <p className="leading-relaxed font-semibold">Output:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`Value of local variable is 0
Value of local variable is 1
Value of local variable is 2
Value of local variable is 3
Value of local variable is 4
Value of local variable is 5`}</pre>

    {/* break */}
    <h2 className="text-2xl font-bold mt-10">Ruby break Statement</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`#!/usr/bin/ruby

for i in 0..5
  if i > 2 then
    break
  end
  puts "Value of local variable is #{i}"
end`}</pre>

    <p className="leading-relaxed font-semibold">Output:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`Value of local variable is 0
Value of local variable is 1
Value of local variable is 2`}</pre>

    {/* next */}
    <h2 className="text-2xl font-bold mt-10">Ruby next Statement</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`#!/usr/bin/ruby

for i in 0..5
  if i < 2 then
    next
  end
  puts "Value of local variable is #{i}"
end`}</pre>

    <p className="leading-relaxed font-semibold">Output:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`Value of local variable is 2
Value of local variable is 3
Value of local variable is 4
Value of local variable is 5`}</pre>

    {/* redo */}
    <h2 className="text-2xl font-bold mt-10">Ruby redo Statement</h2>
    <p className="leading-relaxed">
      Restarts the current iteration of the loop without checking the condition. May cause infinite loop if misused.
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`#!/usr/bin/ruby

for i in 0..5
  if i < 2 then
    puts "Value of local variable is #{i}"
    redo
  end
end`}</pre>

    <p className="leading-relaxed font-semibold">Output:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`Value of local variable is 0
Value of local variable is 0
... (infinite loop)`}</pre>

    {/* retry */}
    <h2 className="text-2xl font-bold mt-10">Ruby retry Statement</h2>
    <p className="leading-relaxed">
      Restarts execution from the beginning. In a <code>for</code> loop, re-evaluates iterator.
      In a <code>begin...rescue</code> block, restarts from the <code>begin</code>.
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`#!/usr/bin/ruby

for i in 0..5
  retry if i > 2
  puts "Value of local variable is #{i}"
end`}</pre>

    <p className="leading-relaxed font-semibold">Output:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`Value of local variable is 0
Value of local variable is 1
Value of local variable is 2
Value of local variable is 1
Value of local variable is 2
... (infinite loop)`}</pre>
  </div>
);

export default RubyLoops;
