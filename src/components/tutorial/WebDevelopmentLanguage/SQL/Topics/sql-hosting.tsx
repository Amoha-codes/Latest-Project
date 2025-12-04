import React from "react";

const SqlHosting: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL Hosting
      </h1>

      <p className="leading-relaxed">
        To store and retrieve data from a database, your web server must have access to a SQL-based database system.
        If your web server is hosted by an ISP, you will need an SQL hosting plan.
      </p>

      <h2 className="text-2xl font-bold pt-5">Popular SQL Hosting Databases</h2>

      <h3 className="text-xl font-semibold pt-3">MS SQL Server</h3>
      <p className="leading-relaxed">
        Microsoft SQL Server is a robust, full-featured database system ideal for high-traffic web sites. It provides powerful tools for managing data and security.
      </p>

      <h3 className="text-xl font-semibold pt-3">Oracle</h3>
      <p className="leading-relaxed">
        Oracle is another powerful database system, suitable for high-traffic websites. It is feature-rich and supports complex enterprise-level applications.
      </p>

      <h3 className="text-xl font-semibold pt-3">MySQL</h3>
      <p className="leading-relaxed">
        MySQL is a popular, robust, and full-featured database system for web sites. It is also an inexpensive alternative to Microsoft SQL Server or Oracle.
      </p>

      <h3 className="text-xl font-semibold pt-3">MS Access</h3>
      <p className="leading-relaxed">
        Microsoft Access is suitable for simple, low-traffic web applications. It is less powerful than MySQL, SQL Server, or Oracle, and not recommended for high-traffic sites.
      </p>
    </div>
  );
};

export default SqlHosting;
