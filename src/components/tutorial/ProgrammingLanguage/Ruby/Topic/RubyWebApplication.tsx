import React from "react";

const RubyCGI: React.FC = () => (
  <div className="mt-20 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-3">
      Ruby – Web Applications (CGI Programming)
    </h1>

    <p>
      Ruby is a general-purpose language, but it can be used for web applications,
      including CGI programming. Ruby scripts can handle web requests, generate
      HTML, and process form data.
    </p>

    <h2 className="text-2xl font-bold mt-6">Basic CGI Script</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`#!/usr/bin/ruby

puts "HTTP/1.0 200 OK"
puts "Content-type: text/html\\n\\n"
puts "<html><body>This is a test</body></html>"`}</pre>

    <h2 className="text-2xl font-bold mt-6">Using the CGI Library</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`#!/usr/bin/ruby

require 'cgi'
cgi = CGI.new

puts cgi.header
puts "<html><body>This is a test</body></html>"`}</pre>

    <h2 className="text-2xl font-bold mt-6">Accessing Form Data</h2>
    <p>Example URL: <code>/cgi-bin/test.cgi?FirstName=Zara&LastName=Ali</code></p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`require 'cgi'
cgi = CGI.new
cgi['FirstName']  # => ["Zara"]
cgi['LastName']   # => ["Ali"]`}</pre>

    <h2 className="text-2xl font-bold mt-6">Accessing All Parameters</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`h = cgi.params
h['FirstName']   # => ["Zara"]
h['LastName']    # => ["Ali"]
cgi.keys         # => ["FirstName", "LastName"]`}</pre>

    <h2 className="text-2xl font-bold mt-6">Handling Multiple Fields with Same Name</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`cgi['name']        # => "Zara"
cgi.params['name'] # => ["Zara", "Huma", "Nuha"]
cgi.keys           # => ["name"]
cgi.params         # => {"name"=>["Zara", "Huma", "Nuha"]}`}</pre>

    <h2 className="text-2xl font-bold mt-6">Example HTML Form</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`<html>
  <body>
    <form method="POST" action="http://www.example.com/test.cgi">
      First Name: <input type="text" name="FirstName" value="" /><br />
      Last Name:  <input type="text" name="LastName" value="" />
      <input type="submit" value="Submit Data" />
    </form>
  </body>
</html>`}</pre>

    <h2 className="text-2xl font-bold mt-6">Creating HTML with CGI Methods</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`require "cgi"
cgi = CGI.new("html4")
cgi.out {
  cgi.html {
    cgi.head { cgi.title { "This Is a Test" } } +
    cgi.body {
      cgi.form {
        cgi.hr +
        cgi.h1 { "A Form:" } +
        cgi.textarea("get_text") +
        cgi.br +
        cgi.submit
      }
    }
  }
}`}</pre>

    <h2 className="text-2xl font-bold mt-6">Quoting Strings for URLs and HTML</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`require 'cgi'
puts CGI.escape("Zara Ali/A Sweet & Sour Girl")
# => Zara+Ali%2FA+Sweet+%26+Sour+Girl

puts CGI.escapeHTML('<h1>Zara Ali/A Sweet & Sour Girl</h1>')
# => &lt;h1&gt;Zara Ali/A Sweet & Sour Girl&lt;/h1&gt;`}</pre>

    <h2 className="text-2xl font-bold mt-6">Useful Methods in CGI Class</h2>
    <p>
      The <code>CGI</code> class provides many methods to handle form input, HTML generation,
      cookies, and sessions. GET and POST requests are automatically handled.
    </p>

    <h2 className="text-2xl font-bold mt-6">Cookies and Sessions</h2>
    <p>
      Use CGI cookies to store client-side information, and CGI sessions to manage server-side state.
    </p>

    <h2 className="text-2xl font-bold mt-6">Web Hosting</h2>
    <p>
      You can host Ruby CGI scripts on any Unix-based web server with execute permissions.
      Upload the script to <code>cgi-bin</code> and access it via the browser.
    </p>
  </div>
);

export default RubyCGI;
