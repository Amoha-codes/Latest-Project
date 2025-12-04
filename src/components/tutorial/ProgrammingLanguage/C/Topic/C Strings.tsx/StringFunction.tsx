import React from "react";

const CStringFunctions: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        C - String Functions
      </h1>

      <p className="leading-relaxed">
        C provides many useful string functions in the <code>string.h</code> header file. These functions allow you to perform operations such as getting string length, concatenation, copying, and comparison.
      </p>

      <h2 className="text-2xl font-bold">Include Header File</h2>
      <p className="leading-relaxed">
        To use string functions, include <code>string.h</code>:
      </p>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`#include <string.h>`}</pre>
      </div>

      {/* String Length */}
      <h2 className="text-2xl font-bold">String Length</h2>
      <p className="leading-relaxed">
        Use <code>strlen()</code> to get the length of a string:
      </p>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`char alphabet[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
printf("%zu", strlen(alphabet));`}</pre>
      </div>

      <p className="leading-relaxed">
        Note the difference between <code>strlen()</code> and <code>sizeof()</code>:
      </p>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`char alphabet[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
printf("%zu\\n", strlen(alphabet));   // 26
printf("%zu\\n", sizeof(alphabet));   // 27`}</pre>
      </div>

      {/* Concatenate Strings */}
      <h2 className="text-2xl font-bold">Concatenate Strings</h2>
      <p className="leading-relaxed">
        Use <code>strcat()</code> to join two strings. Ensure the destination has enough space:
      </p>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`char str1[20] = "Hello ";
char str2[] = "World!";

// Concatenate str2 to str1
strcat(str1, str2);

printf("%s", str1);`}</pre>
      </div>

      {/* Copy Strings */}
      <h2 className="text-2xl font-bold">Copy Strings</h2>
      <p className="leading-relaxed">
        Use <code>strcpy()</code> to copy one string to another:
      </p>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`char str1[20] = "Hello World!";
char str2[20];

// Copy str1 to str2
strcpy(str2, str1);

printf("%s", str2);`}</pre>
      </div>

      {/* Compare Strings */}
      <h2 className="text-2xl font-bold">Compare Strings</h2>
      <p className="leading-relaxed">
        Use <code>strcmp()</code> to compare two strings. Returns 0 if equal:
      </p>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`char str1[] = "Hello";
char str2[] = "Hello";
char str3[] = "Hi";

// Compare str1 and str2
printf("%d\\n", strcmp(str1, str2));  // 0 (equal)

// Compare str1 and str3
printf("%d\\n", strcmp(str1, str3));  // Non-zero (not equal)`}</pre>
      </div>
    </div>
  );
};

export default CStringFunctions;
