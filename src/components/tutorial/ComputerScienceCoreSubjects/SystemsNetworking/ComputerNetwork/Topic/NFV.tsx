import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Network Functions Virtualization (NFV) ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Network Functions Virtualization (NFV)
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 06 Oct, 2025</p>

    <p className="text-lg leading-relaxed">
      Network Functions Virtualization (NFV) virtualizes traditional network functions—like 
      routing, load balancing, and firewalls—so they run as software on standard servers instead 
      of dedicated hardware. NFV allows service providers to deploy new network functions in 
      hours instead of months, using cost-effective generic servers.
    </p>

    {/* NFV Architecture */}
    <h2 className="text-3xl font-bold mt-8">NFV Architecture</h2>
    <p className="leading-relaxed">
      NFV replaces dedicated networking hardware with software-based functions running on virtual 
      machines. Its architecture consists of:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Virtualized Infrastructure:</strong> Hypervisors or container platforms that 
        abstract compute, storage, and networking resources.
      </li>
      <li>
        <strong>Virtual Network Functions (VNFs):</strong> Software that delivers functions like 
        routing, switching, and firewalls.
      </li>
      <li>
        <strong>Management and Orchestration (MANO):</strong> Framework responsible for 
        provisioning, automation, and overall network management.
      </li>
    </ul>

    {/* Working of NFV */}
    <h2 className="text-3xl font-bold mt-8">How NFV Works</h2>
    <p className="leading-relaxed">
      NFV software handles tasks like load balancing, routing, and firewall security. Network 
      engineers can automate the provisioning of virtual networks and program all components 
      using hypervisors or software-defined networking (SDN) controllers.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Virtualized Network Functions:</strong> Software on virtual machines performs 
        tasks such as routing, firewall security, and load balancing.
      </li>
      <li>
        <strong>Automation and Control:</strong> Provisioning and configuration are managed via 
        hypervisors or SDN controllers.
      </li>
    </ul>

    {/* Advantages of NFV */}
    <h2 className="text-3xl font-bold mt-8">Advantages of NFV</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Cost Savings:</strong> Uses generic servers with a pay-as-you-go model, reducing CAPEX and OPEX.</li>
      <li><strong>Faster Deployment:</strong> New services can be launched in hours instead of waiting for hardware installation.</li>
      <li><strong>Scalability:</strong> Networks can be scaled up or down quickly without extra hardware.</li>
      <li><strong>Simplified Management:</strong> Virtualized functions are easier to configure, update, and administer.</li>
      <li><strong>Flexibility:</strong> Supports multiple network functions (routing, firewall, load balancing) through software rather than dedicated hardware appliances.</li>
    </ul>

    {/* Risks of NFV */}
    <h2 className="text-3xl font-bold mt-8">Risks of NFV</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Weaker Physical Security:</strong> Virtualized components are more vulnerable than locked-down hardware in data centers.</li>
      <li><strong>Malware Spread:</strong> Malware can move quickly between virtual components running on the same server.</li>
      <li><strong>Reduced Visibility:</strong> Traditional monitoring tools may struggle to detect malicious traffic between virtual machines (east-west traffic).</li>
    </ul>

  </div>
);

export default Home;
