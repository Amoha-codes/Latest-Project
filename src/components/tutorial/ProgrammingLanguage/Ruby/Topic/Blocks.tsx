import React from "react";

const RubyBlocks: React.FC = () => (
  <div className="mt-20 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-3">
      Ruby – Blocks
    </h1>

    <p className="leading-relaxed">
      Ruby blocks are chunks of code that can be passed to methods for execution. A block is always enclosed within braces <code>{}</code> or the <code>do...end</code> keyword.
      Blocks are invoked using the <code>yield</code> statement.
    </p>

    {/* Basic Yield Example */}
    <h2 className="text-2xl font-bold mt-10">The <code>yield</code> Statement</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`#!/usr/bin/ruby

def test
  puts "You are in the method"
  yield
  puts "You are again back to the method"
  yield
end

test { puts "You are in the block" }`}</pre>

    <p className="leading-relaxed font-semibold">Output:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`You are in the method
You are in the block
You are again back to the method
You are in the block`}</pre>

    {/* Yield with Parameters */}
    <h2 className="text-2xl font-bold mt-10">Yield with Parameters</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`#!/usr/bin/ruby

def test
  yield 5
  puts "You are in the method test"
  yield 100
end

test { |i| puts "You are in the block #{i}" }`}</pre>

    <p className="leading-relaxed font-semibold">Output:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`You are in the block 5
You are in the method test
You are in the block 100`}</pre>

    <p className="leading-relaxed">
      To pass multiple parameters, use <code>yield a, b</code> and receive them in the block as <code>{"|a,b| ..." }</code>.
    </p>

    {/* Blocks Passed as Parameters */}
    <h2 className="text-2xl font-bold mt-10">Passing Block as a Parameter</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`#!/usr/bin/ruby

def test(&block)
  block.call
end

test { puts "Hello World!" }`}</pre>

    <p className="leading-relaxed font-semibold">Output:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`Hello World!`}</pre>

    {/* BEGIN and END Blocks */}
    <h2 className="text-2xl font-bold mt-10">BEGIN and END Blocks</h2>
    <p className="leading-relaxed">
      Ruby allows code to be executed when a file is loaded (<code>BEGIN</code>) and after the program finishes (<code>END</code>). Multiple blocks are executed in order (<code>BEGIN</code>) and reverse order (<code>END</code>).
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`#!/usr/bin/ruby

BEGIN {
  puts "BEGIN code block"
}

END {
  puts "END code block"
}

puts "MAIN code block"`}</pre>

    <p className="leading-relaxed font-semibold">Output:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`BEGIN code block
MAIN code block
END code block`}</pre>
  </div>
);

export default RubyBlocks;
