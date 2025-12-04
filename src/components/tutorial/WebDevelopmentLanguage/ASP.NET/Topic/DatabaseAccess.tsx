import React from "react";

const AspNetDatabaseAccess: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        ASP.NET - Database Access
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        ASP.NET provides easy access to various data sources such as:
      </p>

      <ul className="list-disc list-inside space-y-1">
        <li>Databases (Access, SQL Server, Oracle, MySQL)</li>
        <li>XML documents</li>
        <li>Business Objects</li>
        <li>Flat files</li>
      </ul>

      <p className="leading-relaxed">
        ASP.NET simplifies database interaction using <strong>ADO.NET</strong>, 
        which bridges between the front-end controls and backend data sources. 
        It handles connections, queries, data retrieval, and manipulation.
      </p>

      {/* Retrieve and Display Data */}
      <h2 className="text-2xl font-bold">Retrieve and Display Data</h2>
      <p className="leading-relaxed">
        To display data, two types of controls are generally used:
      </p>

      <ul className="list-disc list-inside space-y-1">
        <li>
          <strong>Data Source Control</strong> — manages database connection, 
          selection, paging, and caching (e.g., <code>SqlDataSource</code>).
        </li>
        <li>
          <strong>Data View Control</strong> — binds, displays, and manipulates data (e.g., <code>GridView</code>).
        </li>
      </ul>

      <p className="leading-relaxed">
        In this example, we use an Access database named 
        <code>ASPDotNetStepByStep.mdb</code> containing the table 
        <code>DotNetReferences</code> with columns:
      </p>

      <ul className="list-disc list-inside space-y-1">
        <li>ID</li>
        <li>Title</li>
        <li>AuthorFirstName</li>
        <li>AuthorLastName</li>
        <li>Topic</li>
        <li>Publisher</li>
      </ul>

      {/* SqlDataSource Example */}
      <h2 className="text-2xl font-bold">SqlDataSource Control</h2>
      <p className="leading-relaxed">
        The <code>SqlDataSource</code> control handles connection and selection of data.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<asp:SqlDataSource 
    ID="SqlDataSource1" 
    runat="server" 
    ConnectionString="<%$ ConnectionStrings:ASPDotNetStepByStepConnectionString %>" 
    ProviderName="<%$ ConnectionStrings:ASPDotNetStepByStepConnectionString.ProviderName %>" 
    SelectCommand="SELECT [Title], [AuthorLastName], [AuthorFirstName], [Topic] FROM [DotNetReferences]">
</asp:SqlDataSource>`}
      </pre>

      {/* GridView Example */}
      <h2 className="text-2xl font-bold">GridView Control</h2>
      <p className="leading-relaxed">
        The <code>GridView</code> control binds to the <code>SqlDataSource</code> 
        and formats the display of data.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<asp:GridView 
    ID="GridView1" 
    runat="server" 
    AutoGenerateColumns="False" 
    DataSourceID="SqlDataSource1" 
    CellPadding="4" 
    ForeColor="#333333" 
    GridLines="None">
    
    <Columns>
        <asp:BoundField DataField="Title" HeaderText="Title" SortExpression="Title" />
        <asp:BoundField DataField="AuthorLastName" HeaderText="AuthorLastName" SortExpression="AuthorLastName" />
        <asp:BoundField DataField="AuthorFirstName" HeaderText="AuthorFirstName" SortExpression="AuthorFirstName" />
        <asp:BoundField DataField="Topic" HeaderText="Topic" SortExpression="Topic" />
    </Columns>
    
    <RowStyle BackColor="#F7F6F3" ForeColor="#333333" />
    <AlternatingRowStyle BackColor="White" ForeColor="#284775" />
    <HeaderStyle BackColor="#5D7B9D" Font-Bold="True" ForeColor="White" />
    <FooterStyle BackColor="#5D7B9D" Font-Bold="True" ForeColor="White" />
    <PagerStyle BackColor="#284775" ForeColor="White" HorizontalAlign="Center" />
    <SelectedRowStyle BackColor="#E2DED6" Font-Bold="True" ForeColor="#333333" />
    <EditRowStyle BackColor="#999999" />
</asp:GridView>`}
      </pre>

      {/* Steps Summary */}
      <h2 className="text-2xl font-bold">Steps to Display Data</h2>
      <ol className="list-decimal list-inside space-y-1">
        <li>Add a <code>SqlDataSource</code> control on the form.</li>
        <li>Configure the connection and save it.</li>
        <li>Select the columns and optionally configure WHERE, ORDER BY, INSERT, UPDATE, DELETE commands.</li>
        <li>Add a <code>GridView</code> control and bind it to the data source.</li>
        <li>Format the GridView using AutoFormat options.</li>
        <li>Run the application to see the data displayed.</li>
      </ol>

      {/* Conclusion */}
      <p className="leading-relaxed">
        ASP.NET makes database access easy by combining <code>SqlDataSource</code> 
        for managing data and <code>GridView</code> for displaying and manipulating it. 
        ADO.NET handles the underlying connection and commands.
      </p>
    </div>
  );
};

export default AspNetDatabaseAccess;
