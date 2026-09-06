import { usePageEffects } from "../hooks/usePageEffects";

export default function LegalPage() {
  usePageEffects("legal", "Legal — TGAB | Regulatory status, risk disclosure, terms & privacy", "TGAB legal centre: regulatory status, risk disclosure, terms of use, and privacy policy.");
  return (
    <main>
      <section className="page-hero">
        <div className="wrap rv">
          <h1>The fine print, in <span className="it">plain</span> sight.</h1>
          <p>Everything a prospective client should read before engaging with TGAB, including its current regulatory status, risk disclosures, and website terms.</p>
        </div>
      </section>
      <section className="block">
        <div className="wrap">
          <div className="legal-layout">
            <nav className="legal-nav" aria-label="Legal sections">
              <a href="#regulatory">Regulatory status</a>
              <a href="#risk">Risk disclosure</a>
              <a href="#terms">Terms of use</a>
              <a href="#privacy">Privacy</a>
              <a href="#complaints">Complaints</a>
              <a href="/cookies">Cookie policy</a>
              <a href="/accessibility">Accessibility</a>
            </nav>
            <div className="legal-body rv">
              <h2 id="regulatory">Regulatory status</h2>
              <p>The Global Assets Broker ("TGAB", "we") is licensed by the Financial Services Commission, Mauritius.</p>
              <ul>
                <li><b>Licence No.</b> GB26206568</li>
                <li><b>Licence type.</b> Investment Dealer (Full Service Dealer, excluding Underwriting)</li>
                <li><b>Issued under.</b> Section 29 of the Securities Act 2005, Rule 4 of the Securities (Licensing) Rules 2007, and the Financial Services (Consolidated Licensing and Fees) Rules 2008</li>
              </ul>
              <p>Visitors can verify TGAB's regulatory status directly in the <a href="https://opr.fscmauritius.org/ords/opr/r/fsc-opr/fsc-online-public-register-opr" target="_blank" rel="noopener noreferrer">FSC public Register of Licensees</a>.</p>
              <p>TGAB's Investment Dealer (Full Service Dealer, excluding Underwriting) licence does not authorise TGAB to underwrite securities. Content on this website is provided for general information only and does not constitute an offer, solicitation, invitation, or recommendation of any kind in any jurisdiction.</p>
              <p>Services, when launched, will be offered only in jurisdictions where TGAB is lawfully permitted to offer them and only to clients who satisfy our onboarding, suitability, and KYC/AML requirements. TGAB will not offer services to residents of jurisdictions where such services would be unlawful, including, without limitation, jurisdictions subject to applicable sanctions.</p>
              <h2 id="risk">Risk disclosure</h2>
              <p>Trading financial instruments carries a high level of risk and is not suitable for everyone. Before deciding to trade you should carefully consider your objectives, financial situation, experience, and risk appetite, and seek independent advice where appropriate.</p>
              <ul>
                <li><b>Capital risk.</b> You can lose some or all of your invested capital. Do not trade with money you cannot afford to lose.</li>
                <li><b>Options risk.</b> Options are complex instruments. Buyers can lose the entire premium paid; sellers can face losses substantially exceeding the premium received. Options are not suitable for all investors.</li>
                <li><b>Margin and leverage.</b> Trading on margin amplifies both gains and losses and can result in losses exceeding your initial deposit. You may be required to deposit additional funds at short notice, and positions may be liquidated without your consent.</li>
                <li><b>Market risk.</b> Prices can move rapidly and gap through order levels. Stop orders are not guaranteed to execute at the requested price.</li>
                <li><b>Liquidity risk.</b> Some instruments may become difficult or impossible to trade at a reasonable price, particularly in stressed markets or outside regular hours.</li>
                <li><b>Currency risk.</b> Trading instruments denominated in a currency other than your own exposes you to exchange-rate movements.</li>
                <li><b>Extended-hours risk.</b> Pre-market and after-hours sessions involve lower liquidity, wider spreads, and higher volatility than regular sessions.</li>
                <li><b>Data risk.</b> Market data displayed on this website may be delayed, indicative, or inaccurate and must not be relied upon for trading decisions.</li>
              </ul>
              <p>Past performance is not a reliable indicator of future results. Nothing on this website constitutes investment, legal, or tax advice.</p>
              <span id="tems" /><h2 id="terms">Terms of use</h2>
              <p>By accessing this website you agree to these terms. If you do not agree, do not use the website.</p>
              <ul>
                <li><b>Informational only.</b> This website provides general information about TGAB's intended business. It is not an offer or solicitation of any service or product.</li>
                <li><b>No reliance.</b> Content is provided "as is" without warranties of any kind. TGAB does not warrant that content is accurate, complete, or current, and accepts no liability for loss arising from reliance on it, to the maximum extent permitted by law.</li>
                <li><b>Intellectual property.</b> The TGAB name, logo, and website content are the property of the TGAB group and may not be reproduced without written consent.</li>
                <li><b>Third-party data and links.</b> Market data is supplied by third-party providers. TGAB is not responsible for third-party content, data accuracy, or linked websites.</li>
                <li><b>Jurisdiction.</b> The website is not directed at any person in any jurisdiction where its publication or availability would be contrary to law. It is your responsibility to comply with the laws applicable to you.</li>
                <li><b>Changes.</b> TGAB may amend this website and these terms at any time without notice.</li>
              </ul>
              <h2 id="privacy">Privacy</h2>
              <p>This notice describes how TGAB handles personal data collected through this website.</p>
              <ul>
                <li><b>What we collect.</b> Information you provide directly (such as your name and email address when contacting us or registering interest) and limited technical data generated by your visit (such as IP address, browser type, and pages viewed).</li>
                <li><b>Why we use it.</b> To respond to enquiries, provide updates you have requested, operate and secure the website, and meet legal and regulatory obligations.</li>
                <li><b>Sharing.</b> We do not sell personal data. Data may be shared with service providers who host or support this website, with group companies, and with regulators or authorities where required by law.</li>
                <li><b>Retention.</b> We keep personal data only as long as needed for the purposes above or as required by law.</li>
                <li><b>Your rights.</b> Depending on your jurisdiction, you may have rights to access, correct, or delete your personal data, and to object to or restrict its processing. To exercise these rights, contact us at the address below.</li>
                <li><b>Contact.</b> Privacy enquiries: <a href="mailto:accounts@tgab.net?subject=Privacy">accounts@tgab.net</a>.</li>
              </ul>
              <p>A full privacy policy, including detail on cookies and analytics, will be published before client services launch.</p>
              <h2 id="complaints">Complaints</h2>
              <p>If you have a complaint about this website or our communications, contact <a href="mailto:accounts@tgab.net?subject=Complaint">accounts@tgab.net</a> with the subject line "Complaint". We aim to acknowledge complaints within five business days. A formal complaints-handling procedure meeting regulatory requirements will be published at launch.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    
  );
}
