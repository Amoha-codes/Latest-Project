import React from "react";

const AspNetCaching: React.FC = () => {
  const cachingConcepts = [
    "Caching stores frequently used data in memory for faster retrieval.",
    "Improves performance by avoiding repeated data processing or database calls.",
    "ASP.NET cache resides in server memory and can be accessed via HttpContext or Page.Cache.",
    "Cache is non-deterministic; it may expire, be removed, or not be cached depending on conditions."
  ];

  const cachingTypes = [
    "Output Caching: Stores rendered HTML pages or parts of pages to serve repeated requests quickly.",
    "Data Caching: Caches data from data sources, like databases or XML, until cache expires.",
    "Object Caching: Caches any object, such as controls, datasets, or custom objects.",
    "Class Caching: Compiled page or service assemblies are cached by CLR to avoid recompilation.",
    "Configuration Caching: Stores application-wide configuration information in memory."
  ];

  const outputCachingExample = `
<%@ OutputCache Duration="60" VaryByParam="txtname" %>

protected void btnmagic_Click(object sender, EventArgs e)
{
   Response.Write("<br><br>");
   Response.Write("<h2> Hello, " + this.txtname.Text + "</h2>");
}
`;

  const dataCachingExample = `
<asp:SqlDataSource ID="SqlDataSource1" runat="server"
   ConnectionString="<%$ ConnectionStrings: ASPDotNetStepByStepConnectionString %>"
   ProviderName="<%$ ConnectionStrings: ASPDotNetStepByStepConnectionString.ProviderName %>"
   SelectCommand="SELECT * FROM [DotNetReferences]"
   EnableCaching="true"
   CacheDuration="60">
</asp:SqlDataSource>

protected void Page_Load(object sender, EventArgs e)
{
   lbltime.Text = String.Format("Page posted at: {0}", DateTime.Now.ToLongTimeString());
}
`;

  const objectCachingExample = `
protected void Page_Load(object sender, EventArgs e)
{
   if (Cache["testitem"] == null)
   {
      DateTime testItem = DateTime.Now;
      Cache.Insert("testitem", testItem, null, DateTime.Now.AddSeconds(30), TimeSpan.Zero);
      lblinfo.Text = "Creating test item and storing for 30 seconds.<br/>";
   }
   else
   {
      DateTime testItem = (DateTime)Cache["testitem"];
      lblinfo.Text = "Retrieving test item from cache: " + testItem.ToString() + "<br/>";
   }
}
`;

  return (
    <div className="mt-20 space-y-8">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">ASP.NET - Data Caching</h1>

      {/* Introduction */}
      <div>
        <h2 className="text-2xl font-bold mb-2">What is Caching?</h2>
        <ul className="list-disc ml-6 space-y-1">
          {cachingConcepts.map((concept, index) => (
            <li key={index}>{concept}</li>
          ))}
        </ul>
      </div>

      {/* Types of Caching */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Types of Caching in ASP.NET</h2>
        <ul className="list-disc ml-6 space-y-1">
          {cachingTypes.map((type, index) => (
            <li key={index}>{type}</li>
          ))}
        </ul>
      </div>

      {/* Output Caching */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Output Caching</h2>
        <p className="leading-relaxed mb-2">
          Output caching stores rendered HTML to speed up repeated requests. You can vary the cache by parameters using the
          <code className="bg-gray-100 px-1 rounded">VaryByParam</code> attribute.
        </p>
        <pre className="bg-gray-100 p-4 rounded whitespace-pre-wrap">{outputCachingExample}</pre>
      </div>

      {/* Data Caching */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Data Caching</h2>
        <p className="leading-relaxed mb-2">
          Data caching caches data source controls to avoid repeated database hits. Enable caching using
          <code className="bg-gray-100 px-1 rounded">EnableCaching="true"</code> and set
          <code className="bg-gray-100 px-1 rounded">CacheDuration</code>.
        </p>
        <pre className="bg-gray-100 p-4 rounded whitespace-pre-wrap">{dataCachingExample}</pre>
      </div>

      {/* Object Caching */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Object Caching</h2>
        <p className="leading-relaxed mb-2">
          Object caching allows storing any object in server memory. You can use
          <code className="bg-gray-100 px-1 rounded">Cache["key"] = value</code> or the <code className="bg-gray-100 px-1 rounded">Insert()</code> method with
          expiration and dependency options.
        </p>
        <pre className="bg-gray-100 p-4 rounded whitespace-pre-wrap">{objectCachingExample}</pre>
      </div>

      {/* Summary */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Summary</h2>
        <p className="leading-relaxed">
          ASP.NET caching improves performance by storing frequently accessed data in memory. Output, data, and object caching
          techniques allow pages and controls to be served faster while reducing database and server load.
        </p>
      </div>
    </div>
  );
};

export default AspNetCaching;
