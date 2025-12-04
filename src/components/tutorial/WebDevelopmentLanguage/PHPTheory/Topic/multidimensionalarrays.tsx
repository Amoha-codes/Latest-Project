import React from "react";

const PhpMultidimensionalArrays: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP Multidimensional Arrays
      </h1>

      <p className="leading-relaxed">
        A multidimensional array is an array that contains one or more arrays.  
        These arrays can be two, three, or more levels deep, although more than 
        three levels are usually hard to manage.
      </p>

      <h2 className="text-2xl font-bold">What is a Multidimensional Array?</h2>
      <p className="leading-relaxed">
        The dimension of an array refers to how many indices are needed to 
        access an element:
      </p>

      <ul className="list-disc ml-6 space-y-1">
        <li>Two-dimensional array → needs 2 indices</li>
        <li>Three-dimensional array → needs 3 indices</li>
      </ul>

      {/* 2D Arrays */}
      <h2 className="text-2xl font-bold">PHP - Two-dimensional Arrays</h2>

      <p className="leading-relaxed">
        A two-dimensional array is basically an array of arrays.  
        Example dataset:
      </p>

      {/* Table Example */}
      <div className="border p-4 rounded-md bg-gray-50">
        <table className="table-auto w-full text-left">
          <thead>
            <tr>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Stock</th>
              <th className="p-2 border">Sold</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-2 border">Volvo</td><td className="p-2 border">22</td><td className="p-2 border">18</td></tr>
            <tr><td className="p-2 border">BMW</td><td className="p-2 border">15</td><td className="p-2 border">13</td></tr>
            <tr><td className="p-2 border">Saab</td><td className="p-2 border">5</td><td className="p-2 border">2</td></tr>
            <tr><td className="p-2 border">Land Rover</td><td className="p-2 border">17</td><td className="p-2 border">15</td></tr>
          </tbody>
        </table>
      </div>

      <p className="leading-relaxed">
        This data can be represented as a multidimensional array:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md text-black font-mono whitespace-pre-wrap">
{`$cars = array(
  array("Volvo", 22, 18),
  array("BMW", 15, 13),
  array("Saab", 5, 2),
  array("Land Rover", 17, 15)
);`}
      </pre>

      {/* Access values */}
      <h2 className="text-2xl font-bold">Accessing 2D Array Elements</h2>

      <p className="leading-relaxed">
        To access elements, use both row and column indices:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md text-black font-mono whitespace-pre-wrap">
{`echo $cars[0][0].": In stock: ".$cars[0][1].", sold: ".$cars[0][2]."<br>";
echo $cars[1][0].": In stock: ".$cars[1][1].", sold: ".$cars[1][2]."<br>";
echo $cars[2][0].": In stock: ".$cars[2][1].", sold: ".$cars[2][2]."<br>";
echo $cars[3][0].": In stock: ".$cars[3][1].", sold: ".$cars[3][2]."<br>";`}
      </pre>

      {/* Nested Loops */}
      <h2 className="text-2xl font-bold">Looping Through a Two-dimensional Array</h2>

      <p className="leading-relaxed">
        You can use a loop inside another loop to access all values:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md text-black font-mono whitespace-pre-wrap">
{`for ($row = 0; $row < 4; $row++) {
  echo "<p><b>Row number $row</b></p>";
  echo "<ul>";
    for ($col = 0; $col < 3; $col++) {
      echo "<li>".$cars[$row][$col]."</li>";
    }
  echo "</ul>";
}`}
      </pre>
    </div>
  );
};

export default PhpMultidimensionalArrays;
