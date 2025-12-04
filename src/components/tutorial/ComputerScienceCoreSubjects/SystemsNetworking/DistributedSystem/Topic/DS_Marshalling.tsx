import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Marshalling ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Marshalling in Distributed System
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Jul, 2025</p>

    {/* Introduction */}
    <p className="text-lg leading-relaxed">
      Distributed systems consist of multiple components across different machines that coordinate and communicate 
      to appear as a single system to end-users. For proper communication, data structures must be converted 
      into a transmittable format before sending and restored upon arrival.
    </p>

    {/* External Data Representation */}
    <h2 className="text-3xl font-bold mt-8">External Data Representation</h2>
    <p className="leading-relaxed">
      Data in running applications consists of bytes in different formats across machines. Differences in endianness, 
      floating-point representation, and character encoding (ASCII, Unicode) necessitate conversion to a common 
      external format for successful transmission. This standardization ensures interoperability for Remote Procedure 
      Calls (RPC) and Remote Method Invocations (RMI).
    </p>

    {/* Marshalling and Unmarshalling */}
    <h2 className="text-3xl font-bold mt-8">Marshalling & Unmarshalling</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Marshalling:</strong> Converting and formatting data structures into an external data representation suitable for transmission.
      </li>
      <li>
        <strong>Unmarshalling:</strong> Reconstructing the original data structures at the destination from the transmitted format.
      </li>
    </ul>

    {/* Approaches */}
    <h2 className="text-3xl font-bold mt-8">Approaches to Marshalling</h2>
    
    {/* CORBA */}
    <h3 className="text-2xl font-semibold mt-4">1. Common Object Request Broker Architecture (CORBA)</h3>
    <p className="leading-relaxed">
      CORBA, defined by OMG, enables heterogeneous systems to communicate. Its main components are:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Object Request Broker (ORB):</strong> Provides communication infrastructure for objects.</li>
      <li><strong>Interface Definition Language (IDL):</strong> Defines interfaces for communication across languages.</li>
      <li><strong>Dynamic Invocation Interface (DII):</strong> Allows clients to invoke objects dynamically at runtime.</li>
      <li><strong>Interface Repository (IR):</strong> Stores object interfaces for runtime discovery.</li>
      <li><strong>Object Adapter (OA):</strong> Provides access to ORB services like object reference generation.</li>
    </ul>
    <p className="leading-relaxed">
      <strong>Data Representation in CORBA:</strong> CORBA uses Common Data Representation (CDR) to convert primitive and structured data types 
      for transmission, supporting interoperability across architectures and endianness.
    </p>

    {/* Java Serialization */}
    <h3 className="text-2xl font-semibold mt-4">2. Java's Object Serialization</h3>
    <p className="leading-relaxed">
      Java RMI allows passing both objects and primitive types as arguments. Serialization converts objects into a sequence of bytes 
      containing type and data information, which can then be transmitted or stored. Deserialization restores the object in memory.
    </p>
    <pre className="bg-gray-400 p-4 rounded-lg overflow-auto text-sm">
      {`import java.io.*;
public class Person implements Serializable {
    public String name;
    public String place;
    public int phonenumber;
    public void letter() {
        System.out.println("Issue a letter to " + name + " " + place);
    }
}`}
    </pre>
    <p className="leading-relaxed">
      Serialization is JVM-independent, allowing objects to be transmitted between different platforms.
    </p>

    {/* XML */}
    <h3 className="text-2xl font-semibold mt-4">3. Extensible Markup Language (XML)</h3>
    <p className="leading-relaxed">
      XML is a text-based format for structured data, widely used in web services for communication. 
      It allows clients and servers to exchange data using custom tags and namespaces.
    </p>
    <pre className="bg-gray-400 p-4 rounded-lg overflow-auto text-sm">
      {`<person id="9865">
  <name>John</name>
  <place>England</place>
  <year>1876</year>
  <!-- comment -->
</person>`}
    </pre>

    {/* Summary */}
    <h2 className="text-3xl font-bold mt-8">Usage and Importance</h2>
    <p className="leading-relaxed">
      Marshalling enables RPC, RMI, and other distributed protocols by standardizing data transmission 
      across heterogeneous systems. Binary formats like CORBA CDR and Java Serialization are efficient, 
      while textual formats like XML ensure readability and interoperability. 
      Marshalling is also critical in COM, DCOM, XPCOM, and .NET frameworks for cross-boundary communication.
    </p>

  </div>
);

export default Home;
