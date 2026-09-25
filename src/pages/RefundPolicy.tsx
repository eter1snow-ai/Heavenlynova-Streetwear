import { useState } from 'react'

export default function RefundPolicy() {
  const [form, setForm] = useState({ orderNumber: '', fullName: '', email: '', reason: '', details: '', website: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/returns', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSent(true)
      } else {
        setError('Something went wrong. Try again.')
      }
    } catch {
      setError('Something went wrong. Try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="legal-policy-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '120px 20px 60px', lineHeight: 1.7, overflowX: 'hidden' }}>
        <h1 style={{ textTransform: 'uppercase', marginBottom: '10px', fontSize: '2rem', letterSpacing: '0.08em', fontWeight: '500' }}>
          Refund &amp; Return Policy
        </h1>
        <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>
          <strong>Last updated:</strong> March 2026
        </p>

        <div style={{ height: '1px', backgroundColor: '#333333', margin: '35px 0' }} />

        {/* 1. OVERVIEW & PHILOSOPHY */}
        <h3 style={{ marginTop: '30px', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '1.1rem' }}>
          1. Overview &amp; Made-to-Order Model
        </h3>
        <p>
          At HeavenlyNova, every artifact is <strong>made to order</strong> — individually printed, precision-cured, and tailored once your payment is confirmed. By operating without bulk pre-warehousing, we reduce environmental waste and ensure meticulous quality control on every heavyweight textile.
        </p>
        <p style={{ marginTop: '10px' }}>
          Because every piece is manufactured custom for the buyer, our cancellation and return procedures adhere strictly to international e-commerce regulations and European consumer protection directives.
        </p>

        <div style={{ height: '1px', backgroundColor: '#333333', margin: '35px 0' }} />

        {/* 2. STATUTORY CONFORMITY & DEFECTIVE GOODS */}
        <h3 style={{ marginTop: '30px', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '1.1rem' }}>
          2. Quality Guarantee &amp; Defective Items (100% Covered)
        </h3>
        <p>
          We stand unconditionally behind the physical construction and finish of our garments. In accordance with statutory legal conformity directives (EU Directive 2019/771, UK Consumer Rights Act 2015, and applicable US consumer laws):
        </p>
        <ul style={{ marginLeft: '24px', listStyleType: 'disc', marginTop: '10px', lineHeight: 1.8 }}>
          <li>
            <strong>Covered Issues:</strong> Manufacturing defects in stitching or fabric, misprinted designs, incorrect colorway/size sent by error, or garments damaged during transit.
          </li>
          <li>
            <strong>Resolution:</strong> If your order qualifies, HeavenlyNova provides an <strong>immediate complimentary reprint and expedited reshipment</strong> at zero cost to you, or a <strong>full refund</strong> to your original payment method.
          </li>
          <li>
            <strong>Reporting Window:</strong> Please inspect your parcel upon delivery and notify our team within <strong>48–72 hours of receipt</strong> by submitting the Return Request form below or emailing <a href="mailto:support@heavenlynova.com" style={{ color: '#ffffff', textDecoration: 'underline' }}>support@heavenlynova.com</a> with photographs of the defect and your order number.
          </li>
        </ul>

        <div style={{ height: '1px', backgroundColor: '#333333', margin: '35px 0' }} />

        {/* 3. MADE-TO-ORDER & SIZING CONSIDERATIONS */}
        <h3 style={{ marginTop: '30px', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '1.1rem' }}>
          3. Made-to-Order Specifications &amp; Sizing Notice
        </h3>
        <p>
          In accordance with <strong>Article 16(c) of EU Directive 2011/83/EU</strong> on Consumer Rights and comparable international commercial statutes, the statutory right of withdrawal does not apply to contracts for the supply of goods made to the consumer&apos;s specifications or clearly personalized.
        </p>
        <p style={{ marginTop: '10px' }}>
          Consequently, once production has begun, we cannot accept returns, size exchanges, or offer refunds for:
        </p>
        <ul style={{ marginLeft: '24px', listStyleType: 'disc', marginTop: '10px', lineHeight: 1.8 }}>
          <li>Incorrect size selection chosen by the buyer (we provide detailed interactive size guides with chest width and length measurements on all product pages).</li>
          <li>Subjective change of mind or buyer&apos;s remorse following successful production.</li>
          <li>Subtle color variations caused by different display calibrators (monitors/phones vs. calibrated CMYK garment inks).</li>
        </ul>

        <div style={{ height: '1px', backgroundColor: '#333333', margin: '35px 0' }} />

        {/* 4. CANCELLATION WINDOW */}
        <h3 style={{ marginTop: '30px', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '1.1rem' }}>
          4. Order Modification &amp; Cancellation Window
        </h3>
        <p>
          Because our automated fulfillment pipeline immediately schedules orders for manufacturing, modifications (such as updating shipping address or size) or cancellations must be requested within <strong>2 hours of order placement</strong>.
        </p>
        <p style={{ marginTop: '10px' }}>
          Once an order has entered the printing or stitching queue, it cannot be canceled or intercepted in transit.
        </p>

        <div style={{ height: '1px', backgroundColor: '#333333', margin: '35px 0' }} />

        {/* 5. REFUND TIMELINE */}
        <h3 style={{ marginTop: '30px', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '1.1rem' }}>
          5. Refund Processing Timelines
        </h3>
        <p>
          Once a replacement or refund claim is verified by our customer care team:
        </p>
        <ul style={{ marginLeft: '24px', listStyleType: 'disc', marginTop: '10px', lineHeight: 1.8 }}>
          <li>Refunds are initiated immediately via our secure payment gateway (<strong>Stripe</strong>).</li>
          <li>Funds typically reflect back in your original bank account or card balance within <strong>5–10 business days</strong>, depending on your financial institution&apos;s processing cycles.</li>
          <li>Original delivery charges (if applicable for non-standard expedited services) are refunded for justified defective claims.</li>
        </ul>

        <div style={{ height: '1px', backgroundColor: '#333333', margin: '35px 0' }} />

        {/* SEPARATOR + TRANSITION TEXT */}
        <div style={{ margin: '60px 0 48px', textAlign: 'center' }}>
          <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.1)', marginBottom: '32px' }} />
          <p className="text-xs uppercase tracking-[0.4em]" style={{ opacity: 0.4 }}>Direct Claims Protocol</p>
          <p className="text-xs uppercase tracking-[0.3em]" style={{ opacity: 0.2, marginTop: '8px' }}>Official Return Request</p>
          <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.1)', marginTop: '32px' }} />
        </div>

        {/* INITIATE RETURN FORM */}
        <p className="text-xs tracking-[0.3em] uppercase" style={{ opacity: 0.6, marginBottom: '12px' }}>Resolution Center</p>
        <h2 className="text-2xl font-light tracking-wide uppercase" style={{ marginBottom: '40px' }}>Submit Return / Replacement Claim</h2>

        {!sent ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Honeypot */}
            <input type="text" name="website" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

            <input type="text" placeholder="Order Number (e.g., #HN-1042)" required value={form.orderNumber} onChange={(e) => setForm({ ...form, orderNumber: e.target.value })}
              className="w-full bg-transparent border-b border-white/20 py-3 outline-none placeholder:opacity-40 text-sm tracking-wide focus:border-white transition" />

            <input type="text" placeholder="Full Name" required value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })}
              className="w-full bg-transparent border-b border-white/20 py-3 outline-none placeholder:opacity-40 text-sm tracking-wide focus:border-white transition" />

            <input type="email" placeholder="Email Address Used at Checkout" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-transparent border-b border-white/20 py-3 outline-none placeholder:opacity-40 text-sm tracking-wide focus:border-white transition" />

            <select required value={form.reason} onChange={(e) => setForm({ ...form, reason: e.target.value })}
              className="w-full bg-black border-b border-white/20 py-3 outline-none text-sm tracking-wide focus:border-white transition" style={{ opacity: 0.8 }}>
              <option value="">Reason for Claim</option>
              <option>Damaged in transit</option>
              <option>Defective fabric or construction</option>
              <option>Misprinted or incorrect design</option>
              <option>Wrong item or variant received</option>
              <option>Other claim</option>
            </select>

            <textarea placeholder="Please describe the issue in detail. If the item is damaged or misprinted, our team will reply asking for photo proof." required rows={4} value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })}
              className="w-full bg-transparent border-b border-white/20 py-3 outline-none placeholder:opacity-40 text-sm tracking-wide resize-none focus:border-white transition" />

            {error && <p className="text-xs tracking-widest uppercase" style={{ color: '#ff4444' }}>{error}</p>}

            <button type="submit" disabled={loading}
              className="border border-white px-8 py-3 text-sm tracking-wider hover:bg-white hover:text-black transition"
              style={{ opacity: loading ? 0.5 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}>
              {loading ? 'Transmitting Request...' : 'Transmit Return Claim'}
            </button>
          </form>
        ) : (
          <div style={{ paddingTop: '20px', border: '1px solid rgba(255,255,255,0.1)', padding: '24px' }}>
            <p className="text-xs tracking-[0.3em] uppercase" style={{ opacity: 0.6, marginBottom: '12px' }}>Transmission Confirmed</p>
            <h2 className="text-xl font-light tracking-wide uppercase" style={{ marginBottom: '12px' }}>Return Request Received.</h2>
            <p className="text-sm tracking-widest uppercase" style={{ opacity: 0.6 }}>Our support team will review your case and reply within 24–48 hours.</p>
          </div>
        )}

        <div style={{ height: '1px', backgroundColor: '#333333', margin: '40px 0' }} />

        <p style={{ marginTop: '40px', textAlign: 'center', opacity: 0.8, fontStyle: 'italic' }}>
          HeavenlyNova<br />
          Not Broken. Becoming.
        </p>
      </div>
    </main>
  )
}
