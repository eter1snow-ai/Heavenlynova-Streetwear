import { useState } from 'react'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

export default function Returns() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

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
    <main className="bg-black text-white min-h-screen px-6 md:px-16" style={{ paddingTop: '120px', paddingBottom: '80px' }}>

      {/* Header */}
      <section className="max-w-3xl">
        <p className="text-xs tracking-[0.3em] opacity-60 mb-4 uppercase">Return / Refund Policy</p>
        <h1 className="text-3xl md:text-5xl font-light tracking-wide mb-6 uppercase">Return Process</h1>
        <p className="text-sm opacity-60 mb-12">Last updated: October 2, 2025</p>
      </section>

      {/* Policy */}
      <section className="max-w-3xl space-y-10 text-sm leading-relaxed opacity-80">
        <p>
          At HeavenlyNova, each piece is created on demand — individually produced once your order is placed.
          Because of this, our return process differs from traditional retail.
          However, we stand behind the quality of every piece.
        </p>
        <div>
          <h2 className="uppercase tracking-wider mb-2">14-Day Return Window</h2>
          <p>You have 14 days from the date of delivery to request a return.</p>
        </div>
        <div>
          <h2 className="uppercase tracking-wider mb-2">Eligibility</h2>
          <p>Items must be unworn, unused, in original condition, and free of damage not caused by us.</p>
        </div>
        <div>
          <h2 className="uppercase tracking-wider mb-2">Made-to-Order Policy</h2>
          <p>We do not accept returns for incorrect size selection, change of mind, or minor color differences between screen and real product.</p>
        </div>
        <div>
          <h2 className="uppercase tracking-wider mb-2">Damaged / Defective Items</h2>
          <p>If your item arrives damaged, defective, or incorrect, contact us within 48 hours.</p>
        </div>
      </section>

      {/* Form */}
      <section className="max-w-3xl mt-24">
        <p className="text-xs tracking-[0.3em] opacity-60 mb-4 uppercase">Initiate Return</p>
        <h2 className="text-2xl md:text-3xl font-light mb-10 uppercase">Return Request</h2>

        {!sent ? (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Honeypot */}
            <input type="text" name="website" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

            <input type="text" placeholder="Order Number" required value={form.orderNumber} onChange={(e) => setForm({ ...form, orderNumber: e.target.value })}
              className="w-full bg-transparent border-b border-white/20 py-3 outline-none placeholder:opacity-40 text-sm tracking-wide" />

            <input type="text" placeholder="Full Name" required value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })}
              className="w-full bg-transparent border-b border-white/20 py-3 outline-none placeholder:opacity-40 text-sm tracking-wide" />

            <input type="email" placeholder="Email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-transparent border-b border-white/20 py-3 outline-none placeholder:opacity-40 text-sm tracking-wide" />

            <select required value={form.reason} onChange={(e) => setForm({ ...form, reason: e.target.value })}
              className="w-full bg-black border-b border-white/20 py-3 outline-none text-sm tracking-wide opacity-80">
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
              className="mt-6 border border-white px-8 py-3 text-sm tracking-wider hover:bg-white hover:text-black transition"
              style={{ opacity: loading ? 0.5 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}>
              {loading ? 'Transmitting...' : 'Transmit Request'}
            </button>
          </motion.form>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            <p className="text-xs tracking-[0.3em] opacity-60 mb-4 uppercase">Request Received</p>
            <h2 className="text-2xl font-light tracking-wide uppercase mb-4">Return Request Received.</h2>
            <p className="text-sm opacity-60 tracking-widest uppercase">Our team will review your case within 24–48 hours.</p>
          </motion.div>
        )}

        <p className="text-xs opacity-50 mt-8">For general inquiries: contact@heavenlynova.com</p>
      </section>

    </main>
  )
}
