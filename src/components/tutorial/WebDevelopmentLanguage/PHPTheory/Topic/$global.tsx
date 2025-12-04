import React from "react";

const PhpGlobals: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP $GLOBALS
      </h1>

      <p className="leading-relaxed">
        <code>$GLOBALS</code> is a superglobal array in PHP that stores all global variables.  
        It can be used to access global variables from any scope, including inside functions.
      </p>

      {/* Section */}
      <h2 className="text-2xl font-bold">Global Variables</h2>

      <p>
        Global variables are accessible from anywhere in the script. Variables created in the outermost 
        scope are automatically global.  
        To use them inside a function, you must either:
      </p>

      <ul className="list-disc ml-8 space-y-2">
        <li>Use the <code>$GLOBALS</code> array</li>
        <li>Or declare the variable as <code>global</code> inside the function</li>
      </ul>

      {/* Example 1 */}
      <h3 className="text-xl font-semibold mt-6">Access Global Variable Using $GLOBALS</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`$x = 75;

function myfunction() {
  echo $GLOBALS['x'];
}

myfunction();`}
      </pre>

      <p>
        This correctly prints the global variable by using the <code>$GLOBALS</code> array.
      </p>

      {/* Example 2 */}
      <h3 className="text-xl font-semibold mt-6">Accessing Global Variable Without $GLOBALS</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`$x = 75;

function myfunction() {
  echo $x; // does NOT work
}

myfunction();`}
      </pre>

      <p>
        In PHP, global variables are <strong>not</strong> automatically accessible inside functions.
        You must explicitly declare or refer to them.
      </p>

      {/* Example 3 */}
      <h3 className="text-xl font-semibold mt-6">Using the global Keyword</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`$x = 75;

function myfunction() {
  global $x;
  echo $x;
}

myfunction();`}
      </pre>

      <p>
        The <code>global</code> keyword imports the global variable into the function scope.
      </p>

      {/* Example 4 */}
      <h2 className="text-2xl font-bold mt-10">Create Global Variables</h2>

      <p>
        Variables created in the outermost scope are always global, even without using the 
        <code>$GLOBALS</code> array:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`$x = 100;

echo $GLOBALS["x"];
echo $x;`}
      </pre>

      <p>
        Both outputs are valid since <code>$x</code> is global.
      </p>

      {/* Example 5 */}
      <h3 className="text-xl font-semibold mt-6">Create a Global Variable Inside a Function</h3>

      <p>
        A function normally has local scope, but you can create a global variable using 
        <code>$GLOBALS</code> inside it:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`function myfunction() {
  $GLOBALS["x"] = 100;
}

myfunction();

echo $GLOBALS["x"];
echo $x;`}
      </pre>

      <p>
        Since <code>$GLOBALS["x"]</code> was assigned inside the function, the variable becomes globally available.
      </p>

    </div>
  );
};

export default PhpGlobals;
