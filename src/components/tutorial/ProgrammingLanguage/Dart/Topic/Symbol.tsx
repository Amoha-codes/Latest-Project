import React from "react";

// Simple Card component
const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={`rounded-lg shadow-md bg-white ${className || ""}`}>{children}</div>
);

const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={`p-4 ${className || ""}`}>{children}</div>
);

const DartSymbols: React.FC = () => (
  <div className="space-y-6 mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-3">Dart - Symbols</h1>

    <Card className="p-4">
      <CardContent className="space-y-4">
        <p>
          Symbols in Dart are opaque identifiers used mainly for reflection. They map human-readable names
          to optimized internal identifiers.
        </p>

        <h2 className="text-2xl font-bold">Syntax</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-xl overflow-auto">
{`Symbol obj = new Symbol('name');`}
        </pre>

        <h2 className="text-2xl font-bold">Example: Declaring Class and Methods</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-xl overflow-auto">
{`library foo_lib;

class Foo {
  m1() { print("Inside m1"); }
  m2() { print("Inside m2"); }
  m3() { print("Inside m3"); }
}`}
        </pre>

        <h2 className="text-2xl font-bold">Using Symbols to Reflect Metadata</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-xl overflow-auto">
{`import 'dart:mirrors';
import 'Foo.dart';

main() {
  Symbol lib = new Symbol("foo_lib");
  Symbol cls = new Symbol("Foo");

  if(checkIfClassExists(lib, cls)) print("Class found..");
}

bool checkIfClassExists(Symbol libraryName, Symbol className) {
  MirrorSystem ms = currentMirrorSystem();
  LibraryMirror libMirror = ms.findLibrary(libraryName);

  if (libMirror != null) {
    print("Found Library");
    libMirror.declarations.forEach((s, d) => print(s));

    return libMirror.declarations.containsKey(className);
  }
  return false;
}`}
        </pre>

        <h2 className="text-2xl font-bold">Example Output</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-xl overflow-auto">
{`Found Library
Symbol("Foo")
Class found.`}
        </pre>

        <h2 className="text-2xl font-bold">Convert Symbol to String</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-xl overflow-auto">
{`import 'dart:mirrors';

void main() {
  Symbol lib = new Symbol("foo_lib");
  String name = MirrorSystem.getName(lib);

  print(lib);
  print(name);
}`}
        </pre>
      </CardContent>
    </Card>
  </div>
);

export default DartSymbols;
