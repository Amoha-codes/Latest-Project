import React from "react";

const WebAssemblyGo: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        WebAssembly - Working with Go
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        Go has supported compilation to WebAssembly (<b>.wasm</b>) since Go
        <b>version 1.11</b>.  
        In this chapter, we will write a simple Go program, compile it into
        WebAssembly, and execute it inside the browser using Go’s official
        <code>wasm_exec.js</code> runtime.
      </p>

      {/* Step 1 */}
      <h2 className="text-2xl font-bold">Step 1 — Install Go</h2>
      <p className="leading-relaxed">
        Visit: <code>https://go.dev/dl/</code>  
        Download and install Go for your operating system.
      </p>

      {/* Step 2 */}
      <h2 className="text-2xl font-bold">Step 2 — Create a Go Program</h2>
      <p className="leading-relaxed">
        Write a simple Go program that adds two numbers.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`package main
import "fmt"

func main() { 
   var a int = 100 
   var b int = 200 
   var ret int 
   ret = sum(a, b) 
   fmt.Printf("Sum is : %d\\n", ret)
}

/* function returning sum of two numbers */ 
func sum(num1, num2 int) int { 
   return num1 + num2 
}`}
      </pre>

      <p className="leading-relaxed">
        Save the file as <code>testnum.go</code>.
      </p>

      {/* Step 3 */}
      <h2 className="text-2xl font-bold">Step 3 — Set Go Environment for WebAssembly</h2>
      <p className="leading-relaxed">
        Before compiling, set these environment variables:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`GOOS=js
GOARCH=wasm`}
      </pre>

      <p className="leading-relaxed">These settings tell Go to build for the WebAssembly runtime.</p>

      {/* Step 4 */}
      <h2 className="text-2xl font-bold">Step 4 — Compile Go Code to WebAssembly</h2>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`go build -o testnum.wasm testnum.go`}
      </pre>

      <p className="leading-relaxed">
        You should now have a <code>testnum.wasm</code> file generated.
      </p>

      {/* Step 5 */}
      <h2 className="text-2xl font-bold">Step 5 — Include Go WebAssembly Runtime</h2>

      <p className="leading-relaxed">
        Go provides a special JavaScript runtime file called{" "}
        <code>wasm_exec.js</code>.  
        It is located in your Go installation:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`<Go installation directory>/misc/wasm/wasm_exec.js`}
      </pre>

      <p className="leading-relaxed">
        Copy <code>wasm_exec.js</code> into the same folder as your HTML file.
      </p>

      {/* Step 6 */}
      <h2 className="text-2xl font-bold">Step 6 — Create HTML File to Run WASM</h2>

      <p className="leading-relaxed">Here is the complete <code>testgo.html</code>:</p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm overflow-x-auto">
{`<html>
   <head>
      <meta charset="utf-8" />
      <script src="wasm_exec.js"></script>
   </head>
   <body>
      <script type="text/javascript">
         const importObj = { module: {} };
         const go = new Go();

         async function fetchAndInstantiate() {
            const response = await fetch("testnum.wasm");
            const buffer = await response.arrayBuffer();
            const obj = await WebAssembly.instantiate(buffer, go.importObject);
            console.log(obj);
            go.run(obj.instance); 
         }

         fetchAndInstantiate();
      </script>
   </body>
</html>`}
      </pre>

      {/* Output */}
      <h2 className="text-2xl font-bold">Output</h2>

      <p className="leading-relaxed">
        When the program runs in the browser, the console will display:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-center">
{`Sum is : 300`}
      </pre>

      <p className="leading-relaxed">
        This output is produced from the Go function <code>sum(100, 200)</code>.
      </p>

      {/* Conclusion */}
      <h2 className="text-2xl font-bold">You Can Now Use Go with WebAssembly</h2>

      <p className="leading-relaxed">
        Go + WebAssembly allows you to run Go programs in the browser with ease.
        You can extend this technique to build complete applications using Go’s
        powerful standard library.
      </p>

    </div>
  );
};

export default WebAssemblyGo;
