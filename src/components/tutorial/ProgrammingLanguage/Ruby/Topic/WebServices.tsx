import React from "react";

const RubySOAP4R: React.FC = () => (
  <div className="mt-20 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-3">
      Web Services with Ruby – SOAP4R
    </h1>

    <h2 className="text-2xl font-bold mt-6">What is SOAP?</h2>
    <p>
      SOAP (Simple Object Access Protocol) is a cross-platform, language-independent 
      RPC protocol based on XML. It typically uses HTTP for transporting requests 
      between clients and servers. SOAP is widely used for web services due to its 
      extensibility, ease-of-use, and multiple language implementations.
    </p>

    <h2 className="text-2xl font-bold mt-6">Installing SOAP4R</h2>
    <p>
      SOAP4R is the Ruby SOAP implementation by Hiroshi Nakamura. You can install it 
      using <code>gem</code>:
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
      $ gem install soap4r --include-dependencies
    </pre>

    <h2 className="text-2xl font-bold mt-6">Writing a SOAP4R Standalone Server</h2>
    <p>Steps to create a standalone server:</p>
    <ol className="list-decimal list-inside space-y-2">
      <li>
        <strong>Inherit</strong> <code>SOAP::RPC::StandaloneServer</code> in a class.
      </li>
      <li>
        <strong>Define handler methods</strong> – the services you want to expose.
      </li>
      <li>
        <strong>Expose methods</strong> using <code>add_method</code> in the initializer.
      </li>
      <li>
        <strong>Start the server</strong> by creating an instance and calling <code>start</code>.
      </li>
    </ol>

    <h3 className="text-xl font-semibold mt-4">Example Server</h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`require "soap/rpc/standaloneserver"

begin
  class MyServer < SOAP::RPC::StandaloneServer
    def initialize(*args)
      add_method(self, 'add', 'a', 'b')
      add_method(self, 'div', 'a', 'b')
    end

    def add(a, b)
      return a + b
    end
    def div(a, b)
      return a / b
    end
  end

  server = MyServer.new("MyServer", 'urn:ruby:calculation', 'localhost', 8080)
  trap('INT') { server.shutdown }
  server.start
rescue => err
  puts err.message
end`}</pre>

<p>
  Run the server in the background: <code>$ ruby MyServer.rb &</code>
</p>

<h2 className="text-2xl font-bold mt-6">Writing a SOAP4R Client</h2>
<p>
  Steps to create a SOAP client:
</p>
<ol className="list-decimal list-inside space-y-2">
  <li>
    <strong>Create a SOAP driver instance</strong> using <code>SOAP::RPC::Driver.new</code>
    with the endpoint URL and namespace.
  </li>
  <li>
    <strong>Add service methods</strong> with <code>driver.add_method</code>.
  </li>
  <li>
    <strong>Invoke the service</strong> using <code>driver.serviceMethod(params...)</code>.
  </li>
</ol>

<h3 className="text-xl font-semibold mt-4">Example Client</h3>
<pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`#!/usr/bin/ruby -w
require 'soap/rpc/driver'

NAMESPACE = 'urn:ruby:calculation'
URL = 'http://localhost:8080/'

begin
  driver = SOAP::RPC::Driver.new(URL, NAMESPACE)
  driver.add_method('add', 'a', 'b')

  puts driver.add(20, 30)
rescue => err
  puts err.message
end`}</pre>

<p>
  This client calls the remote <code>add</code> method on the SOAP server and prints 
  the result.
</p>

<h2 className="text-2xl font-bold mt-6">Further Reading</h2>
<p>
  This tutorial covers basic SOAP4R concepts. For advanced usage, explore the 
  <code>SOAP4R Documentation</code> and related resources on web services with Ruby.
</p>
</div>
);

export default RubySOAP4R;
