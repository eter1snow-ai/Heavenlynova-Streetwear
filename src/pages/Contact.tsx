import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Contact() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.email || !form.message) return
    setSent(true)
  }

  return (
    <main className="bg-black text-white min-h-screen">

      {/* Hero */}
      <section className="mx-auto max-w-[1300px] px-6 lg:px-12" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeOut' }}>
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.45em', color: '#888888', lineHeight: 1.6 }} className="uppercase mb-5">
            Chapter /000 — Contact Us
          </p>
          <h1 style={{ fontSize: 'clamp(2.4rem, 6vw, 5rem)', fontWeight: 500, letterSpacing: '0.08em', lineHeight: 1.2, color: '#E6E6E6' }} className="uppercase mb-6">
            Reach the<br />Keepers
          </h1>
          <p style={{ fontSize: '0.85rem', letterSpacing: '0.2em', lineHeight: 1.9, color: '#888888', maxWidth: '480px' }} className="uppercase">
            Every message enters our orbit.<br />
            We answer with intention, not haste.
          </p>
        </motion.div>
      </section>

      <div className="border-t border-white/5" />

      {/* Main Grid */}
      <section className="mx-auto max-w-[1300px] px-6 lg:px-12" style={{ paddingTop: '80px', paddingBottom: '100px' }}>
        <div className="grid gap-20 lg:grid-cols-[1.2fr_0.8fr]">

          {/* Form */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
            {!sent ? (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                {[
                  { key: 'name', label: 'Your Name', placeholder: 'Enter your name', type: 'text' },
                  { key: 'email', label: 'Your Email', placeholder: 'Enter your coordinates', type: 'email' },
                ].map((field) => (
                  <div key={field.key} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <label style={{ fontSize: '0.65rem', letterSpacing: '0.4em', color: '#888888', lineHeight: 1.6 }} className="uppercase">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.key as 'name' | 'email']}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      style={{ background: 'transparent', borderBottom: '1px solid #2A2A2A', color: '#E6E6E6', fontSize: '0.85rem', letterSpacing: '0.15em', lineHeight: 1.6, padding: '12px 0', outline: 'none', borderRadius: 0 }}
                      className="placeholder:text-white/20 focus:border-b focus:border-white/40 transition-colors"
                    />
                  </div>
                ))}

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <label style={{ fontSize: '0.65rem', letterSpacing: '0.4em', color: '#888888', lineHeight: 1.6 }} className="uppercase">
                    Your Message
                  </label>
                  <textarea
                    placeholder="Speak your truth…"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ background: 'transparent', borderBottom: '1px solid #2A2A2A', color: '#E6E6E6', fontSize: '0.85rem', letterSpacing: '0.15em', lineHeight: 1.8, padding: '12px 0', outline: 'none', resize: 'none', borderRadius: 0 }}
                    className="placeholder:text-white/20 focus:border-b focus:border-white/40 transition-colors"
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <button
                    type="submit"
                    style={{ alignSelf: 'flex-start', border: '1px solid rgba(255,255,255,0.25)', background: 'transparent', color: '#E6E6E6', fontSize: '0.7rem', letterSpacing: '0.35em', padding: '14px 40px', borderRadius: 0, cursor: 'pointer' }}
                    className="uppercase hover:bg-white hover:text-black transition-colors"
                  >
                    Transmit
                  </button>
                  <p style={{ fontSize: '0.65rem', letterSpacing: '0.25em', lineHeight: 1.6, color: '#555555' }} className="uppercase">
                    Your message remains in the shadows. We respect your privacy.
                  </p>
                </div>
              </form>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} style={{ paddingTop: '40px' }}>
                <p style={{ fontSize: '0.65rem', letterSpacing: '0.4em', color: '#888888' }} className="uppercase mb-4">Transmission received</p>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 400, letterSpacing: '0.1em', lineHeight: 1.4, color: '#E6E6E6' }} className="uppercase mb-4">
                  Your message<br />entered the orbit.
                </h2>
                <p style={{ fontSize: '0.78rem', letterSpacing: '0.2em', lineHeight: 1.8, color: '#888888' }} className="uppercase">
                  We move with precision, not haste.<br />Response within 24–48 hours.
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Right Column */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>

            {/* Direct Contact */}
            {[
              { label: 'Support Channel', email: 'support@heavenlynova.com', desc: 'For orders, returns, or assistance.' },
              { label: 'Brand Inquiries', email: 'contact@heavenlynova.com', desc: 'For collaborations, press, or cosmic alignments.' },
            ].map((item) => (
              <div key={item.label} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <p style={{ fontSize: '0.65rem', letterSpacing: '0.4em', color: '#888888', lineHeight: 1.6 }} className="uppercase">{item.label}</p>
                <a href={`mailto:${item.email}`} style={{ fontSize: '0.85rem', letterSpacing: '0.15em', lineHeight: 1.6, color: '#C2C2C2' }}
                  className="uppercase hover:text-white transition-colors">{item.email}</a>
                <p style={{ fontSize: '0.75rem', letterSpacing: '0.15em', lineHeight: 1.7, color: '#555555' }} className="uppercase">{item.desc}</p>
              </div>
            ))}

            {/* Response Time */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p style={{ fontSize: '0.65rem', letterSpacing: '0.4em', color: '#888888', lineHeight: 1.6 }} className="uppercase">Response Window</p>
              <p style={{ fontSize: '0.85rem', letterSpacing: '0.15em', lineHeight: 1.6, color: '#C2C2C2' }} className="uppercase">24–48 hours.</p>
              <p style={{ fontSize: '0.75rem', letterSpacing: '0.15em', lineHeight: 1.7, color: '#555555' }} className="uppercase">We move with precision, not urgency.</p>
            </div>

            {/* Location */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p style={{ fontSize: '0.65rem', letterSpacing: '0.4em', color: '#888888', lineHeight: 1.6 }} className="uppercase">Location</p>
              <p style={{ fontSize: '0.78rem', letterSpacing: '0.15em', lineHeight: 1.8, color: '#555555' }} className="uppercase">
                HeavenlyNova operates between<br />Light & Shadow.<br />
                Our studio moves. Our presence remains.<br />
                We exist where creation demands us.
              </p>
            </div>

          </motion.div>
        </div>
      </section>

    </main>
  )
}
