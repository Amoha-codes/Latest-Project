import React from "react";

const PhpSlicingStrings: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP - Slicing Strings
      </h1>

      <p className="leading-relaxed">
        PHP provides the <code>substr()</code> function to extract part of a string.  
        You can slice using start and length values, including negative indexes.
      </p>

      {/* Slice a String */}
      <h2 className="text-2xl font-bold">Slice a String</h2>

      <p className="leading-relaxed">
        Use <code>substr()</code> to extract part of a string by specifying the start index and length.
      </p>

      <h3 className="text-xl font-semibold">Example — Extract 5 characters starting at index 6</h3>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black whitespace-pre-wrap">
{`$x = "Hello World!";
echo substr($x, 6, 5);   // Outputs: World`}
      </pre>

      <p className="leading-relaxed">
        Note: The first character has index <strong>0</strong>.
      </p>

      {/* Slice to the end */}
      <h2 className="text-2xl font-bold">Slice String to the End</h2>

      <p className="leading-relaxed">
        If you omit the length parameter, the slice continues to the end of the string.
      </p>

      <h3 className="text-xl font-semibold">Example — Start at index 6 and go to the end</h3>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black whitespace-pre-wrap">
{`$x = "Hello World!";
echo substr($x, 6);    // Outputs: World!`}
      </pre>

      {/* Slice from the end */}
      <h2 className="text-2xl font-bold">Slice String from the End</h2>

      <p className="leading-relaxed">
        Negative indexes start counting from the end of the string.
      </p>

      <h3 className="text-xl font-semibold">Example — Extract 3 chars starting at index -5</h3>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black whitespace-pre-wrap">
{`$x = "Hello World!";
echo substr($x, -5, 3);   // Outputs: orl`}
      </pre>

      <p className="leading-relaxed">
        Note: The last character has index <strong>-1</strong>.
      </p>

      {/* Negative length */}
      <h2 className="text-2xl font-bold">Negative Length</h2>

      <p className="leading-relaxed">
        Use negative length to remove characters from the end of the slice.
      </p>

      <h3 className="text-xl font-semibold">
        Example — Start at index 5 and stop 3 characters before the end
      </h3>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black whitespace-pre-wrap">
{`$x = "Hi, how are you?";
echo substr($x, 5, -3);  
// Outputs: ow are y`}
      </pre>

    </div>
  );
};

export default PhpSlicingStrings;
