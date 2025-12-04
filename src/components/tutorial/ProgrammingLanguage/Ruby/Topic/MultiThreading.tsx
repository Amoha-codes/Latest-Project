import React from "react";

const RubyMultithreading: React.FC = () => (
  <div className="mt-20 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-3">
      Ruby – Multithreading
    </h1>

    <p>
      Traditional programs have a single thread of execution, executing statements sequentially. 
      A <strong>multithreaded program</strong> has multiple threads running, which can execute in parallel on multicore CPUs or simulate parallelism on single-core machines.
      Ruby provides the <code>Thread</code> class for writing lightweight concurrent code.
    </p>

    <h2 className="text-2xl font-bold mt-6">Creating Threads</h2>
    <p>
      Use <code>Thread.new</code> to create a new thread and associate a block of code to execute.
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
      {`t1 = Thread.new { func1() }
t2 = Thread.new { func2() }
t1.join
t2.join`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Thread Lifecycle</h2>
    <p>
      Threads start running automatically when CPU resources are available. 
      Use <code>Thread.current</code> to get the current thread and <code>Thread.main</code> for the main thread. 
      <code>Thread.join</code> waits for a thread to finish.
    </p>

    <h2 className="text-2xl font-bold mt-6">Exceptions in Threads</h2>
    <p>
      Unhandled exceptions in threads other than the main thread stop that thread. 
      To propagate exceptions to exit the interpreter, set <code>Thread.abort_on_exception = true</code>.
    </p>

    <h2 className="text-2xl font-bold mt-6">Thread Variables</h2>
    <p>
      Threads can access variables in their scope. Local variables inside a thread are thread-local. 
      Thread-local variables can be accessed using the thread object as a hash:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
      {`Thread.current["mycount"] = count
puts t["mycount"]`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Thread Priorities</h2>
    <p>
      Threads have priorities. High-priority threads run before lower-priority ones. Use <code>priority</code> to set or query.
    </p>

    <h2 className="text-2xl font-bold mt-6">Thread Exclusion & Mutex</h2>
    <p>
      Use <code>Mutex</code> to synchronize access to shared data and avoid inconsistent states.
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
      {`mutex = Mutex.new
mutex.synchronize {
  count1 += 1
  count2 += 1
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Condition Variables & Deadlock</h2>
    <p>
      Use <code>ConditionVariable</code> to safely wait for resources while holding a mutex to avoid deadlocks.
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
      {`cv = ConditionVariable.new
mutex.synchronize { cv.wait(mutex) }
mutex.synchronize { cv.signal }`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Thread States</h2>
    <ul className="list-disc list-inside">
      <li>Runnable → run</li>
      <li>Sleeping → sleeping</li>
      <li>Aborting → aborting</li>
      <li>Terminated normally → false</li>
      <li>Terminated with exception → nil</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Thread Methods</h2>
    <p>
      Ruby provides <strong>class methods</strong> (like <code>Thread.abort_on_exception</code>) and <strong>instance methods</strong> for thread management.
    </p>
  </div>
);

export default RubyMultithreading;
