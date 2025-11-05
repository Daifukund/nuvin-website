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
            <p className="text-gray-700 mb-6">
              Nuvin is designed with privacy at its core. We collect minimal data, and sensitive information like your mood logs are stored locally on your device, not on our servers.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1.1 Data Stored Locally on Your Device</h3>

            <p className="text-gray-700 mb-4">
              <strong>Mood Tracking Data:</strong> When you use our mood check-in feature, your mood ratings and associated session counts are stored securely in your device's encrypted Keychain. This data never leaves your device unless you explicitly choose to export it.
            </p>

            <p className="text-gray-700 mb-4">
              <strong>User Statistics:</strong> We track your usage statistics locally on your device, including total relief sessions completed, current and longest streaks, and your favorite exercises. This data is stored in your device's Keychain and is only accessible by the App on your device.
            </p>

            <p className="text-gray-700 mb-4">
              <strong>App Preferences:</strong> Your settings preferences (such as notification times, haptic feedback preferences, and theme choices) are stored locally on your device using standard iOS UserDefaults.
            </p>

            <p className="text-gray-700 mb-6">
              <strong>Journal Entries:</strong> <strong>IMPORTANT: Journal entries are NOT saved.</strong> When you use the Quick Journal feature, your text is displayed temporarily during the 60-second session and is immediately deleted when you complete or exit the session. We do not store, transmit, or have any access to your journal content.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">1.2 Analytics Data We Collect</h3>
            <p className="text-gray-700 mb-4">
              We use Mixpanel, a third-party analytics service, to understand how users interact with our App so we can improve the experience. Mixpanel collects:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Usage Events:</strong> Actions you take in the App, such as completing a breathing exercise, starting the SOS flow, checking in on your mood, or completing onboarding steps.</li>
              <li><strong>Session Information:</strong> How long you use the App, which features you access, and how frequently you use the App.</li>
              <li><strong>Device Information:</strong> Device model (e.g., iPhone 14), operating system version (e.g., iOS 17.0), and App version.</li>
              <li><strong>Anonymous Identifiers:</strong> A randomly generated device ID that does not identify you personally.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              <strong>What we do NOT collect through analytics:</strong> We do not collect your name, email address, phone number, precise location, or any personally identifiable information through Mixpanel. Your mood values and journal entries are never sent to Mixpanel.
            </p>

            <p className="text-gray-700 mb-6">
              You can learn more about Mixpanel's data practices at <a href="https://mixpanel.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-nuvin-purple hover:text-nuvin-blue">https://mixpanel.com/legal/privacy-policy/</a>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">1.3 Subscription Data</h3>
            <p className="text-gray-700 mb-4">
              We use RevenueCat, a third-party subscription management service, to process your in-app purchases. When you subscribe to Nuvin Premium, RevenueCat receives:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>An anonymous user identifier</li>
              <li>Your purchase receipt from Apple</li>
              <li>Your subscription status and type (monthly, annual, or lifetime)</li>
              <li>Device type and platform (iOS)</li>
            </ul>

            <p className="text-gray-700 mb-4">
              <strong>Payment Information:</strong> Nuvin does not collect, process, or store any credit card or payment information. All payment processing is handled securely by Apple through the App Store. We never see your payment card details.
            </p>

            <p className="text-gray-700 mb-6">
              You can learn more about RevenueCat's privacy practices at <a href="https://www.revenuecat.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-nuvin-purple hover:text-nuvin-blue">https://www.revenuecat.com/privacy/</a>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">1.4 Crash & Diagnostic Data</h3>
            <p className="text-gray-700 mb-4">
              If the App crashes or encounters an error, we save a crash log locally on your device. These logs include:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Date and time of the crash</li>
              <li>App version and build number</li>
              <li>iOS version and device model</li>
              <li>Technical error information (call stack)</li>
            </ul>

            <p className="text-gray-700 mb-6">
              These crash logs are stored locally on your device and are NOT automatically sent to us. They are only used for debugging if you contact our support team and choose to share them.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">1.5 Information You Provide to Us</h3>
            <p className="text-gray-700 mb-4">
              <strong>Personalization Data:</strong> During onboarding, you may provide your first name (for in-app personalization), age range, primary reasons for using the App, symptoms you experience, and your wellness goals. This information is stored locally on your device in encrypted Keychain storage and is used solely to personalize your experience within the App.
            </p>

            <p className="text-gray-700 mb-6">
              <strong>Support Communications:</strong> If you contact us for support via email at nathan.douziech@gmail.com, we will receive your email address and any information you choose to include in your message.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">2. How We Use Your Data</h2>
            <p className="text-gray-700 mb-4">We use the information we collect for the following purposes:</p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>To Provide the App:</strong> To deliver relief techniques, track your progress, and personalize your experience based on your stated goals and preferences.</li>
              <li><strong>To Process Subscriptions:</strong> To verify your subscription status and provide access to premium features.</li>
              <li><strong>To Improve the App:</strong> To analyze usage patterns (via anonymized analytics) and understand which features are most helpful so we can make improvements.</li>
              <li><strong>To Send Notifications:</strong> To deliver local notifications for mood check-in reminders and daily quotes, if you enable these features.</li>
              <li><strong>To Provide Support:</strong> To respond to your inquiries and provide customer support.</li>
              <li><strong>To Ensure Security:</strong> To detect and prevent technical issues, crashes, and potential security vulnerabilities.</li>
            </ul>

            <p className="text-gray-700 mb-4 mt-6"><strong>We do NOT use your data for:</strong></p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
              <li>Advertising or marketing to you based on your behavior</li>
              <li>Tracking you across other apps or websites</li>
              <li>Selling your information to third parties</li>
              <li>Training AI models</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">3. How We Share Your Data</h2>
            <p className="text-gray-700 mb-6">
              <strong>We do NOT sell your personal data.</strong>
            </p>

            <p className="text-gray-700 mb-6">
              We may share limited data with the following third-party service providers, solely to operate the App:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.1 Service Providers</h3>

            <p className="text-gray-700 mb-4">
              <strong>Mixpanel (Analytics):</strong> We share anonymized usage data with Mixpanel to analyze App performance and feature usage. Mixpanel does not receive any personally identifiable information or your mood/journal data.
            </p>

            <p className="text-gray-700 mb-4">
              <strong>RevenueCat (Subscription Management):</strong> We share an anonymous user identifier and subscription status with RevenueCat to manage your premium subscription. RevenueCat does not receive your mood data or journal entries.
            </p>

            <p className="text-gray-700 mb-6">
              <strong>Apple (Payment Processing):</strong> When you make an in-app purchase, Apple processes your payment information according to their privacy policy. We do not have access to your payment details.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">3.2 Legal Requirements</h3>
            <p className="text-gray-700 mb-4">
              We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court order or subpoena), or to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Comply with a legal obligation</li>
              <li>Protect and defend our rights or property</li>
              <li>Prevent or investigate possible wrongdoing</li>
              <li>Protect the personal safety of users or the public</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">3.3 Business Transfers</h3>
            <p className="text-gray-700 mb-8">
              If Nuvin is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will provide notice before your information is transferred and becomes subject to a different privacy policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">4. Data Storage & Security</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.1 Where Your Data is Stored</h3>

            <p className="text-gray-700 mb-4">
              <strong>On Your Device:</strong> Your mood logs, statistics, preferences, and personalization data are stored locally on your device using iOS Keychain (encrypted) and UserDefaults.
            </p>

            <p className="text-gray-700 mb-4">
              <strong>Third-Party Services:</strong> Anonymous analytics data is stored by Mixpanel in the United States. Subscription data is stored by RevenueCat in the United States.
            </p>

            <p className="text-gray-700 mb-6">
              <strong>No Cloud Sync:</strong> Nuvin does not use iCloud or any other cloud service to sync your data. Your data stays on your device unless you explicitly export it.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">4.2 How We Protect Your Data</h3>
            <p className="text-gray-700 mb-4">We implement commercially reasonable security measures to protect your information:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Sensitive data (mood logs, user stats) is stored in iOS Keychain with encryption</li>
              <li>All network communications use HTTPS encryption</li>
              <li>We use anonymous identifiers instead of personal identifiers wherever possible</li>
              <li>Journal entries are never stored (immediately deleted)</li>
            </ul>

            <p className="text-gray-700 mb-6">
              However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee absolute security.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">4.3 Data Retention</h3>

            <p className="text-gray-700 mb-4">
              <strong>Local Data:</strong> Data stored on your device (mood logs, stats, preferences) remains on your device until you delete it manually or uninstall the App.
            </p>

            <p className="text-gray-700 mb-4">
              <strong>Analytics Data:</strong> Mixpanel retains analytics data according to their retention policy (typically 5 years, but anonymized).
            </p>

            <p className="text-gray-700 mb-8">
              <strong>Subscription Data:</strong> RevenueCat retains subscription data as long as necessary to provide the service and comply with legal obligations.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">5. Your Privacy Rights & Controls</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5.1 Access & Export Your Data</h3>
            <p className="text-gray-700 mb-4">You can export all of your locally stored data at any time:</p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
              <li>Open the App and go to Settings</li>
              <li>Tap "Data & Privacy"</li>
              <li>Tap "Manage Your Data"</li>
              <li>Tap "Export All Data"</li>
            </ol>
            <p className="text-gray-700 mb-6">
              This will generate a JSON file containing your mood entries, session stats, and preferences, which you can save or email to yourself.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">5.2 Delete Your Data</h3>
            <p className="text-gray-700 mb-4">You can delete all of your locally stored data at any time:</p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
              <li>Open the App and go to Settings</li>
              <li>Tap "Data & Privacy"</li>
              <li>Tap "Manage Your Data"</li>
              <li>Tap "Delete All Data"</li>
              <li>Confirm deletion</li>
            </ol>
            <p className="text-gray-700 mb-4">
              <strong>This action is permanent and cannot be undone.</strong> After deletion, your mood logs, streaks, and preferences will be erased from your device.
            </p>

            <p className="text-gray-700 mb-6">
              Note: Deleting data from the App does not delete anonymized analytics data already sent to Mixpanel or subscription records stored by RevenueCat.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">5.3 Manage Notifications</h3>
            <p className="text-gray-700 mb-6">
              You can control notifications at any time in Settings. All notifications are local (generated by your device), not push notifications from our servers.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">5.4 Cancel Your Subscription</h3>
            <p className="text-gray-700 mb-4">You can cancel your subscription at any time through the App Store:</p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-8">
              <li>Open the Settings app on your iPhone</li>
              <li>Tap your name at the top</li>
              <li>Tap "Subscriptions"</li>
              <li>Select Nuvin and tap "Cancel Subscription"</li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">5.5 Additional Rights for European Users (GDPR)</h3>
            <p className="text-gray-700 mb-4">
              If you are located in the European Economic Area (EEA), United Kingdom, or Switzerland, you have additional rights under the General Data Protection Regulation (GDPR):
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Right to Access:</strong> You can request confirmation of what personal data we process about you and receive a copy (use the Export feature above).</li>
              <li><strong>Right to Rectification:</strong> You can correct inaccurate data by updating it in the App settings.</li>
              <li><strong>Right to Erasure:</strong> You can request deletion of your data (use the Delete feature above).</li>
              <li><strong>Right to Restrict Processing:</strong> You can request that we limit how we use your data.</li>
              <li><strong>Right to Data Portability:</strong> You can export your data in a machine-readable format (JSON).</li>
              <li><strong>Right to Object:</strong> You can object to our processing of your data for certain purposes.</li>
              <li><strong>Right to Withdraw Consent:</strong> If we process your data based on consent, you can withdraw that consent at any time.</li>
            </ul>

            <p className="text-gray-700 mb-8">
              To exercise any of these rights, contact us at nathan.douziech@gmail.com.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">5.6 Additional Rights for California Users (CCPA)</h3>
            <p className="text-gray-700 mb-4">
              If you are a California resident, the California Consumer Privacy Act (CCPA) provides you with additional rights:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Right to Know:</strong> You can request details about the personal information we collect, use, disclose, and sell.</li>
              <li><strong>Right to Delete:</strong> You can request deletion of your personal information (use the Delete feature in Settings).</li>
              <li><strong>Right to Opt-Out of Sales:</strong> We do NOT sell your personal information, so there is nothing to opt out of.</li>
              <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your CCPA rights.</li>
            </ul>

            <p className="text-gray-700 mb-8">
              To exercise your CCPA rights, contact us at nathan.douziech@gmail.com.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">6. Children's Privacy</h2>
            <p className="text-gray-700 mb-4">
              Nuvin is intended for users aged 13 and older. We do not knowingly collect personal information from children under 13 years of age.
            </p>

            <p className="text-gray-700 mb-4">
              If you are between 13 and 17 years old, you must have permission from a parent or guardian to use the App.
            </p>

            <p className="text-gray-700 mb-8">
              If we learn that we have collected personal information from a child under 13 without parental consent, we will take steps to delete that information as quickly as possible. If you believe we have collected information from a child under 13, please contact us at nathan.douziech@gmail.com.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">7. International Data Transfers</h2>
            <p className="text-gray-700 mb-4">
              Your information may be transferred to and processed in the United States, where our third-party service providers (Mixpanel and RevenueCat) are located. The United States may have data protection laws that are different from the laws of your country.
            </p>

            <p className="text-gray-700 mb-8">
              By using the App, you consent to the transfer of your information to the United States. We take steps to ensure that your data receives adequate protection in accordance with applicable data protection laws.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">8. Do Not Track Signals</h2>
            <p className="text-gray-700 mb-4">
              The App does not track you across other apps or websites for advertising purposes. Our Privacy Manifest (PrivacyInfo.xcprivacy) explicitly declares that we do NOT engage in tracking as defined by Apple's App Tracking Transparency framework.
            </p>

            <p className="text-gray-700 mb-8">
              We do not respond to web browser "Do Not Track" signals because the App does not use web-based tracking technologies.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">9. Third-Party Links</h2>
            <p className="text-gray-700 mb-4">The App may contain links to external websites and resources, such as:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Crisis support hotlines (988 Suicide & Crisis Lifeline, Crisis Text Line)</li>
              <li>Mental health organizations (NAMI, ADAA, Mental Health America)</li>
              <li>Our Terms of Service and Privacy Policy (hosted on GitHub Pages)</li>
            </ul>

            <p className="text-gray-700 mb-8">
              These third-party sites have their own privacy policies. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies before providing any personal information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">10. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. When we make changes, we will:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Update the "Last Updated" date at the top of this policy</li>
              <li>Notify you through the App or via the email you provided (if applicable)</li>
              <li>For material changes, we may provide more prominent notice</li>
            </ul>

            <p className="text-gray-700 mb-8">
              We encourage you to review this Privacy Policy periodically. Your continued use of the App after changes are posted constitutes your acceptance of the updated Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">11. Medical Disclaimer</h2>
            <p className="text-gray-700 mb-4">
              While this is a privacy policy, it's important to note: <strong>Nuvin is not a medical device and does not provide medical advice, diagnosis, or treatment.</strong> The App is designed to provide general wellness support for anxiety and stress management.
            </p>

            <p className="text-gray-700 mb-4">
              We do not collect or process health data in a way that would classify the App as a medical device under applicable regulations. Your mood tracking data is for your personal use and self-reflection only.
            </p>

            <p className="text-gray-700 mb-8">
              If you are experiencing a mental health crisis, please contact emergency services (911 in the US) or a crisis helpline immediately.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">12. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>

            <p className="text-gray-700 mb-4">
              <strong>Email:</strong> nathan.douziech@gmail.com
            </p>

            <p className="text-gray-700 mb-8">
              We will respond to your inquiry within 30 days.
            </p>

            <div className="border-t border-gray-200 pt-8 mt-12">
              <p className="text-lg text-gray-800 font-semibold text-center italic">
                Your mental health journey is personal. Your data should be too.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
