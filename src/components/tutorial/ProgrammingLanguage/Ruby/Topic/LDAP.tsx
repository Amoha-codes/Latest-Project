import React from "react";

const RubyLdapGuide: React.FC = () => (
  <div className="mt-20 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-3">
      Ruby – LDAP Tutorial
    </h1>

    <h2 className="text-2xl font-bold mt-6">Introduction</h2>
    <p>
      Ruby/LDAP is an extension library for Ruby that provides interfaces to LDAP libraries like OpenLDAP, UMich LDAP, Netscape SDK, and ActiveDirectory. The API follows RFC1823.
    </p>

    <h2 className="text-2xl font-bold mt-6">Installation</h2>
    <p>Install Ruby/LDAP from <a href="https://sourceforge.net/">SourceForge</a>. Requirements:</p>
    <ul className="list-disc list-inside space-y-1">
      <li>Ruby 1.8.x (≥1.8.2 for ldap/control)</li>
      <li>OpenLDAP, Netscape SDK, or Windows LDAP (2003/XP)</li>
    </ul>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`$ ruby extconf.rb [--with-openldap1|--with-openldap2|--with-netscape|--with-wldap32]
$ make
$ make install`}</pre>

    <h2 className="text-2xl font-bold mt-6">Establish LDAP Connection</h2>
    <p>Two steps: create connection and bind.</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`conn = LDAP::Conn.new('localhost', LDAP::LDAP_PORT)
conn.bind('cn=root,dc=localhost,dc=localdomain', 'secret')
# Perform LDAP operations here
conn.unbind`}</pre>

    <h2 className="text-2xl font-bold mt-6">Adding an LDAP Entry</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`entry = [
  LDAP.mod(LDAP::LDAP_MOD_ADD, 'objectclass', ['top', 'person']),
  LDAP.mod(LDAP::LDAP_MOD_ADD, 'cn', ['Zara Ali']),
  LDAP.mod(LDAP::LDAP_MOD_ADD | LDAP::LDAP_MOD_BVALUES, 'sn', ['ttate','ALI',"zero\\000zero"])
]
conn.add("cn=Zara Ali,dc=localhost,dc=localdomain", entry)`}</pre>

    <h2 className="text-2xl font-bold mt-6">Modifying an LDAP Entry</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`mods = [
  LDAP.mod(LDAP::LDAP_MOD_REPLACE, 'sn', ['Mohtashim'])
]
conn.modify("cn=Zara Ali,dc=localhost,dc=localdomain", mods)`}</pre>

    <h2 className="text-2xl font-bold mt-6">Deleting an LDAP Entry</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`conn.delete("cn=Zara-Mohtashim,dc=localhost,dc=localdomain")`}</pre>

    <h2 className="text-2xl font-bold mt-6">Modifying the Distinguished Name (RDN)</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`conn.modrdn("cn=Zara Ali,dc=localhost,dc=localdomain", "cn=Zara Mohtashim", true)`}</pre>

    <h2 className="text-2xl font-bold mt-6">Performing a Search</h2>
    <p>Search scopes:</p>
    <ul className="list-disc list-inside space-y-1">
      <li><strong>LDAP_SCOPE_BASEM</strong> – base node only</li>
      <li><strong>LDAP_SCOPE_ONELEVEL</strong> – children of base node</li>
      <li><strong>LDAP_SCOPE_SUBTREE</strong> – base node + whole subtree</li>
    </ul>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`base = 'dc=localhost,dc=localdomain'
scope = LDAP::LDAP_SCOPE_SUBTREE
filter = '(objectclass=person)'
attrs = ['sn', 'cn']

conn.search(base, scope, filter, attrs) { |entry|
  p entry.dn
  p entry.attrs
  p entry.vals('sn')
  p entry.to_hash
}`}</pre>

    <h2 className="text-2xl font-bold mt-6">Handling Errors</h2>
    <p>
      Ruby/LDAP defines two exception classes:
    </p>
    <ul className="list-disc list-inside space-y-1">
      <li><strong>LDAP::Error</strong> – raised by new, bind, unbind</li>
      <li><strong>LDAP::ResultError</strong> – raised by add, modify, delete, search</li>
    </ul>
  </div>
);

export default RubyLdapGuide;
