import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= What is a Computer ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      What is a Computer?
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 03 Oct, 2025</p>

    <p className="text-lg leading-relaxed">
      A computer is an electronic device that processes data according to instructions provided 
      by software programs. It takes input (data), processes it using a central processing unit 
      (CPU), stores information, and produces output (results) to perform various tasks.
    </p>

    {/* ================= Types of Computers ================= */}
    <h2 className="text-3xl font-bold mt-8">Types of Computers</h2>
    <p className="leading-relaxed">
      There are various types of computers that are used today based on user needs:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Desktop:</strong> Mainly used for regular work. They have separate components like 
        monitor, keyboard, mouse, and CPU. They are kept on a desk, hence the name.
      </li>
      <li>
        <strong>Laptop:</strong> A portable version of desktops with everything built into one unit. 
        They include webcams, Bluetooth, and Wi-Fi.
      </li>
      <li>
        <strong>Servers:</strong> Special computers that manage network resources, host databases, 
        and support other applications.
      </li>
      <li>
        <strong>Tablets:</strong> More portable than laptops, touchscreen-based, ideal for content 
        consumption and browsing.
      </li>
      <li>
        <strong>Other Devices:</strong> Smartphones, game consoles, smart TVs, etc.
      </li>
    </ul>

    {/* ================= Software & Hardware Interaction ================= */}
    <h2 className="text-3xl font-bold mt-8">How Does Software Work with Hardware?</h2>

    <p className="leading-relaxed">
      When you give input (e.g., typing a letter), hardware sends this data to software. The 
      software converts it into machine-readable binary language that the CPU can process. Then, 
      the output is displayed on the screen.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Example Process</h3>
    <ul className="list-decimal ml-6 leading-relaxed">
      <li>You press Shift + A on your keyboard.</li>
      <li>The software converts the input into machine code.</li>
      <li>The CPU processes it.</li>
      <li>The monitor displays the letter “A”.</li>
    </ul>

    {/* ================= Component Communication ================= */}
    <h2 className="text-3xl font-bold mt-8">How Different Components Communicate?</h2>

    <p className="leading-relaxed">
      Here are the main components of a computer and their functions:
    </p>

    <table className="w-full border border-gray-400 mt-4">
      <thead>
        <tr className="bg-gray-300">
          <th className="border border-gray-400 p-2">Component</th>
          <th className="border border-gray-400 p-2">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-400 p-2 font-semibold">Central Processing Unit (CPU)</td>
          <td className="border border-gray-400 p-2">
            The “brain” of the computer that executes instructions and processes data. Contains 
            the ALU and CU.
          </td>
        </tr>

        <tr>
          <td className="border border-gray-400 p-2 font-semibold">Motherboard</td>
          <td className="border border-gray-400 p-2">
            The main circuit board that connects all components.
          </td>
        </tr>

        <tr>
          <td className="border border-gray-400 p-2 font-semibold">Memory (RAM)</td>
          <td className="border border-gray-400 p-2">
            Temporarily stores data for quick access while the computer is running.
          </td>
        </tr>

        <tr>
          <td className="border border-gray-400 p-2 font-semibold">Storage</td>
          <td className="border border-gray-400 p-2">
            HDDs and SSDs that permanently store data.
          </td>
        </tr>

        <tr>
          <td className="border border-gray-400 p-2 font-semibold">Input Devices</td>
          <td className="border border-gray-400 p-2">
            Devices like keyboard, mouse, scanner used to feed data into computer.
          </td>
        </tr>

        <tr>
          <td className="border border-gray-400 p-2 font-semibold">Output Devices</td>
          <td className="border border-gray-400 p-2">
            Devices like printers and speakers that show processed results.
          </td>
        </tr>
      </tbody>
    </table>

    {/* ================= Software ================= */}
    <h2 className="text-3xl font-bold mt-8">What is Software?</h2>

    <p className="leading-relaxed">
      Software is a set of instructions that tells the computer what to do, when to do it, and 
      how to do it. Examples include MS Paint, WhatsApp, and games.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Example Steps (Adding 2 Numbers)</h3>
    <ul className="list-decimal ml-6 leading-relaxed">
      <li>Take 2 values</li>
      <li>Store the values</li>
      <li>Add the values using + operator</li>
      <li>Save the answer</li>
    </ul>

    <p className="leading-relaxed">
      An interpreter converts human-readable code into machine language (binary) that the CPU 
      understands.
    </p>

    {/* ================= Hardware ================= */}
    <h2 className="text-3xl font-bold mt-8">What is Hardware?</h2>

    <p className="leading-relaxed">
      Hardware includes all the physical components of a computer. It performs tasks like 
      processing, storing, and displaying information.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Types of Hardware</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>CPU – Executes instructions</li>
      <li>RAM – Temporarily stores data</li>
      <li>HDD/SSD – Permanent storage</li>
      <li>Input Devices – Keyboard, mouse</li>
      <li>Output Devices – Monitors, printers</li>
    </ul>

    {/* ================= Types of Computers (Based on Size, Power, Function) ================= */}
    <h2 className="text-3xl font-bold mt-8">Types of Computers</h2>

    <h3 className="text-2xl font-semibold mt-4">1. Based on Size</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Microcomputers</li>
      <li>Minicomputers</li>
      <li>Mainframe Computers</li>
      <li>Supercomputers</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">2. Based on Processing Power</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Personal Computers (PCs)</li>
      <li>Servers</li>
      <li>Mainframes</li>
      <li>Supercomputers</li>
      <li>Embedded Systems</li>
      <li>Wearable Computers</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">3. Based on Functionality</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Analog Computers</li>
      <li>Digital Computers</li>
      <li>Hybrid Computers</li>
    </ul>

  </div>
);

export default Home;
