import React from "react";

const CssForms: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Forms
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        CSS is used to style HTML forms and improve their visual appearance.
        With CSS, you can style input fields, labels, dropdowns, buttons, and
        create fully responsive form layouts.
      </p>

      {/* Input Styling */}
      <h2 className="text-2xl font-bold">Styling Form Input Fields</h2>
      <p className="leading-relaxed">
        Common CSS properties used for styling forms include:
      </p>

      <ul className="list-disc ml-6 leading-relaxed space-y-1">
        <li>width</li>
        <li>padding</li>
        <li>margin</li>
        <li>border</li>
        <li>border-radius</li>
        <li>background-color</li>
        <li>color</li>
        <li>font-size</li>
      </ul>

      {/* Width Example */}
      <h3 className="text-xl font-semibold">Set Input Width</h3>
      <p className="leading-relaxed">
        Set an input field to 100% width:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`input {
  width: 100%;
}`}
      </pre>

      {/* Padding Example */}
      <h3 className="text-xl font-semibold">Add Padding and Margin</h3>
      <p className="leading-relaxed">
        Padding creates space inside the input, and margin adds space outside it:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`input[type=text] {
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  box-sizing: border-box;
}`}
      </pre>

      {/* Border */}
      <h3 className="text-xl font-semibold">Styling Input Borders</h3>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`input[type=text] {
  border: 2px solid red;
  border-radius: 8px;
}`}
      </pre>

      <p className="leading-relaxed">Bottom-only border:</p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`input[type=text] {
  border: none;
  border-bottom: 1px solid red;
}`}
      </pre>

      {/* Background & Color */}
      <h3 className="text-xl font-semibold">Input Background and Text Color</h3>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`input[type=text] {
  background-color: #3CBC8D;
  color: white;
}`}
      </pre>

      {/* Focus */}
      <h3 className="text-xl font-semibold">Style Input on Focus</h3>
      <p className="leading-relaxed">
        Use <code>:focus</code> to style an input when selected:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`input[type=text]:focus {
  background-color: lightblue;
}`}
      </pre>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`input[type=text]:focus {
  border: 3px solid #555;
}`}
      </pre>

      {/* Icon Input */}
      <h3 className="text-xl font-semibold">Input with Icon</h3>
      <p className="leading-relaxed">
        Use <code>background-image</code> to place an icon inside an input:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`input[type=text] {
  background-color: white;
  background-image: url('searchicon.png');
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding-left: 40px;
}`}
      </pre>

      {/* Animated Input */}
      <h3 className="text-xl font-semibold">Animated Search Input</h3>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`input[type=text] {
  transition: width 0.4s ease-in-out;
}

input[type=text]:focus {
  width: 100%;
}`}
      </pre>

      {/* Textarea */}
      <h3 className="text-xl font-semibold">Style Textarea</h3>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`textarea {
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  resize: none;
}`}
      </pre>

      {/* Dropdown */}
      <h3 className="text-xl font-semibold">Style Dropdown Menu</h3>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`select {
  width: 100%;
  padding: 16px 20px;
  border: none;
  border-radius: 4px;
  background-color: #f1f1f1;
}`}
      </pre>

      {/* Buttons */}
      <h3 className="text-xl font-semibold">Style Form Buttons</h3>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`input[type=button],
input[type=submit],
input[type=reset] {
  background-color: #04AA6D;
  border: none;
  color: white;
  padding: 16px 32px;
  cursor: pointer;
  margin: 4px 2px;
}`}
      </pre>

      {/* Responsive Form */}
      <h2 className="text-2xl font-bold">Responsive Form</h2>
      <p className="leading-relaxed">
        Use media queries to stack labels and inputs on smaller screens:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`@media screen and (max-width: 600px) {
  label, input, textarea, select {
    width: 100%;
    display: block;
  }
}`}
      </pre>

      {/* Conclusion */}
      <h2 className="text-2xl font-bold">Conclusion</h2>
      <p className="leading-relaxed">
        CSS provides powerful tools to style form elements, making user
        interfaces more beautiful, usable, and responsive. You can control
        layouts, colors, animations, and interactions—without using JavaScript.
      </p>

    </div>
  );
};

export default CssForms;
