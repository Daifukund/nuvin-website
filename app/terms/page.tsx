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
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">1. ACCEPTANCE OF TERMS</h2>
            <p className="text-gray-700 mb-4">
              Welcome to Nuvin. These Terms of Service ("Terms") govern your access to and use of the Nuvin mobile application (the "App") and all related services (collectively, the "Service"). The Service is provided by Nuvin ("we," "us," or "our").
            </p>

            <p className="text-gray-700 mb-4">
              By downloading, installing, or using the App, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the App.
            </p>

            <p className="text-gray-700 mb-8">
              <strong>Contact:</strong> For questions about these Terms, contact us at nathan.douziech@gmail.com.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">2. DESCRIPTION OF SERVICE</h2>
            <p className="text-gray-700 mb-4">
              Nuvin is a mental wellness mobile application designed for iOS devices. The App provides evidence-based tools and techniques to help manage anxiety and stress, including:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Guided breathing exercises (e.g., box breathing)</li>
              <li>Grounding techniques (e.g., 5-4-3-2-1 sensory method)</li>
              <li>Physical reset exercises</li>
              <li>Perspective shift and cognitive reframing tools</li>
              <li>Quick journaling (notes are NOT saved - see Section 7)</li>
              <li>Mood tracking and progress visualization</li>
              <li>Daily affirmations and quotes</li>
              <li>SOS crisis intervention flow</li>
            </ul>

            <p className="text-gray-700 mb-8">
              <strong>The Service is a premium, subscription-based offering. Access to the App requires an active subscription (see Section 4).</strong>
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">3. ELIGIBILITY</h2>
            <p className="text-gray-700 mb-4">
              <strong>Age Requirement:</strong> You must be at least 13 years of age to use the App. If you are between 13 and 17 years old, you must have permission from a parent or legal guardian to use the App.
            </p>

            <p className="text-gray-700 mb-4">
              <strong>Capacity to Accept Terms:</strong> By using the App, you represent that you are legally capable of entering into binding contracts and that you meet the age requirements stated above.
            </p>

            <p className="text-gray-700 mb-8">
              <strong>Geographic Restrictions:</strong> The App is currently available only through the Apple App Store. Availability may vary by region.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">4. SUBSCRIPTIONS & PAYMENT</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.1 Subscription Plans</h3>
            <p className="text-gray-700 mb-4">Nuvin offers the following subscription options:</p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Monthly Subscription:</strong> $7.99 per month, automatically renewing every 30 days</li>
              <li><strong>Annual Subscription:</strong> $49.99 per year (equivalent to $3.99/month, billed annually), automatically renewing every 365 days</li>
              <li><strong>Lifetime Access:</strong> $99.99 one-time purchase, providing permanent access to all App features</li>
            </ul>

            <p className="text-gray-700 mb-4">
              Prices are in U.S. dollars and may vary by region. Prices are subject to change with 30 days' notice.
            </p>

            <p className="text-gray-700 mb-6">
              <strong>No Free Trial:</strong> Nuvin does not currently offer a free trial. Payment is required upfront to access the App.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">4.2 Payment Processing</h3>
            <p className="text-gray-700 mb-4">
              All payments are processed through Apple's App Store using Apple's in-app purchase system. By subscribing, you agree to Apple's payment terms and conditions.
            </p>

            <p className="text-gray-700 mb-6">
              <strong>We do not collect or process your payment information directly.</strong> Apple handles all credit card, debit card, and other payment method processing. Your payment information is subject to Apple's Privacy Policy, not ours.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">4.3 Auto-Renewal</h3>
            <p className="text-gray-700 mb-4">
              Monthly and Annual subscriptions automatically renew at the end of each billing period unless you cancel at least 24 hours before the renewal date.
            </p>

            <p className="text-gray-700 mb-4">
              Your Apple account will be charged for renewal within 24 hours prior to the end of the current subscription period.
            </p>

            <p className="text-gray-700 mb-6">
              Lifetime purchases do not renew and provide permanent access.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">4.4 Managing Your Subscription</h3>
            <p className="text-gray-700 mb-4">
              You can view, modify, or cancel your subscription at any time through your Apple App Store account:
            </p>

            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
              <li>Open the Settings app on your iPhone</li>
              <li>Tap your name at the top</li>
              <li>Tap "Subscriptions"</li>
              <li>Select Nuvin</li>
              <li>Choose "Cancel Subscription" or modify your plan</li>
            </ol>

            <p className="text-gray-700 mb-6">
              Cancellation takes effect at the end of the current billing period. You will retain access to the App until that date.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">4.5 Refunds</h3>
            <p className="text-gray-700 mb-4">
              <strong>All sales are final and non-refundable,</strong> except as required by law or as determined by Apple.
            </p>

            <p className="text-gray-700 mb-4">
              Refund requests must be submitted directly to Apple through the App Store. We do not have the ability to issue refunds for purchases made through Apple's in-app purchase system.
            </p>

            <p className="text-gray-700 mb-4">To request a refund from Apple:</p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
              <li>Go to <a href="https://reportaproblem.apple.com/" target="_blank" rel="noopener noreferrer" className="text-nuvin-purple hover:text-nuvin-blue">https://reportaproblem.apple.com/</a></li>
              <li>Sign in with your Apple ID</li>
              <li>Find your Nuvin purchase and select "Report a Problem"</li>
            </ol>

            <p className="text-gray-700 mb-6">
              Apple determines refund eligibility according to their policies. We do not control this process.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">4.6 Changes to Pricing</h3>
            <p className="text-gray-700 mb-4">
              We may change subscription prices at any time. If we increase the price of your current subscription, we will notify you at least 30 days in advance via the App or email (if provided). The new price will take effect at your next renewal date.
            </p>

            <p className="text-gray-700 mb-8">
              If you do not agree to a price change, you may cancel your subscription before the new price takes effect.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">5. LICENSE & RESTRICTIONS</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5.1 Limited License</h3>
            <p className="text-gray-700 mb-6">
              Subject to your compliance with these Terms and payment of applicable subscription fees, we grant you a limited, non-exclusive, non-transferable, revocable license to download, install, and use the App on your personal iOS device(s) for your personal, non-commercial use.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">5.2 Restrictions</h3>
            <p className="text-gray-700 mb-4">You agree that you will NOT:</p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Copy, modify, or create derivative works of the App</li>
              <li>Reverse engineer, decompile, or disassemble the App</li>
              <li>Rent, lease, sell, sublicense, or transfer the App to any third party</li>
              <li>Remove or alter any copyright, trademark, or other proprietary notices from the App</li>
              <li>Use the App for any illegal or unauthorized purpose</li>
              <li>Circumvent or attempt to circumvent any security features or subscription validation mechanisms</li>
              <li>Use automated scripts, bots, or other means to access the App</li>
              <li>Interfere with or disrupt the App's functionality or servers</li>
              <li>Attempt to gain unauthorized access to any portion of the App or related systems</li>
              <li>Use the App in a way that could damage, disable, overburden, or impair the Service</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">5.3 Ownership</h3>
            <p className="text-gray-700 mb-4">
              The App and all content, features, and functionality (including but not limited to text, graphics, logos, button icons, images, audio clips, and software) are owned by Nuvin or our licensors and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>

            <p className="text-gray-700 mb-8">
              These Terms do not grant you any ownership rights in the App. All rights not expressly granted are reserved by Nuvin.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">6. PRIVACY & DATA</h2>
            <p className="text-gray-700 mb-4">
              Your privacy is important to us. Our collection, use, and sharing of your data is governed by our Privacy Policy, available at <Link href="/privacy" className="text-nuvin-purple hover:text-nuvin-blue">Privacy Policy</Link>.
            </p>

            <p className="text-gray-700 mb-4"><strong>Key Privacy Points:</strong></p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Mood tracking data is stored locally on your device in encrypted Keychain storage</li>
              <li>Journal entries are NOT saved - they are deleted immediately after each session</li>
              <li>We use Mixpanel for analytics and RevenueCat for subscription management</li>
              <li>We do NOT sell your data to third parties</li>
              <li>You can export or delete your data at any time through Settings</li>
            </ul>

            <p className="text-gray-700 mb-8">
              By using the App, you consent to the collection and use of your information as described in the Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">7. USER DATA & CONTENT</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">7.1 Data You Create</h3>
            <p className="text-gray-700 mb-4">
              <strong>Mood Logs:</strong> When you track your mood, this data is stored locally on your device. You own this data and can export or delete it at any time.
            </p>

            <p className="text-gray-700 mb-4">
              <strong>Journal Entries:</strong> <strong>IMPORTANT: Journal entries are NOT saved.</strong> The Quick Journal feature is designed for temporary reflection only. When you write in the journal, your text is displayed on-screen during the 60-second session and is immediately deleted when you complete or exit the session. We do not store, transmit, or have access to your journal content.
            </p>

            <p className="text-gray-700 mb-6">
              <strong>Personalization Data:</strong> Information you provide during onboarding (name, age range, symptoms, goals) is stored locally on your device and used to personalize your experience.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">7.2 No User-Generated Content Platform</h3>
            <p className="text-gray-700 mb-4">Nuvin is NOT a social platform. The App does not include features for:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Posting or sharing content publicly</li>
              <li>Creating user profiles visible to others</li>
              <li>Commenting or interacting with other users</li>
              <li>Uploading photos, videos, or other media for sharing</li>
            </ul>

            <p className="text-gray-700 mb-8">
              All data you create in the App is for your personal use only and is not shared with other users.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">8. MEDICAL DISCLAIMER</h2>
            <p className="text-gray-700 mb-4">
              <strong>IMPORTANT: Nuvin is not a medical device and does not provide medical advice, diagnosis, or treatment.</strong>
            </p>

            <p className="text-gray-700 mb-4">
              The App is designed for general wellness and stress management purposes only. It is not intended to replace professional medical advice, psychiatric care, psychotherapy, or mental health treatment.
            </p>

            <p className="text-gray-700 mb-4">
              <strong>No Therapeutic Claims:</strong> While the techniques in the App are based on evidence-based practices (such as breathing exercises and grounding techniques), we make no claims, representations, or guarantees that the App will provide therapeutic benefits, cure any condition, or improve your mental health outcomes.
            </p>

            <p className="text-gray-700 mb-4">
              <strong>Consult Healthcare Professionals:</strong> If you are experiencing mental health difficulties, we strongly encourage you to consult with a licensed healthcare provider, therapist, or psychiatrist. The App should not be used as a substitute for professional care.
            </p>

            <p className="text-gray-700 mb-4">
              <strong>Emergency Situations:</strong> If you are experiencing a mental health crisis, suicidal thoughts, or any emergency, please:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Call 911 (U.S.) or your local emergency number immediately</li>
              <li>Call the 988 Suicide & Crisis Lifeline (U.S.): dial 988</li>
              <li>Text the Crisis Text Line (U.S.): text HOME to 741741</li>
              <li>Go to your nearest emergency room</li>
            </ul>

            <p className="text-gray-700 mb-4">
              <strong>The App is not designed for crisis intervention and should not be relied upon in emergency situations.</strong>
            </p>

            <p className="text-gray-700 mb-4">
              <strong>Existing Conditions:</strong> If you have been diagnosed with a mental health condition (such as panic disorder, generalized anxiety disorder, PTSD, bipolar disorder, etc.), consult your healthcare provider before using the App. Some techniques may not be appropriate for all conditions.
            </p>

            <p className="text-gray-700 mb-8">
              <strong>Medications:</strong> The App does not provide guidance on medications. Do not start, stop, or change any medications without consulting your doctor.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">9. DISCLAIMERS & LIMITATIONS OF LIABILITY</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">9.1 "As Is" Service</h3>
            <p className="text-gray-700 mb-4">
              THE APP AND SERVICE ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR THAT THE APP WILL BE ERROR-FREE OR UNINTERRUPTED.
            </p>

            <p className="text-gray-700 mb-4">We do not warrant that:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>The App will meet your specific needs or expectations</li>
              <li>The App will always be available, accessible, uninterrupted, timely, secure, or operate without errors</li>
              <li>The results or outcomes from using the App will be accurate or reliable</li>
              <li>The quality of the App will meet your expectations</li>
              <li>Any errors or defects in the App will be corrected</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">9.2 Limitation of Liability</h3>
            <p className="text-gray-700 mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, NUVIN AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR USE, ARISING OUT OF OR RELATED TO YOUR USE OF THE APP, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>

            <p className="text-gray-700 mb-4">
              IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL DAMAGES, LOSSES, OR CAUSES OF ACTION EXCEED THE AMOUNT YOU PAID TO US IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO LIABILITY, OR ONE HUNDRED DOLLARS ($100), WHICHEVER IS GREATER.
            </p>

            <p className="text-gray-700 mb-6">
              Some jurisdictions do not allow the exclusion or limitation of certain warranties or liabilities, so some of the above limitations may not apply to you.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">9.3 No Liability for User Outcomes</h3>
            <p className="text-gray-700 mb-8">
              We are not responsible for any physical, psychological, emotional, or other harm that may result from your use of the App. You use the App at your own risk.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">10. INDEMNIFICATION</h2>
            <p className="text-gray-700 mb-4">
              You agree to indemnify, defend, and hold harmless Nuvin and its officers, directors, employees, agents, affiliates, and licensors from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising from:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Your use or misuse of the App</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another person or entity</li>
              <li>Your violation of any applicable laws or regulations</li>
            </ul>

            <p className="text-gray-700 mb-8">
              We reserve the right to assume the exclusive defense and control of any matter subject to indemnification by you, in which case you agree to cooperate with our defense of such claim.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">11. MODIFICATIONS TO THE APP & TERMS</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">11.1 Changes to the App</h3>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify, suspend, or discontinue the App (or any part or feature thereof) at any time, with or without notice, for any reason.
            </p>

            <p className="text-gray-700 mb-6">
              We may add, remove, or change features, content, or functionality. We are not liable to you or any third party for any modification, suspension, or discontinuation of the Service.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">11.2 Changes to These Terms</h3>
            <p className="text-gray-700 mb-4">We may update these Terms from time to time. When we make changes, we will:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Update the "Last Updated" date at the top of this document</li>
              <li>Notify you through the App or via email (if provided)</li>
              <li>For material changes, provide more prominent notice</li>
            </ul>

            <p className="text-gray-700 mb-8">
              Your continued use of the App after changes are posted constitutes your acceptance of the updated Terms. If you do not agree to the new Terms, you must stop using the App and cancel your subscription.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">12. TERMINATION</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">12.1 Termination by You</h3>
            <p className="text-gray-700 mb-4">
              You may stop using the App and cancel your subscription at any time as described in Section 4.4. Upon cancellation, your access will continue until the end of your current billing period.
            </p>

            <p className="text-gray-700 mb-6">
              If you delete the App from your device, your locally stored data (mood logs, preferences) will be permanently deleted and cannot be recovered.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">12.2 Termination by Us</h3>
            <p className="text-gray-700 mb-4">
              We reserve the right to suspend or terminate your access to the App immediately, without prior notice or liability, for any reason, including but not limited to:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Violation of these Terms</li>
              <li>Fraudulent, abusive, or illegal activity</li>
              <li>Requests by law enforcement or other government agencies</li>
              <li>Discontinuation or material modification of the Service</li>
              <li>Unexpected technical issues or security concerns</li>
            </ul>

            <p className="text-gray-700 mb-6">
              Upon termination, your right to use the App will immediately cease. Termination does not entitle you to a refund of any subscription fees already paid.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">12.3 Effect of Termination</h3>
            <p className="text-gray-700 mb-4">Upon termination of your access:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
              <li>Your license to use the App terminates immediately</li>
              <li>You must stop using the App and delete it from your device</li>
              <li>Locally stored data remains on your device until you delete the App</li>
              <li>Provisions of these Terms that by their nature should survive termination will survive (including Sections 5.3, 8, 9, 10, 14, and 15)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">13. THIRD-PARTY LINKS & SERVICES</h2>
            <p className="text-gray-700 mb-4">
              The App may contain links to third-party websites, services, and resources, including:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Crisis support hotlines (988 Suicide & Crisis Lifeline, Crisis Text Line, SAMHSA)</li>
              <li>Mental health organizations (NAMI, ADAA, Mental Health America)</li>
              <li>Our legal documents hosted on GitHub Pages</li>
              <li>Apple App Store (for subscription management)</li>
            </ul>

            <p className="text-gray-700 mb-4">
              These third-party links are provided for your convenience only. We do not control, endorse, or assume responsibility for the content, privacy policies, or practices of any third-party websites or services.
            </p>

            <p className="text-gray-700 mb-4">
              You acknowledge and agree that we are not responsible or liable for any damage or loss caused by or in connection with your use of any third-party websites or services.
            </p>

            <p className="text-gray-700 mb-8">
              We encourage you to review the terms and privacy policies of any third-party websites or services you visit.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">14. DISPUTE RESOLUTION & ARBITRATION</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">14.1 Informal Resolution</h3>
            <p className="text-gray-700 mb-6">
              If you have a dispute with us, please contact us first at nathan.douziech@gmail.com and attempt to resolve the dispute informally. We will make good-faith efforts to resolve any disputes amicably.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">14.2 Arbitration Agreement</h3>
            <p className="text-gray-700 mb-4">
              If we cannot resolve a dispute informally within 60 days, any dispute arising out of or relating to these Terms or the App shall be resolved through binding arbitration, rather than in court, except that:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>You may assert claims in small claims court if your claims qualify</li>
              <li>Either party may seek equitable relief in court for infringement or misuse of intellectual property rights</li>
            </ul>

            <p className="text-gray-700 mb-4">
              The arbitration will be conducted in accordance with the rules of the American Arbitration Association (AAA) under its Consumer Arbitration Rules. The arbitration will be conducted by a single arbitrator.
            </p>

            <p className="text-gray-700 mb-6">
              Judgment on the arbitration award may be entered in any court having jurisdiction.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">14.3 Class Action Waiver</h3>
            <p className="text-gray-700 mb-4">
              <strong>YOU AND NUVIN AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.</strong>
            </p>

            <p className="text-gray-700 mb-6">
              Unless both you and Nuvin agree otherwise, the arbitrator may not consolidate more than one person's claims and may not preside over any form of representative or class proceeding.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">14.4 Time Limit for Claims</h3>
            <p className="text-gray-700 mb-8">
              You agree that any claim arising out of or related to these Terms or the App must be filed within one (1) year after the claim arose. Otherwise, the claim is permanently barred.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">15. GENERAL PROVISIONS</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">15.1 Governing Law</h3>
            <p className="text-gray-700 mb-6">
              These Terms and your use of the App are governed by the laws of the United States and the State of Delaware, without regard to conflict of law principles.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">15.2 Entire Agreement</h3>
            <p className="text-gray-700 mb-6">
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and Nuvin regarding the App and supersede all prior agreements, understandings, and communications, whether written or oral.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">15.3 Severability</h3>
            <p className="text-gray-700 mb-6">
              If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions will continue in full force and effect.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">15.4 Waiver</h3>
            <p className="text-gray-700 mb-6">
              Our failure to enforce any right or provision of these Terms will not be deemed a waiver of such right or provision. No waiver of any term shall be deemed a further or continuing waiver of such term or any other term.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">15.5 Assignment</h3>
            <p className="text-gray-700 mb-6">
              You may not assign or transfer these Terms or your rights under them without our prior written consent. We may assign or transfer these Terms and our rights without restriction, including to any successor or acquirer of our business.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">15.6 No Third-Party Beneficiaries</h3>
            <p className="text-gray-700 mb-6">
              These Terms do not create any third-party beneficiary rights.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">15.7 Force Majeure</h3>
            <p className="text-gray-700 mb-6">
              We will not be liable for any failure or delay in performing our obligations under these Terms due to causes beyond our reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, riots, labor disputes, or failures of third-party services (e.g., Apple App Store, internet service providers).
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">15.8 Export Controls</h3>
            <p className="text-gray-700 mb-6">
              The App may be subject to U.S. export control laws. You agree to comply with all applicable export and re-export control laws and regulations, including the Export Administration Regulations maintained by the U.S. Department of Commerce.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">15.9 Apple-Specific Terms</h3>
            <p className="text-gray-700 mb-4">
              If you downloaded the App from the Apple App Store, you acknowledge and agree that:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>These Terms are between you and Nuvin, not Apple. Apple is not responsible for the App or its content.</li>
              <li>Apple has no obligation to provide maintenance or support for the App.</li>
              <li>In the event of any failure of the App to conform to any applicable warranty, you may notify Apple, and Apple will refund the purchase price (if any). Apple has no other warranty obligation with respect to the App.</li>
              <li>Apple is not responsible for addressing any claims you or any third party have relating to the App.</li>
              <li>Apple and Apple's subsidiaries are third-party beneficiaries of these Terms, and Apple will have the right to enforce these Terms against you.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">15.10 Contact Information</h3>
            <p className="text-gray-700 mb-4">
              For questions, concerns, or notices regarding these Terms, contact us at:
            </p>
            <p className="text-gray-700 mb-8">
              <strong>Email:</strong> nathan.douziech@gmail.com
            </p>

            <div className="border-t border-gray-200 pt-8 mt-12">
              <p className="text-lg text-gray-800 font-semibold text-center">
                By using Nuvin, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
