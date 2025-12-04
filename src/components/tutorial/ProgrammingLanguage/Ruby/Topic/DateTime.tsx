import React from "react";

const RubyDateTime: React.FC = () => (
  <div className="mt-20 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-3">
      Ruby – Date & Time
    </h1>

    <p className="leading-relaxed">
      The <code>Time</code> class represents dates and times in Ruby. It is a thin wrapper over system date and time functionality. Some systems may not support dates before 1970 or after 2038.
    </p>

    {/* Getting Current Date and Time */}
    <h2 className="text-2xl font-bold mt-10">Getting Current Date and Time</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`time1 = Time.new
puts "Current Time: " + time1.inspect

# synonym
time2 = Time.now
puts "Current Time: " + time2.inspect`}</pre>

    {/* Getting Components */}
    <h2 className="text-2xl font-bold mt-10">Getting Components of a Date & Time</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`time = Time.new
puts time.year    # Year
puts time.month   # Month (1..12)
puts time.day     # Day of month
puts time.wday    # Day of week (0=Sunday)
puts time.yday    # Day of year
puts time.hour    # Hour (0..23)
puts time.min     # Minute
puts time.sec     # Second
puts time.usec    # Microseconds
puts time.zone    # Timezone name`}</pre>

    {/* Time Functions */}
    <h2 className="text-2xl font-bold mt-10">Time.utc, Time.gm, and Time.local</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`Time.local(2008, 7, 8)           # July 8, 2008
Time.local(2008, 7, 8, 9, 10)    # July 8, 2008, 09:10 local
Time.utc(2008, 7, 8, 9, 10)      # July 8, 2008, 09:10 UTC
Time.gm(2008, 7, 8, 9, 10, 11)   # July 8, 2008, 09:10:11 GMT`}</pre>

    {/* Time as Array */}
    <h2 className="text-2xl font-bold mt-10">Time as Array</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`time = Time.new
values = time.to_a
p values
# => [sec, min, hour, day, month, year, wday, yday, isdst, zone]

# Convert array back to Time
puts Time.utc(*values)`}</pre>

    {/* Time Arithmetic */}
    <h2 className="text-2xl font-bold mt-10">Time Arithmetic</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`now = Time.now
past = now - 10        # 10 seconds ago
future = now + 10      # 10 seconds later
diff = future - past   # => 20 seconds
puts now
puts past
puts future
puts diff`}</pre>

    {/* Formatting Time */}
    <h2 className="text-2xl font-bold mt-10">Formatting Time</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`time = Time.new
puts time.to_s
puts time.ctime
puts time.localtime
puts time.strftime("%Y-%m-%d %H:%M:%S")`}</pre>

    {/* Time Directives */}
    <h2 className="text-2xl font-bold mt-10">Time Formatting Directives</h2>
    <p className="leading-relaxed">
      Common directives for <code>strftime</code>:
    </p>
    <ul className="list-disc ml-6 space-y-1">
      <li><code>%a</code> - Abbreviated weekday name (Sun)</li>
      <li><code>%A</code> - Full weekday name (Sunday)</li>
      <li><code>%b</code> - Abbreviated month name (Jan)</li>
      <li><code>%B</code> - Full month name (January)</li>
      <li><code>%d</code> - Day of month (01..31)</li>
      <li><code>%m</code> - Month of year (01..12)</li>
      <li><code>%y</code> - Year without century (00..99)</li>
      <li><code>%Y</code> - Year with century</li>
      <li><code>%H</code> - Hour, 24-hour clock (00..23)</li>
      <li><code>%I</code> - Hour, 12-hour clock (01..12)</li>
      <li><code>%M</code> - Minute (00..59)</li>
      <li><code>%S</code> - Second (00..60)</li>
      <li><code>%p</code> - AM/PM</li>
      <li><code>%Z</code> - Time zone name</li>
      <li><code>%%</code> - Literal %</li>
    </ul>
  </div>
);

export default RubyDateTime;
