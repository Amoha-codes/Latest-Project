import React from "react";

const RubyRanges: React.FC = () => (
  <div className="mt-20 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-3">
      Ruby – Ranges
    </h1>

    <p className="leading-relaxed">
      Ranges occur everywhere: 0..9, January..December, lines 50..67, and so on. Ruby supports ranges in a variety of ways:
    </p>

    <ul className="list-disc ml-6 space-y-1">
      <li>Ranges as Sequences</li>
      <li>Ranges as Conditions</li>
      <li>Ranges as Intervals</li>
    </ul>

    {/* Ranges as Sequences */}
    <h2 className="text-2xl font-bold mt-10">Ranges as Sequences</h2>
    <p className="leading-relaxed">
      Ranges can define a sequence of values using <code>..</code> (inclusive) or <code>...</code> (exclusive) operators.
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`(1..5)     # => 1, 2, 3, 4, 5
(1...5)    # => 1, 2, 3, 4
('a'..'d') # => 'a', 'b', 'c', 'd'

# Convert to array
range1 = (1..10).to_a
range2 = ('bar'..'bat').to_a
puts range1
puts range2`}</pre>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`digits = 0..9
puts digits.include?(5)       # true
puts "Min value is #{digits.min}" # 0
puts "Max value is #{digits.max}" # 9

ret = digits.reject { |i| i < 5 }
puts "Rejected values are #{ret}" # 5,6,7,8,9

digits.each do |digit|
  puts "In Loop #{digit}"
end`}</pre>

    {/* Ranges as Conditions */}
    <h2 className="text-2xl font-bold mt-10">Ranges as Conditions</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`# Example with case
score = 70
result = case score
  when 0..40 then "Fail"
  when 41..60 then "Pass"
  when 61..70 then "Pass with Merit"
  when 71..100 then "Pass with Distinction"
  else "Invalid Score"
end
puts result # => "Pass with Merit"

# Example with input lines
while gets
  print if /start/../end/
end`}</pre>

    {/* Ranges as Intervals */}
    <h2 className="text-2xl font-bold mt-10">Ranges as Intervals</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`if (1..10) === 5
  puts "5 lies in (1..10)"
end

if ('a'..'j') === 'c'
  puts "c lies in ('a'..'j')"
end

if ('a'..'j') === 'z'
  puts "z lies in ('a'..'j')"
end`}</pre>

    <p className="leading-relaxed">
      Output:
    </p>
    <ul className="list-disc ml-6 space-y-1">
      <li>5 lies in (1..10)</li>
      <li>c lies in ('a'..'j')</li>
    </ul>
  </div>
);

export default RubyRanges;
