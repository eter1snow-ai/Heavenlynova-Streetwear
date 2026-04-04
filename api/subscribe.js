import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email, type, website } = req.body

  if (website) return res.status(200).json({ success: true })
  if (!email) return res.status(400).json({ error: 'Email required' })

  const transporter = nodemailer.createTransport({
    host: 'mail.privateemail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const subject = type === 'join'
    ? `[HVN JOIN] Inner Circle Request: ${email}`
    : `[HVN NEWSLETTER] New Subscriber: ${email}`

  try {
    await transporter.sendMail({
      from: `"HeavenlyNova" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject,
      html: `<div style="font-family:sans-serif;padding:24px;color:#111">
        <h2 style="text-transform:uppercase;letter-spacing:0.1em">${type === 'join' ? 'Join Request' : 'Newsletter Subscriber'} — HeavenlyNova</h2>
        <p><strong>Email:</strong> ${email}</p>
      </div>`,
    })
    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Mail error:', err)
    return res.status(500).json({ error: 'Failed to send' })
  }
}
