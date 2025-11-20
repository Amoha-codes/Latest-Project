import React from "react";

const GoGettingStarted: React.FC = () => (
  <div className="mt-20 text-gray-800 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Go Getting Started
    </h1>

    <h2 className="text-2xl font-bold mt-6">Go Get Started</h2>
    <p>
      To start using Go, you need two things:
      <br />• A text editor, like VS Code, to write Go code
      <br />• A compiler, like GCC, to translate the Go code into a language that the computer will understand
    </p>
    <p>
      There are many text editors and compilers to choose from. In this tutorial,
      we will use an IDE (see below).
    </p>

    <h2 className="text-2xl font-bold mt-6">Go Install</h2>
    <p>
      You can find the relevant installation files at{" "}
      <a
        href="https://golang.org/dl/"
        target="_blank"
        className="text-blue-600 underline"
      >
        https://golang.org/dl/
      </a>
      .
    </p>
    <p>
      Follow the instructions related to your operating system. To check if Go
      was installed successfully, you can run the following command in a
      terminal window:
    </p>

    <div className="bg-gray-100 p-3 rounded-md font-mono">
      go version
    </div>

    <p>This should show the version of your Go installation.</p>

    <h2 className="text-2xl font-bold mt-6">Go Install IDE</h2>
    <p>
      An IDE (Integrated Development Environment) is used to edit AND compile
      the code.
    </p>
    <p>
      Popular IDEs include Visual Studio Code (VS Code), Vim, Eclipse, and
      Notepad. These are all free and can be used to both edit and debug Go
      code.
    </p>
    <p>
      Note: Web-based IDEs can work as well, but functionality is limited.
    </p>
    <p>
      We will use VS Code in our tutorial, which we believe is a good place to
      start.
    </p>
    <p>
      You can find the latest version of VS Code at{" "}
      <a
        href="https://code.visualstudio.com/"
        target="_blank"
        className="text-blue-600 underline"
      >
        https://code.visualstudio.com/
      </a>
      .
    </p>

    <h2 className="text-2xl font-bold mt-6">Go Quickstart</h2>
    <p>Let's create our first Go program:</p>
    <p>
      1. Launch the VS Code editor <br />
      2. Open the extension manager or press <b>Ctrl + Shift + X</b> <br />
      3. In the search box, type "go" and hit enter <br />
      4. Find the Go extension by the Go team at Google and install it <br />
      5. After installation, open the command palette (<b>Ctrl + Shift + P</b>){" "}
      <br />
      6. Run the <b>Go: Install/Update Tools</b> command <br />
      7. Select all tools and click OK <br />
      8. VS Code is now configured to use Go
    </p>

    <p>Open up a terminal window and type:</p>

    <div className="bg-gray-100 p-3 rounded-md font-mono">
      go mod init example.com/hello
    </div>

    <p>
      Do not worry if you do not understand why we type the above command. Just
      think of it as something you always do — you’ll learn more about it later.
    </p>

    <p>
      Create a new file (<b>File &gt; New File</b>). Copy and paste the following code and
      save it as <b>helloworld.go</b>:
    </p>

    <div className="bg-gray-100 p-3 rounded-md font-mono">
      package main
      <br />
      import ("fmt")
      <br />
      <br />
      func main() &#123;
      <br />
      &nbsp;&nbsp;fmt.Println("Hello World!")
      <br />
      &#125;
    </div>

    <p>Now, run the code by typing in the terminal:</p>

    <div className="bg-gray-100 p-3 rounded-md font-mono">
      go run .\helloworld.go
    </div>

    <p>
      Output:
      <br />
      <b>Hello World!</b>
    </p>

    <p>
      Congratulations! You have now written and executed your first Go program.
    </p>

    <p>
      If you want to save the program as an executable, type and run:
    </p>

    <div className="bg-gray-100 p-3 rounded-md font-mono">
      go build .\helloworld.go
    </div>

    <h2 className="text-2xl font-bold mt-6">Learning Go At W3Schools</h2>
    <p>
      When learning Go at W3Schools.com, you can use the{" "}
      <b>"Try it Yourself"</b> tool. It shows both the code and the result, making
      it easier to understand every part as we move forward:
    </p>

    <div className="bg-gray-100 p-3 rounded-md font-mono">
      package main
      <br />
      import ("fmt")
      <br />
      <br />
      func main() &#123;
      <br />
      &nbsp;&nbsp;fmt.Println("Hello World!")
      <br />
      &#125;
    </div>

    <p>
      <b>Result:</b>
      <br />
      Hello World!
    </p>
  </div>
);

export default GoGettingStarted;
