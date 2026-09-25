import { Link } from 'react-router-dom'

export default function ShippingPolicy() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="legal-policy-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '120px 20px 60px', lineHeight: 1.7 }}>
        <h1 style={{ textTransform: 'uppercase', marginBottom: '10px', fontSize: '2rem', letterSpacing: '0.08em', fontWeight: '500' }}>
          Shipping Policy
        </h1>
        <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>
          <strong>Last updated:</strong> March 2026
        </p>

        <div style={{ height: '1px', backgroundColor: '#333333', margin: '35px 0' }} />

        {/* OVERVIEW & FREE SHIPPING */}
        <h3 style={{ marginTop: '30px', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '1.1rem' }}>
          1. Overview & Complimentary Shipping
        </h3>
        <p>
          At HeavenlyNova, every piece is made to order — produced individually once your order is confirmed. This approach eliminates overproduction, preserves fabric integrity, and guarantees each artifact is freshly crafted.
        </p>
        <p style={{ marginTop: '12px' }}>
          To provide a seamless experience, HeavenlyNova offers <strong>Complimentary Standard Shipping (Free Shipping)</strong> on all eligible orders across our primary global delivery zones. There are no surprise shipping charges added at checkout.
        </p>

        <div style={{ height: '1px', backgroundColor: '#333333', margin: '35px 0' }} />

        {/* PRODUCTION TIME */}
        <h3 style={{ marginTop: '30px', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '1.1rem' }}>
          2. Production & Crafting Times
        </h3>
        <p>Because all garments are custom-made upon placement of order, each piece undergoes a precise fabrication and quality inspection process before handover to logistics carriers:</p>
        <ul style={{ marginLeft: '24px', listStyleType: 'disc', marginTop: '10px', lineHeight: 1.8 }}>
          <li><strong>Standard Production Time:</strong> 1–3 business days.</li>
          <li><strong>Average Turnaround:</strong> Over 85% of orders complete printing, curing, and packaging within 24–48 hours.</li>
          <li>Multi-item orders may be bundled or dispatched from the nearest certified facility to guarantee optimal delivery speed.</li>
        </ul>

        <div style={{ height: '1px', backgroundColor: '#333333', margin: '35px 0' }} />

        {/* REGIONAL SHIPPING TIMES */}
        <h3 style={{ marginTop: '30px', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '1.1rem' }}>
          3. Supported Regions & Estimated Delivery Windows
        </h3>
        <p>We partner with premier global carriers (including USPS, FedEx, DHL, DPD, Royal Mail, and local postal operators) to deliver across our Tier 1 operational network:</p>

        <div style={{ marginTop: '20px', display: 'grid', gap: '16px' }}>
          <div style={{ border: '1px solid #262626', padding: '16px 20px', backgroundColor: 'rgba(255,255,255,0.02)' }}>
            <h4 style={{ fontWeight: '600', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>🇺🇸</span> United States
            </h4>
            <p style={{ fontSize: '0.9rem', marginTop: '6px', color: '#cccccc' }}>
              <strong>Transit Time:</strong> 3–7 business days • <strong>Total Estimated Delivery:</strong> 4–10 business days.<br />
              Fulfilled directly via state-of-the-art domestic facilities in the United States.
            </p>
          </div>

          <div style={{ border: '1px solid #262626', padding: '16px 20px', backgroundColor: 'rgba(255,255,255,0.02)' }}>
            <h4 style={{ fontWeight: '600', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>🇨🇦</span> Canada
            </h4>
            <p style={{ fontSize: '0.9rem', marginTop: '6px', color: '#cccccc' }}>
              <strong>Transit Time:</strong> 5–10 business days • <strong>Total Estimated Delivery:</strong> 6–13 business days.<br />
              Cross-border expedited postal routing.
            </p>
          </div>

          <div style={{ border: '1px solid #262626', padding: '16px 20px', backgroundColor: 'rgba(255,255,255,0.02)' }}>
            <h4 style={{ fontWeight: '600', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>🇬🇧</span> United Kingdom
            </h4>
            <p style={{ fontSize: '0.9rem', marginTop: '6px', color: '#cccccc' }}>
              <strong>Transit Time:</strong> 4–8 business days • <strong>Total Estimated Delivery:</strong> 5–11 business days.<br />
              Standard tracked delivery via Royal Mail / DHL.
            </p>
          </div>

          <div style={{ border: '1px solid #262626', padding: '16px 20px', backgroundColor: 'rgba(255,255,255,0.02)' }}>
            <h4 style={{ fontWeight: '600', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>🇪🇺</span> European Union &amp; EEA
            </h4>
            <p style={{ fontSize: '0.9rem', marginTop: '6px', color: '#cccccc' }}>
              <strong>Countries:</strong> Germany, France, Italy, Spain, Netherlands, Belgium, Austria, Switzerland, Ireland, Luxembourg, Portugal, Sweden, Denmark, Norway, Finland, Poland, Czech Republic, Greece, Romania.<br />
              <strong>Transit Time:</strong> 4–9 business days • <strong>Total Estimated Delivery:</strong> 5–12 business days.<br />
              Dispatched via European fulfillment networks compliant with EU consumer standards.
            </p>
          </div>
        </div>

        <div style={{ height: '1px', backgroundColor: '#333333', margin: '35px 0' }} />

        {/* ORDER TRACKING */}
        <h3 style={{ marginTop: '30px', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '1.1rem' }}>
          4. End-to-End Tracking
        </h3>
        <p>Every order dispatched receives complete journey visibility:</p>
        <ul style={{ marginLeft: '24px', listStyleType: 'disc', marginTop: '10px', lineHeight: 1.8 }}>
          <li>As soon as your parcel is scanned by the carrier, an automated confirmation email with your <strong>tracking number and direct carrier link</strong> is transmitted to the email provided at checkout.</li>
          <li>You can also monitor live fulfillment progress directly on our <Link to="/track-order" style={{ color: '#ffffff', textDecoration: 'underline' }}>Track Order Portal</Link>.</li>
          <li>Please allow <strong>24–48 hours</strong> from label creation for the initial carrier scan and checkpoint synchronization.</li>
        </ul>

        <div style={{ height: '1px', backgroundColor: '#333333', margin: '35px 0' }} />

        {/* CUSTOMS, VAT & IMPORT COMPLIANCE */}
        <h3 style={{ marginTop: '30px', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '1.1rem' }}>
          5. Customs, VAT &amp; Regulatory Compliance
        </h3>
        <p>In accordance with consumer transparency directives in the European Union, United Kingdom, and North America:</p>
        <ul style={{ marginLeft: '24px', listStyleType: 'disc', marginTop: '10px', lineHeight: 1.8 }}>
          <li><strong>Domestic &amp; Regional Fulfilment:</strong> Orders are routed through local or regional production centers to minimize international customs handling.</li>
          <li><strong>EU Customers:</strong> Orders delivered within the European Union comply with applicable EU VAT directives. You will not face unexpected clearance surcharges upon standard courier delivery.</li>
          <li><strong>International Cross-Border Shipments:</strong> For territories where regional customs thresholds apply (e.g. non-EEA imports), any statutory import duties or clearance fees imposed by the destination country&apos;s customs authorities remain the responsibility of the recipient.</li>
        </ul>

        <div style={{ height: '1px', backgroundColor: '#333333', margin: '35px 0' }} />

        {/* ADDRESS ACCURACY & REDELIVERY */}
        <h3 style={{ marginTop: '30px', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '1.1rem' }}>
          6. Address Accuracy &amp; Undeliverable Parcels
        </h3>
        <p>
          Please ensure all shipping parameters (street name, apartment/suite number, postal code, and phone number) are entered accurately during checkout.
        </p>
        <p style={{ marginTop: '10px' }}>
          HeavenlyNova cannot be held liable for delivery failures resulting from incomplete or inaccurate addresses provided at checkout. If a parcel is returned to sender due to an invalid address or failure to collect from a local access point, reshipment fees may apply.
        </p>

        <div style={{ height: '1px', backgroundColor: '#333333', margin: '35px 0' }} />

        {/* DAMAGED OR LOST IN TRANSIT */}
        <h3 style={{ marginTop: '30px', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '1.1rem' }}>
          7. Damaged, Defective, or Lost Packages
        </h3>
        <p>
          We stand firmly behind the delivery of every piece. In the rare event that a package is lost in transit or arrives with exterior damage:
        </p>
        <ul style={{ marginLeft: '24px', listStyleType: 'disc', marginTop: '10px', lineHeight: 1.8 }}>
          <li>Contact our support team within <strong>48 hours of estimated delivery</strong> at <a href="mailto:support@heavenlynova.com" style={{ color: '#ffffff', textDecoration: 'underline' }}>support@heavenlynova.com</a>.</li>
          <li>Include your <strong>Order Number</strong>, carrier tracking code, and high-resolution photographs of any damaged packaging or garments.</li>
          <li>Upon verification, we will immediately initiate an expedited replacement or refund pursuant to our <Link to="/refund-policy" style={{ color: '#ffffff', textDecoration: 'underline' }}>Refund Policy</Link>.</li>
        </ul>

        <div style={{ height: '1px', backgroundColor: '#333333', margin: '35px 0' }} />

        {/* CONTACT */}
        <h3 style={{ marginTop: '30px', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '1.1rem' }}>
          8. Support &amp; Inquiries
        </h3>
        <p>For any logistical, transit, or delivery inquiries:</p>
        <p style={{ marginTop: '10px' }}>
          <strong>Email:</strong> <a href="mailto:support@heavenlynova.com" style={{ color: '#ffffff', textDecoration: 'underline' }}>support@heavenlynova.com</a><br />
          <strong>Brand Operator:</strong> Sabie Tudor PFA, trading as HeavenlyNova<br />
          <strong>Support Hours:</strong> Monday – Friday, 09:00 – 18:00 (EET)
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
