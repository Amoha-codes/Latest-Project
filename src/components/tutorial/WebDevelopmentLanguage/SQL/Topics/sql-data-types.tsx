import React from "react";

const SqlDataTypes: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL Data Types
      </h1>

      <p className="leading-relaxed">
        The data type of a column defines what kind of value it can hold: integer, string, money, date/time, binary, etc.
        Each column must have a name and a data type when creating a table.
      </p>

      <h2 className="text-2xl font-bold pt-5">MySQL Data Types (8.0)</h2>

      <h3 className="text-xl font-semibold pt-3">String Data Types</h3>
      <ul className="list-disc list-inside">
        <li>CHAR(size) - Fixed-length string (0-255 characters)</li>
        <li>VARCHAR(size) - Variable-length string (0-65535 characters)</li>
        <li>BINARY/VARBINARY(size) - Store binary data</li>
        <li>TINYTEXT/TEXT/MEDIUMTEXT/LONGTEXT - Variable-length text</li>
        <li>TINYBLOB/BLOB/MEDIUMBLOB/LONGBLOB - Binary large objects</li>
        <li>ENUM/SET - Predefined string values</li>
      </ul>

      <h3 className="text-xl font-semibold pt-3">Numeric Data Types</h3>
      <ul className="list-disc list-inside">
        <li>BIT(size) - Bit-value type</li>
        <li>TINYINT, SMALLINT, MEDIUMINT, INT, BIGINT - Integer types</li>
        <li>FLOAT, DOUBLE, DECIMAL/DEC - Floating point and exact numbers</li>
        <li>BOOL/BOOLEAN - Boolean type</li>
      </ul>

      <h3 className="text-xl font-semibold pt-3">Date and Time Data Types</h3>
      <ul className="list-disc list-inside">
        <li>DATE - YYYY-MM-DD</li>
        <li>DATETIME - YYYY-MM-DD hh:mm:ss</li>
        <li>TIMESTAMP - UNIX timestamp</li>
        <li>TIME - hh:mm:ss</li>
        <li>YEAR - 4-digit year (1901-2155)</li>
      </ul>

      <h2 className="text-2xl font-bold pt-5">MS SQL Server Data Types</h2>

      <h3 className="text-xl font-semibold pt-3">String Data Types</h3>
      <ul className="list-disc list-inside">
        <li>char(n), varchar(n), varchar(max)</li>
        <li>nchar(n), nvarchar(n), nvarchar(max) - Unicode types</li>
        <li>binary(n), varbinary(n), varbinary(max)</li>
      </ul>

      <h3 className="text-xl font-semibold pt-3">Numeric Data Types</h3>
      <ul className="list-disc list-inside">
        <li>bit</li>
        <li>tinyint, smallint, int, bigint</li>
        <li>decimal(p,s), numeric(p,s)</li>
        <li>money, smallmoney</li>
        <li>float(n), real</li>
      </ul>

      <h3 className="text-xl font-semibold pt-3">Date and Time Data Types</h3>
      <ul className="list-disc list-inside">
        <li>datetime, datetime2</li>
        <li>smalldatetime</li>
        <li>date, time</li>
        <li>datetimeoffset</li>
        <li>timestamp</li>
      </ul>

      <h3 className="text-xl font-semibold pt-3">Other Data Types</h3>
      <ul className="list-disc list-inside">
        <li>sql_variant</li>
        <li>uniqueidentifier</li>
        <li>xml</li>
        <li>cursor, table</li>
      </ul>

      <h2 className="text-2xl font-bold pt-5">MS Access Data Types</h2>

      <ul className="list-disc list-inside">
        <li>Text - up to 255 characters</li>
        <li>Memo - up to 65,536 characters</li>
        <li>Byte, Integer, Long - numeric types</li>
        <li>Single, Double - floating point</li>
        <li>Currency - up to 15 digits + 4 decimals</li>
        <li>AutoNumber - auto-increment integer</li>
        <li>Date/Time</li>
        <li>Yes/No - Boolean</li>
        <li>OLE Object - BLOBs (up to 1GB)</li>
        <li>Hyperlink, Lookup Wizard</li>
      </ul>
    </div>
  );
};

export default SqlDataTypes;
