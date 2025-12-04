import React from "react";

const RustEnvironmentSetup: React.FC = () => (
  <div className="mt-20 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-3">
      Rust – Environment Setup
    </h1>

    {/* Intro */}
    <p className="leading-relaxed">
      Installing Rust is simple using <strong>rustup</strong>, a command-line tool
      for downloading Rust, managing versions, and handling associated tools.
    </p>

    {/* Windows Installation */}
    <h2 className="text-2xl font-bold mt-10">Installation on Windows</h2>

    <p className="leading-relaxed">
      To install Rust on Windows, ensure that <strong>Visual Studio 2013 or
      higher with C++ tools</strong> is installed. You can download Visual Studio
      from Microsoft's official website.
    </p>

    <p className="leading-relaxed">
      Download and run the Windows <strong>rustup-init.exe</strong> installer from
      the official Rust website. After running it, you'll see the Rust
      installation screen.
    </p>

    <p className="leading-relaxed">
      Press <strong>Enter</strong> to proceed with the default installation. After
      completion, Rust tools are installed in the following directory:
    </p>


    <p className="leading-relaxed">This folder contains:</p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>cargo.exe</li>
      <li>cargo-fmt.exe</li>
      <li>rustc.exe (Rust compiler)</li>
      <li>rustdoc.exe</li>
      <li>rust-lldb.exe</li>
      <li>rust-gdb.exe</li>
      <li>rustfmt.exe</li>
      <li>rustup.exe</li>
    </ul>

    {/* Cargo Verification */}
    <h2 className="text-2xl font-bold mt-10">Verify Installation</h2>
    <p className="leading-relaxed">Check Cargo version:</p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
C:\Users\Admin&gt; cargo -V
cargo 1.29.0 (524a578d7 2018-08-05)
    </pre>

    <p className="leading-relaxed">Check Rust compiler version:</p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
C:\Users\Admin&gt; rustc -V
rustc 1.29.0 (aa3ca1994 2018-09-11)
    </pre>

    {/* Linux / Mac Installation */}
    <h2 className="text-2xl font-bold mt-10">Installation on Linux / macOS</h2>

    <p className="leading-relaxed">Run the following command in your terminal:</p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
curl https://sh.rustup.rs -sSf | sh
    </pre>

    <p className="leading-relaxed">
      This installs the latest stable Rust version. After installation, add Rust
      to your PATH manually if needed:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
source $HOME/.cargo/env
    </pre>

    <p className="leading-relaxed">Or add this line to <code>~/.bash_profile</code>:</p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
export PATH="$HOME/.cargo/bin:$PATH"
    </pre>

    <p className="leading-relaxed">
      If you encounter linker errors, it means a system linker is missing and
      must be installed manually.
    </p>

    {/* REPL */}
    <h2 className="text-2xl font-bold mt-10">Using TutorialsPoint Coding Ground</h2>

    <p className="leading-relaxed">
      A Read-Evaluate-Print Loop (REPL) allows running Rust code directly in the
      browser. You can use TutorialsPoint Coding Ground to compile and execute
      Rust programs online without installing anything.
    </p>
  </div>
);

export default RustEnvironmentSetup;