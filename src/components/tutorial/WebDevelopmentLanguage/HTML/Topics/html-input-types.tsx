
import React from "react";

const HtmlInputTypes: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        HTML Input Types
      </h1>

      <p className="leading-relaxed">
        This chapter describes the different types for the HTML <code>&lt;input&gt;</code> element.
      </p>

      <h2 className="text-2xl font-semibold">Common Input Types</h2>
      <p className="leading-relaxed">
        Here are the different input types you can use in HTML:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<input type="button">
<input type="checkbox">
<input type="color">
<input type="date">
<input type="datetime-local">
<input type="email">
<input type="file">
<input type="hidden">
<input type="image">
<input type="month">
<input type="number">
<input type="password">
<input type="radio">
<input type="range">
<input type="reset">
<input type="search">
<input type="submit">
<input type="tel">
<input type="text">
<input type="time">
<input type="url">
<input type="week">`}
      </pre>
      <p className="leading-relaxed">
        Tip: The default value of the <code>type</code> attribute is <code>"text"</code>.
      </p>

      <h2 className="text-2xl font-semibold">Input Type Text</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname">
</form>`}
      </pre>

      <h2 className="text-2xl font-semibold">Input Type Password</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form>
  <label for="username">Username:</label><br>
  <input type="text" id="username" name="username"><br>
  <label for="pwd">Password:</label><br>
  <input type="password" id="pwd" name="pwd">
</form>`}
      </pre>

      <h2 className="text-2xl font-semibold">Input Type Submit</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
</form>`}
      </pre>

      <h2 className="text-2xl font-semibold">Input Type Reset</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
  <input type="reset" value="Reset">
</form>`}
      </pre>

      <h2 className="text-2xl font-semibold">Input Type Radio</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<p>Choose your favorite Web language:</p>
<form>
  <input type="radio" id="html" name="fav_language" value="HTML">
  <label for="html">HTML</label><br>
  <input type="radio" id="css" name="fav_language" value="CSS">
  <label for="css">CSS</label><br>
  <input type="radio" id="javascript" name="fav_language" value="JavaScript">
  <label for="javascript">JavaScript</label>
</form>`}
      </pre>

      <h2 className="text-2xl font-semibold">Input Type Checkbox</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
  <label for="vehicle1"> I have a bike</label><br>
  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
  <label for="vehicle2"> I have a car</label><br>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
  <label for="vehicle3"> I have a boat</label>
</form>`}
      </pre>

      <h2 className="text-2xl font-semibold">Input Type Button</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<input type="button" onclick="alert('Hello World!')" value="Click Me!">`}
      </pre>

      <h2 className="text-2xl font-semibold">Input Type Color</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form>
  <label for="favcolor">Select your favorite color:</label>
  <input type="color" id="favcolor" name="favcolor">
</form>`}
      </pre>

      <h2 className="text-2xl font-semibold">Input Type Date</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form>
  <label for="birthday">Birthday:</label>
  <input type="date" id="birthday" name="birthday">
</form>`}
      </pre>

      <h2 className="text-2xl font-semibold">Input Type Datetime-local</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form>
  <label for="birthdaytime">Birthday (date and time):</label>
  <input type="datetime-local" id="birthdaytime" name="birthdaytime">
</form>`}
      </pre>

      <h2 className="text-2xl font-semibold">Input Type Email</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form>
  <label for="email">Enter your email:</label>
  <input type="email" id="email" name="email">
</form>`}
      </pre>

      <h2 className="text-2xl font-semibold">Input Type File</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form>
  <label for="myfile">Select a file:</label>
  <input type="file" id="myfile" name="myfile">
</form>`}
      </pre>

      <h2 className="text-2xl font-semibold">Input Type Hidden</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form>
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <input type="hidden" id="custId" name="custId" value="3487">
  <input type="submit" value="Submit">
</form>`}
      </pre>

      <h2 className="text-2xl font-semibold">Input Type Number</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form>
  <label for="quantity">Quantity (between 1 and 5):</label>
  <input type="number" id="quantity" name="quantity" min="1" max="5">
</form>`}
      </pre>

      <h2 className="text-2xl font-semibold">Input Type Range</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form>
  <label for="vol">Volume (between 0 and 50):</label>
  <input type="range" id="vol" name="vol" min="0" max="50">
</form>`}
      </pre>

      <h2 className="text-2xl font-semibold">Other Input Types</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<input type="search">
<input type="tel">
<input type="time">
<input type="url">
<input type="week">`}
      </pre>
    </div>
  );
};

export default HtmlInputTypes;
