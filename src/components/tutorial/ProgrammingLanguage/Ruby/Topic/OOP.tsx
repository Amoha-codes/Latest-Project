import React from "react";

const RubyOOP: React.FC = () => (
  <div className="mt-20 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-3">
      Ruby – Object Oriented
    </h1>

    <p>
      Ruby is a pure object-oriented language. Everything in Ruby is an object,
      including numbers, strings, true/false, and even classes themselves.
    </p>

    <h2 className="text-2xl font-bold mt-6">Class Definition</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`class Box
  # code
end`}</pre>
    <p>Class names start with a capital letter (CamelCase convention).</p>

    <h2 className="text-2xl font-bold mt-6">Creating Objects</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`box1 = Box.new
box2 = Box.new`}</pre>

    <h2 className="text-2xl font-bold mt-6">The initialize Method (Constructor)</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`class Box
  def initialize(w,h)
    @width, @height = w, h
  end
end`}</pre>

    <h2 className="text-2xl font-bold mt-6">Accessor & Setter Methods</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`class Box
  def initialize(w,h)
    @width, @height = w, h
  end

  # Accessor methods
  def getWidth; @width; end
  def getHeight; @height; end

  # Setter methods
  def setWidth=(value); @width = value; end
  def setHeight=(value); @height = value; end
end`}</pre>

    <h2 className="text-2xl font-bold mt-6">Instance Methods</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`class Box
  def initialize(w,h)
    @width, @height = w, h
  end

  def getArea
    @width * @height
  end
end`}</pre>

    <h2 className="text-2xl font-bold mt-6">Class Variables & Methods</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`class Box
  @@count = 0

  def initialize(w,h)
    @width, @height = w, h
    @@count += 1
  end

  def self.printCount
    puts "Box count is: #{@@count}"
  end
end`}</pre>

    <h2 className="text-2xl font-bold mt-6">to_s Method</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`class Box
  def initialize(w,h)
    @width, @height = w, h
  end

  def to_s
    "(w:#{@width}, h:#{@height})"
  end
end

box = Box.new(10, 20)
puts "Box: #{box}"`}</pre>

    <h2 className="text-2xl font-bold mt-6">Access Control</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`class Box
  def initialize(w,h)
    @width, @height = w, h
  end

  def getArea
    getWidth() * getHeight
  end

  private
  def getWidth; @width; end
  def getHeight; @height; end

  protected
  def printArea
    area = getWidth() * getHeight
    puts "Area: #{area}"
  end
end`}</pre>

    <h2 className="text-2xl font-bold mt-6">Inheritance</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`class BigBox < Box
  def printArea
    area = @width * @height
    puts "Big box area: #{area}"
  end
end`}</pre>

    <h2 className="text-2xl font-bold mt-6">Method Overriding</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`class BigBox < Box
  def getArea
    area = @width * @height
    puts "Big box area: #{area}"
  end
end`}</pre>

    <h2 className="text-2xl font-bold mt-6">Operator Overloading</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`class Box
  def initialize(w,h)
    @width, @height = w, h
  end

  def +(other)
    Box.new(@width + other.width, @height + other.height)
  end

  def -@
    Box.new(-@width, -@height)
  end

  def *(scalar)
    Box.new(@width * scalar, @height * scalar)
  end
end`}</pre>

    <h2 className="text-2xl font-bold mt-6">Freezing Objects</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`box = Box.new(10, 20)
box.freeze
puts box.frozen? # true`}</pre>

    <h2 className="text-2xl font-bold mt-6">Class Constants</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`class Box
  BOX_COMPANY = "TATA Inc"
  BOX_WEIGHT = 10
end

puts Box::BOX_COMPANY
puts Box::BOX_WEIGHT`}</pre>

    <h2 className="text-2xl font-bold mt-6">Allocate Without initialize</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`box1 = Box.new(10, 20)
box2 = Box.allocate
box2.getArea # warning: instance vars not initialized`}</pre>
  </div>
);

export default RubyOOP;
