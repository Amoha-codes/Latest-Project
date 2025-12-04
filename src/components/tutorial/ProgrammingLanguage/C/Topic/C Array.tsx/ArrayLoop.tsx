import React from "react";

const CArrayLoop: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        C - Array Loop
      </h1>

      <p className="leading-relaxed">
        You can use a <code>for</code> loop to go through the elements of an array. 
        In the first example, we loop through a fixed-size array:
      </p>

      {/* Example 1 */}
      <h2 className="text-2xl font-bold">Example: Fixed-size Array Loop</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`int myNumbers[] = {25, 50, 75, 100};
int i;

for (i = 0; i < 4; i++) {
  printf("%d\\n", myNumbers[i]);
}`}</pre>
      </div>

      <p className="leading-relaxed">
        Note: Using a fixed size like <code>i &lt; 4</code> only works for arrays of that size. 
        If the array changes size, the loop must be updated manually.
      </p>

      {/* Example 2 */}
      <h2 className="text-2xl font-bold">Example: Flexible Loop Using Array Length</h2>
      <p className="leading-relaxed">
        By using the <code>sizeof</code> formula to calculate the number of elements, 
        we can loop through arrays of any size:
      </p>

      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`int myNumbers[] = {25, 50, 75, 100};

int length = sizeof(myNumbers) / sizeof(myNumbers[0]);
int i;

for (i = 0; i < length; i++) {
  printf("%d\\n", myNumbers[i]);
}`}</pre>
      </div>

      <p className="leading-relaxed">
        This approach is more flexible and maintainable, as the loop automatically adapts 
        to the size of the array.
      </p>
    </div>
  );
};

export default CArrayLoop;
