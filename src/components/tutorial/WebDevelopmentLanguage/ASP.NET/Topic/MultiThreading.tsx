import React from "react";

const AspNetMultithreading: React.FC = () => {
  const threadConcepts = [
    "A thread is an execution path of a program. Multiple threads allow concurrent execution of tasks.",
    "Threads are lightweight processes that improve efficiency for I/O or CPU-intensive tasks.",
    "In .NET, threads are managed via the System.Threading namespace.",
    "Threads have states: Unstarted, Ready, Not Runnable (sleep/wait/blocked), and Dead.",
    "Thread priority can be set using the Priority property: Highest, AboveNormal, Normal, BelowNormal, Lowest."
  ];

  const threadProperties = [
    "CurrentThread: Returns the currently running thread.",
    "IsAlive: Indicates whether the thread is running.",
    "IsBackground: Determines if the thread is a background thread.",
    "ManagedThreadId: Unique identifier for the thread.",
    "Name: Get or set the thread's name.",
    "Priority: Get or set scheduling priority."
  ];

  const threadMethods = [
    "Start(): Starts a thread.",
    "Sleep(milliseconds): Pauses the thread for a period.",
    "Abort(): Aborts the thread, raising a ThreadAbortException.",
    "Join(): Blocks calling thread until this thread terminates.",
    "Interrupt(): Interrupts a thread in WaitSleepJoin state."
  ];

  const multithreadingExample = `
<asp:Label ID="lblmessage" runat="server" Text="Label"></asp:Label>

using System;
using System.Threading;

namespace threaddemo
{
    public partial class _Default : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            ThreadStart childThreadStart = new ThreadStart(ChildThreadCall);
            Response.Write("Child Thread Started <br/>");

            Thread child = new Thread(childThreadStart);
            child.Start();

            Response.Write("Main sleeping for 2 seconds...<br/>");
            Thread.Sleep(2000);

            Response.Write("<br/>Main aborting child thread<br/>");
            child.Abort();
        }

        public void ChildThreadCall()
        {
            try
            {
                lblmessage.Text = "<br/>Child thread started <br/>";
                lblmessage.Text += "Child Thread: Counting to 10";

                for (int i = 0; i < 10; i++)
                {
                    Thread.Sleep(500);
                    lblmessage.Text += "<br/>In Child thread</br>";
                }

                lblmessage.Text += "<br/>Child thread finished";
            }
            catch (ThreadAbortException e)
            {
                lblmessage.Text += "<br/>Child thread - exception";
            }
            finally
            {
                lblmessage.Text += "<br/>Child thread - unable to catch the exception";
            }
        }
    }
}
`;

  return (
    <div className="mt-20 space-y-8">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">ASP.NET - Multi Threading</h1>

      {/* Concepts */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Key Concepts</h2>
        <ul className="list-disc ml-6 space-y-1">
          {threadConcepts.map((concept, index) => (
            <li key={index}>{concept}</li>
          ))}
        </ul>
      </div>

      {/* Thread Properties */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Important Thread Properties</h2>
        <ul className="list-disc ml-6 space-y-1">
          {threadProperties.map((prop, index) => (
            <li key={index}>{prop}</li>
          ))}
        </ul>
      </div>

      {/* Thread Methods */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Important Thread Methods</h2>
        <ul className="list-disc ml-6 space-y-1">
          {threadMethods.map((method, index) => (
            <li key={index}>{method}</li>
          ))}
        </ul>
      </div>

      {/* Example */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Example: Creating and Aborting a Thread</h2>
        <p className="leading-relaxed mb-2">
          The following example shows a main thread starting a child thread, letting it run, and then aborting it after 2 seconds:
        </p>
        <pre className="bg-gray-100 p-4 rounded whitespace-pre-wrap">{multithreadingExample}</pre>
      </div>

      {/* Observation */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Observations</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>When the page loads, a new thread starts executing ChildThreadCall().</li>
          <li>The main thread sleeps for 2 seconds while the child thread executes.</li>
          <li>The child thread is aborted by the main thread, raising ThreadAbortException.</li>
          <li>Child thread messages are displayed via the Label control, main thread messages via Response.Write().</li>
        </ul>
      </div>
    </div>
  );
};

export default AspNetMultithreading;
