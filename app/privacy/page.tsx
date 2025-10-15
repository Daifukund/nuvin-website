import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Nuvin - Anxiety Relief app',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 sm:p-12">
          <Link
            href="/"
            className="inline-flex items-center text-nuvin-purple hover:text-nuvin-blue transition-colors mb-8"
          >
            ← Back to Home
          </Link>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>

          <p className="text-sm text-gray-600 mb-8">
            Last Updated: January 2025
          </p>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Managing panic attacks and anxiety is a journey. Our hope is for Nuvin to be your partner along the way – available to offer support any time, any where, for any reason.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Any successful partnership needs to start with trust. For this reason, and countless others, we take the privacy of your data seriously.
            </p>

            <p className="text-gray-700 mb-8">
              This Privacy Policy explains how Nuvin ("we", "us", or "our") collects, uses, and discloses information about you when you access or use our mobile application ("App"), and when you contact our customer service team or otherwise interact with us.
            </p>

            <p className="text-gray-700 mb-8">
              Before using the App or submitting any data to Nuvin, please review this Privacy Policy carefully and contact us if you have any questions. By using the App, you agree to the practices described in this Privacy Policy. If you do not agree to this Privacy Policy, please do not access or use the App.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">1. What Data We Collect</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">a) Data You Provide</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Account Information:</strong> If you create an account, we may collect your email address, username, and password.</li>
              <li><strong>Journal Entries & Personal Notes:</strong> Any text, mood logs, or reflections you save within the App.</li>
              <li><strong>Usage Preferences:</strong> Settings or preferences you configure (e.g., notification preferences, favorite exercises).</li>
              <li><strong>Support Communications:</strong> If you contact our support team, we may collect your name, email address, and any information you provide in your messages.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">b) Automatically Collected Data</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Device Information:</strong> Device type, operating system version, unique device identifiers.</li>
              <li><strong>Usage Data:</strong> Features accessed, time spent in the App, crash logs, and performance metrics.</li>
              <li><strong>Analytics Data:</strong> We use third-party analytics tools (e.g., Mixpanel, Firebase Analytics) to understand how users interact with the App.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">c) Payment Information</h3>
            <p className="text-gray-700 mb-6">
              We do not directly collect or store payment information. All payments are processed through Apple's App Store. Please review Apple's privacy policy for details on how they handle payment data.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">2. How We Use Your Data</h2>
            <p className="text-gray-700 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Provide, maintain, and improve the App</li>
              <li>Personalize your experience and deliver content relevant to your interests</li>
              <li>Process transactions and manage subscriptions</li>
              <li>Send you updates, security alerts, and support messages</li>
              <li>Monitor and analyze trends, usage, and activities in connection with our App</li>
              <li>Detect, prevent, and address technical issues or fraudulent activity</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">3. Data Storage & Security</h2>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">a) Local Storage</h3>
            <p className="text-gray-700 mb-6">
              Most of your personal data (journal entries, mood logs, preferences) is stored locally on your device. This means we do not have direct access to this information unless you explicitly choose to sync or share it with us.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">b) Cloud Storage (Optional)</h3>
            <p className="text-gray-700 mb-6">
              If you enable cloud sync or backup features, your data may be stored on secure servers. We use industry-standard encryption to protect your data both in transit and at rest.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">c) Security Measures</h3>
            <p className="text-gray-700 mb-6">
              We implement appropriate technical and organizational measures to protect your data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">4. Data Sharing & Disclosure</h2>
            <p className="text-gray-700 mb-4">We do not sell, rent, or share your personal information with third parties except in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Service Providers:</strong> We may share data with trusted third-party service providers who assist us in operating the App (e.g., analytics, cloud hosting, customer support).</li>
              <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to valid requests by public authorities.</li>
              <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
              <li><strong>With Your Consent:</strong> We may share your information for any other purpose with your explicit consent.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">5. Third-Party Services</h2>
            <p className="text-gray-700 mb-4">The App may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.</p>

            <p className="text-gray-700 mb-6 mt-4">
              <strong>Third-party analytics and tracking tools we use:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Mixpanel:</strong> For user behavior analytics</li>
              <li><strong>Firebase Analytics:</strong> For app performance monitoring</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">6. Your Rights & Choices</h2>
            <p className="text-gray-700 mb-4">Depending on your location, you may have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data, subject to certain legal exceptions.</li>
              <li><strong>Objection:</strong> Object to the processing of your data for certain purposes.</li>
              <li><strong>Data Portability:</strong> Request a copy of your data in a structured, machine-readable format.</li>
            </ul>
            <p className="text-gray-700 mb-6">
              To exercise any of these rights, please contact us at <a href="mailto:privacy@nuvin.app" className="text-nuvin-purple hover:text-nuvin-blue">privacy@nuvin.app</a>.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">7. Data Retention</h2>
            <p className="text-gray-700 mb-6">
              We retain your personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. If you delete your account, we will delete or anonymize your data within 30 days, except where we are legally required to retain it.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">8. Children's Privacy</h2>
            <p className="text-gray-700 mb-6">
              The App is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information promptly.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">9. International Data Transfers</h2>
            <p className="text-gray-700 mb-6">
              Your information may be transferred to, and maintained on, computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. By using the App, you consent to the transfer of your information to our facilities and to the third parties with whom we share it as described in this Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">10. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">11. California Privacy Rights</h2>
            <p className="text-gray-700 mb-6">
              If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, the right to delete your personal information, and the right to opt-out of the sale of your personal information. We do not sell your personal information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">12. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-gray-900 font-semibold mb-2">Nuvin</p>
              <p className="text-gray-700">Email: <a href="mailto:privacy@nuvin.app" className="text-nuvin-purple hover:text-nuvin-blue">privacy@nuvin.app</a></p>
              <p className="text-gray-700">Support: <a href="mailto:support@nuvin.app" className="text-nuvin-purple hover:text-nuvin-blue">support@nuvin.app</a></p>
            </div>

            <div className="border-t border-gray-200 pt-8 mt-12">
              <p className="text-sm text-gray-600">
                By using Nuvin, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
