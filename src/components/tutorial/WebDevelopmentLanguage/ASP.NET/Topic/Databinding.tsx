
import React, { useState } from "react";

// Simulated book list class
interface Book {
  Book: string;
  Author: string;
}

const DataBindingControl: React.FC = () => {
  // Book data
  const [books] = useState<Book[]>([
    { Book: "UNIX CONCEPTS", Author: "SUMITABHA DAS" },
    { Book: "PROGRAMMING IN C", Author: "RICHI KERNIGHAN" },
    { Book: "DATA STRUCTURE", Author: "TANENBAUM" },
    { Book: "NETWORKING CONCEPTS", Author: "FOROUZAN" },
    { Book: "PROGRAMMING IN C++", Author: "B. STROUSTROUP" },
    { Book: "ADVANCED JAVA", Author: "SUMITABHA DAS" },
  ]);

  // Selected values for different list controls
  const [listBoxSelected, setListBoxSelected] = useState<string>("");
  const [dropDownSelected, setDropDownSelected] = useState<string>("");
  const [radioSelected, setRadioSelected] = useState<string>("");
  const [checkSelected, setCheckSelected] = useState<string>("");

  // CheckBoxList can have multiple selections, but to simulate single display we pick the first
  const handleCheckChange = (author: string) => {
    setCheckSelected(author);
  };

  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        ASP.NET Data Binding Simulation
      </h1>

      <p className="leading-relaxed">
        This React example simulates ASP.NET ListBox, DropDownList, RadioButtonList,
        and CheckBoxList with simple data binding.
      </p>

      <div className="grid grid-cols-2 gap-6 mt-6">
        {/* ListBox Simulation */}
        <div>
          <h2 className="font-bold mb-2">ListBox</h2>
          <select
            size={6}
            className="border border-gray-400 p-2 rounded w-full"
            onChange={(e) => setListBoxSelected(e.target.value)}
          >
            {books.map((b, idx) => (
              <option key={idx} value={b.Author}>
                {b.Book}
              </option>
            ))}
          </select>
          <p className="mt-2 text-gray-700">
            Selected Author: {listBoxSelected}
          </p>
        </div>

        {/* DropDownList Simulation */}
        <div>
          <h2 className="font-bold mb-2">DropDownList</h2>
          <select
            className="border border-gray-400 p-2 rounded w-full"
            onChange={(e) => setDropDownSelected(e.target.value)}
          >
            <option value="">Select a book</option>
            {books.map((b, idx) => (
              <option key={idx} value={b.Author}>
                {b.Book}
              </option>
            ))}
          </select>
          <p className="mt-2 text-gray-700">
            Selected Author: {dropDownSelected}
          </p>
        </div>

        {/* RadioButtonList Simulation */}
        <div>
          <h2 className="font-bold mb-2">RadioButtonList</h2>
          {books.map((b, idx) => (
            <div key={idx} className="flex items-center">
              <input
                type="radio"
                name="radioBooks"
                value={b.Author}
                onChange={(e) => setRadioSelected(e.target.value)}
                className="mr-2"
              />
              <label>{b.Book}</label>
            </div>
          ))}
          <p className="mt-2 text-gray-700">Selected Author: {radioSelected}</p>
        </div>

        {/* CheckBoxList Simulation */}
        <div>
          <h2 className="font-bold mb-2">CheckBoxList</h2>
          {books.map((b, idx) => (
            <div key={idx} className="flex items-center">
              <input
                type="checkbox"
                value={b.Author}
                onChange={() => handleCheckChange(b.Author)}
                className="mr-2"
              />
              <label>{b.Book}</label>
            </div>
          ))}
          <p className="mt-2 text-gray-700">Selected Author: {checkSelected}</p>
        </div>
      </div>
    </div>
  );
};

export default DataBindingControl;
