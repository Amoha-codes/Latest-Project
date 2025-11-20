import React from "react";

const PhpLoops: React.FC = () => {
  return (
    <div style={{ padding: "20px", lineHeight: "1.7" }}>
      <h1>PHP Loops</h1>

      <p>
        In the following chapters you will learn how to repeat code by using
        loops in PHP.
      </p>

      <h2>PHP Loops Overview</h2>
      <p>
        PHP loops are used to execute the same block of code again and again, as
        long as a certain condition is true.
      </p>

      <p>In PHP, we have the following loop types:</p>

      <ul>
        <li>
          <b>while</b> – loops through a block of code as long as the specified
          condition is true
        </li>
        <li>
          <b>do...while</b> – loops through a block of code once, and then
          repeats as long as the condition is true
        </li>
        <li>
          <b>for</b> – loops through a block of code a specified number of times
        </li>
        <li>
          <b>foreach</b> – loops through a block of code for each element in an
          array
        </li>
      </ul>

      <p>
        The following chapters will explain and give examples of each loop type.
      </p>
    </div>
  );
};

export default PhpLoops;
