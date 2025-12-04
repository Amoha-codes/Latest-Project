import React from "react";

const RubySMTP: React.FC = () => (
  <div className="mt-20 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-3">
      Ruby – Sending Email using SMTP
    </h1>

    <p>
      Simple Mail Transfer Protocol (SMTP) handles sending and routing email
      between mail servers. Ruby provides <code>Net::SMTP</code> class to send
      emails.
    </p>

    <h2 className="text-2xl font-bold mt-6">Basic SMTP Example</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md font-mono dark:text-gray-100">{`require 'net/smtp'

message = <<MESSAGE_END
From: Private Person <me@fromdomain.com>
To: A Test User <test@todomain.com>
Subject: SMTP e-mail test

This is a test e-mail message.
MESSAGE_END

Net::SMTP.start('localhost') do |smtp|
  smtp.send_message message, 'me@fromdomain.com', 'test@todomain.com'
end`}</pre>

    <h2 className="text-2xl font-bold mt-6">Connecting to a Remote SMTP Server</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md font-mono dark:text-gray-100">{`Net::SMTP.start('mail.your-domain.com', 25, 'localhost', 'username', 'password', :plain)`}</pre>

    <h2 className="text-2xl font-bold mt-6">Sending HTML Email</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md font-mono dark:text-gray-100">{`require 'net/smtp'

message = <<MESSAGE_END
From: Private Person <me@fromdomain.com>
To: A Test User <test@todomain.com>
MIME-Version: 1.0
Content-type: text/html
Subject: SMTP e-mail test

This is an e-mail message to be sent in HTML format

<b>This is HTML message.</b>
<h1>This is headline.</h1>
MESSAGE_END

Net::SMTP.start('localhost') do |smtp|
   smtp.send_message message, 'me@fromdomain.com', 'test@todomain.com'
end`}</pre>

    <h2 className="text-2xl font-bold mt-6">Sending Attachments</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md font-mono dark:text-gray-100">{`require 'net/smtp'

filename = "/tmp/test.txt"
filecontent = File.read(filename)
encodedcontent = [filecontent].pack("m") # base64

marker = "AUNIQUEMARKER"
body = "This is a test email to send an attachment."

part1 = <<EOF
From: Private Person <me@fromdomain.net>
To: A Test User <test@todomain.com>
Subject: Sending Attachment
MIME-Version: 1.0
Content-Type: multipart/mixed; boundary=#{marker}
--#{marker}
EOF

part2 = <<EOF
Content-Type: text/plain
Content-Transfer-Encoding:8bit

#{body}
--#{marker}
EOF

part3 = <<EOF
Content-Type: multipart/mixed; name="#{filename}"
Content-Transfer-Encoding:base64
Content-Disposition: attachment; filename="#{filename}"

#{encodedcontent}
--#{marker}--
EOF

mailtext = part1 + part2 + part3

begin
   Net::SMTP.start('localhost') do |smtp|
      smtp.sendmail(mailtext, 'me@fromdomain.net', ['test@todomain.com'])
   end
rescue Exception => e
   print "Exception occurred: " + e
end`}</pre>

    <h2 className="text-2xl font-bold mt-6">Notes</h2>
    <ul className="list-disc list-inside space-y-1">
      <li>
        <strong>From</strong>, <strong>To</strong>, and <strong>Subject</strong> headers are required.
      </li>
      <li>
        For HTML emails, set <code>Content-type: text/html</code> and
        <code>MIME-Version: 1.0</code>.
      </li>
      <li>
        For attachments, use <code>multipart/mixed</code> content type and base64
        encode the file.
      </li>
      <li>
        Multiple recipients can be specified as an array.
      </li>
    </ul>
  </div>
);

export default RubySMTP;
