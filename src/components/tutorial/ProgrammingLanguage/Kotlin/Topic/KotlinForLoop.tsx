import React from "react";

const KotlinForLoop: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Kotlin For Loop
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      Often when you work with arrays, you need to loop through all the elements. 
      In Kotlin, use the <code>for</code> loop together with the <code>in</code> operator to iterate through array elements.
    </p>

    <h2 className="text-2xl font-bold mt-6">Loop Through Array of Strings</h2>
    <p className="text-lg  mt-2">
      Example: Output all elements in the <code>cars</code> array:
    </p>
    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`val cars = arrayOf("Volvo", "BMW", "Ford", "Mazda")
for (x in cars) {
  println(x)
}`}</code>
    </pre>

    <h2 className="text-2xl font-bold mt-6">Loop Through Array of Integers</h2>
    <p className="text-lg  mt-2">
      Example: Loop through an array of integers:
    </p>
    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`val nums = arrayOf(1, 5, 10, 15, 20)
for (x in nums) {
  println(x)
}`}</code>
    </pre>

    <h2 className="text-2xl font-bold mt-6">Traditional For Loop</h2>
    <p className="text-lg  mt-2">
      Unlike Java and other programming languages, Kotlin does not have a traditional for loop. 
      In Kotlin, <code>for</code> loops are used to iterate through arrays, ranges, and other countable collections. 
      You will learn more about ranges in the next chapter, which allows you to create a range of values.
    </p>
  </div>
);

export default KotlinForLoop;
