import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Title ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Groupware in Distributed System
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Jul, 2025</p>

    {/* Intro Section */}
    <section>
      <p className="text-lg leading-relaxed">
        Groupware in distributed systems is software designed to support collaboration among geographically 
        dispersed users, enhancing communication, coordination, and productivity across distributed environments.
      </p>
    </section>

    {/* What is Groupware */}
    <section>
      <h2 className="text-3xl font-bold mt-6">What is Groupware?</h2>
      <p className="leading-relaxed">
        Groupware is software that enables collaboration and communication among users working together, 
        regardless of location. It facilitates teamwork by providing tools to coordinate, share information, 
        and work on shared tasks in real-time or asynchronously.
      </p>
    </section>

    {/* Types of Groupware */}
    <section>
      <h2 className="text-3xl font-bold mt-6">Types of Groupware in Distributed Systems</h2>
      <ul className="list-disc ml-6 leading-relaxed space-y-2">
        <li>
          <strong>Collaborative Software:</strong> 
          <ul className="list-disc ml-6 space-y-1">
            <li>Real-Time Tools: Google Docs, Microsoft Office 365.</li>
            <li>Asynchronous Tools: Email, Trello, Asana.</li>
          </ul>
        </li>
        <li>
          <strong>Communication Tools:</strong> 
          <ul className="list-disc ml-6 space-y-1">
            <li>Messaging: Slack, Microsoft Teams.</li>
            <li>Video Conferencing: Zoom, Google Meet.</li>
          </ul>
        </li>
        <li>
          <strong>Coordination Tools:</strong> 
          <ul className="list-disc ml-6 space-y-1">
            <li>Project Management: Jira, Monday.com.</li>
            <li>Scheduling: Google Calendar, Microsoft Outlook.</li>
          </ul>
        </li>
        <li>
          <strong>Document Management Systems:</strong> 
          <ul className="list-disc ml-6 space-y-1">
            <li>Document Sharing & Version Control: Dropbox, SharePoint.</li>
            <li>Collaborative Editing: Google Docs, Microsoft Word Online.</li>
          </ul>
        </li>
      </ul>
    </section>

    {/* Features */}
    <section>
      <h2 className="text-3xl font-bold mt-6">Features of Groupware</h2>
      <ul className="list-disc ml-6 leading-relaxed space-y-2">
        <li><strong>Communication:</strong> Instant messaging, video conferencing.</li>
        <li><strong>Coordination:</strong> Task management, calendar integration.</li>
        <li><strong>Document Collaboration:</strong> Real-time editing, version control.</li>
        <li><strong>Integration:</strong> Cross-platform support, third-party integration.</li>
        <li><strong>Security:</strong> User authentication, data encryption.</li>
      </ul>
    </section>

    {/* Challenges */}
    <section>
      <h2 className="text-3xl font-bold mt-6">Challenges of Groupware</h2>
      <ul className="list-disc ml-6 leading-relaxed space-y-2">
        <li><strong>Scalability:</strong> Performance issues with growing users and data.</li>
        <li><strong>Latency & Synchronization:</strong> Network delays, data consistency.</li>
        <li><strong>Security & Privacy:</strong> Data breaches, regulatory compliance.</li>
        <li><strong>User Experience:</strong> Complex interfaces, training requirements.</li>
        <li><strong>Integration:</strong> Compatibility and standardization issues.</li>
      </ul>
    </section>

    {/* Use Cases */}
    <section>
      <h2 className="text-3xl font-bold mt-6">Use Cases of Groupware</h2>
      <ul className="list-disc ml-6 leading-relaxed space-y-2">
        <li><strong>Enterprise Collaboration:</strong> Team projects, internal communication.</li>
        <li><strong>Remote Work:</strong> Work-from-home support, virtual offices.</li>
        <li><strong>Academic & Research:</strong> Collaborative research, course management.</li>
        <li><strong>Community & Social:</strong> Online communities, social networking.</li>
      </ul>
    </section>

    {/* Best Practices */}
    <section>
      <h2 className="text-3xl font-bold mt-6">Best Practices for Implementing Groupware</h2>
      <ul className="list-disc ml-6 leading-relaxed space-y-2">
        <li><strong>User Training:</strong> Comprehensive training and ongoing support.</li>
        <li><strong>Integration:</strong> Ensure compatibility and use APIs for smooth workflows.</li>
        <li><strong>Scalability:</strong> Design systems to grow with organizational needs, monitor performance.</li>
        <li><strong>Security:</strong> Use robust security measures and ensure regulatory compliance.</li>
        <li><strong>User-Centric Design:</strong> Focus on usability and gather continuous feedback.</li>
      </ul>
    </section>

    {/* Conclusion */}
    <section>
      <h2 className="text-3xl font-bold mt-6">Conclusion</h2>
      <p className="leading-relaxed">
        Groupware is vital in distributed systems for enabling collaboration among geographically 
        dispersed teams. It improves productivity, streamlines workflows, and supports effective 
        communication and coordination. Adopting best practices ensures secure, scalable, and 
        efficient groupware deployment in distributed environments.
      </p>
    </section>

  </div>
);

export default Home;
