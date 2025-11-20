import React from "react";

const GoFormattingVerbs: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold text-gray-900 border-b-2 pb-2">
      Go Formatting Verbs
    </h1>

    <p className="text-lg text-gray-700 leading-relaxed mt-4">
      <strong>Formatting Verbs for Printf()</strong> — Go offers several formatting verbs that can be used with the <code>Printf()</code> function.
    </p>

    {/* General Formatting Verbs */}
    <h2 className="text-2xl font-bold text-gray-800 mt-6">
      General Formatting Verbs
    </h2>
    <p className="mt-2 text-gray-700">
      The following verbs can be used with all data types:
    </p>

    <table className="table-auto border-collapse border border-gray-400 mt-3 text-gray-700">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-gray-400 px-4 py-2">Verb</th>
          <th className="border border-gray-400 px-4 py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border px-4 py-2">%v</td><td className="border px-4 py-2">Prints the value in the default format</td></tr>
        <tr><td className="border px-4 py-2">%#v</td><td className="border px-4 py-2">Prints the value in Go-syntax format</td></tr>
        <tr><td className="border px-4 py-2">%T</td><td className="border px-4 py-2">Prints the type of the value</td></tr>
        <tr><td className="border px-4 py-2">%%</td><td className="border px-4 py-2">Prints the % sign</td></tr>
      </tbody>
    </table>

    <h3 className="text-xl font-semibold text-gray-800 mt-4">Example</h3>
    <pre className="bg-gray-100 p-4 rounded-lg text-sm mt-2">
{`package main
import ("fmt")

func main() {
  var i = 15.5
  var txt = "Hello World!"

  fmt.Printf("%v\\n", i)
  fmt.Printf("%#v\\n", i)
  fmt.Printf("%v%%\\n", i)
  fmt.Printf("%T\\n", i)

  fmt.Printf("%v\\n", txt)
  fmt.Printf("%#v\\n", txt)
  fmt.Printf("%T\\n", txt)
}`}
    </pre>
    <p className="mt-2 text-gray-700">Result:</p>
    <pre className="bg-gray-100 p-4 rounded-lg text-sm">
15.5
{"\n"}15.5
{"\n"}15.5%
{"\n"}float64
{"\n"}Hello World!
{"\n"}"Hello World!"
{"\n"}string
    </pre>

    {/* Integer Formatting Verbs */}
    <h2 className="text-2xl font-bold text-gray-800 mt-8">Integer Formatting Verbs</h2>
    <p className="mt-2 text-gray-700">
      The following verbs can be used with the integer data type:
    </p>

    <table className="table-auto border-collapse border border-gray-400 mt-3 text-gray-700">
      <thead>
        <tr className="bg-gray-200">
          <th className="border px-4 py-2">Verb</th>
          <th className="border px-4 py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border px-4 py-2">%b</td><td className="border px-4 py-2">Base 2</td></tr>
        <tr><td className="border px-4 py-2">%d</td><td className="border px-4 py-2">Base 10</td></tr>
        <tr><td className="border px-4 py-2">%+d</td><td className="border px-4 py-2">Base 10 and always show sign</td></tr>
        <tr><td className="border px-4 py-2">%o</td><td className="border px-4 py-2">Base 8</td></tr>
        <tr><td className="border px-4 py-2">%O</td><td className="border px-4 py-2">Base 8, with leading 0o</td></tr>
        <tr><td className="border px-4 py-2">%x</td><td className="border px-4 py-2">Base 16, lowercase</td></tr>
        <tr><td className="border px-4 py-2">%X</td><td className="border px-4 py-2">Base 16, uppercase</td></tr>
        <tr><td className="border px-4 py-2">%#x</td><td className="border px-4 py-2">Base 16, with leading 0x</td></tr>
        <tr><td className="border px-4 py-2">%4d</td><td className="border px-4 py-2">Pad with spaces (width 4, right justified)</td></tr>
        <tr><td className="border px-4 py-2">%-4d</td><td className="border px-4 py-2">Pad with spaces (width 4, left justified)</td></tr>
        <tr><td className="border px-4 py-2">%04d</td><td className="border px-4 py-2">Pad with zeroes (width 4)</td></tr>
      </tbody>
    </table>

    <h3 className="text-xl font-semibold text-gray-800 mt-4">Example</h3>
    <pre className="bg-gray-100 p-4 rounded-lg text-sm mt-2">
{`package main
import ("fmt")

func main() {
  var i = 15
 
  fmt.Printf("%b\\n", i)
  fmt.Printf("%d\\n", i)
  fmt.Printf("%+d\\n", i)
  fmt.Printf("%o\\n", i)
  fmt.Printf("%O\\n", i)
  fmt.Printf("%x\\n", i)
  fmt.Printf("%X\\n", i)
  fmt.Printf("%#x\\n", i)
  fmt.Printf("%4d\\n", i)
  fmt.Printf("%-4d\\n", i)
  fmt.Printf("%04d\\n", i)
}`}
    </pre>
    <p className="mt-2 text-gray-700">Result:</p>
    <pre className="bg-gray-100 p-4 rounded-lg text-sm">
1111
{"\n"}15
{"\n"}+15
{"\n"}17
{"\n"}0o17
{"\n"}f
{"\n"}F
{"\n"}0xf
{"\n"}  15
{"\n"}15
{"\n"}0015
    </pre>

    {/* String Formatting Verbs */}
    <h2 className="text-2xl font-bold text-gray-800 mt-8">String Formatting Verbs</h2>
    <p className="mt-2 text-gray-700">
      The following verbs can be used with the string data type:
    </p>

    <table className="table-auto border-collapse border border-gray-400 mt-3 text-gray-700">
      <thead>
        <tr className="bg-gray-200">
          <th className="border px-4 py-2">Verb</th>
          <th className="border px-4 py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border px-4 py-2">%s</td><td className="border px-4 py-2">Prints the value as plain string</td></tr>
        <tr><td className="border px-4 py-2">%q</td><td className="border px-4 py-2">Prints the value as a double-quoted string</td></tr>
        <tr><td className="border px-4 py-2">%8s</td><td className="border px-4 py-2">Prints the value as plain string (width 8, right justified)</td></tr>
        <tr><td className="border px-4 py-2">%-8s</td><td className="border px-4 py-2">Prints the value as plain string (width 8, left justified)</td></tr>
        <tr><td className="border px-4 py-2">%x</td><td className="border px-4 py-2">Prints the value as hex dump of byte values</td></tr>
        <tr><td className="border px-4 py-2">% x</td><td className="border px-4 py-2">Prints the value as hex dump with spaces</td></tr>
      </tbody>
    </table>

    <h3 className="text-xl font-semibold text-gray-800 mt-4">Example</h3>
    <pre className="bg-gray-100 p-4 rounded-lg text-sm mt-2">
{`package main
import ("fmt")

func main() {
  var txt = "Hello"
 
  fmt.Printf("%s\\n", txt)
  fmt.Printf("%q\\n", txt)
  fmt.Printf("%8s\\n", txt)
  fmt.Printf("%-8s\\n", txt)
  fmt.Printf("%x\\n", txt)
  fmt.Printf("% x\\n", txt)
}`}
    </pre>
    <p className="mt-2 text-gray-700">Result:</p>
    <pre className="bg-gray-100 p-4 rounded-lg text-sm">
Hello
{"\n"}"Hello"
{"\n"}   Hello
{"\n"}Hello
{"\n"}48656c6c6f
{"\n"}48 65 6c 6c 6f
    </pre>

    {/* Boolean Formatting Verbs */}
    <h2 className="text-2xl font-bold text-gray-800 mt-8">Boolean Formatting Verbs</h2>
    <p className="mt-2 text-gray-700">
      The following verb can be used with the boolean data type:
    </p>

    <table className="table-auto border-collapse border border-gray-400 mt-3 text-gray-700">
      <thead>
        <tr className="bg-gray-200">
          <th className="border px-4 py-2">Verb</th>
          <th className="border px-4 py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border px-4 py-2">%t</td><td className="border px-4 py-2">Value of the boolean operator in true or false format (same as using %v)</td></tr>
      </tbody>
    </table>

    <h3 className="text-xl font-semibold text-gray-800 mt-4">Example</h3>
    <pre className="bg-gray-100 p-4 rounded-lg text-sm mt-2">
{`package main
import ("fmt")

func main() {
  var i = true
  var j = false

  fmt.Printf("%t\\n", i)
  fmt.Printf("%t\\n", j)
}`}
    </pre>
    <p className="mt-2 text-gray-700">Result:</p>
    <pre className="bg-gray-100 p-4 rounded-lg text-sm">
true
{"\n"}false
    </pre>

    {/* Float Formatting Verbs */}
    <h2 className="text-2xl font-bold text-gray-800 mt-8">Float Formatting Verbs</h2>
    <p className="mt-2 text-gray-700">
      The following verbs can be used with the float data type:
    </p>

    <table className="table-auto border-collapse border border-gray-400 mt-3 text-gray-700">
      <thead>
        <tr className="bg-gray-200">
          <th className="border px-4 py-2">Verb</th>
          <th className="border px-4 py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border px-4 py-2">%e</td><td className="border px-4 py-2">Scientific notation with 'e' as exponent</td></tr>
        <tr><td className="border px-4 py-2">%f</td><td className="border px-4 py-2">Decimal point, no exponent</td></tr>
        <tr><td className="border px-4 py-2">%.2f</td><td className="border px-4 py-2">Default width, precision 2</td></tr>
        <tr><td className="border px-4 py-2">%6.2f</td><td className="border px-4 py-2">Width 6, precision 2</td></tr>
        <tr><td className="border px-4 py-2">%g</td><td className="border px-4 py-2">Exponent as needed, only necessary digits</td></tr>
      </tbody>
    </table>

    <h3 className="text-xl font-semibold text-gray-800 mt-4">Example</h3>
    <pre className="bg-gray-100 p-4 rounded-lg text-sm mt-2">
{`package main
import ("fmt")

func main() {
  var i = 3.141

  fmt.Printf("%e\\n", i)
  fmt.Printf("%f\\n", i)
  fmt.Printf("%.2f\\n", i)
  fmt.Printf("%6.2f\\n", i)
  fmt.Printf("%g\\n", i)
}`}
    </pre>
    <p className="mt-2 text-gray-700">Result:</p>
    <pre className="bg-gray-100 p-4 rounded-lg text-sm">
3.141000e+00
{"\n"}3.141000
{"\n"}3.14
{"\n"}  3.14
{"\n"}3.141
    </pre>
  </div>
);

export default GoFormattingVerbs;
