import React from "react";

const AspNetWebServices: React.FC = () => {
  const webServiceConcepts = [
    "A web service is a web-based functionality accessed using standard web protocols.",
    "Web service development has three main steps: Creating the web service, Creating a proxy, and Consuming the web service.",
    "Web services can be accessed by multiple applications without a UI.",
    "ASP.NET web services use SOAP protocol for data exchange."
  ];

  const creatingWebServiceExample = `
using System;
using System.Web.Services;

[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
public class StockService : WebService
{
    string[,] stocks = {
        {"RELIND", "Reliance Industries", "1060.15"},
        {"ICICI", "ICICI Bank", "911.55"},
        {"JSW", "JSW Steel", "1201.25"},
        {"WIPRO", "Wipro Limited", "1194.65"},
        {"SATYAM", "Satyam Computers", "91.10"}
    };

    [WebMethod]
    public string HelloWorld() {
        return "Hello World";
    }

    [WebMethod]
    public double GetPrice(string symbol) { 
        for (int i = 0; i < stocks.GetLength(0); i++) {
            if (string.Compare(symbol, stocks[i, 0], true) == 0)
                return Convert.ToDouble(stocks[i, 2]);
        }
        return 0;
    }

    [WebMethod]
    public string GetName(string symbol) {
        for (int i = 0; i < stocks.GetLength(0); i++) {
            if (string.Compare(symbol, stocks[i, 0], true) == 0)
                return stocks[i, 1];
        }
        return "Stock Not Found";
    }
}
`;

  const consumingWebServiceExample = `
<asp:Label ID="lblmessage" runat="server"></asp:Label>
<asp:Button ID="btnpostback" runat="server" Text="Post Back" OnClick="Button1_Click" />
<asp:Button ID="btnservice" runat="server" Text="Get Stock" OnClick="btnservice_Click" />

protected void Page_Load(object sender, EventArgs e)
{
    if (!IsPostBack)
        lblmessage.Text = "First Loading Time: " + DateTime.Now.ToLongTimeString();
    else
        lblmessage.Text = "PostBack at: " + DateTime.Now.ToLongTimeString();
}

protected void btnservice_Click(object sender, EventArgs e)
{
    StockService proxy = new StockService();
    lblmessage.Text = String.Format("Current SATYAM Price: {0}", proxy.GetPrice("SATYAM").ToString());
}
`;

  const proxyInfo = [
    "A proxy acts as a stand-in for the web service for client applications.",
    "It wraps client calls into SOAP requests and handles responses transparently.",
    "In Visual Studio, add a web reference to generate the proxy class.",
    "Include the proxy using `using localhost;` in your code-behind file."
  ];

  return (
    <div className="mt-20 space-y-8">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">ASP.NET - Web Services</h1>

      {/* Concepts */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Key Concepts</h2>
        <ul className="list-disc ml-6 space-y-1">
          {webServiceConcepts.map((concept, index) => (
            <li key={index}>{concept}</li>
          ))}
        </ul>
      </div>

      {/* Creating a Web Service */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Creating a Web Service</h2>
        <p className="leading-relaxed mb-2">
          A web service is a class containing methods accessible by other applications. For example, a StockService provides stock prices based on a symbol:
        </p>
        <pre className="bg-gray-100 p-4 rounded whitespace-pre-wrap">{creatingWebServiceExample}</pre>
      </div>

      {/* Consuming a Web Service */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Consuming a Web Service</h2>
        <p className="leading-relaxed mb-2">
          A web application can consume the service by creating a proxy and calling its methods. Example ASPX markup and code-behind:
        </p>
        <pre className="bg-gray-100 p-4 rounded whitespace-pre-wrap">{consumingWebServiceExample}</pre>
      </div>

      {/* Proxy */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Creating the Proxy</h2>
        <ul className="list-disc ml-6 space-y-1">
          {proxyInfo.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Summary */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Summary</h2>
        <p className="leading-relaxed">
          Web services in ASP.NET allow building reusable, network-accessible functionality. Clients communicate via proxies that handle SOAP messaging, enabling easy integration across applications.
        </p>
      </div>
    </div>
  );
};

export default AspNetWebServices;
