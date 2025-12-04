import React from "react";

const CConstants: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">

      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        C - Constants
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        In C, sometimes you need variables whose values should <strong>never change</strong>.
        This can be done using the <span className="font-semibold">const</span> keyword, which makes a variable
        <strong>read-only</strong>.
      </p>

      <h2 className="text-2xl font-semibold">Example</h2>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`const int myNum = 15;  // myNum will always be 15
myNum = 10;  // error: assignment of read-only variable 'myNum'`}
      </pre>

      <p className="leading-relaxed">
        You should use <strong>const</strong> when defining values that will not or should not change:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`const int minutesPerHour = 60;
const int monthsInYear = 12;`}
      </pre>

      {/* Notes on Constants */}
      <h2 className="text-2xl font-semibold">Notes on Constants</h2>

      <p className="leading-relaxed">
        When declaring a constant variable, it <strong>must be assigned a value immediately</strong>:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`// This works
const int minutesPerHour = 60;`}
      </pre>

      <p className="leading-relaxed">But this will cause an error:</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`const int minutesPerHour;
minutesPerHour = 60; // error`}
      </pre>

      {/* Good Practice */}
      <h2 className="text-2xl font-semibold">Good Practice</h2>

      <p className="leading-relaxed">
        It is considered good practice to write constant names in
        <strong> UPPERCASE letters</strong>. This improves readability and makes it
        clear that the value is fixed:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`const int BIRTHYEAR = 1980;`}
      </pre>

    </div>
  );
};

export default CConstants;
