import React from "react";

const CBooleans: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        C - Booleans
      </h1>

      <p className="leading-relaxed">
        Booleans are a data type that can only have one of two values, such as
        YES / NO, ON / OFF, or TRUE / FALSE. In C, booleans are represented
        using the <code>bool</code> type.
      </p>

      <p className="leading-relaxed">
        To use <code>bool</code>, include the header file <code>stdbool.h</code>.
      </p>

      {/* Boolean Variables Example */}
      <h2 className="text-2xl font-bold">Boolean Variables</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`#include <stdbool.h>

// Declare boolean variables
bool isProgrammingFun = true;
bool isFishTasty = false;

// Print boolean values as integers
printf("%d", isProgrammingFun); // 1 (true)
printf("%d", isFishTasty);      // 0 (false)`}</pre>
      </div>

      <p className="leading-relaxed">
        Boolean values are returned as integers: <code>1</code> for true and
        <code>0</code> for false. It's common to get boolean values by comparing
        variables or values.
      </p>

      {/* Comparing Values */}
      <h2 className="text-2xl font-bold">Comparing Values</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`// Compare values
printf("%d", 10 > 9); // 1 (true)

int x = 10;
int y = 9;
printf("%d", x > y); // 1 (true)

// Using equal to operator
printf("%d", 10 == 10); // 1 (true)
printf("%d", 10 == 15); // 0 (false)
printf("%d", 5 == 55);  // 0 (false)`}</pre>
      </div>

      {/* Comparing Boolean Variables */}
      <h2 className="text-2xl font-bold">Comparing Boolean Variables</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`bool isHamburgerTasty = true;
bool isPizzaTasty = true;

// Check if both are equally tasty
printf("%d", isHamburgerTasty == isPizzaTasty); // 1 (true)`}</pre>
      </div>
    </div>
  );
};

export default CBooleans;
