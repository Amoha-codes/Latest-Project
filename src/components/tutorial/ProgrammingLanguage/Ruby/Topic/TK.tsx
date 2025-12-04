import React from "react";

const RubyTkGuide: React.FC = () => (
  <div className="mt-20 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-3">
      Ruby – Tk Guide
    </h1>

    <h2 className="text-2xl font-bold mt-6">Introduction</h2>
    <p>
      Tk is the standard GUI for Ruby, originally developed for the Tcl language. 
      Tk is cross-platform and provides a native look-and-feel on Windows, Mac, and Linux.
    </p>
    <p>
      The basic component of a Tk application is a <strong>widget</strong>. Tk applications follow a 
      widget hierarchy with a <strong>root widget</strong> created using <code>TkRoot</code>. The typical 
      cycle: create widgets → place them → bind events.
    </p>

    <h2 className="text-2xl font-bold mt-6">Installation</h2>
    <p>
      Ruby Tk bindings come with Ruby, but Tk may require separate installation. Windows users 
      can install via ActiveTcl. Mac/Linux users may already have it installed, otherwise use 
      prebuilt packages or source from Tcl Developer Xchange.
    </p>

    <h2 className="text-2xl font-bold mt-6">Simple Tk Application</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`require 'tk'

root = TkRoot.new { title "Hello, World!" }
TkLabel.new(root) do
  text 'Hello, World!'
  pack { padx 15; pady 15; side 'left' }
end
Tk.mainloop`}</pre>
    <p>This creates a simple Hello World Tk window.</p>

    <h2 className="text-2xl font-bold mt-6">Tk Widget Classes</h2>
    <p>Common Ruby/Tk widgets include:</p>
    <ul className="list-disc list-inside space-y-1">
      <li><strong>TkFrame</strong> – frame widgets</li>
      <li><strong>TkButton</strong> – button widgets</li>
      <li><strong>TkLabel</strong> – label widgets</li>
      <li><strong>TkEntry</strong> – entry widgets</li>
      <li><strong>TkCheckButton</strong> – checkbuttons</li>
      <li><strong>TkRadioButton</strong> – radiobuttons</li>
      <li><strong>TkListbox / TkComboBox</strong> – listboxes</li>
      <li><strong>TkMenu / TkMenubutton</strong> – menus</li>
      <li><strong>TkCanvas</strong> – canvas drawing</li>
      <li><strong>TkText</strong> – text widgets</li>
      <li><strong>TkProgressBar</strong> – progress bars</li>
      <li><strong>Tk::Tile::Notebook / Paned / Separator</strong> – advanced layouts</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Geometry Management</h2>
    <p>
      Tk uses <strong>geometry managers</strong> to control widget placement. Three types:
    </p>
    <ul className="list-disc list-inside space-y-1">
      <li><strong>grid</strong> – arrange widgets in a grid</li>
      <li><strong>pack</strong> – pack widgets along edges</li>
      <li><strong>place</strong> – fixed or relative placement</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Event Handling</h2>
    <p>
      Tk provides an event loop to handle user interactions like clicks, keystrokes, or 
      window resizing. Use <code>bind</code> to attach events to widgets.
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`someWidget.bind('ButtonRelease-1') {
  # code to handle left button release
}

someWidget.bind('Control-ButtonPress-3', proc { puts "Ouch!" })`}</pre>
    <p>
      Use <code>command</code> callbacks for widget activation, e.g., buttons:
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`helpButton = TkButton.new(buttonFrame) {
  text "Help"
  command { showHelp }
}`}</pre>

    <h2 className="text-2xl font-bold mt-6">The configure Method</h2>
    <p>
      Set or get widget options:
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`button = TkButton.new {
  text 'Hello World!'
  pack
}
button.configure('activebackground', 'blue')
color = button.configure('activebackground')`}</pre>

    <h2 className="text-2xl font-bold mt-6">The cget Method</h2>
    <p>
      Retrieve a widget's current option value:
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`color = button.cget('activebackground')`}</pre>

  </div>
);

export default RubyTkGuide;
