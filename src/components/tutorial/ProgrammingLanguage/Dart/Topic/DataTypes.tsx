import React from "react";

const DartDataTypes: React.FC = () => (
  <div className="mt-20 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-3">Dart - Data Types</h1>

    <p className="leading-relaxed">
      One of the most fundamental characteristics of a programming language is the set of
      data types it supports. Dart provides a rich set of data types that allow developers to
      represent and manipulate different kinds of values.
    </p>

    <h2 className="text-2xl font-bold mt-6">Numbers</h2>
    <p className="leading-relaxed">
      Numbers in Dart are used to represent numeric literals and come in two forms:
    </p>
    <ul className="list-disc pl-6 space-y-1">
      <li>
        <strong>Integer (int)</strong> − Represents non-fractional numeric values without a
        decimal point. Example: <code>10</code>.
      </li>
      <li>
        <strong>Double (double)</strong> − Represents 64-bit floating-point numbers with
        decimal values. Example: <code>10.10</code>.
      </li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Strings</h2>
    <p className="leading-relaxed">
      Strings represent a sequence of characters and are used to store text-based data like
      name, address, etc. Dart strings are sequences of UTF-16 code units. The <code>String</code>
      keyword is used, and values can be written using single or double quotes.
    </p>

    <h2 className="text-2xl font-bold mt-6">Booleans</h2>
    <p className="leading-relaxed">
      The Boolean type represents truth values: <code>true</code> and <code>false</code>. Dart
      uses the <code>bool</code> keyword for Boolean values.
    </p>

    <h2 className="text-2xl font-bold mt-6">List and Map</h2>
    <p className="leading-relaxed">
      Dart provides powerful collection types:
    </p>
    <ul className="list-disc pl-6 space-y-1">
      <li>
        <strong>List</strong> − An ordered group of objects, similar to arrays in other
        programming languages.
      </li>
      <li>
        <strong>Map</strong> − Represents values as key-value pairs. Dart's core library
        provides built-in <code>List</code> and <code>Map</code> classes.
      </li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Dynamic Type</h2>
    <p className="leading-relaxed">
      Dart is optionally typed. If a variable's type is not specified, it becomes
      <code>dynamic</code>. You can also explicitly use the <code>dynamic</code> keyword to
      declare such variables.
    </p>
  </div>
);

export default DartDataTypes;
