import React from 'react'
import { Link } from 'react-router-dom'

function PrivacyPolicy() {
  return (
    <div className="bg-sky-50">
      <Link to="/" className="btn btn-ghost hover:bg-sky-100 hover:shadow-md">Back to home</Link>

      <div className="container mx-auto px-4 pb-8">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

        <p className="mb-4">
          At Millennial Clothing, we respect your privacy and are committed to safeguarding your personal information. This Privacy Policy outlines how we collect, use, and protect your data. By using our website, you agree to these terms. For additional legal information, please review our Terms of Service and Return Policy.
        </p>

        <h2 className="text-2xl font-bold mb-2">Information We Collect</h2>
        <p className="mb-4">We collect various types of data to enhance your shopping experience on Millennial Clothing’s website.</p>

        <h3 className="text-xl font-bold mb-2">Automatically Collected Data:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>IP address, browser type, and device information.</li>
          <li>Cookies and other technologies to track your website interactions.</li>
        </ul>

        <h3 className="text-xl font-bold mb-2">Personal Information (Voluntarily Provided):</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Name, email address, and phone number.</li>
          <li>Postal/ZIP code.</li>
          <li>Payment information (e.g., credit card details).</li>
          <li>Feedback, opinions, and preferences regarding our website and services.</li>
        </ul>

        <h3 className="text-xl font-bold mb-2">Behavioral Data:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Pages you visit, links you click, and the frequency of visits.</li>
          <li>Purchase history and shopping interactions.</li>
        </ul>

        <p className="mb-4">
          For further details, please refer to our FAQ or contact us at <a href="mailto:info@millennial-clothing.com" className="text-blue-500 hover:underline">info@millennial-clothing.com</a>.
        </p>

        <h2 className="text-2xl font-bold mb-2">How We Use Your Information</h2>
        <p className="mb-4">We use your data to:</p>

        <ul className="list-disc list-inside mb-4">
          <li>Personalize your shopping experience.</li>
          <li>Provide the products or services you request.</li>
          <li>Communicate important updates, promotions, and offers.</li>
          <li>Comply with legal requirements.</li>
        </ul>

        <h3 className="text-xl font-bold mb-2">Additional Uses Include:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Improving our products and services based on your feedback.</li>
          <li>Notifying you of contest results or sending promotional offers.</li>
          <li>Conducting surveys to better understand your preferences.</li>
        </ul>

        <h3 className="text-xl font-bold mb-2">Anonymous Data Is Used To:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Provide relevant content and ads.</li>
          <li>Track website usage and enhance performance.</li>
          <li>Diagnose technical issues and optimize user experience.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-2">Sharing Your Information</h2>
        <p className="mb-4">
          Millennial Clothing does not sell, rent, or share your personal data without your consent. However, we may share your information in the following cases:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>To fulfill product or service requests.</li>
          <li>To comply with legal obligations, such as court orders or law enforcement requests.</li>
          <li>To prevent fraud or illegal activities.</li>
        </ul>

        <p className="mb-4">
          We may also share aggregated, non-identifiable data with our advertisers and partners to enhance our services and marketing strategies.
        </p>

        <h2 className="text-2xl font-bold mb-2">Your Rights and Choices</h2>
        <p className="mb-4">You have control over your personal data. You can:</p>

        <ul className="list-disc list-inside mb-4">
          <li>Update your account information anytime.</li>
          <li>Opt-in or opt-out of marketing emails.</li>
          <li>Request to have your data deleted by contacting <a href="mailto:info@millennial-clothing.com" className="text-blue-500 hover:underline">info@millennial-clothing.com</a>. We will process your request within one business day.</li>
        </ul>

        <p className="mb-4">
          Please note that some service-related communications may still be sent to you for account updates.
        </p>

        <h2 className="text-2xl font-bold mb-2">Data Security at Millennial Clothing</h2>
        <p className="mb-4">
          We take every measure to protect your personal data by implementing:
        </p>

        <ul className="list-disc list-inside mb-4">
          <li>Physical, electronic, and managerial safeguards.</li>
          <li>Limiting access to sensitive information to authorized personnel only.</li>
        </ul>

        <p className="mb-4">
          Although we strive to secure your data, no internet transmission is entirely risk-free. By using our website, you acknowledge that Millennial Clothing is not liable for unauthorized access due to external factors beyond our control.
        </p>

        <h2 className="text-2xl font-bold mb-2">Policy Updates</h2>
        <p className="mb-4">
          Millennial Clothing reserves the right to modify this Privacy Policy as necessary. Any changes will be communicated through a prominent notice on our website and will take effect immediately upon posting.
        </p>

        <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
        <p>
          For any questions or concerns, contact us at:
          <br />
          Email: <a href="mailto:info@millennial-clothing.com" className="text-blue-500 hover:underline">info@millennial-clothing.com</a>
          <br />
          Website: <a href="http://www.millennial-clothing.com" className="text-blue-500 hover:underline">www.millennial-clothing.com</a>
        </p>
      </div>
    </div>
  )
}

export default PrivacyPolicy;
