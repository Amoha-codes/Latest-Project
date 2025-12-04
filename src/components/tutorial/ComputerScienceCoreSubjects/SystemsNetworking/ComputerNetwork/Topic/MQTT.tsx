import React from "react";

const MQTTTheory: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= MQTT ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Message Queue Telemetry Transport Protocol (MQTT)
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 15 Jul, 2025</p>

    {/* Introduction */}
    <p className="text-lg leading-relaxed">
      MQTT (Message Queuing Telemetry Transport) is a lightweight messaging protocol designed for low-bandwidth, high-latency environments, making it ideal for Internet of Things (IoT) devices. It uses a TCP-based publish-subscribe model to enable communication between multiple devices efficiently and reliably.
    </p>

    {/* Publish-Subscribe Model */}
    <h2 className="text-3xl font-bold mt-6">Publish-Subscribe Model</h2>
    <p className="leading-relaxed">
      In MQTT, clients communicate indirectly through a central broker. Clients can be publishers (sending messages) or subscribers (receiving messages) or both. The broker manages message distribution, delivering messages from publishers to all subscribed clients based on topics. It also maintains session information, including missed messages and subscriptions.
    </p>

    {/* Working of MQTT */}
    <h2 className="text-3xl font-bold mt-6">Working of MQTT</h2>
    <p className="leading-relaxed">
      MQTT operates on a pub/sub model rather than direct client-server communication. Publishers send messages to topics on the broker. Subscribers receive messages from the topics they are subscribed to. The broker ensures message delivery even if clients disconnect temporarily, using message buffering. MQTT clients range from microcontrollers to cloud-based servers.
    </p>

    {/* Characteristics */}
    <h2 className="text-3xl font-bold mt-6">Characteristics of MQTT</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Lightweight:</strong> Minimal bandwidth and processing overhead.</li>
      <li><strong>Quality of Service (QoS):</strong> Levels 0–2 to ensure message delivery.</li>
      <li><strong>Retained Messages:</strong> Broker stores the last message on a topic for new subscribers.</li>
      <li><strong>Last Will and Testament (LWT):</strong> Detects client failures and notifies subscribers.</li>
      <li><strong>Security:</strong> Supports TLS encryption and authentication (username/password, certificates).</li>
    </ul>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-6">Advantages of MQTT</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Supports one-to-many, many-to-one, and many-to-many communication.</li>
      <li>Bi-directional communication; clients can publish and subscribe simultaneously.</li>
      <li>Lightweight and efficient for low-bandwidth devices.</li>
      <li>Fast and reliable message delivery.</li>
      <li>Small packet sizes reduce network usage and power consumption.</li>
      <li>Supports secure communication via TLS on port 8883 (unencrypted default: 1883).</li>
    </ul>

    {/* Disadvantages */}
    <h2 className="text-3xl font-bold mt-6">Disadvantages of MQTT</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Slower send cycles compared to protocols like CoAP.</li>
      <li>Resource discovery depends on topic subscriptions rather than a structured system.</li>
      <li>Requires TLS/SSL for secure transmission; otherwise, encryption is absent.</li>
      <li>Building globally scalable MQTT networks can be challenging.</li>
    </ul>

    {/* Topics */}
    <h2 className="text-3xl font-bold mt-6">MQTT Topics and Wildcards</h2>
    <p className="leading-relaxed">
      MQTT topics are UTF-8 strings used by the broker to route messages to clients. Topics are hierarchical, with levels separated by a forward slash (/). Topics and levels are case-sensitive.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Single-Level Wildcard (+):</strong> Replaces one level. Example: <code>home/+/table</code> subscribes to all tables in the house.</li>
      <li><strong>Multi-Level Wildcard (#):</strong> Replaces multiple levels. Example: <code>home/groundfloor/#</code> subscribes to all objects on the ground floor.</li>
    </ul>

    {/* Example JavaScript Implementation */}
    <h2 className="text-3xl font-bold mt-6">Example: MQTT Publish-Subscribe in JavaScript</h2>
    <pre className="bg-gray-400 p-4 rounded-lg overflow-x-auto text-sm">
{`// Import MQTT
var mqtt = require('mqtt');

// Create client instance
var client = mqtt.connect({ clientId: "001" });

// Define constants
var topic = "home/kitchen/table";
var message = "Table inside the kitchen";
var options = { retain: false, qos: 1 };

// On successful connection
client.on('connect', function () {
    console.log("Connected: ", client.connected);
    if (client.connected) {
        console.log("Publishing on topic: ", topic);
        client.publish(topic, message, options);
    }
});

// On connectivity error
client.on('error', function (error) {
    console.log("Connection error: ", error);
});

// On receiving message
client.on('message', function (topic, message) {
    console.log("Received message: ", message.toString(), "on topic: ", topic);
    client.end();
});

function init() {
    console.log("Subscribing to topic");
    client.subscribe(topic, { qos: 1 });
}

// Start
init();`}
    </pre>
  </div>
);

export default MQTTTheory;
