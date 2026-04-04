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
      <div className="legal-policy-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '120px 20px 40px', lineHeight: 1.6 }}>
        <h1 style={{ textTransform: 'uppercase', marginBottom: '10px' }}>Refund Policy</h1>
        <p><strong>Last updated:</strong> October 2, 2025</p>

        <div style={{ height: '1px', backgroundColor: '#333333', margin: '40px 0' }} />

        <h3 style={{ marginTop: '30px', textTransform: 'uppercase' }}>Overview</h3>
        <p>At HeavenlyNova, every piece is made to order — created individually for you once your order is placed. Because of this, our return policy is slightly different from traditional retail.</p>
        <p>That said, we stand behind the quality of every piece.</p>

        <div style={{ height: '1px', backgroundColor: '#333333', margin: '40px 0' }} />

        <h3 style={{ marginTop: '30px', textTransform: 'uppercase' }}>14-Day Return Window</h3>
        <p>You have <strong>14 days from the date of delivery</strong> to request a return.</p>

        <div style={{ height: '1px', backgroundColor: '#333333', margin: '40px 0' }} />

        <h3 style={{ marginTop: '30px', textTransform: 'uppercase' }}>Eligibility for Returns</h3>
        <p>To be eligible for a return, the item must be:</p>
        <ul style={{ marginLeft: '20px' }}>
          <li>unworn and unused</li>
          <li>in original condition</li>
          <li>with tags (if applicable)</li>
          <li>free of damage not caused by us</li>
        </ul>

        <div style={{ height: '1px', backgroundColor: '#333333', margin: '40px 0' }} />

        <h3 style={{ marginTop: '30px', textTransform: 'uppercase' }}>Important: Made-to-Order Policy</h3>
        <p>We <strong>do not accept returns or refunds for:</strong></p>
        <ul style={{ marginLeft: '20px' }}>
          <li>wrong size selected by the customer</li>
          <li>change of mind after purchase</li>
          <li>minor color differences (screen vs. real product)</li>
        </ul>

        <div style={{ height: '1px', backgroundColor: '#333333', margin: '40px 0' }} />

        <h3 style={{ marginTop: '30px', textTransform: 'uppercase' }}>Damaged, Defective, or Incorrect Items</h3>
        <p>If your item arrives damaged, defective, or incorrect, contact us within <strong>48 hours of delivery</strong>.</p>

        <div style={{ height: '1px', backgroundColor: '#333333', margin: '40px 0' }} />

        <h3 style={{ marginTop: '30px', textTransform: 'uppercase' }}>Refund Process</h3>
        <p>Once your return is received and inspected, if approved, your refund will be issued to your original payment method. Please allow <strong>5–10 business days</strong> for processing.</p>

        <div style={{ height: '1px', backgroundColor: '#333333', margin: '40px 0' }} />

        <h3 style={{ marginTop: '30px', textTransform: 'uppercase' }}>Order Cancellations</h3>
        <p>Orders can only be cancelled <strong>within a short window after purchase</strong>. Once production has started, cancellation is no longer possible.</p>

        <div style={{ height: '1px', backgroundColor: '#333333', margin: '40px 0' }} />

        {/* INITIATE RETURN FORM */}
        <p className="text-xs tracking-[0.3em] uppercase" style={{ opacity: 0.6, marginBottom: '12px' }}>Initiate Return</p>
        <h2 className="text-2xl font-light tracking-wide uppercase" style={{ marginBottom: '40px' }}>Return Request</h2>

        {!sent ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Honeypot */}
            <input type="text" name="website" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

            <input type="text" placeholder="Order Number" required value={form.orderNumber} onChange={(e) => setForm({ ...form, orderNumber: e.target.value })}
              className="w-full bg-transparent border-b border-white/20 py-3 outline-none placeholder:opacity-40 text-sm tracking-wide" />

            <input type="text" placeholder="Full Name" required value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })}
              className="w-full bg-transparent border-b border-white/20 py-3 outline-none placeholder:opacity-40 text-sm tracking-wide" />

            <input type="email" placeholder="Email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-transparent border-b border-white/20 py-3 outline-none placeholder:opacity-40 text-sm tracking-wide" />

            <select required value={form.reason} onChange={(e) => setForm({ ...form, reason: e.target.value })}
              className="w-full bg-black border-b border-white/20 py-3 outline-none text-sm tracking-wide" style={{ opacity: 0.8 }}>
              <option value="">Reason</option>
              <option>Damaged item</option>
              <option>Wrong item received</option>
              <option>Defective print</option>
              <option>Other</option>
            </select>

            <textarea placeholder="Details" required rows={4} value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })}
              className="w-full bg-transparent border-b border-white/20 py-3 outline-none placeholder:opacity-40 text-sm tracking-wide resize-none" />

            {error && <p className="text-xs tracking-widest uppercase" style={{ color: '#ff4444' }}>{error}</p>}

            <button type="submit" disabled={loading}
              className="border border-white px-8 py-3 text-sm tracking-wider hover:bg-white hover:text-black transition"
              style={{ opacity: loading ? 0.5 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}>
              {loading ? 'Transmitting...' : 'Transmit Request'}
            </button>
          </form>
        ) : (
          <div style={{ paddingTop: '20px' }}>
            <p className="text-xs tracking-[0.3em] uppercase" style={{ opacity: 0.6, marginBottom: '12px' }}>Request Received</p>
            <h2 className="text-2xl font-light tracking-wide uppercase" style={{ marginBottom: '12px' }}>Return Request Received.</h2>
            <p className="text-sm tracking-widest uppercase" style={{ opacity: 0.6 }}>Our team will review your case within 24–48 hours.</p>
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
