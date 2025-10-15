import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Nuvin - Anxiety Relief app',
}

export default function TermsPage() {
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
            Terms of Service
          </h1>

          <p className="text-sm text-gray-600 mb-8">
            Last Updated: January 2025
          </p>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-8">
              Welcome to Nuvin. These Terms of Service ("Terms") govern your access to and use of the Nuvin mobile application ("App") and related services (collectively, the "Service"). By downloading, accessing, or using the App, you agree to be bound by these Terms. If you do not agree to these Terms, do not use the App.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-6">
              By creating an account or using the App, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. We reserve the right to modify these Terms at any time. Your continued use of the App following any changes constitutes your acceptance of the revised Terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">2. Description of Service</h2>
            <p className="text-gray-700 mb-4">
              Nuvin is a mental wellness mobile application designed to help users manage anxiety and stress through:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Guided breathing exercises</li>
              <li>Grounding techniques (e.g., 5-4-3-2-1 method)</li>
              <li>Physical reset exercises</li>
              <li>Mood tracking and journaling</li>
              <li>Personalized wellness insights</li>
            </ul>
            <p className="text-gray-700 mb-6">
              The App is intended for personal, non-commercial use only.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">3. Eligibility</h2>
            <p className="text-gray-700 mb-6">
              You must be at least 13 years old to use the App. If you are under 18, you represent that you have obtained permission from your parent or legal guardian to use the App. We may request proof of parental consent at any time.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">4. Subscriptions & Payment</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">a) Subscription Plans</h3>
            <p className="text-gray-700 mb-4">
              Nuvin offers the following subscription options:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Monthly:</strong> $7.99/month</li>
              <li><strong>Annual:</strong> $49.99/year</li>
              <li><strong>Lifetime:</strong> $99.99 one-time payment</li>
            </ul>
            <p className="text-gray-700 mb-6">
              All prices are in USD and may vary by region. Pricing is subject to change with notice.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">b) Payment Processing</h3>
            <p className="text-gray-700 mb-6">
              All payments are processed through the Apple App Store. By purchasing a subscription, you agree to Apple's terms and conditions. We do not have access to your payment information.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">c) Auto-Renewal</h3>
            <p className="text-gray-700 mb-6">
              Subscriptions automatically renew unless you cancel at least 24 hours before the end of the current billing period. You can manage or cancel your subscription in your App Store account settings.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">d) Refunds</h3>
            <p className="text-gray-700 mb-6">
              All sales are final. Refund requests must be submitted to Apple through the App Store, as we do not process refunds directly.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">5. License & Restrictions</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">a) Limited License</h3>
            <p className="text-gray-700 mb-6">
              Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the App for your personal, non-commercial use.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">b) Restrictions</h3>
            <p className="text-gray-700 mb-4">You agree NOT to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Copy, modify, distribute, sell, or lease any part of the App</li>
              <li>Reverse engineer, decompile, or attempt to extract the source code of the App</li>
              <li>Use the App for any unlawful or unauthorized purpose</li>
              <li>Interfere with or disrupt the App or servers or networks connected to the App</li>
              <li>Use automated systems (bots, scrapers, etc.) to access the App</li>
              <li>Transmit viruses, malware, or any other malicious code</li>
              <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">6. Privacy & Data</h2>
            <p className="text-gray-700 mb-6">
              Your use of the App is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our <Link href="/privacy" className="text-nuvin-purple hover:text-nuvin-blue underline">Privacy Policy</Link> to understand how we collect, use, and protect your data.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">7. User Data & Content</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">a) Your Responsibility</h3>
            <p className="text-gray-700 mb-6">
              You are responsible for all data, text, and content you submit to the App ("User Content"). You retain ownership of your User Content, but by using the App, you grant us a non-exclusive, royalty-free license to use, store, and process your User Content solely for the purpose of providing and improving the Service.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">b) Data Backup</h3>
            <p className="text-gray-700 mb-6">
              We are not responsible for any loss or corruption of your User Content. We recommend regularly backing up your data. You can delete your account and all associated data at any time through the App settings.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">8. Medical Disclaimer</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <p className="text-gray-900 font-semibold mb-2">IMPORTANT: NOT A SUBSTITUTE FOR PROFESSIONAL CARE</p>
              <p className="text-gray-700 mb-4">
                Nuvin is a wellness tool designed to help you manage everyday stress and anxiety. It is NOT a substitute for professional medical advice, diagnosis, or treatment.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>If you are experiencing a mental health crisis, call 911 or the National Suicide Prevention Lifeline at 988.</li>
                <li>Always seek the advice of a qualified healthcare provider with any questions you may have regarding a medical or mental health condition.</li>
                <li>Never disregard professional medical advice or delay seeking it because of something you read or experience in the App.</li>
                <li>The App does not provide therapy, counseling, or crisis intervention services.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">9. Disclaimers & Limitations of Liability</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">a) "As Is" Basis</h3>
            <p className="text-gray-700 mb-6">
              THE APP IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">b) No Guarantee of Results</h3>
            <p className="text-gray-700 mb-6">
              We do not guarantee that the App will be uninterrupted, error-free, or free from viruses or other harmful components. We make no warranties about the accuracy, completeness, or reliability of any content or features within the App.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">c) Limitation of Liability</h3>
            <p className="text-gray-700 mb-6">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL NUVIN, ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF THE APP.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">10. Indemnification</h2>
            <p className="text-gray-700 mb-6">
              You agree to indemnify, defend, and hold harmless Nuvin and its affiliates, officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with your access to or use of the App, your violation of these Terms, or your infringement of any intellectual property or other rights of any third party.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">11. Modifications to the App & Terms</h2>
            <p className="text-gray-700 mb-6">
              We reserve the right to modify, suspend, or discontinue the App (or any part thereof) at any time, with or without notice. We may also update these Terms from time to time. We will notify you of material changes by posting a notice in the App or sending you an email. Your continued use of the App after such changes constitutes your acceptance of the new Terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">12. Termination</h2>
            <p className="text-gray-700 mb-6">
              We may terminate or suspend your access to the App at any time, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the App will immediately cease. You may also terminate your account at any time by deleting the App and canceling your subscription.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">13. Third-Party Links & Services</h2>
            <p className="text-gray-700 mb-6">
              The App may contain links to third-party websites or services. We are not responsible for the content, privacy policies, or practices of any third-party sites. Your use of third-party services is at your own risk.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">14. Dispute Resolution & Arbitration</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">a) Informal Resolution</h3>
            <p className="text-gray-700 mb-6">
              If you have any dispute with us, you agree to first contact us at <a href="mailto:support@nuvin.app" className="text-nuvin-purple hover:text-nuvin-blue">support@nuvin.app</a> to attempt to resolve the dispute informally.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">b) Binding Arbitration</h3>
            <p className="text-gray-700 mb-6">
              If we cannot resolve a dispute informally, you agree that any dispute arising out of or relating to these Terms or the App will be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. The arbitration will take place in the United States, and judgment on the arbitration award may be entered in any court having jurisdiction.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">c) Class Action Waiver</h3>
            <p className="text-gray-700 mb-6">
              You agree that any arbitration or proceeding shall be limited to the dispute between you and Nuvin individually. To the full extent permitted by law, no arbitration or proceeding shall be joined with any other, and there is no right or authority for any dispute to be arbitrated or resolved on a class-action basis.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">15. General Provisions</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">a) Governing Law</h3>
            <p className="text-gray-700 mb-6">
              These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">b) Severability</h3>
            <p className="text-gray-700 mb-6">
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">c) Entire Agreement</h3>
            <p className="text-gray-700 mb-6">
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and Nuvin regarding the use of the App and supersede all prior agreements and understandings.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">d) Waiver</h3>
            <p className="text-gray-700 mb-6">
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-gray-900 font-semibold mb-2">Nuvin</p>
              <p className="text-gray-700">Email: <a href="mailto:support@nuvin.app" className="text-nuvin-purple hover:text-nuvin-blue">support@nuvin.app</a></p>
              <p className="text-gray-700">Legal: <a href="mailto:legal@nuvin.app" className="text-nuvin-purple hover:text-nuvin-blue">legal@nuvin.app</a></p>
            </div>

            <div className="border-t border-gray-200 pt-8 mt-12">
              <p className="text-sm text-gray-600">
                By using Nuvin, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
