import React from "react";

const AspNetSecurity: React.FC = () => {
  const securityConcepts = [
    "Authentication: Verifies the identity of the user. ASP.NET supports Windows, Forms, Passport, and Custom authentication.",
    "Authorization: Defines roles and grants access to users based on roles.",
    "Confidentiality: Ensures secure data transmission by encrypting communication channels.",
    "Integrity: Ensures that data is not tampered with during transmission, often implemented with digital signatures."
  ];

  const formsAuthSteps = [
    "Edit web.config to set authentication mode to 'Forms' and define login page URL.",
    "Create a login page (e.g., Login.aspx) and implement authentication logic.",
    "Use FormsAuthentication class to log in users and manage authentication tickets.",
    "Optionally, use Web Site Administration Tool to create users and roles without code.",
    "Add LoginStatus control to display login/logout links dynamically.",
    "Add LoginView control to customize content based on user's login status.",
    "Add CreateUserWizard control on CreateAccount.aspx to allow users to register.",
    "Add PasswordRecovery control on PasswordRecovery.aspx for forgotten passwords.",
    "Add ChangePassword control on ChangePassword.aspx for users to update passwords."
  ];

  const iisSecurity = [
    "SSL (Secure Socket Layer) encrypts data between client and server.",
    "HTTPS indicates a secure connection, and a lock icon is displayed in the browser.",
    "A digital certificate from a trusted CA is required to enable SSL.",
    "Certificate strength varies with key length: 40-bit (basic), 56-bit (stronger), 128-bit (very strong)."
  ];

  return (
    <div className="mt-20 space-y-8">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        ASP.NET - Security
      </h1>

      {/* Introduction */}
      <p className="leading-relaxed">
        Security in ASP.NET ensures that your web applications are protected
        from unauthorized access, data breaches, and tampering. The main aspects
        include authentication, authorization, confidentiality, and integrity.
      </p>

      {/* Key Concepts */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Key Security Concepts</h2>
        <ul className="list-disc ml-6 space-y-1">
          {securityConcepts.map((concept, index) => (
            <li key={index}>{concept}</li>
          ))}
        </ul>
      </div>

      {/* Forms-Based Authentication */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Forms-Based Authentication</h2>
        <p className="leading-relaxed mb-2">
          Forms authentication allows users to log in through a web form and
          provides flexible user management and role-based access.
        </p>
        <ul className="list-disc ml-6 space-y-1">
          {formsAuthSteps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>

      {/* IIS Authentication & SSL */}
      <div>
        <h2 className="text-2xl font-bold mb-2">IIS Authentication & SSL</h2>
        <p className="leading-relaxed mb-2">
          Secure communication between client and server is essential. SSL
          ensures data confidentiality and integrity.
        </p>
        <ul className="list-disc ml-6 space-y-1">
          {iisSecurity.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Summary */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Summary</h2>
        <p className="leading-relaxed">
          ASP.NET provides a comprehensive security framework, including
          authentication, authorization, and secure communication using SSL.
          With built-in controls like Login, LoginView, CreateUserWizard,
          PasswordRecovery, and ChangePassword, implementing robust security
          becomes straightforward.
        </p>
      </div>
    </div>
  );
};

export default AspNetSecurity;
