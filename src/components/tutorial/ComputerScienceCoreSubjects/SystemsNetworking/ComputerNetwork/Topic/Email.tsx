import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Electronic Mail ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Electronic Mail (Email)
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 15 Jul, 2025</p>

    {/* Introduction */}
    <p className="text-lg leading-relaxed">
      Electronic mail, commonly known as email, is a method of exchanging messages over the Internet.  
      Key components include:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Email Address:</strong> A unique identifier for each user, typically in the format <code>name@domain.com</code>.</li>
      <li><strong>Email Client:</strong> Software to send, receive, and manage emails, e.g., Gmail, Outlook, or Apple Mail.</li>
      <li><strong>Email Server:</strong> A system responsible for storing and forwarding emails to recipients.</li>
    </ul>

    {/* Sending an Email */}
    <h2 className="text-3xl font-bold mt-8">How to Send an Email</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Compose a new message in your email client.</li>
      <li>Enter the recipient's email address in the "To" field.</li>
      <li>Add a subject line summarizing the content.</li>
      <li>Write the body of the message.</li>
      <li>Attach any relevant files.</li>
      <li>Click "Send" to deliver the email to the recipient's server.</li>
    </ol>
    <p className="leading-relaxed">
      Additional features include cc (carbon copy), bcc (blind carbon copy), reply, reply all, and forward to manage conversations.
    </p>

    {/* Components of Email System */}
    <h2 className="text-3xl font-bold mt-8">Components of an Email System</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>User Agent (UA):</strong> Program used to send and receive emails, sometimes called a mail reader.</li>
      <li><strong>Message Transfer Agent (MTA):</strong> Transfers mail between systems. Uses SMTP for communication between MTAs.</li>
      <li><strong>Mailbox:</strong> File on the local hard drive that stores delivered emails. Accessible only to the mailbox owner.</li>
      <li><strong>Spool File:</strong> Stores outgoing emails. The UA appends outgoing mails here, and MTA extracts them for delivery.</li>
    </ul>

    {/* Mailing List */}
    <p className="leading-relaxed">
      Email supports aliases or mailing lists, where a single name can represent multiple email addresses. The system checks the alias database and delivers separate messages to each entry in the list.
    </p>

    {/* Services Provided */}
    <h2 className="text-3xl font-bold mt-8">Services Provided by Email</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Composition:</strong> Creating messages using any text editor.</li>
      <li><strong>Transfer:</strong> Sending emails from sender to recipient.</li>
      <li><strong>Reporting:</strong> Delivery confirmation to check if an email is delivered, lost, or rejected.</li>
      <li><strong>Displaying:</strong> Presenting emails in a readable form for the user.</li>
      <li><strong>Disposition:</strong> Recipient's actions on emails, such as saving, deleting before reading, or deleting after reading.</li>
    </ul>

    {/* Advantages and Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages of Email</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Fast and convenient global communication.</li>
      <li>Easy to store and search past messages.</li>
      <li>Send and receive attachments like documents, images, and videos.</li>
      <li>Cost-effective compared to traditional mail and fax.</li>
      <li>Available 24/7.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Disadvantages of Email</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Risk of spam and phishing attacks.</li>
      <li>Information overload from excessive emails.</li>
      <li>Reduced face-to-face communication and personal touch.</li>
      <li>Potential miscommunication due to lack of tone and body language.</li>
      <li>Technical issues like server outages can disrupt service.</li>
    </ul>

    {/* Conclusion */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      Email is a powerful communication tool. Using it responsibly—by keeping subject lines clear, following proper etiquette, and protecting against security threats—ensures effective and safe communication.
    </p>

  </div>
);

export default Home;
