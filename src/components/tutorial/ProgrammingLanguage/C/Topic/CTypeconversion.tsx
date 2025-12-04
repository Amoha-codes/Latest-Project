import React from "react";

const CTypeConversion: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        C - Type Conversion
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        Sometimes you need to convert a value from one data type to another.
        This is known as <strong>type conversion</strong>.
      </p>

      <p className="leading-relaxed">
        For example, dividing two integers may not give the expected floating-
        point result:
      </p>

      {/* Example 1 */}
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`int x = 5;
int y = 2;
int sum = x / y;

printf("%d", sum); // Outputs 2`}
      </pre>

      <p className="leading-relaxed">
        C supports two types of conversions:
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Implicit Conversion</strong> (automatic)</li>
        <li><strong>Explicit Conversion</strong> (manual)</li>
      </ul>

      {/* Implicit Conversion */}
      <h2 className="text-2xl font-semibold">Implicit Conversion</h2>

      <p className="leading-relaxed">
        Implicit conversion happens automatically when assigning one type to
        another:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`// Automatic conversion: int → float
float myFloat = 9;

printf("%f", myFloat); // 9.000000`}
      </pre>

      <p className="leading-relaxed">
        But sometimes implicit conversion may cause data loss:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`// Automatic conversion: float → int
int myInt = 9.99;

printf("%d", myInt); // 9`}
      </pre>

      <p className="leading-relaxed">
        Dividing two integers still results in an integer, even if stored in a
        float:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`float sum = 5 / 2;

printf("%f", sum); // 2.000000`}
      </pre>

      {/* Explicit Conversion */}
      <h2 className="text-2xl font-semibold">Explicit Conversion</h2>

      <p className="leading-relaxed">
        Explicit conversion is done manually by placing the type in parentheses:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`// Manual conversion: int → float
float sum = (float) 5 / 2;

printf("%f", sum); // 2.500000`}
      </pre>

      <p className="leading-relaxed">
        You can also convert variables:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`int num1 = 5;
int num2 = 2;
float sum = (float) num1 / num2;

printf("%f", sum); // 2.500000`}
      </pre>

      <p className="leading-relaxed">
        You may also format the output to remove extra zeros:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`printf("%.1f", sum); // 2.5`}
      </pre>

      {/* Real Life Example */}
      <h2 className="text-2xl font-semibold">Real-Life Example</h2>

      <p className="leading-relaxed">
        Calculate the percentage of a user's score in a game:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`// Maximum score in the game
int maxScore = 500;

// User's actual score
int userScore = 423;

// Calculate the percentage
float percentage = (float) userScore / maxScore * 100.0;

// Print percentage
printf("User's percentage is %.2f", percentage);`}
      </pre>
    </div>
  );
};

export default CTypeConversion;
