import React from "react";

const PhpMagicConstants: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP Magic Constants
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        PHP provides nine predefined constants that change depending on where 
        they are used. These are known as <strong>magic constants</strong>.
      </p>

      <p className="leading-relaxed">
        Most magic constants begin and end with double underscores 
        (e.g., <code>__FILE__</code>), except for <code>ClassName::class</code>.
      </p>

      {/* Table Title */}
      <h2 className="text-2xl font-bold">Magic Constants Overview</h2>

      <p className="leading-relaxed mb-4">
        Below is the list of magic constants along with their descriptions:
      </p>

      {/* Table */}
      <table className="w-full border border-gray-300 text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Constant</th>
            <th className="p-2 border">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border"><code>__CLASS__</code></td>
            <td className="p-2 border">Returns the class name (when used inside a class).</td>
          </tr>
          <tr>
            <td className="p-2 border"><code>__DIR__</code></td>
            <td className="p-2 border">Returns the directory of the file.</td>
          </tr>
          <tr>
            <td className="p-2 border"><code>__FILE__</code></td>
            <td className="p-2 border">Returns the file name with full path.</td>
          </tr>
          <tr>
            <td className="p-2 border"><code>__FUNCTION__</code></td>
            <td className="p-2 border">Returns the function name (inside a function).</td>
          </tr>
          <tr>
            <td className="p-2 border"><code>__LINE__</code></td>
            <td className="p-2 border">Returns the current line number.</td>
          </tr>
          <tr>
            <td className="p-2 border"><code>__METHOD__</code></td>
            <td className="p-2 border">Returns the class and method name.</td>
          </tr>
          <tr>
            <td className="p-2 border"><code>__NAMESPACE__</code></td>
            <td className="p-2 border">Returns the namespace name.</td>
          </tr>
          <tr>
            <td className="p-2 border"><code>__TRAIT__</code></td>
            <td className="p-2 border">Returns the trait name.</td>
          </tr>
          <tr>
            <td className="p-2 border"><code>ClassName::class</code></td>
            <td className="p-2 border">
              Returns the fully qualified class name including namespace.
            </td>
          </tr>
        </tbody>
      </table>

      {/* Usage Examples */}
      <h2 className="text-2xl font-bold mt-10">Examples</h2>

      {/* __FILE__ Example */}
      <h3 className="text-xl font-semibold">__FILE__ Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`echo __FILE__;  
// Outputs: full path and filename`}
      </pre>

      {/* __DIR__ Example */}
      <h3 className="text-xl font-semibold">__DIR__ Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`echo __DIR__;  
// Outputs: directory of the file`}
      </pre>

      {/* __FUNCTION__ Example */}
      <h3 className="text-xl font-semibold">__FUNCTION__ Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`function testFunction() {
  echo __FUNCTION__;
}

testFunction();
// Outputs: testFunction`}
      </pre>

      {/* __CLASS__ Example */}
      <h3 className="text-xl font-semibold">__CLASS__ Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`class MyClass {
  function showClass() {
    echo __CLASS__;
  }
}

$obj = new MyClass();
$obj->showClass();
// Outputs: MyClass`}
      </pre>

      {/* __METHOD__ Example */}
      <h3 className="text-xl font-semibold">__METHOD__ Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`class Car {
  function drive() {
    echo __METHOD__;
  }
}

$car = new Car();
$car->drive();
// Outputs: Car::drive`}
      </pre>

      {/* ClassName::class Example */}
      <h3 className="text-xl font-semibold">ClassName::class Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`class Fruit {}

echo Fruit::class;
// Outputs: Fruit`}
      </pre>

    </div>
  );
};

export default PhpMagicConstants;
