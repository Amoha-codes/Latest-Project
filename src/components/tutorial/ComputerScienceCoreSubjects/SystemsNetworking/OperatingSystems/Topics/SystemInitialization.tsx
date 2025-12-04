import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= What Happens When We Turn On Computer ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      What Happens When We Turn On a Computer?
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 22 Sep, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      When we press the power button, a sequence of highly coordinated events begins — 
      transforming an inactive electronic machine into a fully functional computer. 
      From hardware testing to firmware initialization, boot loader execution, and OS startup, 
      this entire sequence is known as the <strong>boot process</strong>.
    </p>

    <p className="leading-relaxed">
      The boot process usually happens so quickly that users rarely notice it, yet it forms 
      the foundation of modern computing.
    </p>

    {/* Steps of Boot Process */}
    <h2 className="text-3xl font-bold mt-8">Steps of the Boot Process</h2>

    {/* 1. Power Supply Initialization */}
    <h3 className="text-2xl font-semibold mt-4">1. Power Supply Initialization</h3>
    <p className="leading-relaxed">
      The process begins when the Power Supply Unit (PSU) sends stable electrical power to 
      key components such as:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Motherboard</li>
      <li>CPU (Processor)</li>
      <li>RAM (Memory)</li>
      <li>Hard Drive / SSD</li>
      <li>Cooling Fans</li>
    </ul>

    <p className="leading-relaxed">
      At this stage, hardware components receive safe and stable voltage to operate properly.
    </p>

    {/* 2. BIOS / UEFI + POST */}
    <h3 className="text-2xl font-semibold mt-4">2. BIOS / UEFI Startup and POST</h3>
    <p className="leading-relaxed">
      The computer's firmware — <strong>BIOS</strong> or <strong>UEFI</strong> — takes control. 
      It performs:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>POST (Power-On Self-Test):</strong> Tests whether RAM, CPU, storage, and 
        graphics hardware are functioning.
      </li>
      <li>
        <strong>Error Handling:</strong> Displays messages or emits beep codes if components fail.
      </li>
      <li>
        <strong>Hardware Initialization:</strong> Detects and configures connected devices.
      </li>
    </ul>

    {/* 3. Boot Loader Loading */}
    <h3 className="text-2xl font-semibold mt-4">3. Loading the Boot Loader</h3>
    <p className="leading-relaxed">
      After POST, BIOS/UEFI searches for a bootable device in the configured boot order 
      (SSD, HDD, USB, DVD, etc.).
    </p>

    <p className="leading-relaxed">
      In older systems, BIOS reads the <strong>Master Boot Record (MBR)</strong>.  
      Modern systems use <strong>UEFI + GPT</strong> and look for the 
      <strong> EFI System Partition (ESP)</strong>.
    </p>

    <p className="leading-relaxed">
      This region contains a small program called the <strong>boot loader</strong>.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>GRUB / LILO → Linux</li>
      <li>Windows Boot Manager → Windows</li>
    </ul>

    <p className="leading-relaxed">
      The boot loader's job is to <strong>load the operating system kernel</strong> into memory.
    </p>

    {/* 4. Kernel + Init */}
    <h3 className="text-2xl font-semibold mt-4">4. Kernel and Init Process</h3>
    <p className="leading-relaxed">
      The OS kernel is loaded into RAM. It performs:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>CPU, memory, and hardware management</li>
      <li>Driver initialization</li>
      <li>Preparing user space</li>
    </ul>

    <p className="leading-relaxed">
      The kernel finally starts the <strong>init</strong> or <strong>systemd</strong> process, 
      which sets the system runlevel.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Runlevel 3 → Multiuser (command-line)</li>
      <li>Runlevel 5 → Multiuser + GUI</li>
    </ul>

    {/* 5. System Services */}
    <h3 className="text-2xl font-semibold mt-4">5. Starting System Services and Daemons</h3>
    <p className="leading-relaxed">
      The init/systemd process starts background services such as:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Networking</li>
      <li>Printing services</li>
      <li>Security services</li>
      <li>Graphical display manager (X/Wayland)</li>
    </ul>

    <p className="leading-relaxed">
      The system now displays either a login prompt or a full graphical login screen.
    </p>

    {/* 6. User Login */}
    <h3 className="text-2xl font-semibold mt-4">6. User Login and Desktop Environment</h3>
    <p className="leading-relaxed">
      After a successful login, the OS loads the desktop environment such as:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Windows Desktop</li>
      <li>macOS Finder</li>
      <li>Linux GNOME, KDE, XFCE</li>
    </ul>

    <p className="leading-relaxed">
      This provides a full GUI for interacting with applications and hardware.
    </p>

    {/* BIOS/UEFI Functions */}
    <h2 className="text-3xl font-bold mt-8">Functions of BIOS / UEFI During Boot</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>POST:</strong> Tests hardware before OS loads.</li>
      <li><strong>MBR/GPT Handling:</strong> Locates and loads the boot loader.</li>
      <li><strong>Init Selection:</strong> Determines system run level.</li>
      <li><strong>System Configuration:</strong> Boot order, CPU/RAM settings, time/date.</li>
      <li><strong>Security:</strong> Secure Boot, passwords, TPM support.</li>
    </ul>

  </div>
);

export default Home;
