import { Container } from '@/ui/Container'
import { ArrowLeft } from 'lucide-react'

interface PrivacyPolicyProps {
  onNavigateHome: () => void
}

export function PrivacyPolicy({ onNavigateHome }: PrivacyPolicyProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-slate-200">
        <Container>
          <div className="py-6">
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Home
            </button>
          </div>
        </Container>
      </div>

      <Container>
        <article className="py-12 max-w-4xl mx-auto prose prose-slate prose-headings:font-display">
          <h1 className="text-4xl font-display font-bold text-slate-900 mb-2">SANDEEP OJHA & COMPANY</h1>
          <h2 className="text-2xl font-display font-semibold text-slate-800 mb-4">Website Legal & Privacy Policy Details</h2>

          <div className="mb-8 text-sm">
            <p className="mb-1">
              Website: <a href="https://www.sandeepojha.com" className="text-brand-600 hover:text-brand-700">www.sandeepojha.com</a>
            </p>
            <p className="mb-1">
              Email: <a href="mailto:info@sandeepojha.com" className="text-brand-600 hover:text-brand-700">info@sandeepojha.com</a>
            </p>
            <p className="text-slate-600">Last Updated: 21 September 2026</p>
          </div>

          <div className="text-slate-700 leading-relaxed space-y-8">
            {/* Section A */}
            <section>
              <h2 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-4">A. FINANCIAL MARKET DISCLAIMER</h2>

              <h3 className="text-xl font-display font-bold text-slate-900 mt-8 mb-3">1. GENERAL DISCLAIMER</h3>
              <p>
                The information, research, analysis, commentary, charts, data, opinions, observations, market views, trading ideas and other materials published or distributed by SANDEEP OJHA & COMPANY ("SOC") are provided for the educational purposes and within the scope stated for the relevant service.
              </p>
              <p>
                The content available through SOC Morning Brief™, SOC Midday Brief™, SOC Post Market Report™ and other SOC products may relate to securities, indices, derivatives, commodities, currencies, macroeconomic developments, global markets and other financial-market subjects.
              </p>
              <p>
                Such information should not be interpreted beyond the scope permitted under applicable laws and regulations.
              </p>

              <h3 className="text-xl font-display font-bold text-slate-900 mt-8 mb-3">2. NO GUARANTEE OF RETURNS</h3>
              <p>Financial markets are subject to market risk.</p>
              <p>SOC does not guarantee or assure:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Profits</li>
                <li>Returns</li>
                <li>Capital appreciation</li>
                <li>Achievement of any price target</li>
                <li>Achievement of any trading target</li>
                <li>Successful execution of any trade</li>
                <li>Avoidance of losses</li>
                <li>Any particular market outcome</li>
              </ul>
              <p>
                Past performance or previously successful market observations do not guarantee future performance.
              </p>

              <h3 className="text-xl font-display font-bold text-slate-900 mt-8 mb-3">3. MARKET RISK</h3>
              <p>Investment and trading in financial instruments involves risk.</p>
              <p>Depending upon the instrument, such risks may include:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Market risk</li>
                <li>Volatility risk</li>
                <li>Liquidity risk</li>
                <li>Credit risk</li>
                <li>Interest-rate risk</li>
                <li>Currency risk</li>
                <li>Concentration risk</li>
                <li>Leverage risk</li>
                <li>Derivatives risk</li>
                <li>Counterparty risk</li>
                <li>Gap risk</li>
                <li>Execution risk</li>
                <li>Regulatory risk</li>
                <li>Risks arising from unexpected economic, political or geopolitical events</li>
              </ul>
              <p>
                Trading in futures and options can result in substantial losses and may involve leverage.
              </p>
              <p>
                You should understand the relevant product and associated risks before entering into any transaction.
              </p>

              <h3 className="text-xl font-display font-bold text-slate-900 mt-8 mb-3">4. RESEARCH AND MARKET INFORMATION</h3>
              <p>
                SOC may use information obtained from public sources, exchanges, regulatory filings, financial databases, data providers, news sources and other third-party sources.
              </p>
              <p>
                While reasonable care may be taken in preparing our reports, SOC does not represent that every item of information will always be accurate, complete, current or error-free.
              </p>
              <p>Market information can change rapidly.</p>
              <p>
                A report prepared at one point in time may not remain applicable after subsequent market developments.
              </p>

              <h3 className="text-xl font-display font-bold text-slate-900 mt-8 mb-3">5. INDEPENDENT DECISION-MAKING</h3>
              <p>
                Users should independently evaluate any information before taking financial-market decisions.
              </p>
              <p>You should consider your:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Financial position</li>
                <li>Investment objectives</li>
                <li>Risk tolerance</li>
                <li>Investment horizon</li>
                <li>Liquidity requirements</li>
                <li>Relevant financial circumstances</li>
              </ul>
              <p>Where appropriate, you should obtain independent professional advice.</p>

              <h3 className="text-xl font-display font-bold text-slate-900 mt-8 mb-3">6. NO FIDUCIARY OR GUARANTEED RELATIONSHIP</h3>
              <p>
                Nothing on the website should be interpreted as creating a fiduciary relationship, guarantee, promise of returns or other relationship beyond the specific service expressly agreed between SOC and the customer.
              </p>
              <p>
                The legal and regulatory nature of any service shall be determined by the actual service provided and applicable law.
              </p>

              <h3 className="text-xl font-display font-bold text-slate-900 mt-8 mb-3">7. THIRD-PARTY DATA</h3>
              <p>
                SOC may display market data, prices, statistics, indices, charts, news or other information sourced from third parties.
              </p>
              <p>
                SOC is not responsible for delays, omissions, inaccuracies or interruptions originating from third-party sources, exchanges, data vendors, telecommunications providers or other external systems, subject to applicable law.
              </p>

              <h3 className="text-xl font-display font-bold text-slate-900 mt-8 mb-3">8. PERSONAL RESPONSIBILITY</h3>
              <p>
                Any action taken by a user based on information obtained through the SOC website, reports, communications or other services is undertaken at the user's own responsibility.
              </p>
              <p>
                SOC shall not be responsible for an individual's investment or trading decision merely because the individual accessed or relied upon information published by SOC.
              </p>

              <h3 className="text-xl font-display font-bold text-slate-900 mt-8 mb-3">9. IMPORTANT NOTICE</h3>
              <p>
                Nothing contained in this Disclaimer is intended to exclude rights or protections that cannot legally be excluded under applicable law.
              </p>
            </section>

            {/* Section B */}
            <section>
              <h2 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-4">B. INTELLECTUAL PROPERTY & COPYRIGHT POLICY</h2>
              <p>All content published by SANDEEP OJHA & COMPANY, including:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>SOC Morning Brief™</li>
                <li>SOC Midday Brief™</li>
                <li>SOC Post Market Report™</li>
                <li>Weekly Market Insights™</li>
                <li>Monthly Reports™</li>
                <li>Research reports™</li>
                <li>Market commentary</li>
                <li>Charts</li>
                <li>Graphics™</li>
                <li>Videos™</li>
                <li>Presentations™</li>
                <li>Logos™</li>
                <li>Product names™</li>
                <li>Website content™</li>
                <li>Proprietary methodologies™</li>
                <li>Templates™</li>
                <li>Databases</li>
                <li>Other original material are Trade Marked (™)</li>
              </ul>
              <p>is protected by applicable intellectual-property laws.</p>
              <p>Unless expressly permitted in writing, users may not:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Copy</li>
                <li>Reproduce</li>
                <li>Resell</li>
                <li>Republish</li>
                <li>Upload</li>
                <li>Forward</li>
                <li>Distribute</li>
                <li>Record</li>
                <li>Commercially exploit</li>
                <li>Modify</li>
                <li>Create derivative commercial works</li>
              </ul>
              <p>from SOC's paid content.</p>

              <h3 className="text-xl font-display font-bold text-slate-900 mt-8 mb-3">SUBSCRIPTION CONTENT</h3>
              <p>
                A paid subscription provides a limited right to access the purchased content.
              </p>
              <p>
                It does not transfer ownership or intellectual-property rights to the subscriber.
              </p>
              <p>Subscribers must not forward paid reports to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>WhatsApp groups</li>
                <li>Telegram channels</li>
                <li>Social-media groups</li>
                <li>Websites</li>
                <li>Forums</li>
                <li>Email distribution lists</li>
                <li>Public communities</li>
                <li>Other third parties</li>
              </ul>
              <p>
                Unauthorised distribution may result in immediate suspension or termination of the subscription without prejudice to other legal remedies.
              </p>

              <h3 className="text-xl font-display font-bold text-slate-900 mt-8 mb-3">WATERMARKING AND ACCESS CONTROL</h3>
              <p>SOC may use:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Customer-specific identifiers</li>
                <li>Watermarks</li>
                <li>Digital access controls</li>
                <li>Login restrictions</li>
                <li>Device restrictions</li>
                <li>Access logs</li>
                <li>Other reasonable security mechanisms</li>
              </ul>
              <p>to protect its intellectual property.</p>
              <p>Attempting to circumvent such mechanisms is prohibited.</p>
            </section>

            {/* Section F */}
            <section>
              <h2 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-4">F. REFUND & CANCELLATION POLICY</h2>
              <p className="text-sm text-slate-600">SANDEEP OJHA & COMPANY</p>
              <p className="text-sm text-slate-600 mb-4">Last Updated: 21 September 2026</p>

              <h3 className="text-xl font-display font-bold text-slate-900 mt-8 mb-3">1. GENERAL POLICY</h3>
              <p>
                SOC provides digital research products and subscription-based services.
              </p>
              <p>
                Because these products may be delivered digitally and access may be activated within 3 to 4 hours after payment credited into our accounts, Customer will be added immediately into our community after the payment, customers should carefully review the product description, subscription period, features and applicable terms before completing a purchase.
              </p>

              <h3 className="text-xl font-display font-bold text-slate-900 mt-8 mb-3">2. DIGITAL SUBSCRIPTIONS</h3>
              <p>
                Unless a particular product page expressly states otherwise, subscription fees for digital research products may be non-refundable once subscription access has been activated or the relevant digital service has been delivered.
              </p>
              <p>This may include:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>SOC Morning Brief™</li>
                <li>SOC Midday Brief™</li>
                <li>SOC Post Market Report™</li>
                <li>Bundled research subscriptions™</li>
                <li>Weekly reports™</li>
                <li>Monthly reports™</li>
                <li>Other digital research products</li>
              </ul>

              <h3 className="text-xl font-display font-bold text-slate-900 mt-8 mb-3">3. DUPLICATE PAYMENT</h3>
              <p>
                If a customer has been charged more than once for the same transaction because of a technical or payment-processing error, the duplicate transaction may be reviewed for refund.
              </p>
              <p>The customer should contact:</p>
              <p>
                <a href="mailto:info@sandeepojha.com" className="text-brand-600 hover:text-brand-700">info@sandeepojha.com</a>
              </p>
              <p>with the relevant transaction details.</p>

              <h3 className="text-xl font-display font-bold text-slate-900 mt-8 mb-3">4. FAILED TRANSACTIONS</h3>
              <p>
                If a payment has been debited from the customer's account but the subscription has not been activated because of a payment gateway or technical issue, the customer should contact SOC with:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Transaction ID</li>
                <li>Date and time</li>
                <li>Amount</li>
                <li>Registered email/mobile number</li>
                <li>Payment confirmation</li>
              </ul>
              <p>
                SOC will investigate the transaction with the relevant payment provider.
              </p>

              <h3 className="text-xl font-display font-bold text-slate-900 mt-8 mb-3">5. SERVICE DELIVERY FAILURE</h3>
              <p>
                Where SOC determines that a paid subscription could not be delivered because of a material failure attributable to SOC, SOC may, at its discretion and subject to applicable law:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Restore access</li>
                <li>Extend the subscription</li>
                <li>Provide the missed service</li>
                <li>Process an appropriate refund or adjustment</li>
              </ul>

              <h3 className="text-xl font-display font-bold text-slate-900 mt-8 mb-3">6. NON-REFUNDABLE CIRCUMSTANCES</h3>
              <p>A refund will generally not be available merely because:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>The customer did not read the report</li>
                <li>The customer did not use the subscription</li>
                <li>The customer changed their mind after activation</li>
                <li>The market moved contrary to the customer's expectations</li>
                <li>A research view did not produce the expected result</li>
                <li>The customer incurred a trading loss</li>
                <li>The customer did not agree with the market analysis</li>
                <li>The customer failed to cancel an applicable renewal before the renewal date</li>
              </ul>

              <h3 className="text-xl font-display font-bold text-slate-900 mt-8 mb-3">7. FRAUDULENT TRANSACTIONS</h3>
              <p>
                SOC reserves the right to investigate suspicious or fraudulent transactions.
              </p>
              <p>
                Where fraud, unauthorised use, payment manipulation or misuse of a subscription is identified, access may be suspended while the matter is investigated.
              </p>

              <h3 className="text-xl font-display font-bold text-slate-900 mt-8 mb-3">8. CANCELLATION</h3>
              <p>
                Customers may cancel a future subscription renewal where an applicable cancellation facility is provided.
              </p>
              <p>
                Cancellation of a future renewal does not automatically result in a refund of an already activated subscription period.
              </p>

              <h3 className="text-xl font-display font-bold text-slate-900 mt-8 mb-3">9. CHARGEBACKS</h3>
              <p>
                Customers are requested to contact SOC before initiating a payment dispute or chargeback where the issue concerns service delivery, subscription access or billing.
              </p>
              <p>
                Nothing in this section restricts any rights available to a customer under applicable law or through their payment provider.
              </p>
            </section>

            {/* Section G */}
            <section>
              <h2 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-4">G. SUBSCRIPTION POLICY</h2>

              <h3 className="text-xl font-display font-bold text-slate-900 mt-8 mb-3">1. SUBSCRIPTION ACTIVATION</h3>
              <p>A subscription becomes active after:</p>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Successful payment</li>
                <li>Confirmation of the transaction</li>
                <li>Activation of the relevant service by SOC or its technology/payment provider</li>
              </ol>

              <h3 className="text-xl font-display font-bold text-slate-900 mt-8 mb-3">2. SUBSCRIPTION PERIOD</h3>
              <p>
                The subscription period shall be displayed on the relevant product page before purchase.
              </p>
              <p>
                Access shall normally expire automatically at the end of the applicable subscription period unless renewed.
              </p>

              <h3 className="text-xl font-display font-bold text-slate-900 mt-8 mb-3">3. PERSONAL ACCOUNT</h3>
              <p>
                A subscription is intended for the customer who purchased it.
              </p>
              <p>Unless expressly stated otherwise, customers must not:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Share credentials</li>
                <li>Share access links</li>
                <li>Allow multiple people to use one personal subscription</li>
                <li>Resell access</li>
                <li>Distribute paid reports to third parties</li>
              </ul>

              <h3 className="text-xl font-display font-bold text-slate-900 mt-8 mb-3">4. PRODUCT CONTENT</h3>
              <p>
                SOC may modify the layout, presentation, data sources, delivery mechanism or specific components of a research product from time to time.
              </p>
              <p>Such changes may be required due to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Market developments</li>
                <li>Data availability</li>
                <li>Technology</li>
                <li>Regulatory requirements</li>
                <li>Third-party service changes</li>
                <li>Operational considerations</li>
              </ul>

              <h3 className="text-xl font-display font-bold text-slate-900 mt-8 mb-3">5. DELIVERY</h3>
              <p>Research reports may be delivered through:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Email</li>
                <li>Website</li>
                <li>Customer dashboard</li>
                <li>Mobile/web application</li>
                <li>Messaging platform</li>
                <li>Other channels specified by SOC</li>
              </ul>
              <p>
                Customers are responsible for ensuring that their registered contact information remains accurate.
              </p>

              <h3 className="text-xl font-display font-bold text-slate-900 mt-8 mb-3">6. EMAIL DELIVERY</h3>
              <p>
                Customers should add SOC's official email address to their safe-sender or contact list where appropriate.
              </p>
              <p>SOC is not responsible for delivery failures caused by:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Incorrect email addresses</li>
                <li>Full inboxes</li>
                <li>Spam filters</li>
                <li>Email-provider outages</li>
                <li>Customer device problems</li>
                <li>Other third-party technical failures</li>
              </ul>

              <h3 className="text-xl font-display font-bold text-slate-900 mt-8 mb-3">7. ACCESS TERMINATION</h3>
              <p>SOC may suspend or terminate access where a customer:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Violates these Terms</li>
                <li>Redistributes paid content</li>
                <li>Shares credentials</li>
                <li>Attempts to circumvent access controls</li>
                <li>Uses the service fraudulently</li>
                <li>Engages in unlawful activity</li>
              </ul>
            </section>

            {/* Section I */}
            <section>
              <h2 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-4">I. PRIVACY RIGHTS & DATA PROTECTION NOTICE</h2>
              <p>SOC may collect personal information such as:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Name</li>
                <li>Email</li>
                <li>Mobile number</li>
                <li>Billing information</li>
                <li>Subscription information</li>
                <li>Transaction references</li>
                <li>Communication history</li>
                <li>Website usage information</li>
                <li>Other information reasonably necessary to provide services</li>
              </ul>
              <p>
                SOC will process personal data for legitimate purposes such as providing subscriptions, processing transactions, communicating with customers, maintaining records, improving services, preventing fraud and complying with legal obligations.
              </p>
              <p>
                India's Digital Personal Data Protection framework was enacted in 2023 and the Digital Personal Data Protection Rules, 2025 were notified in November 2025, with a phased commencement framework. SOC's detailed privacy processes should therefore be aligned with the provisions applicable at the time each processing activity occurs.
              </p>
              <p>
                Customers may contact SOC regarding applicable privacy rights and requests through:
              </p>
              <p>
                <a href="mailto:info@sandeepojha.com" className="text-brand-600 hover:text-brand-700">info@sandeepojha.com</a>
              </p>
              <p>
                The complete Privacy Policy should be maintained as a separate page and should be read together with this notice.
              </p>
            </section>

            {/* Section J */}
            <section>
              <h2 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-4">J. PAYMENT & ORDER CONFIRMATION NOTICE</h2>
              <p>Before completing a purchase, customers should be shown:</p>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 my-6">
                <p className="mb-1"><strong>Product:</strong> [PRODUCT NAME]</p>
                <p className="mb-1"><strong>Subscription Period:</strong> [PERIOD]</p>
                <p className="mb-1"><strong>Price:</strong> ₹[AMOUNT]</p>
                <p className="mb-1"><strong>Applicable Taxes:</strong> [IF APPLICABLE]</p>
                <p className="mb-1"><strong>Total Payable:</strong> ₹[AMOUNT]</p>
                <p className="mb-1"><strong>Delivery Method:</strong> [EMAIL / DASHBOARD / OTHER]</p>
                <p className="mb-1"><strong>Refund Policy:</strong> [LINK]</p>
                <p className="mb-1"><strong>Terms & Conditions:</strong> [LINK]</p>
                <p className="mb-0"><strong>Privacy Policy:</strong> [LINK]</p>
              </div>
              <p>The customer should affirmatively acknowledge:</p>
              <p className="italic">
                "I have read and agree to the Terms & Conditions, Privacy Policy, Disclaimer, Risk Disclosure and Refund & Cancellation Policy."
              </p>
              <p>
                Where appropriate, promotional consent should be collected separately rather than treating acceptance of contractual terms as blanket marketing consent.
              </p>
            </section>

            {/* Section K */}
            <section>
              <h2 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-4">K. SUBSCRIPTION CHECKOUT DISCLAIMER</h2>
              <p>This short notice can be placed immediately above the BUY NOW / SUBSCRIBE button:</p>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-6">
                <p className="text-amber-900 mb-0">
                  <strong>Important:</strong> SOC research products contain market information, research and analysis. Financial markets involve risk and no profit or return is guaranteed. Subscription to a research product does not guarantee any trading or investment outcome. Please review the Terms & Conditions, Disclaimer, Risk Disclosure and Refund Policy before purchasing.
                </p>
              </div>
            </section>

            {/* Section M */}
            <section>
              <h2 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-4">M. COPYRIGHT NOTICE</h2>
              <p>
                © 2026 SANDEEP OJHA & COMPANY. All Rights Reserved.
              </p>
              <p>
                SOC Morning Brief™, SOC Midday Brief™, SOC Post Market Report™ and other SOC-branded products, names, research, reports, graphics, designs and proprietary materials are protected by applicable intellectual-property laws.
              </p>
              <p>
                Unauthorised copying, forwarding, reproduction, publication, resale or redistribution is prohibited.
              </p>
            </section>

            {/* Section N */}
            <section>
              <h2 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-4">N. SHORT WEBSITE DISCLAIMER</h2>
              <p>This can be displayed near market-related content:</p>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 my-6">
                <p className="mb-0">
                  <strong>Market Disclaimer:</strong> Financial markets involve risk. The information provided by SANDEEP OJHA & COMPANY is subject to applicable disclosures and regulatory requirements. No profit or return is guaranteed. Past performance is not indicative of future results. Please read the full Disclaimer and Risk Disclosure before acting on any information.
                </p>
              </div>
            </section>

            {/* Section O */}
            <section>
              <h2 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-4">O. CUSTOMER ACKNOWLEDGEMENT</h2>
              <p>During onboarding or checkout, SOC may use:</p>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 my-6">
                <h4 className="font-bold text-slate-900 mt-0 mb-3">Customer Acknowledgement</h4>
                <p className="mb-0">
                  I understand that financial markets involve risk and that no profit or return is guaranteed. I understand that SOC research and market information should not be treated as a guarantee of any particular outcome. I am responsible for my own financial decisions and have reviewed the applicable Terms & Conditions, Disclaimer, Risk Disclosure, Privacy Policy and Refund & Cancellation Policy.
                </p>
              </div>
            </section>
          </div>
        </article>
      </Container>
    </div>
  )
}
