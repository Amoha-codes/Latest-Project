import React from "react";

const DartInterfaces: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        Dart Programming - Interfaces
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        An <span className="font-semibold">interface</span> defines a contract that any implementing class must adhere to. 
        In Dart, every class implicitly defines an interface. To implement an interface, a class uses the <code>implements</code> keyword and must provide concrete definitions for all its methods.
      </p>

      {/* Syntax */}
      <h2 className="text-2xl font-bold">Syntax: Implementing an Interface</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
          <code>{`class identifier implements interface_name { 
  // implementation of all interface methods 
}`}</code>
        </pre>
      </div>

      {/* Example: Single Interface */}
      <h2 className="text-2xl font-bold">Example: Single Interface</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
          <code>{`void main() { 
  ConsolePrinter cp = ConsolePrinter(); 
  cp.print_data(); 
}  

class Printer { 
  void print_data() { 
    print("__________Printing Data__________"); 
  } 
}  

class ConsolePrinter implements Printer { 
  void print_data() {  
    print("__________Printing to Console__________"); 
  } 
}`}</code>
        </pre>
      </div>

      <div className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
        __________Printing to Console__________
      </div>

      {/* Multiple Interfaces */}
      <h2 className="text-2xl font-bold">Implementing Multiple Interfaces</h2>
      <p className="leading-relaxed">
        A class can implement multiple interfaces by separating them with commas. Each interface method must be redefined in the implementing class.
      </p>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
          <code>{`void main() { 
  Calculator c = Calculator(); 
  print("The gross total : \${c.ret_tot()}"); 
  print("Discount : \${c.ret_dis()}"); 
}  

abstract class Calculate_Total { 
  int ret_tot(); 
}  

abstract class Calculate_Discount { 
  int ret_dis(); 
}  

class Calculator implements Calculate_Total, Calculate_Discount { 
  int ret_tot() { 
    return 1000; 
  } 
  int ret_dis() { 
    return 50; 
  } 
}`}</code>
        </pre>
      </div>

      <div className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
        The gross total: 1000{"\n"}Discount: 50
      </div>

      <p className="leading-relaxed">
        In Dart, classes define interfaces implicitly. Using <code>implements</code> allows a class to provide its own implementation of methods. Multiple interfaces can be implemented by separating them with commas.
      </p>
    </div>
  );
};

export default DartInterfaces;
