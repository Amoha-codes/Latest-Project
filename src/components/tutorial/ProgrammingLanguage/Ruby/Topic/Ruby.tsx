import React from "react";

const RubyXML: React.FC = () => (
  <div className="mt-20 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-3">
      Ruby – XML, XSLT, and XPath
    </h1>

    <h2 className="text-2xl font-bold mt-6">What is XML?</h2>
    <p>
      XML (Extensible Markup Language) is a markup language similar to HTML, 
      recommended by the W3C. It is portable and allows applications to exchange 
      data across operating systems and programming languages.
    </p>

    <h2 className="text-2xl font-bold mt-6">XML Parser Architectures</h2>
    <ul className="list-disc list-inside space-y-1">
      <li>
        <strong>SAX-like (Stream interfaces):</strong> Registers callbacks for events. 
        Useful for large files or memory-limited environments. Read-only.
      </li>
      <li>
        <strong>DOM-like (Object tree interfaces):</strong> Loads the entire file 
        into memory as a tree. Allows modifications. Faster for large files but 
        consumes more memory.
      </li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Parsing XML with REXML</h2>
    <p>
      Ruby provides the <code>REXML</code> library, a pure-Ruby XML processor that 
      supports both DOM and SAX parsing, full XPath, and is included in standard Ruby.
    </p>

    <h3 className="text-xl font-semibold mt-4">Example XML File</h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`<collection shelf="New Arrivals">
  <movie title="Enemy Behind">
    <type>War, Thriller</type>
    <format>DVD</format>
    <year>2003</year>
    <rating>PG</rating>
    <stars>10</stars>
    <description>Talk about a US-Japan war</description>
  </movie>
  <movie title="Transformers">
    <type>Anime, Science Fiction</type>
    <format>DVD</format>
    <year>1989</year>
    <rating>R</rating>
    <stars>8</stars>
    <description>A scientific fiction</description>
  </movie>
</collection>`}</pre>

    <h3 className="text-xl font-semibold mt-4">DOM-like Parsing</h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`require 'rexml/document'
include REXML

xmlfile = File.new("movies.xml")
xmldoc = Document.new(xmlfile)

root = xmldoc.root
puts "Root element: " + root.attributes["shelf"]

xmldoc.elements.each("collection/movie") { |e| puts "Movie Title: " + e.attributes["title"] }
xmldoc.elements.each("collection/movie/type") { |e| puts "Movie Type: " + e.text }
xmldoc.elements.each("collection/movie/description") { |e| puts "Movie Description: " + e.text }`}</pre>

    <h3 className="text-xl font-semibold mt-4">SAX-like Parsing</h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`require 'rexml/document'
require 'rexml/streamlistener'
include REXML

class MyListener
  include REXML::StreamListener
  def tag_start(*args)
    puts "tag_start: #{args.map {|x| x.inspect}.join(', ')}"
  end
  def text(data)
    return if data =~ /^\\w*$/
    abbrev = data[0..40] + (data.length > 40 ? "..." : "")
    puts "  text: #{abbrev.inspect}"
  end
end

list = MyListener.new
xmlfile = File.new("movies.xml")
Document.parse_stream(xmlfile, list)`}</pre>

    <h3 className="text-xl font-semibold mt-4">XPath with REXML</h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`require 'rexml/document'
include REXML

xmlfile = File.new("movies.xml")
xmldoc = Document.new(xmlfile)

movie = XPath.first(xmldoc, "//movie")
p movie

XPath.each(xmldoc, "//type") { |e| puts e.text }

names = XPath.match(xmldoc, "//format").map { |x| x.text }
p names`}</pre>

    <h2 className="text-2xl font-bold mt-6">XSLT in Ruby</h2>
    <p>
      Ruby supports two XSLT parsers:
    </p>
    <ul className="list-disc list-inside space-y-1">
      <li>
        <strong>Ruby-Sablotron:</strong> Linux-based, requires Sablot, Iconv, Expat.
      </li>
      <li>
        <strong>XSLT4R:</strong> 100% Ruby module. Can be used via CLI or included in an app.
      </li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">XSLT4R Example</h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`require "xslt"

stylesheet = File.readlines("stylesheet.xsl").to_s
xml_doc = File.readlines("document.xml").to_s
arguments = { 'image_dir' => '/....' }

sheet = XSLT::Stylesheet.new(stylesheet, arguments)

# Output to stdout
sheet.apply(xml_doc)

# Output to string
str = ""
sheet.output = [str]
sheet.apply(xml_doc)`}</pre>

    <p>
      For more details, refer to the <code>REXML Parser Documentation</code>.
    </p>
  </div>
);

export default RubyXML;
