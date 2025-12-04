import React from "react";

const RubyExceptions: React.FC = () => (
  <div className="mt-20 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-3">
      Ruby – Exceptions
    </h1>

    <p className="leading-relaxed">
      Exceptions in Ruby allow you to handle runtime errors gracefully without halting the program. Code that might raise an exception is enclosed in <code>begin</code>...<code>end</code> blocks, and errors are handled with <code>rescue</code> clauses.
    </p>

    <h2 className="text-2xl font-bold mt-6">Basic Exception Handling</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`begin
  file = open("/nonexistent_file")
  puts "File opened successfully" if file
rescue
  file = STDIN
end
print file, " == ", STDIN`}</pre>
    <p>STDIN is used as a fallback if opening the file fails.</p>

    <h2 className="text-2xl font-bold mt-6">Using <code>retry</code></h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`begin
  file = open("/nonexistent_file")
rescue
  fname = "existent_file"
  retry
end`}</pre>
    <p>The <code>retry</code> statement restarts the <code>begin</code> block. Be careful, as it may cause infinite loops.</p>

    <h2 className="text-2xl font-bold mt-6">Using <code>raise</code></h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`begin
  puts 'Before raise'
  raise 'An error has occurred.'
  puts 'After raise'
rescue
  puts 'Rescued'
end
puts 'After begin block'`}</pre>

    <h2 className="text-2xl font-bold mt-6">Using <code>ensure</code></h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`begin
  raise 'Test exception'
rescue Exception => e
  puts e.message
ensure
  puts 'Ensuring execution'
end`}</pre>
    <p><code>ensure</code> always executes, even if an exception occurs.</p>

    <h2 className="text-2xl font-bold mt-6">Using <code>else</code></h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`begin
  puts "No exception here"
rescue Exception => e
  puts e.message
else
  puts "No errors!"
ensure
  puts "Always executed"
end`}</pre>

    <h2 className="text-2xl font-bold mt-6">Catch and Throw</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`def promptAndGet(prompt)
  print prompt
  res = readline.chomp
  throw :quitRequested if res == "!"
  res
end

catch :quitRequested do
  name = promptAndGet("Name: ")
  age = promptAndGet("Age: ")
end`}</pre>

    <h2 className="text-2xl font-bold mt-6">Custom Exceptions</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`class FileSaveError < StandardError
  attr_reader :reason
  def initialize(reason)
    @reason = reason
  end
end

File.open(path, "w") do |file|
  begin
    # Write data...
  rescue
    raise FileSaveError.new($!)
  end
end`}</pre>
    <p>You can create your own exception classes by subclassing <code>StandardError</code> or <code>Exception</code>.</p>
  </div>
);

export default RubyExceptions;
