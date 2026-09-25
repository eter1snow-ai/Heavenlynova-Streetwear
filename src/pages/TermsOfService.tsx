import { Link } from 'react-router-dom'

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="legal-policy-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '120px 20px 60px', lineHeight: 1.7 }}>
        <h1 style={{ textTransform: 'uppercase', marginBottom: '10px', fontSize: '2rem', letterSpacing: '0.08em', fontWeight: '500' }}>
          Terms of Service
        </h1>
        <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>
          <strong>Last updated:</strong> March 2026
        </p>

        <div style={{ height: '1px', backgroundColor: '#333333', margin: '35px 0' }} />

        {/* OVERVIEW */}
        <h3 style={{ marginTop: '30px', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '1.1rem' }}>
          Overview &amp; Operator Identification
        </h3>
        <p>
          This website and its associated digital store are operated by <strong>Sabie Tudor PFA</strong>, trading as <strong>HeavenlyNova</strong>, a registered commercial entity organized under the laws of Romania, European Union. Throughout the platform, the terms &ldquo;we&rdquo;, &ldquo;us&rdquo;, and &ldquo;our&rdquo; refer to HeavenlyNova.
        </p>
        <p style={{ marginTop: '10px' }}>
          By visiting our site, browsing collections, or purchasing artifacts from us, you participate in our &ldquo;Service&rdquo; and agree to be bound by the following Terms of Service (&ldquo;Terms&rdquo;), together with our <Link to="/privacy-policy" style={{ color: '#ffffff', textDecoration: 'underline' }}>Privacy Policy</Link>, <Link to="/shipping-policy" style={{ color: '#ffffff', textDecoration: 'underline' }}>Shipping Policy</Link>, and <Link to="/refund-policy" style={{ color: '#ffffff', textDecoration: 'underline' }}>Refund &amp; Return Policy</Link>.
        </p>
        <p style={{ marginTop: '10px' }}>
          HeavenlyNova operates as a custom headless digital platform. Payments are secured and processed through <strong>Stripe, Inc.</strong> (certified PCI-DSS Level 1 Service Provider), and garments are fulfilled via specialized manufacturing and printing partners in North America and Europe.
        </p>

        <div style={{ height: '1px', backgroundColor: '#333333', margin: '35px 0' }} />

        {/* 1. ONLINE STORE TERMS */}
        <h3 style={{ marginTop: '30px', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '1.1rem' }}>
          1. Store Eligibility &amp; User Warranties
        </h3>
        <p>
          By agreeing to these Terms, you represent that you are at least the age of majority in your state, province, or country of residence.
        </p>
        <p style={{ marginTop: '10px' }}>
          You agree not to use our products or Services for any unlawful or unauthorized purpose, nor violate any applicable laws in your jurisdiction (including, but not limited to, copyright, trademark, and intellectual property statutes).
        </p>

        <div style={{ height: '1px', backgroundColor: '#333333', margin: '35px 0' }} />

        {/* 2. PRODUCTS & MADE-TO-ORDER CRAFTSMANSHIP */}
        <h3 style={{ marginTop: '30px', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '1.1rem' }}>
          2. Products &amp; Made-to-Order Integrity
        </h3>
        <p>
          HeavenlyNova specializes in architectural streetwear and limited capsule releases. Every piece is fabricated made to order upon checkout confirmation.
        </p>
        <ul style={{ marginLeft: '24px', listStyleType: 'disc', marginTop: '10px', lineHeight: 1.8 }}>
          <li><strong>Visual Representation:</strong> We have made every reasonable effort to display garment colors, cuts, and graphic placements accurately. Subtle hue variations may occur depending on screen calibration and specific garment dye lots.</li>
          <li><strong>Textile Specifications:</strong> Garments feature premium heavyweight French terry, loopback fleece, and high-density cotton ring-spun jerseys.</li>
          <li><strong>Quantity Limits:</strong> We reserve the right to limit the sales of our artifacts or capsules to any individual, household, or geographical region.</li>
        </ul>

        <div style={{ height: '1px', backgroundColor: '#333333', margin: '35px 0' }} />

        {/* 3. PRICING & BILLING ACCURACY */}
        <h3 style={{ marginTop: '30px', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '1.1rem' }}>
          3. Prices, Currencies &amp; Payment Security
        </h3>
        <p>
          Prices for our products are stated in standard legal tender (USD, EUR, RON, etc.) and are subject to adjustment without prior notice.
        </p>
        <p style={{ marginTop: '10px' }}>
          All card transactions and digital wallets (Apple Pay, Google Pay) are encrypted end-to-end and tokenized directly via Stripe Checkout. HeavenlyNova never handles, stores, or sees raw credit or debit card numbers on our servers.
        </p>

        <div style={{ height: '1px', backgroundColor: '#333333', margin: '35px 0' }} />

        {/* 4. ORDERS & CONTRACT FORMATION */}
        <h3 style={{ marginTop: '30px', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '1.1rem' }}>
          4. Order Acceptance &amp; Contract Formation
        </h3>
        <p>
          A legally binding contract of purchase is formed when your order payment is verified by Stripe and a confirmation email with order details is generated.
        </p>
        <p style={{ marginTop: '10px' }}>
          We reserve the right to decline, hold, or cancel any order if automated risk-scoring flags potential fraud, unauthorized resale, or address discrepancy. In such instances, funds are refunded immediately.
        </p>

        <div style={{ height: '1px', backgroundColor: '#333333', margin: '35px 0' }} />

        {/* 5. SHIPPING & FULFILLMENT */}
        <h3 style={{ marginTop: '30px', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '1.1rem' }}>
          5. Shipping &amp; Delivery Terms
        </h3>
        <p>
          Shipping modalities, transit times, and delivery coverage are detailed in our <Link to="/shipping-policy" style={{ color: '#ffffff', textDecoration: 'underline' }}>Shipping Policy</Link>, which forms an integral part of these Terms. HeavenlyNova provides Complimentary Standard Shipping on all supported orders.
        </p>

        <div style={{ height: '1px', backgroundColor: '#333333', margin: '35px 0' }} />

        {/* 6. RETURNS, DEFECTS & RIGHT OF WITHDRAWAL */}
        <h3 style={{ marginTop: '30px', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '1.1rem' }}>
          6. Returns, Cancellations &amp; Legal Conformity
        </h3>
        <p>
          Returns and statutory defect warranties are administered strictly under our <Link to="/refund-policy" style={{ color: '#ffffff', textDecoration: 'underline' }}>Refund &amp; Return Policy</Link>.
        </p>
        <p style={{ marginTop: '10px' }}>
          Pursuant to <strong>Article 16(c) of Directive 2011/83/EU</strong> on Consumer Rights, goods made to the consumer&apos;s specifications are exempt from ordinary cooling-off returns. Statutory legal warranties of 2 years for non-conforming or defective items remain fully guaranteed.
        </p>

        <div style={{ height: '1px', backgroundColor: '#333333', margin: '35px 0' }} />

        {/* 7. INTELLECTUAL PROPERTY */}
        <h3 style={{ marginTop: '30px', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '1.1rem' }}>
          7. Intellectual Property &amp; Brand Rights
        </h3>
        <p>
          All graphic illustrations, emblems (including Seraphim, The Origin, Soulfull, and Heritage prints), logos, typography, visual layouts, and copywriting found on HeavenlyNova are the exclusive intellectual property of Sabie Tudor PFA.
        </p>
        <p style={{ marginTop: '10px' }}>
          Any unauthorized reproduction, modification, distribution, or commercial exploitation is strictly prohibited without prior written authorization.
        </p>

        <div style={{ height: '1px', backgroundColor: '#333333', margin: '35px 0' }} />

        {/* 8. PRODUCT SAFETY & EU COMPLIANCE (GPSR) */}
        <h3 style={{ marginTop: '30px', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '1.1rem' }}>
          8. Product Safety &amp; EU Compliance (GPSR - Regulation EU 2023/988)
        </h3>
        <p>
          In strict compliance with the European Union General Product Safety Regulation (GPSR, Regulation EU 2023/988), all garments fulfilled and marketed within the European Economic Area adhere to rigorous physical, chemical, and environmental health standards:
        </p>
        <ul style={{ marginLeft: '24px', listStyleType: 'disc', marginTop: '10px', lineHeight: 1.8 }}>
          <li><strong>Brand Operator / Manufacturer:</strong> Sabie Tudor PFA, trading as HeavenlyNova, Romania (email: <a href="mailto:support@heavenlynova.com" style={{ color: '#ffffff', textDecoration: 'underline' }}>support@heavenlynova.com</a>).</li>
          <li><strong>EU Authorized Economic Representative:</strong> HONSON VENTURES LIMITED, Gnaftis House, flat 102, Limassol, Mesa Geitonia, 4003, Cyprus (email: gpsr@honsonventures.com).</li>
          <li><strong>Certified Textiles:</strong> European apparel items are crafted utilizing certified sustainable blanks (Stanley/Stella, OEKO-TEX Standard 100, GOTS certified organic cotton, recycled polyester). Free from hazardous AZO colorants, phthalates, and heavy metals.</li>
          <li><strong>Garment Care &amp; Safety:</strong> Machine wash cold (30°C / 90°F) inside out with like colors. Do not bleach. Tumble dry on low or line dry to preserve ink density. Iron on low heat without direct iron contact on graphic prints. Keep away from open fire. Not intended for sleepwear.</li>
        </ul>

        <div style={{ height: '1px', backgroundColor: '#333333', margin: '35px 0' }} />

        {/* 9. LIMITATION OF LIABILITY */}
        <h3 style={{ marginTop: '30px', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '1.1rem' }}>
          9. Limitation of Liability
        </h3>
        <p>
          To the maximum extent permitted by applicable law, HeavenlyNova shall not be liable for any indirect, incidental, punitive, or consequential damages resulting from the use or inability to use our digital Services or products.
        </p>

        <div style={{ height: '1px', backgroundColor: '#333333', margin: '35px 0' }} />

        {/* 10. GOVERNING LAW & DISPUTE RESOLUTION */}
        <h3 style={{ marginTop: '30px', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '1.1rem' }}>
          10. Governing Law &amp; Online Dispute Resolution (ODR)
        </h3>
        <p>
          These Terms and any individual contracts for the purchase of products shall be governed by and construed in accordance with the laws of <strong>Romania</strong> and applicable mandatory consumer protection directives of the <strong>European Union</strong>.
        </p>
        <p style={{ marginTop: '10px' }}>
          Pursuant to Regulation (EU) No 524/2013, the European Commission provides an online platform for alternative dispute resolution for consumer complaints: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'underline' }}>https://ec.europa.eu/consumers/odr</a>. Our contact email for dispute resolution is <a href="mailto:support@heavenlynova.com" style={{ color: '#ffffff', textDecoration: 'underline' }}>support@heavenlynova.com</a>.
        </p>

        <div style={{ height: '1px', backgroundColor: '#333333', margin: '35px 0' }} />

        {/* 11. CONTACT */}
        <h3 style={{ marginTop: '30px', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '1.1rem' }}>
          11. Contact &amp; Legal Notices
        </h3>
        <p>For questions regarding these Terms or legal notices:</p>
        <p style={{ marginTop: '10px' }}>
          <strong>Email:</strong> <a href="mailto:support@heavenlynova.com" style={{ color: '#ffffff', textDecoration: 'underline' }}>support@heavenlynova.com</a><br />
          <strong>Operator:</strong> Sabie Tudor PFA, trading as HeavenlyNova<br />
          <strong>Country:</strong> Romania, European Union
        </p>

        <div style={{ height: '1px', backgroundColor: '#333333', margin: '40px 0' }} />

        <p style={{ marginTop: '40px', textAlign: 'center', opacity: 0.6, fontStyle: 'italic', fontSize: '0.9rem' }}>
          HeavenlyNova<br />
          Between Light &amp; Shadow
        </p>
      </div>
    </main>
  )
}
