import React from "react";

const RubyDBI: React.FC = () => (
  <div className="mt-20 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-3">
      Ruby – DBI (Database Access)
    </h1>

    <p>
      The Ruby DBI module provides a database-independent interface for Ruby scripts,
      similar to Perl's DBI. DBI stands for Database Independent Interface, which
      abstracts database operations so you can switch database engines easily.
    </p>

    <h2 className="text-2xl font-bold mt-6">Supported Databases</h2>
    <p>
      DBI can interface with ADO, DB2, Frontbase, mSQL, MySQL, ODBC, Oracle,
      OCI8, PostgreSQL, Proxy/Server, SQLite, and SQLRelay.
    </p>

    <h2 className="text-2xl font-bold mt-6">Architecture</h2>
    <p>
      Ruby DBI has two layers:
    </p>
    <ul className="list-disc pl-6">
      <li>
        <b>DBI Layer:</b> Database-independent interface methods.
      </li>
      <li>
        <b>DBD Layer:</b> Database-specific driver that translates DBI requests to SQL engine commands.
      </li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Installation</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`gem install dbi
# Or manually:
$ tar zxf dbi-0.2.0.tar.gz
$ ruby setup.rb config --with=dbi,dbd_mysql
$ ruby setup.rb setup
$ ruby setup.rb install`}</pre>

    <h2 className="text-2xl font-bold mt-6">Connecting to MySQL</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`require "dbi"

dbh = DBI.connect("DBI:Mysql:TESTDB:localhost", "testuser", "test123")
row = dbh.select_one("SELECT VERSION()")
puts "Server version: " + row[0]
dbh.disconnect`}</pre>

    <h2 className="text-2xl font-bold mt-6">INSERT Operation</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`dbh.do("INSERT INTO EMPLOYEE(FIRST_NAME, LAST_NAME, AGE, SEX, INCOME)
  VALUES ('Mac', 'Mohan', 20, 'M', 2000)")
dbh.commit`}</pre>

    <h2 className="text-2xl font-bold mt-6">Using prepare and execute</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`sth = dbh.prepare("INSERT INTO EMPLOYEE(FIRST_NAME, LAST_NAME, AGE, SEX, INCOME)
  VALUES (?, ?, ?, ?, ?)")
sth.execute('John', 'Poul', 25, 'M', 2300)
sth.execute('Zara', 'Ali', 17, 'F', 1000)
sth.finish
dbh.commit`}</pre>

    <h2 className="text-2xl font-bold mt-6">READ Operation</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`sth = dbh.prepare("SELECT * FROM EMPLOYEE WHERE INCOME > ?")
sth.execute(1000)
sth.fetch do |row|
  printf "First Name: %s, Last Name: %s, Age: %d, Sex: %s, Income: %d\\n",
         row[0], row[1], row[2], row[3], row[4]
end
sth.finish`}</pre>

    <h2 className="text-2xl font-bold mt-6">UPDATE Operation</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`sth = dbh.prepare("UPDATE EMPLOYEE SET AGE = AGE + 1 WHERE SEX = ?")
sth.execute('M')
sth.finish
dbh.commit`}</pre>

    <h2 className="text-2xl font-bold mt-6">DELETE Operation</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`sth = dbh.prepare("DELETE FROM EMPLOYEE WHERE AGE > ?")
sth.execute(20)
sth.finish
dbh.commit`}</pre>

    <h2 className="text-2xl font-bold mt-6">Transactions</h2>
    <p>
      DBI supports atomic transactions. Use <b>commit</b> to save changes and <b>rollback</b> to revert.
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`dbh['AutoCommit'] = false
begin
  dbh.do("UPDATE EMPLOYEE SET AGE = AGE+1 WHERE FIRST_NAME = 'John'")
  dbh.do("UPDATE EMPLOYEE SET AGE = AGE+1 WHERE FIRST_NAME = 'Zara'")
  dbh.commit
rescue
  dbh.rollback
end
dbh['AutoCommit'] = true`}</pre>

    <h2 className="text-2xl font-bold mt-6">Disconnecting</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`dbh.disconnect`}</pre>

    <h2 className="text-2xl font-bold mt-6">Error Handling</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`rescue DBI::DatabaseError => e
  puts "Error code: #{e.err}"
  puts "Error message: #{e.errstr}"
  dbh.rollback
ensure
  dbh.disconnect if dbh`}</pre>

    <h2 className="text-2xl font-bold mt-6">Driver-specific Functions</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`puts dbh.func(:client_info)
puts dbh.func(:client_version)
puts dbh.func(:host_info)
puts dbh.func(:proto_info)
puts dbh.func(:server_info)`}</pre>
  </div>
);

export default RubyDBI;
