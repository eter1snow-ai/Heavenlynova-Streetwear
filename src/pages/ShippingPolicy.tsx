import { Link } from 'react-router-dom'

export default function ShippingPolicy() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="legal-policy-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '120px 20px 80px', lineHeight: 1.8 }}>
        <h1 style={{ textTransform: 'uppercase', marginBottom: '10px', fontSize: '2rem', letterSpacing: '0.08em', fontWeight: '500' }}>
          Shipping Policy
        </h1>
        <p style={{ opacity: 0.6, fontSize: '0.85rem', letterSpacing: '0.05em' }}>
          <strong>Last updated:</strong> October 2026
        </p>

        <div style={{ height: '1px', backgroundColor: '#262626', margin: '35px 0' }} />

        <div className="space-y-6" style={{ fontSize: '0.95rem', color: '#d4d4d4' }}>
          <p>
            Every HeavenlyNova piece is made to order, which means it&apos;s produced only after you place your order, so nothing is overproduced and your piece comes fresh from the press. Standard tracked shipping is free on all eligible orders, and we never add shipping charges at checkout.
          </p>

          <p>
            Production takes 1 to 3 business days. After that, delivery takes about 3 to 7 business days in the United States, 5 to 10 in Canada, and 4 to 9 in the European Union, which puts the total from order to doorstep at roughly 4 to 10 business days in the US, 6 to 13 in Canada and 5 to 12 in the EU. Orders to Germany and the Czech Republic are typically the quickest, often arriving within 3 to 7 business days in total thanks to direct local production. Orders to the United Kingdom take about 5 to 11 business days in total. We ship with carriers such as USPS, FedEx, DHL, DPD and Royal Mail, and orders with several items can be split and sent from different production partners so everything reaches you as fast as possible.
          </p>

          <p>
            As soon as your parcel is scanned by the carrier, you&apos;ll get an email with your tracking number and a direct link, and you can also follow it on our{' '}
            <Link to="/track-order" style={{ color: '#ffffff', textDecoration: 'underline' }}>
              Track Order Portal
            </Link>
            . Please allow 24 to 48 hours after the label is created for the first scan to appear.
          </p>

          <p>
            Orders in the United States ship from within the US, and orders in the European Union ship from within the EU, so you shouldn&apos;t face import duties or clearance charges on standard delivery. Canada, the United Kingdom, Switzerland and Norway sit outside those zones, so import taxes or duties may be charged at delivery depending on your country and the order value, and these are paid by the recipient.
          </p>

          <p>
            Please double-check your address and phone number at checkout. We can&apos;t be responsible for deliveries that fail because of an incomplete or incorrect address, and if a parcel comes back to us for that reason or because it wasn&apos;t collected, reshipping fees may apply.
          </p>

          <p>
            If your package is lost, or arrives damaged, write to{' '}
            <a href="mailto:support@heavenlynova.com" style={{ color: '#ffffff', textDecoration: 'underline' }}>
              support@heavenlynova.com
            </a>{' '}
            within 48 hours of the estimated delivery date with your order number, the tracking code and clear photos of the packaging and the garment. Once we&apos;ve verified it, we&apos;ll send a replacement or issue a refund as described in our{' '}
            <Link to="/refund-policy" style={{ color: '#ffffff', textDecoration: 'underline' }}>
              Refund Policy
            </Link>
            .
          </p>

          <p style={{ paddingTop: '16px', borderTop: '1px solid #262626', color: '#a3a3a3' }}>
            Questions about shipping are answered by{' '}
            <a href="mailto:support@heavenlynova.com" style={{ color: '#ffffff', textDecoration: 'underline' }}>
              support@heavenlynova.com
            </a>
            , Monday to Friday, 09:00 to 18:00 EET. HeavenlyNova is operated by Sabie Tudor PFA.
          </p>
        </div>

        <div style={{ height: '1px', backgroundColor: '#262626', margin: '40px 0' }} />

        <p style={{ textAlign: 'center', opacity: 0.5, fontStyle: 'italic', fontSize: '0.85rem', letterSpacing: '0.2em' }} className="uppercase">
          Born from Light &amp; Shadow
        </p>
      </div>
    </main>
  )
}
