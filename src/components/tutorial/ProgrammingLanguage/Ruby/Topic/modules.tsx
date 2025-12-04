import React from "react";

const RubyModules: React.FC = () => (
  <div className="mt-20 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-3">
      Ruby – Modules and Mixins
    </h1>

    <p className="leading-relaxed">
      Modules in Ruby allow grouping methods, classes, and constants. They provide two major benefits:
      <ul className="list-disc ml-6 mt-2">
        <li>Provide a namespace and prevent name clashes</li>
        <li>Implement the mixin facility to add functionality to classes</li>
      </ul>
    </p>

    {/* Module Syntax */}
    <h2 className="text-2xl font-bold mt-10">Module Syntax</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`module Identifier
  statement1
  statement2
  ...
end`}</pre>

    {/* Example: Trig Module */}
    <h2 className="text-2xl font-bold mt-10">Example: Module with Methods and Constants</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`module Trig
  PI = 3.141592654
  def Trig.sin(x)
    # implementation
  end
  def Trig.cos(x)
    # implementation
  end
end`}</pre>

    {/* Module require */}
    <h2 className="text-2xl font-bold mt-10">The <code>require</code> Statement</h2>
    <p className="leading-relaxed">
      Use <code>require</code> to include modules from other files:
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`$LOAD_PATH << '.'

require 'trig.rb'
require 'moral'

y = Trig.sin(Trig::PI/4)
wrongdoing = Moral.sin(Moral::VERY_BAD)`}</pre>

    <p className="leading-relaxed">
      Using modules prevents function name conflicts by using the module name as a namespace.
    </p>

    {/* include Statement */}
    <h2 className="text-2xl font-bold mt-10">The <code>include</code> Statement</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`module Week
  FIRST_DAY = "Sunday"
  def Week.weeks_in_month
    puts "You have four weeks in a month"
  end
  def Week.weeks_in_year
    puts "You have 52 weeks in a year"
  end
end

class Decade
  include Week
  no_of_yrs = 10
  def no_of_months
    puts Week::FIRST_DAY
    number = 10*12
    puts number
  end
end

d1 = Decade.new
puts Week::FIRST_DAY
Week.weeks_in_month
Week.weeks_in_year
d1.no_of_months`}</pre>

    <p className="leading-relaxed font-semibold">Output:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`Sunday
You have four weeks in a month
You have 52 weeks in a year
Sunday
120`}</pre>

    {/* Mixins */}
    <h2 className="text-2xl font-bold mt-10">Mixins in Ruby</h2>
    <p className="leading-relaxed">
      Ruby does not support multiple inheritance directly. Modules provide a mixin facility to add functionality to classes:
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`module A
  def a1; end
  def a2; end
end

module B
  def b1; end
  def b2; end
end

class Sample
  include A
  include B
  def s1; end
end

samp = Sample.new
samp.a1
samp.a2
samp.b1
samp.b2
samp.s1`}</pre>

    <p className="leading-relaxed">
      By including modules A and B, class <code>Sample</code> can access all methods from both modules. This is Ruby's way of achieving multiple inheritance.
    </p>
  </div>
);

export default RubyModules;
