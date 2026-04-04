import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { orderNumber, fullName, email, reason, details, website } = req.body

  // Honeypot anti-spam
  if (website) {
    return res.status(200).json({ success: true })
  }

  if (!orderNumber || !fullName || !email || !reason || !details) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const transporter = nodemailer.createTransport({
    host: 'mail.privateemail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `"HeavenlyNova" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `[HVN RETURN REQUEST] Order ${orderNumber}`,
      html: `
        <div style="font-family: sans-serif; color: #111; padding: 24px;">
          <h2 style="text-transform: uppercase; letter-spacing: 0.1em;">Return Request — HeavenlyNova</h2>
          <p><strong>Order Number:</strong> ${orderNumber}</p>
          <p><strong>Full Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Reason:</strong> ${reason}</p>
          <hr />
          <p><strong>Details:</strong></p>
          <p style="white-space: pre-wrap;">${details}</p>
        </div>
      `,
    })
    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Mail error:', err)
    return res.status(500).json({ error: 'Failed to send return request' })
  }
}
