import React from "react";

const PhpArrayFunctions: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP Array Functions
      </h1>

      <p className="leading-relaxed">
        PHP provides a large number of built-in array functions that allow 
        you to perform all kinds of operations such as sorting, merging, 
        filtering, searching, and transforming arrays.
      </p>

      {/* Table Title */}
      <h2 className="text-2xl font-bold">List of Common PHP Array Functions</h2>

      {/* Array Function Table */}
      <div className="overflow-x-auto border rounded-md">
        <table className="table-auto w-full text-left text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border font-semibold">Function</th>
              <th className="p-2 border font-semibold">Description</th>
            </tr>
          </thead>
          <tbody>

            {[
              ["array()", "Creates an array"],
              ["array_change_key_case()", "Changes all keys in an array to lowercase or uppercase"],
              ["array_chunk()", "Splits an array into chunks of arrays"],
              ["array_column()", "Returns the values from a single column in the input array"],
              ["array_combine()", "Creates an array using one array for keys and one for values"],
              ["array_count_values()", "Counts all the values of an array"],
              ["array_diff()", "Compares arrays, returns differences (values only)"],
              ["array_diff_assoc()", "Compares arrays by keys and values (differences)"],
              ["array_diff_key()", "Compares arrays by keys only (differences)"],
              ["array_fill()", "Fills an array with values"],
              ["array_filter()", "Filters values of an array using a callback"],
              ["array_flip()", "Exchanges keys with values"],
              ["array_intersect()", "Returns matches between arrays (values only)"],
              ["array_intersect_assoc()", "Returns matches (keys and values)"],
              ["array_key_exists()", "Checks if a key exists in an array"],
              ["array_keys()", "Returns all keys of an array"],
              ["array_map()", "Applies a user function to every array element"],
              ["array_merge()", "Merges one or more arrays"],
              ["array_pop()", "Removes the last element of an array"],
              ["array_push()", "Adds one or more items to the end of an array"],
              ["array_rand()", "Returns one or more random keys"],
              ["array_reduce()", "Reduces an array to a single value using a callback"],
              ["array_replace()", "Replaces values in the first array with following arrays"],
              ["array_reverse()", "Returns an array in reverse order"],
              ["array_search()", "Searches for a value and returns its key"],
              ["array_shift()", "Removes the first element"],
              ["array_slice()", "Returns selected parts of an array"],
              ["array_splice()", "Removes/replaces elements"],
              ["array_sum()", "Returns the sum of array values"],
              ["array_unique()", "Removes duplicate values"],
              ["array_unshift()", "Adds items to the beginning of an array"],
              ["array_values()", "Returns all values of an array"],
              ["count()", "Returns number of elements in an array"],
              ["in_array()", "Checks if a value exists in an array"],
              ["sort()", "Sorts indexed arrays in ascending order"],
              ["rsort()", "Sorts indexed arrays in descending order"],
              ["asort()", "Sorts associative arrays using values (ascending)"],
              ["arsort()", "Sorts associative arrays using values (descending)"],
              ["ksort()", "Sorts associative arrays by keys (ascending)"],
              ["krsort()", "Sorts associative arrays by keys (descending)"],
              ["shuffle()", "Randomly shuffles array"],
              ["range()", "Creates an array with a range of numbers"],
              ["extract()", "Imports variables from an array"],
              ["compact()", "Creates an array from variables and values"],
              ["list()", "Assigns list of variables from array"],
            ].map(([func, desc], index) => (
              <tr key={index}>
                <td className="p-2 border font-mono">{func}</td>
                <td className="p-2 border">{desc}</td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>

      <p className="leading-relaxed">
        These functions allow PHP arrays to be incredibly powerful and flexible.  
        You will use them frequently when working with real-world applications.
      </p>
    </div>
  );
};

export default PhpArrayFunctions;
