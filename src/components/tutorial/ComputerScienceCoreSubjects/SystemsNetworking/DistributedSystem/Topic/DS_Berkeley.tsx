import React from 'react';

const BerkeleyAlgorithm: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Berkeley's Algorithm ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Berkeley's Algorithm
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 17 Sep, 2025</p>

    {/* Introduction */}
    <p className="text-lg leading-relaxed">
      Berkeley's Algorithm is a clock synchronization technique used in distributed systems. 
      It assumes that individual machines may not have accurate time sources or access to a UTC server. 
      The algorithm uses a master node to coordinate synchronization with all other nodes (slaves) in the network.
    </p>

    {/* Algorithm Steps */}
    <h2 className="text-3xl font-bold mt-8">Algorithm Steps</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>A master node is selected using a leader election algorithm; all other nodes act as slaves.</li>
      <li>The master periodically queries slave nodes to fetch their clock times (using a method similar to Cristian's algorithm).</li>
      <li>The master calculates the average difference between its own clock and the slave clocks, then adjusts its time and broadcasts the synchronized time to all nodes.</li>
    </ol>

    {/* Pseudocode */}
    <h2 className="text-3xl font-bold mt-8">Pseudocode</h2>
    <pre className="bg-gray-400 p-4 rounded-lg overflow-x-auto text-sm">
{`total_diff = 0
n = number of nodes (master + clients)

for each node i:
    receive clock_time[i]

master_time = get_system_time()

for each node i:
    time_diff[i] = clock_time[i] - master_time
    total_diff += time_diff[i]

average_diff = total_diff / n
adjusted_master_time = master_time + average_diff
broadcast adjusted_master_time to all nodes

for each node i:
    set_system_time(adjusted_master_time)`}
    </pre>

    {/* Scope for Improvement */}
    <h2 className="text-3xl font-bold mt-8">Scope for Improvement</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Improves upon Cristian's algorithm by averaging clocks across all nodes.</li>
      <li>Significant outliers can be ignored to improve accuracy.</li>
      <li>A backup master node can take over if the primary master fails.</li>
      <li>Broadcasting relative time differences instead of absolute times can reduce latency effects.</li>
    </ul>

    {/* Features */}
    <h2 className="text-3xl font-bold mt-8">Features of Berkeley's Algorithm</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Centralized time coordinator (master node) maintains global time.</li>
      <li>Clock adjustment: each client adjusts its clock based on the coordinator.</li>
      <li>Average calculation reduces the effect of clock drift.</li>
      <li>Fault-tolerant: backup coordinators can handle failures.</li>
      <li>Accurate time synchronization across all nodes.</li>
      <li>Scalable: can handle large networks; master node can be replicated.</li>
      <li>Security: authentication and encryption protect time information.</li>
    </ul>

    {/* Python Master Script */}
    <h2 className="text-3xl font-bold mt-8">Python Master Node Example</h2>
    <pre className="bg-gray-400 p-4 rounded-lg overflow-x-auto text-sm">
{`# Python3 program: Master Clock Server
import threading, socket, datetime, time
from dateutil import parser

client_data = {}

def startReceivingClockTime(connector, address):
    while True:
        clock_time_string = connector.recv(1024).decode()
        clock_time = parser.parse(clock_time_string)
        clock_time_diff = datetime.datetime.now() - clock_time
        client_data[address] = {
            "clock_time": clock_time,
            "time_difference": clock_time_diff,
            "connector": connector
        }
        print("Client Data updated with:", address)
        time.sleep(5)

def startConnecting(master_server):
    while True:
        master_slave_connector, addr = master_server.accept()
        slave_address = f"{addr[0]}:{addr[1]}"
        print(slave_address + " got connected successfully")
        threading.Thread(target=startReceivingClockTime,
                         args=(master_slave_connector, slave_address)).start()

def getAverageClockDiff():
    time_difference_list = [client['time_difference'] for client in client_data.values()]
    sum_diff = sum(time_difference_list, datetime.timedelta(0))
    return sum_diff / len(client_data)

def synchronizeAllClocks():
    while True:
        print("New synchronization cycle started.")
        if client_data:
            avg_diff = getAverageClockDiff()
            for client_addr, client in client_data.items():
                try:
                    synchronized_time = datetime.datetime.now() + avg_diff
                    client['connector'].send(str(synchronized_time).encode())
                except Exception as e:
                    print("Error sending time to", client_addr)
        else:
            print("No client data.")
        time.sleep(5)

def initiateClockServer(port=8080):
    master_server = socket.socket()
    master_server.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    master_server.bind(('', port))
    master_server.listen(10)
    threading.Thread(target=startConnecting, args=(master_server,)).start()
    threading.Thread(target=synchronizeAllClocks).start()

if __name__ == '__main__':
    initiateClockServer(port=8080)`}
    </pre>

    {/* Python Slave Script */}
    <h2 className="text-3xl font-bold mt-8">Python Slave Node Example</h2>
    <pre className="bg-gray-400 p-4 rounded-lg overflow-x-auto text-sm">
{`# Python3 program: Slave Client
import threading, socket, datetime, time
from dateutil import parser

def startSendingTime(slave_client):
    while True:
        slave_client.send(str(datetime.datetime.now()).encode())
        print("Recent time sent successfully")
        time.sleep(5)

def startReceivingTime(slave_client):
    while True:
        synchronized_time = parser.parse(slave_client.recv(1024).decode())
        print("Synchronized time at client:", synchronized_time)

def initiateSlaveClient(port=8080):
    slave_client = socket.socket()
    slave_client.connect(('127.0.0.1', port))
    threading.Thread(target=startSendingTime, args=(slave_client,)).start()
    threading.Thread(target=startReceivingTime, args=(slave_client,)).start()

if __name__ == '__main__':
    initiateSlaveClient(port=8080)`}
    </pre>

    <p className="leading-relaxed">
      <strong>Note:</strong> The scripts above simulate Berkeley's Algorithm. Port availability may vary; adjust if necessary.
    </p>

  </div>
);

export default BerkeleyAlgorithm;
