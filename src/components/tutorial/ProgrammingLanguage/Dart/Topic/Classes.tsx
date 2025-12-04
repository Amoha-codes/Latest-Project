import React from "react";

const DartClasses: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        Dart Programming - Classes
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        Dart is an object-oriented language. A <span className="font-semibold">class</span> is a blueprint for creating objects.
        Classes encapsulate data (fields) and functions (methods) for objects.
      </p>

      {/* Syntax */}
      <h2 className="text-2xl font-bold">Declaring a Class</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
          <code>{`class class_name {  
  <fields>
  <getters/setters>
  <constructors>
  <functions>
}`}</code>
        </pre>
      </div>

      {/* Example: Simple class */}
      <h2 className="text-2xl font-bold">Example: Declaring and Using a Class</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
          <code>{`void main() { 
  Car c = Car(); 
  c.disp(); 
}  

class Car {  
  String engine = "E1001";  
  void disp() { 
    print(engine); 
  } 
}`}</code>
        </pre>
      </div>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
        E1001
      </div>

      {/* Constructors */}
      <h2 className="text-2xl font-bold">Constructors</h2>
      <p className="leading-relaxed">
        Constructors initialize class fields. Named constructors allow multiple constructors in a class.
      </p>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
          <code>{`void main() {           
  Car c1 = Car.namedConst('E1001');                                       
  Car c2 = Car(); 
}           

class Car {                   
  Car() { print("Non-parameterized constructor invoked"); }                                   
  Car.namedConst(String engine) { 
    print("The engine is: \${engine}");    
  }                                
}`}</code>
        </pre>
      </div>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
        The engine is: E1001{"\n"}Non-parameterized constructor invoked
      </div>

      {/* this Keyword */}
      <h2 className="text-2xl font-bold">The <code>this</code> Keyword</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
          <code>{`class Car { 
  String engine; 
  Car(String engine) { 
    this.engine = engine; 
    print("The engine is: \${engine}"); 
  } 
}

void main() { 
  Car c1 = Car('E1001'); 
}`}</code>
        </pre>
      </div>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
        The engine is: E1001
      </div>

      {/* Getters and Setters */}
      <h2 className="text-2xl font-bold">Getters and Setters</h2>
      <p className="leading-relaxed">
        Getters retrieve values, and setters modify values. Default getters/setters exist, but can be overridden.
      </p>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
          <code>{`class Student { 
  String name; 
  int age; 

  String get stud_name => name; 
  void set stud_name(String name) { this.name = name; } 

  int get stud_age => age; 
  void set stud_age(int age) { 
    if (age <= 0) print("Age should be greater than 5"); 
    else this.age = age; 
  } 
}

void main() { 
  Student s1 = Student(); 
  s1.stud_name = 'MARK'; 
  s1.stud_age = 0; 
  print(s1.stud_name); 
  print(s1.stud_age); 
}`}</code>
        </pre>
      </div>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
        Age should be greater than 5{"\n"}MARK{"\n"}null
      </div>

      {/* Inheritance */}
      <h2 className="text-2xl font-bold">Inheritance</h2>
      <p className="leading-relaxed">
        Child classes inherit properties and methods (except constructors) from parent classes using the <code>extends</code> keyword. Dart supports single and multi-level inheritance.
      </p>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
          <code>{`class Shape { 
  void cal_area() { 
    print("Calling calc area defined in the Shape class"); 
  } 
}  

class Circle extends Shape {}

void main() { 
  var obj = Circle(); 
  obj.cal_area(); 
}`}</code>
        </pre>
      </div>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
        Calling calc area defined in the Shape class
      </div>

      {/* Method Overriding */}
      <h2 className="text-2xl font-bold">Method Overriding</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
          <code>{`class Parent { 
  void m1(int a) { print("value of a \${a}"); } 
}  

class Child extends Parent { 
  @override 
  void m1(int b) { print("value of b \${b}"); } 
}  

void main() { 
  Child c = Child(); 
  c.m1(12); 
}`}</code>
        </pre>
      </div>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
        value of b 12
      </div>

      {/* static Keyword */}
      <h2 className="text-2xl font-bold">The <code>static</code> Keyword</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
          <code>{`class StaticMem { 
  static int num;  
  static disp() { 
    print("The value of num is \${StaticMem.num}"); 
  } 
}  

void main() { 
  StaticMem.num = 12;  
  StaticMem.disp(); 
}`}</code>
        </pre>
      </div>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
        The value of num is 12
      </div>

      {/* super Keyword */}
      <h2 className="text-2xl font-bold">The <code>super</code> Keyword</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
          <code>{`class Parent { 
  String msg = "message variable from the parent class"; 
  void m1(int a){ print("value of a \${a}");} 
} 

class Child extends Parent { 
  @override 
  void m1(int b) { 
    print("value of b \${b}"); 
    super.m1(13); 
    print("\${super.msg}"); 
  } 
}  

void main() { 
  Child c = Child(); 
  c.m1(12); 
}`}</code>
        </pre>
      </div>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
        value of b 12{"\n"}value of a 13{"\n"}message variable from the parent class
      </div>
    </div>
  );
};

export default DartClasses;
